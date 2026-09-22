#!/usr/bin/env node
/**
 * 掃描構建產物裡的站內連結，任何指向不存在頁面的連結就失敗（2026-09-23 加）。
 *
 * 為什麼是掃 dist 而不是掃源碼：本次評審裡好幾個問題都是「源碼看起來對、產物是壞的」——
 * 繁中正文連結跳回英文、404 頁連到不存在的 /guides/、tdk-lint 只匹配字面量結果只檢查了 1 頁。
 * 源碼層的檢查抓不到這一類；渲染完的 HTML 才是讀者真正拿到的東西。
 *
 * 同時檢查：每個繁中頁的正文連結必須留在繁中站內（語言切換連結除外）。
 */
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const pages = [];
(function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (e.endsWith('.html')) pages.push(p);
  }
})(DIST);

const exists = (href) => {
  const clean = href.split('#')[0].split('?')[0];
  if (!clean.startsWith('/')) return true;
  const base = join(DIST, clean);
  return existsSync(base) || existsSync(join(base, 'index.html')) || existsSync(base.replace(/\/$/, '') + '.html');
};

const problems = [];
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const rel = file.replace(/^dist/, '') || '/';
  for (const m of html.matchAll(/<a\b[^>]*\shref="(\/[^"]*)"[^>]*>/g)) {
    const href = m[1];
    if (href.startsWith('//')) continue;
    if (!exists(href)) problems.push(`${rel} → ${href} 目標不存在`);
    // 繁中頁的正文連結不該回到英文站；帶 hreflang 的是語言切換，放行
    if (rel.startsWith('/zh/') && !href.startsWith('/zh/') && !/hreflang=/.test(m[0]) && href !== '/') {
      problems.push(`${rel} → ${href} 繁中頁連回英文站`);
    }
  }
}

if (problems.length) {
  console.error(`❌ 連結檢查：${problems.length} 個問題`);
  for (const p of problems.slice(0, 40)) console.error('  ' + p);
  if (problems.length > 40) console.error(`  …另有 ${problems.length - 40} 個`);
  process.exit(1);
}
console.log(`✅ 連結檢查通過：${pages.length} 個頁面，站內連結全部可達且語言一致`);

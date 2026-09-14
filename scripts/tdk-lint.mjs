#!/usr/bin/env node
// TDK 長度 lint（dayonefix 同款口徑：title ≤60、description ≤155，中文按 2 字元計）。
// 本站頁面是 .astro，meta 寫在 frontmatter 的 `const meta = { title: '…', description: '…' }`。
// 用法：node scripts/tdk-lint.mjs --all
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const LIM = { title: 60, description: 155 };
const len = (s) => [...s].reduce((n, ch) => n + (/[぀-ヿ㐀-鿿＀-￯]/.test(ch) ? 2 : 1), 0);
function walk(d, out = []) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(astro|md)$/.test(f)) out.push(p);
  }
  return out;
}
let bad = 0, n = 0;
for (const f of walk('src/pages')) {
  const s = readFileSync(f, 'utf8');
  const t = s.match(/title:\s*['"`](.+?)['"`]/); const d = s.match(/description:\s*['"`](.+?)['"`]/);
  if (!t && !d) continue;
  n++;
  const issues = [];
  const tl = t ? len(t[1]) : 0, dl = d ? len(d[1]) : 0;
  if (!t) issues.push('無 title');
  if (!d) issues.push('無 description');
  if (tl > LIM.title) issues.push(`title ${tl}>${LIM.title}`);
  if (dl > LIM.description) issues.push(`description ${dl}>${LIM.description}`);
  if (issues.length) { bad++; console.log(`⚠️  ${f}\n    ${issues.join(' / ')}`); }
}
if (!bad) console.log(`✅ ${n} 頁 TDK 長度全部達標`);
else { console.log(`\n${bad}/${n} 頁超長`); process.exit(1); }

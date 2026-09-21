#!/usr/bin/env node
/**
 * 把一個指南模組的 en 內容翻成繁中，寫回同一個檔案的 zh 鍵。
 *
 * 用法: node scripts/translate-guide.mjs src/content/guides/shape-pear.js [--dry]
 *
 * 讀取用 import()（模組裡有註解與未加引號的鍵，當 JSON parse 會炸掉 4 個檔），
 * 寫回用文字插入（保住檔案裡的註解，那些註解記著判斷依據，不能被序列化洗掉）。
 */
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';

const file = process.argv[2];
const dry = process.argv.includes('--dry');
if (!file) { console.error('用法: node scripts/translate-guide.mjs <檔案> [--dry]'); process.exit(2); }

const mod = (await import(resolve(file))).default;
if (!mod?.en) { console.error('沒有 en 內容'); process.exit(2); }
if (mod.zh) { console.error(`${file} 已經有 zh，跳過（要重翻先手動刪掉 zh 鍵）`); process.exit(0); }

const PROMPT = `Translate the JSON below from English into **Traditional Chinese (zh-Hant, Taiwan)**.

Return ONLY the translated JSON object. No markdown fence, no commentary, no explanation.

## Hard rules — a violation makes the output unusable

1. **Structure must be byte-identical.** Same keys, same nesting, same array lengths, same order.
   Only the human-readable string VALUES change. Never add, drop, reorder or rename a key.
2. **Never translate these proper nouns — keep the English exactly as written:**
   - The nine FFIT result names: Hourglass, Top Hourglass, Bottom Hourglass, Spoon, Triangle,
     Inverted Triangle, Rectangle, Diamond, Oval. These are published methodology terms and the
     page prints the rules next to them; a translated label would not match the literature.
   - FFIT, ANSUR II, NHANES, BMI, and any cited author name, journal name or institution.
3. **Common-name groupings DO use the native Traditional Chinese terms** that Taiwanese readers
   actually search: 梨形 (pear), 沙漏型 (hourglass), 蘋果型 (apple), 矩形 (rectangle),
   倒三角 (inverted triangle). Where the English says a shape is "grouped as pear on this site",
   write 梨形. Do not invent any other Chinese shape name.
4. **Every number, threshold, unit, percentage and date is copied verbatim.** 3.6 inches stays
   3.6 inches (write 3.6 吋), 1.193 stays 1.193, 34.7% stays 34.7%, 2026-09-15 stays 2026-09-15.
   Never round, convert or recompute anything.
5. **Internal links keep their href exactly as-is**, with no language prefix added. The routing
   layer handles prefixes; adding /zh/ here produces broken links.
6. **Keep the hedging.** Where the English says "some calculators", "this site's convention",
   "not a health assessment", the Chinese must carry the same qualification. Do not upgrade a
   hedged statement into a confident one.
7. Write natural Traditional Chinese for a Taiwanese reader — not Simplified, not translationese.
   Use 吋 for inches and 公分 for centimetres.

## JSON to translate

${JSON.stringify(mod.en, null, 1)}
`;

const tmp = mkdtempSync(join(tmpdir(), 'bst-tr-'));
const pf = join(tmp, 'prompt.txt'), of = join(tmp, 'out.txt');
writeFileSync(pf, PROMPT);
if (dry) { console.log(PROMPT.slice(0, 1200) + '\n…（--dry，未呼叫模型）'); process.exit(0); }

execFileSync(process.env.HOME + '/.local/bin/cx',
  [resolve('.'), pf, of, process.env.TRANSLATE_MODEL || 'gpt-5.6-terra'],
  { stdio: ['ignore', 'inherit', 'inherit'], timeout: 900_000, env: { ...process.env, CX_EFFORT: process.env.TRANSLATE_EFFORT || 'medium' } });

let out = readFileSync(of, 'utf8').trim();
out = out.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '').trim();
const first = out.indexOf('{'), last = out.lastIndexOf('}');
if (first < 0 || last < 0) { console.error('模型輸出裡找不到 JSON'); process.exit(1); }
const zh = JSON.parse(out.slice(first, last + 1));

// 結構核對：鍵集合與陣列長度必須與 en 完全一致
const walk = (a, b, path = '') => {
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) throw new Error(`${path}: en 是陣列，zh 不是`);
    if (a.length !== b.length) throw new Error(`${path}: 陣列長度 ${a.length} → ${b.length}`);
    a.forEach((v, i) => walk(v, b[i], `${path}[${i}]`));
  } else if (a && typeof a === 'object') {
    const ka = Object.keys(a), kb = Object.keys(b ?? {});
    const miss = ka.filter((k) => !kb.includes(k)), extra = kb.filter((k) => !ka.includes(k));
    if (miss.length || extra.length) throw new Error(`${path}: 缺 [${miss}] 多 [${extra}]`);
    ka.forEach((k) => walk(a[k], b[k], `${path}.${k}`));
  }
};
walk(mod.en, zh, '');

// 文字插入：在整個預設匯出物件的最後一個 } 前加上 zh
const src = readFileSync(file, 'utf8');
const close = src.lastIndexOf('}');
if (close < 0) throw new Error('找不到收尾的 }');
const block = ',\n "zh": ' + JSON.stringify(zh, null, 1).split('\n').map((l, i) => (i ? ' ' + l : l)).join('\n') + '\n';
writeFileSync(file, src.slice(0, close) + block + src.slice(close));
console.log(`✓ ${file} 已加入 zh（${JSON.stringify(zh).length} 字元）`);

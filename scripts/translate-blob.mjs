#!/usr/bin/env node
/** 把一個 JSON 檔翻成繁中，規矩與 translate-guide.mjs 完全一致（手寫頁用這個）。
 *  用法: node scripts/translate-blob.mjs <in.json> <out.json> */
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os'; import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
const [,, inf, outf] = process.argv;
if (!inf || !outf) { console.error('用法: node scripts/translate-blob.mjs <in.json> <out.json>'); process.exit(2); }
const en = JSON.parse(readFileSync(inf, 'utf8'));
const PROMPT = `Translate the JSON below from English into **Traditional Chinese (zh-Hant, Taiwan)**.

Return ONLY the translated JSON object. No markdown fence, no commentary.

## Hard rules — a violation makes the output unusable
1. **Structure byte-identical**: same keys, same nesting, same array lengths, same order. Only string VALUES change.
2. **Never translate these — keep the English exactly:** the nine FFIT result names
   (Hourglass, Top Hourglass, Bottom Hourglass, Spoon, Triangle, Inverted Triangle, Rectangle, Diamond, Oval),
   plus FFIT, ANSUR II, NHANES, BMI, and any author/journal/institution name (Simmons, Istook, Devarajan,
   Sokolowski, Bettencourt, North Carolina State University, calculator.net).
   In "rules_rows", column 0 is an FFIT result name — leave it in English.
3. **Common-name groupings use the native Traditional Chinese terms** Taiwanese readers search:
   梨形 (pear), 沙漏型 (hourglass), 蘋果型 (apple), 矩形 (rectangle), 倒三角 (inverted triangle).
   In "rules_rows", column 2 is the common-name grouping — translate that one.
   In "families", each first element is a family label — translate it to the native term.
   Do not invent any other Chinese shape name.
4. **Every number, threshold, unit, percentage and year copied verbatim**: 3.6 stays 3.6 (write 3.6 吋),
   1.193 stays 1.193, 34.7% stays 34.7%, 11,119 stays 11,119, 2004/2020 unchanged. Never round or recompute.
5. **Keep the hedging**: "some calculators", "this site's convention", "not a health assessment",
   "rough placement" must stay qualified. Never upgrade a hedged claim.
6. Natural Traditional Chinese for a Taiwanese reader — not Simplified, not translationese.
   Use 吋 for inches and 公分 for centimetres.

## JSON to translate
${JSON.stringify(en, null, 1)}
`;
const tmp = mkdtempSync(join(tmpdir(), 'bst-blob-'));
const pf = join(tmp, 'p.txt'), of = join(tmp, 'o.txt');
writeFileSync(pf, PROMPT);
execFileSync(process.env.HOME + '/.local/bin/cx', [resolve('.'), pf, of, process.env.TRANSLATE_MODEL || 'gpt-5.6-terra'],
  { stdio: ['ignore', 'inherit', 'inherit'], timeout: 900_000, env: { ...process.env, CX_EFFORT: process.env.TRANSLATE_EFFORT || 'medium' } });
let out = readFileSync(of, 'utf8').trim().replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '').trim();
const zh = JSON.parse(out.slice(out.indexOf('{'), out.lastIndexOf('}') + 1));
const walk = (a, b, p = '') => {
  if (Array.isArray(a)) { if (a.length !== b?.length) throw new Error(`${p}: 陣列長度 ${a.length} → ${b?.length}`); a.forEach((v, i) => walk(v, b[i], `${p}[${i}]`)); }
  else if (a && typeof a === 'object') {
    const ka = Object.keys(a), kb = Object.keys(b ?? {});
    const miss = ka.filter(k => !kb.includes(k)); if (miss.length) throw new Error(`${p}: 缺 [${miss}]`);
    ka.forEach(k => walk(a[k], b[k], `${p}.${k}`));
  }
};
walk(en, zh, '');
writeFileSync(outf, JSON.stringify(zh, null, 1));
console.log(`✓ ${outf}（${JSON.stringify(zh).length} 字元）`);

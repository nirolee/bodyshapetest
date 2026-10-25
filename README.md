# bodyshapetest.org

Body shape calculator built on the FFIT nine-shape rules (Simmons, Istook & Devarajan 2004; Sokolowski 2020 revision), with the rule that fired shown, a label-stability note (smallest single-measurement change that flips the label), and waist-to-hip percentiles from NHANES 2017–2023. Astro static site on Cloudflare Pages; everything runs client-side.

- Rules: `src/lib/body-shape.js` (tests in `tests/`), display names in `src/lib/shapes.js`
- Percentiles: `src/data/whr_percentiles.json` (NHANES BMX_J + BMX_L, adults 18+, unweighted)
- Pages: `src/content/guides/*.js` (each exports `{ path, en }`), tool pages under `src/pages/`
- Type check: `npm run check`; build: `npm run build`; test: `npm test`

Result-card content lives in `BodyCalculator.astro` (English/Traditional Chinese).
The order is shape → existing stability sentence + gauge → definition/visuals →
rule → NHANES percentile → meaning/cut suggestions → guide links → sharing.
`src/lib/shape-advice.js` supplies three or four cut suggestions for each of the
nine FFIT shapes, inferred from proportions rather than claimed study findings.
`src/data/shape-affiliates.js` has `SHAPE_AFFILIATES[en|zh][shape]` arrays of
`{ label, href, note }`; all are empty, so no affiliate markup appears. Approved
links only require data edits. Men's pages use the separate `RatioCalculator`
and retain their own content/events; the shared PNG renderer remains compatible.
PNG downloads reuse the full stability sentence below the shape name, wrap both
languages, and grow beyond 1080×1350 when needed to avoid clipping.

Custom GA events and allowed parameters are centralized in `src/lib/analytics.js`:

- `find_shape`: every female calculator submit, including validation failures;
  `has_high_hip` is a boolean for a supplied positive high-hip input.
- `result_shown`: once per rendered result (also restored share URLs), with FFIT
  `shape`, `stability` (`near`, `stable`, `rock_solid`) and `whr_bucket`
  (`p0_24`, `p25_49`, `p50_74`, `p75_100`). URL restoration does not emit `find_shape`.
- `needs_high_hip`: each calculation that requests the additional measurement.
- `share_copy`: successful copy; `share_download`: PNG download initiated.
  Neither sends a link, filename or measurement, and a download is not a receipt
  confirming that the user saved the file.

Unknown events/parameters are dropped, invalid enum values are rejected, and
missing or throwing gtag is ignored. The existing gtag loader/queue is reused;
no dependency, cookie or storage mechanism is added. `Analytics.astro` strips
query strings and hashes from GA's page location and referrer, including the
automatic page view, because shared result URLs contain measurements. Actual
GA4 delivery/report configuration must be checked in the property after release.

Do not change `body-shape.js` classification thresholds without updating the
methodology pages and stability explanation.

Browser verification uses `astro preview` and an external `playwright-core`
installation (no production dependency). Build first, then run preview in one
terminal:

```sh
npm run preview -- --host 127.0.0.1 --port 4321
```

In another terminal, point to your existing Playwright module and Chromium:

```sh
PLAYWRIGHT_MODULE=/path/to/playwright-core/index.mjs CHROME_PATH=/path/to/chrome node scripts/result-smoke.mjs
```

The smoke test blocks external requests and checks both languages, all nine
shapes, all stability states, event payloads, sanitized GA URLs, sharing, PNG
text bounds, mobile layout, compact guides, unavailable GA and men's/WHR
regressions. PNGs/screenshots go to `/tmp/bodyshape-results` by default.
Stop the preview with `fuser -k 4321/tcp`; do not kill by process-name matching.

Chinese measurement-path verification (same preview and external Playwright setup):

```sh
PLAYWRIGHT_MODULE=/path/to/playwright-core/index.mjs CHROME_PATH=/path/to/chrome node scripts/measurement-smoke.mjs
```

This blocks external requests and checks Chinese/English calculators and the
Chinese waist-to-hip tool at 320, 390 and 1280 px: validation, 45/220 cm input
limits, high-hip follow-up, repeated unit conversion and exact rule boundaries,
restored inch results, stale-result clearing, keyboard focus, header clearance,
and all five men's result-to-guide links. Synthetic screenshots and a JSON
summary go to `./measurement-evidence` (override with `RESULT_ARTIFACTS`). Unit
conversion preserves the original measurement precision until the user edits
that field; changing units clears the old result and requires recalculation.

## 本地类型检查

`npm ci` 后运行 `npm run check`。开发依赖固定为 `@astrojs/check@0.9.9` 与 `typescript@5.9.3`，与本轮基线诊断工具一致。表格仍要求三列；动态内容通过 `tableRow` 校验后构成元组，缺列、多列或非文字数据会让构建失败。没有关闭 strictNullChecks 或增加 any。

本轮浏览器回归沿用上面的两个 smoke 脚本；Windows 下外部模块使用 `file:///C:/.../index.mjs`，`CHROME_PATH` 使用本机现有 Chromium，产物目录用 `RESULT_ARTIFACTS` 指到当前工作目录，且全部外部请求会被拦截。

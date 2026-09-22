# bodyshapetest.org

Body shape calculator built on the FFIT nine-shape rules (Simmons, Istook & Devarajan 2004; Sokolowski 2020 revision), with the rule that fired shown, a label-stability note (smallest single-measurement change that flips the label), and waist-to-hip percentiles from NHANES 2017–2023. Astro static site on Cloudflare Pages; everything runs client-side.

- Rules: `src/lib/body-shape.js` (tests in `tests/`), display names in `src/lib/shapes.js`
- Percentiles: `src/data/whr_percentiles.json` (NHANES BMX_J + BMX_L, adults 18+, unweighted)
- Pages: `src/content/guides/*.js` (each exports `{ path, en }`), tool pages under `src/pages/`
- Build: `npm run build`; test: `npm test`

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

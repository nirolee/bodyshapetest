# bodyshapetest.org

Body shape calculator built on the FFIT nine-shape rules (Simmons, Istook & Devarajan 2004; Sokolowski 2020 revision), with the rule that fired shown, a label-stability note (smallest single-measurement change that flips the label), and waist-to-hip percentiles from NHANES 2017–2023. Astro static site on Cloudflare Pages; everything runs client-side.

- Rules: `src/lib/body-shape.js` (tests in `tests/`), display names in `src/lib/shapes.js`
- Percentiles: `src/data/whr_percentiles.json` (NHANES BMX_J + BMX_L, adults 18+, unweighted)
- Pages: `src/content/guides/*.js` (each exports `{ path, en }`), tool pages under `src/pages/`
- Build: `npm run build`; test: `npm test`

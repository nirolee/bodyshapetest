// Run against astro preview; see README for external playwright-core setup.
import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { classifyFemale, flipDistance, percentileOf } from '../src/lib/body-shape.js';
import { resultParams } from '../src/lib/analytics.js';
import pct from '../src/data/whr_percentiles.json' with { type: 'json' };
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright-core');
const base = process.env.PREVIEW_URL || 'http://127.0.0.1:4321';
const artifacts = process.env.RESULT_ARTIFACTS || '/tmp/bodyshape-results';
await mkdir(artifacts, { recursive: true });
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH, args: ['--no-sandbox'] });
const errors = [];
try {
  const ctx = await browser.newContext({ acceptDownloads: true, permissions: ['clipboard-read', 'clipboard-write'] });
  await ctx.route('**/*', route => new URL(route.request().url()).origin === base ? route.continue() : route.abort());
  await ctx.addInitScript(() => {
    window.canvasText = [];
    const fillRect = CanvasRenderingContext2D.prototype.fillRect;
    CanvasRenderingContext2D.prototype.fillRect = function (...args) {
      if (args[0] === 0 && args[1] === 0) window.canvasText = [];
      return fillRect.apply(this, args);
    };
    const fillText = CanvasRenderingContext2D.prototype.fillText;
    CanvasRenderingContext2D.prototype.fillText = function (text, x, y, ...rest) {
      window.canvasText.push({ text, x, y, width: this.measureText(text).width, height: this.canvas.height, canvasWidth: this.canvas.width });
      return fillText.call(this, text, x, y, ...rest);
    };
  });
  const page = await ctx.newPage();
  page.on('pageerror', error => errors.push(error.message));
  const events = () => page.evaluate(() => (window.dataLayer || []).map(x => Array.from(x)).filter(x => x[0] === 'event'));
  const submit = () => page.locator('.bsc form button[type=submit]').click();
  const fill = async input => { for (const [key, value] of Object.entries(input)) await page.locator(`input[name=${key}]`).fill(String(value)); };
  const cases = [
    { bust: 91, waist: 66, hips: 94 }, { bust: 105, waist: 70, hips: 95 },
    { bust: 91, waist: 79, hips: 105, highHip: 90 }, { bust: 91, waist: 79, hips: 105, highHip: 96 },
    { bust: 90, waist: 90, hips: 100 }, { bust: 110, waist: 90, hips: 100 },
    { bust: 100, waist: 80, hips: 100 }, { bust: 90, waist: 130, hips: 90 }, { bust: 110, waist: 105, hips: 100 },
  ];
  for (const lang of ['en', 'zh']) {
    const path = lang === 'zh' ? '/zh/' : '/';
    // Manual validation, missing-high-hip branch, then a successful submission.
    await page.goto(base + path, { waitUntil: 'networkidle' });
    await submit();
    assert.deepEqual(await events(), [['event', 'find_shape', { has_high_hip: false }]]);
    await fill({ bust: 91, waist: 79, hips: 105 }); await submit();
    assert.equal(await page.locator('.bsc-hh').isVisible(), true);
    assert.equal(await page.locator('.bsc-out').isVisible(), false);
    assert.equal((await events()).at(-1)[1], 'needs_high_hip');
    await fill({ highHip: 96 }); await submit();
    assert.deepEqual((await events()).slice(-2).map(x => x[1]), ['find_shape', 'result_shown']);
    assert.deepEqual((await events()).at(-2)[2], { has_high_hip: true });
    for (const input of cases) {
      const shape = classifyFemale(input);
      await page.goto(base + path + '?' + new URLSearchParams({ ...input, u: 'cm' }), { waitUntil: 'networkidle', referer: base + '/?bust=91&waist=66&hips=94' });
      await page.locator('.bsc-out:not([hidden]) .card').waitFor();
      assert.deepEqual(await events(), [['event', 'result_shown', resultParams(shape, flipDistance(input), percentileOf(input.waist / input.hips, pct.whr.female))]]);
      const safeUrls = await page.evaluate(() => Array.from(window.dataLayer.find(x => x[0] === 'set'))[1]);
      assert.deepEqual(safeUrls, { page_location: base + path, page_referrer: base + '/' });
      assert.equal(await page.locator('.bsc-out h3 + .rc-stability-hero').count(), 1);
      const count = await page.locator('.rc-advice > ul > li').count();
      assert.ok(count >= 3 && count <= 5);
      assert.equal(await page.locator('.rc-affiliates').count(), 0);
      const hero = await page.locator('.rc-stability-text').innerText();
      assert.match(hero, lang === 'zh' ? /穩定|接近分界/ : /Stable|Near a boundary/);
      assert.equal(await page.locator('.rc-stability-hero .rc-gauge').count(), flipDistance(input) ? 1 : 0);
      await page.locator('.rc-copy').click();
      const copied = await page.evaluate(() => navigator.clipboard.readText());
      assert.equal(new URL(copied).searchParams.get('waist'), String(input.waist));
      assert.equal((await events()).at(-1)[1], 'share_copy');
      const [download] = await Promise.all([page.waitForEvent('download'), page.locator('.rc-dl').click()]);
      await download.saveAs(`${artifacts}/${lang}-${shape}.png`);
      await page.waitForFunction(() => window.dataLayer.some(x => x[1] === 'share_download'));
      const drawn = await page.evaluate(() => window.canvasText);
      assert.ok(drawn.every(x => x.x + x.width <= x.canvasWidth - 60 && x.y < x.height), `Canvas overflow: ${lang}/${shape}`);
      const allText = drawn.map(x => x.text).join('').replace(/\s/g, '');
      assert.ok(allText.includes(hero.replace(/\s/g, '')), `Missing canvas hero: ${lang}/${shape}`);
      assert.ok(allText.indexOf(hero.replace(/\s/g, '')) < allText.indexOf(lang === 'zh' ? '觸發的規則' : 'Rulethatfired'));
      if (shape === 'triangle') {
        await page.setViewportSize({ width: 390, height: 844 });
        await page.locator('.bsc-out').screenshot({ path: `${artifacts}/${lang}-mobile.png` });
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Mobile overflow');
        await page.setViewportSize({ width: 1280, height: 900 });
      }
    }
    // GA absent or throwing must leave the calculator and downloads usable.
    for (const state of ['missing', 'throwing']) {
      await page.evaluate(state => { window.gtag = state === 'missing' ? undefined : () => { throw new Error('blocked'); }; }, state);
      await submit();
      assert.equal(await page.locator('.bsc-out').isVisible(), true);
      await Promise.all([page.waitForEvent('download'), page.locator('.rc-dl').click()]);
    }
    // Compact calculator inherits the guide language and uses the same content.
    await page.goto(base + path + 'shapes/pear/', { waitUntil: 'networkidle' });
    await fill({ bust: 90, waist: 90, hips: 100 }); await submit();
    assert.equal(await page.locator('.bsc').getAttribute('data-lang'), lang);
    assert.equal(await page.locator('.rc-advice').isVisible(), true);
    // Shared canvas renderer remains compatible with the independent men's UI.
    await page.goto(base + path + 'men/?chest=105&waist=88&hips=95', { waitUntil: 'networkidle' });
    assert.equal(await page.locator('.rc .bsc-out').isVisible(), true);
    await Promise.all([page.waitForEvent('download'), page.locator('.rc-dl').click()]);
    await page.goto(base + path + 'waist-to-hip-ratio/?waist=80&hips=100', { waitUntil: 'networkidle' });
    assert.equal(await page.locator('.rc .bsc-out h3').innerText(), '0.80');
  }
  assert.deepEqual(errors, []);
  console.log('Passed: bilingual nine-shape results, all stability states, events/URL privacy, share/download, mobile, unavailable GA, compact guides, men/WHR regressions.');
  console.log(`Screenshots and PNGs: ${artifacts}`);
} finally { await browser.close(); }

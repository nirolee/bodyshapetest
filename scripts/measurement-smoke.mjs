// Local preview only. External requests are blocked, including production analytics.
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { classifyFemale, classifyMale } from '../src/lib/body-shape.js';
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright-core');
const base = process.env.PREVIEW_URL || 'http://127.0.0.1:4321';
const artifacts = process.env.RESULT_ARTIFACTS || './measurement-evidence';
await mkdir(artifacts, { recursive: true });
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH });
const checks = [], errors = [], blocked = [];
try {
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  await context.route('**/*', route => {
    const url = new URL(route.request().url());
    if (url.origin === base) return route.continue();
    blocked.push(url.origin + url.pathname); return route.abort();
  });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  const fill = async values => { for (const [key, value] of Object.entries(values)) await page.locator(`input[name=${key}]`).fill(String(value)); };
  const submit = () => page.locator('.bsc form').evaluate(form => form.requestSubmit());
  const result = page.locator('.bsc-out');
  const toggle = unit => page.locator(`input[name=unit][value=${unit}]`).evaluate(el => el.click());
  for (const path of ['/zh/', '/zh/men/', '/', '/men/', '/zh/waist-to-hip-ratio/']) {
    const male = path.includes('/men/'), whr = path.includes('waist-to-hip');
    const names = whr ? ['waist', 'hips'] : [male ? 'chest' : 'bust', 'waist', 'hips'];
    const values = Object.fromEntries(names.map((name, i) => [name, [100, 80, 100][i]]));
    for (const width of [320, 390, 1280]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto(base + path, { waitUntil: 'networkidle' });
      await page.locator('.bsc button[type=submit]').click();
      assert(await page.locator('.bsc-err').isVisible());
      assert(await page.locator('input[aria-invalid=true]').count() > 0);
      await fill(values); await submit();
      assert(await result.isVisible());
      assert(await result.evaluate(el => document.activeElement === el));
      await page.waitForTimeout(100);
      assert(await result.evaluate(el => el.getBoundingClientRect().top >= document.querySelector('header.site').getBoundingClientRect().bottom), 'result heading below sticky navigation');
      const heading = await result.locator('h3').textContent();
      for (let i = 0; i < 5; i++) { await toggle('in'); await toggle('cm'); }
      await submit(); assert.equal(await result.locator('h3').textContent(), heading);
      for (const [name, value] of Object.entries(values)) assert.equal(Number(await page.locator(`input[name=${name}]`).inputValue()), value);
      await toggle('in'); await submit(); assert.equal(await result.locator('h3').textContent(), heading);
      await toggle('cm');
      for (const bad of ['', '0', '-1', '44.99', '220.01']) {
        await fill({ [names[0]]: bad });
        assert(!(await result.isVisible()), 'hide stale results while editing');
        await submit(); assert(await page.locator('.bsc-err').isVisible());
        assert.equal(await page.evaluate(() => document.activeElement.name), names[0]);
      }
      for (const edge of [45, 220]) {
        await fill(Object.fromEntries(names.map(name => [name, edge])));
        await toggle('in'); await submit(); assert(await result.isVisible());
        await toggle('cm'); await submit(); assert(await result.isVisible());
      }
      await fill(values); await submit();
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${path} ${width}: overflow`);
      if (path.startsWith('/zh/') && width === 390 && !whr) {
        await page.screenshot({ path: `${artifacts}/${male ? 'men' : 'female'}-result-mobile.png`, fullPage: true });
        await page.screenshot({ path: `${artifacts}/${male ? 'men' : 'female'}-result-viewport.png` });
        await page.locator('.measure-help summary').click();
        await page.screenshot({ path: `${artifacts}/${male ? 'men' : 'female'}-measure-mobile.png`, fullPage: true });
      }
      console.log(`${path} at ${width}px passed`);
      checks.push({ path, width, status: 'passed', cases: 'empty, invalid, limits, round-trip units, repeat, focus, overflow' });
    }
  }
  await page.goto(base + '/zh/');
  await fill({ bust: 91, waist: 79, hips: 105 }); await submit();
  assert(await page.locator('.bsc-hh').isVisible());
  for (const highHip of [0, -1, 44.9, 220.1]) {
    await fill({ highHip }); await submit();
    assert(await page.locator('.bsc-err').isVisible()); assert(!(await result.isVisible()));
    assert.equal(await page.evaluate(() => document.activeElement.name), 'highHip');
  }
  await fill({ highHip: 96 }); await submit(); assert(await result.isVisible());
  checks.push({ status: 'passed', cases: 'conditional high hip, invalid high hip, correction' });
  for (const [path, values, classify] of [
    ['/zh/', { bust: 32.3, waist: 23.3, hips: 32.3 }, classifyFemale],
    ['/zh/men/', { chest: 32.3, waist: 23.3, hips: 32.3 }, classifyMale],
  ]) {
    await page.goto(base + path); await toggle('in'); await fill(values); await submit();
    const heading = await result.locator('h3').textContent();
    for (let i = 0; i < 20; i++) { await toggle('cm'); await toggle('in'); }
    await submit(); assert.equal(await result.locator('h3').textContent(), heading);
    const expected = classify(Object.fromEntries(Object.entries(values).map(([k,v]) => [k,v*2.54])));
    checks.push({ path, status: 'passed', cases: 'exact 9 inch boundary, 20 round-trips', expected });
    await page.goto(base + path + '?' + new URLSearchParams({ ...Object.fromEntries(Object.entries(values).map(([k,v]) => [k,v*2.54])), u: 'in' }));
    await result.locator('h3').waitFor();
    await toggle('cm');
    assert(Math.abs(Number(await page.locator('input[name=waist]').inputValue()) - 59.182) < .00001);
    await submit(); assert.equal(await result.locator('h3').textContent(), heading);
    checks.push({ path, status: 'passed', cases: 'shared inch result restored, then cm switch' });
  }
  for (const [shape, chest, waist, hips] of [
    ['rectangle',100,80,100], ['triangle',90,75,105], ['oval',90,100,95],
    ['trapezoid',110,75,95], ['inverted-triangle',110,90,95],
  ]) {
    await page.goto(base + '/zh/men/'); await fill({chest,waist,hips}); await submit();
    const link = result.locator(`a[href='/zh/men/${shape}/']`);
    assert.equal(await link.count(),1); await link.click();
    assert.equal(new URL(page.url()).pathname, `/zh/men/${shape}/`);
    assert.equal((await page.request.get(page.url())).status(),200);
    checks.push({ status: 'passed', cases: 'male result to existing guide', shape });
  }
  assert.deepEqual(errors, []);
  await writeFile(`${artifacts}/summary.json`, JSON.stringify({checks, errors, blocked: [...new Set(blocked)]}, null, 2));
  console.log(`${checks.length} groups passed; no browser errors; external requests blocked.`);
} finally { await browser.close(); }

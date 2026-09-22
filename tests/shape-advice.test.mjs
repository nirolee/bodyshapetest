import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FEMALE_SHAPES } from '../src/lib/body-shape.js';
import { SHAPE_ADVICE, affiliateLinks } from '../src/lib/shape-advice.js';
import { SHAPE_AFFILIATES } from '../src/data/shape-affiliates.js';

test('every FFIT result has localized advice and an empty affiliate slot', () => {
  for (const lang of ['en', 'zh']) for (const shape of FEMALE_SHAPES) {
    const advice = SHAPE_ADVICE[lang][shape];
    assert.ok(advice.meaning);
    assert.ok(advice.cuts.length >= 3 && advice.cuts.length <= 5);
    assert.equal(affiliateLinks(SHAPE_AFFILIATES[lang][shape]), '');
  }
});
test('configured affiliate links escape text and reject executable URLs', () => {
  const html = affiliateLinks([
    { label: '<shirt>', href: 'https://example.com/?a=1&b=2', note: 'Cotton & linen' },
    { label: 'bad', href: 'javascript:alert(1)', note: '' },
  ]);
  assert.match(html, /rel="sponsored noopener"/);
  assert.match(html, /&lt;shirt&gt;/);
  assert.match(html, /a=1&amp;b=2/);
  assert.match(html, /Cotton &amp; linen/);
  assert.doesNotMatch(html, /javascript:|>bad</);
});

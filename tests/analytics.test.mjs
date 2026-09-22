import { test } from 'node:test';
import assert from 'node:assert/strict';
import { EVENTS, resultParams, track } from '../src/lib/analytics.js';

test('GA allowlist drops measurements, URLs and unrecognized events or enum values', () => {
  const calls = [];
  globalThis.window = { gtag: (...args) => calls.push(args) };
  try {
    track(EVENTS.findShape, { has_high_hip: true, bust: 91, highHip: 96 });
    track(EVENTS.resultShown, { ...resultParams('hourglass', { cm: 1.5 }, 37), waist: 66, url: '?hips=94' });
    track(EVENTS.shareCopy, { link: '?bust=91' });
    track('waist', { waist: 66 });
    track(EVENTS.resultShown, { shape: '91', stability: 'near', whr_bucket: '37' });
    track(EVENTS.findShape, { has_high_hip: 96 });
    assert.deepEqual(calls, [
      ['event', 'find_shape', { has_high_hip: true }],
      ['event', 'result_shown', { shape: 'hourglass', stability: 'near', whr_bucket: 'p25_49' }],
      ['event', 'share_copy', {}],
    ]);
  } finally { delete globalThis.window; }
});

test('GA missing, blocked or throwing never interrupts callers', () => {
  assert.doesNotThrow(() => track(EVENTS.needsHighHip));
  for (const gtag of [undefined, null, () => { throw new Error('blocked'); }]) {
    globalThis.window = { gtag };
    try { assert.doesNotThrow(() => track(EVENTS.shareDownload)); }
    finally { delete globalThis.window; }
  }
});

test('stability and percentile boundaries produce only coarse result parameters', () => {
  assert.equal(resultParams('oval', { cm: 2 }, 24).stability, 'near');
  assert.equal(resultParams('oval', { cm: 2.1 }, 25).stability, 'stable');
  assert.equal(resultParams('oval', null, 100).stability, 'rock_solid');
  for (const [p, bucket] of [[0, 'p0_24'], [24, 'p0_24'], [25, 'p25_49'], [49, 'p25_49'], [50, 'p50_74'], [74, 'p50_74'], [75, 'p75_100'], [100, 'p75_100']]) {
    assert.equal(resultParams('oval', null, p).whr_bucket, bucket);
  }
});

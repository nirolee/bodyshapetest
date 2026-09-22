import { FEMALE_SHAPES } from './body-shape.js';

// Only these events and parameters may reach GA. Never spread calculator input.
export const EVENTS = Object.freeze({
  findShape: 'find_shape', resultShown: 'result_shown',
  shareCopy: 'share_copy', shareDownload: 'share_download', needsHighHip: 'needs_high_hip',
});
const SCHEMA = {
  [EVENTS.findShape]: { has_high_hip: (v) => typeof v === 'boolean' },
  [EVENTS.resultShown]: {
    shape: (v) => FEMALE_SHAPES.includes(v),
    stability: (v) => ['near', 'stable', 'rock_solid'].includes(v),
    whr_bucket: (v) => ['p0_24', 'p25_49', 'p50_74', 'p75_100'].includes(v),
  },
  [EVENTS.shareCopy]: {}, [EVENTS.shareDownload]: {}, [EVENTS.needsHighHip]: {},
};
export function resultParams(shape, flip, percentile) {
  return {
    shape,
    stability: !flip ? 'rock_solid' : flip.cm <= 2 ? 'near' : 'stable',
    whr_bucket: percentile < 25 ? 'p0_24' : percentile < 50 ? 'p25_49' : percentile < 75 ? 'p50_74' : 'p75_100',
  };
}
export function track(event, values = {}) {
  try {
    if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
    if (!Object.hasOwn(SCHEMA, event)) return;
    const params = {};
    for (const [key, valid] of Object.entries(SCHEMA[event])) {
      if (!valid(values[key])) return;
      params[key] = values[key];
    }
    window.gtag('event', event, params);
  } catch { /* Analytics must never interrupt calculation or sharing. */ }
}

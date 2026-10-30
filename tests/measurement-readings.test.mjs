import test from 'node:test';
import assert from 'node:assert/strict';
import { summarizeReadings } from '../src/lib/measurement-readings.js';

test('three repeated readings return the middle value without mutating input', () => {
  const readings = [71.5, 69.8, 70];
  const result = summarizeReadings(readings);
  assert.equal(result.median, 70);
  assert.ok(Math.abs(result.range - 1.7) < 1e-9);
  assert.deepEqual(readings, [71.5, 69.8, 70]);
});

test('a missing, non-finite, non-positive or non-numeric reading is not converted into a measurement', () => {
  for (const readings of [[70, '', 71], [70, ' ', 71], [70, null, 71], [70, Infinity, 71], [70, 0, 71], [70, -1, 71], [70, 'unknown', 71], [70, 71]]) assert.equal(summarizeReadings(readings), null);
});

test('numeric text and repeated values remain valid without assuming a unit', () => {
  assert.deepEqual(summarizeReadings(['27.5', '27.5', '28']), { median: 27.5, range: 0.5 });
});

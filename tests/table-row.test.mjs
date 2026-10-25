import test from 'node:test';
import assert from 'node:assert/strict';
import { tableRow } from '../src/lib/table-row.js';

test('guide tables preserve three text cells, including an empty column', () => {
  assert.deepEqual(tableRow(['Type', 'Rule', '']), ['Type', 'Rule', '']);
});
test('guide tables reject malformed content at the data boundary', () => {
  for (const cells of [[], ['a', 'b'], ['a', 'b', 'c', 'd'], ['a', 2, 'c']]) {
    assert.throws(() => tableRow(cells), TypeError);
  }
});

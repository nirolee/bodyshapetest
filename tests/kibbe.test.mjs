import test from 'node:test';
import assert from 'node:assert/strict';
import { KIBBE, KIBBE_ZH, DIMENSIONS, QUESTIONS, OPTIONS, PROFILES, distributions, rankTypes, scoreQuiz } from '../src/lib/kibbe.js';

const referenceAnswers = (profile) => profile.join('').split('').map((letter) => OPTIONS.findIndex((o) => o.letter === letter));

test('all 13 historical identities are reachable and keep their English names', () => {
  assert.equal(Object.keys(KIBBE).length, 13);
  assert.deepEqual(Object.keys(KIBBE), Object.keys(KIBBE_ZH));
  for (const [key, profile] of Object.entries(PROFILES)) {
    assert.equal(profile.length, DIMENSIONS.length);
    profile.forEach((letters, i) => assert.equal(letters.length, DIMENSIONS[i].questions.length));
    const ranking = rankTypes(referenceAnswers(profile));
    assert.equal(ranking[0].key, key);
    assert.equal(ranking[0].distance, 0);
    assert.ok(ranking[1].distance > 0);
    assert.equal(KIBBE_ZH[key].name, undefined);
    assert.ok(KIBBE_ZH[key].def && KIBBE_ZH[key].composition && KIBBE_ZH[key].adjacent);
  }
});

test('five dimensions cover each of the 13 bilingual questions exactly once', () => {
  assert.equal(QUESTIONS.length, 13);
  assert.deepEqual(DIMENSIONS.flatMap((d) => d.questions), Array.from({ length: 13 }, (_, i) => i));
  for (const question of QUESTIONS) for (const lang of ['en', 'zh']) {
    assert.ok(question[lang]);
    assert.equal(question.options[lang].length, 5);
    assert.ok(question.options[lang].every(Boolean));
  }
});

test('rejects incomplete, sparse and invalid answers without coercing missing values to A', () => {
  for (const input of [null, [], Array(13), Array(13).fill(null), Array(13).fill('0'), Array(13).fill(NaN), Array(13).fill(0.5), Array(13).fill(-1), Array(13).fill(5)]) {
    assert.throws(() => scoreQuiz(input), RangeError);
  }
});

test('distances have equal dimension weights, rather than equal question weights', () => {
  const answers = Array(13).fill(2);
  answers[0] = 0; // Half of vertical differs: distance 50, contributing 10 overall.
  let classic = rankTypes(answers).find((r) => r.key === 'classic');
  assert.deepEqual(classic.parts, [50, 0, 0, 0, 0]);
  assert.equal(classic.distance, 10);
  answers[0] = 2; answers[2] = 0; // One third of bone structure differs.
  classic = rankTypes(answers).find((r) => r.key === 'classic');
  assert.ok(Math.abs(classic.distance - 100 / 15) < 1e-10);
});

test('yin/yang opposites do not cancel into a balanced category', () => {
  const answers = Array(13).fill(2); answers[0] = 0; answers[1] = 4;
  const vertical = distributions(answers)[0];
  assert.equal(vertical.yin, 0.5); assert.equal(vertical.yang, 0.5); assert.equal(vertical.balanced, 0);
  assert.equal(rankTypes(answers).find((r) => r.key === 'classic').parts[0], 100);
});

test('boundary notes exhaustively match independent single-question recalculations', () => {
  const fixtures = [...Object.values(PROFILES).map(referenceAnswers), Array(13).fill(2), [0, 4, 1, 3, 2, 4, 0, 3, 1, 2, 4, 0, 3]];
  let testedFlips = 0;
  for (const answers of fixtures) {
    const before = [...answers], result = scoreQuiz(answers), expected = [];
    answers.forEach((from, question) => {
      for (let to = 0; to < 5; to++) {
        if (to === from) continue;
        const changed = [...answers]; changed[question] = to;
        const ranking = rankTypes(changed);
        if (ranking[0].key !== result.winner.key) expected.push([question, from, to, ranking[0].key]);
      }
    });
    assert.deepEqual(result.flips.map((f) => [f.question, f.from, f.to, f.key]), expected);
    assert.deepEqual(result.adjacentFlips, result.flips.filter((f) => Math.abs(f.to - f.from) === 1));
    assert.deepEqual(answers, before);
    assert.equal(result.margin, result.runnerUp.distance - result.winner.distance);
    assert.ok(result.ranking.every((r) => r.distance >= 0 && r.distance <= 100));
    testedFlips += expected.length;
  }
  assert.ok(testedFlips > 0);
});

test('an exact tie is disclosed and uses reference row order deterministically', () => {
  const answers = Array(13).fill(2);
  answers[5] = 3; answers[11] = 3; // Midway between Classic and Soft Classic.
  const result = scoreQuiz(answers);
  assert.deepEqual(result.ties, ['classic', 'soft_classic']);
  assert.equal(result.winner.key, 'classic');
  assert.ok(Math.abs(result.margin) < 1e-9);
});

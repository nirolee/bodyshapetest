import { test } from 'node:test'; import assert from 'node:assert/strict';
import { classifyFemale, classifyMale, flipDistance, percentileOf, NEEDS_HIGH_HIP, isFallback } from '../src/lib/body-shape.js';
test('FFIT 2020 樣例：hourglass', () => assert.equal(classifyFemale({ bust: 91, waist: 66, hips: 94 }), 'hourglass'));
test('diamond：腰比胸臀都大', () => assert.equal(classifyFemale({ bust: 95, waist: 110, hips: 100 }), 'diamond'));
test('oval：腰比臀大比胸小', () => assert.equal(classifyFemale({ bust: 110, waist: 105, hips: 100 }), 'oval'));
test('強梨+細腰 沒高臀圍 → 要求補量', () => assert.equal(classifyFemale({ bust: 91, waist: 79, hips: 105 }), NEEDS_HIGH_HIP));
test('同一人給了高臀圍 → spoon 或 bottom_hourglass', () => {
  assert.equal(classifyFemale({ bust: 91, waist: 79, hips: 105, highHip: 96 }), 'spoon');       // 96/79=1.215
  assert.equal(classifyFemale({ bust: 91, waist: 79, hips: 105, highHip: 90 }), 'bottom_hourglass'); // 90/79=1.139
});
test('極端體型不回 null', () => { for (const x of [{bust:130,waist:70,hips:90},{bust:80,waist:70,hips:130},{bust:70,waist:120,hips:75}]) assert.ok(classifyFemale(x)); });
test('flipDistance 給出 cm 與圍度', () => { const f = flipDistance({ bust: 91, waist: 66, hips: 94 }); assert.ok(f && f.cm > 0 && ['bust','waist','hips'].includes(f.measure)); });
test('percentileOf 單調', () => { const t=[0.8,0.85,0.9,0.95]; assert.equal(percentileOf(0.7,t),0); assert.equal(percentileOf(0.9,t),3); assert.equal(percentileOf(1,t),4); });
test('男性五型都可達', () => {
  const got = new Set([{chest:105,waist:88,hips:95},{chest:110,waist:80,hips:95},{chest:95,waist:85,hips:95},{chest:90,waist:85,hips:102},{chest:95,waist:100,hips:96}].map(classifyMale));
  assert.deepEqual([...got].sort(), ['inverted_triangle','oval','rectangle','trapezoid','triangle']);
});
test('2020 Table 10 #3：臀胸差 2.95in、胸<腰≤臀 → triangle（第二分支獨立）', () => {
  // bust−hip −2.95, bust−waist −2.83, hip−waist 0.12（吋）；取 hips 40in
  const hips = 40 / (1/2.54), bust = (40 - 2.95) / (1/2.54), waist = bust + 2.83 / (1/2.54);
  assert.equal(classifyFemale({ bust, waist, hips }), 'triangle');
});
test('38/39/40 吋（胸<腰<臀，臀胸差 2）→ triangle 而非兜底', () => assert.equal(classifyFemale({ bust: 38/(1/2.54), waist: 39/(1/2.54), hips: 40/(1/2.54) }), 'triangle'));
test('49.5/40.5/40 吋：腰>臀 但先命中 top_hourglass（審稿反例）', () => assert.equal(classifyFemale({ bust: 49.5/(1/2.54), waist: 40.5/(1/2.54), hips: 40/(1/2.54) }), 'top_hourglass'));
test('isFallback', () => { assert.equal(isFallback({ bust: 50/(1/2.54), waist: 40/(1/2.54), hips: 40/(1/2.54) }), true); assert.equal(isFallback({ bust: 91, waist: 66, hips: 94 }), false); });

import { test } from 'node:test'; import assert from 'node:assert/strict';
import { classifyFemale, classifyMale, flipDistance, percentileOf, NEEDS_HIGH_HIP, isFallback, IN } from '../src/lib/body-shape.js';
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

/* ── 阈值邊界（2026-09-23 加）──────────────────────────────────
 * 評審實測：使用者用英吋輸入時，介面先換成公分、classifyFemale 再換回英吋，
 * 往返一次的浮點誤差讓「正好等於阈值」變成「差一點點」：
 * 32.3 / 23.3 / 32.3 英吋的胸腰差數學上正好 9，程式算出 8.999999999999996，
 * Hourglass 被判成 Rectangle。修法是比較時留 1e-9 英吋的容差（body-shape.js 的 EPS）。
 * 這組測試同時守住兩頭：正好等於阈值要命中，差一個真實可量的量不能命中。
 */
test('thresholds hit exactly at the boundary after an inch → cm → inch round trip', () => {
  const inch = (i) => i / IN; // 介面存的是公分
  // 胸腰差正好 9 吋 → Hourglass（不是 Rectangle）
  assert.equal(classifyFemale({ bust: inch(32.3), waist: inch(23.3), hips: inch(32.3) }), 'hourglass');
  // 男版同一個 9 吋阈值 → Trapezoid（不是 Rectangle）
  assert.equal(classifyMale({ chest: inch(32.3), waist: inch(23.3), hips: inch(32.3) }), 'trapezoid');
  // 臀腰差正好 10 吋也要命中 Hourglass 那條的第二個分支
  assert.equal(classifyFemale({ bust: inch(34), waist: inch(24), hips: inch(34) }), 'hourglass');
});

test('the epsilon is tight enough that a real measurable gap still misses', () => {
  const inch = (i) => i / IN;
  // 差 8.9 吋（比阈值少 0.1 吋 ≈ 2.5 mm，遠大於浮點噪音）→ 不該是 Hourglass
  assert.notEqual(classifyFemale({ bust: inch(32.2), waist: inch(23.3), hips: inch(32.2) }), 'hourglass');
  assert.notEqual(classifyMale({ chest: inch(32.2), waist: inch(23.3), hips: inch(32.2) }), 'trapezoid');
});

test('male Oval definition matches the rule it documents (waist ≥ chest OR waist ≥ hips)', async () => {
  const { MALE, MALE_ZH } = await import('../src/lib/shapes.js');
  const inch = (i) => i / IN;
  // 腰 ≥ 臀但腰 < 胸：規則判 Oval，所以說明不能寫成「腰大於臀『且』不大於胸」那種女版條件
  assert.equal(classifyMale({ chest: inch(40), waist: inch(38), hips: inch(37) }), 'oval');
  for (const def of [MALE.oval.def, MALE_ZH.oval.def]) {
    assert.ok(!/no larger than the bust|不大於胸圍/.test(def), `男版 Oval 說明仍寫著女版條件: ${def}`);
  }
});

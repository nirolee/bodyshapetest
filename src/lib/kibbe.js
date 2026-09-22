/** Historical 1987 names. Definitions paraphrase the yin/yang relationships, not quotations.
 * The questions, reference profiles and distance formula are this site's heuristic,
 * NOT Kibbe's published quiz, scoring key, or 2025 identification method.
 * 繁中只補說明；David Kibbe 已發表的十三型英文名一律保留。
 */
export const KIBBE = {
  dramatic: { name: 'Dramatic', def: 'Elongated, angular structure with predominantly sharp yang.', composition: 'Sharp yang', adjacent: 'Soft Dramatic adds pronounced softness; Flamboyant Natural has broader, blunter structure.' },
  soft_dramatic: { name: 'Soft Dramatic', def: 'Strong yang structure with a pronounced yin undercurrent.', composition: 'Yang frame + yin flesh', adjacent: 'Dramatic has less softness; Theatrical Romantic starts from a smaller, yin-dominant foundation.' },
  flamboyant_natural: { name: 'Flamboyant Natural', def: 'Blunt yang structure with added length and angularity.', composition: 'Blunt yang + sharp yang', adjacent: 'Natural has less elongation; Dramatic is narrower and sharper.' },
  natural: { name: 'Natural', def: 'Moderately angular structure with blunt rather than sharp edges.', composition: 'Blunt yang', adjacent: 'Flamboyant Natural adds length; Soft Natural adds rounded softness.' },
  soft_natural: { name: 'Soft Natural', def: 'Blunt yang structure softened by a yin undercurrent.', composition: 'Blunt yang + yin softness', adjacent: 'Natural has less softness; Romantic has a more delicate, rounded foundation.' },
  dramatic_classic: { name: 'Dramatic Classic', def: 'Balanced proportions with a slight yang influence.', composition: 'Balance + yang', adjacent: 'Classic stays balanced; Dramatic has stronger elongation and angularity.' },
  classic: { name: 'Classic', def: 'An even blend of yin and yang in moderate proportions.', composition: 'Blended yin and yang', adjacent: 'Dramatic Classic adds angularity; Soft Classic adds softness. Gamine combines contrasting extremes.' },
  soft_classic: { name: 'Soft Classic', def: 'Balanced proportions with a slight yin influence.', composition: 'Balance + yin', adjacent: 'Classic has less softness; Romantic has stronger roundness rather than a balanced foundation.' },
  flamboyant_gamine: { name: 'Flamboyant Gamine', def: 'Contrasting yin and yang with additional yang.', composition: 'Contrasting yin and yang + yang', adjacent: 'Gamine has less yang emphasis; Flamboyant Natural has a larger, broader framework.' },
  gamine: { name: 'Gamine', def: 'A juxtaposition of yin smallness and yang angularity.', composition: 'Contrasting yin and yang', adjacent: 'Classic blends moderate features; Flamboyant Gamine adds yang, Soft Gamine adds yin.' },
  soft_gamine: { name: 'Soft Gamine', def: 'Contrasting yin and yang with additional yin.', composition: 'Contrasting yin and yang + yin', adjacent: 'Gamine has less softness; Romantic has less contrasting angularity.' },
  theatrical_romantic: { name: 'Theatrical Romantic', def: 'A yin-dominant foundation with a slight sharp yang undercurrent.', composition: 'Yin + a little sharp yang', adjacent: 'Romantic has less sharpness; Soft Dramatic begins with a stronger, elongated yang frame.' },
  romantic: { name: 'Romantic', def: 'Rounded softness and delicate structure dominated by yin.', composition: 'Yin', adjacent: 'Theatrical Romantic adds sharpness; Soft Natural has a broader, blunter framework.' },
};
export const KIBBE_ZH = {
  dramatic: { def: '以修長、稜角分明的骨架與鮮明 yang 為主。', composition: '鮮明 yang', adjacent: 'Soft Dramatic 多了明顯柔軟感；Flamboyant Natural 的骨架較寬、邊緣較鈍。' },
  soft_dramatic: { def: '強烈的 yang 骨架，帶有明顯的 yin 柔軟感。', composition: 'yang 骨架＋yin 肌肉與脂肪輪廓', adjacent: 'Dramatic 的柔軟感較少；Theatrical Romantic 以較小巧、偏 yin 的骨架為基礎。' },
  flamboyant_natural: { def: '邊緣較鈍的 yang 骨架，再加上修長感與稜角。', composition: '鈍角 yang＋鮮明 yang', adjacent: 'Natural 的修長感較少；Dramatic 較窄、稜角較鮮明。' },
  natural: { def: '骨架帶適度稜角，邊緣偏鈍而非尖銳。', composition: '鈍角 yang', adjacent: 'Flamboyant Natural 增加修長感；Soft Natural 增加圓潤柔軟感。' },
  soft_natural: { def: '邊緣較鈍的 yang 骨架，帶有 yin 的柔軟感。', composition: '鈍角 yang＋yin 柔軟感', adjacent: 'Natural 的柔軟感較少；Romantic 的骨架較纖巧、圓潤。' },
  dramatic_classic: { def: '整體比例均衡，略帶 yang 的稜角感。', composition: '均衡＋yang', adjacent: 'Classic 維持均衡；Dramatic 的修長感與稜角更鮮明。' },
  classic: { def: 'yin 與 yang 均勻融合，整體比例適中。', composition: 'yin 與 yang 均勻融合', adjacent: 'Dramatic Classic 多了稜角；Soft Classic 多了柔軟感；Gamine 則是不同特徵之間的對比。' },
  soft_classic: { def: '整體比例均衡，略帶 yin 的柔軟感。', composition: '均衡＋yin', adjacent: 'Classic 的柔軟感較少；Romantic 的圓潤感更強，並非以均衡為基礎。' },
  flamboyant_gamine: { def: 'yin 與 yang 形成對比，再增加 yang 特徵。', composition: 'yin／yang 對比＋yang', adjacent: 'Gamine 的 yang 比重較少；Flamboyant Natural 的骨架較大、較寬。' },
  gamine: { def: 'yin 的小巧與 yang 的稜角並存，形成對比。', composition: 'yin 與 yang 對比並存', adjacent: 'Classic 是適中特徵的融合；Flamboyant Gamine 增加 yang，Soft Gamine 增加 yin。' },
  soft_gamine: { def: 'yin 與 yang 形成對比，再增加 yin 特徵。', composition: 'yin／yang 對比＋yin', adjacent: 'Gamine 的柔軟感較少；Romantic 的稜角對比較少。' },
  theatrical_romantic: { def: '以 yin 為主，帶少量鮮明的 yang 稜角。', composition: 'yin＋少量鮮明 yang', adjacent: 'Romantic 的稜角較少；Soft Dramatic 則以更強烈、修長的 yang 骨架為基礎。' },
  romantic: { def: '以 yin 的圓潤柔軟感與纖巧骨架為主。', composition: 'yin', adjacent: 'Theatrical Romantic 增加稜角；Soft Natural 的骨架較寬、邊緣較鈍。' },
};
export const DIMENSIONS = [
  { key: 'vertical', en: 'Vertical line', zh: '身高與縱向線條', questions: [0, 1] },
  { key: 'bones', en: 'Bone structure', zh: '身體骨架', questions: [2, 3, 4] },
  { key: 'flesh', en: 'Body flesh', zh: '肌肉與脂肪輪廓', questions: [5, 6, 7] },
  { key: 'facial_bones', en: 'Facial bones', zh: '臉部骨架', questions: [8, 9] },
  { key: 'facial_flesh', en: 'Facial flesh', zh: '臉部柔軟組織', questions: [10, 11, 12] },
];
export const OPTIONS = [
  { letter: 'A', value: 2, en: 'Sharp / elongated yang', zh: '鮮明／修長 yang' },
  { letter: 'B', value: 1, en: 'Blunt / broad yang', zh: '鈍角／寬闊 yang' },
  { letter: 'C', value: 0, en: 'Moderate / balanced', zh: '適中／均衡' },
  { letter: 'D', value: -1, en: 'Slight / delicate yin', zh: '輕微／纖巧 yin' },
  { letter: 'E', value: -2, en: 'Rounded / compact yin', zh: '圓潤／小巧 yin' },
];
// Original wording; choices run A → E. Height bins are site conventions, NOT Kibbe cut-offs.
export const QUESTIONS = [
  { en: 'How tall are you, barefoot?', zh: '赤腳站立時，你的身高是多少？',
    options: { en: ['175 cm or above (about 5 ft 9 in)', '168 cm to below 175 cm (about 5 ft 6–9 in)', '160 cm to below 168 cm (about 5 ft 3–6 in)', '153 cm to below 160 cm (about 5 ft 0–3 in)', 'Below 153 cm (about 5 ft 0 in)'], zh: ['175 公分以上', '168 至未滿 175 公分', '160 至未滿 168 公分', '153 至未滿 160 公分', '未滿 153 公分'] } },
  { en: 'Standing straight, how long are your legs compared with your torso?', zh: '自然站直時，腿部相對於軀幹的長度如何？',
    options: { en: ['Very long; the leg line dominates', 'Somewhat long', 'Neither long nor short', 'Somewhat short', 'Clearly short; the torso looks much longer'], zh: ['明顯修長，腿部線條最突出', '略長', '長短適中', '略短', '明顯較短，軀幹顯得長很多'] } },
  { en: 'With arms relaxed, what shape do the outer shoulder bones make?', zh: '手臂放鬆時，肩部外側的骨架輪廓如何？',
    options: { en: ['Narrow with distinct angular corners', 'Broad with square, blunt corners', 'Moderate width with neither sharp nor round corners', 'Narrow with gently sloping corners', 'Short, sloping and clearly rounded'], zh: ['偏窄，轉角鮮明', '偏寬，轉角方而鈍', '寬度適中，轉角不特別尖或圓', '偏窄，轉角緩緩下斜', '短而下斜，轉角明顯圓潤'] } },
  { en: 'Relative to your height, what are your hands and feet like?', zh: '相對於你的身高，手掌與腳掌的形狀如何？',
    options: { en: ['Long and narrow', 'Large and broad', 'Moderate in length and width', 'Small and narrow', 'Small, short and relatively broad'], zh: ['修長而窄', '大而寬', '長寬適中', '小而窄', '小而短，相對較寬'] } },
  { en: 'Looking at wrists, elbows and knees, how do the joints appear?', zh: '觀察手腕、手肘與膝蓋，關節的輪廓如何？',
    options: { en: ['Narrow, with sharp projecting edges', 'Broad, with blunt projecting edges', 'Moderate, without prominent edges', 'Small and fine, with slight edges', 'Small and rounded, with few visible angles'], zh: ['偏窄，有尖銳突出的邊緣', '偏寬，有鈍而突出的邊緣', '適中，邊緣不突出', '小而纖細，略有稜角', '小而圓潤，很少明顯稜角'] } },
  { en: 'At your current weight, how does your waist connect to bust and hips?', zh: '以目前體重觀察，腰部與胸臀之間的輪廓如何？',
    options: { en: ['Long and straight, with little inward curve', 'Broad and fairly straight', 'Moderate inward curve, without strong contrast', 'A clear inward curve on a narrow torso', 'A deep inward curve between rounded bust and hips'], zh: ['修長而直，內收很少', '偏寬，線條較直', '適度內收，對比不強烈', '軀幹偏窄，腰部明顯內收', '胸臀圓潤，腰部有很深的內收曲線'] } },
  { en: 'With muscles relaxed, how does the flesh of your upper arms and thighs look?', zh: '肌肉放鬆時，上臂與大腿的表面輪廓如何？',
    options: { en: ['Lean and straight, with visible edges', 'Firm-looking and broad, with blunt contours', 'Moderate fullness and definition', 'Soft on a relatively narrow outline', 'Full and rounded with soft contours'], zh: ['偏薄而直，邊緣明顯', '看起來結實而寬，輪廓較鈍', '豐滿度與輪廓清晰度適中', '外形偏窄，表面柔軟', '豐滿圓潤，輪廓柔軟'] } },
  { en: 'Viewed from the front, how does flesh shape your hip outline?', zh: '從正面看，臀部的肌肉與脂肪形成什麼輪廓？',
    options: { en: ['A long, nearly straight outline', 'A broad outline with fairly straight sides', 'A moderate, gradual curve', 'A narrow outline with a clear curve', 'A full, rounded curve'], zh: ['修長，側邊接近直線', '偏寬，側邊較直', '適中、漸進的曲線', '外形偏窄，但曲線清楚', '豐滿、圓潤的曲線'] } },
  { en: 'Ignoring the softness of your cheeks, what shape is your jaw?', zh: '先不看臉頰的柔軟度，下顎骨的輪廓如何？',
    options: { en: ['Long and narrow with sharp angles', 'Broad and square with blunt angles', 'Moderate and even', 'Small and narrow with slight angles', 'Short, small and rounded'], zh: ['修長而窄，稜角鮮明', '寬而方，稜角較鈍', '適中、均衡', '小而窄，略有稜角', '短小、圓潤'] } },
  { en: 'What is the underlying shape of your cheekbones?', zh: '顴骨本身的形狀如何？',
    options: { en: ['High, narrow and sharply defined', 'Wide and prominent with blunt edges', 'Moderate in width and prominence', 'Small and narrow, slightly defined', 'Small and rounded, not projecting strongly'], zh: ['高而窄，邊緣鮮明', '寬而突出，邊緣較鈍', '寬度與突出程度適中', '小而窄，略有輪廓', '小而圓潤，不明顯突出'] } },
  { en: 'With your face relaxed and no makeup, how does your eye opening look?', zh: '臉部放鬆、不化妝時，眼睛的外形如何？',
    options: { en: ['Narrow and straight-edged', 'Narrow with broader, softer edges', 'Moderate in size and shape', 'Rounded, but relatively small', 'Large and clearly rounded'], zh: ['細長，邊緣較直', '細長，邊緣較寬、較柔和', '大小與形狀適中', '偏圓，但相對較小', '大而明顯圓潤'] } },
  { en: 'With lips relaxed, how full is their natural outline?', zh: '嘴唇放鬆時，自然輪廓有多豐滿？',
    options: { en: ['Thin and fairly straight', 'Thin to moderate, with a broad outline', 'Moderately full and even', 'Full with a small, delicate outline', 'Very full and rounded'], zh: ['薄，線條較直', '薄至適中，輪廓偏寬', '豐滿度適中、均衡', '豐滿，輪廓小而纖巧', '非常豐滿、圓潤'] } },
  { en: 'When you are not smiling, how does the flesh over your cheeks look?', zh: '沒有微笑時，臉頰的柔軟組織輪廓如何？',
    options: { en: ['Taut, with little fullness', 'Firm-looking over a broad outline', 'Moderate fullness', 'Soft, with a small amount of roundness', 'Full, soft and distinctly rounded'], zh: ['緊實，豐滿度低', '輪廓偏寬，看起來結實', '豐滿度適中', '柔軟，略帶圓潤', '豐滿柔軟，明顯圓潤'] } },
];
// Reference answer profiles, grouped in DIMENSIONS order. These numbers are editorial conventions.
// Preserve categories rather than averaging signed scores: A + E must not collapse into C.
export const PROFILES = {
  dramatic: ['AA', 'AAA', 'AAA', 'AA', 'AAA'],
  soft_dramatic: ['AA', 'AAA', 'EEE', 'AA', 'EEE'],
  flamboyant_natural: ['AB', 'BBB', 'ABB', 'BB', 'BBB'],
  natural: ['BC', 'BBB', 'BBB', 'BB', 'BBC'],
  soft_natural: ['CD', 'BBB', 'DEE', 'BB', 'DEE'],
  dramatic_classic: ['CC', 'ACC', 'BCC', 'AC', 'CCC'],
  classic: ['CC', 'CCC', 'CCC', 'CC', 'CCC'],
  soft_classic: ['CC', 'CCC', 'CDD', 'CC', 'CDD'],
  flamboyant_gamine: ['DD', 'AAB', 'AAC', 'AB', 'AEE'],
  gamine: ['DD', 'AAD', 'ACE', 'AD', 'AEE'],
  soft_gamine: ['DE', 'AAD', 'DEE', 'AD', 'EEE'],
  theatrical_romantic: ['DD', 'ADD', 'DEE', 'AD', 'DEE'],
  romantic: ['DE', 'EEE', 'EEE', 'EE', 'EEE'],
};
export const RULES = { dimensionWeight: 1 / DIMENSIONS.length, tieTolerance: 1e-9, scale: 100 };
const histogram = (letters) => OPTIONS.map(({ letter }) => [...letters].filter((v) => v === letter).length / letters.length);
export function validateAnswers(answers) {
  if (!Array.isArray(answers) || answers.length !== QUESTIONS.length || !Array.from(answers).every((v) => Number.isInteger(v) && v >= 0 && v < OPTIONS.length)) {
    throw new RangeError('Expected 13 complete answers, each an integer from 0 to 4.');
  }
}
export function distributions(answers) {
  validateAnswers(answers);
  return DIMENSIONS.map((dim) => {
    const letters = dim.questions.map((i) => OPTIONS[answers[i]].letter).join('');
    const shares = histogram(letters);
    return { key: dim.key, letters, shares, yang: shares[0] + shares[1], balanced: shares[2], yin: shares[3] + shares[4] };
  });
}
export function rankTypes(answers) {
  const observed = distributions(answers);
  return Object.entries(PROFILES).map(([key, profile], order) => {
    const parts = profile.map((letters, i) => {
      const target = histogram(letters);
      return RULES.scale * sharesDistance(observed[i].shares, target);
    });
    return { key, order, parts, distance: parts.reduce((sum, d) => sum + d * RULES.dimensionWeight, 0) };
  }).sort((a, b) => Math.abs(a.distance - b.distance) <= RULES.tieTolerance ? a.order - b.order : a.distance - b.distance);
}
function sharesDistance(a, b) {
  return a.reduce((sum, share, i) => sum + Math.abs(share - b[i]), 0) / 2;
}
export function scoreQuiz(answers) {
  const ranking = rankTypes(answers), winner = ranking[0], runnerUp = ranking[1];
  const flips = [];
  // Enumerate every alternative answer, not an estimated derivative. Inputs are never mutated.
  for (let question = 0; question < QUESTIONS.length; question++) {
    for (let to = 0; to < OPTIONS.length; to++) {
      if (to === answers[question]) continue;
      const changed = [...answers]; changed[question] = to;
      const result = rankTypes(changed);
      if (result[0].key !== winner.key) flips.push({ question, from: answers[question], to, key: result[0].key, steps: Math.abs(to - answers[question]), tied: Math.abs(result[1].distance - result[0].distance) <= RULES.tieTolerance });
    }
  }
  return { winner, runnerUp, ranking, distributions: distributions(answers), margin: runnerUp.distance - winner.distance,
    ties: ranking.filter((r) => Math.abs(r.distance - winner.distance) <= RULES.tieTolerance).map((r) => r.key),
    flips, adjacentFlips: flips.filter((f) => f.steps === 1) };
}

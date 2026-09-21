/** 體型的展示名、別名與一句話定義。規則本身在 body-shape.js；這裡只管「叫什麼、怎麼解釋」。
 *  別名要寫清楚——業界對 apple 的用法是相反的：calculator.net 把 Inverted Triangle 標成 apple，
 *  bodytypecalculator.org 的 apple 是腰與上身、臀差不多（對應 FFIT 的 Oval / Diamond）。 */
export const SHAPES = {
  hourglass:         { name: 'Hourglass',         slug: 'hourglass',          aka: [], group: 'hourglass',
    def: 'Bust no more than 1 inch larger than the hips, hips less than 3.6 inches larger than the bust, and a waist at least 9 inches smaller than the bust or 10 inches smaller than the hips.' },
  top_hourglass:     { name: 'Top hourglass',     slug: 'hourglass',          aka: [], group: 'hourglass',
    def: 'Bust more than 1 inch and less than 10 inches larger than the hips, with a waist at least 9 inches smaller than the bust.' },
  bottom_hourglass:  { name: 'Bottom hourglass',  slug: 'hourglass',          aka: [], group: 'hourglass',
    def: 'Hips at least 3.6 and less than 10 inches larger than the bust, a waist at least 9 inches smaller than the hips, and high hip ÷ waist below 1.193.' },
  spoon:             { name: 'Spoon',             slug: 'pear',               aka: ['bottom-heavy hourglass'], group: 'pear',
    def: 'Hips larger than bust by more than 2 inches, a waist at least 7 inches smaller than the hips, and a high hip that flares out well above the waist (high hip ÷ waist ≥ 1.193).' },
  triangle:          { name: 'Triangle',          slug: 'pear',               aka: ['pear'], group: 'pear',
    def: 'Hips at least 3.6 inches larger than the bust with hips − waist between 0 and 9 inches; or a waist larger than the bust and no larger than the hips.' },
  inverted_triangle: { name: 'Inverted triangle', slug: 'inverted-triangle',  aka: ['V-shape', 'called apple by some calculators'], group: 'inverted-triangle',
    def: 'Bust larger than hips by 3.6 inches or more, with a waist less than 9 inches smaller than the bust.' },
  rectangle:         { name: 'Rectangle',         slug: 'rectangle',          aka: ['banana', 'straight', 'athletic'], group: 'rectangle',
    def: 'Bust and hips within 3.6 inches of each other, and a waist less than 9 inches smaller than the bust and less than 10 smaller than the hips.' },
  diamond:           { name: 'Diamond',           slug: 'apple',              aka: ['apple'], group: 'apple',
    def: 'Waist larger than both bust and hips.' },
  oval:              { name: 'Oval',              slug: 'apple',              aka: ['apple', 'round'], group: 'apple',
    def: 'Waist larger than the hips but not larger than the bust.' },
};
export const GROUPS = {
  hourglass:           { name: 'Hourglass',         members: ['hourglass', 'top_hourglass', 'bottom_hourglass'] },
  pear:                { name: 'Pear',              members: ['triangle', 'spoon'] },
  'inverted-triangle': { name: 'Inverted triangle', members: ['inverted_triangle'] },
  rectangle:           { name: 'Rectangle',         members: ['rectangle'] },
  apple:               { name: 'Apple',             members: ['oval', 'diamond'] },
};
export const MALE = {
  trapezoid:         { name: 'Trapezoid',         def: 'Chest at least 3.6 inches wider than hips or clearly defined waist: shoulders and chest carry the width, the waist is at least 9 inches smaller than the chest.' },
  inverted_triangle: { name: 'Inverted triangle', def: 'Chest at least 3.6 inches larger than hips, with less than 9 inches between chest and waist.' },
  rectangle:         { name: 'Rectangle',         def: 'Chest and hips within 3.6 inches, waist less than 9 inches smaller than the chest.' },
  triangle:          { name: 'Triangle',          def: 'Hips at least 3.6 inches larger than the chest.' },
  oval:              { name: 'Oval',              def: 'Waist larger than the hips and no larger than the bust.' },
};

/* ── 繁中層（2026-09-21 加）─────────────────────────────────────────
 * 只補「怎麼解釋」，不補「叫什麼」：SHAPES[].name 是 FFIT 已發表的結果名，
 * 頁面把規則印在旁邊，換成中文譯名反而對不上文獻，所以九個結果名一律保留英文。
 * 需要中文的是**常用名分組**——梨形／沙漏型／蘋果型／矩形／倒三角正是台港讀者在搜的詞。
 * 每一個閾值都照抄英文版，沒有換算也沒有四捨五入。
 */
export const SHAPES_ZH = {
  hourglass:         { def: '胸圍比臀圍大不超過 1 吋、臀圍比胸圍大不到 3.6 吋，且腰圍比胸圍小至少 9 吋或比臀圍小至少 10 吋。' },
  top_hourglass:     { def: '胸圍比臀圍大超過 1 吋但不到 10 吋，腰圍比胸圍小至少 9 吋。' },
  bottom_hourglass:  { def: '臀圍比胸圍大 3.6 吋以上但不到 10 吋、腰圍比臀圍小至少 9 吋，且高臀圍 ÷ 腰圍低於 1.193。' },
  spoon:             { def: '臀圍比胸圍大超過 2 吋、腰圍比臀圍小至少 7 吋，且高臀圍在腰部上方明顯外擴（高臀圍 ÷ 腰圍 ≥ 1.193）。' },
  triangle:          { def: '臀圍比胸圍大至少 3.6 吋且臀腰差在 0 到 9 吋之間；或腰圍大於胸圍而不大於臀圍。' },
  inverted_triangle: { def: '胸圍比臀圍大 3.6 吋以上，腰圍比胸圍小不到 9 吋。' },
  rectangle:         { def: '胸圍與臀圍相差在 3.6 吋以內，腰圍比胸圍小不到 9 吋、比臀圍小不到 10 吋。' },
  diamond:           { def: '腰圍同時大於胸圍與臀圍。' },
  oval:              { def: '腰圍大於臀圍，但不大於胸圍。' },
};
/** 別名：英文版收的是英語圈說法，繁中收的是台港說法，不是逐字翻譯 */
export const AKA_ZH = {
  spoon: ['下半身沙漏'],
  triangle: ['梨形'],
  inverted_triangle: ['V 字型', '有些計算器把它叫 apple'],
  rectangle: ['香蕉型', '直筒', '運動型'],
  diamond: ['蘋果型'],
  oval: ['蘋果型', '圓潤型'],
  hourglass: [], top_hourglass: [], bottom_hourglass: [],
};
export const GROUPS_ZH = {
  hourglass: '沙漏型', pear: '梨形', 'inverted-triangle': '倒三角', rectangle: '矩形', apple: '蘋果型',
};
/** 男版五型與女版的處理不同：女版九型是 FFIT 已發表的術語所以保留英文，
 *  男版是**本站自訂的約定**（頁面自己寫明「沒有已發表的男性版 FFIT」），
 *  既然不是文獻術語，就用繁中名——而且「倒三角身材」本來就是台港在搜的說法。 */
export const MALE_ZH = {
  trapezoid:         { name: '梯形',  def: '胸圍比臀圍寬至少 3.6 吋，或腰線明顯：肩與胸撐起寬度，腰圍比胸圍小至少 9 吋。' },
  inverted_triangle: { name: '倒三角', def: '胸圍比臀圍大至少 3.6 吋，胸腰差不到 9 吋。' },
  rectangle:         { name: '矩形',  def: '胸圍與臀圍相差在 3.6 吋以內，腰圍比胸圍小不到 9 吋。' },
  triangle:          { name: '三角形', def: '臀圍比胸圍大至少 3.6 吋。' },
  oval:              { name: '橢圓形', def: '腰圍大於臀圍，且不大於胸圍。' },
};

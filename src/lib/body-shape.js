/**
 * 體型分類 —— FFIT 九型，Sokolowski 2020 修訂版（3DBODY.TECH 2020）。
 * 原始七型：Simmons, Istook & Devarajan 2004, JTATM（Part I/II）。2020 版加 Diamond / Oval，
 * 並給 Triangle / Inverted Triangle / Rectangle 補上 ≥ 0 下界（2007 版假設腰一定比胸小）。
 * 規則單位是英寸，輸入一律 cm 再換算。有序判斷，首個命中即回傳。
 *
 * 高臀圍 (highHip) 可以不給：Spoon 與 Bottom Hourglass 靠 highHip/waist ≥ 1.193 區分，
 * 落在那個區又沒給時回 NEEDS_HIGH_HIP，由介面再要一個數字——ANSUR 女性有 34.7% 落在這裡。
 *
 * ⚠️ 頁面上所有關於分類的文案都以這個檔為準；改了阈值要同步 methodology 頁與 flipDistance 的說明。
 */
export const IN = 1 / 2.54;
export const NEEDS_HIGH_HIP = 'needs_high_hip';

export const FEMALE_SHAPES = ['hourglass', 'bottom_hourglass', 'top_hourglass', 'spoon', 'triangle', 'inverted_triangle', 'rectangle', 'diamond', 'oval'];

export function classifyFemale({ bust, waist, hips, highHip = null }, opts = {}) {
  const b = bust * IN, w = waist * IN, h = hips * IN;
  const r = highHip ? (highHip * IN) / w : null;
  if (b - h <= 1 && h - b < 3.6 && (b - w >= 9 || h - w >= 10)) return 'hourglass';
  if (h - b >= 3.6 && h - b < 10 && h - w >= 9) {
    if (r === null) return NEEDS_HIGH_HIP;
    if (r < 1.193) return 'bottom_hourglass';
  }
  if (b - h > 1 && b - h < 10 && b - w >= 9) return 'top_hourglass';
  if (h - b > 2 && h - w >= 7) {
    if (r === null) return NEEDS_HIGH_HIP;
    if (r >= 1.193) return 'spoon';
  }
  // Triangle：2020 版第二分支是獨立的（論文 Table 10 #3：臀胸差 2.95 吋、胸<腰、腰≤臀 → Triangle），不是嵌在 3.6 吋條件下。
  if ((h - b >= 3.6 && h - w >= 0 && h - w < 9) || (b - w < 0 && h - w >= 0)) return 'triangle';
  if (b - h >= 3.6 && b - w < 9 && h - w >= 0) return 'inverted_triangle';
  if (h - b < 3.6 && b - h < 3.6 && b - w >= 0 && b - w < 9 && h - w >= 0 && h - w < 10) return 'rectangle';
  if (h - w < 0 && b - w < 0) return 'diamond';
  if (h - w < 0 && b - w >= 0) return 'oval';
  if (opts.strict) return null;
  // 沒有規則命中（例如胸比臀大 10 吋整、或差距超過 10 吋）：本站兜底——按最像的鄰型回傳，介面要標示這是兜底。
  if (b - h >= 10) return b - w >= 9 ? 'top_hourglass' : 'inverted_triangle';
  if (h - b >= 10) return h - w >= 9 ? 'bottom_hourglass' : 'triangle';
  return 'rectangle';
}
/** 是否走了兜底（九條規則都沒命中）。 */
export function isFallback(input) { return classifyFemale(input, { strict: true }) === null; }

/**
 * 男性五型：本站自己的規則，沒有 FFIT 那樣的期刊出處，頁面上必須寫明「這是本站的判法」。
 * 用肩圍/胸圍(chest)、腰、臀三個數。阈值沿用 FFIT 的 3.6 吋當「明顯差距」、9 吋當「有腰身」。
 */
export const MALE_SHAPES = ['trapezoid', 'inverted_triangle', 'rectangle', 'triangle', 'oval'];
export function classifyMale({ chest, waist, hips }) {
  const c = chest * IN, w = waist * IN, h = hips * IN;
  if (w >= c || w >= h) return 'oval';
  if (c - h >= 3.6) return c - w >= 9 ? 'trapezoid' : 'inverted_triangle';
  if (h - c >= 3.6) return 'triangle';
  return c - w >= 9 ? 'trapezoid' : 'rectangle';
}

/** 最小的單一圍度改動（cm）能翻掉標籤：回 { cm, measure, to }，找不到（>limit）回 null。 */
export function flipDistance(input, classify = classifyFemale, { step = 0.1, limit = 15 } = {}) {
  const base = classify(input);
  const keys = Object.keys(input).filter((k) => input[k] != null && k !== 'highHip');
  for (let d = step; d <= limit + 1e-9; d = +(d + step).toFixed(3)) {
    for (const k of keys) for (const s of [1, -1]) {
      const lab = classify({ ...input, [k]: input[k] + s * d });
      if (lab !== base) return { cm: +d.toFixed(1), measure: k, direction: s, to: lab };
    }
  }
  return null;
}

/** 腰臀比在 NHANES 成人裡的百分位（0–100）。table = whr_percentiles.json 的 whr[sex] 陣列（p1..p99）。 */
export function percentileOf(value, table) {
  let i = 0; while (i < table.length && table[i] <= value) i++;
  return i; // 有 i 個百分位點 ≤ value → 約第 i 百分位
}

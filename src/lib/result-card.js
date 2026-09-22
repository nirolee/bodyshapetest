/**
 * 結果卡的視覺與分享：比例條、輪廓示意、邊界刻度、URL 編碼、下載 PNG。
 * 女版（BodyCalculator）與男版（RatioCalculator mode=men）共用。純前端、無依賴。
 *
 * 誠實邊界：輪廓圖是把「圍度」按比例畫成「寬度」的示意，不是身體外形（圍度≠正面寬度，方法頁講過）；
 * 圖上與結果卡都明說是 schematic。
 */
const IN = 1 / 2.54;
const fmt = (n) => (Math.round(n * 10) / 10).toString();
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/** 橫向比例條：每個圍度一條，長度按最大值歸一。rows: [[label, cm], ...] */
export function barsSvg(rows, unit = 'cm') {
  const max = Math.max(...rows.map((r) => r[1]));
  const W = 520, L = 118, H = 26, G = 12, R = W - L - 90;
  const h = rows.length * (H + G) + 8;
  const bars = rows.map(([label, cm], i) => {
    const y = 4 + i * (H + G), w = Math.max(4, Math.round((cm / max) * R));
    const val = unit === 'in' ? `${fmt(cm * IN)} in` : `${fmt(cm)} cm`;
    return `<text x="${L - 10}" y="${y + H / 2 + 5}" text-anchor="end" class="rc-lab">${esc(label)}</text>
      <rect x="${L}" y="${y}" width="${R}" height="${H}" rx="6" class="rc-track"/>
      <rect x="${L}" y="${y}" width="${w}" height="${H}" rx="6" class="rc-fill"/>
      <text x="${L + w + 8}" y="${y + H / 2 + 5}" class="rc-val">${val}</text>`;
  }).join('');
  return `<svg class="rc-bars" viewBox="0 0 ${W} ${h}" width="100%" role="img" aria-label="Measurements drawn as proportional bars">${bars}</svg>`;
}

/** 輪廓示意：上／中／下三段寬度按圍度比例。keys 依序 top(胸/肩)、waist、hips。 */
export function outlineSvg(top, waist, hips, highHip = null, labels = null) {
  const LB = labels || { top: 'top', waist: 'waist', highHip: 'high hip', hips: 'hips' };
  const max = Math.max(top, waist, hips, highHip || 0);
  const W = 220, Hh = 260, cx = W / 2, k = 80 / max; // 半寬最大 80
  const t = top * k, w = waist * k, h = hips * k, hh = highHip ? highHip * k : (w + h) / 2;
  const y0 = 28, y1 = 118, y2 = highHip ? 160 : 150, y3 = 226;
  const path = highHip
    ? `M${cx - t} ${y0} L${cx + t} ${y0} C${cx + t} ${y0 + 40} ${cx + w} ${y1 - 30} ${cx + w} ${y1} C${cx + w} ${y1 + 20} ${cx + hh} ${y2 - 10} ${cx + hh} ${y2} C${cx + hh} ${y2 + 30} ${cx + h} ${y3 - 20} ${cx + h} ${y3} L${cx - h} ${y3} C${cx - h} ${y3 - 20} ${cx - hh} ${y2 + 30} ${cx - hh} ${y2} C${cx - hh} ${y2 - 10} ${cx - w} ${y1 + 20} ${cx - w} ${y1} C${cx - w} ${y1 - 30} ${cx - t} ${y0 + 40} ${cx - t} ${y0} Z`
    : `M${cx - t} ${y0} L${cx + t} ${y0} C${cx + t} ${y0 + 50} ${cx + w} ${y1 - 30} ${cx + w} ${y1} C${cx + w} ${y1 + 40} ${cx + h} ${y3 - 40} ${cx + h} ${y3} L${cx - h} ${y3} C${cx - h} ${y3 - 40} ${cx - w} ${y1 + 40} ${cx - w} ${y1} C${cx - w} ${y1 - 30} ${cx - t} ${y0 + 50} ${cx - t} ${y0} Z`;
  const guide = (y, label) => `<line x1="18" x2="${W - 18}" y1="${y}" y2="${y}" class="rc-guide"/><text x="${W - 16}" y="${y - 4}" text-anchor="end" class="rc-glab">${label}</text>`;
  return `<svg class="rc-outline" viewBox="0 0 ${W} ${Hh}" width="${W}" height="${Hh}" role="img" aria-label="Schematic outline with widths proportional to the measured circumferences">
    ${guide(y0, LB.top)}${guide(y1, LB.waist)}${highHip ? guide(y2, LB.highHip) : ''}${guide(y3, LB.hips)}
    <path d="${path}" class="rc-shape"/></svg>`;
}

/** 邊界刻度：0–15cm，標出最小翻型改動在哪。 */
export function gaugeSvg(flip) {
  if (!flip) return '';
  const W = 520, x0 = 14, x1 = W - 14, y = 22, p = x0 + Math.min(1, flip.cm / 15) * (x1 - x0);
  return `<svg class="rc-gauge" viewBox="0 0 ${W} 48" width="100%" role="img" aria-label="Distance to a different result">
    <line x1="${x0}" x2="${x1}" y1="${y}" y2="${y}" class="rc-track-line"/>
    <rect x="${x0}" y="${y - 5}" width="${(2 / 15) * (x1 - x0)}" height="10" rx="5" class="rc-near"/>
    <circle cx="${p}" cy="${y}" r="7" class="rc-dot"/>
    <text x="${x0}" y="44" class="rc-glab">0</text><text x="${x0 + (2 / 15) * (x1 - x0)}" y="44" class="rc-glab" text-anchor="middle">2 cm</text><text x="${x1}" y="44" text-anchor="end" class="rc-glab">15 cm+</text>
    <text x="${Math.min(Math.max(p, 60), W - 60)}" y="10" text-anchor="middle" class="rc-val">${fmt(flip.cm)} cm</text></svg>`;
}

/** 把輸入編進 URL，讓「複製結果連結」能還原。連結會帶量測值——介面上要講明。 */
export function encodeShare(input, unit, sex) {
  const q = new URLSearchParams();
  for (const k of ['bust', 'chest', 'waist', 'hips', 'highHip']) if (input[k] != null) q.set(k, String(Math.round(input[k] * 10) / 10));
  q.set('u', unit); if (sex) q.set('sex', sex);
  return `${location.origin}${location.pathname}?${q.toString()}`;
}
export function decodeShare(search) {
  const q = new URLSearchParams(search); const num = (k) => { const v = parseFloat(q.get(k)); return isFinite(v) && v > 0 ? v : null; };
  const out = { bust: num('bust'), chest: num('chest'), waist: num('waist'), hips: num('hips'), highHip: num('highHip'), unit: q.get('u') === 'in' ? 'in' : 'cm', sex: q.get('sex') || null };
  return out.waist && out.hips ? out : null; // bust/chest 由各自的計算器決定要不要
}
export async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; }
  catch { const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); const ok = document.execCommand('copy'); ta.remove(); return ok; }
}

/** Canvas result image. Optional hero reuses the on-page stability text.
 * Minimum 1080×1350; grow vertically for longer translations rather than clip.
 * Returns true when the browser download is triggered (not a saved-file receipt).
 */
export function downloadCard({ title, shape, sub, hero = '', lines, bars, note, site = 'bodyshapetest.org', file = 'body-shape-result.png' }) {
  return new Promise((resolve) => {
    const W = 1080, c = document.createElement('canvas'); c.width = W; c.height = 1350;
    const g = c.getContext('2d');
    if (!g) { resolve(false); return; }
    const ink = '#f5f3ee', muted = '#a8a5a0', acc = '#e8c39a';
    const draw = () => {
      g.fillStyle = '#141417'; g.fillRect(0, 0, W, c.height);
      g.fillStyle = acc; g.font = '600 26px system-ui, sans-serif'; g.fillText(title.toUpperCase(), 72, 100);
      g.fillStyle = ink; g.font = '700 76px system-ui, sans-serif';
      let y = wrap(g, shape, 72, 195, W - 144, 88) + 60;
      if (hero) {
        g.fillStyle = acc; g.font = '600 36px system-ui, sans-serif';
        y = wrap(g, hero, 72, y, W - 144, 50) + 56;
      }
      g.fillStyle = muted; g.font = '400 28px system-ui, sans-serif';
      y = wrap(g, sub, 72, y, W - 144, 38) + 48;
      const max = Math.max(...bars.map((b) => b[1]));
      for (const [label, cm] of bars) {
        g.fillStyle = muted; g.font = '500 26px system-ui, sans-serif'; g.fillText(label, 72, y + 29);
        g.fillStyle = '#2a2a30'; rr(g, 235, y, 495, 40, 12); g.fill();
        g.fillStyle = acc; rr(g, 235, y, Math.max(8, (cm / max) * 495), 40, 12); g.fill();
        g.fillStyle = ink; g.font = '600 24px system-ui, sans-serif'; g.fillText(`${fmt(cm)} cm / ${fmt(cm * IN)} in`, 750, y + 29);
        y += 65;
      }
      y += 12; g.strokeStyle = '#2a2a30'; g.lineWidth = 2; g.beginPath(); g.moveTo(72, y); g.lineTo(W - 72, y); g.stroke(); y += 48;
      for (const [label, value] of lines) {
        g.fillStyle = muted; g.font = '500 26px system-ui, sans-serif'; g.fillText(label, 72, y);
        g.fillStyle = ink; g.font = '500 30px system-ui, sans-serif'; y = wrap(g, value, 72, y + 42, W - 144, 40) + 50;
      }
      g.fillStyle = muted; g.font = '400 24px system-ui, sans-serif';
      y = wrap(g, note, 72, y + 12, W - 144, 32) + 72;
      g.fillStyle = acc; g.font = '600 28px system-ui, sans-serif'; g.fillText(site, 72, Math.max(y, c.height - 60));
      return y + 60;
    };
    const height = Math.max(1350, Math.ceil(draw()));
    if (height !== c.height) { c.height = height; draw(); }
    c.toBlob((blob) => {
      if (!blob) { resolve(false); return; }
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = file;
      a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); resolve(true);
    }, 'image/png');
  });
}
function rr(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
// Word boundaries for English, character boundaries for Chinese; split any
// overlong token too, so no translated sentence can extend beyond the canvas.
function wrap(g, text, x, y, maxW, lh) {
  const tokens = String(text).match(/[\u2e80-\u9fff\uf900-\ufaff\u3000-\u303f\uff00-\uffef]|[^\s\u2e80-\u9fff\uf900-\ufaff\u3000-\u303f\uff00-\uffef]+|\s+/gu) || [];
  let line = '';
  for (const token of tokens) {
    const parts = g.measureText(token).width > maxW ? Array.from(token) : [token];
    for (const part of parts) {
      if (line && g.measureText(line + part).width > maxW) {
        g.fillText(line.trimEnd(), x, y); y += lh; line = '';
      }
      line += line ? part : part.trimStart();
    }
  }
  if (line) g.fillText(line.trimEnd(), x, y);
  return y;
}

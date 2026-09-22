// Styling options inferred from the FFIT circumference relationships, not
// research findings or prescriptions. Shoulder width is not measured here.
export const SHAPE_ADVICE = {
  en: {
    hourglass: {
      meaning: 'The bust and hips are relatively close, with a larger drop to the waist. To echo that proportion, give both bust and hips room while bringing the garment in at the waist.',
      cuts: [
        'Try princess seams or waist darts that take in fabric at the waist without pulling across the bust.',
        'Place a wrap tie or a dress waist seam at your natural waist to follow the change in circumference.',
        'Choose a contoured trouser waistband with room through the seat; straight or gently flared legs can continue the hip line.',
      ],
    },
    top_hourglass: {
      meaning: 'The bust is larger than the hips, with a marked bust-to-waist drop. Fit the bust first, then shape the waist; added volume below the waist is an option if you want more visual balance.',
      cuts: [
        'Look for bust darts or princess seams with enough bust room and a shaped waist, rather than sizing down all over.',
        'Use an A-line skirt or pleated trousers to add volume below the waist while keeping the waistband fitted.',
        'Try set-in sleeves with little sleeve-head gathering if you want a quieter shoulder line; bust circumference does not establish shoulder width.',
      ],
    },
    bottom_hourglass: {
      meaning: 'The hips are larger than the bust, the waist is distinctly smaller than the hips, and the high-hip-to-waist ratio is below the Spoon cut-off. Fit the full hip and shape the waistband separately.',
      cuts: [
        'Choose a contoured waistband and seat shaping so trousers fit the hips without leaving a gap at the waist.',
        'Try skirts with gores or an A-line cut that opens from the waist toward the full hip.',
        'A boat neckline or gathered sleeve head can add visual width above the waist if you want to balance the fuller hips.',
      ],
    },
    spoon: {
      meaning: 'The hips exceed the bust and waist, with a relatively large high hip compared with the waist. Garments need room soon below the waistband, not only at the fullest hip.',
      cuts: [
        'Try an A-line skirt that starts opening directly below the waist instead of a fitted upper-hip yoke.',
        'Look for trousers with room through the upper hip and pockets that lie flat; avoid pulling pocket openings across that area.',
        'Use a shaped waistband to fit the waist, with side seams that allow the fabric to expand over the high hip.',
        'A broad neckline or small shoulder detail can add visual volume above the waist if that is the balance you want.',
      ],
    },
    triangle: {
      meaning: 'The hips are larger than the bust, or the waist exceeds the bust while staying no larger than the hips. The waist may have little indentation, so fit the waist and hips separately instead of assuming a sharply nipped waist.',
      cuts: [
        'Try straight-leg trousers with enough hip room and a waistband that follows your actual waist rather than a strongly curved one by default.',
        'Choose a gentle A-line skirt that clears the hips without requiring a tight waist.',
        'A boat neckline, shoulder tab or structured sleeve can add visual width to the upper part if you want to balance the hips.',
      ],
    },
    inverted_triangle: {
      meaning: 'The bust is larger than the hips, with a smaller bust-to-waist drop than the hourglass rule requires. To balance those circumferences visually, keep the upper cut simple and add space below the waist.',
      cuts: [
        'Try a V-neck or an open-front layer with a clean sleeve head to keep the upper part visually simple.',
        'Choose wide-leg trousers or a pleated A-line skirt to add volume below the waist.',
        'Fit tops through the bust with a straight or lightly shaped waist; avoid forcing a deep waist taper that pulls at the buttons.',
      ],
    },
    rectangle: {
      meaning: 'Bust and hips are relatively close, and the waist drop is smaller than the hourglass cut-offs. You can follow that straighter line or create a waist contrast with garment volume.',
      cuts: [
        'A straight shift dress or boxy jacket follows the smaller change between bust, waist and hips.',
        'For a waist contrast, pair a softly bloused top with a fitted waistband and a skirt that opens below it.',
        'Try straight-cut trousers or a lightly contoured waistband instead of a deeply curved waistband that may pinch at the waist.',
      ],
    },
    diamond: {
      meaning: 'The waist circumference exceeds both bust and hips. Fit the middle first and use shaping above and below it rather than expecting a garment to narrow at the waist.',
      cuts: [
        'Try a dress with extra room through the middle, such as a cocoon cut, that narrows again toward the hem.',
        'Look for trousers that fit the waist with adjustable elastic or a flat-front stretch waistband, then taper through the smaller hip and leg.',
        'Choose an open-front jacket with enough width through the middle and a hem below the waist if you want a continuous vertical opening.',
      ],
    },
    oval: {
      meaning: 'The waist exceeds the hips but is no larger than the bust. Give the bust and middle enough room, then shape the lower part to the smaller hips.',
      cuts: [
        'Try bust darts with a straight or gently widening body below, instead of a shirt with a deeply pinched waist.',
        'Choose trousers that fit the waist and taper through the hip; an adjustable waistband can help without adding excess seat fabric.',
        'For a dress, try a seam just below the bust with fabric that releases over the waist, checking that the seam has enough bust room.',
      ],
    },
  },
  zh: {
    hourglass: {
      meaning: '胸臀圍相對接近，腰圍則明顯較小。想順著這個比例選衣服，可以讓胸臀有足夠空間，再於腰部收進。',
      cuts: ['選公主線或腰省剪裁，在腰部收掉布量，同時保留胸部空間。', '裹身裙的綁帶或洋裝腰接縫可落在自然腰線，順著圍度變化塑形。', '褲子可選弧形腰頭並保留臀部容量，搭配直筒或微喇褲管延續臀線。'],
    },
    top_hourglass: {
      meaning: '胸圍大於臀圍，胸腰差也明顯。先合胸、再收腰；若想讓上下視覺更均衡，可在腰線以下增加布量。',
      cuts: ['選有胸省或公主線的上衣，胸部留足空間再收腰，不要靠整件縮小尺寸來貼腰。', '以 A 字裙或打褶長褲增加腰線以下的量感，腰頭則保持合身。', '若想讓肩線俐落，可選少打褶的裝袖；胸圍數字本身不能判斷肩膀寬窄。'],
    },
    bottom_hourglass: {
      meaning: '臀圍大於胸圍、腰圍明顯小於臀圍，而高臀腰比低於 Spoon 的分界。先容納最豐滿臀圍，再獨立調整腰頭。',
      cuts: ['選弧形腰頭並有臀部塑形的褲子，讓臀部合身時腰後不易留下空隙。', '可試拼片裙或從腰向全臀逐漸展開的 A 字剪裁。', '若想平衡較豐滿的臀部，船形領或微打褶袖山可增加上半身的視覺寬度。'],
    },
    spoon: {
      meaning: '臀圍大於胸圍與腰圍，高臀圍相對腰圍也較大。衣服需要從腰頭下方就開始留量，而非只在臀部最豐滿處放寬。',
      cuts: ['試從腰下立即展開的 A 字裙，避免上臀一段仍緊貼的育克剪裁。', '褲子要在上臀留足空間，口袋開口能平貼，不被高臀處撐開。', '以弧形腰頭貼合腰部，側縫則容許布料在高臀處展開。', '若想增加上半身量感，可用較寬領口或小幅肩部細節調整視覺比例。'],
    },
    triangle: {
      meaning: '臀圍大於胸圍，或腰圍大於胸圍但不超過臀圍；腰部不一定明顯內收。選衣時分別確認腰臀空間，不預設一定要大幅收腰。',
      cuts: ['試臀部有足夠空間的直筒褲，腰頭按實際腰圍選，不必一律選強弧形腰頭。', '選能掠過臀部的微 A 字裙，腰部不需刻意勒緊。', '若想平衡臀部量感，可用船形領、肩袢或有結構的袖型增加上半身視覺寬度。'],
    },
    inverted_triangle: {
      meaning: '胸圍明顯大於臀圍，胸腰差則未達沙漏型門檻。若想在視覺上平衡這個比例，可以讓上身剪裁簡潔，腰線以下加量。',
      cuts: ['試 V 領或敞開的外搭，搭配少打褶的袖山，讓上半身線條簡潔。', '用寬褲或有褶的 A 字裙增加腰線以下的量感。', '上衣先合胸，腰部選直身或輕微收腰，避免深收腰把扣位拉開。'],
    },
    rectangle: {
      meaning: '胸臀圍相對接近，腰圍落差未達沙漏型門檻。可以順著較直的線條穿，也可以用衣服上下的布量製造腰線對比。',
      cuts: ['直身洋裝或箱形外套可順著胸、腰、臀之間較小的圍度變化。', '若想凸顯腰線，可搭微蓬上衣、合身腰頭與腰下展開的裙子。', '褲子可試直腰或輕弧形腰頭，避免深弧形腰頭在腰部過緊。'],
    },
    diamond: {
      meaning: '腰圍同時大於胸圍與臀圍。先讓腰腹合身，再調整上方與下方的布量，不必要求衣服在腰部內收。',
      cuts: ['試中段留量、下擺再收回的繭形洋裝，給腰腹足夠空間。', '褲子可選前片平整的彈性腰頭或可調鬆緊腰，先合腰，再於較小的臀部與褲管收窄。', '敞開式外套可在中段留足寬度、下擺過腰，保留連續的垂直開襟線條。'],
    },
    oval: {
      meaning: '腰圍大於臀圍，但不大於胸圍。上衣需容納胸部與腰腹，下裝則可按較小的臀圍收整。',
      cuts: ['試有胸省、胸線以下直落或微展開的上衣，不必選腰部大幅內收的襯衫。', '褲子先合腰、臀部再收窄；可調腰頭有助於合腰而不增加過多臀部布量。', '洋裝可試胸下接縫、腰腹處放量的剪裁，並確認接縫上方留足胸部空間。'],
    },
  },
};

const esc = (value) => String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export function affiliateLinks(entries = []) {
  const links = entries.flatMap(({ label, href, note }) => {
    try { if (!['https:', 'http:'].includes(new URL(href).protocol)) return []; }
    catch { return []; }
    return [`<li><a href="${esc(href)}" rel="sponsored noopener">${esc(label)}</a>${note ? ` <span class="muted">${esc(note)}</span>` : ''}</li>`];
  });
  return links.length ? `<ul class="rc-affiliates">${links.join('')}</ul>` : '';
}

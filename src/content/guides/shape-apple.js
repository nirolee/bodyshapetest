export default { path: '/shapes/apple/', en: {
  meta: { title: 'Apple Body Shape (Oval and Diamond): The Rules Most Calculators Do Not Have', description: 'Apple, in the usual sense, is a body whose waist is its widest measurement. FFIT calls this Oval or Diamond, and the rules for them were only added in 2020 — which is why many calculators return nothing or something wrong. The exact rules, the two variants, and the boundaries.' },
  layout: { eyebrow: 'Shapes · Apple', h1: 'Apple body shape', lead: 'In the sense most styling guides use, an apple is a body whose waist measures more than its hips: the midsection is the widest circumference. Under the rules this site runs that is two shapes, Oval and Diamond, and both were missing from the original FFIT formulas until a 2020 revision added them. That gap is the reason many calculators have no answer for this body, or file it under something else. Here are the rules, the difference between the two, and the boundary with rectangle.', ctaHead: 'See whether your waist leads the hips', ctaNote: 'The calculator runs the 2020 rules, so a waist larger than the hips gets a real answer rather than an error.', updated: '2026-09-15' },
  tableData: { head: 'The two apple shapes', cols: ['FFIT shape', 'Rule', 'In words'], rows: [
    ['Oval', 'waist > hips and waist ≤ bust', 'Waist wider than the hips, but the bust is at least as wide as the waist'],
    ['Diamond', 'waist > hips and waist > bust', 'Waist wider than both hips and bust'],
  ] },
  blocks: [
    { t: 'h2', s: 'Why this shape was missing' },
    { t: 'p', s: 'The 2004 FFIT formulas were written from scans of a sample in which the waist was smaller than the bust, and every rule assumed it. A body whose waist exceeded its hips or bust matched none of them. Sokolowski’s 2020 paper documented this on plus-size scans and added two shapes — Oval and Diamond — plus a lower bound of zero on the Triangle, Inverted Triangle and Rectangle rules so that a waist larger than the ends could no longer slip into them. This site runs the revised set. If another calculator gives you rectangle or inverted triangle for a waist that is clearly your widest measurement, it is probably running the 2007 rules.' },
    { t: 'table' },
    { t: 'h2', s: 'Oval versus Diamond' },
    { t: 'p', s: 'Both have the waist wider than the hips. The difference is the bust. In an Oval the bust is at least as wide as the waist, so the widest point is shared between bust and waist or sits at the bust. In a Diamond the waist is wider than the bust as well, so the waist is unambiguously the widest circumference. The two are adjacent, and the boundary between them is the point where waist and bust are equal.' },
    { t: 'h2', s: 'The boundary with rectangle' },
    { t: 'p', s: 'Rectangle begins where the waist stops exceeding the hips: at hips minus waist equal to zero. A waist that is a centimetre under the hips reads rectangle; a centimetre over reads Oval. That is a sharp line, and a waist measurement is the one most affected by breath and tape tension, so the calculator’s stability note is worth reading here more than anywhere. If it says you are within 2 cm, measure the waist again, breathing out gently, before treating either label as settled.' },
    { t: 'h2', s: 'The naming problem, from the other side' },
    { t: 'p', s: 'Some calculators use apple for a different body altogether: the inverted triangle, where the bust leads the hips and the waist is not the widest part. The advice for the two does not overlap — one is about a wide midsection, the other about a broad upper body — so a page titled “what to wear for an apple shape” may be about either. This site reports Oval or Diamond and says the common name is apple, so you can tell which meaning a guide is using.' },
    { t: 'h2', s: 'What the label does not mean' },
    { t: 'p', s: 'It is a relationship between three circumferences. It does not measure or imply weight, health, or where the width sits front to back, and it is not a category the other shapes are measured against. The styling page describes what tends to draw the eye to the shoulders and legs if a longer line through the middle is wanted; that is a preference, not an instruction.' },
    { t: 'ul', items: [
      'Styling direction: <a href="/shapes/apple/outfits/">apple outfits</a>',
      'On the boundary: <a href="/apple-vs-rectangle/">apple vs rectangle</a>',
      'The other “apple”: <a href="/shapes/inverted-triangle/">inverted triangle</a>',
    ] },
  ],
  faq: [
    ['What measurements make an apple shape?', 'A waist larger than the hips. If the bust is at least as large as the waist, FFIT calls it Oval; if the waist is larger than the bust too, Diamond.'],
    ['Why did another calculator give me no result or “rectangle”?', 'Most run the 2007 FFIT formulas, which assumed the waist is smaller than the bust and have no rule for a waist larger than the hips. This site runs the 2020 revision that added Oval and Diamond.'],
    ['What is the difference between oval and diamond?', 'Whether the bust is wider than the waist. Oval: bust at least as wide as the waist. Diamond: waist wider than the bust as well as the hips.'],
    ['Is apple the same as inverted triangle?', 'Not in the sense used here. Inverted triangle is a bust that leads the hips; apple is a waist that leads the hips. Some calculators use apple for the former, so check which a guide means.'],
    ['My waist and hips are almost equal. Which am I?', 'You are on the rectangle–oval boundary, which is exactly hips minus waist equal to zero. The calculator will say how many centimetres you are from it; re-measure the waist before relying on either label.'],
  ],
} };

export default { path: '/shapes/apple/', en: {
  meta: { title: 'Apple Body Shape (Oval and Diamond): The Rules Most Calculators Do Not Have', description: 'Apple is this site’s grouping for the FFIT results Oval and Diamond, where the waist circumference exceeds the hips. The rules, the difference between the two, why the 2007 formula set handles this body differently, and how Rectangle differs.' },
  layout: { eyebrow: 'Shapes · Apple', h1: 'Apple body shape', lead: 'On this site, apple is a common-name grouping for two FFIT results, Oval and Diamond, in which the waist circumference exceeds the hips. Both belong to the 2004 FFIT shape set but were left out of the 2007 formula set that most calculators reproduce; a 2020 revision reintroduced them. Because the rules are checked in order, a waist larger than the hips can still match an earlier rule. Here are the two rules, the difference between them, and how the Rectangle result differs.', ctaHead: 'See whether your waist leads the hips', ctaNote: 'The calculator runs the 2020 rules, so a waist larger than the hips gets a real answer rather than an error.', updated: '2026-09-15' },
  tableData: { head: 'The two apple shapes', cols: ['FFIT shape', 'Rule', 'In words'], rows: [
    ['Oval', 'waist > hips and waist ≤ bust', 'Waist wider than the hips, but the bust is at least as wide as the waist'],
    ['Diamond', 'waist > hips and waist > bust', 'Waist wider than both hips and bust'],
  ] },
  blocks: [
    { t: 'h2', s: 'Why this shape was missing' },
    { t: 'p', s: 'The 2004 FFIT work defined nine shapes including Diamond and Oval. The 2007 formula set expressed seven of them as rules that assumed the waist is smaller than the bust; under those formulas a waist larger than the hips can return Rectangle, Triangle or Inverted Triangle depending on the other numbers, or match nothing. Sokolowski and Bettencourt (2020) documented this on plus-size scans, reintroduced Oval and Diamond into the formulas, and added lower bounds of zero to the Triangle, Inverted Triangle and Rectangle rules. This site runs the revised set. A different result from another calculator for a waist larger than the hips usually reflects the 2007 formulas.' },
    { t: 'table' },
    { t: 'h2', s: 'Oval versus Diamond' },
    { t: 'p', s: 'Both require the waist circumference to exceed the hips. The difference is the bust: Oval requires the waist to be no larger than the bust; Diamond requires the waist to exceed the bust as well. The two are adjacent, and the threshold between them is the point where waist and bust are equal. Both are checked after every other rule, so an earlier rule — Top hourglass, or Triangle’s second clause — can match first.' },
    { t: 'h2', s: 'The boundary with rectangle' },
    { t: 'p', s: 'Rectangle requires the waist to be no larger than the bust or hips, with bust and hips less than 3.6 inches apart and no earlier rule matching. With a bust of 41 inches and hips of 40, a waist of 39.6 returns Rectangle and a waist of 40.4 returns Oval — a change of about 2 cm. The calculator’s stability note reports this distance for your own numbers; if it is small, measure the waist again at the point described on the measuring page before treating either result as settled.' },
    { t: 'h2', s: 'The naming problem, from the other side' },
    { t: 'p', s: '“Apple” is used differently across styling guides and calculators. This site uses it as a common-name grouping for Oval and Diamond; some other calculators use it for Inverted Triangle. Oval requires waist circumference to exceed hip circumference while remaining no larger than the bust; Diamond requires the waist to exceed both. Calculator results always use the FFIT category names. A page titled “what to wear for an apple shape” may therefore be about either; check which the guide means.' },
    { t: 'h2', s: 'What the label does not mean' },
    { t: 'p', s: 'It is a relationship between three circumferences. It does not measure or imply weight, health, or where the width sits front to back, and it is not a category the other shapes are measured against. The outfits page lists options such as a longer line through the middle or a higher waistband; they are preferences, not instructions.' },
    { t: 'ul', items: [
      'Styling direction: <a href="/shapes/apple/outfits/">apple outfits</a>',
      'On the boundary: <a href="/apple-vs-rectangle/">apple vs rectangle</a>',
      'The other “apple”: <a href="/shapes/inverted-triangle/">inverted triangle</a>',
    ] },
  ],
  faq: [
    ['What measurements make an apple shape?', 'On this site: an Oval or Diamond result. Oval needs the waist larger than the hips and no larger than the bust; Diamond needs the waist larger than both. Both are checked after every other rule.'],
    ['Why did another calculator give me a different result?', 'It probably runs the 2007 FFIT formulas, which have no Oval or Diamond rule and no lower bounds on the waist differences; those can return Rectangle, Triangle or Inverted Triangle for a waist larger than the hips, or nothing. This site runs the 2020 revision.'],
    ['What is the difference between oval and diamond?', 'Whether the bust is wider than the waist. Oval: bust at least as wide as the waist. Diamond: waist wider than the bust as well as the hips.'],
    ['Is apple the same as inverted triangle?', 'Not on this site. Here apple groups Oval and Diamond (waist larger than the hips); some other calculators use apple for Inverted Triangle (bust larger than the hips). Check which a guide means.'],
    ['My waist and hips are almost equal. Which am I?', 'Close to the threshold between Rectangle and Oval, if no earlier rule matches. The calculator says how many centimetres you are from a different result; re-measure the waist before relying on either.'],
  ],
} };

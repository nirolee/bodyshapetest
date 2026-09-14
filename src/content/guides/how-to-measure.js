// 測量教學。這是競品 36 頁裡佔了 3 頁的真痛點；重點放「量哪裡」和「差 2cm 會怎樣」。
const FIG = `<svg viewBox="0 0 320 420" width="100%" style="max-width:340px;display:block;margin:0 auto" role="img" aria-label="Front view of a torso with four horizontal measuring lines: bust, waist, high hip and hips">
<path d="M160 20 c-22 0-38 18-38 40 0 14 6 26 14 34 -30 10-52 34-58 66 -6 30-4 60 4 90 6 24 8 50 8 78 0 24-2 46-2 66 h144 c0-20-2-42-2-66 0-28 2-54 8-78 8-30 10-60 4-90 -6-32-28-56-58-66 8-8 14-20 14-34 0-22-16-40-38-40z" fill="none" stroke="currentColor" stroke-width="2"/>
<g stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4">
<line x1="70" y1="150" x2="250" y2="150"/><line x1="82" y1="212" x2="238" y2="212"/><line x1="76" y1="248" x2="244" y2="248"/><line x1="66" y1="292" x2="254" y2="292"/></g>
<g font-family="system-ui,sans-serif" font-size="13" fill="currentColor">
<text x="258" y="154">Bust — fullest point</text><text x="244" y="216">Waist — narrowest</text><text x="250" y="252">High hip — ~7 cm below waist</text><text x="260" y="296">Hips — fullest point</text></g></svg>`;
export default { path: '/how-to-measure/', en: {
  meta: { title: 'How to Measure Bust, Waist and Hips for a Body Shape Calculator', description: 'Where each of the four measurements is taken, how to hold the tape, the mistakes that move a result by several centimetres, and why two centimetres is enough to change a body shape label.' },
  layout: { eyebrow: 'Measuring', h1: 'How to measure bust, waist, hips and high hip', lead: 'The calculator is only as good as the numbers you give it, and the rules are thresholds, so a small change in one measurement can change the result. Here is where each measurement is taken on this site, how to take it so it repeats, and what to check first when the result says you are near a threshold.', ctaHead: 'Now put the numbers in', ctaNote: 'Nothing is uploaded. If you are within 2 cm of a boundary, the result will tell you which measurement to take again.', updated: '2026-09-15' },
  blocks: [
    { t: 'html', s: FIG },
    { t: 'h2', s: 'Before you start' },
    { t: 'ul', items: [
      'Use a soft tape, the kind sold for sewing. A metal builder’s tape will not sit flat around a curve.',
      'Measure over underwear or thin, close-fitting clothes. A sweater adds two to four centimetres to every reading.',
      'Stand normally with your weight on both feet and breathe out gently before reading the waist. Do not pull in.',
      'Keep the tape level all the way round — check the back in a mirror — and snug against the body without compressing it.',
      'Read each measurement twice. If the two readings differ by more than a centimetre, take a third.',
    ] },
    { t: 'h2', s: 'Bust' },
    { t: 'p', s: 'Around the fullest part of the bust, with the tape level across the back at the same height. Wear the bra you usually wear, or none; the rules were written from scans of the unclothed body, so a heavily padded or minimising bra changes the number in a way the rules do not expect. In our ANSUR II stability analysis this was the measurement that most often decided the result, because several rules turn on bust minus hips.' },
    { t: 'h2', s: 'Waist' },
    { t: 'p', s: 'Around the narrowest part of the torso. If there is no obvious narrowest point, bend sideways: the crease that forms is at the natural waist; measure there, standing straight. Breathe out gently and read. Note that this is the shape rules’ waist. The waist-to-hip percentile compares against NHANES, which measures the waist just above the top of the hip bone under a fixed protocol; for many people that is a different, often larger, circumference, so the percentile is a rough placement rather than an exact comparison.' },
    { t: 'h2', s: 'Hips' },
    { t: 'p', s: 'Around the fullest part of the buttocks, feet together, tape level. This is usually lower than people expect — not at the hip bone, but at the widest point when seen from the side. Check in a mirror that the tape has not risen at the back.' },
    { t: 'h2', s: 'High hip' },
    { t: 'p', s: 'Around the upper hip, below the waist and above the fullest part of the hips. FFIT’s 2020 paper does not specify the landmark; this site’s convention is about 3 inches (7–8 cm) below the natural waist, tape level. You only need it when the calculator asks, which happens when your first three numbers satisfy the other conditions of Spoon or Bottom Hourglass; the ratio of high hip to waist, with 1.193 as the dividing value, then decides. In our ANSUR II analysis 34.7% of records needed it; that is a figure about that sample.' },
    { t: 'h2', s: 'How much does precision matter?' },
    { t: 'p', s: 'The rules are thresholds. In our ANSUR II analysis of 1,297 women whose result did not need a high hip, the median single-measurement change that altered the result was 2.5 cm; 42.8% were within 2 cm and 23.8% within 1 cm. So if your result shows a boundary note, the useful next step is to re-measure the named circumference.' },
    { t: 'h2', s: 'Inches or centimetres?' },
    { t: 'p', s: 'Either. The published thresholds are in inches; centimetre inputs are converted before comparison and the result shows both. What matters is that all your measurements are in the same unit and that you have selected it.' },
  ],
  faq: [
    ['Should I measure over clothes?', 'Over underwear or thin, fitted clothing only. Thick fabric adds several centimetres and adds it unevenly, which changes the differences the rules use, not just the absolute numbers.'],
    ['Where exactly is the waist?', 'The narrowest point of the torso. If you bend sideways, the crease that forms is at the natural waist; measure there standing straight. Use the same point every time rather than where a waistband happens to sit.'],
    ['What if my two readings differ?', 'Take a third and use the middle value. If they differ by more than a centimetre or two, check tape tension and level.'],
    ['Do I need someone to help?', 'It helps for the back of the bust and hip measurements, where the tape tends to drop. If you are alone, use a mirror and take the reading with your arms down after positioning the tape.'],
    ['Why does the calculator sometimes ask for a high hip?', 'Because two rules use high hip ÷ waist, and when their other conditions hold the result cannot be resolved without it. It asks only then.'],
  ],
} };

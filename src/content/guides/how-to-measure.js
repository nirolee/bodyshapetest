// 測量教學。這是競品 36 頁裡佔了 3 頁的真痛點；重點放「量哪裡」和「差 2cm 會怎樣」。
const FIG = `<svg viewBox="0 0 320 420" width="100%" style="max-width:340px;display:block;margin:0 auto" role="img" aria-label="Front view of a torso with four horizontal measuring lines: bust, waist, high hip and hips">
<path d="M160 20 c-22 0-38 18-38 40 0 14 6 26 14 34 -30 10-52 34-58 66 -6 30-4 60 4 90 6 24 8 50 8 78 0 24-2 46-2 66 h144 c0-20-2-42-2-66 0-28 2-54 8-78 8-30 10-60 4-90 -6-32-28-56-58-66 8-8 14-20 14-34 0-22-16-40-38-40z" fill="none" stroke="currentColor" stroke-width="2"/>
<g stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4">
<line x1="70" y1="150" x2="250" y2="150"/><line x1="82" y1="212" x2="238" y2="212"/><line x1="76" y1="248" x2="244" y2="248"/><line x1="66" y1="292" x2="254" y2="292"/></g>
<g font-family="system-ui,sans-serif" font-size="13" fill="currentColor">
<text x="258" y="154">Bust — fullest point</text><text x="244" y="216">Waist — narrowest</text><text x="250" y="252">High hip — ~7 cm below waist</text><text x="260" y="296">Hips — fullest point</text></g></svg>`;
export default { path: '/how-to-measure/', en: {
  meta: { title: 'How to Measure Bust, Waist and Hips for a Body Shape Calculator', description: 'Where each of the four measurements is taken, how to hold the tape, the mistakes that move a result by several centimetres, and why two centimetres is enough to change a body shape label.' },
  layout: { eyebrow: 'Measuring', h1: 'How to measure bust, waist, hips and high hip', lead: 'The calculator is only as good as the four numbers you give it, and under the published rules a difference of two centimetres can change the label. Here is where each measurement is taken, how to take it so it repeats, and which mistakes cost the most.', ctaHead: 'Now put the numbers in', ctaNote: 'Nothing is uploaded. If you are within 2 cm of a boundary, the result will tell you which measurement to take again.', updated: '2026-09-15' },
  blocks: [
    { t: 'html', s: FIG },
    { t: 'h2', s: 'Before you start' },
    { t: 'ul', items: [
      'Use a soft tape, the kind sold for sewing. A metal builder’s tape will not sit flat around a curve.',
      'Measure over underwear or thin, close-fitting clothes. A sweater adds two to four centimetres to every reading.',
      'Stand normally with your weight on both feet and breathe out gently before reading the waist. Do not pull in.',
      'Keep the tape level all the way round — the back drifting down is the most common error — and snug against the body without compressing it.',
      'Read each measurement twice. If the two readings differ by more than a centimetre, take a third.',
    ] },
    { t: 'h2', s: 'Bust' },
    { t: 'p', s: 'Around the fullest part of the bust, with the tape level across the back at the same height. Wear the bra you usually wear, or none; the rules were written from scans of the unclothed body, so a heavily padded or minimising bra changes the number in a way the rules do not expect. This is the measurement that most often decides the label: three of the rules turn on bust minus hips at cut-offs of 1 and 3.6 inches (2.5 and 9.1 cm).' },
    { t: 'h2', s: 'Waist' },
    { t: 'p', s: 'Around the narrowest part of the torso, which for most people is a little above the navel. If there is no obvious narrowest point, use the level about two finger-widths above the navel. Breathe out gently and read. The waist is the measurement most affected by breath and tape tension: a centimetre or two either way is normal between two readings by the same person, and that is why the calculator reports how close you sit to a boundary rather than pretending the label is exact.' },
    { t: 'h2', s: 'Hips' },
    { t: 'p', s: 'Around the fullest part of the buttocks, feet together, tape level. This is usually lower than people expect — not at the hip bone, but at the widest point when seen from the side. Check in a mirror that the tape has not risen at the back.' },
    { t: 'h2', s: 'High hip' },
    { t: 'p', s: 'Around the body about 7 cm (3 inches) below the waistline, roughly at the top of the hip bones, tape level. You only need this when the calculator asks for it, which happens when your first three numbers show hips clearly wider than bust with a well-defined waist. Under the FFIT rules that zone is either Spoon or Bottom Hourglass, and the ratio of high hip to waist — with 1.193 as the dividing line — is the only thing that separates them. About one woman in three lands there.' },
    { t: 'h2', s: 'How much does precision matter?' },
    { t: 'p', s: 'More than most guides admit. The rules are cut-offs, and in a sample of 1,986 measured women the median distance from a woman’s numbers to a different label was 2.4 cm; 43.6% were within 2 cm of one. So if your result says you are near a boundary, the useful next step is to re-measure the named circumference, not to search for a different calculator.' },
    { t: 'h2', s: 'Inches or centimetres?' },
    { t: 'p', s: 'Either. The published rules are in inches, so the calculator converts centimetres before applying them and shows both in the result. What matters is that all your measurements are in the same unit and that you have selected that unit.' },
  ],
  faq: [
    ['Should I measure over clothes?', 'Over underwear or thin, fitted clothing only. Thick fabric adds several centimetres and adds it unevenly, which changes the differences the rules use, not just the absolute numbers.'],
    ['Where exactly is the waist?', 'The narrowest point of the torso, usually a little above the navel. If you bend sideways, the crease that forms is at the natural waist. Do not use the level where trousers sit; that is lower and wider.'],
    ['What if my two readings differ?', 'Take a third and use the middle value. If the readings differ by more than 2 cm you are probably changing tape tension or level between them; re-check that the tape is flat and level all the way round.'],
    ['Do I need someone to help?', 'It helps for the back of the bust and hip measurements, where the tape tends to drop. If you are alone, use a mirror and take the reading with your arms down after positioning the tape.'],
    ['Why does the calculator sometimes ask for a high hip?', 'Because two of the nine shapes differ only in that measurement. It asks only when your first three numbers fall in that zone, so most people never see the field.'],
  ],
} };

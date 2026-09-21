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
      'Measure over underwear or thin, close-fitting clothes; thick fabric adds to every reading and adds unevenly.',
      'Stand normally with your weight on both feet and breathe out gently before reading the waist. Do not pull in.',
      'Keep the tape level all the way round — check the back in a mirror — and snug against the body without compressing it.',
      'Read each measurement twice. This site’s rule: if the two readings differ by more than a centimetre, take a third and use the middle value.',
    ] },
    { t: 'h2', s: 'Bust' },
    { t: 'p', s: 'Around the fullest part of the bust, with the tape level across the back at the same height. Wear the bra you usually wear, or none; a heavily padded or minimising bra changes the number. In our ANSUR II stability analysis this was, under that procedure’s tie-break, the measurement that most often decided the result.' },
    { t: 'h2', s: 'Waist' },
    { t: 'p', s: 'Around the narrowest part of the torso. If there is no obvious narrowest point, bend sideways: the crease that forms is at the natural waist; measure there, standing straight. Breathe out gently and read. Note that this is the shape rules’ waist. The waist-to-hip percentile compares against NHANES, which measures the waist just above the top of the hip bone under a fixed protocol; for many people that is a different, often larger, circumference, so the percentile is a rough placement rather than an exact comparison.' },
    { t: 'h2', s: 'Hips' },
    { t: 'p', s: 'Around the fullest part of the buttocks, feet together, tape level. This is usually lower than people expect — not at the hip bone, but at the widest point when seen from the side. Check in a mirror that the tape has not risen at the back.' },
    { t: 'h2', s: 'High hip' },
    { t: 'p', s: 'Around the upper hip, below the waist and above the fullest part of the hips. FFIT’s 2020 paper does not specify the landmark; this site’s convention is about 3 inches (7–8 cm) below the natural waist, tape level. You only need it when the calculator asks, which happens when no earlier rule has matched and your first three numbers satisfy the other conditions of Spoon or Bottom Hourglass; the ratio of high hip to waist, with 1.193 as the dividing value, then decides. In our ANSUR II analysis 34.7% of records needed it; that is a figure about that experiment.' },
    { t: 'h2', s: 'How much does precision matter?' },
    { t: 'p', s: 'The rules are thresholds. In our ANSUR II analysis of 1,297 women whose result did not need a high hip, the median single-measurement change that altered the result was 2.5 cm; 42.8% were within 2 cm and 23.8% within 1 cm. So if your result shows a boundary note, the useful next step is to re-measure the named circumference.' },
    { t: 'h2', s: 'Inches or centimetres?' },
    { t: 'p', s: 'Either. The published thresholds are in inches; centimetre inputs are converted before comparison and the result shows both. What matters is that all your measurements are in the same unit and that you have selected it.' },
  ],
  faq: [
    ['Should I measure over clothes?', 'Over underwear or thin, fitted clothing only. Thick fabric adds to the readings and adds unevenly, which changes the differences the rules use.'],
    ['Where exactly is the waist?', 'The narrowest point of the torso. If you bend sideways, the crease that forms is at the natural waist; measure there standing straight. Use the same point every time rather than where a waistband happens to sit.'],
    ['What if my two readings differ?', 'This site’s rule: take a third and use the middle value. If readings keep differing, check tape tension and level.'],
    ['Do I need someone to help?', 'It helps for the back of the bust and hip measurements, where the tape tends to drop. If you are alone, use a mirror and take the reading with your arms down after positioning the tape.'],
    ['Why does the calculator sometimes ask for a high hip?', 'Because two rules use high hip ÷ waist, and when their other conditions hold the result cannot be resolved without it. It asks only then.'],
  ],
} ,
 "zh": {
  "meta": {
   "title": "如何測量胸圍、腰圍與臀圍，供身材計算器使用",
   "description": "四項測量各自應在哪裡量、如何拿捲尺、哪些錯誤會讓結果相差好幾公分，以及為什麼相差兩公分就足以改變身材標籤。"
  },
  "layout": {
   "eyebrow": "測量方式",
   "h1": "如何測量胸圍、腰圍、臀圍與上臀圍",
   "lead": "計算器的準確度取決於你輸入的數字，而規則設有門檻，因此單一測量的小幅變動就可能改變結果。以下說明本網站各項測量的位置、如何測量以得到可重複的結果，以及當結果顯示你接近門檻時應先檢查什麼。",
   "ctaHead": "現在輸入數字",
   "ctaNote": "不會上傳任何資料。若你距離某個分界不到 2 cm，結果會告訴你應重新測量哪一項。",
   "updated": "2026-09-15"
  },
  "blocks": [
   {
    "t": "html",
    "s": "<svg viewBox=\"0 0 320 420\" width=\"100%\" style=\"max-width:340px;display:block;margin:0 auto\" role=\"img\" aria-label=\"軀幹正面圖，標示四條水平測量線：胸圍、腰圍、上臀圍與臀圍\">\n<path d=\"M160 20 c-22 0-38 18-38 40 0 14 6 26 14 34 -30 10-52 34-58 66 -6 30-4 60 4 90 6 24 8 50 8 78 0 24-2 46-2 66 h144 c0-20-2-42-2-66 0-28 2-54 8-78 8-30 10-60 4-90 -6-32-28-56-58-66 8-8 14-20 14-34 0-22-16-40-38-40z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\n<g stroke=\"currentColor\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\">\n<line x1=\"70\" y1=\"150\" x2=\"250\" y2=\"150\"/><line x1=\"82\" y1=\"212\" x2=\"238\" y2=\"212\"/><line x1=\"76\" y1=\"248\" x2=\"244\" y2=\"248\"/><line x1=\"66\" y1=\"292\" x2=\"254\" y2=\"292\"/></g>\n<g font-family=\"system-ui,sans-serif\" font-size=\"13\" fill=\"currentColor\">\n<text x=\"258\" y=\"154\">胸圍 — 最豐滿處</text><text x=\"244\" y=\"216\">腰圍 — 最細處</text><text x=\"250\" y=\"252\">上臀圍 — 腰部下方約 7 cm</text><text x=\"260\" y=\"296\">臀圍 — 最豐滿處</text></g></svg>"
   },
   {
    "t": "h2",
    "s": "開始前"
   },
   {
    "t": "ul",
    "items": [
     "使用縫紉用的軟尺。金屬捲尺無法平貼環繞身體曲線。",
     "隔著內衣褲或貼身薄衣物測量；厚重布料會增加每一項讀數，而且增加的幅度不一。",
     "雙腳平均承重、自然站立，讀取腰圍前輕輕吐氣。不要吸小腹。",
     "讓軟尺全程維持水平——用鏡子檢查背面——並貼合身體但不要勒緊。",
     "每一項測量讀兩次。本網站的規則：若兩次讀數相差超過一公分，請測第三次並採用中間值。"
    ]
   },
   {
    "t": "h2",
    "s": "胸圍"
   },
   {
    "t": "p",
    "s": "量胸部最豐滿處，並讓軟尺在背部維持同一高度的水平位置。穿著你平常穿的胸罩，或不穿也可以；厚墊或集中效果很強的胸罩會改變數字。在我們的 ANSUR II 穩定性分析中，依該程序的同分裁決規則，這是最常決定結果的測量項目。"
   },
   {
    "t": "h2",
    "s": "腰圍"
   },
   {
    "t": "p",
    "s": "量軀幹最細的部位。若沒有明顯最細處，向側邊彎身：形成的皺摺就是自然腰線；站直後在該處測量。輕輕吐氣後讀取數值。請注意，這是身材規則所用的腰圍。腰臀比百分位數是與 NHANES 比較；NHANES 依固定程序在髖骨上緣正上方測量腰圍，對許多人而言那是不同、且通常較大的圍度，因此該百分位數只是粗略定位，並非精確比較。"
   },
   {
    "t": "h2",
    "s": "臀圍"
   },
   {
    "t": "p",
    "s": "雙腳併攏，量臀部最豐滿處，並讓軟尺保持水平。這通常比人們預期的位置更低——不在髖骨處，而是從側面看最寬的位置。用鏡子確認軟尺沒有在背部往上滑。"
   },
   {
    "t": "h2",
    "s": "上臀圍"
   },
   {
    "t": "p",
    "s": "量上方臀部，位置在腰圍下方、臀圍最豐滿處上方。FFIT 的 2020 論文未指定測量標記點；本網站的慣例是自然腰線下方約 3 inches (7–8 cm)，並讓軟尺保持水平。只有計算器要求時才需要這項數據；當先前規則均未符合，而且你的前三項數字符合 Spoon 或 Bottom Hourglass 的其他條件時，就會要求。此時以上臀圍除以腰圍的比率、以 1.193 為分界值，決定結果。在我們的 ANSUR II 分析中，34.7% 的紀錄需要此數據；這個數字僅適用於該實驗。"
   },
   {
    "t": "h2",
    "s": "精確度有多重要？"
   },
   {
    "t": "p",
    "s": "規則設有門檻。在我們對 1,297 位結果不需要上臀圍的女性所做的 ANSUR II 分析中，改變結果的單次測量變動中位數為 2.5 cm；42.8% 距離門檻在 2 cm 以內，23.8% 在 1 cm 以內。因此，若你的結果顯示分界提示，下一個有用的步驟是重新測量所指名的圍度。"
   },
   {
    "t": "h2",
    "s": "使用英吋還是公分？"
   },
   {
    "t": "p",
    "s": "兩者皆可。已發表的門檻以英吋表示；輸入公分時會先轉換再比較，結果則會同時顯示兩者。重要的是所有測量都使用相同單位，而且你已選取該單位。"
   }
  ],
  "faq": [
   [
    "我應該隔著衣服測量嗎？",
    "只能隔著內衣褲或貼身薄衣物測量。厚重布料會增加讀數，而且增加的幅度不一，進而改變規則使用的差值。"
   ],
   [
    "腰圍的確切位置在哪裡？",
    "軀幹最細的位置。向側邊彎身時形成的皺摺就是自然腰線；站直後在該處測量。每次都使用同一位置，而不是腰頭剛好落在哪裡。"
   ],
   [
    "如果兩次讀數不同怎麼辦？",
    "本網站的規則：測第三次並採用中間值。若讀數持續不同，請檢查軟尺的鬆緊度與水平位置。"
   ],
   [
    "我需要請別人幫忙嗎？",
    "測量胸圍和臀圍的背部位置時有人協助會比較好，因為軟尺容易下滑。若只有你一人，請使用鏡子，定位軟尺後放下雙臂再讀取數值。"
   ],
   [
    "為什麼計算器有時會要求上臀圍？",
    "因為有兩條規則使用上臀圍 ÷ 腰圍，當其他條件成立時，沒有這項數據便無法判定結果。只有在那時才會要求。"
   ]
  ]
 }
};

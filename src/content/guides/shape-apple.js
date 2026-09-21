export default { path: '/shapes/apple/', en: {
  meta: { title: 'Apple Body Shape (Oval and Diamond): The Rules Most Calculators Do Not Have', description: 'Apple is this site’s grouping for the FFIT results Oval and Diamond, where the waist circumference exceeds the hips. The rules, the difference between the two, why the 2007 formula set handles this body differently, and how Rectangle differs.' },
  layout: { eyebrow: 'Shapes · Apple', h1: 'Apple body shape', lead: 'On this site, apple is a common-name grouping for two FFIT results, Oval and Diamond, in which the waist circumference exceeds the hips. Both belong to the 2004 FFIT shape set but were left out of the 2007 formula set that some calculators reproduce; a 2020 revision reintroduced them. Because the rules are checked in order, a waist larger than the hips can still match an earlier rule. Here are the two rules, the difference between them, and how the Rectangle result differs.', ctaHead: 'See whether your waist leads the hips', ctaNote: 'The calculator runs the 2020 rules, so a waist larger than the hips gets a real answer rather than an error.', updated: '2026-09-15' },
  tableData: { head: 'The two apple shapes', cols: ['FFIT shape', 'Rule', 'In words'], rows: [
    ['Oval', 'waist > hips and waist ≤ bust', 'Waist wider than the hips, but the bust is at least as wide as the waist'],
    ['Diamond', 'waist > hips and waist > bust', 'Waist wider than both hips and bust'],
  ] },
  blocks: [
    { t: 'h2', s: 'Why this shape was missing' },
    { t: 'p', s: 'The 2004 FFIT work defined nine shapes including Diamond and Oval. The 2007 formula set — the one calculator.net publishes — expressed seven of them as rules that assumed the waist is smaller than the bust; under those formulas a waist larger than the hips can return Rectangle, Triangle or Inverted Triangle depending on the other numbers, or match nothing. Sokolowski and Bettencourt (2020) documented this on plus-size scans, reintroduced Oval and Diamond into the formulas, and added lower bounds of zero to the Triangle, Inverted Triangle and Rectangle rules. This site runs the revised set. A different result from another calculator for a waist larger than the hips can reflect the 2007 formulas.' },
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
} ,
 "zh": {
  "meta": {
   "title": "蘋果型身形（Oval 與 Diamond）：多數計算機沒有的規則",
   "description": "蘋果型是本網站對 FFIT 結果 Oval 與 Diamond 的歸類，此時腰圍大於臀圍。本文說明規則、兩者差異、為何 2007 年公式組以不同方式處理這種身形，以及它與 Rectangle 的差別。"
  },
  "layout": {
   "eyebrow": "身形 · 蘋果型",
   "h1": "蘋果型身形",
   "lead": "在本網站中，蘋果型是兩種 FFIT 結果 Oval 與 Diamond 的常用名稱歸類，兩者皆為腰圍大於臀圍。兩者均屬於 2004 年 FFIT 身形組合，但未納入部分計算機採用的 2007 年公式組；2020 年修訂版重新納入了它們。由於規則會依序檢查，腰圍大於臀圍時仍可能先符合較早的規則。以下說明這兩項規則、兩者的差異，以及它與 Rectangle 結果的不同。",
   "ctaHead": "看看你的腰圍是否大於臀圍",
   "ctaNote": "本計算機採用 2020 年規則，因此腰圍大於臀圍時會得到實際結果，而非錯誤訊息。",
   "updated": "2026-09-15"
  },
  "tableData": {
   "head": "兩種蘋果型身形",
   "cols": [
    "FFIT 身形",
    "規則",
    "白話說明"
   ],
   "rows": [
    [
     "Oval",
     "waist > hips and waist ≤ bust",
     "腰圍大於臀圍，但胸圍至少與腰圍一樣大"
    ],
    [
     "Diamond",
     "waist > hips and waist > bust",
     "腰圍大於臀圍與胸圍"
    ]
   ]
  },
  "blocks": [
   {
    "t": "h2",
    "s": "為何這種身形曾經缺漏"
   },
   {
    "t": "p",
    "s": "2004 年的 FFIT 研究定義了九種身形，包括 Diamond 與 Oval。2007 年公式組——calculator.net 所發布的版本——將其中七種表示為假設腰圍小於胸圍的規則；在這些公式下，腰圍大於臀圍時，依其他數值而定，可能回傳 Rectangle、Triangle 或 Inverted Triangle，或完全無法符合任何結果。Sokolowski 與 Bettencourt（2020）在大尺碼掃描資料中記錄了這個情況，將 Oval 與 Diamond 重新納入公式，並為 Triangle、Inverted Triangle 與 Rectangle 規則加入零作為下限。本網站採用修訂後的組合。若腰圍大於臀圍時，其他計算機給出不同結果，可能反映了 2007 年公式。"
   },
   {
    "t": "table"
   },
   {
    "t": "h2",
    "s": "Oval 與 Diamond 的差異"
   },
   {
    "t": "p",
    "s": "兩者皆要求腰圍大於臀圍。差異在於胸圍：Oval 要求腰圍不得大於胸圍；Diamond 則要求腰圍也大於胸圍。兩者相鄰，分界門檻是腰圍與胸圍相等的點。兩者都在所有其他規則之後檢查，因此較早的規則——Top Hourglass，或 Triangle 的第二項條件——可能會先符合。"
   },
   {
    "t": "h2",
    "s": "與 Rectangle 的分界"
   },
   {
    "t": "p",
    "s": "Rectangle 要求腰圍不得大於胸圍或臀圍、胸圍與臀圍相差不到 3.6 吋，且沒有較早的規則符合。若胸圍為 41 吋、臀圍為 40 吋，腰圍為 39.6 吋會得到 Rectangle，腰圍為 40.4 吋則會得到 Oval——相差約 2 公分。計算機的穩定性說明會針對你的數值顯示此距離；若距離很小，請先依測量頁面所述的位置重新測量腰圍，再將任何一項結果視為確定。"
   },
   {
    "t": "h2",
    "s": "從另一面看命名問題"
   },
   {
    "t": "p",
    "s": "「蘋果型」在不同穿搭指南與計算機中的用法不同。本網站將其作為 Oval 與 Diamond 的常用名稱歸類；有些其他計算機則用它指 Inverted Triangle。Oval 要求腰圍大於臀圍且不大於胸圍；Diamond 則要求腰圍大於兩者。計算機結果一律使用 FFIT 類別名稱。因此，標題為「蘋果型該穿什麼」的頁面可能是在談其中任一種；請確認該指南所指的是哪一種。"
   },
   {
    "t": "h2",
    "s": "這個標籤不代表什麼"
   },
   {
    "t": "p",
    "s": "它是三個圍度之間的關係。它不測量或代表體重、健康狀況，或寬度在前後方向的位置；也不是其他身形用來比較的類別。穿搭頁面列出例如中段採用較長線條或選擇較高腰線等選項；這些是偏好，不是指示。"
   },
   {
    "t": "ul",
    "items": [
     "穿搭方向：<a href=\"/shapes/apple/outfits/\">蘋果型穿搭</a>",
     "位於分界處：<a href=\"/apple-vs-rectangle/\">蘋果型與矩形</a>",
     "另一種「蘋果型」：<a href=\"/shapes/inverted-triangle/\">倒三角</a>"
    ]
   }
  ],
  "faq": [
   [
    "哪些測量值會形成蘋果型身形？",
    "在本網站中：即 Oval 或 Diamond 結果。Oval 需要腰圍大於臀圍且不大於胸圍；Diamond 需要腰圍大於兩者。兩者皆在所有其他規則之後檢查。"
   ],
   [
    "為什麼另一個計算機給了我不同結果？",
    "它可能採用 2007 年 FFIT 公式，該公式沒有 Oval 或 Diamond 規則，也沒有腰圍差值的下限；腰圍大於臀圍時，可能回傳 Rectangle、Triangle 或 Inverted Triangle，或沒有結果。本網站採用 2020 年修訂版。"
   ],
   [
    "oval 與 diamond 有什麼差別？",
    "取決於胸圍是否大於腰圍。Oval：胸圍至少與腰圍一樣大。Diamond：腰圍大於胸圍，也大於臀圍。"
   ],
   [
    "蘋果型和倒三角相同嗎？",
    "在本網站中不是。此處蘋果型歸類 Oval 與 Diamond（腰圍大於臀圍）；有些其他計算機則以蘋果型指 Inverted Triangle（胸圍大於臀圍）。請確認指南所指的是哪一種。"
   ],
   [
    "我的腰圍和臀圍幾乎相等。我是哪一種？",
    "若沒有較早規則符合，你接近 Rectangle 與 Oval 之間的門檻。計算機會顯示你距離不同結果相差多少公分；在依賴任一結果前，請重新測量腰圍。"
   ]
  ]
 }
};

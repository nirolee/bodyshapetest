export default {
 "path": "/methodology/",
 "en": {
  "meta": {
   "title": "How the Body Shape Classification Works",
   "description": "The revised FFIT rules this site runs, in full and in order; what the 2020 revision changed; why some results need a high-hip measurement; how the stability note is computed; and what the NHANES waist-to-hip percentiles do and do not describe."
  },
  "layout": {
   "eyebrow": "Methodology",
   "h1": "How the classification works",
   "lead": "Every result the calculator shows can be traced to a rule printed on this page or to a public dataset named on it. This page sets out the rules and the order they are checked in, what the 2020 revision changed, how the stability note is computed and what its numbers mean, and what the percentiles compare against — including the places where this site’s method and the source data do not line up perfectly.",
   "ctaHead": "Run it on your own numbers",
   "ctaNote": "The calculator shows the rule that fired and how far a single measurement is from changing the result. Measurements are processed in your browser and not sent to this site.",
   "updated": "2026-09-15"
  },
  "tableData": {
   "head": "The revised FFIT-based rules used on this site, in the order they are checked (inches)",
   "cols": [
    "Shape",
    "Condition",
    "Note"
   ],
   "rows": [
    [
     "Hourglass",
     "bust − hips ≤ 1; hips − bust < 3.6; and (bust − waist ≥ 9 or hips − waist ≥ 10)",
     "bust may exceed hips by up to 1; hips may exceed bust by less than 3.6"
    ],
    [
     "Bottom hourglass",
     "3.6 ≤ hips − bust < 10; hips − waist ≥ 9; high hip ÷ waist < 1.193",
     "needs high hip"
    ],
    [
     "Top hourglass",
     "1 < bust − hips < 10; bust − waist ≥ 9",
     ""
    ],
    [
     "Spoon",
     "hips − bust > 2; hips − waist ≥ 7; high hip ÷ waist ≥ 1.193",
     "needs high hip; overlaps with several rules above and below, so order matters"
    ],
    [
     "Triangle",
     "(hips − bust ≥ 3.6 and 0 ≤ hips − waist < 9) or (bust − waist < 0 and hips − waist ≥ 0)",
     "second clause and lower bound from the 2020 revision"
    ],
    [
     "Inverted triangle",
     "bust − hips ≥ 3.6; bust − waist < 9; hips − waist ≥ 0",
     "hips − waist ≥ 0 from the 2020 revision"
    ],
    [
     "Rectangle",
     "|bust − hips| < 3.6; 0 ≤ bust − waist < 9; 0 ≤ hips − waist < 10",
     "lower bounds from the 2020 revision"
    ],
    [
     "Diamond",
     "waist > bust and waist > hips",
     "in the 2004 shape set; reintroduced into the formula set in 2020"
    ],
    [
     "Oval",
     "waist > hips and waist ≤ bust",
     "same"
    ]
   ]
  },
  "blocks": [
   {
    "t": "h2",
    "s": "Where the rules come from"
   },
   {
    "t": "p",
    "s": "The nine shapes are the Female Figure Identification Technique (FFIT), developed at North Carolina State University from 3D body scans and described by Simmons, Istook and Devarajan in 2004. The 2004 work defined nine shapes — including Diamond and Oval — from a larger set of scan measurements. A later formula set (2007) expressed seven of them as rules on bust, waist, high-hip and hip circumferences; that set assumed the waist is smaller than the bust and is the version some calculators reproduce (calculator.net publishes it). Sokolowski and Bettencourt (2020) showed it misclassified or failed to classify many larger bodies, reintroduced Diamond and Oval into the formulas, and added lower bounds of zero to the Triangle, Inverted Triangle and Rectangle rules. This implementation runs the 2020 revision using bust, waist, hip and, when needed, high-hip circumference."
   },
   {
    "t": "table"
   },
   {
    "t": "p",
    "s": "This site checks the rules in the order shown and returns the first match. Some conditions overlap — Hourglass and Spoon, for example — so the order determines the result. Where no rule matches — for example bust 50, waist 40, hips 40 inches: the bust leads by exactly 10, which is outside Top Hourglass (under 10) and outside Inverted Triangle (bust − waist must be under 9) — the calculator applies this site’s fallback and labels the result as such: bust 10 or more over hips returns Top Hourglass if bust − waist ≥ 9 and otherwise Inverted Triangle; hips 10 or more over bust returns Bottom Hourglass if hips − waist ≥ 9 and otherwise Triangle; anything else returns Rectangle. In the ANSUR II sample described below, no measured woman needed the fallback."
   },
   {
    "t": "h2",
    "s": "Why some results ask for a fourth measurement"
   },
   {
    "t": "p",
    "s": "Two rules, Spoon and Bottom Hourglass, include the ratio of high hip to waist, with 1.193 as the dividing value. When the rules are checked in order, no earlier rule has matched, the first three measurements satisfy the other conditions of either rule, and no high hip has been entered, the calculator cannot resolve the result and asks for it. (If an earlier rule matches — bust 37.5, waist 30, hips 40 inches is Hourglass — the high hip is never needed even though the Spoon conditions would also hold.) In our analysis of ANSUR II — 1,986 women, applying ANSUR’s chest and navel-level waist fields to the rules, with no high-hip measurement available — 34.7% of records fell into that zone. That figure describes that sample under that substitution; it is not an estimate for women in general. Without a high hip the result for those measurements is undetermined, and the calculator says so rather than guessing."
   },
   {
    "t": "p",
    "s": "FFIT’s 2020 paper does not specify where the high hip is taken. This site’s measuring convention is around the upper hip, about 3 inches (7–8 cm) below the natural waist and above the fullest part of the hips. That is a protocol choice made here, and a different landmark would shift the ratio."
   },
   {
    "t": "h2",
    "s": "How the stability note is computed"
   },
   {
    "t": "p",
    "s": "After classifying the measurements, the calculator changes each of bust, waist and hips in turn, up and down, on a 1 mm grid up to 15 cm, holding the other inputs (including high hip, if entered) fixed, and reports the smallest single-measurement change that produces a different result. A change to “needs high hip” counts as a different result. It does not search combinations of two measurements changing together, so it is an upper bound on the true distance to a boundary, not the shortest path. Where two changes of the same size would both alter the result, the one reported is the first in the fixed order bust, waist, hips, and increase before decrease; the “deciding measurement” counts below inherit that tie-break. When the reported distance is 2 cm or less, the calculator shows a boundary note; 2 cm is this site’s display threshold, not a measured error rate."
   },
   {
    "t": "p",
    "s": "Run over the 1,297 ANSUR II women whose result did not require a high hip, the median distance to a different result was 2.5 cm; 42.8% were within 2 cm and 23.8% within 1 cm. Under the tie-break above, the bust was the deciding measurement in 769 of those 1,297 cases, the waist in 298 and the hips in 230; the most frequent single changes were Rectangle to the undetermined high-hip zone (406) and Rectangle to Triangle (371). These are results of this procedure on that sample."
   },
   {
    "t": "h2",
    "s": "Where the waist-to-hip percentiles come from"
   },
   {
    "t": "p",
    "s": "The percentile places your waist circumference divided by your hip circumference against the same ratio for adults examined in the US National Health and Nutrition Examination Survey, cycles 2017–2018 and August 2021–August 2023, aged 18 and over with both measurements recorded: 5,890 women and 5,229 men. The women’s calculator compares against women, the men’s against men. The reported percentile is the number of the sample’s 1st–99th percentile values that your ratio equals or exceeds, so it moves in whole steps and is not interpolated; ties count as exceeded, and a ratio below the 1st percentile value reports 0. It is not a health score, and a high or low percentile is not a problem to solve."
   },
   {
    "t": "p",
    "s": "Three limits. First, NHANES measures the waist just above the top of the hip bone (the iliac crest) under a fixed protocol, whereas the shape calculator asks for the narrowest point of the torso; for many people the two differ, so the percentile is a rough placement against a differently defined measurement, not an exact comparison. Second, the figures are percentiles within the pooled, unweighted analytic sample, not estimates of US population percentiles. Third, NHANES records no bust measurement, so this site cannot say how common each FFIT shape is in the general population."
   },
   {
    "t": "h2",
    "s": "What ANSUR II is used for"
   },
   {
    "t": "p",
    "s": "ANSUR II is the 2012 anthropometric survey of US Army personnel, public in a working database of 1,986 women and 4,082 men. It records no bust and no high-hip circumference. ANSUR II records chest circumference (at the most prominent point of the chest, by its protocol) rather than bust, and its waist circumference at the level of the navel rather than at the narrowest point. This site’s experiments apply those two fields, plus buttock circumference for hips, to the rules as written; the protocols differ from this site’s measuring instructions, and the figures should be read as results of that substitution, not as what the same women would get from this site’s method. The sample is Army personnel and not representative of the general population. It is used here for the share of records needing a high hip, the distribution of results, the stability figures above and the breadth experiment below; it is not used for the percentiles."
   },
   {
    "t": "h2",
    "s": "The men’s calculator"
   },
   {
    "t": "p",
    "s": "This site’s five-category men’s classifier uses custom rules on chest, waist and hips: Oval if the waist is at least as large as the chest or the hips; otherwise Trapezoid or Inverted Triangle when the chest is at least 3.6 inches larger than the hips (Trapezoid if the waist is 9 or more inches under the chest); Triangle when the hips are at least 3.6 inches larger than the chest; otherwise Trapezoid with a 9-inch waist drop or Rectangle without. The 3.6 and 9 inch figures are borrowed from the FFIT rules for consistency. It is not a published or validated men’s FFIT standard."
   },
   {
    "t": "h2",
    "s": "What this site deliberately does not do"
   },
   {
    "t": "p",
    "s": "It does not classify from a photograph. Before building the site we ran a breadth-proxy experiment on ANSUR II, which records both circumferences and breadths (front-view widths) at the chest, waist and hips — no images were involved. Each breadth was scaled to a circumference estimate by the sample-mean ratio of circumference to breadth for that region, and the estimates were classified with a simplified four-category rule set (hips more than 5% over bust: pear; bust more than 5% over hips: inverted; waist within 25% of hips or a 9-inch bust-to-waist drop: hourglass; otherwise rectangle) that was also applied to the true circumferences. Over all 1,986 women the two labels agreed 70.1% of the time, against a 70.4% baseline from assigning everyone the most common category of that four-way scheme (which is why the baseline differs from the 46.6% Rectangle share under the nine FFIT rules). In the same data the ratio of depth to breadth differed by region — about 0.92 at the chest, 0.71 at the waist and 0.66 at the hips, with a coefficient of variation of 7–8% between individuals — which is the reason a single front-view width cannot stand in for a circumference. The breadth-proxy method did not outperform the baseline, so the site takes tape measurements."
   },
   {
    "t": "p",
    "s": "It does not use height, weight or BMI. Measurements are processed in the page and are not sent to this site; the site does not store them."
   }
  ],
  "faq": [
   [
    "Are these the same rules as calculator.net?",
    "They share an origin. calculator.net publishes the 2007 FFIT formulas for seven shapes; this site runs the 2020 revision with nine, which adds lower bounds and reintroduces Diamond and Oval. For many inputs the two agree. For a waist larger than the hips, the 2007 formulas can return Rectangle, Triangle or Inverted Triangle depending on the other numbers, or nothing; the revised set returns Oval or Diamond, or another shape if an earlier rule matches first."
   ],
   [
    "Why inches?",
    "The published thresholds are expressed in inches — 1, 2, 3.6, 7, 9 and 10 — plus one unit-free ratio, 1.193. Centimetre inputs are converted before comparison; the rounding used for display does not change the thresholds."
   ],
   [
    "Can two people with the same shape look different?",
    "Yes. The rules use three or four circumferences and nothing else. Height, weight, bone structure, front-to-back depth and posture are not measured, so the label describes a relationship between girths, not an appearance."
   ],
   [
    "What does the boundary note mean?",
    "That changing one measurement by 2 cm or less, with the others fixed, would give a different result. 2 cm is this site’s display threshold. The note names the measurement so you can take it again."
   ],
   [
    "Do you keep my measurements?",
    "No. They are processed in your browser and are not sent to this site or stored by it."
   ]
  ]
 }
,
 "zh": {
  "meta": {
   "title": "身材分類的運作方式",
   "description": "本網站採用的修訂版 FFIT 規則，完整且依序說明；2020 年修訂版改變了什麼；為何有些結果需要高臀圍測量值；穩定性提示如何計算。"
  },
  "layout": {
   "eyebrow": "方法論",
   "h1": "分類的運作方式",
   "lead": "計算機顯示的每個結果，都可追溯至本頁列出的規則或其所標示的公開資料集。本頁說明這些規則及其檢查順序、2020 年修訂版的變更、穩定性提示的計算方式與數字含義，以及百分位數比較的基準——包括本網站的方法與來源資料未能完全吻合之處。",
   "ctaHead": "用自己的數據試算",
   "ctaNote": "計算機會顯示觸發的規則，以及單一測量值距離改變結果還差多少。測量值會在您的瀏覽器中處理，不會傳送至本網站。",
   "updated": "2026-09-15"
  },
  "tableData": {
   "head": "本網站採用的修訂版 FFIT 規則，依檢查順序排列（吋）",
   "cols": [
    "身材",
    "條件",
    "說明"
   ],
   "rows": [
    [
     "Hourglass",
     "胸圍 − 臀圍 ≤ 1；臀圍 − 胸圍 < 3.6；且（胸圍 − 腰圍 ≥ 9 或 臀圍 − 腰圍 ≥ 10）",
     "胸圍可比臀圍大最多 1；臀圍可比胸圍大不足 3.6"
    ],
    [
     "Bottom hourglass",
     "3.6 ≤ 臀圍 − 胸圍 < 10；臀圍 − 腰圍 ≥ 9；高臀圍 ÷ 腰圍 < 1.193",
     "需要高臀圍"
    ],
    [
     "Top hourglass",
     "1 < 胸圍 − 臀圍 < 10；胸圍 − 腰圍 ≥ 9",
     ""
    ],
    [
     "Spoon",
     "臀圍 − 胸圍 > 2；臀圍 − 腰圍 ≥ 7；高臀圍 ÷ 腰圍 ≥ 1.193",
     "需要高臀圍；與上方及下方數個規則重疊，因此順序很重要"
    ],
    [
     "Triangle",
     "（臀圍 − 胸圍 ≥ 3.6 且 0 ≤ 臀圍 − 腰圍 < 9）或（胸圍 − 腰圍 < 0 且 臀圍 − 腰圍 ≥ 0）",
     "第二個子句與下限來自 2020 年修訂版"
    ],
    [
     "Inverted Triangle",
     "胸圍 − 臀圍 ≥ 3.6；胸圍 − 腰圍 < 9；臀圍 − 腰圍 ≥ 0",
     "臀圍 − 腰圍 ≥ 0 來自 2020 年修訂版"
    ],
    [
     "Rectangle",
     "|胸圍 − 臀圍| < 3.6；0 ≤ 胸圍 − 腰圍 < 9；0 ≤ 臀圍 − 腰圍 < 10",
     "下限來自 2020 年修訂版"
    ],
    [
     "Diamond",
     "腰圍 > 胸圍 且 腰圍 > 臀圍",
     "屬於 2004 年身材集合；2020 年重新納入公式集合"
    ],
    [
     "Oval",
     "腰圍 > 臀圍 且 腰圍 ≤ 胸圍",
     "同上"
    ]
   ]
  },
  "blocks": [
   {
    "t": "h2",
    "s": "規則的來源"
   },
   {
    "t": "p",
    "s": "這九種身材源自女性身材辨識技術（FFIT），由 North Carolina State University 根據 3D 身體掃描資料開發，並由 Simmons、Istook 與 Devarajan 於 2004 年描述。2004 年的研究以較大型的掃描測量集合定義了九種身材——包括 Diamond 與 Oval。後來的公式集合（2007）將其中七種表達為胸圍、腰圍、高臀圍與臀圍的規則；該集合假定腰圍小於胸圍，也是部分計算機採用的版本（calculator.net 有發布此版本）。Sokolowski 與 Bettencourt（2020）指出，它錯誤分類或無法分類許多較大體型的身體，將 Diamond 與 Oval 重新納入公式，並為 Triangle、Inverted Triangle 與 Rectangle 規則加入零的下限。本實作採用 2020 年修訂版，使用胸圍、腰圍、臀圍，以及必要時的高臀圍。"
   },
   {
    "t": "table"
   },
   {
    "t": "p",
    "s": "本網站依顯示順序檢查規則，並回傳第一個符合的結果。有些條件彼此重疊——例如 Hourglass 與 Spoon——因此順序決定結果。若沒有規則符合——例如胸圍 50、腰圍 40、臀圍 40 吋：胸圍恰好多 10，這不符合 Top Hourglass（須小於 10），也不符合 Inverted Triangle（胸圍 − 腰圍須小於 9）——計算機會套用本網站的備援規則，並如此標示結果：胸圍比臀圍多 10 或以上時，若胸圍 − 腰圍 ≥ 9 則回傳 Top Hourglass，否則回傳 Inverted Triangle；臀圍比胸圍多 10 或以上時，若臀圍 − 腰圍 ≥ 9 則回傳 Bottom Hourglass，否則回傳 Triangle；其餘情況回傳 Rectangle。在下方所述的 ANSUR II 樣本中，沒有任何受測女性需要使用備援規則。"
   },
   {
    "t": "h2",
    "s": "為何有些結果會要求第四項測量值"
   },
   {
    "t": "p",
    "s": "Spoon 與 Bottom Hourglass 兩項規則包含高臀圍與腰圍的比值，分界值為 1.193。當規則依序檢查時，沒有較早的規則符合，前三項測量值已滿足其中任一規則的其他條件，且尚未輸入高臀圍時，計算機無法判定結果，便會要求此測量值。（若較早的規則符合——胸圍 37.5、腰圍 30、臀圍 40 吋屬於 Hourglass——即使 Spoon 的條件也成立，仍不需要高臀圍。）在我們對 ANSUR II 的分析中——1,986 名女性，將 ANSUR 的胸圍與肚臍高度腰圍欄位套用至規則，且沒有可用的高臀圍測量值——34.7% 的紀錄落在該區域。此數字描述的是該樣本在此替代方式下的情況；並非對一般女性的估計。沒有高臀圍時，這些測量值的結果無法判定，計算機會如實說明，而非猜測。"
   },
   {
    "t": "p",
    "s": "FFIT 的 2020 年論文未說明高臀圍的測量位置。本網站的測量慣例是繞上臀部測量，約在自然腰線下方 3 吋（7–8 公分）、臀部最豐滿處上方。這是本網站做出的測量流程選擇；不同的定位點會改變比值。"
   },
   {
    "t": "h2",
    "s": "穩定性提示的計算方式"
   },
   {
    "t": "p",
    "s": "將測量值分類後，計算機會依序將胸圍、腰圍與臀圍各自增加及減少，以 1 mm 的間距搜尋至最多 15 cm，其他輸入值（包括已輸入的高臀圍）保持不變，並回報造成不同結果的最小單一測量變化。「需要高臀圍」的變化也算作不同結果。它不會搜尋兩項測量值同時變化的組合，因此這是到達邊界真實距離的上限，而非最短路徑。若同樣大小的兩種變化都會改變結果，回報的是固定順序中最先者：胸圍、腰圍、臀圍，且增加優先於減少；下文的「決定性測量值」計數沿用此同分判定規則。當回報距離為 2 公分或以下時，計算機會顯示邊界提示；2 公分是本網站的顯示門檻，不是測得的誤差率。"
   },
   {
    "t": "p",
    "s": "針對 1,297 名結果不需要高臀圍的 ANSUR II 女性執行後，到不同結果的距離中位數為 2.5 公分；42.8% 位於 2 公分內，23.8% 位於 1 公分內。依上述同分判定規則，在這 1,297 個案例中，胸圍是 769 例的決定性測量值，腰圍是 298 例，臀圍是 230 例；最常見的單一變化為 Rectangle 變為無法判定的高臀圍區域（406），以及 Rectangle 變為 Triangle（371）。這些是此程序在該樣本上的結果。"
   },
   {
    "t": "h2",
    "s": "腰臀比百分位數的來源"
   },
   {
    "t": "p",
    "s": "此百分位數會將您的腰圍除以臀圍，與在美國 National Health and Nutrition Examination Survey 中接受檢查、年滿 18 歲且兩項測量值均有記錄的成人之相同比值比較，資料涵蓋 2017–2018 與 2021 年 8 月至 2023 年 8 月週期：5,890 名女性與 5,229 名男性。女性計算機與女性比較，男性計算機與男性比較。回報的百分位數是樣本中您比值等於或超過的第 1–99 百分位數值個數，因此以整數步進且不做插值；相同值計為超過，低於第 1 百分位數值的比值會回報 0。它不是健康分數，高或低百分位數也不是需要解決的問題。"
   },
   {
    "t": "p",
    "s": "有三項限制。第一，NHANES 依固定流程在髖骨頂端（髂嵴）正上方測量腰圍，而身材計算機要求軀幹最細處；對許多人而言兩者不同，因此該百分位數只是相對於不同定義測量值的粗略定位，並非精確比較。第二，這些數值是合併且未加權的分析樣本內百分位數，不是美國人口百分位數的估計。第三，NHANES 不記錄胸圍，因此本網站無法說明各 FFIT 身材在一般人口中的常見程度。"
   },
   {
    "t": "h2",
    "s": "ANSUR II 的用途"
   },
   {
    "t": "p",
    "s": "ANSUR II 是針對美國陸軍人員的 2012 年人體測量調查，其工作資料庫公開收錄 1,986 名女性與 4,082 名男性。它不記錄胸圍或高臀圍。ANSUR II 記錄的是胸部圍度（依其流程於胸部最突處測量）而非胸圍，腰圍則於肚臍高度測量而非最細處。本網站的實驗將這兩個欄位，加上作為臀圍的臀部圍度，依照規則原文套用；其測量流程與本網站的測量指示不同，這些數字應理解為該替代方式的結果，而非同一批女性依本網站方法會得到的結果。樣本為陸軍人員，不能代表一般人口。它在此用於需要高臀圍的紀錄比例、結果分布、上述穩定性數據，以及下方的寬度實驗；不用於百分位數。"
   },
   {
    "t": "h2",
    "s": "男性計算機"
   },
   {
    "t": "p",
    "s": "本網站的五類男性分類器，對胸圍、腰圍與臀圍採用自訂規則：若腰圍至少與胸圍或臀圍同大，則為 Oval；否則，當胸圍至少比臀圍大 3.6 吋時為 Trapezoid 或 Inverted Triangle（若腰圍比胸圍小 9 吋或以上，則為 Trapezoid）；當臀圍至少比胸圍大 3.6 吋時為 Triangle；其餘情況，腰圍下降 9 吋者為 Trapezoid，否則為 Rectangle。3.6 與 9 吋數值是為了一致性而借用 FFIT 規則。這不是已發表或經驗證的男性 FFIT 標準。"
   },
   {
    "t": "h2",
    "s": "本網站刻意不做的事"
   },
   {
    "t": "p",
    "s": "本網站不會根據照片分類。在建置網站前，我們在 ANSUR II 上進行了寬度代理實驗；該資料同時記錄胸部、腰部與臀部的圍度及寬度（正面視角寬度）——未涉及任何影像。每個寬度皆依樣本中該區域圍度與寬度的平均比值，換算為圍度估計值，並以簡化的四類規則集合分類（臀圍比胸圍大超過 5%：梨形；胸圍比臀圍大超過 5%：倒三角；腰圍在臀圍的 25% 以內或胸圍至腰圍下降 9 吋：沙漏型；其餘為矩形）；同一規則也套用於真實圍度。在全部 1,986 名女性中，兩種標籤有 70.1% 的時間一致，而將每個人都指定為該四類方案中最常見類別的基準值為 70.4%（這也是為何此基準值不同於九項 FFIT 規則下 46.6% 的 Rectangle 比例）。在相同資料中，深度與寬度的比值因區域而異——胸部約 0.92、腰部 0.71、臀部 0.66，個體間的變異係數為 7–8%——這就是單一正面寬度無法替代圍度的原因。寬度代理方法未優於基準值，因此本網站採用皮尺測量。"
   },
   {
    "t": "p",
    "s": "本網站不使用身高、體重或 BMI。測量值會在頁面中處理，不會傳送至本網站；本網站不會儲存這些資料。"
   }
  ],
  "faq": [
   [
    "這些規則與 calculator.net 相同嗎？",
    "兩者有共同來源。calculator.net 發布的是七種身材的 2007 年 FFIT 公式；本網站採用九種身材的 2020 年修訂版，該版本加入下限並重新納入 Diamond 與 Oval。對許多輸入值而言，兩者結果相同。若腰圍大於臀圍，2007 年公式可能依其他數值回傳 Rectangle、Triangle 或 Inverted Triangle，也可能沒有結果；修訂版則回傳 Oval 或 Diamond，或者若較早規則優先符合，則回傳另一種身材。"
   ],
   [
    "為什麼使用吋？",
    "已發表的門檻以吋表示——1、2、3.6、7、9 與 10——另有一個無單位比值 1.193。公分輸入值會在比較前換算；用於顯示的四捨五入不會改變門檻。"
   ],
   [
    "相同身材的兩人看起來會不同嗎？",
    "會。規則只使用三或四項圍度，沒有使用其他資料。身高、體重、骨架結構、前後深度及姿勢均未測量，因此標籤描述的是圍度之間的關係，而非外觀。"
   ],
   [
    "邊界提示代表什麼？",
    "代表在其他測量值固定下，將一項測量值改變 2 公分或以下，便會得到不同結果。2 公分是本網站的顯示門檻。提示會標示該測量項目，方便您再次測量。"
   ],
   [
    "你們會保留我的測量值嗎？",
    "不會。它們會在您的瀏覽器中處理，不會傳送至本網站，也不會由本網站儲存。"
   ]
  ]
 }
};

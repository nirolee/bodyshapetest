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
    "s": "The nine shapes are the Female Figure Identification Technique (FFIT), developed at North Carolina State University from 3D body scans and described by Simmons, Istook and Devarajan in 2004. The 2004 work defined nine shapes — including Diamond and Oval — from a larger set of scan measurements. A later formula set (2007) expressed seven of them as rules on bust, waist, high-hip and hip circumferences; that set assumed the waist is smaller than the bust and is the version most calculators reproduce. Sokolowski and Bettencourt (2020) showed it misclassified or failed to classify many larger bodies, reintroduced Diamond and Oval into the formulas, and added lower bounds of zero to the Triangle, Inverted Triangle and Rectangle rules. This implementation runs the 2020 revision using bust, waist, hip and, when needed, high-hip circumference."
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
};

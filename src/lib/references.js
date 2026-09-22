// 頁尾「參考文獻」。紀律同 faceanalyzer：每一條都必須是實際查證過、能定位的來源，寧缺毋濫。
// note 寫「這篇證明了什麼」，包含對我們不利的部分。
export const REFS = {
  simmons2004: {
    authors: 'Simmons, Istook & Devarajan', year: 2004,
    title: 'Female Figure Identification Technique (FFIT) for Apparel, Part I: Describing Female Shapes',
    venue: 'Journal of Textile and Apparel, Technology and Management 4(1):1–16', id: 'JTATM 4(1)',
    url: 'https://www.researchgate.net/publication/286985579_Female_Figure_Identification_Technique_FFIT_for_apparel_part_I_Describing_female_shapes',
    note: { en: 'Defines the nine FFIT shapes (hourglass, top and bottom hourglass, spoon, triangle, inverted triangle, rectangle, diamond, oval) from bust, waist, high-hip and hip circumferences on 3D body scans of North American women. The rules on this site are this set, as later revised.',
           zh: '以北美女性 3D 人體掃描的胸圍、腰圍、高臀圍與臀圍，定義出 FFIT 九型（沙漏、上／下半身沙漏、湯匙、三角、倒三角、矩形、菱形、橢圓）。本網站採用的就是這一套規則的後續修訂版。' },
  },
  sokolowski2020: {
    authors: 'Sokolowski', year: 2020,
    title: 'Modification of the Female Figure Identification Technique (FFIT) Formulas to Include Plus Size Bodies',
    venue: '3DBODY.TECH 2020 Conference Proceedings', id: 'proc.3dbody.tech/2020',
    url: 'https://proc.3dbody.tech/papers/2020/2022sokolowski.pdf',
    note: { en: 'Shows the 2007 FFIT formulas assumed the waist is smaller than the bust and so failed on many larger bodies; adds the Diamond and Oval rules and a ≥ 0 lower bound to Triangle, Inverted Triangle and Rectangle. This site uses the revised formulas.',
           zh: '指出 2007 年版 FFIT 公式假設腰圍一定小於胸圍，因此在許多較大體型上失效；新增 Diamond 與 Oval 規則，並為 Triangle、Inverted Triangle、Rectangle 補上 ≥ 0 的下界。本網站使用修訂後的公式。' },
  },
  nhanes: {
    authors: 'National Center for Health Statistics', year: 2024,
    title: 'National Health and Nutrition Examination Survey: Body Measures (BMX) data, 2017–2018 and August 2021–August 2023',
    venue: 'CDC / NCHS public-use data files', id: 'NHANES BMX_J, BMX_L',
    url: 'https://wwwn.cdc.gov/nchs/nhanes/',
    note: { en: 'Source of the waist and hip circumferences behind the waist-to-hip percentiles here: 11,119 adults measured by trained staff. Unweighted, so the percentiles describe the examined sample rather than the US population exactly, and NHANES records no bust measurement.',
           zh: '本站腰臀比百分位的腰圍與臀圍來源：11,119 位由受訓人員實測的成人。未加權，所以百分位描述的是受檢樣本而非精確的全美人口；NHANES 不量胸圍。' },
  },
  ansur2: {
    authors: 'Gordon et al.', year: 2014,
    title: 'ANSUR II: 2012 Anthropometric Survey of U.S. Army Personnel — public working databases',
    venue: 'U.S. Army Natick Soldier RDEC / Penn State OPEN Design Lab', id: 'ANSUR II Female Public',
    url: 'https://www.openlab.psu.edu/ansur2/',
    note: { en: 'Used only to test how sensitive the FFIT labels are to small measurement changes (median 2.4 cm to flip; 43.6% of women within 2 cm). Army personnel are not a general-population sample, so it is not used for percentiles.',
           zh: '僅用於檢驗 FFIT 標籤對微小量測變化有多敏感（中位數改變 2.4 公分就會翻型；43.6% 的女性落在 2 公分以內）。軍方人員不是一般人口樣本，因此不用來算百分位。' },
  },
};
const MAP = {
  '/': ['simmons2004', 'sokolowski2020', 'nhanes'],
  '/methodology/': ['simmons2004', 'sokolowski2020', 'nhanes', 'ansur2'],
  '/waist-to-hip-ratio/': ['nhanes'],
  '/how-to-measure/': ['simmons2004'],
};
export function refsFor(path) {
  // 2026-09-23：這裡自己剝掉語言前綴。GuideLayout 直接把 Astro.url.pathname 傳進來，
  // 繁中就是 /zh/shapes/pear/，查不到表、整個參考文獻區塊靜默不渲染——13 篇繁中指南
  // 就這樣比英文版少了書目。GuideLayout 的註解一直寫著「去掉 /zh 前綴」，但沒人做。
  // 放在這裡而不是呼叫端：以後多一種語言也不用逐個改。
  path = path.replace(/^\/(zh)(?=\/)/, '');
  const keys = MAP[path] || (path.startsWith('/shapes/') ? ['simmons2004', 'sokolowski2020'] : path.includes('-vs-') ? ['simmons2004', 'sokolowski2020', 'ansur2'] : []);
  return keys.map((k) => REFS[k]);
}

// Kibbe tool only: appended entries leave all existing references and routes unchanged.
Object.assign(REFS, {
  kibbe1987: {
    authors: 'David Kibbe', year: 1987,
    title: 'David Kibbe’s Metamorphosis: Discover Your Image Identity and Dazzle as Only You Can',
    venue: 'Atheneum', id: 'ISBN 9780689118470',
    url: 'https://openlibrary.org/isbn/9780689118470',
    note: {
      en: 'Historical source of the 13 Image Identity names and yin/yang framework (chapters 3–4). Definitions here are brief paraphrases. This site’s new questions, numerical profiles and distance formula are not the book’s quiz or scoring key.',
      zh: '十三個 Image Identity 英文名與 yin／yang 架構的歷史來源（第 3–4 章）。本站定義為簡短轉述；題目、數值參考組合與距離公式是本站另訂，不是原書測驗或計分表。',
    },
  },
  kibbe2025: {
    authors: 'David Kibbe', year: 2025,
    title: 'David Kibbe’s Power of Style: A Guided Journey to Help You Discover Your Authentic Style',
    venue: 'Rodale Books', id: 'ISBN 9780593581148',
    url: 'https://www.penguinrandomhouse.com/books/723284/david-kibbes-power-of-style-by-david-kibbe/',
    note: {
      en: 'The publisher dates this book January 7, 2025, not 2022, and describes an updated Image Identity system and a guided process. It is not the basis of this historical 13-type quiz.',
      zh: '出版社確認出版日為 2025 年 1 月 7 日，並非 2022 年，且說明書中更新了 Image Identity 系統與探索方式。本站十三型測驗不採用此新版的判定方法。',
    },
  },
  kibbeComparison2025: {
    authors: 'Doctor T Designs', year: 2025,
    title: 'Book Review: David Kibbe’s Power of Style',
    venue: 'Comparative book review, February 26', id: 'Secondary source · Changes Since the 80s',
    url: 'https://doctortdesigns.com/2025/02/26/book-review-david-kibbes-power-of-style/',
    note: {
      en: 'Secondary corroboration for the 13-to-10 comparison: Natural, Classic and Gamine are no longer standalone identities. Its comparison table separates the retained type names from the revised descriptive style titles. This review is not an official scoring source.',
      zh: '用於核對十三型與十型差異的二手書評：Natural、Classic、Gamine 不再單列。對照表區分保留的類型名與更新的風格稱號。這篇書評不是官方計分依據。',
    },
  },
});
MAP['/kibbe/'] = ['kibbe1987', 'kibbe2025', 'kibbeComparison2025'];

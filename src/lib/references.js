// 頁尾「參考文獻」。紀律同 faceanalyzer：每一條都必須是實際查證過、能定位的來源，寧缺毋濫。
// note 寫「這篇證明了什麼」，包含對我們不利的部分。
export const REFS = {
  simmons2004: {
    authors: 'Simmons, Istook & Devarajan', year: 2004,
    title: 'Female Figure Identification Technique (FFIT) for Apparel, Part I: Describing Female Shapes',
    venue: 'Journal of Textile and Apparel, Technology and Management 4(1):1–16', id: 'JTATM 4(1)',
    url: 'https://www.researchgate.net/publication/286985579_Female_Figure_Identification_Technique_FFIT_for_apparel_part_I_Describing_female_shapes',
    note: { en: 'Defines the nine FFIT shapes (hourglass, top and bottom hourglass, spoon, triangle, inverted triangle, rectangle, diamond, oval) from bust, waist, high-hip and hip circumferences on 3D body scans of North American women. The rules on this site are this set, as later revised.' },
  },
  sokolowski2020: {
    authors: 'Sokolowski', year: 2020,
    title: 'Modification of the Female Figure Identification Technique (FFIT) Formulas to Include Plus Size Bodies',
    venue: '3DBODY.TECH 2020 Conference Proceedings', id: 'proc.3dbody.tech/2020',
    url: 'https://proc.3dbody.tech/papers/2020/2022sokolowski.pdf',
    note: { en: 'Shows the 2007 FFIT formulas assumed the waist is smaller than the bust and so failed on many larger bodies; adds the Diamond and Oval rules and a ≥ 0 lower bound to Triangle, Inverted Triangle and Rectangle. This site uses the revised formulas.' },
  },
  nhanes: {
    authors: 'National Center for Health Statistics', year: 2024,
    title: 'National Health and Nutrition Examination Survey: Body Measures (BMX) data, 2017–2018 and August 2021–August 2023',
    venue: 'CDC / NCHS public-use data files', id: 'NHANES BMX_J, BMX_L',
    url: 'https://wwwn.cdc.gov/nchs/nhanes/',
    note: { en: 'Source of the waist and hip circumferences behind the waist-to-hip percentiles here: 11,119 adults measured by trained staff. Unweighted, so the percentiles describe the examined sample rather than the US population exactly, and NHANES records no bust measurement.' },
  },
  ansur2: {
    authors: 'Gordon et al.', year: 2014,
    title: 'ANSUR II: 2012 Anthropometric Survey of U.S. Army Personnel — public working databases',
    venue: 'U.S. Army Natick Soldier RDEC / Penn State OPEN Design Lab', id: 'ANSUR II Female Public',
    url: 'https://www.openlab.psu.edu/ansur2/',
    note: { en: 'Used only to test how sensitive the FFIT labels are to small measurement changes (median 2.4 cm to flip; 43.6% of women within 2 cm). Army personnel are not a general-population sample, so it is not used for percentiles.' },
  },
};
const MAP = {
  '/': ['simmons2004', 'sokolowski2020', 'nhanes'],
  '/methodology/': ['simmons2004', 'sokolowski2020', 'nhanes', 'ansur2'],
  '/waist-to-hip-ratio/': ['nhanes'],
  '/how-to-measure/': ['simmons2004'],
};
export function refsFor(path) {
  const keys = MAP[path] || (path.startsWith('/shapes/') ? ['simmons2004', 'sokolowski2020'] : path.includes('-vs-') ? ['simmons2004', 'sokolowski2020', 'ansur2'] : []);
  return keys.map((k) => REFS[k]);
}

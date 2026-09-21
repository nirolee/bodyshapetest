/**
 * 英文在根目錄，繁中在 /zh/。清單驅動：加語言只需擴 LANGS / LOCALE / OG_LOCALE / LANG_NAME
 * 與一份 Dict，路由與路徑函式都不用再改。
 *
 * 2026-09-15 初版刻意只留 en，理由記為「西/葡/中/韓的 body shape 詞量都不成立」。
 * 2026-09-21 推翻中文那一條，依據是當時沒有的三樣東西：
 *   1. 那次判斷用的工具對繁中是瞎的——實測 SimilarWeb 給「身材類型」0 筆、「梨形身材」14 筆全是垃圾詞；
 *      Bing Webmaster 關鍵詞接口對 tw 市場連我們自己在排第 7–11 名的「臉型測試」「菱形臉」都回 0。
 *      量不到不等於沒有。
 *   2. 哥飛讀真實 TW SERP：「身材比例計算機」難度 6.2/100、進前十只需 5–10 個引用域，
 *      前十全是內頁、沒有人押首頁經營，最弱的是 DR 0（5 個月）與 DR 1；
 *      「梨形身材穿搭」難度 15.6，第 2 名 DR 2。對照英文 body shape calculator 難度 47.7、需 55–120 個引用域。
 *   3. 姊妹站 faceanalyzer 的繁中版是活的先例：上線 20 天，週展示 0 → 206 → 804，位置 7.6–11.5。
 * 誠實邊界：單個繁中詞的量確實小（GSC 實測同類詞 10–100 次/月），所以 9-15 說「量小」沒錯，
 * 錯的是把「量小」讀成「不成立」——繁中的形態就是詞多、每個小、競爭極弱。
 *
 * 英文留在根目錄不動：英文詞量大一個量級，首頁權重要給大的那個市場（faceanalyzer 2026-09-09 同樣結論）。
 */
export const LANGS = ['en', 'zh'] as const;
export type Lang = (typeof LANGS)[number];

export const ROOT_LANG: Lang = 'en';
export const PREFIXED = LANGS.filter((l) => l !== ROOT_LANG);

export const LOCALE: Record<Lang, string> = { en: 'en', zh: 'zh-Hant' };
export const OG_LOCALE: Record<Lang, string> = { en: 'en_US', zh: 'zh_TW' };
/** 語言選單一律用目標語言自己的寫法 */
export const LANG_NAME: Record<Lang, string> = { en: 'English', zh: '繁體中文' };

export function langFromPath(pathname: string): Lang {
  for (const l of PREFIXED) if (pathname === `/${l}` || pathname.startsWith(`/${l}/`)) return l;
  return ROOT_LANG;
}

/** 去掉語言前綴，拿到「裸路徑」（永遠以 / 開頭、以 / 結尾） */
function bareOf(pathname: string): string {
  const l = langFromPath(pathname);
  const bare = l === ROOT_LANG ? pathname : pathname.slice(l.length + 1) || '/';
  return bare.startsWith('/') ? bare : `/${bare}`;
}

export function localePath(lang: Lang, path: string): string {
  const bare = bareOf(path);
  return lang === ROOT_LANG ? bare : `/${lang}${bare === '/' ? '/' : bare}`;
}

export function altPath(pathname: string): Record<Lang, string> {
  const bare = bareOf(pathname);
  return Object.fromEntries(LANGS.map((l) => [l, localePath(l, bare)])) as Record<Lang, string>;
}

type Nav = [string, string][];
export interface Dict {
  siteName: string; tagline: string; nav: Nav; switchTo: string; switchLabel: string;
  footer: { blurb: string; toolsHead: string; aboutHead: string; tools: Nav; about: Nav; disclaimer: string; support: string };
  faqHead: { eyebrow: string; h2: string };
  refs: { head: string; intro: string };
  relatedHead: { eyebrow: string; h2: string };
}
const en: Dict = {
  siteName: 'Body Shape Test',
  tagline: 'Three measurements, the rules in the open, and how close you sit to the next shape',
  nav: [['/', 'Calculator'], ['/men/', 'Men'], ['/how-to-measure/', 'How to measure'], ['/shapes/', 'Shapes'], ['/waist-to-hip-ratio/', 'Waist-to-hip'], ['/methodology/', 'Method']],
  switchTo: '', switchLabel: 'Switch language',
  footer: {
    blurb: 'Type your bust, waist and hip measurements and get your shape under the published FFIT rules, with the formulas shown, how far you are from the nearest boundary, and where your waist-to-hip ratio sits among measured adults. Nothing is uploaded or stored.',
    toolsHead: 'Tools', aboutHead: 'Read',
    tools: [['/', 'Body Shape Calculator'], ['/men/', 'Men\'s Body Type Calculator'], ['/waist-to-hip-ratio/', 'Waist-to-Hip Ratio Calculator']],
    about: [['/how-to-measure/', 'How to measure bust, waist and hips'], ['/shapes/', 'The body shapes'], ['/men/', 'Men’s body types'], ['/methodology/', 'How the classification works'], ['/privacy/', 'Privacy'], ['/terms/', 'Terms']],
    disclaimer: 'Styling reference only. A shape label describes proportions; it is not a health assessment and not a ranking.',
    support: 'Support',
  },
  faqHead: { eyebrow: 'FAQ', h2: 'Questions people ask' },
  refs: { head: 'References', intro: 'The rules and figures on this page come from the sources below. Reference values are conventions from the literature, not targets.' },
  relatedHead: { eyebrow: 'Related', h2: 'Keep reading' },
};

/**
 * 繁中命名規矩（翻譯這個站的任何一頁都照這條）：
 * - FFIT 的九個結果名是已發表的方法論術語，**一律保留英文原文**：
 *   Hourglass / Top Hourglass / Bottom Hourglass / Spoon / Triangle /
 *   Inverted Triangle / Rectangle / Diamond / Oval。頁面本來就把規則印出來，讀者對得上。
 * - 「常用名分組」用繁中原生說法：梨形／沙漏型／蘋果型／矩形／倒三角。
 *   這些是台港讀者實際在搜的詞（Google 補全各 10 條），不是我們造的譯名。
 * - FFIT、ANSUR II、NHANES、BMI 等專名不翻。數字、閾值、單位一律照搬。
 */
const zh: Dict = {
  siteName: '身材類型測試',
  tagline: '三個圍度、規則攤開寫，以及你離下一個體型還差多少',
  nav: [['/', '計算器'], ['/men/', '男性'], ['/how-to-measure/', '怎麼量'], ['/shapes/', '體型'], ['/waist-to-hip-ratio/', '腰臀比'], ['/methodology/', '方法']],
  switchTo: '', switchLabel: '切換語言',
  footer: {
    blurb: '輸入胸圍、腰圍、臀圍，依已發表的 FFIT 規則判出你的體型：公式攤開寫、告訴你離最近的分界還差幾公分，以及你的腰臀比在受測成人裡的百分位。全程在你的瀏覽器裡算，不上傳也不留存。',
    toolsHead: '工具', aboutHead: '閱讀',
    tools: [['/', '身材類型計算器'], ['/men/', '男性體型計算器'], ['/waist-to-hip-ratio/', '腰臀比計算器']],
    about: [['/how-to-measure/', '胸圍、腰圍、臀圍怎麼量'], ['/shapes/', '各種體型'], ['/men/', '男性體型'], ['/methodology/', '判定是怎麼做的'], ['/privacy/', '隱私權'], ['/terms/', '條款']],
    disclaimer: '僅供穿搭參考。體型標籤描述的是圍度之間的關係，不是健康評估，也不是排名。',
    support: '聯絡',
  },
  faqHead: { eyebrow: '常見問題', h2: '大家會問的' },
  refs: { head: '參考資料', intro: '本頁的規則與數字出自下列來源。參考值是文獻裡的慣例，不是你該達到的目標。' },
  relatedHead: { eyebrow: '相關', h2: '接著讀' },
};

export const UI: Record<Lang, Dict> = { en, zh };

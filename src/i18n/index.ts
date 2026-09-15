/**
 * 單語站（英文在根目錄）。結構沿用 faceanalyzer 的清單驅動寫法，日後要加語言只需擴 LANGS
 * 與四張表——但 2026-09-15 掃過：西/葡/中/韓的 body shape 詞量都不成立，日文是另一套「骨格診断」
 * 體系不能翻譯，所以目前刻意只留 en。
 */
export const LANGS = ['en'] as const;
export type Lang = (typeof LANGS)[number];
export const ROOT_LANG: Lang = 'en';
export const LOCALE: Record<Lang, string> = { en: 'en' };
export const OG_LOCALE: Record<Lang, string> = { en: 'en_US' };
export const LANG_NAME: Record<Lang, string> = { en: 'English' };

export function langFromPath(_p: string): Lang { return 'en'; }
export function localePath(_lang: Lang, path: string): string { return path; }
export function altPath(path: string): Record<Lang, string> { return { en: path }; }

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
export const UI: Record<Lang, Dict> = { en };

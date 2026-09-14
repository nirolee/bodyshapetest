export const GUIDE_TABLES = {};
export function tableFor(slug, lang) { const t = GUIDE_TABLES[slug]; return t && t[lang] ? t[lang] : null; }

/**
 * 把受控內容裡的站內絕對連結本地化（2026-09-23 加）。
 *
 * 為什麼需要：src/content/ 下的指南資料是 en / zh 共用一份，正文裡的 <a href> 只寫了
 * 英文路徑（例如 <a href="/shapes/pear/">梨形</a>）。翻譯腳本的註解說「由路由層加前綴」，
 * 但渲染層從來沒做——結果 20 個繁中頁面共 90 多處正文連結把讀者送回英文站。
 *
 * 只處理以單個 / 開頭的站內路徑：外鏈（http、//）、錨點（#）、mailto/tel 一律不碰，
 * 已經帶 /zh/ 前綴的也不會再加一層。英文（預設語言）原樣返回。
 *
 * 安全性：輸入只來自本倉庫自己的內容檔，不接受使用者輸入——與 set:html 的既有前提一致。
 */
export function localizeLinks(html, lang) {
  if (lang === 'en' || typeof html !== 'string') return html;
  const prefix = `/${lang}`;
  return html.replace(/(<a\b[^>]*\shref=")(\/[^"]*)"/g, (whole, head, path) => {
    if (path.startsWith(prefix + '/') || path === prefix) return whole;
    if (path.startsWith('//')) return whole;
    return `${head}${prefix}${path}"`;
  });
}

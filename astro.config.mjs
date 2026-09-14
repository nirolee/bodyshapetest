import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/lib/site-config.ts';
// trailingSlash: 'always' + directory 輸出：CF Pages 對目錄格式強制 308 加尾斜杠，canonical / sitemap 必須一致（dayonefix 踩過）。
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (p) => !/\/404\/|\/terms\/|\/privacy\//.test(new URL(p).pathname), changefreq: 'weekly', priority: 0.7 })],
});

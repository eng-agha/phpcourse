import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { renderPage, renderHead } from './src/render/page.js'

const root = fileURLToPath(new URL('.', import.meta.url))
// configure-pages supplies SITE_URL in CI, including project paths/custom domains.
const siteUrl = process.env.SITE_URL || 'https://eng-agha.github.io/phpcourse/'
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1]
const base = process.env.VITE_BASE_PATH || (siteUrl ? new URL(siteUrl).pathname.replace(/\/?$/, '/') : repository && !repository.endsWith('.github.io') ? `/${repository}/` : '/PHP/')
if (!base.startsWith('/') || !base.endsWith('/')) throw new Error('VITE_BASE_PATH must begin and end with /.')

export default defineConfig({
  base,
  plugins: [tailwindcss(), {
    name: 'static-course-content',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const notFound = ctx.filename.endsWith('404.html')
        return html.replace('<!-- head -->', renderHead(notFound, siteUrl)).replace('<!-- app -->', renderPage(notFound, base))
      },
    },
    generateBundle() {
      // Never claim an unverified GitHub username in SEO metadata.
      const canonical = siteUrl ? `${siteUrl.replace(/\/$/, '')}/` : ''
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n${canonical ? `Sitemap: ${canonical}sitemap.xml\n` : ''}` })
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${canonical ? `<url><loc>${canonical.replace(/&/g, '&amp;')}</loc></url>` : ''}</urlset>\n` })
    },
  }],
  build: { outDir: 'dist', rollupOptions: { input: { main: resolve(root, 'index.html'), notFound: resolve(root, '404.html') } } },
})

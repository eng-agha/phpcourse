import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { home, head } from './src/render/classroom.js'
const root=fileURLToPath(new URL('.',import.meta.url))
const siteUrl=(process.env.SITE_URL||'https://eng-agha.github.io/phpcourse/').replace(/\/?$/,'/')
const base=process.env.VITE_BASE_PATH||new URL(siteUrl).pathname
export default defineConfig({base,plugins:[tailwindcss(),{name:'classroom-html',transformIndexHtml:{order:'pre',handler(html,ctx){const missing=ctx.filename.endsWith('404.html');return html.replace('<!-- head -->',head(missing?'Page not found':'Learn PHP, one small step at a time','A 25-week practical PHP and MySQL classroom. English lessons with Kurdish highlights.',siteUrl)).replace('<!-- app -->',missing?`<main class="container not-found"><h1>Page not found.</h1><a href="${base}">Return to the classroom →</a></main>`:home(base))}}}],build:{outDir:'dist',rollupOptions:{input:{main:resolve(root,'index.html'),notFound:resolve(root,'404.html')}}}})

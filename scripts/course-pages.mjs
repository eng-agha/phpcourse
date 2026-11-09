import { functionPage } from '../src/render/functions.js'
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs'
import {modules,lessons} from '../src/data/course.js'
import {lessonPage,modulePage,about,e} from '../src/render/classroom.js'
import {highlight} from '../src/render/highlight.js'
const shell=readFileSync('dist/index.html','utf8'),canonical=shell.match(/rel="canonical" href="([^"]+)"/)[1],base=new URL(canonical).pathname
const paths=['']
function emit(path,title,description,body){
 let html=shell.replace(/<title>[\s\S]*?<\/title>/,()=>`<title>${e(title)} · PHP Classroom</title>`).replace(/<meta name="description" content="[^"]*">/,()=>`<meta name="description" content="${e(description)}">`).replace(/<link rel="canonical" href="[^"]*">/,()=>`<link rel="canonical" href="${canonical}${path}">`).replace(/<meta property="og:title" content="[^"]*">/,()=>`<meta property="og:title" content="${e(title)}">`).replace(/<meta property="og:description" content="[^"]*">/,()=>`<meta property="og:description" content="${e(description)}">`).replace(/<meta property="og:url" content="[^"]*">/,()=>`<meta property="og:url" content="${canonical}${path}">`).replace(/<body>[\s\S]*?<\/body>/,()=>`<body>${body}</body>`)
 // Vite places bundled scripts in the head, so every generated page uses the same entry.
 mkdirSync('dist/'+path,{recursive:true});writeFileSync('dist/'+path+'index.html',html);paths.push(path)
}
for(const m of modules)emit(`phases/${m.id}/`,m.title,m.description,modulePage(base,m.id))
for(const lesson of lessons){if(!lesson.code)throw new Error('Missing example '+lesson.id);emit(`lessons/week${lesson.id}/`,lesson.title,lesson.guided,lessonPage(base,lesson,highlight))}
emit('functions/','25 useful PHP functions','A beginner-friendly reference with examples, expected output and Kurdish highlights.',functionPage(base))
emit('about/','Meet Abdulrahman Ismael','Your PHP instructor and technical trainer.',about(base))
writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>${canonical}${p}</loc></url>`).join('')}</urlset>`)
writeFileSync('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${canonical}sitemap.xml\n`)
console.log('Built 50 bilingual lessons, 10 beginner chapters and instructor page.')

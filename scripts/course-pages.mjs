import { projectGuide, quizSection, learningHub } from '../src/render/learning.js'
import { learningUi } from '../src/data/learning.js'
import { highlight } from '../src/render/highlight.js'
import { instructorPage } from '../src/render/instructor.js'
import { instructor } from '../src/data/instructor.js'
import { phaseLessons, lessonUi } from '../src/data/lessons.js'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { roadmapPhases, resources, courseUi as ui } from '../src/data/roadmap.js'
import { escape as e, icon } from '../src/render/page.js'
const originalShell = readFileSync('dist/index.html','utf8')
const shell = originalShell.replace('<!-- 3. WHY THIS ROADMAP -->', '<!-- 3. WHY THIS ROADMAP -->')
  .replace('<section id="why-us"', learningHub() + '<section id="why-us"')
writeFileSync('dist/index.html', shell)
const canonical = shell.match(/rel="canonical" href="([^"]+)"/)[1]
const base = new URL(canonical).pathname
const url = p => `${base}phases/${p.id}/`
const nav = `<header id="main-navbar"><div class="container nav-shell"><a class="brand" href="${base}">${icon('book-open')}${ui.title}</a><a class="button button-secondary" href="${base}">${ui.all}</a></div></header>`
function page(title, description, content, path='') {
 return shell.replace(/<title>.*?<\/title>/s,`<title>${e(title)}</title>`)
 .replace(/<meta name="description" content="[^"]*">/,`<meta name="description" content="${e(description)}">`)
 .replace(/<link rel="canonical" href="[^"]*">/,`<link rel="canonical" href="${canonical}${path}">`)
 .replace(/<meta property="og:title" content="[^"]*">/,`<meta property="og:title" content="${e(title)}">`)
 .replace(/<meta property="og:url" content="[^"]*">/,`<meta property="og:url" content="${canonical}${path}">`)
 .replace(/<body>[\s\S]*?<\/body>/,`<body>${nav}<main id="main" class="container course-main">${path.startsWith('phases/') ? learningHub() : ''}${content}</main></body>`)
}
for (const [i,p] of roadmapPhases.entries()) {
 const lessons = phaseLessons[p.id]
 if (!lessons || lessons.length !== p.topics.length) throw new Error(`Incomplete lessons for phase ${p.id}`)
 const lessonContent = `<p class="lesson-note">${lessonUi.note}</p><nav class="lesson-toc" aria-label="${lessonUi.overview}">${p.topics.map((title, index) => `<a href="#topic-${index + 1}">${p.id}.${index + 1} — ${e(title)}</a>`).join('')}</nav>` + lessons.map((lesson, index) => `<section class="lesson" data-lesson-id="${p.id}.${index+1}" id="topic-${index + 1}" aria-labelledby="lesson-title-${index + 1}"><h2 id="lesson-title-${index + 1}"><bdi>${p.id}.${index + 1} — ${e(p.topics[index])}</bdi></h2><h3>${lessonUi.explanation}</h3><p>${e(lesson.explanation)}</p><h3>${lessonUi.example}</h3><div class="code-caption" dir="ltr">${e(lesson.language)}</div><pre tabindex="0" dir="ltr" aria-label="${lessonUi.example} ${p.id}.${index + 1}"><code>${highlight(lesson.code)}</code></pre><h3>${lessonUi.walkthrough}</h3><p>${e(lesson.walkthrough)}</p><div class="lesson-exercise"><h3>${lessonUi.exercise}</h3><p>${e(lesson.exercise)}</p></div><button class="button button-secondary lesson-complete" type="button" data-complete="${p.id}.${index+1}" aria-pressed="false">${learningUi.complete}</button></section>`).join('')

 const content = `<div class="course-layout"><aside class="course-sidebar"><nav aria-label="${ui.all}">${roadmapPhases.map(item=>`<a ${item.id===p.id?'aria-current="page"':''} href="${url(item)}">${item.id}. ${e(item.title)}</a>`).join('')}</nav></aside><article class="course-article"><span class="eyebrow">${p.id} / 10 · ${e(p.duration)}</span><h1>${e(p.title)}</h1><p class="course-summary">${e(p.summary)}</p><p class="phase-progress" data-phase-progress="${p.id}" aria-live="polite"></p><p class="storage-status">${learningUi.storage}</p><section><h2>${ui.topics}</h2><ol class="course-topics">${p.topics.map((t,index)=>`<li><a href="#topic-${index+1}"><bdi>${e(t)}</bdi></a></li>`).join('')}</ol></section>${lessonContent}${projectGuide(p.id)}${quizSection(p.id)}<section class="practice-project"><h2>${ui.project}</h2><p>${e(p.project)}</p></section><section><h2>${ui.plan}</h2><ol class="course-topics">${ui.steps.map(s=>`<li>${s}</li>`).join('')}</ol></section><section><h2>${ui.resources}</h2><div class="course-links">${resources.map(r=>`<a href="${e(r.url)}" target="_blank" rel="noopener noreferrer"><bdi>${e(r.name)}</bdi>${icon('external-link')}</a>`).join('')}</div></section><nav class="course-pagination">${i?`<a class="button button-secondary" href="${url(roadmapPhases[i-1])}">${ui.previous}</a>`:''}${i<9?`<a class="button button-primary" href="${url(roadmapPhases[i+1])}">${ui.next}</a>`:''}</nav></article></div>`
 mkdirSync(`dist/phases/${p.id}`,{recursive:true})
 writeFileSync(`dist/phases/${p.id}/index.html`,page(p.title,p.summary,content,`phases/${p.id}/`))
}
mkdirSync('dist/about', { recursive: true })
writeFileSync('dist/about/index.html', page(instructor.name + ' — ' + instructor.more, instructor.bio, instructorPage(base), 'about/'))
writeFileSync('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['','about/',...roadmapPhases.map(p=>`phases/${p.id}/`)].map(path=>`<url><loc>${canonical}${path}</loc></url>`).join('')}</urlset>`)
console.log('Preserved roadmap homepage and generated 10 independent phase pages.')


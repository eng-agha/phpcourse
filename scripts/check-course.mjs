import assert from 'node:assert/strict'
import {readFileSync,existsSync} from 'node:fs'
import {roadmapPhases} from '../src/data/roadmap.js'
import {escape} from '../src/render/page.js'
const home=readFileSync('dist/index.html','utf8')
assert.ok(home.includes('id="hero"'))
assert.equal((home.match(/class="timeline-card"/g)||[]).length,10)
assert.equal((home.match(/class="button button-primary phase-more"/g)||[]).length,10)
for(const p of roadmapPhases){
 const path=`dist/phases/${p.id}/index.html`
 assert.ok(existsSync(path))
 const html=readFileSync(path,'utf8')
 assert.equal((html.match(/<h1\b/g)||[]).length,1)
 for(const t of [p.title,p.project,...p.topics]) assert.ok(html.includes(escape(t)))
 assert.ok(home.includes(`phases/${p.id}/`))
 const card=home.match(new RegExp('data-phase-id="'+p.id+'"[\\s\\S]*?</details>'))?.[0]
 assert.ok(card?.includes(`phases/${p.id}/`), 'More link must be inside its phase accordion')
 assert.ok(html.includes('aria-current="page"'))
 assert.ok(readFileSync('dist/sitemap.xml','utf8').includes(`phases/${p.id}/`))
}
console.log('PASS: course index, all 10 phase pages, content, navigation and sitemap.')
import { phaseLessons } from '../src/data/lessons.js'
let count = 0
for (const phase of roadmapPhases) {
 const lessons = phaseLessons[phase.id]
 assert.equal(lessons.length, phase.topics.length)
 const html = readFileSync(`dist/phases/${phase.id}/index.html`, 'utf8')
 for (const [index, lesson] of lessons.entries()) {
  for (const field of ['explanation','code','walkthrough','exercise']) {
   assert.ok(lesson[field]?.length > 30, `Missing ${phase.id}.${index+1} ${field}`)
   assert.ok(html.includes(escape(lesson[field])), `Unrendered ${phase.id}.${index+1} ${field}`)
  }
  assert.ok(html.includes(`id="topic-${index+1}"`))
  count++
 }
 assert.equal((html.match(/<pre\b/g)||[]).length, lessons.length)
}
console.log(`PASS: ${count} authored lessons with explanations, escaped code, walkthroughs, exercises and topic anchors.`)
import { instructor } from '../src/data/instructor.js'
const about=readFileSync('dist/about/index.html','utf8')
assert.equal((about.match(/<h1\b/g)||[]).length,1)
assert.ok(home.includes('class="instructor-intro"'))
assert.ok(home.includes('about/'))
assert.ok(about.includes(instructor.name))
for(const social of instructor.socials) assert.ok(about.includes(social.url))
assert.ok(existsSync('dist/images/abdulrahman.webp'))
assert.ok(about.includes('width="320" height="320"'))
assert.ok(readFileSync('dist/sitemap.xml','utf8').includes('about/'))
console.log('PASS: instructor introduction, profile, portrait asset, social links and sitemap.')

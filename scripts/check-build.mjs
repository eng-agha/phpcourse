import assert from 'node:assert/strict'
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { roadmapPhases, resources, faqList, prerequisites } from '../src/data/roadmap.js'
import { escape } from '../src/render/page.js'
const html = readFileSync('dist/index.html', 'utf8')
const missing = readFileSync('dist/404.html', 'utf8')
assert.equal((html.match(/<h1\b/g) || []).length, 1)
assert.match(html, /lang="ckb" dir="rtl"/)
assert.equal((html.match(/class="timeline-card"/g) || []).length, 10)
assert.equal((html.match(/class="faq-item"/g) || []).length, faqList.length)
for (const phase of roadmapPhases) {
  for (const value of [phase.title, phase.project, ...phase.topics]) assert.ok(html.includes(escape(value)), `Missing phase content: ${value}`)
}
for (const resource of resources) assert.ok(html.includes(resource.url))
for (const item of prerequisites.items) assert.ok(html.includes(escape(item)))
for (const page of [html, missing]) {
  const ids = [...page.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])
  assert.equal(new Set(ids).size, ids.length, 'Duplicate HTML IDs')
  for (const [, id] of page.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(id), `Missing anchor ${id}`)
  for (const [, url] of page.matchAll(/(?:src|href)="([^"]+\.(?:js|css|svg))"/g)) {
    const asset = url.includes('/assets/') ? 'assets/' + url.split('/assets/')[1] : url.split('/').at(-1)
    assert.ok(existsSync(join('dist', asset)), `Missing asset ${url}`)
    assert.ok(url.startsWith('/'), 'Nested 404 assets must use absolute repository paths')
  }
  assert.ok(!page.includes('<!-- app -->'))
}
const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1]
assert.ok(canonical && canonical.startsWith('https://'))
assert.ok(readFileSync('dist/sitemap.xml', 'utf8').includes(canonical))
assert.ok(readFileSync('dist/robots.txt', 'utf8').includes(canonical + 'sitemap.xml'))
assert.ok(existsSync('dist/social-card.png'))
// High-confidence credential signatures only; educational mentions of JWT are content.
const secret = /(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,}|sk-(?:proj-)?[A-Za-z0-9_-]{30,}|AKIA[0-9A-Z]{16}|-----BEGIN (?:RSA |EC )?PRIVATE KEY-----)/
function scan(dir) {
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, item.name)
    if (item.isDirectory()) scan(path)
    else if (/\.(html|js|css|xml|txt)$/.test(path)) assert.ok(!secret.test(readFileSync(path, 'utf8')), `Credential signature in ${path}`)
  }
}
scan('dist')
function luminance(hex) {
  const c = hex.match(/\w\w/g).map(v => parseInt(v,16)/255).map(v => v <= .04045 ? v/12.92 : ((v+.055)/1.055)**2.4)
  return c[0]*.2126+c[1]*.7152+c[2]*.0722
}
const pairs = [['light body','#192238','#fcfcfe'],['light muted','#59657b','#f2f4fa'],['light primary','#4546bd','#edeefe'],['dark body','#eef0f8','#111624'],['dark muted','#b0bad0','#1b2335'],['dark primary','#a6abff','#292f50'],['CTA','#ffffff','#4849bd'],['final CTA','#242944','#ebbd69']]
for (const [name, fg, bg] of pairs) {
  const values = [luminance(fg), luminance(bg)].sort((a,b)=>b-a)
  const contrast = (values[0]+.05)/(values[1]+.05)
  assert.ok(contrast >= 4.5, `${name}: ${contrast.toFixed(2)} contrast`)
}
console.log('PASS: static course content, anchors, asset paths, SEO, credential scan and AA text palette.')

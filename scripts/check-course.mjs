import assert from 'node:assert/strict'
import {readFileSync,existsSync,readdirSync,mkdirSync,writeFileSync} from 'node:fs'
import {join} from 'node:path'
import {execFileSync} from 'node:child_process'
import {lessons,modules} from '../src/data/course.js'
import {e} from '../src/render/classroom.js'
assert.equal(lessons.length,50);assert.equal(modules.length,10)
const files=[];function walk(dir){for(const item of readdirSync(dir,{withFileTypes:true})){const path=join(dir,item.name);if(item.isDirectory())walk(path);else if(path.endsWith('.html'))files.push(path)}}walk('dist')
assert.equal(files.length,63)
for(const file of files){const html=readFileSync(file,'utf8');assert.match(html,/<html lang="en" dir="ltr">/);assert.equal((html.match(/<h1\b/g)||[]).length,1);assert.ok(!/\b(?:OOP|API|Laravel|Deployment)\b|data-quiz|copy-code|navigator\.clipboard/i.test(html),file+' includes removed content');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size);for(const [,href]of html.matchAll(/href="(\/phpcourse\/[^"#]*)(?:#[^"]*)?"/g)){const target=href.slice('/phpcourse/'.length);assert.ok(existsSync('dist/'+target+(target.endsWith('/')?'index.html':'')),file+' broken link '+href)}}
for(const lesson of lessons){const html=readFileSync(`dist/lessons/week${lesson.id}/index.html`,'utf8');assert.ok(html.includes(e(lesson.title)));assert.ok(html.includes(e(lesson.kurdish)));assert.equal((html.match(/class="kurdish-note"/g)||[]).length,3);assert.ok(html.replace(/<span class="syntax-[^"]+">|<\/span>/g,'').includes(e(lesson.code)));assert.ok(html.includes(`data-complete="${lesson.id}"`));assert.ok(lesson.task.length>20)}
assert.ok(readFileSync('dist/sitemap.xml','utf8').includes('lessons/week25B/'))
const php='C:/xampp/php/php.exe';if(existsSync(php)){mkdirSync('qa/foundation',{recursive:true});let count=0;for(const l of lessons){if(l.id==='15A')continue;const file=`qa/foundation/${l.id}.php`;writeFileSync(file,l.code);const output=execFileSync(php,['-l',file],{encoding:'utf8'});assert.ok(!/Warning|Fatal|Parse error/.test(output),l.id+output);count++}console.log(`PASS: ${count} PHP examples linted.`)}
console.log('PASS: 63 static pages, 50 lecture-based lessons, bilingual direction, examples, links, sitemap and removal of advanced topics/copy/quiz.')

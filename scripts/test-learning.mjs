import assert from 'node:assert/strict'
import {Window} from 'happy-dom'
import {readFileSync} from 'node:fs'
const win=new Window({url:'https://eng-agha.github.io/phpcourse/lessons/week02A/'})
win.matchMedia=()=>({matches:true,addEventListener(){},removeEventListener(){}})
for(const key of ['window','document','localStorage','Event','matchMedia'])Object.defineProperty(globalThis,key,{value:key==='window'?win:win[key],configurable:true})
win.document.write(readFileSync('dist/lessons/week02A/index.html','utf8'))
await import('../src/main.js?lesson-test')
let button=document.querySelector('[data-complete]');button.click();assert.equal(button.getAttribute('aria-pressed'),'true');assert.ok(JSON.parse(localStorage.getItem('php-classroom-foundation-v2')).done.includes('02A'));assert.equal(document.querySelector('[data-resume]').hidden,false);button.click();assert.equal(button.getAttribute('aria-pressed'),'false')
assert.equal(document.querySelectorAll('.copy-code,[data-quiz]').length,0)
win.document.open();win.document.write(readFileSync('dist/index.html','utf8'));win.document.close()
await import('../src/main.js?home-test')
const search=document.querySelector('#lesson-search');search.value='variables';search.dispatchEvent(new Event('input'));assert.ok(document.querySelectorAll('[data-results] a').length>0)
search.value='گۆڕاو';search.dispatchEvent(new Event('input'));assert.ok(document.querySelectorAll('[data-results] a').length>0)
search.value='no-matching-topic-987654';search.dispatchEvent(new Event('input'));assert.equal(document.querySelectorAll('[data-results] a').length,0)
const toggle=document.querySelector('.theme-switch');toggle.click();assert.equal(localStorage.getItem('classroom-theme'),'dark')
await win.happyDOM.abort();console.log('PASS: practice progress, resume, bilingual search, theme persistence and absent copy/quiz controls.')

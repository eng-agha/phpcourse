import { initFunctionReference } from './sections/function-reference.js'
import {modules,lessons,labels} from './data/course.js'
const root=new URL(document.querySelector('link[rel="canonical"]').href).pathname.replace(/(?:lessons\/week\d+[AB]\/|phases\/\d+\/|about\/|functions\/)$/,'')
const lessonUrl=id=>`${root}lessons/week${id}/`
const key='php-classroom-foundation-v2',valid=new Set(lessons.map(l=>l.id))
let state={done:[],last:null}
try{const saved=JSON.parse(localStorage.getItem(key)||'null');if(saved)state={done:Array.isArray(saved.done)?[...new Set(saved.done.filter(id=>valid.has(id)))]:[],last:valid.has(saved.last)?saved.last:null}}catch{}
function save(){try{localStorage.setItem(key,JSON.stringify(state))}catch{document.querySelectorAll('.storage-note').forEach(el=>el.textContent=labels.blocked)}}
function update(){document.querySelectorAll('[data-total-count]').forEach(el=>el.textContent=`${state.done.length} / ${lessons.length}`);document.querySelectorAll('[data-total-progress]').forEach(el=>el.value=state.done.length);document.querySelectorAll('[data-module-progress]').forEach(el=>{const group=lessons.filter(l=>l.module===Number(el.dataset.moduleProgress));el.textContent=`${group.filter(l=>state.done.includes(l.id)).length} / ${group.length} lessons practised`});document.querySelectorAll('[data-complete]').forEach(btn=>{const done=state.done.includes(btn.dataset.complete);btn.textContent=done?labels.undo:labels.done;btn.setAttribute('aria-pressed',String(done))});document.querySelectorAll('[data-resume]').forEach(a=>{a.hidden=!state.last;if(state.last){a.href=lessonUrl(state.last);a.textContent=`${labels.resume}: ${state.last} →`}})}
const current=document.querySelector('[data-lesson]')?.dataset.lesson;if(valid.has(current)){state.last=current;save()}
update()
document.querySelectorAll('[data-complete]').forEach(btn=>btn.addEventListener('click',()=>{const id=btn.dataset.complete;state.done=state.done.includes(id)?state.done.filter(x=>x!==id):[...state.done,id];save();update()}))
const normalize=s=>s.toLowerCase().replace(/[يى]/g,'ی').replace(/ك/g,'ک')
const search=document.querySelector('#lesson-search');if(search){search.addEventListener('input',()=>{const value=normalize(search.value.trim()),results=document.querySelector('[data-results]'),status=document.querySelector('[data-search-status]');results.replaceChildren();if(!value){results.hidden=true;status.textContent='';return}const matches=lessons.filter(l=>normalize(l.title+' '+l.guided+' '+l.kurdish).includes(value));status.textContent=matches.length?`${matches.length} lessons found`:'No matching lessons. Try a different word.';results.hidden=!matches.length;for(const l of matches){const li=document.createElement('li'),a=document.createElement('a');a.href=lessonUrl(l.id);a.textContent=`${l.id} — ${l.title}`;li.append(a);results.append(li)}})}
const theme=document.querySelector('.theme-switch');theme?.setAttribute('aria-pressed',String(document.documentElement.classList.contains('dark')));theme?.addEventListener('click',()=>{const dark=document.documentElement.classList.toggle('dark');theme.setAttribute('aria-pressed',String(dark));try{localStorage.setItem('classroom-theme',dark?'dark':'light')}catch{}})
document.querySelectorAll('details').forEach(el=>el.addEventListener('toggle',()=>document.dispatchEvent(new Event('classroom-layout'))))
// Motion is progressive: all content starts readable, with no JS prerequisite.
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){import('./classroom-motion.js').then(({initMotion})=>initMotion()).catch(()=>{})}

initFunctionReference(root, state.last)

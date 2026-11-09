import {functions} from '../data/functions.js'
export function initFunctionReference(base,last){
 const input=document.querySelector('#function-search');if(!input)return
 const normalize=s=>s.toLowerCase().replace(/[يى]/g,'ی').replace(/ك/g,'ک')
 const back=document.querySelector('[data-back-to-lesson]');if(last&&/^\d{2}[AB]$/.test(last)){back.href=`${base}lessons/week${last}/#function-help`;const lessonHasHelp=[2,3,7,8,9,11].includes(Number(last.slice(0,2)));if(!lessonHasHelp)back.href=`${base}lessons/week${last}/`; back.textContent=`← Back to your lesson (${last})`}
 let category='all'
 function filter(){const query=normalize(input.value.trim());let total=0;for(const f of functions){const visible=(category==='all'||f.group===category)&&normalize(f.name+' '+f.description+' '+f.note+' '+f.ku).includes(query);document.querySelector(`[data-function="${f.name}"]`).hidden=!visible;document.querySelector(`[data-function-index="${f.name}"]`).hidden=!visible;if(visible)total++}document.querySelectorAll('[data-function-group]').forEach(group=>{group.hidden=![...group.querySelectorAll('[data-function]')].some(el=>!el.hidden);document.querySelector(`[data-index-group="${group.dataset.functionGroup}"]`).hidden=group.hidden});document.querySelector('[data-function-status]').textContent=`${total} function${total===1?'':'s'} found`;document.querySelector('[data-function-empty]').hidden=total!==0;document.dispatchEvent(new Event('classroom-layout'))}
 input.addEventListener('input',filter)
 document.querySelectorAll('[data-function-filter]').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.functionFilter;document.querySelectorAll('[data-function-filter]').forEach(btn=>btn.setAttribute('aria-pressed',String(btn===button)));filter()}))
 function openHash(){let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{return}const target=document.getElementById(id);if(target?.matches('[data-function]')){category='all';input.value='';document.querySelectorAll('[data-function-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.functionFilter==='all')));filter();target.open=true;requestAnimationFrame(()=>target.scrollIntoView({block:'start',behavior:'instant'}))}}
 addEventListener('hashchange',openHash);openHash()
}

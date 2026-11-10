export function initNameAnimation(){
 const name=document.querySelector('[data-animated-name]')
 if(!name)return
 const reduced=matchMedia('(prefers-reduced-motion: reduce)')
 let style='typing',frame
 function play(){
  cancelAnimationFrame(frame)
  name.removeAttribute('data-effect')
  if(reduced.matches)return
  // A fresh frame restarts the finite CSS sequence, including repeated clicks.
  void name.offsetWidth
  frame=requestAnimationFrame(()=>name.dataset.effect=style)
 }
 document.querySelectorAll('[data-name-style]').forEach(button=>button.addEventListener('click',()=>{
  style=button.dataset.nameStyle
  document.querySelectorAll('[data-name-style]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)))
  play()
 }))
 document.querySelector('[data-name-replay]')?.addEventListener('click',play)
 reduced.addEventListener('change',()=>{if(reduced.matches){cancelAnimationFrame(frame);name.removeAttribute('data-effect')}})
 play()
}

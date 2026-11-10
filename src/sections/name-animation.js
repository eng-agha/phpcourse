export function initNameAnimation(){
 const name=document.querySelector('[data-animated-name]')
 if(!name)return
 const reduced=matchMedia('(prefers-reduced-motion: reduce)')
 const styles=['typing','wave','glow'],buttons=[...document.querySelectorAll('[data-name-style]')]
 const pause=document.querySelector('[data-name-pause]')
 let style='typing',frame,timer,paused=false
 function schedule(){
  clearTimeout(timer)
  if(paused||reduced.matches||document.hidden)return
  timer=setTimeout(()=>{style=styles[(styles.indexOf(style)+1)%styles.length];play();schedule()},6000)
 }
 function play(){
  cancelAnimationFrame(frame)
  name.removeAttribute('data-effect')
  buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.nameStyle===style)))
  if(reduced.matches)return
  // A fresh frame restarts the finite CSS sequence, including repeated clicks.
  void name.offsetWidth
  frame=requestAnimationFrame(()=>name.dataset.effect=style)
 }
 buttons.forEach(button=>button.addEventListener('click',()=>{
  style=button.dataset.nameStyle
  play();schedule()
 }))
 document.querySelector('[data-name-replay]')?.addEventListener('click',()=>{play();schedule()})
 pause?.addEventListener('click',()=>{
  paused=!paused;pause.setAttribute('aria-pressed',String(paused));pause.textContent=paused?'Resume autoplay':'Pause autoplay'
  if(paused){cancelAnimationFrame(frame);name.removeAttribute('data-effect')}else play()
  schedule()
 })
 reduced.addEventListener('change',()=>{if(reduced.matches){cancelAnimationFrame(frame);name.removeAttribute('data-effect')}else play();schedule()})
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);name.removeAttribute('data-effect')}else if(!paused)play();schedule()})
 play();schedule()
}

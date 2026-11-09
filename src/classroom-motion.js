import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
gsap.registerPlugin(ScrollTrigger)
export function initMotion(){
 const media=gsap.matchMedia()
 media.add('(prefers-reduced-motion: no-preference)',()=>{
 const lenis=new Lenis({duration:.9,smoothWheel:true});const tick=t=>lenis.raf(t*1000);lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(tick)
 const intro=document.querySelectorAll('.hero-copy > *, .hero-studio, .lesson-meta, .reading-article > h1, .chapter-page > h1')
 gsap.from(intro,{y:16,opacity:0,duration:.65,stagger:.055,ease:'power2.out',clearProps:'all'})
 document.querySelectorAll('.reveal').forEach(el=>gsap.from(el,{y:24,opacity:.35,duration:.7,ease:'power2.out',clearProps:'all',scrollTrigger:{trigger:el,start:'top 96%',once:true}}))
 const refresh=()=>ScrollTrigger.refresh();document.addEventListener('classroom-layout',refresh);document.fonts.ready.then(refresh)
 return()=>{document.removeEventListener('classroom-layout',refresh);gsap.ticker.remove(tick);lenis.destroy()}
 })
}

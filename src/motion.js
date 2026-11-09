import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { initRoadmapTimeline } from './sections/roadmap-timeline.js'
import { revealElement, revealGroup } from './animations/scroll-reveal.js'

gsap.registerPlugin(ScrollTrigger)
export function initMotion(onLenis) {
  const media = gsap.matchMedia()
  media.add('(prefers-reduced-motion: no-preference)', () => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true })
    onLenis(lenis)
    if (document.querySelector('#mobile-menu')?.open) lenis.stop()
    lenis.on('scroll', ScrollTrigger.update)
    const tick = time => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    const contexts = []
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        observer.unobserve(entry.target)
        contexts.push(gsap.context(() => {
          if (entry.target.id === 'roadmap') initRoadmapTimeline()
          else if (entry.target.id === 'why-us') revealGroup('.why-card')
          else if (entry.target.id === 'prerequisites') { revealGroup('.prereq-item'); revealGroup('.tool-chip') }
          else if (entry.target.id === 'faq') revealGroup('.faq-item')
          else revealElement('.final-cta-card')
        }))
      }
    }, { rootMargin: '300px 0px' })
    document.querySelectorAll('#why-us, #prerequisites, #roadmap, #faq, .final-cta').forEach(el => observer.observe(el))
    return () => { observer.disconnect(); contexts.forEach(context => context.revert()); gsap.ticker.remove(tick); lenis.destroy(); onLenis(null) }
  })
  document.querySelectorAll('details').forEach(item => item.addEventListener('toggle', () => ScrollTrigger.refresh()))
  document.fonts.ready.then(() => ScrollTrigger.refresh())
  return { refresh: () => ScrollTrigger.refresh() }
}

import { gsap } from 'gsap'
export function initRoadmapTimeline() {
  if (!document.querySelector('#roadmap')) return
  gsap.fromTo('#timeline-progress-fill', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.timeline-track', start: 'top center', end: 'bottom center', scrub: 0.5 } })
  document.querySelectorAll('.timeline-item').forEach((item, i) => {
    const direction = document.dir === 'rtl' ? -1 : 1
    gsap.from(item, { opacity: 0, y: 24, x: innerWidth >= 768 ? (i % 2 ? 20 : -20) * direction : 0, duration: 0.6, clearProps: 'all', scrollTrigger: { trigger: item, start: 'top 92%', once: true } })
  })
}

import { gsap } from 'gsap'
export function initHero() {
  if (!document.querySelector('#hero') || scrollY > innerHeight) return
  const elements = [...document.querySelectorAll('.hero-eyebrow, .hero-title, .hero-subtitle, .hero-cta-container, .hero-footnote, .hero-visual')]
  const timeline = gsap.timeline()
  // Animate plain numeric values to avoid repeated computed-style/layout reads.
  elements.forEach((element, index) => {
    const state = { progress: 0 }
    timeline.to(state, {
      progress: 1, duration: 0.6, ease: 'power2.out',
      onUpdate: () => {
        element.style.opacity = String(state.progress)
        element.style.translate = `0 ${20 * (1 - state.progress)}px`
      },
      onComplete: () => { element.style.removeProperty('opacity'); element.style.removeProperty('translate') },
    }, index * 0.07)
  })
  return () => {
    timeline.kill()
    elements.forEach(element => { element.style.removeProperty('opacity'); element.style.removeProperty('translate') })
  }
}

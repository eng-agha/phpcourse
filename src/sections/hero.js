import { gsap } from 'gsap'
import { isReducedMotion } from '../animations/scroll-reveal.js'

export function initHero(lenisInstance) {
  const heroSection = document.getElementById('hero')
  if (!heroSection) return

  // Setup smooth scroll for hero CTA buttons
  const heroCtas = heroSection.querySelectorAll('a[href^="#"]')
  heroCtas.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      const href = btn.getAttribute('href')
      const target = document.querySelector(href)
      if (target) {
        if (lenisInstance) {
          lenisInstance.scrollTo(target, { offset: -70 })
        } else {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }
    })
  })

  // GSAP Entrance Timeline
  const eyebrow = heroSection.querySelector('.hero-eyebrow')
  const title = heroSection.querySelector('.hero-title')
  const subtitle = heroSection.querySelector('.hero-subtitle')
  const stats = heroSection.querySelectorAll('.hero-stat-card')
  const ctas = heroSection.querySelector('.hero-cta-container')

  const elements = [eyebrow, title, subtitle, stats, ctas].filter(Boolean)

  if (isReducedMotion()) {
    gsap.set([eyebrow, title, subtitle, stats, ctas], { opacity: 1, y: 0, clearProps: 'transform' })
    return
  }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.fromTo(
    eyebrow,
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 0.6, delay: 0.1 }
  )
    .fromTo(
      title,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.4'
    )
    .fromTo(
      subtitle,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.5'
    )
    .fromTo(
      stats,
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12 },
      '-=0.4'
    )
    .fromTo(
      ctas,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.3'
    )
}

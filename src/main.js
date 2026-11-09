import { initLearning } from './sections/learning.js'
import { gsap } from 'gsap'
import 'lenis/dist/lenis.css'
import { initNavbar } from './sections/navbar.js'
import { initHero } from './sections/hero.js'

let lenis = null
let motion = null
let loadingMotion = null
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)')
const media = gsap.matchMedia()
media.add('(prefers-reduced-motion: no-preference)', () => initHero())

// The scroll engine is only needed when the reader starts interacting.
// Static content and native accordions remain available while its chunk loads.
async function startMotion() {
  if (motionPreference.matches) return
  loadingMotion ||= import('./motion.js').then(({ initMotion }) => { motion = initMotion(instance => { lenis = instance }) })
  await loadingMotion
}
for (const event of ['wheel', 'touchstart', 'pointerdown', 'keydown', 'scroll']) {
  addEventListener(event, () => { startMotion().catch(() => { /* Native navigation remains usable if an optional chunk fails. */ }) }, { once: true, passive: true })
}
motionPreference.addEventListener('change', event => { if (!event.matches) startMotion() })
initNavbar(() => lenis)

const resources = document.querySelector('#resources')
if (resources) {
  const observer = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return
    observer.disconnect()
    import('./sections/resources-carousel.js').then(({ initResourcesCarousel }) => { initResourcesCarousel(); motion?.refresh() }).catch(() => {})
  }, { rootMargin: '600px 0px' })
  observer.observe(resources)
}

// One handler keeps every anchor, focus destination and history entry consistent.
document.addEventListener('click', async event => {
  const link = event.target.closest('a[href^="#"]')
  if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
  const hash = link.getAttribute('href')
  const target = document.getElementById(hash.slice(1))
  if (!target) return
  event.preventDefault()
  const complete = () => { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }) }
  history.pushState(null, '', hash)
  try { await startMotion() } catch { /* Fall back to native scrolling. */ }
  if (lenis && !motionPreference.matches) lenis.scrollTo(target, { offset: -90, onComplete: complete })
  else { target.scrollIntoView({ behavior: motionPreference.matches ? 'instant' : 'smooth' }); complete() }
})

initLearning()

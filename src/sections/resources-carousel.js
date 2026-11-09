import Swiper from 'swiper'
import { Navigation, Keyboard, A11y } from 'swiper/modules'
import 'swiper/css'
import { ui } from '../data/roadmap.js'
export function initResourcesCarousel() {
  const container = document.querySelector('.resources-swiper')
  if (!container) return
  const motion = matchMedia('(prefers-reduced-motion: reduce)')
  const swiper = new Swiper(container, {
    modules: [Navigation, Keyboard, A11y],
    dir: document.dir,
    speed: motion.matches ? 0 : 350,
    slidesPerView: 1.15, spaceBetween: 18,
    keyboard: { enabled: true, onlyInViewport: true },
    a11y: { slideRole: 'article', prevSlideMessage: ui.prev, nextSlideMessage: ui.next, firstSlideMessage: ui.first, lastSlideMessage: ui.last, itemRoleDescriptionMessage: ui.slide, slideLabelMessage: ui.slideLabel },
    navigation: { prevEl: '.swiper-btn-prev', nextEl: '.swiper-btn-next' },
    breakpoints: { 768: { slidesPerView: 2.2, spaceBetween: 22 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 3.5, spaceBetween: 24 } },
  })
  motion.addEventListener('change', event => { swiper.params.speed = event.matches ? 0 : 350 })
  // Keyboard focus on an off-screen link brings its slide into view.
  container.addEventListener('focusin', event => {
    const slide = event.target.closest('.swiper-slide')
    if (slide) swiper.slideTo([...swiper.slides].indexOf(slide))
  })
  return swiper
}

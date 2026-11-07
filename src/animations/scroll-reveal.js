import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const isReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Reveal a single element on scroll
 * @param {HTMLElement|string} target
 * @param {object} options
 */
export function revealElement(target, options = {}) {
  const elements = typeof target === 'string' ? document.querySelectorAll(target) : [target]
  if (!elements || elements.length === 0) return

  elements.forEach((el) => {
    if (!el) return
    if (isReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0, clearProps: 'transform' })
      return
    }

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: options.y ?? 35,
      },
      {
        opacity: 1,
        y: 0,
        duration: options.duration ?? 0.8,
        ease: options.ease ?? 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: options.start ?? 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    )
  })
}

/**
 * Reveal a group of elements with a stagger
 * @param {HTMLElement[]|string} target
 * @param {object} options
 */
export function revealGroup(target, options = {}) {
  const elements = typeof target === 'string' ? gsap.utils.toArray(target) : target
  if (!elements || elements.length === 0) return

  if (isReducedMotion()) {
    gsap.set(elements, { opacity: 1, y: 0, clearProps: 'transform' })
    return
  }

  const trigger = options.trigger || elements[0]

  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: options.y ?? 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: options.duration ?? 0.7,
      stagger: options.stagger ?? 0.1,
      ease: options.ease ?? 'power2.out',
      scrollTrigger: {
        trigger,
        start: options.start ?? 'top 85%',
        toggleActions: 'play none none none',
        once: true,
      },
    }
  )
}

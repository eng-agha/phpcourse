import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { refreshIcons } from '../main.js'
import { roadmapPhases } from '../data/roadmap.js'
import { isReducedMotion } from '../animations/scroll-reveal.js'

gsap.registerPlugin(ScrollTrigger)

export function initRoadmapTimeline() {
  const container = document.getElementById('roadmap-timeline-container')
  const timelineSection = document.getElementById('roadmap')
  const progressLineFill = document.getElementById('timeline-progress-fill')

  if (!container || !timelineSection) return

  // Render all 10 phases dynamically from roadmapPhases
  container.innerHTML = roadmapPhases
    .map((phase, index) => {
      const isEven = index % 2 === 0
      const desktopSideClass = isEven
        ? 'md:me-auto md:pe-10 md:ps-0 md:text-start'
        : 'md:ms-auto md:ps-10 md:pe-0 md:text-start'

      return `
      <div 
        class="timeline-item relative mb-12 last:mb-0 w-full md:w-1/2 ${desktopSideClass} transition-all duration-300"
        data-phase-id="${phase.id}"
      >
        <!-- Center Node Marker -->
        <div 
          class="timeline-node absolute top-5 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 border-2 border-indigo-500 shadow-md shadow-indigo-500/20 text-indigo-400 font-mono text-xs font-bold transition-transform duration-300 group-hover:scale-110 
          right-3 md:right-auto ${isEven ? 'md:-right-4.5' : 'md:-left-4.5'}"
          aria-hidden="true"
        >
          ${phase.id}
        </div>

        <!-- Card Container -->
        <div class="timeline-card group ms-12 md:ms-0 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-xl hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 overflow-hidden">
          <!-- Card Header (Interactive Accordion Trigger) -->
          <button
            type="button"
            class="phase-accordion-btn w-full p-5 sm:p-6 text-start flex flex-col gap-3 focus-visible:ring-2 focus-visible:ring-amber-500 rounded-2xl cursor-pointer"
            aria-expanded="false"
            aria-controls="phase-details-${phase.id}"
          >
            <!-- Badge & Duration Header -->
            <div class="flex items-center justify-between w-full flex-wrap gap-2">
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                  <i data-lucide="${phase.icon}" class="w-4 h-4"></i>
                </span>
                <span class="text-xs font-bold font-mono px-2.5 py-1 rounded-full bg-indigo-100/70 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                  قۆناغی ${phase.id}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/40">
                  <i data-lucide="clock" class="w-3.5 h-3.5"></i>
                  ${phase.duration}
                </span>
                <div class="chevron-icon text-slate-400 group-hover:text-indigo-500 transition-transform duration-300 p-1">
                  <i data-lucide="chevron-down" class="w-5 h-5"></i>
                </div>
              </div>
            </div>

            <!-- Title & Summary -->
            <div>
              <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                ${phase.title}
              </h3>
              <p class="text-sm text-slate-600 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                ${phase.summary}
              </p>
            </div>
            
            <div class="flex items-center justify-between pt-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span class="toggle-text">زیاتر ببینە (تەوەرەکان و پڕۆژە)</span>
            </div>
          </button>

          <!-- Collapsible Accordion Content -->
          <div
            id="phase-details-${phase.id}"
            class="phase-content hidden px-5 pb-6 sm:px-6 pt-2 border-t border-slate-100 dark:border-slate-800/80"
          >
            <!-- Topics List -->
            <div class="mb-5">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                <i data-lucide="book-open" class="w-4 h-4 text-indigo-500"></i>
                تەوەرە و بابەتە سەرەکییەکان:
              </h4>
              <ul class="space-y-2">
                ${phase.topics
                  .map(
                    (topic) => `
                  <li class="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 leading-normal">
                    <span class="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
                    <span>${topic}</span>
                  </li>
                `
                  )
                  .join('')}
              </ul>
            </div>

            <!-- Practice Project Callout -->
            <div class="p-4 rounded-xl bg-gradient-to-br from-indigo-50/80 to-amber-50/40 dark:from-slate-800/80 dark:to-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
              <div class="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 mb-1.5">
                <i data-lucide="sparkles" class="w-4 h-4"></i>
                پڕۆژەی کرداری ئەم قۆناغە:
              </div>
              <p class="text-sm font-medium text-slate-900 dark:text-slate-100">
                ${phase.project}
              </p>
            </div>
          </div>
        </div>
      </div>
    `
    })
    .join('')

  // Re-run Lucide icons for dynamically injected markup
  refreshIcons()

  // Accordion toggle interactivity
  const accordionButtons = container.querySelectorAll('.phase-accordion-btn')
  accordionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true'
      const contentId = btn.getAttribute('aria-controls')
      const content = document.getElementById(contentId)
      const chevron = btn.querySelector('.chevron-icon')
      const toggleText = btn.querySelector('.toggle-text')

      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false')
        content?.classList.add('hidden')
        chevron?.classList.remove('rotate-180')
        if (toggleText) toggleText.textContent = 'زیاتر ببینە (تەوەرەکان و پڕۆژە)'
      } else {
        btn.setAttribute('aria-expanded', 'true')
        content?.classList.remove('hidden')
        chevron?.classList.add('rotate-180')
        if (toggleText) toggleText.textContent = 'داخستن'
      }

      // Refresh ScrollTrigger positions after accordion expands
      ScrollTrigger.refresh()
    })
  })

  // GSAP Animations & Scrubbed Timeline Fill
  if (isReducedMotion()) {
    if (progressLineFill) {
      gsap.set(progressLineFill, { scaleY: 1 })
    }
    const items = container.querySelectorAll('.timeline-item')
    gsap.set(items, { opacity: 1, y: 0, clearProps: 'transform' })
    return
  }

  // 1. Scrubbed vertical line progress
  if (progressLineFill) {
    gsap.fromTo(
      progressLineFill,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: timelineSection,
          start: 'top 60%',
          end: 'bottom 85%',
          scrub: 0.5,
        },
      }
    )
  }

  // 2. Individual card scroll-in reveal
  const timelineItems = container.querySelectorAll('.timeline-item')
  timelineItems.forEach((item, index) => {
    const isEven = index % 2 === 0
    const xOffset = document.dir === 'rtl' ? (isEven ? 40 : -40) : (isEven ? -40 : 40)

    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: 35,
        x: window.innerWidth >= 768 ? xOffset : 0,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    )
  })
}

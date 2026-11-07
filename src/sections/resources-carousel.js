import Swiper from 'swiper'
import { Navigation, Keyboard, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { refreshIcons } from '../main.js'
import { resources } from '../data/roadmap.js'

export function initResourcesCarousel() {
  const container = document.getElementById('resources-wrapper')
  if (!container) return

  // Render slides dynamically from resources
  container.innerHTML = resources
    .map(
      (res) => `
    <div class="swiper-slide h-auto">
      <div class="h-full flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-md hover:border-indigo-500/30 transition-all duration-300">
        <div>
          <!-- Type badge -->
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/50">
              ${res.type}
            </span>
            <span class="text-slate-400 dark:text-slate-500">
              <i data-lucide="book-open" class="w-4 h-4"></i>
            </span>
          </div>

          <!-- Name -->
          <h3 class="text-xl font-bold font-mono text-slate-900 dark:text-white mb-2">
            ${res.name}
          </h3>

          <!-- Description / Why it matters -->
          <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            ${res.desc}
          </p>
        </div>

        <!-- Visit link -->
        <a
          href="${res.url}"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-between gap-2 w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white text-slate-700 dark:text-slate-300 font-semibold text-sm transition-all duration-200 group"
          aria-label="${res.name} (لە پەنجەرەیەکی نوێدا دەکرێتەوە)"
        >
          <span>سەردانکردن</span>
          <i data-lucide="external-link" class="w-4 h-4 transition-transform group-hover:scale-110"></i>
        </a>
      </div>
    </div>
  `
    )
    .join('')

  refreshIcons()

  // Initialize Swiper
  const swiperInstance = new Swiper('.resources-swiper', {
    modules: [Navigation, Keyboard, A11y],
    dir: document.documentElement.dir || 'rtl',
    slidesPerView: 1.15,
    spaceBetween: 20,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    a11y: {
      prevSlideMessage: 'سەرچاوەی پێشوو',
      nextSlideMessage: 'سەرچاوەی داهاتوو',
    },
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.3,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3.2,
        spaceBetween: 24,
      },
      1280: {
        slidesPerView: 3.5,
        spaceBetween: 28,
      },
    },
  })

  return swiperInstance
}

import { refreshIcons } from '../main.js'
import { faqList } from '../data/roadmap.js'

export function initFaq() {
  const container = document.getElementById('faq-accordion-container')
  if (!container) return

  container.innerHTML = faqList
    .map(
      (item) => `
    <details class="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 shadow-sm transition-all duration-300 open:border-indigo-500/40 dark:open:border-indigo-500/40">
      <summary class="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none select-none rounded-2xl focus-visible:ring-2 focus-visible:ring-amber-500">
        <span class="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          ${item.q}
        </span>
        <span class="flex-shrink-0 text-slate-400 group-hover:text-indigo-500 transition-transform duration-300 group-open:rotate-180">
          <i data-lucide="chevron-down" class="w-5 h-5"></i>
        </span>
      </summary>
      <div class="px-5 pb-6 sm:px-6 pt-1 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
        ${item.a}
      </div>
    </details>
  `
    )
    .join('')

  refreshIcons()
}

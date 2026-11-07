import './style.css'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  createIcons,
  Globe,
  Code,
  Database,
  Plug,
  Boxes,
  Shield,
  Layers,
  Trophy,
  Server,
  Check,
  Laptop,
  FolderGit2,
  Terminal,
  Rocket,
  BookOpen,
  Moon,
  Sun,
  Menu,
  X,
  ArrowLeft,
  ArrowUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Sparkles,
  ExternalLink,
  Compass,
} from 'lucide'

import { initNavbar } from './sections/navbar.js'
import { initHero } from './sections/hero.js'
import { initRoadmapTimeline } from './sections/roadmap-timeline.js'
import { initResourcesCarousel } from './sections/resources-carousel.js'
import { initFaq } from './sections/faq.js'
import { revealElement, revealGroup, isReducedMotion } from './animations/scroll-reveal.js'

// Custom GitHub icon to satisfy Lucide data-lucide="github"
const Github = [
  'svg',
  {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
  },
  [
    [
      'path',
      {
        d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
      },
    ],
    ['path', { d: 'M9 18c-4.51 2-5-2-7-2' }],
  ],
]

export const appIcons = {
  Globe,
  Code,
  Database,
  Plug,
  Boxes,
  Shield,
  Layers,
  Trophy,
  Server,
  Check,
  Laptop,
  FolderGit2,
  Terminal,
  Rocket,
  BookOpen,
  Moon,
  Sun,
  Menu,
  X,
  ArrowLeft,
  ArrowUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Sparkles,
  ExternalLink,
  Compass,
  Github,
}

export function refreshIcons() {
  createIcons({ icons: appIcons })
}

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Initialize Lucide icons
refreshIcons()

// Setup Lenis Smooth Scrolling
const prefersReduced = isReducedMotion()
let lenis = null

if (!prefersReduced) {
  lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  })

  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => lenis.raf(time * 1000))
  gsap.ticker.lagSmoothing(0)

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}

// Initialize Page Sections
document.addEventListener('DOMContentLoaded', () => {
  initNavbar(lenis)
  initHero(lenis)
  initRoadmapTimeline()
  initResourcesCarousel()
  initFaq()

  // Back to top button
  const backToTopBtn = document.getElementById('back-to-top')
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault()
      if (lenis) {
        lenis.scrollTo(0)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
  }

  // Generic reveal on scroll for remaining sections
  revealGroup('.why-card', { y: 35, stagger: 0.12 })
  revealGroup('.prereq-item', { y: 25, stagger: 0.08 })
  revealGroup('.tool-chip', { y: 20, stagger: 0.06 })
  revealElement('.final-cta-card', { y: 40 })

  // Re-run icons to catch any late additions
  refreshIcons()
})

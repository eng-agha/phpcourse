import { refreshIcons } from '../main.js'

export function initNavbar(lenisInstance) {
  const navbar = document.getElementById('main-navbar')
  const themeToggle = document.getElementById('theme-toggle')
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')
  const mobileBackdrop = document.getElementById('mobile-backdrop')
  const closeMenuBtn = document.getElementById('close-menu-btn')
  const navLinks = document.querySelectorAll('.nav-link')

  // 1. Dark Mode setup
  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    updateThemeIcon()
  }

  const updateThemeIcon = () => {
    const isDark = document.documentElement.classList.contains('dark')
    const themeIconContainer = document.getElementById('theme-icon-container')
    const mobileThemeIconContainer = document.getElementById('mobile-theme-icon-container')
    
    const iconName = isDark ? 'sun' : 'moon'
    const iconHtml = `<i data-lucide="${iconName}" class="w-5 h-5 transition-transform duration-300"></i>`
    
    if (themeIconContainer) {
      themeIconContainer.innerHTML = iconHtml
    }
    if (mobileThemeIconContainer) {
      mobileThemeIconContainer.innerHTML = iconHtml
    }
    refreshIcons()
  }

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    updateThemeIcon()
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme)
  }
  const mobileThemeToggle = document.getElementById('mobile-theme-toggle')
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener('click', toggleTheme)
  }

  // Listen to system changes if no preference saved
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      updateThemeIcon()
    }
  })

  initTheme()

  // 2. Sticky Glass effect on scroll
  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('glass-nav', 'shadow-sm')
      navbar?.classList.remove('bg-transparent')
    } else {
      navbar?.classList.remove('glass-nav', 'shadow-sm')
      navbar?.classList.add('bg-transparent')
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  // 3. Mobile Drawer and Focus Trap
  let isMenuOpen = false

  const openMobileMenu = () => {
    isMenuOpen = true
    mobileMenu?.classList.remove('translate-x-full', 'pointer-events-none', 'opacity-0')
    mobileMenu?.classList.add('translate-x-0', 'opacity-100')
    mobileBackdrop?.classList.remove('hidden')
    document.body.style.overflow = 'hidden'
    mobileMenuBtn?.setAttribute('aria-expanded', 'true')
    mobileMenu?.setAttribute('aria-hidden', 'false')
    
    // Focus first link in drawer
    const firstFocusable = mobileMenu?.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    firstFocusable?.focus()
  }

  const closeMobileMenu = () => {
    isMenuOpen = false
    mobileMenu?.classList.add('translate-x-full', 'pointer-events-none', 'opacity-0')
    mobileMenu?.classList.remove('translate-x-0', 'opacity-100')
    mobileBackdrop?.classList.add('hidden')
    document.body.style.overflow = ''
    mobileMenuBtn?.setAttribute('aria-expanded', 'false')
    mobileMenu?.setAttribute('aria-hidden', 'true')
    mobileMenuBtn?.focus()
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      if (isMenuOpen) {
        closeMobileMenu()
      } else {
        openMobileMenu()
      }
    })
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeMobileMenu)
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileMenu)
  }

  // Keyboard navigation: Escape closes drawer, tab trapping
  document.addEventListener('keydown', (e) => {
    if (!isMenuOpen) return

    if (e.key === 'Escape') {
      closeMobileMenu()
      return
    }

    if (e.key === 'Tab') {
      const focusables = mobileMenu?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (!focusables || focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        last.focus()
        e.preventDefault()
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus()
        e.preventDefault()
      }
    }
  })

  // 4. Smooth Anchor Link Handling
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        closeMobileMenu()

        const target = document.querySelector(href)
        if (target) {
          if (lenisInstance) {
            lenisInstance.scrollTo(target, { offset: -70 })
          } else {
            target.scrollIntoView({ behavior: 'smooth' })
          }
        }
      }
    })
  })
}

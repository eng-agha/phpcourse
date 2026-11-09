export function initNavbar(getLenis) {
  const navbar = document.getElementById('main-navbar')
  const toggle = document.getElementById('theme-toggle')
  const menu = document.getElementById('mobile-menu')
  const menuButton = document.getElementById('mobile-menu-btn')
  const systemTheme = matchMedia('(prefers-color-scheme: dark)')
  const saved = () => { try { return localStorage.getItem('theme') } catch { return null } }
  const update = () => toggle?.setAttribute('aria-pressed', String(document.documentElement.classList.contains('dark')))
  toggle?.addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('dark')
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch { /* Storage can be unavailable in private contexts. */ }
    update()
  })
  systemTheme.addEventListener('change', event => {
    if (!saved()) { document.documentElement.classList.toggle('dark', event.matches); update() }
  })
  update()
  const scrolled = () => navbar?.classList.toggle('glass-nav', scrollY > 20)
  addEventListener('scroll', scrolled, { passive: true }); scrolled()
  const close = () => menu?.close()
  menuButton?.addEventListener('click', () => {
    menu.showModal()
    menu.setAttribute('aria-hidden', 'false')
    menuButton.setAttribute('aria-expanded', 'true')
    document.body.classList.add('menu-open')
    getLenis()?.stop()
  })
  menu?.addEventListener('close', () => {
    menu.setAttribute('aria-hidden', 'true')
    menuButton.setAttribute('aria-expanded', 'false')
    document.body.classList.remove('menu-open')
    getLenis()?.start()
    menuButton.focus({ preventScroll: true })
  })
  document.getElementById('close-menu-btn')?.addEventListener('click', close)
  menu?.addEventListener('click', event => {
    if (event.target.closest('a')) close()
    if (event.target === menu) {
      const rect = menu.getBoundingClientRect()
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close()
    }
  })
  // Native modal dialogs make the rest of the document inert; wrap Tab explicitly.
  menu?.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return
    const nodes = [...menu.querySelectorAll('a, button')]
    const first = nodes[0], last = nodes.at(-1)
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
  })
  matchMedia('(min-width: 768px)').addEventListener('change', event => { if (event.matches && menu?.open) close() })
}

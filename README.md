# PHP & MySQL roadmap

A static, Kurdish Sorani course roadmap. Built with Vite, Tailwind CSS v4,
vanilla JavaScript, GSAP/ScrollTrigger, Lenis, Swiper, Lucide and locally bundled Vazirmatn fonts.

## Develop and verify

Requires Node 22.12+ (CI uses Node 24).

```sh
npm ci
npm run dev
npm run build
npm run check
npm run preview
```

The default URL path is `/phpcourse/`. The generated `dist/` directory is the
complete website: no PHP, API, database or Node runtime is needed to serve it.
The phase cards, prerequisites, resource links and FAQs are rendered into HTML
at build time and work without JavaScript. JavaScript progressively adds motion,
theme switching, the mobile dialog and the resource carousel.

## Content and structure

- `src/data/roadmap.js`: every Kurdish string, all ten phases, prerequisites, resources and FAQs.
- `src/render/page.js`: build-time semantic HTML and Lucide SVG rendering.
- `src/sections/`: small modules for page interactions.
- `src/animations/`: shared scroll reveal helpers.
- `src/style.css`: Tailwind v4 tokens, responsive layout and both themes.
- `scripts/check-build.mjs`: static content, asset/anchor, SEO, credential-signature and contrast checks.

Edit the data file and rebuild to change content. Native `details` elements keep
accordions keyboard accessible. The mobile menu uses a native modal dialog with
focus wrapping, Escape/backdrop dismissal, and scroll locking. Reduced motion
skips Lenis and scroll animations; changes to the preference are handled live.

## GitHub Pages

Repository: https://github.com/eng-agha/phpcourse
Expected site: https://eng-agha.github.io/phpcourse/

Select **Settings → Pages → Source → GitHub Actions** once. Every push to `main`
then builds, validates and deploys using `.github/workflows/deploy.yml`.
`actions/configure-pages` supplies `SITE_URL`, so the build derives the correct
base path, canonical URL, social image, sitemap and robots entry. Action majors
were checked against the official GitHub release pages on November 9, 2026.

For another host, set `SITE_URL` to its full URL. Optionally override
`VITE_BASE_PATH` with an absolute path ending in `/`. Nested missing pages use
absolute asset paths and an absolute home link in `404.html`.

Only deploy `dist/`; `lessons/` contains existing authoring documents and is not
part of the website output. No analytics, trackers, remote fonts or CDN runtime
libraries are used.

## Course pages and lesson content

The original roadmap homepage is preserved. Each expandable phase card includes a More link to its course page. Each phase has a static page at
`/phpcourse/phases/1/` through `/phpcourse/phases/10/`.
`src/data/lessons.js` contains 47 topic lessons: Sorani explanations, code,
walkthroughs and practical exercises. `scripts/course-pages.mjs` renders these
into the build output and updates the sitemap. Code is escaped and displayed
left-to-right; PHP/SQL examples run in the learner's own environment.

`npm run dev` builds and serves the actual multi-page course with Vite preview.
After changing content, rebuild and reload. This avoids displaying the former
marketing-page template during local development.

Validation: `npm run check` verifies every phase/topic, rendered lesson field,
code block and topic anchor. PHP snippets were syntax checked with the locally
installed PHP; independent examples were also executed. Database, framework,
container and deployment examples require their documented environments and
have not been integration tested here.

## Learning features

- Topic completion and per-phase/overall progress use localStorage under
  `php-course-learning-v1`; project checklist state and the last visible topic
  are stored on the same device. Blocked storage falls back to session memory.
- The learning hub searches all 47 topic titles, phase names and explanations.
  Sorani/Arabic variants of ya and kaf are normalized. Resume links point to the
  actual last topic rather than marking a lesson complete automatically.
- Code blocks use escaped, build-time token highlighting. Copy buttons copy
  their text content; clipboard failure presents a manual-copy message.
- Each phase includes five authored multiple-choice questions with answer
  explanations, explicit grading and reset. Quiz scores do not complete lessons.
- Ten project guides include prerequisites, file structure, implementation steps,
  an explicitly illustrative result preview and persistent acceptance checklists.
- `npm run check` also runs DOM interaction tests with development-only happy-dom:
  completion, persistence/reload, search, resume, clipboard, scoring/reset,
  checklist persistence and blocked-storage behavior. This is not a visual
  browser/layout audit.

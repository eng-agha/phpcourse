# PHP Classroom

A static, beginner-first PHP & MySQL course for Abdulrahman Ismael.

## Learning design

25 weeks, two 60-minute practical sessions per week, 50 lesson pages grouped into
10 chapters. The sequence is based on the instructor's Updated_2026 practical
plan and per-session lab briefs. Basic HTML/CSS is assumed. English is the main
language; RTL Sorani highlights appear beneath the English explanations and
practice prompts. Each session follows understand → predict → run/change →
independent practice → evidence → reflection.

The final weeks deliberately replace the original advanced topics with file
organisation, foundation review, debugging and a local student-records project.
No object-oriented-programming course, web-service course, framework course,
production-hosting lessons, copy buttons or quiz features are present.

## Develop

```sh
npm ci
npm run dev
npm run build
npm run check
```

`dev` builds and serves the static output. Rebuild after editing lesson data.
Node 22.12+ is required for authoring; CI uses Node 24. `dist/` is the complete
site with no production PHP, database or Node runtime.

## Source

- `src/data/beginner.json`: imported session objectives, independent tasks,
  expected results, English teaching explanations and Sorani highlights.
- `src/data/beginner-examples.js`: adapted focused examples for database and
  protected-action lessons, plus simplified early examples.
- `src/data/course.js`: chapter grouping and assembled lesson records.
- `src/render/classroom.js`: semantic homepage, chapter, lesson and instructor views.
- `src/render/highlight.js`: escaped static code highlighting.
- `src/main.js`: practice journal, resume, English/Sorani search and theme.
- `src/classroom-motion.js`: GSAP/ScrollTrigger reveals and Lenis scrolling;
  reduced-motion preference disables and cleans up animated contexts.
- `scripts/course-pages.mjs`: 50 lesson pages, 10 chapters, instructor and sitemap.
- `scripts/import-beginner.py`: one-time import provenance from the instructor's
  local source directory. Not needed for build/CI; reimporting overwrites edited
  expected results, so review changes before rebuilding.

Focused PDO and protected-handler excerpts require the stated local schema,
configuration and instructor-prepared authentication/permission checks. They are
not complete standalone endpoints. The website displays PHP; learners execute
it in their own local environment. Original source teaching documents are kept
in `lessons/` but are not included in the published output.

## Verification and publication

`npm run check` validates 63 output pages, internal links, English/RTL Sorani
markup, code content, the sitemap, removed features, practice state, search and
theme controls. On this Windows authoring machine it also lints 49 PHP examples
with the installed PHP; it does not claim to integration-test a MySQL classroom
application. Database and protected-action examples need their documented setup.

Push `main` to deploy through GitHub Actions. Pages must use GitHub Actions as
its source. `SITE_URL` from configure-pages drives the base path and canonical
URLs; local default is https://eng-agha.github.io/phpcourse/.

Practice progress uses `php-classroom-foundation-v2`, separate from the previous
roadmap so incompatible old completion IDs are not misreported as new practice.

## Function reference and navigation

`/functions/` contains 25 selected practical functions (the original seven plus
18 additions), grouped by text, arrays, numbers, dates and safe HTML output.
Each has an English description, executable example, exact expected output,
important caveat, Sorani highlight, practice change and official PHP manual link.
Examples are executed with the local PHP during checks, not just syntax-linted.
This is a course selection, not a measured frequency ranking.

The homepage shows ten chapter choices with one primary action each. Lesson
pages have concise titles, a visible lesson number, chapter-return link and
named previous/next lessons. Mobile reading starts with the lesson rather than
the sidebar. Contextual reference links return to the helper section in the last
lesson; function search and category filters do not alter course progress.

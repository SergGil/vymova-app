# Vymova — orientation for Claude Code

Vymova is a React 19 + TypeScript + Vite flashcard PWA (spaced repetition
vocabulary trainer), deployed as a static site on GitHub Pages via
`.github/workflows/deploy.yml` on every push to `main`.

## Before starting an audit / "what's left to do" pass

**Read `docs/CHANGELOG.md` first.** It's a short, append-only log of
conclusions already reached — which roadmap items are actually done vs.
still open, which reported bugs turned out to be established patterns
rather than defects, etc. Several roadmap docs in `docs/` are internally
stale (superseded by a later doc, or checklists never ticked after the
work actually shipped) — the changelog exists specifically so a fresh
session doesn't redo verification work that already happened. If you reach
a real conclusion of your own (an item is done/stale, a suspected bug is
actually fine, a bug is found and fixed), append a short entry there before
moving on.

`docs/` itself is gitignored (local working notes, not shipped) — but
`docs/CHANGELOG.md` and this file are the two places meant to stay
trustworthy across sessions regardless.

**Don't read the rest of `docs/` wholesale.** It's 17 files, several
250–1000+ lines, each covering one narrow historical migration/audit.
`docs/CHANGELOG.md` is the only one worth reading up front, every time —
open a *specific* other doc only when a task actually touches that doc's
area (e.g. only read `component-tailwind-conversion-roadmap.md` if you're
about to touch theme-touched CSS), not preemptively.

## Conventions

- **Version bump every commit**: bump `version` in `package.json` and the
  matching `v1.x.y` string in `js/features/settings/settings-page.tsx`'s
  footer (search for `© 2026 Vymova`), together, in the same commit.
- **Push after every commit** — no separate confirmation needed.
- **Validation before push**: `npx tsc --noEmit && npx eslint . && npx vitest run && npm run build`,
  all clean. During incremental steps mid-task, targeted tests + tsc +
  eslint are enough; run the full suite once before the actual push.
- Cloudflare Worker changes (`worker/src/index.ts`) auto-deploy via GitHub
  Actions on push to `main` if the CF secrets are set — check
  `gh run list --workflow=deploy-worker.yml`, no manual deploy step needed.

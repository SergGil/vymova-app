/**
 * Vymova — src/main.ts
 * Vite entry point (Phase 4: TypeScript throughout).
 */

// main.ts — Vite entry point. Loads all modules in order.

export {}; // make this a module

// First thing, ahead of everything else below: dependency-free leaf modules
// (error-report.ts only imports js/config.ts; analytics.ts imports nothing
// eagerly, its own firebase/analytics import is dynamic) so neither can
// disturb the chunk graph the way removing/reordering the imports further
// down has in the past (see the comment on the learning-path/epub imports
// below). Both are no-ops unless their respective env vars are configured.
import { initErrorReporting } from '../js/core/error-report.ts';
initErrorReporting();
import { initIfConsented } from '../js/core/analytics.ts';
void initIfConsented();

import { initStaleChunkRecovery } from './stale-chunk-recovery.ts';
initStaleChunkRecovery();

// ── 8. App + modes + features ─────────────────────────────────
// preloadInitialMode() runs first, and is awaited directly here (not via a
// module-level top-level `await` inside lang-pair-select.tsx anymore) so it
// can populate src/mode-store.ts *before* mountAppRoot() exists to commit
// anything — the old approach relied on a static `#sel-mode` <select>
// existing in index.html independent of React; that select is gone now, so
// the store must be seeded directly instead. See
// docs/full-react-migration-roadmap.md's "sel-mode" exception.
const { preloadInitialMode } = await import('../js/features/lang-pair-select.tsx');
await preloadInitialMode();

// mountAppRoot() runs next (and its createRoot().render() commits the DOM
// synchronously on this, the initial mount) so that js/app.ts's module-eval
// — which reads #sel-range via getElementById and calls render()
// synchronously — always finds a DOM already populated by React, instead of
// racing it. See docs/card-shell-migration-roadmap.md Phase 1.
const { mountAppRoot } = await import('./app-root.tsx');
mountAppRoot();

await import('../js/app.ts');

// combo/bookmarks/notes/pronunciation/voice статично імпортовані в app.ts.
//
// learning-path.ts (which drags in the >1MB data/grammar.ts) and
// reading/epub.ts (which drags in jszip) were previously removed from this
// boot sequence as a perf optimization — nothing else in the boot chain
// depends on them, and both are separately reachable via their own lazy
// paths (sidebar.tsx's dynamic import for learning-path, modes/reading.tsx's
// dynamic import for epub). That change is reverted: removing these two
// eager imports altered Rollup's automatic chunk-reachability graph enough
// to produce a genuine circular chunk dependency between an auto-generated
// "render-game-bar" chunk and the voice/notifications/cloud-sync chunks
// (Rollup: "Circular chunk: render-game-bar -> voice -> render-game-bar"),
// which crashed at runtime for every visitor with "Uncaught ReferenceError:
// Cannot access '<minified>' before initialization" — confirmed by
// bisecting 894c9ea's changes file-by-file and rebuilding. If this gets
// revisited, it needs a chunking-safe approach (e.g. an explicit
// manualChunks pin, or deferring via requestIdleCallback instead of
// removing the static reachability Rollup relies on here) rather than
// simply dropping the import.
await import('../js/features/learning-path.ts');
await import('../js/features/reading/epub.ts');

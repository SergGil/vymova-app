/**
 * Vymova — src/main.ts
 * Vite entry point (Phase 4: TypeScript throughout).
 */

// main.ts — Vite entry point. Loads all modules in order.

export {}; // make this a module

import { initStaleChunkRecovery } from './stale-chunk-recovery.ts';
initStaleChunkRecovery();

// ── 8. App + modes + features ─────────────────────────────────
// mountAppRoot() runs first (and its createRoot().render() commits the DOM
// synchronously on this, the initial mount) so that js/app.ts's module-eval
// — which reads #sel-mode/#sel-range via getElementById and calls render()
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

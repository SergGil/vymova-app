/**
 * Vymova — src/main.ts
 * Vite entry point (Phase 4: TypeScript throughout).
 */

// main.ts — Vite entry point. Loads all modules in order.

export {}; // make this a module

import { initStaleChunkRecovery } from './stale-chunk-recovery.ts';
initStaleChunkRecovery();

// ── 8. App + modes + features ─────────────────────────────────
await import('../js/app.ts');

// combo/bookmarks/notes/pronunciation/voice статично імпортовані в app.ts.
// learning-path.ts (which drags in the >1MB data/grammar.ts) and
// reading/epub.ts (which drags in jszip) used to be forced into every
// boot here too — but nothing else in the boot chain depends on them,
// neither has module-level side effects, and both are already reachable
// through their own lazy paths (sidebar.tsx's dynamic import for
// learning-path, modes/reading.tsx's dynamic import for epub) that only
// run when a user actually opens that page. Loading them here just
// duplicated that fetch+parse cost on every cold start for everyone.

const { mountAppRoot } = await import('./app-root.tsx');
mountAppRoot();

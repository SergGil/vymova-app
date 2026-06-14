/**
 * English Words App — src/main.ts
 * Vite entry point (Phase 4: TypeScript throughout).
 */

// main.ts — Vite entry point. Loads all modules in order.

export {};  // make this a module

// ── 8. App + modes + features ─────────────────────────────────
await import('../js/app.ts');
await import('../js/modes/pairs.ts');
await import('../js/modes/daily-challenge.ts');

// combo/bookmarks/notes/pronunciation/voice статично імпортовані в app.ts
await import('../js/features/custom.ts');
await import('../js/features/stats.ts');
await import('../js/features/offline.ts');
await import('../js/features/notifications.ts');
await import('../js/features/duel.ts');

await import('../js/features/cloud-sync.ts');
await import('../js/features/i18n.ts');
await import('../js/features/learning-path.ts');

await import('../lib/jszip.min.js');
await import('../js/features/epub.ts');
await import('../js/features/sidebar.ts');

const { mountAppRoot } = await import('./app-root.tsx');
mountAppRoot();

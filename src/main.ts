/**
 * English Words App — src/main.ts
 * Vite entry point (Phase 4: TypeScript throughout).
 */

// main.ts — Vite entry point. Loads all modules in order.

export {};  // make this a module

// ── 8. App + modes + features ─────────────────────────────────
await import('../js/app.ts');

// combo/bookmarks/notes/pronunciation/voice статично імпортовані в app.ts
await import('../js/features/learning-path.ts');

await import('../js/features/epub.ts');

const { mountAppRoot } = await import('./app-root.tsx');
mountAppRoot();

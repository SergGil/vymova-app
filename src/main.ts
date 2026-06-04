/**
 * English Words App — src/main.ts
 * Vite entry point (Phase 4: TypeScript throughout).
 */

// main.ts — Vite entry point. Loads all modules in order.

export {};  // make this a module

declare global {
  interface Window { [key: string]: unknown; }
}

// ── 8. App + modes + features ─────────────────────────────────
await import('../js/app.ts');
await import('../js/modes/quiz.ts');
await import('../js/modes/write.ts');
await import('../js/modes/pairs.ts');
await import('../js/modes/fib.ts');
await import('../js/modes/listening.ts');
await import('../js/modes/catpairs.ts');
await import('../js/modes/lesson.ts');
await import('../js/modes/tempo.ts');
await import('../js/modes/daily-challenge.ts');
await import('../js/modes/reading.ts');

// combo/bookmarks/notes/pronunciation/voice статично імпортовані в app.ts
await import('../js/features/custom.ts');
await import('../js/features/stats.ts');
await import('../js/features/swipe.ts');
await import('../js/features/tag-filter.ts');
await import('../js/features/keyboard.ts');
await import('../js/features/offline.ts');
await import('../js/features/export.ts');
await import('../js/features/notifications.ts');
await import('../js/features/duel.ts');
await import('../js/features/profiles.ts');
await import('../js/features/settings.ts');
await import('../js/features/onboarding.ts');
await import('../js/features/cloud-sync.ts');
await import('../js/features/search.ts');
await import('../js/features/quick-quiz.ts');
await import('../js/features/mode-hints.ts');
await import('../js/features/word-detail.ts');
await import('../js/features/grammar.ts');
await import('../js/features/learning-path.ts');
await import('../js/modes/context.ts');
await import('../js/modes/spelling-bee.ts');
await import('../js/features/leaderboard.ts');
await import('../js/modes/story.ts');

await import('../lib/jszip.min.js');
await import('../js/features/epub.ts');
await import('../js/features/sidebar.ts');

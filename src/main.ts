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
await import('../js/features/swipe.ts');
await import('../js/features/keyboard.ts');
await import('../js/features/offline.ts');
await import('../js/features/export.ts');
await import('../js/features/notifications.ts');
await import('../js/features/duel.ts');

await import('../js/features/settings.ts');
await import('../js/features/cloud-sync.ts');
await import('../js/features/quick-quiz.ts');
await import('../js/features/mode-hints.ts');
await import('../js/features/i18n.ts');
await import('../js/features/learning-path.ts');
await import('../js/features/leaderboard.ts');

await import('../lib/jszip.min.js');
await import('../js/features/epub.ts');
await import('../js/features/bug-report.ts');
await import('../js/features/sidebar.ts');

const { mountDuelLeaderboard } = await import('../js/features/duel-leaderboard.tsx');
mountDuelLeaderboard();

const { mountDuelHistory } = await import('../js/features/duel-history.tsx');
mountDuelHistory();

const { mountDuelLobbyOptions } = await import('../js/features/duel-lobby-options.tsx');
mountDuelLobbyOptions();

const { mountDuelGameHeader } = await import('../js/features/duel-game-header.tsx');
mountDuelGameHeader();

const { mountDuelSpectator } = await import('../js/features/duel-spectator.tsx');
mountDuelSpectator();

const { mountDuelPowerups } = await import('../js/features/duel-powerups.tsx');
mountDuelPowerups();

const { mountDuelFeedback } = await import('../js/features/duel-feedback.tsx');
mountDuelFeedback();

const { mountDuelChatLog } = await import('../js/features/duel-chat-log.tsx');
mountDuelChatLog();

const { mountDuelQuestion } = await import('../js/features/duel-question.tsx');
mountDuelQuestion();

const { mountDuelResume } = await import('../js/features/duel-resume.tsx');
mountDuelResume();

const { mountDuelTournament } = await import('../js/features/duel-tournament.tsx');
mountDuelTournament();

const { mountAppRoot } = await import('./app-root.tsx');
mountAppRoot();

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

const { mountProfileSwitcher } = await import('../js/features/profile-switcher.tsx');
mountProfileSwitcher();

const { mountStatsPage } = await import('../js/features/stats-page.tsx');
mountStatsPage();

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

const { mountLangPairSelect } = await import('../js/features/lang-pair-select.tsx');
mountLangPairSelect();

const { mountWordOfDay } = await import('../js/features/word-of-day.tsx');
mountWordOfDay();

const { mountGoalModal } = await import('../js/features/goal-modal.tsx');
mountGoalModal();

const { mountGameBarLevel } = await import('../js/features/game-bar-level.tsx');
mountGameBarLevel();

const { mountAchievementsPage } = await import('../js/features/achievements-page.tsx');
mountAchievementsPage();

const { mountSearchInline } = await import('../js/features/search-inline.tsx');
mountSearchInline();

const { mountSearchOverlay } = await import('../js/features/search-overlay.tsx');
mountSearchOverlay();

const { mountTagFilterSelect } = await import('../js/features/tag-filter-select.tsx');
mountTagFilterSelect();

const { mountFontSizeControl } = await import('../js/features/font-size-control.tsx');
mountFontSizeControl();

const { mountOnboarding } = await import('../js/features/onboarding.tsx');
mountOnboarding();

const { mountGrammarPage } = await import('../js/features/grammar-page.tsx');
mountGrammarPage();

const { mountIdiomsPage } = await import('../js/features/idioms-page.tsx');
mountIdiomsPage();

const { mountListeningPage } = await import('../js/modes/listening.tsx');
mountListeningPage();

const { mountFibPage } = await import('../js/modes/fib.tsx');
mountFibPage();

const { mountTempoPage } = await import('../js/modes/tempo.tsx');
mountTempoPage();

const { mountSpellingBeePage } = await import('../js/modes/spelling-bee.tsx');
mountSpellingBeePage();

const { mountContextPage } = await import('../js/modes/context.tsx');
mountContextPage();

const { mountReadingPage } = await import('../js/modes/reading.tsx');
mountReadingPage();

const { mountStoryPage } = await import('../js/modes/story.tsx');
mountStoryPage();

const { mountLessonPage } = await import('../js/modes/lesson.tsx');
mountLessonPage();

const { mountWritePage } = await import('../js/modes/write.tsx');
mountWritePage();

const { mountCatpairsPage } = await import('../js/modes/catpairs.tsx');
mountCatpairsPage();

const { mountQuizPage } = await import('../js/modes/quiz.tsx');
mountQuizPage();

const { mountScramblePage } = await import('../js/modes/scramble.tsx');
mountScramblePage();

const { mountWordLettersPage } = await import('../js/modes/word-letters.tsx');
mountWordLettersPage();

const { mountWordDetailPage } = await import('../js/features/word-detail.tsx');
mountWordDetailPage();

const { mountSimilarWordsChips } = await import('../js/features/similar-words.tsx');
mountSimilarWordsChips();

const { mountCardMeta } = await import('../js/features/card-meta.tsx');
mountCardMeta();

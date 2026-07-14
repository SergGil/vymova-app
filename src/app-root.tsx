// Vymova — src/app-root.tsx
// Item 34: єдиний React-рут (createRoot на #app-root). Кожен фічевий
// компонент рендериться через createPortal у свою існуючу #xxx-mount
// точку в DOM (вёрстка та CSS не змінюються).
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import { useEffect, type ReactElement, type ReactNode } from 'react';
import { getMountPoint } from './get-mount-point.ts';
import { HashRouter, useLocation, useNavigate } from 'react-router-dom';
import { setRouterNavigate, ROUTE_TO_PAGE } from './router.ts';
import { NavProvider, getActivePage } from './nav-store.tsx';
import { KnownWordsProvider } from './known-words-store.ts';
import { SrsProvider } from './srs-store.ts';
import { DeckFilterProvider } from './deck-filter-store.ts';
import { DeckProvider } from './deck-store.ts';
import { DuelLobbyProvider } from './duel-lobby-store.ts';
import { DuelRoomProvider } from './duel-room-store.ts';
import { DuelQuestionProvider } from './duel-question-store.ts';
import {
  DuelChatProvider,
  DuelSpecRoomProvider,
  DuelTournViewProvider,
  DuelResultProvider,
  DuelResumeSessionsProvider,
} from './duel-async-store.ts';

import { ProfileSwitcher } from '../js/features/profile-switcher.tsx';
import { WordOfDay } from '../js/features/word-of-day.tsx';
import { DailyMissionCard } from '../js/features/daily-mission-card.tsx';
import { LangPairSelect } from '../js/features/lang-pair-select.tsx';
import { FontSizeControl } from '../js/features/font-size-control.tsx';
import { SrsNewCapControl } from '../js/features/srs-cap-control.tsx';
import { TagFilterSelect } from '../js/features/tag-filter-select.tsx';
import { SearchInline } from '../js/features/search-inline.tsx';
import { SearchOverlay } from '../js/features/search-overlay.tsx';
import { GameBarLevel } from '../js/features/game-bar-level.tsx';
import { GameBarStreak, ComboBox, GameBarGoal } from '../js/features/game-bar-streak.tsx';
import { GoalModal } from '../js/features/goal-modal.tsx';
import { CardMeta } from '../js/features/card-meta.tsx';
import { CardImage } from '../js/features/card-image.tsx';
import { CardNoteDisplay, CardBookmarkNoteVisuals } from '../js/features/card-indicators.tsx';
import {
  WordText,
  Transcription,
  PosTag,
  SrsBadge,
  Translation,
  ExEn,
  ExUa,
  CardHint,
  OtherMeanings,
  FrontSpeakBtnsToggle,
} from '../js/features/card-front-text.tsx';
import { CardIdx, CardKnownCount, ProgressBar } from '../js/features/card-progress.tsx';
import { SimilarWordsChips } from '../js/features/similar-words.tsx';
import {
  WordFamiliesChips,
  CollocationsSection,
  SynonymsChips,
  AntonymsChips,
  EtymologyNote,
  UsageNoteBox,
} from '../js/features/word-context.tsx';
import { ModeHints } from '../js/features/mode-hints.tsx';
import { LevelRing } from '../js/features/ring.tsx';
import { ThemeToggle } from '../js/core/theme.tsx';
import { PwaBanner } from '../js/core/pwa.tsx';
import { SwUpdateBanner } from '../js/core/sw-update.tsx';
import { KeyboardShortcuts } from '../js/core/keyboard.tsx';
import { KeysOverlay } from '../js/features/keyboard.tsx';
import { QuizSwipe } from '../js/features/swipe.tsx';
import { QuickQuizButton } from '../js/features/quick-quiz.tsx';
import { CardSwipe } from '../js/core/swipe.tsx';
import { ImagePrefetchSettings } from '../js/features/image-prefetch.tsx';
import { SettingsInit } from '../js/features/settings.tsx';
import { ProgressIO } from '../js/features/progress-io.tsx';
import { DeckModeInit } from '../js/features/deck-mode.tsx';
import { DeckFilterInit } from '../js/features/deck-filter.tsx';
import { DailyChallenge } from '../js/modes/daily-challenge.tsx';
import { PairsMode } from '../js/modes/pairs.tsx';
import { NotificationsInit } from '../js/features/notifications.tsx';
import { CloudSyncInit } from '../js/features/cloud-sync.tsx';
import { ExportInit } from '../js/features/export.tsx';
import { VoiceInit } from '../js/features/voice/voice.tsx';
import { SidebarInit } from '../js/features/sidebar.tsx';
import { useWordDetailTarget } from '../js/features/word-detail-trigger.ts';
import { useStatsShouldLoad } from '../js/features/stats-trigger.ts';
import { CatPairsPage, CatPairsWiringInit } from '../js/modes/catpairs.tsx';
import { QuizPage } from '../js/modes/quiz.tsx';
import { LazyMode } from './lazy-mode.tsx';
import { LazyPage } from './lazy-page.tsx';
import { ProfilePage } from '../js/features/profile-page.tsx';
import { OnboardingPage } from '../js/features/onboarding.tsx';
import { BugReportForm } from '../js/features/bug-report.tsx';
import { AchievementToast } from '../js/features/achievement-toast.tsx';
import { CsvExportButton } from '../js/features/csv-export-button.tsx';
import { ComboToast } from '../js/features/combo-toast.tsx';
import { ModeCompleteToast } from '../js/features/mode-complete-toast.tsx';
import { NoteModal } from '../js/features/note-modal.tsx';
import { CardLegendModal } from '../js/features/card-legend.tsx';
import { PronunciationToast } from '../js/features/voice/pronunciation-toast.tsx';
import { ConfettiCanvas } from '../js/core/confetti.tsx';
import { CardActionsInit } from '../js/features/card-actions.ts';
import { StatsInit } from '../js/features/stats.ts';
import { OfflineInit } from '../js/features/offline.ts';
import { I18nInit } from '../js/features/i18n.ts';

// Gives non-React code (sidebar.tsx openPage/closePage) access to navigate().
function NavigateBridge(): null {
  const navigate = useNavigate();
  useEffect(() => {
    setRouterNavigate(navigate);
  }, [navigate]);
  return null;
}

// Syncs browser back/forward navigation → openPage / closePage.
// Uses lazy imports to avoid a circular dependency with sidebar.tsx.
function RouterSync(): null {
  const location = useLocation();
  useEffect(() => {
    const page = ROUTE_TO_PAGE[location.pathname] ?? null;
    if (page && getActivePage() !== page) {
      import('../js/features/sidebar.tsx').then(({ openPage }) => openPage(page));
    } else if (!page && location.pathname === '/' && getActivePage() !== null) {
      import('../js/features/sidebar.tsx').then(({ closePage }) => closePage());
    }
  }, [location.pathname]);
  return null;
}

function Portal({ id, children }: { id: string; children: ReactNode }): ReactElement | null {
  const el = getMountPoint(id);
  return el ? createPortal(children, el) : null;
}

// Loader functions passed to LazyPage/LazyMode below are hoisted to module
// scope, not defined inline in AppRoot's JSX — both components key a
// useEffect off `loader`, so a fresh inline arrow function on every AppRoot
// re-render (e.g. every single word-detail panel open/close, since
// useWordDetailTarget() is read directly in AppRoot's body) was tearing
// down and re-attaching every not-yet-loaded mode's click listener on every
// card click. None of these close over props/state, so hoisting is safe.
const _loadWordDetail = () =>
  import('../js/features/word-detail.tsx').then((m) => ({ Page: m.WordDetailPage }));
const _loadListening = () =>
  import('../js/modes/listening.tsx').then((m) => ({
    Page: m.ListeningPage,
    open: m.openListening,
  }));
const _loadFib = () =>
  import('../js/modes/fib.tsx').then((m) => ({ Page: m.FibPage, open: m.openFib }));
const _loadTempo = () =>
  import('../js/modes/tempo.tsx').then((m) => ({ Page: m.TempoPage, open: m.openTempo }));
const _loadSpellingBee = () =>
  import('../js/modes/spelling-bee.tsx').then((m) => ({
    Page: m.SpellingBeePage,
    open: m.openSpellingBee,
  }));
const _loadContext = () =>
  import('../js/modes/context.tsx').then((m) => ({ Page: m.ContextPage, open: m.openContext }));
const _loadReading = () =>
  import('../js/modes/reading.tsx').then((m) => ({ Page: m.ReadingPage, open: m.openReading }));
const _loadStory = () =>
  import('../js/modes/story.tsx').then((m) => ({ Page: m.StoryPage, open: m.openStoryMode }));
const _loadLesson = () =>
  import('../js/modes/lesson.tsx').then((m) => ({ Page: m.LessonPage, open: m.openLesson }));
const _loadWrite = () =>
  import('../js/modes/write.tsx').then((m) => ({
    Page: m.WritePage,
    open: () => m.openWrite(null),
  }));
const _loadAdaptiveQuiz = () =>
  import('../js/modes/adaptive-quiz.tsx').then((m) => ({
    Page: m.AdaptiveQuizPage,
    open: m.openAdaptiveQuiz,
  }));
const _loadOddOneOut = () =>
  import('../js/modes/odd-one-out.tsx').then((m) => ({
    Page: m.OddOneOutPage,
    open: m.openOddOneOut,
  }));
const _loadSentenceBuilder = () =>
  import('../js/modes/sentence-builder.tsx').then((m) => ({
    Page: m.SentenceBuilderPage,
    open: m.openSentenceBuilder,
  }));
const _loadErrorHunt = () =>
  import('../js/modes/error-hunt.tsx').then((m) => ({
    Page: m.ErrorHuntPage,
    open: m.openErrorHunt,
  }));
const _loadAssocChain = () =>
  import('../js/modes/assoc-chain.tsx').then((m) => ({
    Page: m.AssocChainPage,
    open: m.openAssocChain,
  }));
const _loadWordHint = () =>
  import('../js/modes/word-hint.tsx').then((m) => ({
    Page: m.WordHintPage,
    open: m.openWordHint,
  }));
const _loadShadowing = () =>
  import('../js/modes/shadowing.tsx').then((m) => ({
    Page: m.ShadowingPage,
    open: m.openShadowing,
  }));
const _loadGhostRace = () =>
  import('../js/modes/ghost-race.tsx').then((m) => ({
    Page: m.GhostRacePage,
    open: m.openGhostRace,
  }));
const _loadDictation = () =>
  import('../js/modes/dictation.tsx').then((m) => ({
    Page: m.DictationPage,
    open: m.openDictation,
  }));
const _loadIdiomQuiz = () =>
  import('../js/modes/idiom-quiz.tsx').then((m) => ({
    Page: m.IdiomQuizPage,
    open: m.openIdiomQuiz,
  }));
const _loadGrammarQuiz = () =>
  import('../js/modes/grammar-quiz.tsx').then((m) => ({
    Page: m.GrammarQuizPage,
    open: m.openGrammarQuiz,
  }));
const _loadCompare = () =>
  import('../js/modes/compare.tsx').then((m) => ({ Page: m.ComparePage, open: m.openCompare }));
const _loadScramble = () =>
  import('../js/modes/scramble.tsx').then((m) => ({ Page: m.ScramblePage, open: m.openScramble }));
const _loadWordLetters = () =>
  import('../js/modes/word-letters.tsx').then((m) => ({
    Page: m.WordLettersPage,
    open: m.openWordLetters,
  }));
const _loadStats = () =>
  import('../js/features/stats-page.tsx').then((m) => ({ Page: m.StatsPage }));
const _loadAchievements = () =>
  import('../js/features/achievements-page.tsx').then((m) => ({ Page: m.AchievementsPage }));
const _loadGrammar = () =>
  import('../js/features/grammar-page.tsx').then((m) => ({ Page: m.GrammarPage }));
const _loadIdioms = () =>
  import('../js/features/idioms-page.tsx').then((m) => ({ Page: m.IdiomsPageRoot }));
const _loadTranslate = () =>
  import('../js/features/translate-page.tsx').then((m) => ({ Page: m.TranslatePage }));
const _loadLangHistory = () =>
  import('../js/features/lang-history-page.tsx').then((m) => ({ Page: m.LangHistoryPage }));
const _loadAiTutor = () =>
  import('../js/features/voice/ai-tutor.tsx').then((m) => ({ Page: m.AiTutorPage }));
const _loadVoiceRoleplay = () =>
  import('../js/features/voice/voice-roleplay.tsx').then((m) => ({ Page: m.VoiceRoleplayPage }));
const _loadYoutubePlayer = () =>
  import('../js/features/reading/youtube-player.tsx').then((m) => ({
    Page: m.YoutubePlayerPage,
  }));
const _loadVideoPlayer = () =>
  import('../js/features/reading/video-player.tsx').then((m) => ({ Page: m.VideoPlayerPage }));
const _loadDuelOverlay = () =>
  import('../js/features/duel/duel-overlay.tsx').then((m) => ({ Page: m.DuelOverlay }));
const _loadDuelInit = () =>
  import('../js/features/duel/duel.ts').then((m) => ({ Page: m.DuelInit }));

function AppRoot(): ReactElement {
  return (
    <>
      <Portal id="profile-switcher-mount">
        <ProfileSwitcher />
      </Portal>
      <Portal id="wotd-mount">
        <WordOfDay />
      </Portal>
      <Portal id="daily-mission-mount">
        <DailyMissionCard />
      </Portal>
      <Portal id="lang-pair-select">
        <LangPairSelect />
      </Portal>
      <Portal id="font-size-control">
        <FontSizeControl />
      </Portal>
      <Portal id="srs-new-cap-control">
        <SrsNewCapControl />
      </Portal>
      <Portal id="sel-tag">
        <TagFilterSelect />
      </Portal>
      <Portal id="search-inline-mount">
        <SearchInline />
      </Portal>
      <Portal id="search-overlay-mount">
        <SearchOverlay />
      </Portal>
      <Portal id="level-box">
        <GameBarLevel />
      </Portal>
      <Portal id="streak-block-mount">
        <GameBarStreak />
      </Portal>
      <Portal id="combo-box-mount">
        <ComboBox />
      </Portal>
      <Portal id="goal-block-mount">
        <GameBarGoal />
      </Portal>
      <Portal id="goal-modal-mount">
        <GoalModal />
      </Portal>
      <Portal id="card-meta-mount">
        <CardMeta />
      </Portal>
      <Portal id="illus-mount">
        <CardImage />
      </Portal>
      <Portal id="card-note-mount">
        <CardNoteDisplay />
      </Portal>
      <CardBookmarkNoteVisuals />
      <Portal id="wword-mount">
        <WordText />
      </Portal>
      <Portal id="wtrans-mount">
        <Transcription />
      </Portal>
      <Portal id="wpos-mount">
        <PosTag />
      </Portal>
      <Portal id="srs-next-mount">
        <SrsBadge />
      </Portal>
      <Portal id="wtransl-mount">
        <Translation />
      </Portal>
      <Portal id="senses-mount">
        <OtherMeanings />
      </Portal>
      <Portal id="exen-mount">
        <ExEn />
      </Portal>
      <Portal id="exua-mount">
        <ExUa />
      </Portal>
      <Portal id="cidx-mount">
        <CardIdx />
      </Portal>
      <Portal id="cknown-mount">
        <CardKnownCount />
      </Portal>
      <Portal id="pbar-mount">
        <ProgressBar />
      </Portal>
      <Portal id="card-hint-mount">
        <CardHint />
      </Portal>
      <Portal id="similar-words-mount">
        <SimilarWordsChips />
      </Portal>
      <Portal id="word-families-mount">
        <WordFamiliesChips />
      </Portal>
      <Portal id="collocations-mount">
        <CollocationsSection />
      </Portal>
      <Portal id="synonyms-mount">
        <SynonymsChips />
      </Portal>
      <Portal id="antonyms-mount">
        <AntonymsChips />
      </Portal>
      <Portal id="etymology-mount">
        <EtymologyNote />
      </Portal>
      <Portal id="usage-note-mount">
        <UsageNoteBox />
      </Portal>
      <ModeHints />
      <Portal id="level-ring-mount">
        <LevelRing />
      </Portal>
      <Portal id="theme-toggle-mount">
        <ThemeToggle />
      </Portal>
      <Portal id="pwa-banner-mount">
        <PwaBanner />
      </Portal>
      <Portal id="sw-update-banner-mount">
        <SwUpdateBanner />
      </Portal>
      <KeyboardShortcuts />
      <Portal id="keys-overlay-mount">
        <KeysOverlay />
      </Portal>
      <QuizSwipe />
      <Portal id="quick-quiz-mount">
        <QuickQuizButton />
      </Portal>
      <CardSwipe />
      <Portal id="image-prefetch-mount">
        <ImagePrefetchSettings />
      </Portal>
      <FrontSpeakBtnsToggle />
      <SettingsInit />
      <ProgressIO />
      <DeckModeInit />
      <DeckFilterInit />
      <DailyChallenge />
      <PairsMode />
      <NotificationsInit />
      <CloudSyncInit />
      <ExportInit />
      <VoiceInit />
      <SidebarInit />
      <LazyPage
        active={useWordDetailTarget() !== null}
        mountId="wd-page-mount"
        loader={_loadWordDetail}
      />
      <LazyMode btnId="btn-listen" mountId="listen-page-mount" loader={_loadListening} />
      <LazyMode btnId="btn-fib" mountId="fib-page-mount" loader={_loadFib} />
      <LazyMode btnId="btn-tempo" mountId="tempo-page-mount" loader={_loadTempo} />
      <LazyMode btnId="btn-spelling-bee" mountId="bee-page-mount" loader={_loadSpellingBee} />
      <LazyMode btnId="btn-context" mountId="ctx-page-mount" loader={_loadContext} />
      <LazyMode btnId="btn-reading" mountId="reading-page-mount" loader={_loadReading} />
      <LazyMode btnId="btn-story" mountId="story-page-mount" loader={_loadStory} />
      <LazyMode btnId="btn-lesson" mountId="lesson-page-mount" loader={_loadLesson} />
      <LazyMode btnId="btn-write" mountId="write-page-mount" loader={_loadWrite} />
      <Portal id="catpairs-page-mount">
        <CatPairsPage />
      </Portal>
      <CatPairsWiringInit />
      <Portal id="quiz-page-mount">
        <QuizPage />
      </Portal>
      <LazyMode btnId="btn-adaptive-quiz" mountId="aq-page-mount" loader={_loadAdaptiveQuiz} />
      <LazyMode btnId="btn-oddone" mountId="oo-page-mount" loader={_loadOddOneOut} />
      <LazyMode btnId="btn-sentbuild" mountId="sb-page-mount" loader={_loadSentenceBuilder} />
      <LazyMode btnId="btn-error-hunt" mountId="eh-page-mount" loader={_loadErrorHunt} />
      <LazyMode btnId="btn-assoc" mountId="assoc-page-mount" loader={_loadAssocChain} />
      <LazyMode btnId="btn-wordhint" mountId="hint-page-mount" loader={_loadWordHint} />
      <LazyMode btnId="btn-shadow" mountId="shadow-page-mount" loader={_loadShadowing} />
      <LazyMode btnId="btn-ghost" mountId="ghost-page-mount" loader={_loadGhostRace} />
      <LazyMode btnId="btn-dictation" mountId="dict-page-mount" loader={_loadDictation} />
      <LazyMode btnId="btn-idiom-quiz" mountId="idq-page-mount" loader={_loadIdiomQuiz} />
      <LazyMode btnId="btn-grammar-quiz" mountId="grq-page-mount" loader={_loadGrammarQuiz} />
      <LazyMode btnId="btn-compare" mountId="cmp-page-mount" loader={_loadCompare} />
      <LazyMode btnId="btn-scramble" mountId="scr-page-mount" loader={_loadScramble} />
      <LazyMode btnId="btn-letters" mountId="wl-page-mount" loader={_loadWordLetters} />
      <LazyPage active={useStatsShouldLoad()} mountId="stats-overlay" loader={_loadStats} />
      <LazyPage page="ach" mountId="achievements-grid" loader={_loadAchievements} />
      <ProfilePage />
      <LazyPage page="grammar" mountId="grammar-layout-mount" loader={_loadGrammar} />
      <LazyPage page="idioms" mountId="idioms-page-mount" loader={_loadIdioms} />
      <LazyPage page="translate" loader={_loadTranslate} />
      <LazyPage page="lang-history" loader={_loadLangHistory} />
      <LazyPage page="ai-tutor" loader={_loadAiTutor} />
      <LazyPage page="voice-roleplay" loader={_loadVoiceRoleplay} />
      <LazyPage page="youtube-player" loader={_loadYoutubePlayer} />
      <LazyPage page="video-player" loader={_loadVideoPlayer} />
      <Portal id="onboarding-mount">
        <OnboardingPage />
      </Portal>
      <Portal id="bug-report-mount">
        <BugReportForm />
      </Portal>
      <Portal id="achievement-toast-mount">
        <AchievementToast />
      </Portal>
      <Portal id="csv-export-mount">
        <CsvExportButton />
      </Portal>
      <Portal id="combo-toast-mount">
        <ComboToast />
      </Portal>
      <Portal id="mode-complete-toast-mount">
        <ModeCompleteToast />
      </Portal>
      <NoteModal />
      <CardLegendModal />
      <PronunciationToast />
      <Portal id="confetti-canvas-mount">
        <ConfettiCanvas />
      </Portal>
      <LazyPage page="duel" mountId="duel-overlay-mount" loader={_loadDuelOverlay} />
      <LazyPage page="duel" loader={_loadDuelInit} />
      <CardActionsInit />
      <StatsInit />
      <OfflineInit />
      <I18nInit />
    </>
  );
}

export function mountAppRoot(): void {
  createRoot(document.getElementById('app-root')!).render(
    // Hash-based routing: an installed PWA window's address bar can get
    // stuck visible after a history.pushState route change even when the
    // new path is in-scope (a known Chromium quirk) — hash changes never
    // touch the actual resource path, so this avoids the check entirely.
    <HashRouter>
      <NavProvider>
        <KnownWordsProvider>
          <SrsProvider>
            <DeckFilterProvider>
              <DeckProvider>
                <DuelLobbyProvider>
                  <DuelRoomProvider>
                    <DuelQuestionProvider>
                      <DuelChatProvider>
                        <DuelSpecRoomProvider>
                          <DuelTournViewProvider>
                            <DuelResultProvider>
                              <DuelResumeSessionsProvider>
                                <NavigateBridge />
                                <RouterSync />
                                <AppRoot />
                              </DuelResumeSessionsProvider>
                            </DuelResultProvider>
                          </DuelTournViewProvider>
                        </DuelSpecRoomProvider>
                      </DuelChatProvider>
                    </DuelQuestionProvider>
                  </DuelRoomProvider>
                </DuelLobbyProvider>
              </DeckProvider>
            </DeckFilterProvider>
          </SrsProvider>
        </KnownWordsProvider>
      </NavProvider>
    </HashRouter>,
  );
}

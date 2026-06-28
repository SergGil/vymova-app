// Vymova — src/app-root.tsx
// Item 34: єдиний React-рут (createRoot на #app-root). Кожен фічевий
// компонент рендериться через createPortal у свою існуючу #xxx-mount
// точку в DOM (вёрстка та CSS не змінюються).
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import { useEffect, type ReactElement, type ReactNode } from 'react';
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom';
import { setRouterNavigate, ROUTE_TO_PAGE } from './router.ts';
import { NavProvider, getActivePage } from './nav-store.tsx';
import { KnownWordsProvider } from './known-words-store.ts';
import { SrsProvider } from './srs-store.ts';
import { DeckFilterProvider } from './deck-filter-store.ts';

import { ProfileSwitcher } from '../js/features/profile-switcher.tsx';
import { WordOfDay } from '../js/features/word-of-day.tsx';
import { LangPairSelect } from '../js/features/lang-pair-select.tsx';
import { FontSizeControl } from '../js/features/font-size-control.tsx';
import { TagFilterSelect } from '../js/features/tag-filter-select.tsx';
import { SearchInline } from '../js/features/search-inline.tsx';
import { SearchOverlay } from '../js/features/search-overlay.tsx';
import { GameBarLevel } from '../js/features/game-bar-level.tsx';
import { GameBarStreak, ComboBox, GameBarGoal } from '../js/features/game-bar-streak.tsx';
import { GoalModal } from '../js/features/goal-modal.tsx';
import { CardMeta } from '../js/features/card-meta.tsx';
import { WordText, Transcription, PosTag, SrsBadge, Translation, ExEn, ExUa, CardHint, OtherMeanings, FrontSpeakBtnsToggle } from '../js/features/card-front-text.tsx';
import { CardIdx, CardKnownCount, ProgressBar } from '../js/features/card-progress.tsx';
import { SimilarWordsChips } from '../js/features/similar-words.tsx';
import { WordFamiliesChips, CollocationsSection, SynonymsChips, EtymologyNote, UsageNoteBox } from '../js/features/word-context.tsx';
import { ModeHints } from '../js/features/mode-hints.tsx';
import { LevelRing } from '../js/features/ring.tsx';
import { ThemeToggle } from '../js/core/theme.tsx';
import { PwaBanner } from '../js/core/pwa.tsx';
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
import { VoiceInit } from '../js/features/voice.tsx';
import { SidebarInit } from '../js/features/sidebar.tsx';
import { WordDetailPage } from '../js/features/word-detail.tsx';
import { ListeningPage } from '../js/modes/listening.tsx';
import { FibPage } from '../js/modes/fib.tsx';
import { TempoPage } from '../js/modes/tempo.tsx';
import { SpellingBeePage } from '../js/modes/spelling-bee.tsx';
import { ContextPage } from '../js/modes/context.tsx';
import { ReadingPage } from '../js/modes/reading.tsx';
import { StoryPage } from '../js/modes/story.tsx';
import { LessonPage } from '../js/modes/lesson.tsx';
import { WritePage } from '../js/modes/write.tsx';
import { CatPairsPage, CatPairsWiringInit } from '../js/modes/catpairs.tsx';
import { QuizPage } from '../js/modes/quiz.tsx';
import { AdaptiveQuizPage } from '../js/modes/adaptive-quiz.tsx';
import { ScramblePage } from '../js/modes/scramble.tsx';
import { WordLettersPage } from '../js/modes/word-letters.tsx';
import { StatsPage } from '../js/features/stats-page.tsx';
import { AchievementsPage } from '../js/features/achievements-page.tsx';
import { ProfilePage } from '../js/features/profile-page.tsx';
import { GrammarPage } from '../js/features/grammar-page.tsx';
import { IdiomsPageRoot } from '../js/features/idioms-page.tsx';
import { AiTutorPage } from '../js/features/ai-tutor.tsx';
import { VoiceRoleplayPage } from '../js/features/voice-roleplay.tsx';
import { YoutubePlayerPage } from '../js/features/youtube-player.tsx';
import { VideoPlayerPage } from '../js/features/video-player.tsx';
import { OnboardingPage } from '../js/features/onboarding.tsx';
import { BugReportForm } from '../js/features/bug-report.tsx';
import { AchievementToast } from '../js/features/achievement-toast.tsx';
import { CsvExportButton } from '../js/features/csv-export-button.tsx';
import { ComboToast } from '../js/features/combo-toast.tsx';
import { NoteModal } from '../js/features/note-modal.tsx';
import { CardLegendModal } from '../js/features/card-legend.tsx';
import { PronunciationToast } from '../js/features/pronunciation-toast.tsx';
import { ConfettiCanvas } from '../js/core/confetti.tsx';
import { DuelOverlay } from '../js/features/duel-overlay.tsx';
import { DuelInit } from '../js/features/duel.ts';
import { CardActionsInit } from '../js/features/card-actions.ts';
import { StatsInit } from '../js/features/stats.ts';
import { OfflineInit } from '../js/features/offline.ts';
import { I18nInit } from '../js/features/i18n.ts';

// Gives non-React code (sidebar.tsx openPage/closePage) access to navigate().
function NavigateBridge(): null {
  const navigate = useNavigate();
  useEffect(() => { setRouterNavigate(navigate); }, [navigate]);
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
  const el = document.getElementById(id);
  return el ? createPortal(children, el) : null;
}

function AppRoot(): ReactElement {
  return <>
    <Portal id="profile-switcher-mount"><ProfileSwitcher/></Portal>
    <Portal id="wotd-mount"><WordOfDay/></Portal>
    <Portal id="lang-pair-select"><LangPairSelect/></Portal>
    <Portal id="font-size-control"><FontSizeControl/></Portal>
    <Portal id="sel-tag"><TagFilterSelect/></Portal>
    <Portal id="search-inline-mount"><SearchInline/></Portal>
    <Portal id="search-overlay-mount"><SearchOverlay/></Portal>
    <Portal id="level-box"><GameBarLevel/></Portal>
    <Portal id="streak-block-mount"><GameBarStreak/></Portal>
    <Portal id="combo-box-mount"><ComboBox/></Portal>
    <Portal id="goal-block-mount"><GameBarGoal/></Portal>
    <Portal id="goal-modal-mount"><GoalModal/></Portal>
    <Portal id="card-meta-mount"><CardMeta/></Portal>
    <Portal id="wword-mount"><WordText/></Portal>
    <Portal id="wtrans-mount"><Transcription/></Portal>
    <Portal id="wpos-mount"><PosTag/></Portal>
    <Portal id="srs-next-mount"><SrsBadge/></Portal>
    <Portal id="wtransl-mount"><Translation/></Portal>
    <Portal id="senses-mount"><OtherMeanings/></Portal>
    <Portal id="exen-mount"><ExEn/></Portal>
    <Portal id="exua-mount"><ExUa/></Portal>
    <Portal id="cidx-mount"><CardIdx/></Portal>
    <Portal id="cknown-mount"><CardKnownCount/></Portal>
    <Portal id="pbar-mount"><ProgressBar/></Portal>
    <Portal id="card-hint-mount"><CardHint/></Portal>
    <Portal id="similar-words-mount"><SimilarWordsChips/></Portal>
    <Portal id="word-families-mount"><WordFamiliesChips/></Portal>
    <Portal id="collocations-mount"><CollocationsSection/></Portal>
    <Portal id="synonyms-mount"><SynonymsChips/></Portal>
    <Portal id="etymology-mount"><EtymologyNote/></Portal>
    <Portal id="usage-note-mount"><UsageNoteBox/></Portal>
    <ModeHints/>
    <Portal id="level-ring-mount"><LevelRing/></Portal>
    <Portal id="theme-toggle-mount"><ThemeToggle/></Portal>
    <Portal id="pwa-banner-mount"><PwaBanner/></Portal>
    <KeyboardShortcuts/>
    <Portal id="keys-overlay-mount"><KeysOverlay/></Portal>
    <QuizSwipe/>
    <Portal id="quick-quiz-mount"><QuickQuizButton/></Portal>
    <CardSwipe/>
    <Portal id="image-prefetch-mount"><ImagePrefetchSettings/></Portal>
    <FrontSpeakBtnsToggle/>
    <SettingsInit/>
    <ProgressIO/>
    <DeckModeInit/>
    <DeckFilterInit/>
    <DailyChallenge/>
    <PairsMode/>
    <NotificationsInit/>
    <CloudSyncInit/>
    <ExportInit/>
    <VoiceInit/>
    <SidebarInit/>
    <Portal id="wd-page-mount"><WordDetailPage/></Portal>
    <Portal id="listen-page-mount"><ListeningPage/></Portal>
    <Portal id="fib-page-mount"><FibPage/></Portal>
    <Portal id="tempo-page-mount"><TempoPage/></Portal>
    <Portal id="bee-page-mount"><SpellingBeePage/></Portal>
    <Portal id="ctx-page-mount"><ContextPage/></Portal>
    <Portal id="reading-page-mount"><ReadingPage/></Portal>
    <Portal id="story-page-mount"><StoryPage/></Portal>
    <Portal id="lesson-page-mount"><LessonPage/></Portal>
    <Portal id="write-page-mount"><WritePage/></Portal>
    <Portal id="catpairs-page-mount"><CatPairsPage/></Portal>
    <CatPairsWiringInit/>
    <Portal id="quiz-page-mount"><QuizPage/></Portal>
    <Portal id="aq-page-mount"><AdaptiveQuizPage/></Portal>
    <Portal id="scr-page-mount"><ScramblePage/></Portal>
    <Portal id="wl-page-mount"><WordLettersPage/></Portal>
    <Portal id="stats-overlay"><StatsPage/></Portal>
    <Portal id="achievements-grid"><AchievementsPage/></Portal>
    <ProfilePage/>
    <Portal id="grammar-layout-mount"><GrammarPage/></Portal>
    <Portal id="idioms-page-mount"><IdiomsPageRoot/></Portal>
    <AiTutorPage/>
    <VoiceRoleplayPage/>
    <YoutubePlayerPage/>
    <VideoPlayerPage/>
    <Portal id="onboarding-mount"><OnboardingPage/></Portal>
    <Portal id="bug-report-mount"><BugReportForm/></Portal>
    <Portal id="achievement-toast-mount"><AchievementToast/></Portal>
    <Portal id="csv-export-mount"><CsvExportButton/></Portal>
    <Portal id="combo-toast-mount"><ComboToast/></Portal>
    <NoteModal/>
    <CardLegendModal/>
    <PronunciationToast/>
    <Portal id="confetti-canvas-mount"><ConfettiCanvas/></Portal>
    <Portal id="duel-overlay-mount"><DuelOverlay/></Portal>
    <DuelInit/>
    <CardActionsInit/>
    <StatsInit/>
    <OfflineInit/>
    <I18nInit/>
  </>;
}

// BASE_URL is '/' in dev and '/vymova-app/' in production (GitHub Actions).
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

export function mountAppRoot(): void {
  createRoot(document.getElementById('app-root')!).render(
    <BrowserRouter basename={basename}>
      <NavProvider>
        <KnownWordsProvider>
          <SrsProvider>
            <DeckFilterProvider>
              <NavigateBridge/>
              <RouterSync/>
              <AppRoot/>
            </DeckFilterProvider>
          </SrsProvider>
        </KnownWordsProvider>
      </NavProvider>
    </BrowserRouter>
  );
}

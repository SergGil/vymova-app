// English Words App — src/app-root.tsx
// Item 34: єдиний React-рут (createRoot на #app-root). Кожен фічевий
// компонент рендериться через createPortal у свою існуючу #xxx-mount
// точку в DOM (вёрстка та CSS не змінюються).
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import type { ReactElement, ReactNode } from 'react';

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
import { WordText, Transcription, PosTag, SrsBadge, Translation, ExEn, ExUa } from '../js/features/card-front-text.tsx';
import { CardIdx, CardKnownCount, ProgressBar } from '../js/features/card-progress.tsx';
import { SimilarWordsChips } from '../js/features/similar-words.tsx';
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
import { CatPairsPage } from '../js/modes/catpairs.tsx';
import { QuizPage } from '../js/modes/quiz.tsx';
import { ScramblePage } from '../js/modes/scramble.tsx';
import { WordLettersPage } from '../js/modes/word-letters.tsx';
import { StatsPage } from '../js/features/stats-page.tsx';
import { AchievementsPage } from '../js/features/achievements-page.tsx';
import { GrammarPage } from '../js/features/grammar-page.tsx';
import { IdiomsPageRoot } from '../js/features/idioms-page.tsx';
import { OnboardingPage } from '../js/features/onboarding.tsx';
import { DuelLeaderboard, DuelRating } from '../js/features/duel-leaderboard.tsx';
import { DuelHistory } from '../js/features/duel-history.tsx';
import { DuelModePicker, DuelCategoryPicker, DuelOptionsRow } from '../js/features/duel-lobby-options.tsx';
import { DuelGameHeader } from '../js/features/duel-game-header.tsx';
import { DuelSpectatorView } from '../js/features/duel-spectator.tsx';
import { DuelPowerups } from '../js/features/duel-powerups.tsx';
import { DuelFeedback } from '../js/features/duel-feedback.tsx';
import { DuelChatLog } from '../js/features/duel-chat-log.tsx';
import { DuelChatPanel } from '../js/features/duel-chat-panel.tsx';
import { DuelTempoTimer } from '../js/features/duel-tempo-timer.tsx';
import { DuelQuestion } from '../js/features/duel-question.tsx';
import { DuelResume } from '../js/features/duel-resume.tsx';
import { DuelTournament } from '../js/features/duel-tournament.tsx';
import { DuelCountdown } from '../js/features/duel-countdown.tsx';
import { DuelResult } from '../js/features/duel-result.tsx';

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
    <Portal id="exen-mount"><ExEn/></Portal>
    <Portal id="exua-mount"><ExUa/></Portal>
    <Portal id="cidx-mount"><CardIdx/></Portal>
    <Portal id="cknown-mount"><CardKnownCount/></Portal>
    <Portal id="pbar-mount"><ProgressBar/></Portal>
    <Portal id="similar-words-mount"><SimilarWordsChips/></Portal>
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
    <Portal id="quiz-page-mount"><QuizPage/></Portal>
    <Portal id="scr-page-mount"><ScramblePage/></Portal>
    <Portal id="wl-page-mount"><WordLettersPage/></Portal>
    <Portal id="stats-overlay"><StatsPage/></Portal>
    <Portal id="achievements-grid"><AchievementsPage/></Portal>
    <Portal id="grammar-layout-mount"><GrammarPage/></Portal>
    <Portal id="idioms-page-mount"><IdiomsPageRoot/></Portal>
    <Portal id="onboarding-mount"><OnboardingPage/></Portal>
    <Portal id="duel-leaderboard"><DuelLeaderboard/></Portal>
    <Portal id="duel-rating-row"><DuelRating/></Portal>
    <Portal id="duel-history-list"><DuelHistory/></Portal>
    <Portal id="duel-mode-picker"><DuelModePicker/></Portal>
    <Portal id="duel-cat-picker"><DuelCategoryPicker/></Portal>
    <Portal id="duel-options-row"><DuelOptionsRow/></Portal>
    <Portal id="duel-game-header-mount"><DuelGameHeader/></Portal>
    <Portal id="duel-spectate-mount"><DuelSpectatorView/></Portal>
    <Portal id="dm-powerups-mount"><DuelPowerups/></Portal>
    <Portal id="dm-feedback-mount"><DuelFeedback/></Portal>
    <Portal id="duel-chat-log-mount"><DuelChatLog/></Portal>
    <Portal id="duel-chat-panel-mount"><DuelChatPanel/></Portal>
    <Portal id="duel-tempo-mount"><DuelTempoTimer/></Portal>
    <Portal id="duel-question-mount"><DuelQuestion/></Portal>
    <Portal id="duel-resume-mount"><DuelResume/></Portal>
    <Portal id="duel-tournament-mount"><DuelTournament/></Portal>
    <Portal id="duel-countdown-mount"><DuelCountdown/></Portal>
    <Portal id="duel-result-mount"><DuelResult/></Portal>
  </>;
}

export function mountAppRoot(): void {
  createRoot(document.getElementById('app-root')!).render(<AppRoot/>);
}

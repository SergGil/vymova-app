// Vymova — js/features/quick-quiz.tsx
// ⚡ Quick Quiz button — launches 5-question quiz from current deck
import type { ReactElement } from 'react';
import { openQuickQuiz } from '../modes/quiz.tsx';
import { t } from './i18n.ts';
import { useLangVersion } from '../../src/store.ts';

// Compact icon button living in the actions-bar-center row (next to
// Назад/Авто/🔀/🔍/Далі) rather than its own full-width row below — the
// label lives in the title tooltip, matching the 🔀/🔍 icon-only buttons.
export function QuickQuizButton(): ReactElement {
  // Only reactive dependency is t()'s title string — the UI-language channel
  // is enough, no need for the global bus's per-card/combo/duel-poll churn.
  useLangVersion();
  return (
    <button
      id="btn-quick-quiz"
      className="btn bg-[var(--btn-bg)] border-[var(--btn-border-color)] text-[var(--btn-color)] [transition:var(--btn-transition)] hover:bg-[var(--btn-hover-bg)] hover:text-[var(--btn-hover-color)] hover:border-[var(--btn-hover-border-fallback)] hover:shadow-[var(--btn-hover-shadow)]"
      title={t('cards.quickQuizTitle')}
      style={{
        fontSize: '14px',
        color: 'var(--accent)',
        borderColor: 'var(--accent)',
      }}
      onClick={openQuickQuiz}
    >
      ⚡
    </button>
  );
}

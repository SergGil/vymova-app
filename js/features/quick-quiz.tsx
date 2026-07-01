// Vymova — js/features/quick-quiz.tsx
// ⚡ Quick Quiz button — launches 5-question quiz from current deck
import type { ReactElement } from 'react';
import { openQuickQuiz } from '../modes/quiz.tsx';
import { t } from './i18n.ts';
import { useStateVersion } from '../../src/store.ts';

// Compact icon button living in the actions-bar-center row (next to
// Назад/Авто/🔀/🔍/Далі) rather than its own full-width row below — the
// label lives in the title tooltip, matching the 🔀/🔍 icon-only buttons.
export function QuickQuizButton(): ReactElement {
  useStateVersion();
  return (
    <button
      id="btn-quick-quiz"
      className="btn"
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

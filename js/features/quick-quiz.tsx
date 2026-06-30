// Vymova — js/features/quick-quiz.tsx
// ⚡ Quick Quiz button — launches 5-question quiz from current deck
import type { ReactElement } from 'react';
import { openQuickQuiz } from '../modes/quiz.tsx';
import { t } from './i18n.ts';
import { useStateVersion } from '../../src/store.ts';

export function QuickQuizButton(): ReactElement {
  useStateVersion();
  return (
    <button
      id="btn-quick-quiz"
      className="btn"
      title={t('cards.quickQuizTitle')}
      style={{
        width: '100%',
        maxWidth: '360px',
        fontSize: '.88rem',
        padding: '9px 0',
        color: 'var(--accent)',
        borderColor: 'var(--accent)',
        opacity: 0.85,
      }}
      onClick={openQuickQuiz}
    >
      <span>{t('cards.quickQuiz')}</span>
    </button>
  );
}

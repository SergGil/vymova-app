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
      // .actions-bar .btn/.actions-bar-center .btn's shrink-0 + two
      // breakpoint overrides (docs/full-css-tailwind-migration-roadmap.md
      // Tier 2c) — this button lives inside .actions-bar-center too, see
      // card-shell.tsx's ACTIONS_BAR_BTN_ADD comment for the full reasoning.
      className="btn bg-[var(--btn-bg)] border-[var(--btn-border-color)] text-[var(--btn-color)] [transition:var(--btn-transition)] hover:bg-[var(--btn-hover-bg)] hover:text-[var(--btn-hover-color)] hover:border-[var(--btn-hover-border-fallback)] hover:shadow-[var(--btn-hover-shadow)] font-['DM_Sans',sans-serif] text-[13px] font-medium py-2 px-4 rounded-[10px] border cursor-pointer active:scale-[0.97] [@media(max-width:480px)]:min-h-[44px] [@media(max-width:480px)]:py-[10px] [@media(max-width:480px)]:px-[12px] [@media(max-width:480px)]:text-[12px] [@media(min-width:481px)_and_(max-width:640px)]:min-h-[40px] [@media(min-width:641px)_and_(max-width:900px)]:min-h-[38px] shrink-0 [@media(max-width:480px)]:!min-h-[40px] [@media(max-width:480px)]:!text-[11px] [@media(max-width:480px)_and_(min-height:501px)]:!py-[8px] [@media(max-width:480px)_and_(min-height:501px)]:!px-[10px] [@media(max-height:500px)_and_(max-width:900px)]:!py-[7px] [@media(max-height:500px)_and_(max-width:900px)]:!px-[10px]"
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

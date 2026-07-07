// Vymova — js/features/mode-final-screen.tsx
// Shared "session complete" screen: score emoji + title + tally + retry/close
// buttons. Was hand-copied into 11+ per-mode files with only the low-score
// title key (and, in write.tsx, an extra "retry mistakes" button) differing.
import type { ReactElement, ReactNode } from 'react';
import { t } from './i18n.ts';

export function scoreEmoji(pct: number): string {
  return pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪';
}

export function scoreTitle(pct: number, keepGoingKey: string): string {
  return pct === 100
    ? t('quiz.perfectTitle')
    : pct >= 80
      ? t('quiz.greatTitle')
      : pct >= 60
        ? t('quiz.goodTitle')
        : t(keepGoingKey);
}

export function ModeFinalScreen({
  ok,
  total,
  keepGoingKey,
  onRetry,
  onClose,
  extra,
}: {
  ok: number;
  total: number;
  keepGoingKey: string;
  onRetry: () => void;
  onClose: () => void;
  extra?: ReactNode;
}): ReactElement {
  const pct = total ? Math.round((ok / total) * 100) : 0;
  return (
    <div style={{ textAlign: 'center', padding: '10px 0 4px' }}>
      <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>{scoreEmoji(pct)}</div>
      <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
        {scoreTitle(pct, keepGoingKey)}
      </div>
      <div style={{ fontSize: '.9rem', color: 'var(--text2)', marginBottom: 18 }}>
        {ok} {t('common.of')} {total} ({pct}%)
      </div>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={onRetry}
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: '.88rem',
            fontWeight: 600,
            padding: '10px 22px',
            borderRadius: 10,
            border: '1.5px solid var(--accent)',
            background: 'none',
            color: 'var(--accent)',
            cursor: 'pointer',
          }}
          data-i18n="common.tryAgain"
        >
          🔄 {t('common.tryAgain').replace(/^🔄\s*/, '')}
        </button>
        {extra}
        <button
          onClick={onClose}
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: '.88rem',
            padding: '10px 22px',
            borderRadius: 10,
            border: '1.5px solid var(--border)',
            background: 'none',
            color: 'var(--text2)',
            cursor: 'pointer',
          }}
          data-i18n="common.close"
        >
          {t('common.close')}
        </button>
      </div>
    </div>
  );
}

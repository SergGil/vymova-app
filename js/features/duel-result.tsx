// Vymova — js/features/duel-result.tsx
// Result-екран дуелі (Фаза 9/2). Чисте відображення `_getResultData()`;
// `_showFinish()` у duel.ts записує `state.duelResult` замість innerHTML.
import type { ReactElement } from 'react';
import { t } from './i18n.ts';
import {
  _getResultData,
  _onResultRematch,
  _onResultNewDuel,
  _onResultReaction,
  REACTIONS,
} from './duel.ts';
import { useDuelResult } from '../../src/duel-async-store.ts';

const btnRowStyle = {
  display: 'flex',
  gap: 8,
  justifyContent: 'center',
  marginTop: 16,
  flexWrap: 'wrap' as const,
};
const rematchBtnStyle = {
  padding: '12px 24px',
  borderRadius: 12,
  border: '1.5px solid var(--accent)',
  background: 'none',
  color: 'var(--accent)',
  fontWeight: 700,
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '.88rem',
};
const againBtnStyle = {
  padding: '12px 24px',
  borderRadius: 12,
  border: 'none',
  background: 'var(--accent)',
  color: '#fff',
  fontWeight: 700,
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '.88rem',
};

const OUTCOME_EMOJI: Record<string, string> = { win: '🏆', tie: '🤝', loss: '😔' };

export function DuelResult(): ReactElement | null {
  useDuelResult();
  const d = _getResultData();
  if (!d) return null;

  if (d.kind === 'round') {
    const seriesLabel =
      d.outcome === 'win'
        ? t('duel.series.win')
        : d.outcome === 'tie'
          ? t('duel.series.tie')
          : t('duel.series.loss');
    return (
      <>
        <div style={{ fontSize: '2rem', marginBottom: 6 }}>{OUTCOME_EMOJI[d.outcome]}</div>
        <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)' }}>
          {t('duel.round.n')} {d.round}: {seriesLabel}
        </div>
        <div style={{ fontSize: '.85rem', color: 'var(--text2)', margin: '8px 0' }}>
          {t('duel.series.label')} {d.myName} {d.myWins} — {d.oppWins} {d.oppName}
        </div>
        <div style={btnRowStyle}>
          <button style={rematchBtnStyle} onClick={_onResultRematch}>
            {t('duel.nextRound')}
          </button>
        </div>
      </>
    );
  }

  const myColor = d.outcome !== 'loss' ? 'var(--success)' : 'var(--danger)';
  const oppColor = d.outcome === 'loss' ? 'var(--success)' : 'var(--danger)';
  const resultLabel =
    d.outcome === 'win'
      ? t('duel.result.won')
      : d.outcome === 'tie'
        ? t('duel.result.tie')
        : t('duel.result.lost', { name: d.oppName });

  return (
    <>
      <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginBottom: 6 }}>
        {d.modeIcon} {d.modeLabel}
        {d.catLabel}
      </div>
      <div style={{ fontSize: '3rem', marginBottom: 8 }}>{OUTCOME_EMOJI[d.outcome]}</div>
      <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
        {resultLabel}
      </div>
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', margin: '14px 0' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem' }}>{d.myAvatar}</div>
          <div style={{ fontWeight: 700, fontSize: '1.2rem', color: myColor }}>
            {d.myScore}/{d.roomSize}
          </div>
          <div style={{ fontSize: '.72rem', color: 'var(--text3)' }}>{t('duel.you')}</div>
        </div>
        <div style={{ fontSize: '1.5rem', alignSelf: 'center', color: 'var(--text3)' }}>VS</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem' }}>{d.oppAvatar}</div>
          <div style={{ fontWeight: 700, fontSize: '1.2rem', color: oppColor }}>
            {d.oppScore}/{d.roomSize}
          </div>
          <div style={{ fontSize: '.72rem', color: 'var(--text3)' }}>{d.oppName}</div>
        </div>
      </div>

      <div style={{ fontSize: '.75rem', color: 'var(--text3)', margin: '10px 0 0' }}>
        {d.historyText}
      </div>

      <div style={btnRowStyle}>
        <button style={rematchBtnStyle} onClick={_onResultRematch}>
          {t('duel.rematch')}
        </button>
        <button style={againBtnStyle} onClick={_onResultNewDuel}>
          {t('duel.newDuel')}
        </button>
      </div>

      <div style={{ marginTop: 14 }}>
        <div style={{ fontSize: '.7rem', color: 'var(--text3)', marginBottom: 6 }}>
          {t('duel.sendReaction')}
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
          {REACTIONS.map((e) => (
            <button
              key={e}
              style={{
                fontSize: '1.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 4,
              }}
              onClick={() => _onResultReaction(e)}
            >
              {e}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

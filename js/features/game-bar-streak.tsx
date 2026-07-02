// Vymova — js/features/game-bar-streak.tsx
// "Block 1" (стрік + щити + combo) і "Block 2" (ціль дня) ігрового бару.
// Re-rendered on demand via refreshGameBarStreak/refreshComboBox/refreshGameBarGoal,
// called from render-game-bar.ts / combo.ts after game data changes.
import type { ReactElement } from 'react';
import { getGameData } from './game.ts';
import { _getSessionCombo, getComboMult } from './combo.ts';
import { t } from './i18n.ts';
import { notifyStateChange, useStateVersion } from '../../src/store.ts';

export function GameBarStreak(): ReactElement {
  useStateVersion();
  const d = getGameData();
  const n = d.shields ?? 0;
  const shLabel = t(n > 1 ? 'gamebar.shields' : 'gamebar.shield');
  return (
    <>
      <div className="gb-streak-num">
        🔥 <span id="streak-num">{d.streak || 0}</span>
      </div>
      <div className="gb-streak-label">{t('cards.streakLabel')}</div>
      <div
        id="shields-row"
        className="gb-shields-row"
        title={n > 0 ? `${n} ${shLabel}: ${t('gamebar.shield.desc')}` : t('gamebar.shield.none')}
      >
        {n > 0 ? '🛡️'.repeat(n) + ' ' + shLabel : ''}
      </div>
    </>
  );
}

export function ComboBox(): ReactElement {
  useStateVersion();
  const combo = _getSessionCombo();
  if (combo < 2) return <div className="combo-box" id="combo-box" style={{ display: 'none' }} />;
  const m = getComboMult();
  return (
    <div className="combo-box" id="combo-box" style={{ display: 'flex', marginTop: 4 }}>
      🔥<span id="combo-num">{combo}</span>
      <span className="combo-x" id="combo-x">
        {m > 1 ? ` ×${m}` : ''}
      </span>
    </div>
  );
}

const RING_R = 22;
const RING_STROKE = 4;
const RING_C = 2 * Math.PI * RING_R;

export function GameBarGoal(): ReactElement {
  useStateVersion();
  const d = getGameData();
  const pct = Math.min((d.goalCur / d.goalMax) * 100, 100);
  const done = d.goalCur >= d.goalMax;
  const offset = RING_C * (1 - pct / 100);
  const ringColor = done ? 'var(--accent2)' : 'var(--success)';
  return (
    <div className="gb-goal-ring-wrap">
      <svg
        width="54"
        height="54"
        className="gb-goal-ring"
        style={{ transform: 'rotate(-90deg)' }}
        aria-hidden="true"
      >
        <circle
          cx="27" cy="27" r={RING_R}
          fill="none"
          stroke="var(--border)"
          strokeWidth={RING_STROKE}
        />
        <circle
          cx="27" cy="27" r={RING_R}
          fill="none"
          stroke={ringColor}
          strokeWidth={RING_STROKE}
          strokeDasharray={RING_C}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.4s ease, stroke 0.3s ease' }}
        />
      </svg>
      <div className="gb-goal-ring-text">
        <span id="goal-cur">{d.goalCur || 0}</span>
        <span className="gb-goal-sep">/</span>
        <span id="goal-max">{d.goalMax}</span>
      </div>
      {done && (
        <div className="goal-done-badge" id="goal-done">{t('cards.goalDone')}</div>
      )}
    </div>
  );
}

export function refreshGameBarStreak(): void {
  notifyStateChange();
}
export function refreshComboBox(): void {
  notifyStateChange();
}
export function refreshGameBarGoal(): void {
  notifyStateChange();
}

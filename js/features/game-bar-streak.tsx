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

export function GameBarGoal(): ReactElement {
  useStateVersion();
  const d = getGameData();
  const pct = Math.min((d.goalCur / d.goalMax) * 100, 100);
  const done = d.goalCur >= d.goalMax;
  return (
    <>
      <div className="gb-goal-big">
        <span id="goal-cur">{d.goalCur || 0}</span>
        <span className="gb-goal-sep">/</span>
        <span id="goal-max">{d.goalMax}</span>
      </div>
      <div className="goal-track" style={{ margin: '5px 0 5px' }}>
        <div
          className={'goal-fill' + (done ? ' done' : '')}
          id="goal-fill"
          style={{ width: pct + '%' }}
        />
      </div>
      <div className="gb-goal-footer">
        <span
          className="goal-done-badge"
          id="goal-done"
          style={{ display: done ? 'inline' : 'none' }}
        >
          {t('cards.goalDone')}
        </span>
      </div>
    </>
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

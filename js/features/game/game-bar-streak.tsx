// Vymova — js/features/game/game-bar-streak.tsx
// "Block 1" (стрік + щити + combo) і "Block 2" (ціль дня) ігрового бару.
// Re-rendered on demand via refreshGameBarStreak/refreshGameBarGoal,
// called from render-game-bar.ts after game data changes.
import type { ReactElement } from 'react';
import { getGameData } from './game.ts';
import { _getSessionCombo, getComboMult } from './combo.ts';
import { t } from '../i18n.ts';
import { notifyGameBarChange, useGameBarVersion, useLangVersion } from '../../../src/store.ts';

export function GameBarStreak(): ReactElement {
  useGameBarVersion();
  useLangVersion();
  const d = getGameData();
  const n = d.shields ?? 0;
  const shLabel = t(n > 1 ? 'gamebar.shields' : 'gamebar.shield');
  return (
    <>
      <div className="gb-streak-num text-[var(--gb-streak-num-color)] [text-shadow:var(--gb-streak-num-shadow)] text-[1.2rem] font-extrabold leading-none [@media(max-width:480px)_and_(min-height:501px)]:!text-[1.5rem] [@media(min-width:481px)_and_(max-width:640px)_and_(min-height:501px)]:!text-[1.6rem]">
        🔥 <span id="streak-num">{d.streak || 0}</span>
      </div>
      <div id="streak-label" className="text-[0.65rem] text-[var(--text3)] mt-0.5 whitespace-nowrap">
        {t('cards.streakLabel')}
      </div>
      <div
        id="shields-row"
        className="text-[0.7rem] text-[var(--text3)] [&:not(:empty)]:mt-0.5 [&:not(:empty)]:min-h-[14px]"
        title={n > 0 ? `${n} ${shLabel}: ${t('gamebar.shield.desc')}` : t('gamebar.shield.none')}
      >
        {n > 0 ? '🛡️'.repeat(n) + ' ' + shLabel : ''}
      </div>
    </>
  );
}

export function ComboBox(): ReactElement {
  useGameBarVersion();
  const combo = _getSessionCombo();
  if (combo < 2)
    return (
      <div
        className="items-center gap-[3px] text-[0.88rem] font-extrabold text-[#e67e22] whitespace-nowrap"
        id="combo-box"
        style={{ display: 'none' }}
      />
    );
  const m = getComboMult();
  return (
    <div
      className="items-center gap-[3px] text-[0.88rem] font-extrabold text-[#e67e22] whitespace-nowrap"
      id="combo-box"
      style={{ display: 'flex', marginTop: 4 }}
    >
      🔥<span id="combo-num">{combo}</span>
      <span className="text-[#e74c3c] text-[0.78rem]" id="combo-x">
        {m > 1 ? ` ×${m}` : ''}
      </span>
    </div>
  );
}

const RING_R = 22;
const RING_STROKE = 4;
const RING_C = 2 * Math.PI * RING_R;

export function GameBarGoal(): ReactElement {
  useGameBarVersion();
  useLangVersion();
  const d = getGameData();
  const pct = Math.min((d.goalCur / d.goalMax) * 100, 100);
  const done = d.goalCur >= d.goalMax;
  const offset = RING_C * (1 - pct / 100);
  const ringColor = done ? 'var(--accent2)' : 'var(--success)';
  return (
    <div className="relative flex flex-col items-center gap-0.5">
      <svg
        width="54"
        height="54"
        className="block overflow-visible"
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
      <div className="gb-goal-ring-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[0.72rem] font-bold text-[var(--text)] whitespace-nowrap pointer-events-none">
        <span id="goal-cur">{d.goalCur || 0}</span>
        <span className="gb-goal-sep text-[var(--gb-goal-sep-color)]">/</span>
        <span id="goal-max">{d.goalMax}</span>
      </div>
      {done && (
        <div
          className="goal-done-badge text-[var(--goal-done-badge-color)] shadow-[var(--goal-done-badge-shadow)] [background:var(--goal-done-badge-bg)] [border:var(--goal-done-badge-border)]"
          id="goal-done"
        >
          {t('cards.goalDone')}
        </div>
      )}
    </div>
  );
}

export function refreshGameBarStreak(): void {
  notifyGameBarChange();
}
export function refreshGameBarGoal(): void {
  notifyGameBarChange();
}

// Vymova — js/features/daily-mission-card.tsx
// "Місія дня" quick-access widget for the Cards page header — launches the
// mission when it's still available today, or shows a live countdown to the
// next local-midnight reset once it's been completed (mirrors the once/24h
// gate in js/modes/daily-challenge.tsx, which is the source of truth for
// `dailyMissionDate`).
import { useEffect, useState, type ReactElement } from 'react';
import { useLangVersion, useGameBarVersion } from '../../src/store.ts';
import { getGameData } from './game/game.ts';
import { today, msUntilNextLocalMidnight } from '../core/today.ts';
import { t } from './i18n.ts';

function formatCountdown(ms: number): string {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return [h, m, s].map((n) => String(n).padStart(2, '0')).join(':');
}

// The mode grid's own button already has the open logic wired to it
// (js/modes/daily-challenge.tsx) — reuse it instead of duplicating an open
// path, the same technique js/features/onboarding.tsx uses to launch it.
function openDailyMission(): void {
  document.getElementById('btn-daily-challenge')?.click();
}

export function DailyMissionCard(): ReactElement {
  // t() needs the UI-language channel; dailyMissionDate only ever changes
  // alongside daily-challenge.tsx's refreshGameBarLevel() call, which fires
  // the game-bar channel — narrower than the global bus's per-card/combo/
  // duel-poll churn, which this component has no actual dependency on.
  useLangVersion();
  useGameBarVersion();
  const doneToday = getGameData().dailyMissionDate === today();
  const [countdown, setCountdown] = useState(() => formatCountdown(msUntilNextLocalMidnight()));

  useEffect(() => {
    if (!doneToday) return;
    const tick = (): void => setCountdown(formatCountdown(msUntilNextLocalMidnight()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [doneToday]);

  return (
    <div
      className="wotd-box flex items-center gap-2.5 border rounded-[10px] py-2 px-3.5 mb-2 cursor-pointer transition-[border-color] duration-150 hover:border-[var(--accent)] bg-[var(--wotd-box-bg)] border-[var(--wotd-box-border)] [.actions-bar-mission_&]:mb-0 [.actions-bar-mission_&]:py-[6px] [.actions-bar-mission_&]:px-[10px]"
      title={doneToday ? t('daily.nextIn', { time: countdown }) : t('modesPg.dailyName')}
      onClick={doneToday ? undefined : openDailyMission}
      style={{ cursor: doneToday ? 'default' : 'pointer' }}
    >
      <span className="wotd-lbl text-[0.62rem] font-bold tracking-[0.08em] uppercase text-[var(--text3)] whitespace-nowrap shrink-0">
        ⚡ {t('modesPg.dailyName')}
      </span>
      <span className="text-[0.78rem] text-[var(--text2)] ml-auto">
        {doneToday ? `✅ ${countdown}` : t('modesPg.dailyDesc')}
      </span>
    </div>
  );
}

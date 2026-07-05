// Vymova — js/features/daily-mission-card.tsx
// "Місія дня" quick-access widget for the Cards page header — launches the
// mission when it's still available today, or shows a live countdown to the
// next local-midnight reset once it's been completed (mirrors the once/24h
// gate in js/modes/daily-challenge.tsx, which is the source of truth for
// `dailyMissionDate`).
import { useEffect, useState, type ReactElement } from 'react';
import { useStateVersion } from '../../src/store.ts';
import { getGameData } from './game.ts';
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
  useStateVersion();
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
      className="wotd-box"
      title={doneToday ? t('daily.nextIn', { time: countdown }) : t('modesPg.dailyName')}
      onClick={doneToday ? undefined : openDailyMission}
      style={{ cursor: doneToday ? 'default' : 'pointer' }}
    >
      <span className="wotd-lbl">⚡ {t('modesPg.dailyName')}</span>
      <span className="wotd-tr">
        {doneToday ? `✅ ${countdown}` : t('modesPg.dailyDesc')}
      </span>
    </div>
  );
}

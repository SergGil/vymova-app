// Vymova — js/features/duel-overlay.tsx
// DuelOverlay parent (Фаза 9/7): умовно рендерить екран дуелі за
// `_getDuelScreen()` (lobby/countdown/game/result/tournament/spectate),
// замінюючи всі попередні `*-mount` Portal'и з app-root.tsx одним
// `#duel-overlay-mount`.
import type { ReactElement } from 'react';
import { t } from '../i18n.ts';
import { _getDuelScreen } from './duel.ts';
import { useDuelRoomState } from '../../../src/duel-room-store.ts';
import { DuelLobby } from './duel-lobby.tsx';
import { DuelCountdown } from './duel-countdown.tsx';
import { DuelGameHeader } from './duel-game-header.tsx';
import { DuelTempoTimer } from './duel-tempo-timer.tsx';
import { DuelQuestion } from './duel-question.tsx';
import { DuelFeedback } from './duel-feedback.tsx';
import { DuelPowerups } from './duel-powerups.tsx';
import { DuelChatLog } from './duel-chat-log.tsx';
import { DuelChatPanel } from './duel-chat-panel.tsx';
import { DuelResult } from './duel-result.tsx';
import { DuelSpectatorView } from './duel-spectator.tsx';
import { DuelTournament } from './duel-tournament.tsx';

export function DuelOverlay(): ReactElement {
  useDuelRoomState();
  const screen = _getDuelScreen();

  return (
    <>
      {screen === 'lobby' && <DuelLobby />}

      <DuelSpectatorView />
      <DuelTournament />

      {screen === 'countdown' && (
        <div id="duel-countdown" style={{ textAlign: 'center', padding: '40px 0' }}>
          <DuelCountdown />
        </div>
      )}

      {screen === 'game' && (
        <div id="duel-game">
          <DuelGameHeader />
          <DuelTempoTimer />
          <DuelQuestion />
          <DuelFeedback />
          <DuelPowerups />
        </div>
      )}

      {(screen === 'game' || screen === 'result') && (
        <div
          id="duel-chat-panel"
          className="duel-chat-panel mt-3.5 flex flex-col rounded-[14px] border border-[var(--border)] bg-[var(--card)] px-3 py-2.5 min-[1400px]:fixed min-[1400px]:top-[90px] min-[1400px]:right-7 min-[1400px]:bottom-7 min-[1400px]:z-[601] min-[1400px]:mt-0 min-[1400px]:w-[240px]"
        >
          <div className="duel-chat-title mb-2 text-[.72rem] font-bold tracking-[0.05em] text-[var(--text3)] uppercase">
            💬 {t('duel.chat')}
          </div>
          <DuelChatLog />
          <DuelChatPanel />
        </div>
      )}

      {screen === 'result' && (
        <div id="duel-result" style={{ textAlign: 'center', padding: '10px 0' }}>
          <DuelResult />
        </div>
      )}
    </>
  );
}

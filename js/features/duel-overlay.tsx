// Vymova — js/features/duel-overlay.tsx
// DuelOverlay parent (Фаза 9/7): умовно рендерить екран дуелі за
// `_getDuelScreen()` (lobby/countdown/game/result/tournament/spectate),
// замінюючи всі попередні `*-mount` Portal'и з app-root.tsx одним
// `#duel-overlay-mount`.
import type { ReactElement } from 'react';
import { t } from './i18n.ts';
import { _getDuelScreen } from './duel.ts';
import { useDuelRoomState } from '../../src/duel-room-store.ts';
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
      {screen === 'lobby' && <DuelLobby/>}

      <DuelSpectatorView/>
      <DuelTournament/>

      {screen === 'countdown' && (
        <div id="duel-countdown" style={{ textAlign: 'center', padding: '40px 0' }}>
          <DuelCountdown/>
        </div>
      )}

      {screen === 'game' && (
        <div id="duel-game">
          <DuelGameHeader/>
          <DuelTempoTimer/>
          <DuelQuestion/>
          <DuelFeedback/>
          <DuelPowerups/>
        </div>
      )}

      {(screen === 'game' || screen === 'result') && (
        <div id="duel-chat-panel" className="duel-chat-panel">
          <div className="duel-chat-title">💬 {t('duel.chat')}</div>
          <DuelChatLog/>
          <DuelChatPanel/>
        </div>
      )}

      {screen === 'result' && (
        <div id="duel-result" style={{ textAlign: 'center', padding: '10px 0' }}>
          <DuelResult/>
        </div>
      )}
    </>
  );
}

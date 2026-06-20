// Vymova — js/features/duel-spectator.tsx
// Екран спостерігача за дуеллю (item 33, Фаза 5). Чисте відображення
// знімку кімнати `_getSpecRoom()`; polling/Firebase-логіка лишається в
// duel.ts (_startSpectatorView/_renderSpectatorView), яка викликає
// refreshDuelSpectator() після кожного оновлення.
import type { ReactElement } from 'react';
import { _getSpecRoom, _getDuelScreen, _leaveSpectator, DUEL_MODES, ROOM_SIZE } from './duel.ts';
import { t } from './i18n.ts';
import { notifyStateChange, useStateVersion } from '../../src/store.ts';

function Dots({ idx, color }: { idx:number; color:string }): ReactElement {
  return (
    <>
      {Array.from({ length: ROOM_SIZE }, (_, i) => (
        <span key={i} style={{ width: 8, height: 8, borderRadius: '50%', display: 'inline-block', background: i < idx ? color : 'var(--border)', margin: 1 }} />
      ))}
    </>
  );
}

export function DuelSpectatorView(): ReactElement | null {
  useStateVersion();
  if (_getDuelScreen() !== 'spectate') return null;
  const room = _getSpecRoom();
  if (!room) return null;
  const { p1, p2 } = room;
  const mInfo = DUEL_MODES.find(m => m.id === room.mode) || DUEL_MODES[0];
  const specCount = Object.keys(room.spectators || {}).length;
  return (
    <div style={{ textAlign: 'center', padding: '20px 10px' }}>
      <div style={{ fontSize: '.72rem', color: 'var(--accent)', marginBottom: 6 }}>
        {t('duel.spectate.mode')}{specCount > 0 ? ` · ${specCount} ${t('duel.spectate.viewers')}` : ''}
      </div>
      <div style={{ fontSize: '.82rem', fontWeight: 700, color: 'var(--text)', marginBottom: 16 }}>
        {mInfo.icon} {t('duel.mode.' + room.mode)}
      </div>
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.8rem' }}>{p1.avatar}</div>
          <div style={{ fontWeight: 700, fontSize: '.9rem', color: 'var(--text)' }}>{p1.name}</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent)', margin: '4px 0' }}>{p1.score}</div>
          <div style={{ fontSize: '.7rem', color: 'var(--text3)' }}>{p1.idx}/{ROOM_SIZE}</div>
          <div><Dots idx={p1.idx} color="var(--accent)" /></div>
        </div>
        <div style={{ fontSize: '1.2rem', color: 'var(--text3)' }}>⚔️</div>
        <div style={{ textAlign: 'center' }}>
          {p2 ? (
            <>
              <div style={{ fontSize: '1.8rem' }}>{p2.avatar}</div>
              <div style={{ fontWeight: 700, fontSize: '.9rem', color: 'var(--text)' }}>{p2.name}</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent2)', margin: '4px 0' }}>{p2.score}</div>
              <div style={{ fontSize: '.7rem', color: 'var(--text3)' }}>{p2.idx}/{ROOM_SIZE}</div>
              <div><Dots idx={p2.idx} color="var(--accent2)" /></div>
            </>
          ) : (
            <div style={{ color: 'var(--text3)', fontSize: '.82rem' }}>{t('duel.spectate.waitP2')}</div>
          )}
        </div>
      </div>
      <button
        style={{ marginTop: 20, padding: '8px 18px', borderRadius: 10, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.82rem' }}
        onClick={_leaveSpectator}
      >
        {t('duel.spectate.leave')}
      </button>
    </div>
  );
}

export function refreshDuelSpectator(): void { notifyStateChange(); }

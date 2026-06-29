// Vymova — js/features/duel-game-header.tsx
// Шапка екрану дуелі (item 32, Фаза 5): аватари, рахунок, прогрес-бари,
// бейдж режиму, серія Best-of-3, код кімнати. Re-rendered on demand via
// refreshDuelGameHeader(), яку викликає duel.ts після зміни стану гри
// (polling/state-machine логіка лишається в duel.ts).
import type { ReactElement } from 'react';
import { _getGameHeaderData, DUEL_MODES } from './duel.ts';
import { t } from './i18n.ts';
import { notifyStateChange } from '../../src/store.ts';
import { useDuelRoomState } from '../../src/duel-room-store.ts';

function Dots({ idx, flags, total, color }: { idx:number; flags:(boolean|'skip'|'double')[]; total:number; color:string }): ReactElement {
  const len = Math.max(total, flags?.length ?? 0);
  return (
    <>
      {Array.from({ length: len }, (_, i) => {
        let bg = 'var(--border)';
        if (flags && i < flags.length) {
          const f = flags[i];
          bg = f === 'skip' ? '#7f8c8d' : f === 'double' ? '#f1c40f' : f ? '#27ae60' : '#e74c3c';
        } else if (i < idx) bg = color;
        return <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', display: 'inline-block', background: bg, margin: 1, transition: 'background .3s' }} />;
      })}
    </>
  );
}

export function DuelGameHeader(): ReactElement {
  useDuelRoomState();
  const d = _getGameHeaderData();
  const mInfo = DUEL_MODES.find(m => m.id === d.mode) || DUEL_MODES[0];
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, padding: '10px 14px', background: 'var(--bg)', borderRadius: 12 }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '1rem', marginBottom: 2 }}>{d.myAvatar}</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)' }}>{d.myScore}</div>
        <div style={{ fontSize: '.72rem', color: 'var(--text3)' }}>{t('duel.you')}</div>
        <div style={{ fontSize: '.65rem', color: 'var(--text3)', marginTop: 1 }}>{d.myIdx}/{d.myTotal}</div>
        <div style={{ marginTop: 3 }}><Dots idx={d.myIdx} flags={d.myFlags} total={d.myTotal} color="var(--accent)" /></div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '.72rem', fontWeight: 700, color: 'var(--accent)', marginBottom: 2 }}>{mInfo.icon} {t('duel.mode.' + d.mode)}</div>
        {d.bestOf !== 1 && (
          <div style={{ display: 'flex', fontSize: '.65rem', color: 'var(--text3)', gap: 4, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 700, color: 'var(--accent)' }}>{d.seriesMe}</span>
            <span>:</span>
            <span style={{ fontWeight: 700, color: 'var(--accent2)' }}>{d.seriesOpp}</span>
          </div>
        )}
        <div style={{ fontSize: '.8rem', color: 'var(--text3)' }}>{d.progressText}</div>
        {d.roomCode && (
          <div style={{ fontSize: '.62rem', color: 'var(--text3)', marginTop: 2 }}>
            🔑 <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--accent)', letterSpacing: '.1em' }}>{d.roomCode}</span>
          </div>
        )}
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '1rem', marginBottom: 2 }}>{d.oppAvatar}</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent2)' }}>{d.oppScore}</div>
        <div style={{ fontSize: '.72rem', color: 'var(--text3)' }}>{d.oppName}</div>
        <div style={{ fontSize: '.65rem', color: 'var(--text3)', marginTop: 1 }}>{d.oppIdx}/{d.oppTotal}</div>
        <div style={{ marginTop: 3 }}><Dots idx={d.oppIdx} flags={d.oppFlags} total={d.oppTotal} color="var(--accent2)" /></div>
      </div>
    </div>
  );
}

export function refreshDuelGameHeader(): void { notifyStateChange(); }

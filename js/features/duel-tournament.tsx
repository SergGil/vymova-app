// Vymova — js/features/duel-tournament.tsx
// Турнірна сітка (item 33, Фаза 5). Чисте відображення
// `_getTournamentData()`; duel.ts викликає refreshDuelTournament()
// при кожній зміні (полінг кімнати очікування / турнірного браунзера).
import type { ReactElement } from 'react';
import { t } from './i18n.ts';
import {
  _getTournamentData,
  _getDuelScreen,
  _onTournStart,
  _onTournCancel,
  _onTournPlay,
  _onTournRejoin,
  type TournRoundVM,
} from './duel.ts';
import { notifyStateChange } from '../../src/store.ts';
import { useDuelTournView } from '../../src/duel-async-store.ts';
import { useDuelRoomState } from '../../src/duel-room-store.ts';

function TournWaiting(): ReactElement | null {
  const d = _getTournamentData();
  if (!d || d.phase !== 'waiting') return null;
  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: 14 }}>
        <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginBottom: 6 }}>
          {t('duel.tournCode')}
        </div>
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: '1.8rem',
            fontWeight: 900,
            color: 'var(--accent)',
            letterSpacing: '.15em',
          }}
        >
          {d.code}
        </div>
        <div style={{ fontSize: '.75rem', color: 'var(--accent)', marginTop: 4 }}>
          {d.modeLabel}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
        {d.slots.map((s, i) => (
          <div
            key={i}
            style={{
              padding: '8px 10px',
              borderRadius: 10,
              border: `1.5px solid ${s.filled ? 'var(--accent)' : 'var(--border)'}`,
              background: s.filled ? 'rgba(0,200,100,.06)' : 'var(--bg)',
              textAlign: 'center',
            }}
          >
            {s.filled ? (
              <>
                <span style={{ fontSize: '1.2rem' }}>{s.avatar}</span>{' '}
                <span style={{ fontSize: '.8rem', fontWeight: 600, color: 'var(--text)' }}>
                  {s.name}
                </span>
              </>
            ) : (
              <span style={{ color: 'var(--text3)', fontSize: '.78rem' }}>{s.label}</span>
            )}
          </div>
        ))}
      </div>
      {d.showStartBtn && (
        <button
          style={{
            width: '100%',
            padding: 12,
            borderRadius: 12,
            border: 'none',
            background: 'var(--accent)',
            color: '#fff',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: '.9rem',
          }}
          onClick={_onTournStart}
        >
          {d.startBtnLabel}
        </button>
      )}
      <button
        style={{
          width: '100%',
          padding: 8,
          borderRadius: 10,
          border: '1.5px solid var(--border)',
          background: 'none',
          color: 'var(--text3)',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: '.78rem',
          marginTop: 6,
        }}
        onClick={_onTournCancel}
      >
        {t('duel.tourn.cancel')}
      </button>
    </>
  );
}

function TournRound({ round }: { round: TournRoundVM }): ReactElement {
  return (
    <div style={{ marginBottom: 10 }}>
      <div
        style={{
          fontSize: '.68rem',
          fontWeight: 700,
          color: 'var(--text3)',
          textTransform: 'uppercase',
          letterSpacing: '.06em',
          marginBottom: 5,
        }}
      >
        {round.name}
      </div>
      {round.matches.map((m, mi) => (
        <div
          key={mi}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 10px',
            borderRadius: 9,
            border: `1.5px solid ${m.active ? 'var(--accent)' : 'var(--border)'}`,
            background: m.active ? 'rgba(0,200,100,.06)' : 'transparent',
            marginBottom: 4,
          }}
        >
          <span
            style={
              m.p1.won ? { fontWeight: 700, color: 'var(--accent)' } : { color: 'var(--text2)' }
            }
          >
            {m.p1.avatar} {m.p1.name}
          </span>
          {m.scoreText ? (
            <span style={{ fontSize: '.75rem', fontWeight: 700, color: 'var(--text3)' }}>
              {m.scoreText}
            </span>
          ) : (
            <span style={{ color: 'var(--text3)', fontSize: '.72rem' }}>vs</span>
          )}
          <span
            style={
              m.p2.won ? { fontWeight: 700, color: 'var(--accent)' } : { color: 'var(--text2)' }
            }
          >
            {m.p2.avatar} {m.p2.name}
          </span>
          {m.active && (
            <span style={{ fontSize: '.65rem', color: 'var(--accent)', marginLeft: 'auto' }}>
              {t('duel.tourn.now')}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function TournBracket(): ReactElement | null {
  const d = _getTournamentData();
  if (!d || d.phase !== 'bracket') return null;
  return (
    <>
      <div
        style={{
          fontSize: '.75rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '.07em',
          color: d.statusColor,
          marginBottom: 10,
        }}
      >
        {d.statusLabel}
      </div>
      <div>
        {d.rounds.map((r, ri) => (
          <TournRound key={ri} round={r} />
        ))}
      </div>
      <div style={{ marginTop: 14 }}>
        {d.matchArea.kind === 'champion' && (
          <div style={{ textAlign: 'center', padding: 16 }}>
            <div style={{ fontSize: '3rem' }}>🏆</div>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#f39c12', marginTop: 8 }}>
              {d.champion} — {t('duel.tourn.champ.excl')}
            </div>
            <button
              style={{
                marginTop: 14,
                padding: '8px 20px',
                borderRadius: 10,
                border: '1.5px solid var(--border)',
                background: 'none',
                color: 'var(--text2)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '.82rem',
              }}
              onClick={_onTournCancel}
            >
              {t('duel.tourn.leave')}
            </button>
          </div>
        )}
        {d.matchArea.kind === 'play' && (
          <button
            style={{
              width: '100%',
              padding: 12,
              borderRadius: 12,
              border: 'none',
              background: 'var(--accent)',
              color: '#fff',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '.9rem',
            }}
            onClick={_onTournPlay}
          >
            {t('duel.tourn.play')}
          </button>
        )}
        {d.matchArea.kind === 'rejoin' && (
          <button
            style={{
              width: '100%',
              padding: 12,
              borderRadius: 12,
              border: 'none',
              background: 'var(--accent)',
              color: '#fff',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '.9rem',
            }}
            onClick={_onTournRejoin}
          >
            {t('duel.tourn.rejoin')}
          </button>
        )}
        {d.matchArea.kind === 'waiting' && (
          <div
            style={{ textAlign: 'center', padding: 12, color: 'var(--text3)', fontSize: '.82rem' }}
          >
            ⏳ {t('duel.tourn.waiting.match')}: {d.matchArea.oppName} vs …<br />
            {t('duel.tourn.turn.later')}
          </div>
        )}
      </div>
    </>
  );
}

export function DuelTournament(): ReactElement | null {
  useDuelTournView();
  useDuelRoomState();
  if (_getDuelScreen() !== 'tournament') return null;
  return (
    <>
      <TournWaiting />
      <TournBracket />
    </>
  );
}

export function refreshDuelTournament(): void {
  notifyStateChange();
}

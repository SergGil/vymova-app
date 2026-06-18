// English Words App — js/features/duel-lobby.tsx
// Лобі дуелі (Фаза 9/6). Обгортка над уже-існуючими React-пікерами
// (leaderboard/rating/history/mode/category/options/resume) плюс
// create/join/cancel/spectate/async/tournament-кнопки.
// Читає _getLobbyUIData(); duel.ts викликає notifyStateChange().
import { useState, type ReactElement } from 'react';
import { t } from './i18n.ts';
import { useStateVersion } from '../../src/store.ts';
import { DuelLeaderboard, DuelRating } from './duel-leaderboard.tsx';
import { DuelHistory } from './duel-history.tsx';
import { DuelModePicker, DuelCategoryPicker, DuelOptionsRow, DuelLangPicker, DuelKnowLangPicker } from './duel-lobby-options.tsx';
import { DuelResume } from './duel-resume.tsx';
import {
  _getLobbyUIData, createRoom, joinRoom, _cancelRoom,
  joinAsSpectator, createAsyncChallenge, joinAsyncChallenge,
  createTournament, joinTournament,
} from './duel.ts';

function _formatJoinCode(raw: string): string {
  let v = raw.replace(/[^A-Z0-9]/gi, '').toUpperCase();
  if (v.length > 3) v = v.slice(0, 3) + '-' + v.slice(3);
  return v.slice(0, 7);
}

export function DuelLobby(): ReactElement {
  useStateVersion();
  const d = _getLobbyUIData();
  const [joinCode, setJoinCode] = useState('');

  return (
    <div id="duel-lobby">
      {/* Leaderboard */}
      <div style={{ fontSize: '.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--text3)', marginBottom: 10 }}>{t('duel.leaderboard')}</div>
      <div id="duel-leaderboard" className="duel-cards" style={{ marginBottom: 20 }}><DuelLeaderboard/></div>

      {/* Live quiz section */}
      <div style={{ fontSize: '.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.07em', color: 'var(--text3)', marginBottom: 10 }}>{t('duel.online')}</div>
      {d.msg.visible && (
        <div id="duel-msg" style={{ fontSize: '.82rem', padding: '8px 12px', borderRadius: 10, background: 'var(--bg)', color: 'var(--text2)', marginBottom: 10 }}>
          {d.msg.challenge
            ? <span style={{ color: 'var(--accent)' }}>📬 {d.msg.challenge.avatar} <b>{d.msg.challenge.name}</b> · {d.msg.challenge.modeIcon} {d.msg.challenge.modeLabel}</span>
            : d.msg.text}
        </div>
      )}

      {/* Resume banner */}
      <div id="duel-resume-mount"><DuelResume/></div>

      {/* W/L Rating */}
      <div id="duel-rating-row" style={{ fontSize: '.75rem', color: 'var(--accent)', marginBottom: 12, textAlign: 'center', fontWeight: 600 }}><DuelRating/></div>

      {/* Language picker */}
      <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginBottom: 6 }}>{t('langpair.know')}:</div>
      <div style={{ marginBottom: 8 }}><DuelKnowLangPicker/></div>
      <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginBottom: 6 }}>{t('duel.lang')}</div>
      <div style={{ marginBottom: 10 }}><DuelLangPicker/></div>

      {/* Mode picker */}
      <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginBottom: 6 }}>{t('duel.mode')}</div>
      <div id="duel-mode-picker" style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}><DuelModePicker/></div>

      {/* Category picker */}
      <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginBottom: 5 }}>{t('duel.category')}</div>
      <div id="duel-cat-picker" style={{ marginBottom: 10 }}><DuelCategoryPicker/></div>

      {/* Difficulty / Best of / Hints */}
      <div id="duel-options-row" style={{ marginBottom: 12 }}><DuelOptionsRow/></div>

      {/* History */}
      <div style={{ fontSize: '.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--text3)', marginBottom: 6 }}>{t('duel.history')}</div>
      <div id="duel-history-list" style={{ marginBottom: 14 }}><DuelHistory/></div>

      {/* Create room */}
      <button
        id="duel-create-btn"
        disabled={d.createBtn.disabled}
        onClick={() => createRoom()}
        style={{ width: '100%', padding: 13, borderRadius: 12, border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.95rem', marginBottom: 12 }}
      >
        {d.createBtn.disabled ? t('duel.creating') : t('duel.create')}
      </button>

      {/* Waiting for opponent */}
      {d.waiting.visible && (
        <div id="duel-waiting" style={{ textAlign: 'center', padding: 16, background: 'var(--bg)', borderRadius: 14, marginBottom: 12 }}>
          <div style={{ fontSize: '.82rem', color: 'var(--text3)', marginBottom: 8 }}>{t('duel.shareCode')}</div>
          <div id="duel-room-code" style={{ fontFamily: 'monospace', fontSize: '1.8rem', fontWeight: 900, color: 'var(--accent)', letterSpacing: '.15em', marginBottom: 6 }}>{d.waiting.roomCode}</div>
          <div style={{ fontSize: '.78rem', color: 'var(--accent)', marginBottom: 10 }}>{d.waiting.modeLabel}</div>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginBottom: 12 }}>{t('duel.waitingOpp')}</div>
          <button
            id="duel-cancel-btn"
            onClick={() => _cancelRoom()}
            style={{ padding: '7px 18px', borderRadius: 10, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.82rem' }}
          >
            {t('duel.cancel')}
          </button>
        </div>
      )}

      {/* Join room */}
      {d.joinRowVisible && (
        <div>
          <div style={{ fontSize: '.78rem', color: 'var(--text3)', marginBottom: 8, textAlign: 'center' }}>{t('duel.orEnterCode')}</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              id="duel-join-input"
              type="text"
              placeholder="ABC-123"
              maxLength={7}
              value={joinCode}
              onChange={e => setJoinCode(_formatJoinCode(e.target.value))}
              onKeyDown={e => { if (e.key === 'Enter') joinRoom(joinCode); }}
              style={{ flex: 1, padding: '10px 14px', border: '1.5px solid var(--border)', borderRadius: 10, fontFamily: 'monospace', fontSize: '1rem', background: 'var(--bg)', color: 'var(--text)', outline: 'none', textTransform: 'uppercase', textAlign: 'center', letterSpacing: '.1em' }}
            />
            <button
              id="duel-join-btn"
              disabled={d.joinBtn.disabled}
              onClick={() => joinRoom(joinCode)}
              style={{ padding: '10px 18px', borderRadius: 10, border: 'none', background: 'var(--accent)', color: '#fff', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}
            >
              {t('duel.join')}
            </button>
          </div>
          <div style={{ fontSize: '.72rem', color: 'var(--text3)', marginTop: 6, textAlign: 'center' }}>{t('duel.modeNote')}</div>
          {/* Secondary actions: Spectate + Reply to challenge */}
          <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
            <button
              onClick={() => joinAsSpectator()}
              style={{ flex: 1, padding: '7px 4px', borderRadius: 9, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text3)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.72rem', whiteSpace: 'nowrap' }}
            >
              {t('duel.spectate')}
            </button>
            <button
              onClick={() => joinAsyncChallenge()}
              style={{ flex: 1, padding: '7px 4px', borderRadius: 9, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text3)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.72rem', whiteSpace: 'nowrap' }}
            >
              {t('duel.reply')}
            </button>
          </div>
        </div>
      )}

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--border)', margin: '10px 0', opacity: .5 }}></div>

      {/* Async challenge */}
      <button
        disabled={d.asyncBtn.disabled}
        onClick={() => createAsyncChallenge()}
        style={{ width: '100%', padding: 9, borderRadius: 11, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.82rem', marginBottom: 8 }}
      >
        {d.asyncBtn.disabled ? t('duel.creating') : t('duel.sendChallenge')}
      </button>

      {/* Tournament */}
      <div style={{ fontSize: '.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--text3)', marginBottom: 5 }}>{t('duel.tournament')}</div>
      <div style={{ display: 'flex', gap: 6 }}>
        <button
          disabled={d.tournBtn4.disabled}
          onClick={() => createTournament(4)}
          style={{ flex: 1, padding: '9px 6px', borderRadius: 11, border: '1.5px solid #f39c12', background: 'rgba(243,156,18,.08)', color: '#f39c12', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.8rem' }}
        >
          {d.tournBtn4.errorLabel ?? (d.tournBtn4.disabled ? t('duel.creating') : t('duel.tourn4'))}
        </button>
        <button
          disabled={d.tournBtn8.disabled}
          onClick={() => createTournament(8)}
          style={{ flex: 1, padding: '9px 6px', borderRadius: 11, border: '1.5px solid #e74c3c', background: 'rgba(231,76,60,.07)', color: '#e74c3c', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '.8rem' }}
        >
          {d.tournBtn8.errorLabel ?? (d.tournBtn8.disabled ? t('duel.creating') : t('duel.tourn8'))}
        </button>
        <button
          onClick={() => joinTournament()}
          style={{ flex: 1, padding: '9px 6px', borderRadius: 11, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.8rem' }}
        >
          {t('duel.tournJoin')}
        </button>
      </div>
    </div>
  );
}

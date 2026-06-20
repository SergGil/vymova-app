// Vymova — js/features/duel-leaderboard.tsx
// Лідерборд профілів (#duel-leaderboard) і рядок W/L рейтингу (#duel-rating-row)
// у лобі дуелі. Частина item 31 (Фаза 5).
import { useStateVersion } from '../../src/store.ts';
import { t, pluralLabel } from './i18n.ts';
import {
  _getProfiles, _getActiveId, _currentSnap, _readSnap,
  _parseKnown, _parseGame, _weekWords, _getRating,
} from './duel.ts';
import { CharacterAvatar } from './character-avatar.tsx';
import { appearanceOf } from '../core/storage.ts';
import type { CharacterAppearance } from '../../src/types.js';

interface ProfileStat {
  name: string; appearance: CharacterAppearance; known: number; streak: number;
  weekWords: number; xp: number; isActive: boolean;
}

function _computeStats(): ProfileStat[] {
  const profiles = _getProfiles();
  const aid = _getActiveId();
  return profiles
    .map((p: Record<string, unknown>): ProfileStat => {
      const snap = p.id === aid ? _currentSnap() : _readSnap(p.id as string);
      const known = _parseKnown(snap), game = _parseGame(snap);
      return {
        name: p.name as string, appearance: appearanceOf(p as { id: string; appearance?: Partial<CharacterAppearance> }),
        known: known.length, streak: game.streak || 0,
        weekWords: _weekWords(snap), xp: (game.xp || 0) + known.length * 5,
        isActive: p.id === aid,
      };
    })
    .sort((a: ProfileStat, b: ProfileStat) => b.xp - a.xp || b.known - a.known);
}

export function DuelLeaderboard() {
  useStateVersion();
  const stats = _computeStats();
  if (!stats.length) {
    return <div style={{ textAlign: 'center', color: 'var(--text3)', padding: 12 }}>{t('duel.noProfiles')}</div>;
  }
  return <>{stats.map((s, i) => {
    const rank = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`;
    return (
      <div className={'duel-card' + (s.isActive ? ' duel-card-active' : '')} key={s.name + i}>
        <div className="duel-card-header">
          <span className="duel-rank">{rank}</span>
          <span className="duel-av"><CharacterAvatar appearance={s.appearance} size={24} variant="head" animated={false} /></span>
          <span className="duel-name">{s.name}{s.isActive ? ` (${t('duel.you')})` : ''}</span>
        </div>
        <div className="duel-stats">
          <div className="duel-stat"><div className="duel-sv">{s.known}</div><div className="duel-sl">{t('duel.stats.words')}</div></div>
          <div className="duel-stat"><div className="duel-sv">{s.xp}</div><div className="duel-sl">XP</div></div>
          <div className="duel-stat"><div className="duel-sv">🔥{s.streak}</div><div className="duel-sl">{t('duel.stats.streak')}</div></div>
          <div className="duel-stat"><div className="duel-sv">{s.weekWords}</div><div className="duel-sl">{t('duel.stats.week')}</div></div>
        </div>
      </div>
    );
  })}</>;
}

export function DuelRating() {
  useStateVersion();
  const r = _getRating();
  return <>{'🏆 ' + r.wins + ' ' + pluralLabel('duel_win', r.wins) +
    ' · 💀 ' + r.losses + ' ' + pluralLabel('duel_loss', r.losses) +
    ' · 🤝 ' + r.ties + ' ' + pluralLabel('duel_tie', r.ties)}</>;
}

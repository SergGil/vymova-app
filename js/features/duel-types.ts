// Vymova — js/features/duel-types.ts
// Pure type/interface declarations (plus two tiny constants — see CHARS/
// ROOM_SIZE below) shared between duel.ts, duel-deck.ts, duel-spectator.tsx,
// duel-tournament-logic.ts, and src/duel-async-store.ts. Extracted so this
// file has zero runtime imports back into any of them.
//
// Two separate real "Circular chunk: duel -> duel-async-store -> duel"
// causes were found and fixed here:
// 1. src/duel-async-store.ts had `import type { ... } from './duel.ts'` —
//    fully erased at compile time (no real runtime edge) but Rollup's
//    chunk-cycle detector still reacted to the import statement itself.
// 2. duel-spectator.tsx (which Rollup's automatic shared-chunk extraction
//    groups into the same output chunk as duel-async-store.ts, since both
//    are reachable from more than one dynamic-import entry point) imported
//    the real runtime constants CHARS/ROOM_SIZE from duel.ts — a genuine
//    value-level edge back into the "duel" chunk, closing the cycle from
//    the other side. duel-deck.ts had the same import for the same reason.
// Moving both the types AND these two constants into this dependency-free
// leaf module removes every edge that closed the cycle.
import type { CefrLevel } from '../../data/cefr.ts';

export const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
export const ROOM_SIZE = 10;
export const TEMPO_SEC = 4;
export const REACTIONS = ['👍', '😅', '🔥', '😂', '🤯', '😤', '🎉', '👏'];

export type DuelMode = 'quiz' | 'reverse' | 'write' | 'tempo' | 'anagram' | 'letters';
export type Difficulty = CefrLevel | 'mixed'; // CEFR-based difficulty
export type BestOf = 1 | 3;
export type PowerupType = 'double' | 'skip' | 'freeze';

export const POWERUPS: { id: PowerupType; icon: string }[] = [
  { id: 'double', icon: '🎯' },
  { id: 'skip', icon: '⏩' },
  { id: 'freeze', icon: '🧊' },
];

export const DUEL_MODES: { id: DuelMode; icon: string }[] = [
  { id: 'quiz', icon: '🧠' },
  { id: 'reverse', icon: '🔄' },
  { id: 'write', icon: '✍️' },
  { id: 'tempo', icon: '⚡' },
  { id: 'anagram', icon: '🔀' },
  { id: 'letters', icon: '🔤' },
];
// Same single-hue sequential ramp (off var(--accent)) as the Stats page and
// Learning Path CEFR badges, instead of a third copy of the same six
// hardcoded hex colors that ignored all 14 custom themes.
export const DIFFICULTIES: { id: Difficulty; label: string; color: string }[] = [
  { id: 'mixed', label: 'Мікс', color: 'var(--text3)' },
  { id: 'A1', label: 'A1', color: 'color-mix(in srgb, var(--accent) 35%, var(--text3))' },
  { id: 'A2', label: 'A2', color: 'color-mix(in srgb, var(--accent) 50%, var(--text3))' },
  { id: 'B1', label: 'B1', color: 'color-mix(in srgb, var(--accent) 65%, var(--text3))' },
  { id: 'B2', label: 'B2', color: 'color-mix(in srgb, var(--accent) 80%, var(--text3))' },
  { id: 'C1', label: 'C1', color: 'color-mix(in srgb, var(--accent) 92%, var(--text3))' },
  { id: 'C2', label: 'C2', color: 'var(--accent)' },
];

export interface PlayerData {
  name: string;
  avatar: string;
  score: number;
  idx: number;
  done: boolean;
  reaction?: string;
  reactionTs?: number;
  hintsLeft: number;
  powerups: Record<PowerupType, number>;
  frozenUntil?: number;
  flags?: (boolean | 'skip' | 'double')[];
}
export interface SeriesData {
  p1wins: number;
  p2wins: number;
  round: number;
}
interface SpectatorData {
  name: string;
  avatar: string;
}
export interface RoomData {
  seed: number;
  mode: DuelMode;
  category: string;
  difficulty: Difficulty;
  bestOf: BestOf;
  maxHints: number;
  powerupsEnabled: boolean;
  lang?: string;
  knowLang?: string;
  p1: PlayerData;
  p2: PlayerData | null;
  started: boolean;
  finished: boolean;
  createdAt: number;
  series: SeriesData;
  spectators?: Record<string, SpectatorData>;
}

export type DuelResultOutcome = 'win' | 'tie' | 'loss';
export type DuelResultData =
  | {
      kind: 'round';
      outcome: DuelResultOutcome;
      round: number;
      myWins: number;
      oppWins: number;
      myName: string;
      oppName: string;
    }
  | {
      kind: 'final';
      outcome: DuelResultOutcome;
      modeIcon: string;
      modeLabel: string;
      catLabel: string;
      myAvatar: string;
      myScore: number;
      oppAvatar: string;
      oppScore: number;
      oppName: string;
      roomSize: number;
      historyText: string;
    }
  | null;

// Знімок даних для duel-resume.tsx (item 33, Фаза 5).
export interface ResumeSessionVM {
  roomId: string;
  modeIcon: string;
  modeLabel: string;
  score: number;
  roomSize: number;
  oppText: string | null;
  expiresAt: number;
}

// Знімок даних для duel-tournament.tsx (item 33, Фаза 5).
export interface TournSlotVM {
  filled: boolean;
  avatar: string;
  name: string;
  label: string;
}
interface TournPlayerVM {
  name: string;
  avatar: string;
  won: boolean;
}
export interface TournMatchVM {
  p1: TournPlayerVM;
  p2: TournPlayerVM;
  done: boolean;
  active: boolean;
  scoreText: string | null;
}
export interface TournRoundVM {
  name: string;
  matches: TournMatchVM[];
}
export type TournMatchArea =
  | { kind: 'none' }
  | { kind: 'champion' }
  | { kind: 'play' }
  | { kind: 'rejoin' }
  | { kind: 'waiting'; oppName: string };
export interface TournamentData {
  phase: 'waiting' | 'bracket';
  code: string;
  modeLabel: string;
  slots: TournSlotVM[];
  joined: number;
  size: number;
  showStartBtn: boolean;
  startBtnLabel: string;
  finished: boolean;
  champion: string;
  statusLabel: string;
  statusColor: string;
  rounds: TournRoundVM[];
  matchArea: TournMatchArea;
}

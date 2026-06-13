/**
 * English Words App — src/types.ts
 * Shared TypeScript interfaces and types.
 */

// ── Word data ─────────────────────────────────────────────────
export type WordEntry = readonly [
  string,         // [0] English word
  string,         // [1] Ukrainian translation
  string,         // [2] English example sentence
  string,         // [3] Ukrainian example sentence
  string?,        // [4] IPA transcription (escaped unicode)
  string?,        // [5] Part of speech code: 'n'|'v'|'adj'|'adv'|'pron'|'prep'|'conj'|'interj'|'det'|'num'|'phrase'|''
];

// ── SRS (Spaced Repetition System) ───────────────────────────
export interface SRSEntry {
  ef:       number;  // Easiness Factor (SM-2), min 1.3
  reps:     number;  // Successful repetitions
  interval: number;  // Days until next review
  due:      string;  // Due date YYYY-MM-DD
  lapses?:  number;  // Total count of "Don't know" presses
}

export type SRSData = Record<string, SRSEntry>;

// ── Game / Gamification ───────────────────────────────────────
export interface GameData {
  streak:         number;
  streakDate:     string | null;
  shields:        number;
  goalMax:        number;
  goalCur:        number;
  goalDate:       string;
  goalDays:       number;
  confettiShown:  string | null;
  sessionWords:   number;
  xp:             number;
  maxCombo:       number;
}

// ── Level ─────────────────────────────────────────────────────
export interface Level {
  name:  string;
  min:   number;
  color: string;
  bg:    string;
}

// ── Achievement ───────────────────────────────────────────────
export interface Achievement {
  id:       string;
  icon:     string;
  name:     string;
  cat:      string;
  hint:     string;
  progress: (k: number, g: GameData, m?: ModeStats, c?: number) => { cur: number; max: number };
  check:    (k: number, g: GameData, m?: ModeStats, c?: number) => boolean;
}

// ── Mode stats ────────────────────────────────────────────────
export interface ModeStats {
  quiz?:    number;
  tempo?:   number;
  pairs?:   number;
  write?:   number;
  listen?:  number;
  lesson?:  number;
  daily?:   number;
  fib?:     number;
  [key: string]: number | undefined;
}

export interface ModeAccEntry { ok: number; err: number; }
export type ModeAccuracy = Record<string, ModeAccEntry | undefined>;

// ── Profile ───────────────────────────────────────────────────
export interface Profile {
  id:     string;
  name:   string;
  avatar: string;
}

// ── App State ─────────────────────────────────────────────────
export interface AppState {
  known:          Set<string>;
  srsData:        SRSData;
  deck:           WordEntry[];
  idx:            number;
  flipped:        boolean;
  cw:             WordEntry | null;
  _baseWords:     WordEntry[];
  _activeTagSet:  Set<string> | null;
  autoTimer:      ReturnType<typeof setInterval> | null;
  _gameCache:     GameData | null;
  _dailyCache:    Record<string, unknown> | null;
  _srsStatsDirty: boolean;
  TODAY:          string;
  _mode:          string; // resolved card mode for current render (item 28b — avoids
                           // re-resolving 'mix' randomly per React component)
  activePage:     string | null; // currently open sidebar page ('stats'/'ach'/'duel'/…),
                                  // mirrors sidebar.ts's openPage/closePage (item 36 Phase 7.2)
  knownEs:        Set<string>;
  knownFr:        Set<string>;
  _wordIdx:       Map<string, number>;
  _customWords:   Array<{ en: string; ua: string; ex_en?: string; ex_ua?: string }>;
  duelSel:        DuelSelState;
  duelResumeSessions: import('../js/features/duel.ts').ResumeSessionVM[];
  duelChatHistory: { text: string; isMe: boolean }[];
}

// Дуель: вибір режиму/категорії/складності в лобі (item 36, Фаза 7.4-B,
// під-фаза 1) — джерело правди для геттерів/сеттерів `duel.ts`.
export interface DuelSelState {
  mode:            import('../js/features/duel.ts').DuelMode;
  category:        string;
  difficulty:      import('../js/features/duel.ts').Difficulty;
  bestOf:          import('../js/features/duel.ts').BestOf;
  maxHints:        number;
  powerupsEnabled: boolean;
}

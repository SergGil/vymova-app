/**
 * Vymova — src/types.ts
 * Shared TypeScript interfaces and types.
 */

// ── Language codes ────────────────────────────────────────────
// Moved from js/features/mode-utils.ts (re-exported there for backward
// compatibility) so src/known-words-store.ts can use them without a runtime
// import cycle back into mode-utils.ts.
export type TargetLang =
  'es' | 'fr' | 'it' | 'pt' | 'de' | 'he' | 'ar' | 'pl' | 'zh' | 'el' | 'ja' | 'tr' | 'nl' | 'vi';
export type Code = TargetLang | 'en' | 'ua';
export const ALL_TARGET_LANGS: TargetLang[] = [
  'es',
  'fr',
  'it',
  'pt',
  'de',
  'he',
  'ar',
  'pl',
  'zh',
  'el',
  'ja',
  'tr',
  'nl',
  'vi',
];

// ── Word data ─────────────────────────────────────────────────
export type WordEntry = readonly [
  string, // [0] English word
  string, // [1] Ukrainian translation
  string, // [2] English example sentence
  string, // [3] Ukrainian example sentence
  string?, // [4] IPA transcription (escaped unicode)
  string?, // [5] Part of speech code: 'n'|'v'|'adj'|'adv'|'pron'|'prep'|'conj'|'interj'|'det'|'num'|'phrase'|''
];

// ── SRS (Spaced Repetition System) ───────────────────────────
export interface SRSEntry {
  ef: number; // Easiness Factor (SM-2), min 1.3
  reps: number; // Successful repetitions
  interval: number; // Days until next review
  due: string; // Due date YYYY-MM-DD
  lapses?: number; // Total count of "Don't know" presses
}

export type SRSData = Record<string, SRSEntry>;

// ── Game / Gamification ───────────────────────────────────────
export interface GameData {
  streak: number;
  streakDate: string | null;
  shields: number;
  goalMax: number;
  goalCur: number;
  goalDate: string;
  goalDays: number;
  confettiShown: string | null;
  sessionWords: number;
  xp: number;
  maxCombo: number;
  srsNewToday?: number; // new (never-before-seen) SRS cards studied today
  srsNewDate?: string; // date srsNewToday was last reset
  maxStreak?: number;
  mistakesFixed?: number; // lifetime count of clearMistake() calls, for achievements
  goalCounted?: boolean; // whether goalDays was already incremented for the current goalDate
}

// ── Character avatar (profile page) ─────────────────────────────
export interface CharacterAppearance {
  bodyType?: number; // index into BODY_TYPES — optional: absent on profiles saved before this field existed
  skinTone: number; // index into SKIN_TONES
  hairStyle: number; // index into HAIR_STYLES
  hairColor: number; // index into HAIR_COLORS
  eyeColor: number; // index into EYE_COLORS
  outfitStyle: number; // index into OUTFIT_STYLES
  outfitColor: number; // index into OUTFIT_COLORS
}

// ── Level ─────────────────────────────────────────────────────
export interface Level {
  name: string;
  min: number;
  color: string;
  bg: string;
}

// ── Achievement ───────────────────────────────────────────────
export interface Achievement {
  id: string;
  icon: string;
  name: string;
  cat: string;
  hint: string;
  progress: (k: number, g: GameData, m?: ModeStats) => { cur: number; max: number };
  check: (k: number, g: GameData, m?: ModeStats) => boolean;
}

// ── Mode stats ────────────────────────────────────────────────
export interface ModeStats {
  quiz?: number;
  tempo?: number;
  pairs?: number;
  write?: number;
  listen?: number;
  lesson?: number;
  daily?: number;
  fib?: number;
  [key: string]: number | undefined;
}

export interface ModeAccEntry {
  ok: number;
  err: number;
}
export type ModeAccuracy = Record<string, ModeAccEntry | undefined>;

// ── App State ─────────────────────────────────────────────────
// Усі домени мігровано на окремі реактивні стори (SRS/game-caches,
// картка/дека, дуель/мультиплеєр) — AppState більше не тримає полів.
export type AppState = Record<string, never>;

// Лобі-екран дуелі (Фаза 9/6) — стан повідомлення/банера очікування/кнопок,
// що раніше були прямими DOM-маніпуляціями (#duel-msg/#duel-waiting/...).
export interface DuelLobbyUIState {
  msg: {
    visible: boolean;
    text: string;
    challenge: { avatar: string; name: string; modeIcon: string; modeLabel: string } | null;
  };
  waiting: { visible: boolean; roomCode: string; modeLabel: string };
  joinRowVisible: boolean;
  createBtn: { disabled: boolean };
  joinBtn: { disabled: boolean };
  asyncBtn: { disabled: boolean };
  tournBtn4: { disabled: boolean; errorLabel: string | null };
  tournBtn8: { disabled: boolean; errorLabel: string | null };
}

// Дуель: який екран наразі активний (item 36, Фаза 7.4-B, під-фаза 9) —
// дзеркалить виклики `_showLobby`/`_showCountdown`/`_showGame`/
// `_showResult`/`_showTournament`/spectator-view; читається через
// `_getDuelScreen()`.
export type DuelScreen = 'lobby' | 'countdown' | 'game' | 'result' | 'tournament' | 'spectate';

// Дуель: стан кімнати/гри (item 36, Фаза 7.4-B, під-фаза 7) — джерело
// правди для `duel-game-header.tsx`/`duel-question.tsx`/`duel-powerups.tsx`
// та session-persistence (`_saveSession`).
export interface DuelRoomState {
  roomId: string;
  mySlot: 'p1' | 'p2';
  quizDeck: WordEntry[];
  quizIdx: number;
  myScore: number;
  myCorrect: number;
  myWrong: number;
  myFlags: (boolean | 'skip' | 'double')[];
  answered: boolean;
  mode: import('../js/features/duel.ts').DuelMode;
  finished: boolean;
  myDone: boolean;
  hintsLeft: number;
  series: import('../js/features/duel.ts').SeriesData;
  bestOf: import('../js/features/duel.ts').BestOf;
  answerStartMs: number;
  myPowerups: Record<import('../js/features/duel.ts').PowerupType, number>;
  doubleActive: boolean;
  powerupsEnabled: boolean;
  isAsyncChallenge: boolean;
  oppName: string;
  oppAvatar: string;
  oppScore: number;
  oppIdx: number;
  oppFlags: (boolean | 'skip' | 'double')[];
  roomCreatedAt: number;
  roomSeed: number;
  roomCategory: string;
  roomDifficulty: import('../js/features/duel.ts').Difficulty;
  roomMaxHints: number;
  roomLang: string; // "learn" language (target being practiced)
  roomKnowLang: string; // "know" language (the other side of the pair)
}

// Дуель: стан поточного питання/відповіді/фідбеку (item 36, Фаза 7.4-B,
// під-фаза 6) — джерело правди для `duel-question.tsx`/`duel-feedback.tsx`.
export interface DuelQuestionState {
  feedbackHtml: string;
  speedText: string;
  qPrimary: string;
  qSecondary: string;
  qTertiary: string;
  choiceOptions: string[];
  choiceAnswer: string;
  chosenOption: string | null;
  hintNote: string | null;
  writeInputValue: string;
  inputBorderColor: string;
  waitingFinish: boolean;
  showNextBtn: boolean;
}

// Дуель: вибір режиму/категорії/складності в лобі (item 36, Фаза 7.4-B,
// під-фаза 1) — джерело правди для геттерів/сеттерів `duel.ts`.
export interface DuelSelState {
  mode: import('../js/features/duel.ts').DuelMode;
  category: string;
  difficulty: import('../js/features/duel.ts').Difficulty;
  bestOf: import('../js/features/duel.ts').BestOf;
  maxHints: number;
  powerupsEnabled: boolean;
  lang: string; // "learn" language (target being practiced)
  knowLang: string; // "know" language (the other side of the pair)
}

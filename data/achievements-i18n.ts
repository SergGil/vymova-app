// English Words App — data/achievements-i18n.ts
// English translations for achievement names/hints/categories (UA is the source of truth in achievements.ts)

export interface AchTranslation { name: string; hint: string; }

export const ACH_CAT_EN: Record<string, string> = {
  '📖 Слова':     '📖 Words',
  '📅 Серія':     '📅 Streak',
  '🎯 Цілі':      '🎯 Goals',
  '⚡ Швидкість': '⚡ Speed',
  '🎮 Режими':    '🎮 Modes',
  '🔥 Комбо':     '🔥 Combo',
  '🌟 Рівні':     '🌟 Levels',
  '✍️ Власні':    '✍️ Custom',
};

export const ACH_EN: Record<string, AchTranslation> = {
  // ── Words ──
  first1:    { name: 'First Step',    hint: 'Tap ✓ Know on your very first word — the journey begins!' },
  words10:   { name: '10 Words',      hint: 'Mark 10 different words as "Know"' },
  words50:   { name: '50 Words',      hint: 'Learn 50 words — you’re a Padawan now! About 1% of the dictionary.' },
  words100:  { name: '100 Words',     hint: '100 words — you can already read simple texts!' },
  words250:  { name: '250 Words',     hint: '250 words cover 65% of everyday speech. The Force is with you!' },
  words500:  { name: '500 Words',     hint: '500 words — the level of a confident Jedi Knight!' },
  words1000: { name: '1,000 Words',   hint: '1000 words = A2/B1. You understand movies with subtitles!' },
  words2000: { name: '2,000 Words',   hint: '2000 words — you speak fluently. Worthy of the Council!' },
  words3000: { name: '3,000 Words',   hint: '3000 words — C1 level, almost a Sith Lord of vocabulary!' },
  words4000: { name: '4,000 Words',   hint: '4000 words — you are the Chosen One. You read without a dictionary!' },
  words5542: { name: 'Master Yoda',   hint: 'All 5598 words learned. Do or do not — there is no try!' },

  // ── Streak ──
  streak3:   { name: '3 Days in a Row',  hint: 'Practice 3 days in a row — a habit begins!' },
  streak7:   { name: 'Jedi Week',         hint: '7 days in a row — a true Jedi never gives up!' },
  streak14:  { name: 'Two Weeks',         hint: '14 days — you train like in the Jedi Temple now!' },
  streak30:  { name: 'Month of the Force',hint: '30 days — you did it. The Jedi Council applauds!' },
  streak100: { name: '100 Days',          hint: '100 days in a row. The Force has become part of you.' },

  // ── Goals ──
  goal1:  { name: 'First Goal',     hint: 'Complete your daily goal — learn the set number of words in a day' },
  goal7:  { name: 'Week of Goals',  hint: 'Complete the daily goal 7 times (not necessarily in a row)' },
  goal30: { name: '30 Goals',       hint: '30 completed daily goals. Jedi discipline!' },

  // ── Speed ──
  speed20:  { name: 'Sprint',           hint: 'Learn 20 words in a single session' },
  speed50:  { name: 'Hyperjump',         hint: '50 words in one session — like a hyperjump!' },
  speed100: { name: 'Millennium Falcon', hint: '100 words in one session. 12 parsecs!' },

  // ── Modes ──
  mode_quiz1:     { name: 'First Quiz',         hint: 'Complete your first 4-option Quiz' },
  mode_quiz10:    { name: 'Quiz ×10',           hint: '10 completed quizzes — a true expert!' },
  mode_quiz50:    { name: 'Quiz ×50',           hint: '50 quizzes. Mind sharp as a Jedi blade!' },
  mode_tempo1:    { name: 'First Tempo',        hint: 'Finish your first timed game' },
  mode_tempo10:   { name: 'Tempo ×10',          hint: '10 timed games. Speed is your weapon!' },
  mode_pairs1:    { name: 'First Pairs',        hint: 'Finish your first Pairs round' },
  mode_write1:    { name: 'First Writing',      hint: 'Type your first word by hand. A Padawan’s penmanship!' },
  mode_write20:   { name: 'Writing ×20',        hint: '20 writing sessions. Your hand remembers!' },
  mode_listen1:   { name: 'First Listening',    hint: 'Finish your first Listen mode round' },
  mode_lesson1:   { name: 'First Lesson',       hint: 'Complete your first 5×3 lesson' },
  mode_fib1:      { name: 'First Fill-in',      hint: 'Finish your first Fill-in-the-Blank round' },
  mode_story1:    { name: 'First Reading+',     hint: 'Finish your first story in Reading+ mode' },
  mode_daily1:    { name: 'First Daily Mission',hint: 'Complete your first daily mission — 10 words against the clock!' },
  mode_spelling1: { name: 'First Spelling Bee', hint: 'Finish your first Spelling Bee round — hear it and spell it' },

  // ── Combo ──
  combo5:  { name: 'Streak ×5',       hint: 'Answer correctly 5 times in a row without mistakes' },
  combo10: { name: 'Streak ×10',      hint: '10 correct answers in a row — Jedi reflexes!' },
  combo25: { name: 'Jedi Flow',       hint: '25 in a row. The Force guides you through every word' },

  // ── Levels ──
  lvl2: { name: 'Force-Sensitive', hint: 'Reach level 2 — Force-Sensitive (30 words)' },
  lvl3: { name: 'Padawan',         hint: 'Reach the Padawan level (100 words)' },
  lvl4: { name: 'Jedi Knight',     hint: 'Reach the Jedi Knight level (250 words)' },
  lvl5: { name: 'Jedi Master',     hint: 'Reach the Jedi Master level (500 words)' },
  lvl6: { name: 'Council Member',  hint: 'Reach the Council Member level (900 words)' },
  lvl7: { name: 'Sith Lord',       hint: 'Reach the Sith Lord level (1500 words)' },
  lvl8: { name: 'The Chosen One',  hint: 'Reach The Chosen One level (2500 words)' },
  lvl9: { name: 'Force Balancer',  hint: 'Reach the Force Balancer level (4000 words)' },

  // ── Custom ──
  custom1:  { name: 'Your Own Word',   hint: 'Add your first custom word to the trainer' },
  custom10: { name: '10 Custom Words', hint: '10 custom words. Your personal dictionary!' },
};

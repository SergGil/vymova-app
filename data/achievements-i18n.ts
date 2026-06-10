// English Words App — data/achievements-i18n.ts
// English/Spanish translations for achievement names/hints/categories (UA is the source of truth in achievements.ts)

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

export const ACH_CAT_ES: Record<string, string> = {
  '📖 Слова':     '📖 Palabras',
  '📅 Серія':     '📅 Racha',
  '🎯 Цілі':      '🎯 Metas',
  '⚡ Швидкість': '⚡ Velocidad',
  '🎮 Режими':    '🎮 Modos',
  '🔥 Комбо':     '🔥 Combo',
  '🌟 Рівні':     '🌟 Niveles',
  '✍️ Власні':    '✍️ Propias',
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
  words5542: { name: 'Master Yoda',   hint: 'All 8327 words learned. Do or do not — there is no try!' },

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

export const ACH_ES: Record<string, AchTranslation> = {
  // ── Words ──
  first1:    { name: 'Primer paso',         hint: 'Presiona ✓ Sé en tu primera palabra — ¡el viaje comienza!' },
  words10:   { name: '10 palabras',         hint: 'Marca 10 palabras distintas como "Sé"' },
  words50:   { name: '50 palabras',         hint: 'Aprende 50 palabras — ¡ya eres un Padawan! Aprox. 1% del diccionario.' },
  words100:  { name: '100 palabras',        hint: '100 palabras — ¡ya puedes leer textos sencillos!' },
  words250:  { name: '250 palabras',        hint: '250 palabras cubren el 65% del habla cotidiana. ¡La Fuerza está contigo!' },
  words500:  { name: '500 palabras',        hint: '500 palabras — ¡el nivel de un Caballero Jedi confiado!' },
  words1000: { name: '1.000 palabras',      hint: '1000 palabras = A2/B1. ¡Entiendes películas con subtítulos!' },
  words2000: { name: '2.000 palabras',      hint: '2000 palabras — hablas con fluidez. ¡Digno del Consejo!' },
  words3000: { name: '3.000 palabras',      hint: '3000 palabras — nivel C1, ¡casi un Lord Sith del vocabulario!' },
  words4000: { name: '4.000 palabras',      hint: '4000 palabras — eres el Elegido. ¡Lees sin diccionario!' },
  words5542: { name: 'Maestro Yoda',        hint: 'Todas las 8327 palabras aprendidas. ¡Hazlo o no lo hagas, no lo intentes!' },

  // ── Streak ──
  streak3:   { name: '3 días seguidos',     hint: '3 días seguidos — ¡un hábito comienza!' },
  streak7:   { name: 'Semana Jedi',         hint: '7 días seguidos — ¡un verdadero Jedi nunca se rinde!' },
  streak14:  { name: 'Dos semanas',         hint: '14 días — ¡ahora entrenas como en el Templo Jedi!' },
  streak30:  { name: 'Mes de la Fuerza',    hint: '30 días — lo lograste. ¡El Consejo Jedi aplaude!' },
  streak100: { name: '100 días',            hint: '100 días seguidos. La Fuerza se ha convertido en parte de ti.' },

  // ── Goals ──
  goal1:  { name: 'Primera meta',           hint: 'Completa tu meta diaria — aprende las palabras asignadas en un día' },
  goal7:  { name: 'Semana de metas',        hint: 'Completa la meta diaria 7 veces (no necesariamente seguidas)' },
  goal30: { name: '30 metas',               hint: '30 metas diarias completadas. ¡Disciplina Jedi!' },

  // ── Speed ──
  speed20:  { name: 'Sprint',               hint: 'Aprende 20 palabras en una sola sesión' },
  speed50:  { name: 'Hipersalto',           hint: '50 palabras en una sesión — ¡como un hipersalto!' },
  speed100: { name: 'Halcón Milenario',     hint: '100 palabras en una sesión. ¡12 parsecs!' },

  // ── Modes ──
  mode_quiz1:     { name: 'Primer Quiz',          hint: 'Completa tu primer Quiz de 4 opciones' },
  mode_quiz10:    { name: 'Quiz ×10',             hint: '10 quizzes completados — ¡un verdadero experto!' },
  mode_quiz50:    { name: 'Quiz ×50',             hint: '50 quizzes. ¡Mente afilada como la espada de un Jedi!' },
  mode_tempo1:    { name: 'Primer Tempo',         hint: 'Termina tu primer juego cronometrado' },
  mode_tempo10:   { name: 'Tempo ×10',            hint: '10 juegos cronometrados. ¡La velocidad es tu arma!' },
  mode_pairs1:    { name: 'Primeras Parejas',     hint: 'Termina tu primera ronda de Parejas' },
  mode_write1:    { name: 'Primera Escritura',    hint: 'Escribe tu primera palabra a mano. ¡La caligrafía de un Padawan!' },
  mode_write20:   { name: 'Escritura ×20',        hint: '20 sesiones de escritura. ¡Tu mano lo recuerda!' },
  mode_listen1:   { name: 'Primera Escucha',      hint: 'Termina tu primera ronda de modo Escucha' },
  mode_lesson1:   { name: 'Primera Lección',      hint: 'Completa tu primera lección 5×3' },
  mode_fib1:      { name: 'Primer Completar',     hint: 'Termina tu primera ronda de Completar el espacio' },
  mode_story1:    { name: 'Primera Lectura+',     hint: 'Termina tu primera historia en modo Lectura+' },
  mode_daily1:    { name: 'Primera Misión Diaria',hint: 'Completa tu primera misión diaria — 10 palabras contra reloj!' },
  mode_spelling1: { name: 'Primer Spelling Bee',  hint: 'Termina tu primera ronda de Spelling Bee — escúchalo y deletréalo' },

  // ── Combo ──
  combo5:  { name: 'Racha ×5',             hint: 'Responde correctamente 5 veces seguidas sin errores' },
  combo10: { name: 'Racha ×10',            hint: '10 respuestas correctas seguidas — ¡reflejos Jedi!' },
  combo25: { name: 'Flujo Jedi',           hint: '25 seguidas. La Fuerza te guía en cada palabra' },

  // ── Levels ──
  lvl2: { name: 'Sensible a la Fuerza',    hint: 'Alcanza el nivel 2 — Sensible a la Fuerza (30 palabras)' },
  lvl3: { name: 'Padawan',                 hint: 'Alcanza el nivel Padawan (100 palabras)' },
  lvl4: { name: 'Caballero Jedi',          hint: 'Alcanza el nivel Caballero Jedi (250 palabras)' },
  lvl5: { name: 'Maestro Jedi',            hint: 'Alcanza el nivel Maestro Jedi (500 palabras)' },
  lvl6: { name: 'Miembro del Consejo',     hint: 'Alcanza el nivel Miembro del Consejo (900 palabras)' },
  lvl7: { name: 'Lord Sith',               hint: 'Alcanza el nivel Lord Sith (1500 palabras)' },
  lvl8: { name: 'El Elegido',              hint: 'Alcanza el nivel El Elegido (2500 palabras)' },
  lvl9: { name: 'Equilibrador de la Fuerza', hint: 'Alcanza el nivel Equilibrador de la Fuerza (4000 palabras)' },

  // ── Custom ──
  custom1:  { name: 'Tu propia palabra',   hint: 'Añade tu primera palabra personalizada al entrenador' },
  custom10: { name: '10 palabras propias', hint: '10 palabras personalizadas. ¡Tu propio diccionario!' },
};

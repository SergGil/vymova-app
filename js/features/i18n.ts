// English Words App — js/features/i18n.ts
// Minimal i18n: translates sidebar menu labels (UA ⇄ EN), persisted via localStorage

type Lang = 'ua' | 'en' | 'es';

const DICT: Record<string, Record<Lang, string>> = {
  'nav.cards':        { ua: 'Картки',        en: 'Cards',        es: 'Tarjetas' },
  'nav.stats':        { ua: 'Статистика',    en: 'Statistics',   es: 'Estadísticas' },
  'nav.achievements': { ua: 'Досягнення',    en: 'Achievements', es: 'Logros' },
  'nav.modes':        { ua: 'Режими',        en: 'Modes',        es: 'Modos' },
  'nav.learningPath': { ua: 'Шлях навчання', en: 'Learning Path', es: 'Ruta de aprendizaje' },
  'nav.grammar':      { ua: 'Граматика',     en: 'Grammar',      es: 'Gramática' },
  'nav.idioms':       { ua: 'Ідіоми',        en: 'Idioms',       es: 'Modismos' },
  'nav.duel':         { ua: 'Дуель',         en: 'Duel',         es: 'Duelo' },
  'nav.settings':     { ua: 'Налаштування',  en: 'Settings',     es: 'Ajustes' },
  'nav.language':     { ua: '🌐 Мова',       en: '🌐 Language',  es: '🌐 Idioma' },

  'cards.cardLabel':    { ua: 'Картка',                              en: 'Card',                                es: 'Tarjeta' },
  'cards.learnedLabel': { ua: 'Вивчено',                             en: 'Learned',                             es: 'Aprendidas' },
  'cards.streakLabel':  { ua: 'днів підряд',                         en: 'day streak',                          es: 'días seguidos' },
  'cards.dailyGoal':    { ua: 'Ціль на сьогодні',                    en: 'Today’s goal',                        es: 'Meta de hoy' },
  'cards.goalDone':     { ua: '🎉 Ціль досягнута!',                   en: '🎉 Goal reached!',                     es: '🎉 ¡Meta alcanzada!' },
  'cards.know':         { ua: '✓ Знаю',                              en: '✓ Know',                              es: '✓ Lo sé' },
  'cards.next':         { ua: 'Далі →',                              en: 'Next →',                              es: 'Siguiente →' },
  'cards.forward':      { ua: '→ Далі',                              en: '→ Next',                              es: '→ Siguiente' },
  'cards.back':         { ua: '← Назад',                             en: '← Back',                              es: '← Atrás' },
  'cards.translation':  { ua: '👁 Переклад',                          en: '👁 Translation',                       es: '👁 Traducción' },
  'cards.hint':         { ua: 'Натисни на картку — побачиш переклад', en: 'Tap the card to see the translation', es: 'Toca la tarjeta para ver la traducción' },
  'cards.example':      { ua: 'Приклад',                             en: 'Example',                             es: 'Ejemplo' },
  'cards.quickQuiz':    { ua: '⚡ Quick Quiz — 5 питань',             en: '⚡ Quick Quiz — 5 questions',          es: '⚡ Quick Quiz — 5 preguntas' },
  'cards.allTopics':    { ua: '🏷️ Всі теми',                         en: '🏷️ All topics',                       es: '🏷️ Todos los temas' },
  'cards.allWords':     { ua: 'Всі слова',                           en: 'All words',                           es: 'Todas las palabras' },
  'cards.searchPlaceholder': { ua: 'Пошук слова...',                 en: 'Search a word...',                    es: 'Buscar una palabra...' },
  'gamebar.shield':      { ua: 'щит',                                en: 'shield',                              es: 'escudo' },
  'gamebar.shields':     { ua: 'щити',                               en: 'shields',                             es: 'escudos' },
  'gamebar.shield.desc': { ua: 'захистить стрік при пропуску дня',  en: 'protects your streak if you miss a day', es: 'protege tu racha si fallas un día' },
  'gamebar.shield.none': { ua: 'Щитів немає. Отримай за 7 днів поспіль.', en: 'No shields. Earn one with a 7-day streak.', es: 'Sin escudos. Gana uno con una racha de 7 días.' },
  'cards.auto':         { ua: '▶ Авто',                              en: '▶ Auto',                              es: '▶ Auto' },
  'cards.stop':         { ua: '⏹ Стоп',                              en: '⏹ Stop',                              es: '⏹ Detener' },
  'cards.pronounce':    { ua: 'Вимовити слово',                      en: 'Pronounce word',                      es: 'Pronunciar palabra' },
  'cards.checkPron':    { ua: 'Перевір вимову',                      en: 'Check pronunciation',                 es: 'Comprobar pronunciación' },
  'cards.noteMnemonic': { ua: 'Нотатка/мнемоніка',                   en: 'Note/mnemonic',                       es: 'Nota/mnemotecnia' },
  'cards.addBookmark':  { ua: 'Додати в закладки',                   en: 'Add to bookmarks',                    es: 'Añadir a marcadores' },
  'cards.removeKnown':  { ua: 'Прибрати з вивчених',                 en: 'Remove from learned',                 es: 'Quitar de aprendidas' },
  'cards.wotdLabel':    { ua: '📖 Слово дня',                         en: '📖 Word of the day',                  es: '📖 Palabra del día' },
  'cards.wotdTitle':    { ua: 'Слово дня — натисни щоб перейти',     en: 'Word of the day — tap to go there',   es: 'Palabra del día — toca para ir allí' },
  'cards.tagFilterTitle': { ua: 'Фільтр по темі',                    en: 'Filter by topic',                     es: 'Filtrar por tema' },
  'cards.autoTitle':    { ua: 'Авто-режим',                          en: 'Auto mode',                           es: 'Modo automático' },
  'cards.prevTitle':    { ua: 'Попередня картка',                    en: 'Previous card',                       es: 'Tarjeta anterior' },
  'cards.nextTitle':    { ua: 'Наступна картка',                     en: 'Next card',                           es: 'Siguiente tarjeta' },
  'cards.shuffleTitle': { ua: 'Перемішати',                          en: 'Shuffle',                             es: 'Mezclar' },
  'cards.searchTitle':  { ua: 'Пошук по словнику (Ctrl+F)',          en: 'Search the dictionary (Ctrl+F)',      es: 'Buscar en el diccionario (Ctrl+F)' },
  'cards.statsTitle':   { ua: 'Статистика',                          en: 'Statistics',                          es: 'Estadísticas' },
  'cards.achievementsTitle': { ua: 'Досягнення',                     en: 'Achievements',                        es: 'Logros' },
  'cards.modesTitle':   { ua: 'Режими навчання',                     en: 'Learning modes',                      es: 'Modos de aprendizaje' },
  'cards.quickQuizTitle': { ua: '5 питань з поточної колоди (Quick Quiz)', en: '5 questions from the current deck (Quick Quiz)', es: '5 preguntas del mazo actual (Quick Quiz)' },
  'cards.similarTitle': { ua: 'Схожі слова',                         en: 'Similar words',                       es: 'Palabras similares' },
  'cards.familyTitle':  { ua: '🌱 Сімейство слів',                    en: '🌱 Word family',                      es: '🌱 Familia de palabras' },
  'cards.collocationsTitle': { ua: '🔗 Сталі словосполучення',       en: '🔗 Collocations',                     es: '🔗 Colocaciones' },
  'cards.forget':       { ua: '✕ Забути',                            en: '✕ Forget',                            es: '✕ Olvidar' },
  'cards.bookmarkTitle':{ ua: 'Закладка',                            en: 'Bookmark',                            es: 'Marcador' },
  'cards.gotoCard':     { ua: '→ На картку',                         en: '→ Go to card',                        es: '→ Ir a la tarjeta' },
  'range.bookmarks':    { ua: '⭐ Закладки',                          en: '⭐ Bookmarks',                         es: '⭐ Marcadores' },

  'mode.mixed':         { ua: 'Мішаний',                             en: 'Mixed',                               es: 'Mixto' },

  'common.of':     { ua: 'з',         en: 'of',         es: 'de' },
  'common.close':  { ua: 'Закрити',   en: 'Close',      es: 'Cerrar' },
  'common.tryAgain': { ua: '🔄 Ще раз', en: '🔄 Try again', es: '🔄 Intentar de nuevo' },
  'common.secSuffix': { ua: 'с',        en: 's',          es: 's' },

  'range.unlearned': { ua: '🔴 Тільки невивчені',     en: '🔴 Unlearned only',          es: '🔴 Solo no aprendidas' },
  'range.srs':       { ua: '🔁 Spaced Repetition',    en: '🔁 Spaced Repetition',       es: '🔁 Repetición espaciada' },
  'range.weak':      { ua: '⚠️ Слабкі слова',         en: '⚠️ Weak words',              es: '⚠️ Palabras débiles' },
  'range.hard':      { ua: '🔴 Важкі слова',          en: '🔴 Hard words',              es: '🔴 Palabras difíciles' },
  'range.cefrGroup': { ua: '📊 Рівень CEFR',          en: '📊 CEFR level',              es: '📊 Nivel CEFR' },
  'range.cefrA1':    { ua: '🟢 A1 — Початківець',      en: '🟢 A1 — Beginner',           es: '🟢 A1 — Principiante' },
  'range.cefrA2':    { ua: '🟩 A2 — Елементарний',     en: '🟩 A2 — Elementary',         es: '🟩 A2 — Elemental' },
  'range.cefrB1':    { ua: '🟡 B1 — Середній',         en: '🟡 B1 — Intermediate',       es: '🟡 B1 — Intermedio' },
  'range.cefrB2':    { ua: '🟠 B2 — Вище середнього',  en: '🟠 B2 — Upper-intermediate', es: '🟠 B2 — Intermedio alto' },
  'range.cefrC1':    { ua: '🔴 C1 — Просунутий',       en: '🔴 C1 — Advanced',           es: '🔴 C1 — Avanzado' },
  'range.cefrC2':    { ua: '🟣 C2 — Майстерний',       en: '🟣 C2 — Proficient',         es: '🟣 C2 — Maestría' },
  'range.stale7':    { ua: '🕰️ Не бачені 7 днів',     en: '🕰️ Not seen for 7 days',     es: '🕰️ No vistas hace 7 días' },
  'range.stale30':   { ua: '🕰️ Не бачені 30 днів',    en: '🕰️ Not seen for 30 days',    es: '🕰️ No vistas hace 30 días' },

  'kbd.space':       { ua: 'Пробіл',     en: 'Space',      es: 'Espacio' },
  'kbd.next':        { ua: 'далі',       en: 'next',       es: 'siguiente' },
  'kbd.know':        { ua: 'знаю',       en: 'know',       es: 'lo sé' },
  'kbd.navigation':  { ua: 'навігація',  en: 'navigation', es: 'navegación' },
  'kbd.translation': { ua: 'переклад',   en: 'translation', es: 'traducción' },
  'kbd.search':      { ua: 'пошук',      en: 'search',     es: 'búsqueda' },
  'kbd.allKeys':     { ua: 'всі клавіші', en: 'all shortcuts', es: 'todos los atajos' },
  'kbd.allKeysTitle':{ ua: 'Всі клавіші', en: 'All shortcuts', es: 'Todos los atajos' },

  'ach.pageTitle':    { ua: '🏆 Досягнення',                  en: '🏆 Achievements',                  es: '🏆 Logros' },
  'ach.roadmapTitle': { ua: '🗺️ Шлях Джедая — всі рівні',     en: '🗺️ Path of the Jedi — all levels', es: '🗺️ Camino del Jedi — todos los niveles' },
  'ach.awardsTitle':  { ua: '🏅 Нагороди',                    en: '🏅 Awards',                        es: '🏅 Premios' },
  'ach.close':        { ua: 'Закрити',                        en: 'Close',                            es: 'Cerrar' },
  'ach.done':         { ua: '✓ Виконано',                    en: '✓ Done',                           es: '✓ Completado' },
  'ach.unlocked':     { ua: '🏆 Досягнення розблоковано!',   en: '🏆 Achievement unlocked!',         es: '🏆 ¡Logro desbloqueado!' },
  'ach.notYet':       { ua: '🔒 Ще не виконано',             en: '🔒 Not yet completed',             es: '🔒 Aún no completado' },

  // Statistics page — section titles & static labels
  'stats.title':            { ua: '📊 Статистика',                          en: '📊 Statistics',                              es: '📊 Estadísticas' },
  'stats.overallProgress':  { ua: 'Загальний прогрес',                      en: 'Overall progress',                           es: 'Progreso general' },
  'stats.wordsLearned':     { ua: 'Вивчено слів',                           en: 'Words learned',                              es: 'Palabras aprendidas' },
  'stats.ofAllWords':       { ua: 'Від усіх слів',                          en: 'Of all words',                               es: 'De todas las palabras' },
  'stats.daysStreak':       { ua: '🔥 Днів підряд',                         en: '🔥 Day streak',                               es: '🔥 Días seguidos' },
  'stats.perDayTitle':      { ua: 'Слів вивчено по днях (останні 14 днів)', en: 'Words learned per day (last 14 days)',       es: 'Palabras aprendidas por día (últimos 14 días)' },
  'stats.yearActivity':     { ua: '🗓️ Активність за рік',                   en: '🗓️ Activity over the year',                   es: '🗓️ Actividad del año' },
  'stats.yearActivityDesc': { ua: '52 тижні · зелений = більше слів',       en: '52 weeks · greener = more words',            es: '52 semanas · más verde = más palabras' },
  'stats.monthlyView':      { ua: '📅 Місячний вигляд',                     en: '📅 Monthly view',                             es: '📅 Vista mensual' },
  'stats.bestTimeTitle':    { ua: '⏰ Найкращий час навчання',              en: '⏰ Best time to learn',                       es: '⏰ Mejor hora para aprender' },
  'stats.blockProgress':    { ua: 'Прогрес по блоках',                      en: 'Progress by blocks',                         es: 'Progreso por bloques' },
  'stats.srsForecastTitle': { ua: '📅 SRS — Розклад повторень (14 днів)',   en: '📅 SRS — Review schedule (14 days)',          es: '📅 SRS — Calendario de repasos (14 días)' },
  'stats.weakWordsTitle':   { ua: '🔴 Слабкі слова (топ-10)',               en: '🔴 Weak words (top 10)',                     es: '🔴 Palabras débiles (top 10)' },
  'stats.modeAccuracyTitle':{ ua: '🎮 Точність по режимах',                 en: '🎮 Accuracy by mode',                        es: '🎮 Precisión por modo' },
  'stats.cefrProgressTitle':{ ua: '📊 Прогрес за CEFR рівнями',             en: '📊 Progress by CEFR level',                  es: '📊 Progreso por nivel CEFR' },
  'stats.leaderboardTitle': { ua: '🏆 Глобальний лідерборд',                en: '🏆 Global leaderboard',                      es: '🏆 Clasificación global' },
  'stats.refresh':          { ua: '🔄 Оновити',                             en: '🔄 Refresh',                                 es: '🔄 Actualizar' },

  // Statistics page — dynamic strings
  'stats.noData':         { ua: 'Ще немає даних.<br>Почни вивчати слова!', en: 'No data yet.<br>Start learning words!',     es: 'Aún no hay datos.<br>¡Empieza a aprender palabras!' },
  'stats.today':          { ua: 'сьогодні',                                en: 'today',                                     es: 'hoy' },
  'stats.todayCap':       { ua: 'Сьогодні',                                en: 'Today',                                     es: 'Hoy' },
  'stats.tomorrow':       { ua: 'Завтра',                                  en: 'Tomorrow',                                  es: 'Mañana' },
  'stats.totalScheduled': { ua: 'Всього заплановано',                      en: 'Total scheduled',                           es: 'Total programado' },
  'stats.reviews':        { ua: 'повторень',                               en: 'reviews',                                   es: 'repasos' },
  'stats.noModeData':     { ua: 'Ще немає даних — грай у режимах!',        en: 'No data yet — play some modes!',            es: 'Aún no hay datos — ¡juega en los modos!' },
  'stats.sessionsAbbr':   { ua: 'сес.',                                    en: 'sess.',                                     es: 'ses.' },
  'stats.noSrsData':      { ua: 'Поки немає даних SRS.',                   en: 'No SRS data yet.',                          es: 'Aún no hay datos de SRS.' },
  'stats.bestTimeLabel':  { ua: 'Найкращий час',                           en: 'Best time',                                 es: 'Mejor hora' },
  'stats.intervals':      { ua: 'Інтервали',                               en: 'Intervals',                                 es: 'Intervalos' },
  'stats.totalForMonth':  { ua: 'Всього за місяць',                        en: 'Total for the month',                       es: 'Total del mes' },
  'stats.noWordsThisMonth':{ ua: 'Слів у цьому місяці немає',              en: 'No words learned this month',               es: 'No hay palabras aprendidas este mes' },

  'stats.night':   { ua: '🌙 ніч',   en: '🌙 night',     es: '🌙 noche' },
  'stats.morning': { ua: '🌅 ранок', en: '🌅 morning',   es: '🌅 mañana' },
  'stats.day':     { ua: '☀️ день',  en: '☀️ afternoon', es: '☀️ tarde' },
  'stats.evening': { ua: '🌆 вечір', en: '🌆 evening',   es: '🌆 noche' },

  'mode.quiz':   { ua: 'Тест',    en: 'Quiz',      es: 'Test' },
  'mode.write':  { ua: 'Письмо',  en: 'Writing',   es: 'Escritura' },
  'mode.listen': { ua: 'Аудіо',   en: 'Listening', es: 'Audio' },
  'mode.fib':    { ua: 'Речення', en: 'Sentences', es: 'Frases' },
  'mode.lesson': { ua: 'Урок',    en: 'Lesson',    es: 'Lección' },
  'mode.tempo':  { ua: 'Темп',    en: 'Tempo',     es: 'Ritmo' },

  // Modes picker overlay — header & cards
  'modesPg.header':       { ua: '🎮 Режим навчання',         en: '🎮 Learning mode',          es: '🎮 Modo de aprendizaje' },
  'modesPg.quizName':     { ua: 'Тест',                      en: 'Quiz',                      es: 'Test' },
  'modesPg.quizDesc':     { ua: '4 варіанти',                en: '4 options',                 es: '4 opciones' },
  'modesPg.tempoName':    { ua: 'Темп',                      en: 'Tempo',                     es: 'Ritmo' },
  'modesPg.tempoDesc':    { ua: 'На час',                    en: 'Timed',                     es: 'Contrarreloj' },
  'modesPg.writeName':    { ua: 'Письмо',                    en: 'Writing',                   es: 'Escritura' },
  'modesPg.writeDesc':    { ua: 'UA → EN',                   en: 'UA → EN',                   es: 'UA → EN' },
  'modesPg.lessonName':   { ua: 'Урок',                      en: 'Lesson',                    es: 'Lección' },
  'modesPg.lessonDesc':   { ua: '5×3 вправи',                en: '5×3 exercises',             es: '5×3 ejercicios' },
  'modesPg.pairsName':    { ua: 'Пари',                      en: 'Pairs',                     es: 'Parejas' },
  'modesPg.pairsDesc':    { ua: '6 пар',                     en: '6 pairs',                   es: '6 parejas' },
  'modesPg.catName':      { ua: 'Теми',                      en: 'Topics',                    es: 'Temas' },
  'modesPg.catDesc':      { ua: 'По темі',                   en: 'By category',               es: 'Por categoría' },
  'modesPg.listenName':   { ua: 'Слухай',                    en: 'Listen',                    es: 'Escucha' },
  'modesPg.listenDesc':   { ua: 'Аудіо',                     en: 'Audio',                     es: 'Audio' },
  'modesPg.fibName':      { ua: 'Пропуск',                   en: 'Fill gap',                  es: 'Completar' },
  'modesPg.fibDesc':      { ua: 'Вставте слово',             en: 'Type the word',             es: 'Escribe la palabra' },
  'modesPg.wordName':     { ua: 'Слово',                     en: 'Word',                      es: 'Palabra' },
  'modesPg.wordDesc':     { ua: 'Додати своє',               en: 'Add your own',              es: 'Añade la tuya' },
  'modesPg.dailyName':    { ua: 'Місія дня',                 en: 'Daily mission',             es: 'Misión diaria' },
  'modesPg.dailyDesc':    { ua: '10 слів + таймер',          en: '10 words + timer',          es: '10 palabras + temporizador' },
  'modesPg.readingName':  { ua: 'Читання',                   en: 'Reading',                   es: 'Lectura' },
  'modesPg.readingDesc':  { ua: 'Текст зі словами',          en: 'Text with words',           es: 'Texto con palabras' },
  'modesPg.contextName':  { ua: 'Контекст',                  en: 'Context',                   es: 'Contexto' },
  'modesPg.contextDesc':  { ua: 'Вгадай з речення',          en: 'Guess from a sentence',     es: 'Adivina por la frase' },
  'modesPg.beeName':      { ua: 'Spelling Bee',              en: 'Spelling Bee',              es: 'Concurso de ortografía' },
  'modesPg.beeDesc':      { ua: 'Почуй і напиши',            en: 'Listen and spell',          es: 'Escucha y escribe' },
  'modesPg.storyName':    { ua: 'Читання+',                  en: 'Reading+',                  es: 'Lectura+' },
  'modesPg.storyDesc':    { ua: 'Текст зі словами',          en: 'Text with words',           es: 'Texto con palabras' },

  // Quiz mode
  'quiz.title':       { ua: '🧠 Тест',                  en: '🧠 Quiz',                            es: '🧠 Test' },
  'quiz.question':    { ua: 'Питання',                  en: 'Question',                          es: 'Pregunta' },
  'quiz.enToUa':      { ua: 'Англійська → Українська',  en: 'English → Ukrainian',               es: 'Inglés → Ucraniano' },
  'quiz.uaToEn':      { ua: 'Українська → Англійська',  en: 'Ukrainian → English',               es: 'Ucraniano → Inglés' },
  'quiz.correctLbl':  { ua: 'правильно',                en: 'correct',                           es: 'correcto' },
  'quiz.wrongLbl':    { ua: 'неправильно',              en: 'incorrect',                         es: 'incorrecto' },
  'quiz.correctMsg':  { ua: '✓ Правильно!',             en: '✓ Correct!',                        es: '✓ ¡Correcto!' },
  'quiz.incorrectMsg':{ ua: '✗ Неправильно',            en: '✗ Incorrect',                       es: '✗ Incorrecto' },
  'quiz.finish':      { ua: '🏆 Фініш!',                en: '🏆 Finish!',                         es: '🏆 ¡Fin!' },
  'quiz.next':        { ua: 'Наступне →',               en: 'Next →',                            es: 'Siguiente →' },
  'quiz.completed':   { ua: 'Тест завершено',           en: 'Quiz completed',                    es: 'Test completado' },
  'quiz.completedExcl': { ua: 'Тест завершено!',        en: 'Quiz completed!',                   es: '¡Test completado!' },
  'quiz.restartWrongPrefix': { ua: '✗ Повторити',       en: '✗ Retry',                           es: '✗ Repetir' },
  'quiz.fixedTitle':  { ua: 'Помилки виправлено!',      en: 'Mistakes fixed!',                   es: '¡Errores corregidos!' },
  'quiz.fixedDescSingle': { ua: 'Слово засвоєно — чудова робота!', en: 'Word mastered — great job!', es: 'Palabra dominada — ¡buen trabajo!' },
  'quiz.fixedDescAll':{ ua: 'Всі {n} в роботі над помилками — відмінно!', en: 'All {n} corrected — excellent!', es: 'Las {n} corregidas — ¡excelente!' },
  'quiz.perfectTitle':{ ua: 'Ідеально!',                en: 'Perfect!',                          es: '¡Perfecto!' },
  'quiz.perfectDescSingle': { ua: '1 відповідь — і одразу правильно!', en: '1 answer — and correct right away!', es: '1 respuesta — ¡y acertaste a la primera!' },
  'quiz.perfectDescAll': { ua: 'Всі {n} правильно!',    en: 'All {n} correct!',                  es: '¡Las {n} correctas!' },
  'quiz.greatTitle':  { ua: 'Чудово!',                  en: 'Great job!',                        es: '¡Genial!' },
  'quiz.goodTitle':   { ua: 'Непогано!',                en: 'Not bad!',                          es: '¡No está mal!' },
  'quiz.keepTitle':   { ua: 'Ще попрацюємо!',           en: 'Let’s keep practicing!',            es: '¡Sigamos practicando!' },
  'quiz.keepDescSuffix': { ua: 'Повтори слова.',        en: 'Review the words.',                 es: 'Repasa las palabras.' },
  'quiz.encourageTitle': { ua: 'Продовжуй вчити!',      en: 'Keep learning!',                    es: '¡Sigue aprendiendo!' },
  'quiz.encourageDescSuffix': { ua: 'Не здавайся!',     en: 'Don’t give up!',                    es: '¡No te rindas!' },
  'quiz.answer':      { ua: 'відповідь',                en: 'answer',                            es: 'respuesta' },
  'quiz.answers':     { ua: 'відповіді',                en: 'answers',                           es: 'respuestas' },
  'quiz.answersGen':  { ua: 'відповідей',               en: 'answers',                           es: 'respuestas' },
  'quiz.mistake':     { ua: 'помилку',                  en: 'mistake',                           es: 'error' },
  'quiz.mistakes':    { ua: 'помилки',                  en: 'mistakes',                          es: 'errores' },
  'quiz.mistakesGen': { ua: 'помилок',                  en: 'mistakes',                          es: 'errores' },

  'tempo.title':      { ua: 'Темп-режим',               en: 'Tempo Mode',                           es: 'Modo Ritmo' },
  'tempo.subtitle':   { ua: 'Вгадай якомога більше слів за 60 секунд', en: 'Guess as many words as possible in 60 seconds', es: 'Adivina tantas palabras como puedas en 60 segundos' },
  'tempo.sec30':      { ua: '30 сек',                   en: '30 sec',                               es: '30 seg' },
  'tempo.sec60':      { ua: '60 сек',                   en: '60 sec',                               es: '60 seg' },
  'tempo.sec90':      { ua: '90 сек',                   en: '90 sec',                               es: '90 seg' },
  'tempo.start':      { ua: 'Старт ⚡',                 en: 'Start ⚡',                              es: 'Empezar ⚡' },
  'tempo.again':      { ua: '⚡ Ще раз',                en: '⚡ Again',                              es: '⚡ De nuevo' },
  'tempo.bestRecord': { ua: '🏆 Рекорд: {n} слів за {s}с', en: '🏆 Best: {n} words in {s}s',         es: '🏆 Récord: {n} palabras en {s}s' },
  'tempo.zeroTitle':  { ua: 'Наступного разу!',         en: 'Next time!',                           es: '¡La próxima vez!' },
  'tempo.excellentTitle': { ua: 'Відмінно!',            en: 'Excellent!',                           es: '¡Excelente!' },
  'tempo.practiceTitle': { ua: 'Тренуйся!',             en: 'Keep practicing!',                     es: '¡Sigue practicando!' },
  'tempo.newRecord':  { ua: '🌟 Новий рекорд: {n} слів!', en: '🌟 New record: {n} words!',           es: '🌟 ¡Nuevo récord: {n} palabras!' },
  'tempo.record':     { ua: '🏆 Рекорд: {n} слів',      en: '🏆 Record: {n} words',                  es: '🏆 Récord: {n} palabras' },

  'write.title':      { ua: '✍️ Письмо',                en: '✍️ Write',                              es: '✍️ Escritura' },
  'write.placeholder':{ ua: 'Введіть переклад англійською...', en: 'Enter English translation...',  es: 'Escribe la traducción en inglés...' },
  'write.checkBtn':   { ua: 'Перевірити',               en: 'Check',                                es: 'Comprobar' },
  'write.next':       { ua: 'Далі →',                   en: 'Next →',                               es: 'Siguiente →' },
  'write.micTitle':   { ua: 'Голосове введення',        en: 'Voice input',                          es: 'Entrada de voz' },
  'write.correctAnswerPrefix': { ua: 'Правильно:',      en: 'Correct:',                             es: 'Correcto:' },
  'write.mistakesBtn':{ ua: '✗ Помилки',                en: '✗ Mistakes',                           es: '✗ Errores' },
  'write.completed':  { ua: 'Завершено',                en: 'Completed',                            es: 'Completado' },

  'lesson.title':     { ua: '📚 Щоденний урок',          en: '📚 Daily Lesson',                      es: '📚 Lección diaria' },
  'lesson.step':      { ua: 'Крок',                     en: 'Step',                                 es: 'Paso' },
  'lesson.phaseFlash':{ ua: 'Флешкарти',                en: 'Flashcards',                           es: 'Tarjetas' },
  'lesson.phaseQuiz': { ua: 'Тест',                     en: 'Quiz',                                 es: 'Test' },
  'lesson.phaseWrite':{ ua: 'Письмо',                   en: 'Write',                                es: 'Escritura' },
  'lesson.dirFlash':  { ua: 'Що означає це слово?',     en: 'What does this word mean?',            es: '¿Qué significa esta palabra?' },
  'lesson.dirQuiz':   { ua: 'Оберіть переклад:',        en: 'Choose the translation:',              es: 'Elige la traducción:' },
  'lesson.dirWrite':  { ua: 'Введіть переклад англійською:', en: 'Enter the English translation:',  es: 'Escribe la traducción en inglés:' },
  'lesson.revealBtn': { ua: '👁 Показати',               en: '👁 Show',                              es: '👁 Mostrar' },
  'lesson.knowBtn':   { ua: '✓ Знаю',                   en: '✓ I know',                             es: '✓ Lo sé' },
  'lesson.skipBtn':   { ua: '→ Не знаю',                en: "→ I don't know",                       es: '→ No lo sé' },
  'lesson.completedExcl': { ua: 'Завершено!',           en: 'Completed!',                           es: '¡Completado!' },
  'lesson.doneBtn':   { ua: '🏠 Завершити',             en: '🏠 Finish',                            es: '🏠 Terminar' },
  'lesson.scoreLine': { ua: '{total} з {max} правильно ({pct}%)', en: '{total} of {max} correct ({pct}%)', es: '{total} de {max} correctas ({pct}%)' },

  'listen.title':     { ua: '🔊 Слухання',              en: '🔊 Listening',                         es: '🔊 Audio' },
  'listen.word':      { ua: 'Слово',                    en: 'Word',                                 es: 'Palabra' },
  'listen.playHint':  { ua: 'Натисни щоб почути слово', en: 'Click to hear the word',               es: 'Toca para escuchar la palabra' },
  'listen.repeatHint': { ua: 'повторити',               en: 'repeat',                               es: 'repetir' },
  'listen.wrongPrefix': { ua: 'Це',                     en: 'This is',                              es: 'Esto es' },
  'listen.keepGoingTitle': { ua: 'Продовжуй!',          en: 'Keep going!',                          es: '¡Sigue así!' },

  'fib.title':        { ua: '✏️ Вставте слово',          en: '✏️ Fill in the Blank',                 es: '✏️ Completa la palabra' },
  'fib.placeholder':  { ua: 'Введіть слово, якого бракує...', en: 'Type the missing word...',        es: 'Escribe la palabra que falta...' },
  'fib.noSentences':  { ua: 'Немає підходящих речень. Спробуй інший набір слів.', en: 'No suitable sentences. Try a different word set.', es: 'No hay frases adecuadas. Prueba con otro conjunto de palabras.' },
  'fib.sentence':     { ua: 'Речення',                  en: 'Sentence',                             es: 'Frase' },

  'ctx.title':        { ua: '🔍 Контекст',              en: '🔍 Context',                           es: '🔍 Contexto' },
  'ctx.noWords':      { ua: 'Не знайдено слів з прикладами.', en: 'No words with examples found.',  es: 'No se encontraron palabras con ejemplos.' },
  'ctx.contextWord':  { ua: 'Контекст',                 en: 'Context',                              es: 'Contexto' },
  'ctx.hintColon':    { ua: '💡 Підказка:',             en: '💡 Hint:',                             es: '💡 Pista:' },
  'ctx.firstLetterColon': { ua: '💡 Перша літера:',     en: '💡 First letter:',                     es: '💡 Primera letra:' },
  'ctx.hintBtn':      { ua: '💡 Підказка',              en: '💡 Hint',                              es: '💡 Pista' },

  'pairs.title':      { ua: '🔗 Знайди пару',           en: '🔗 Find the Pair',                     es: '🔗 Encuentra la pareja' },
  'pairs.record':     { ua: '🏆 Рекорд: {t}',           en: '🏆 Record: {t}',                       es: '🏆 Récord: {t}' },
  'pairs.newRecord':  { ua: '🌟 Новий рекорд!',         en: '🌟 New record!',                       es: '🌟 ¡Nuevo récord!' },
  'pairs.again':      { ua: '🔄 Знову',                 en: '🔄 Again',                             es: '🔄 Otra vez' },

  'catpairs.themes':       { ua: '📦 Теми',                en: '📦 Topics',                         es: '📦 Temas' },
  'catpairs.selectPrompt': { ua: 'Оберіть тему для гри',   en: 'Choose a topic to play',            es: 'Elige un tema para jugar' },
  'catpairs.backToThemes': { ua: '← Теми',                 en: '← Topics',                          es: '← Temas' },
  'catpairs.random':       { ua: '🎲 Випадково',           en: '🎲 Random',                         es: '🎲 Aleatorio' },
  'catpairs.randomDesc':   { ua: '6 пар з усіх тем',       en: '6 pairs from all topics',           es: '6 parejas de todos los temas' },

  'bee.word':           { ua: 'Слово',                          en: 'Word',                         es: 'Palabra' },
  'bee.listenPrompt':   { ua: 'Прослухай та напиши слово:',     en: 'Listen and spell the word:',   es: 'Escucha y escribe la palabra:' },
  'bee.speakTitle':     { ua: 'Прослухати ще раз',              en: 'Listen again',                 es: 'Escuchar de nuevo' },
  'bee.inputPlaceholder': { ua: 'Введи слово англійською...',   en: 'Type the word in English...',  es: 'Escribe la palabra en inglés...' },
  'bee.emptyInput':     { ua: 'Введи слово!',                   en: 'Type a word!',                 es: '¡Escribe una palabra!' },
  'bee.hintBtn':        { ua: '💡 Підказка ({n})',              en: '💡 Hint ({n})',                es: '💡 Pista ({n})' },
  'bee.hintNone':       { ua: '💡 Більше немає',                en: '💡 No more hints',             es: '💡 No hay más pistas' },
  'bee.checkBtn':       { ua: 'Перевірити',                     en: 'Check',                        es: 'Comprobar' },
  'bee.almostMsg':      { ua: '⚠️ Майже! Правильно: {w}',       en: '⚠️ Almost! Correct: {w}',      es: '⚠️ ¡Casi! Correcto: {w}' },
  'bee.wrongMsg':       { ua: '✗ Правильно: {w}',               en: '✗ Correct: {w}',               es: '✗ Correcto: {w}' },

  'story.pickerDesc':   { ua: 'Оберіть текст для читання. Слова зі словника будуть підсвічені — натисни щоб побачити переклад.', en: 'Choose a text to read. Words from your dictionary are highlighted — click to see the translation.', es: 'Elige un texto para leer. Las palabras de tu diccionario se resaltan — toca para ver la traducción.' },
  'story.levelLabel':   { ua: 'Рівень {lvl}',                   en: 'Level {lvl}',                                  es: 'Nivel {lvl}' },
  'story.statsLine':    { ua: '{n} слів підсвічено · {pct}% вже відомі', en: '{n} words highlighted · {pct}% already known', es: '{n} palabras resaltadas · {pct}% ya conocidas' },

  'reading.title':      { ua: '📖 Читання',                     en: '📖 Reading',                                   es: '📖 Lectura' },
  'reading.prevBtn':    { ua: '← Попередній',                   en: '← Previous',                                   es: '← Anterior' },
  'reading.nextBtn':    { ua: 'Наступний →',                    en: 'Next →',                                       es: 'Siguiente →' },
  'reading.epubBtn':    { ua: '📚 Завантажити epub',            en: '📚 Load epub',                                 es: '📚 Cargar epub' },
  'reading.statsLine':  { ua: 'Знаєш: {k} | Нові: {u} слів у тексті', en: 'Known: {k} | New: {u} words in text',    es: 'Conocidas: {k} | Nuevas: {u} palabras en el texto' },
  'reading.popupKnow':  { ua: '✓ Знаю',                         en: '✓ Known',                                      es: '✓ Conocida' },
  'reading.popupLearn': { ua: '+ Вивчити',                      en: '+ Learn',                                      es: '+ Aprender' },
  'reading.chapterLabel': { ua: 'Ч.{n}',                        en: 'Ch.{n}',                                       es: 'Cap.{n}' },
  'reading.epubLoading':  { ua: 'Завантаження…',                en: 'Loading…',                                     es: 'Cargando…' },
  'reading.epubNoChapters': { ua: 'Розділів не знайдено',       en: 'No chapters found',                            es: 'No se encontraron capítulos' },
  'reading.epubLoaded':   { ua: '✅ Завантажено: {n} фрагментів', en: '✅ Loaded: {n} fragments',                    es: '✅ Cargados: {n} fragmentos' },

  'daily.missionTitle': { ua: '⚡ Місія дня',                   en: '⚡ Daily Mission',                              es: '⚡ Misión diaria' },
  'daily.restart':      { ua: '↺ Ще раз',                      en: '↺ Try again',                                  es: '↺ Otra vez' },
  'daily.missionDone':  { ua: 'Місія виконана!',               en: 'Mission accomplished!',                        es: '¡Misión cumplida!' },
  'daily.keepTraining': { ua: 'Продовжуй тренуватись!',        en: 'Keep practicing!',                             es: '¡Sigue practicando!' },
  'daily.xpLabel':      { ua: '+{xp} XP за місію дня',         en: '+{xp} XP for the daily mission',               es: '+{xp} XP por la misión diaria' },

  'hints.quiz':    { ua: '🧠 Тест: оберіть правильний переклад з 4 варіантів. Клавіші 1–4 для швидкого вибору.', en: '🧠 Quiz: pick the correct translation from 4 options. Keys 1–4 for quick selection.', es: '🧠 Test: elige la traducción correcta entre 4 opciones. Teclas 1–4 para selección rápida.' },
  'hints.write':   { ua: '✍️ Письмо: введіть переклад англійською. 💡 — підказка, 🎤 — голосовий ввід.', en: '✍️ Write: type the translation in English. 💡 — hint, 🎤 — voice input.', es: '✍️ Escritura: escribe la traducción en inglés. 💡 — pista, 🎤 — entrada de voz.' },
  'hints.listen':  { ua: '🔊 Аудіо: натисніть ▶ щоб прослухати слово, потім оберіть переклад. Пробіл = повторити.', en: '🔊 Listening: press ▶ to hear the word, then pick the translation. Space = repeat.', es: '🔊 Audio: pulsa ▶ para escuchar la palabra, luego elige la traducción. Espacio = repetir.' },
  'hints.fib':     { ua: '✏️ Речення: введіть пропущене слово в речення. Enter — підтвердити, 💡 — підказка.', en: '✏️ Sentences: type the missing word in the sentence. Enter — submit, 💡 — hint.', es: '✏️ Frases: escribe la palabra que falta en la frase. Enter — enviar, 💡 — pista.' },
  'hints.tempo':   { ua: '⚡ Темп: відповідайте якнайшвидше до кінця таймера. Клавіші 1–4 для вибору.', en: '⚡ Tempo: answer as fast as you can before the timer ends. Keys 1–4 to select.', es: '⚡ Ritmo: responde lo más rápido posible antes de que acabe el tiempo. Teclas 1–4 para elegir.' },
  'hints.lesson':  { ua: '📚 Урок: 3 фази — флешкарти, тест, письмо. Пройдіть всі 5 слів щоб завершити.', en: '📚 Lesson: 3 phases — flashcards, quiz, writing. Complete all 5 words to finish.', es: '📚 Lección: 3 fases — tarjetas, test, escritura. Completa las 5 palabras para terminar.' },
  'hints.daily':   { ua: '📅 Місія дня: 10 слів з таймером 2 хв. Бонусні XP за кожну правильну відповідь!', en: '📅 Daily mission: 10 words with a 2-minute timer. Bonus XP for every correct answer!', es: '📅 Misión diaria: 10 palabras con un temporizador de 2 minutos. ¡XP extra por cada respuesta correcta!' },
  'hints.reading': { ua: '📖 Читання: кольорові слова — невивчені. Натисніть на слово щоб побачити переклад.', en: '📖 Reading: colored words are not yet learned. Click a word to see its translation.', es: '📖 Lectura: las palabras coloreadas aún no están aprendidas. Toca una palabra para ver su traducción.' },

  'keys.title':            { ua: '⌨️ Клавіатурні скорочення',     en: '⌨️ Keyboard shortcuts',                     es: '⌨️ Atajos de teclado' },
  'keys.mainScreen':       { ua: 'Головний екран',                en: 'Main screen',                               es: 'Pantalla principal' },
  'keys.nextCard':         { ua: 'Наступна картка',               en: 'Next card',                                 es: 'Siguiente tarjeta' },
  'keys.markKnown':        { ua: 'Позначити "Знаю"',              en: 'Mark as "Known"',                           es: 'Marcar como "Lo sé"' },
  'keys.navigation':       { ua: 'Навігація',                     en: 'Navigation',                                es: 'Navegación' },
  'keys.showTranslation':  { ua: 'Показати переклад',             en: 'Show translation',                          es: 'Mostrar traducción' },
  'keys.search':           { ua: 'Пошук',                         en: 'Search',                                    es: 'Búsqueda' },
  'keys.theseHints':       { ua: 'Ці підказки',                   en: 'These hints',                               es: 'Estas pistas' },
  'keys.quizTempo':        { ua: 'Тест / Темп-режим',             en: 'Quiz / Tempo mode',                         es: 'Test / Modo Ritmo' },
  'keys.selectOption':     { ua: 'Вибір варіанту',                en: 'Select option',                             es: 'Elegir opción' },
  'keys.nextAfterAnswer':  { ua: 'Далі (після відповіді)',        en: 'Next (after answering)',                    es: 'Siguiente (tras responder)' },
  'keys.repeatSound':      { ua: 'Повторити звук (Темп)',         en: 'Repeat sound (Tempo)',                      es: 'Repetir sonido (Ritmo)' },
  'keys.close':            { ua: 'Закрити',                       en: 'Close',                                     es: 'Cerrar' },
  'keys.writeFib':         { ua: 'Письмо / Пропуск',              en: 'Write / Fill-in-blank',                     es: 'Escritura / Completar' },
  'keys.checkAnswer':      { ua: 'Перевірити відповідь',          en: 'Check answer',                              es: 'Comprobar respuesta' },
  'keys.nextAfterCheck':   { ua: 'Далі (після перевірки)',        en: 'Next (after checking)',                     es: 'Siguiente (tras comprobar)' },
  'keys.hint':             { ua: 'Підказка',                      en: 'Hint',                                      es: 'Pista' },
  'keys.autocomplete':     { ua: 'Автодоповнення (Письмо)',       en: 'Autocomplete (Write)',                      es: 'Autocompletar (Escritura)' },
  'keys.listening':        { ua: 'Слухання',                      en: 'Listening',                                 es: 'Audio' },
  'keys.repeatWord':       { ua: 'Повторити слово',               en: 'Repeat word',                               es: 'Repetir palabra' },
  'keys.global':           { ua: 'Глобальні',                     en: 'Global',                                    es: 'Globales' },
  'keys.closeAnyModal':    { ua: 'Закрити будь-який модал',       en: 'Close any modal',                           es: 'Cerrar cualquier modal' },
  'keys.searchInList':     { ua: 'Пошук у списку (стрілки)',      en: 'Search in list (arrows)',                   es: 'Buscar en la lista (flechas)' },
  'keys.space':            { ua: 'Пробіл',                        en: 'Space',                                     es: 'Espacio' },
  'keys.hintBtnKbd':       { ua: '💡 кнопка',                     en: '💡 button',                                 es: '💡 botón' },

  'cefr.A1': { ua: 'Початківець',     en: 'Beginner',           es: 'Principiante' },
  'cefr.A2': { ua: 'Елементарний',    en: 'Elementary',         es: 'Elemental' },
  'cefr.B1': { ua: 'Середній',        en: 'Intermediate',       es: 'Intermedio' },
  'cefr.B2': { ua: 'Вище середнього', en: 'Upper-intermediate', es: 'Intermedio alto' },
  'cefr.C1': { ua: 'Просунутий',      en: 'Advanced',           es: 'Avanzado' },
  'cefr.C2': { ua: 'Майстерний',      en: 'Proficient',         es: 'Maestría' },

  'levels.maxReached': { ua: '🏆 Максимум!', en: '🏆 Max level!', es: '🏆 ¡Nivel máximo!' },
  'levels.learned':    { ua: 'вивчено',      en: 'learned',      es: 'aprendidas' },

  'lp.pageTitle':       { ua: '🎯 Шлях навчання',                       en: '🎯 Learning Path',                                  es: '🎯 Ruta de aprendizaje' },
  'lp.todayPlan':       { ua: 'Сьогоднішній план — рівень',             en: 'Today’s plan — level',                              es: 'Plan de hoy — nivel' },
  'lp.learnWordsNow':   { ua: 'Вчити слова',                            en: 'Learn',                                             es: 'Aprender' },
  'lp.now':             { ua: 'зараз',                                  en: 'now',                                               es: 'ahora' },
  'lp.levelWord':       { ua: 'Рівень',                                 en: 'Level',                                             es: 'Nivel' },
  'lp.completedExcl':   { ua: 'завершено!',                             en: 'completed!',                                        es: '¡completado!' },
  'lp.allLearned':      { ua: 'Всі слова цього рівня вивчено. Переходь до наступного!', en: 'You’ve learned all the words for this level. Move on to the next one!', es: 'Has aprendido todas las palabras de este nivel. ¡Pasa al siguiente!' },
  'lp.yourPace':        { ua: 'твій темп:',                             en: 'your pace:',                                        es: 'tu ritmo:' },
  'lp.wordsPerDay':     { ua: 'сл/день',                                en: 'words/day',                                         es: 'pal/día' },
  'lp.defaultPace':     { ua: '20 сл/день',                             en: '20 words/day',                                      es: '20 pal/día' },
  'lp.currentNow':      { ua: '← зараз',                                en: '← now',                                             es: '← ahora' },
  'lp.learnArrow':      { ua: 'Вчити →',                                en: 'Learn →',                                           es: 'Aprender →' },
  'lp.daysApprox':      { ua: 'днів',                                   en: 'days',                                              es: 'días' },
  'lp.openGrammar':     { ua: 'Відкрити граматику',                     en: 'Open grammar',                                      es: 'Abrir gramática' },
  'lp.completed':       { ua: '✓ Завершено',                            en: '✓ Completed',                                       es: '✓ Completado' },
  'lp.currentFocus':    { ua: 'Поточний фокус',                         en: 'Current focus',                                     es: 'Enfoque actual' },
  'lp.cefrProgress':    { ua: '📊 Прогрес за рівнями CEFR',             en: '📊 Progress by CEFR level',                         es: '📊 Progreso por nivel CEFR' },
  'lp.wordsCount':      { ua: 'слів',                                   en: 'words',                                             es: 'palabras' },
  'lp.completedPct':    { ua: 'завершено',                              en: 'completed',                                         es: 'completado' },
  'lp.wordsPerDayFull': { ua: 'слів/день',                              en: 'words/day',                                         es: 'palabras/día' },
  'lp.startLearning':   { ua: 'Починай вчити — побачиш свій темп',      en: 'Start learning to see your pace',                   es: 'Empieza a aprender para ver tu ritmo' },

  'lb.loading':  { ua: '⏳ Завантаження...',                              en: '⏳ Loading...',                                   es: '⏳ Cargando...' },
  'lb.empty':    { ua: 'Поки немає учасників. Ти будеш першим!',         en: 'No participants yet. You’ll be the first!',       es: 'Aún no hay participantes. ¡Serás el primero!' },
  'lb.top20':    { ua: '🌍 Топ-20 гравців · оновлюється при відкритті',  en: '🌍 Top 20 players · refreshes on open',           es: '🌍 Top 20 jugadores · se actualiza al abrir' },
  'lb.yourRank': { ua: 'Твоя позиція',                                    en: 'Your rank',                                       es: 'Tu posición' },
  'lb.you':      { ua: 'ти',                                              en: 'you',                                             es: 'tú' },

  // Settings page — section titles, descriptions, static labels
  'settings.pageTitle':        { ua: '⚙️ Налаштування',                                              en: '⚙️ Settings',                                                  es: '⚙️ Ajustes' },
  'settings.themesTitle':      { ua: '🎨 Теми',                                                      en: '🎨 Themes',                                                    es: '🎨 Temas' },
  'settings.themesDesc':       { ua: 'Обери оформлення застосунку.',                                 en: 'Choose the app’s appearance.',                                 es: 'Elige la apariencia de la app.' },
  'settings.darkTheme':        { ua: 'Темна тема',                                                   en: 'Dark theme',                                                   es: 'Tema oscuro' },
  'settings.starWars':         { ua: 'Star Wars',                                                    en: 'Star Wars',                                                    es: 'Star Wars' },
  'settings.voiceTitle':       { ua: '🔊 Голос озвучення',                                           en: '🔊 Voice',                                                     es: '🔊 Voz' },
  'settings.voiceReload':      { ua: '🔄 Оновити список',                                            en: '🔄 Refresh list',                                              es: '🔄 Actualizar lista' },
  'settings.voiceReloadTitle': { ua: 'Перезавантажити список голосів',                               en: 'Reload the voice list',                                        es: 'Recargar la lista de voces' },
  'settings.voiceDesc':        { ua: 'Безкоштовно, без API ключа, миттєво. Аудіо кешується після першого відтворення.', en: 'Free, no API key, instant. Audio is cached after the first playback.', es: 'Gratis, sin clave de API, instantáneo. El audio se guarda en caché tras la primera reproducción.' },
  'settings.imagesTitle':      { ua: '🖼️ Зображення на картках',                                     en: '🖼️ Card images',                                              es: '🖼️ Imágenes en las tarjetas' },
  'settings.imagesDesc1':      { ua: 'Безкоштовний ключ Pixabay дає фото для ~90% слів.',             en: 'A free Pixabay key provides photos for ~90% of words.',        es: 'Una clave gratuita de Pixabay da fotos para ~90% de las palabras.' },
  'settings.imagesDesc2':      { ua: 'Отримай на',                                                   en: 'Get one at',                                                   es: 'Consíguela en' },
  'settings.pixabayPlaceholder': { ua: 'Вставте Pixabay API ключ...',                                en: 'Paste your Pixabay API key...',                                es: 'Pega tu clave de API de Pixabay...' },
  'settings.save':             { ua: 'Зберегти',                                                     en: 'Save',                                                         es: 'Guardar' },
  'settings.prefetchDesc':     { ua: 'Завантаж URL зображень для всіх слів у фоні — після цього картинки з\'являтимуться миттєво.', en: 'Pre-load image URLs for all words in the background — afterwards, pictures will appear instantly.', es: 'Precarga las URLs de imágenes de todas las palabras en segundo plano — luego las imágenes aparecerán al instante.' },
  'settings.prefetchStart':    { ua: '▶ Завантажити',                                                en: '▶ Download',                                                   es: '▶ Descargar' },
  'settings.prefetchPause':    { ua: '⏸ Пауза',                                                      en: '⏸ Pause',                                                      es: '⏸ Pausar' },
  'settings.prefetchClear':    { ua: '🗑 Очистити',                                                   en: '🗑 Clear',                                                     es: '🗑 Borrar' },
  'settings.backupTitle':      { ua: '💾 Збереження прогресу',                                       en: '💾 Save progress',                                             es: '💾 Guardar progreso' },
  'settings.backupDesc':       { ua: 'Експортуй прогрес перед оновленням файлу — щоб не втратити вивчені слова.', en: 'Export your progress before updating the file — so you don’t lose learned words.', es: 'Exporta tu progreso antes de actualizar el archivo — para no perder las palabras aprendidas.' },
  'settings.export':           { ua: '📤 Експорт',                                                   en: '📤 Export',                                                    es: '📤 Exportar' },
  'settings.import':           { ua: '📥 Імпорт',                                                    en: '📥 Import',                                                    es: '📥 Importar' },
  'settings.ankiCsv':          { ua: '🃏 Anki CSV',                                                  en: '🃏 Anki CSV',                                                  es: '🃏 Anki CSV' },
  'settings.share':            { ua: '📤 Поділитись',                                                en: '📤 Share',                                                     es: '📤 Compartir' },
  'settings.sheetsCsv':        { ua: '📊 Google Sheets CSV',                                         en: '📊 Google Sheets CSV',                                         es: '📊 Google Sheets CSV' },
  'settings.pdfExport':        { ua: '🖨️ PDF / Друк',                                                en: '🖨️ PDF / Print',                                              es: '🖨️ PDF / Imprimir' },
  'settings.csvImport':        { ua: '📂 Імпорт CSV',                                                en: '📂 Import CSV',                                                es: '📂 Importar CSV' },
  'settings.csvImportTitle':   { ua: 'Імпорт власних слів з CSV файлу',                              en: 'Import your own words from a CSV file',                        es: 'Importar tus propias palabras desde un archivo CSV' },
  'settings.csvFormatLabel':   { ua: 'Формат CSV:',                                                  en: 'CSV format:',                                                  es: 'Formato CSV:' },
  'settings.csvFormatHint':    { ua: '(одне слово на рядок)',                                        en: '(one word per line)',                                          es: '(una palabra por línea)' },
  'settings.exportLabel':      { ua: 'Експортувати:',                                                en: 'Export:',                                                      es: 'Exportar:' },
  'settings.exportKnown':      { ua: '✓ Тільки вивчені',                                             en: '✓ Learned only',                                               es: '✓ Solo aprendidas' },
  'settings.exportUnknown':    { ua: '🔴 Тільки невивчені',                                          en: '🔴 Unlearned only',                                            es: '🔴 Solo no aprendidas' },
  'settings.exportAll':        { ua: '📚 Всі слова',                                                 en: '📚 All words',                                                 es: '📚 Todas las palabras' },
  'settings.exportCustom':     { ua: '➕ Тільки власні',                                             en: '➕ Custom only',                                               es: '➕ Solo propias' },
  'settings.notifTitle':       { ua: '🔔 Сповіщення',                                                en: '🔔 Notifications',                                             es: '🔔 Notificaciones' },
  'settings.notifDesc':        { ua: 'Щоденне нагадування якщо ще не вчив сьогодні.',                en: 'A daily reminder if you haven’t studied yet today.',           es: 'Un recordatorio diario si aún no has estudiado hoy.' },
  'settings.notifAllow':       { ua: 'Дозволити',                                                    en: 'Allow',                                                        es: 'Permitir' },
  'settings.notifTimeLabel':   { ua: '⏰ Нагадувати щодня о',                                        en: '⏰ Remind me daily at',                                         es: '⏰ Recordarme cada día a las' },
  'settings.notifTimeSuffix':  { ua: 'якщо не вчив сьогодні',                                        en: 'if you haven’t studied today',                                 es: 'si no has estudiado hoy' },
  'settings.cloudTitle':       { ua: '☁️ Хмарний бекап',                                             en: '☁️ Cloud backup',                                              es: '☁️ Copia en la nube' },
  'settings.cloudCopy':        { ua: '📋 Копія',                                                     en: '📋 Copy',                                                      es: '📋 Copiar' },
  'settings.cloudSave':        { ua: '⬆️ Зберегти в хмару',                                          en: '⬆️ Save to cloud',                                            es: '⬆️ Guardar en la nube' },
  'settings.cloudAutoLabel':   { ua: '🔄 Авто-збереження:',                                          en: '🔄 Auto-save:',                                                es: '🔄 Guardado automático:' },
  'settings.intervalOff':      { ua: 'Вимк',                                                         en: 'Off',                                                          es: 'Desact.' },
  'settings.interval30':       { ua: '30 хв',                                                        en: '30 min',                                                       es: '30 min' },
  'settings.interval60':       { ua: '1 год',                                                        en: '1 hr',                                                         es: '1 h' },
  'settings.interval360':      { ua: '6 год',                                                        en: '6 hrs',                                                        es: '6 h' },
  'settings.intervalDaily':    { ua: 'Щодня',                                                        en: 'Daily',                                                        es: 'Diario' },
  'settings.cloudRestoreLabel':{ ua: 'Відновити на цьому пристрої:',                                 en: 'Restore on this device:',                                      es: 'Restaurar en este dispositivo:' },
  'settings.cloudRestore':     { ua: '⬇️ Відновити',                                                 en: '⬇️ Restore',                                                  es: '⬇️ Restaurar' },
  'settings.cloudHintLine1':   { ua: 'Збережи ключ — він потрібен для відновлення.',                 en: 'Save your key — you’ll need it to restore.',                   es: 'Guarda tu clave — la necesitarás para restaurar.' },
  'settings.cloudHintLine2':   { ua: 'Дані доступні лише за ключем.',                                en: 'Data is only accessible with the key.',                        es: 'Los datos solo son accesibles con la clave.' },
  'settings.dangerTitle':      { ua: '⚠️ Небезпечна зона',                                           en: '⚠️ Danger zone',                                               es: '⚠️ Zona de peligro' },
  'settings.dangerDesc':       { ua: 'Незворотна дія — всі вивчені слова, серія днів та досягнення будуть видалені.', en: 'Irreversible action — all learned words, your streak, and achievements will be deleted.', es: 'Acción irreversible — se eliminarán todas las palabras aprendidas, tu racha y tus logros.' },
  'settings.resetBtn':         { ua: '↺ Скинути прогрес',                                            en: '↺ Reset progress',                                             es: '↺ Reiniciar progreso' },

  // Settings page — dynamic strings
  'settings.prefetchLoading':    { ua: 'Завантажується...',                            en: 'Downloading...',                            es: 'Descargando...' },
  'settings.withPhotos':         { ua: 'з фото',                                       en: 'with photos',                               es: 'con fotos' },
  'settings.prefetchDonePrefix': { ua: '✅ Готово:',                                    en: '✅ Done:',                                   es: '✅ Listo:' },
  'settings.prefetchImagesOf':   { ua: 'зображень з',                                  en: 'images out of',                             es: 'imágenes de' },
  'settings.prefetchPaused':     { ua: 'Призупинено:',                                 en: 'Paused:',                                   es: 'Pausado:' },
  'settings.prefetchReady':      { ua: 'Готово до завантаження',                       en: 'Ready to download',                         es: 'Listo para descargar' },
  'settings.images':             { ua: 'зображень',                                    en: 'images',                                    es: 'imágenes' },
  'settings.pixabayKeySaved':    { ua: '✅ Ключ збережено. Нові слова отримають фото автоматично.', en: '✅ Key saved. New words will get photos automatically.', es: '✅ Clave guardada. Las nuevas palabras recibirán fotos automáticamente.' },
  'settings.pixabayNoKey':       { ua: 'Ключ не вказано — використовується лише Wikipedia.', en: 'No key set — only Wikipedia is used.',  es: 'No hay clave — solo se usa Wikipedia.' },
  'settings.notifNotSupported':  { ua: 'Браузер не підтримує сповіщення',               en: 'Your browser doesn’t support notifications', es: 'Tu navegador no admite notificaciones' },
  'settings.notifBlocked':       { ua: '❌ Заблоковано — дозволь в браузері',           en: '❌ Blocked — allow it in your browser',      es: '❌ Bloqueado — permítelo en tu navegador' },
  'settings.notifBlockedShort':  { ua: '🔒 Заблоковано',                                en: '🔒 Blocked',                                 es: '🔒 Bloqueado' },
  'settings.notifReminderAt':    { ua: '✅ Нагадування о',                              en: '✅ Reminder at',                             es: '✅ Recordatorio a las' },
  'settings.notifGrantedOff':    { ua: 'Дозвіл є, але сповіщення вимкнено',             en: 'Permission granted, but notifications are off', es: 'Permiso concedido, pero las notificaciones están desactivadas' },
  'settings.notifPromptToEnable':{ ua: 'Натисни «Дозволити» щоб отримувати нагадування', en: 'Tap “Allow” to get reminders',              es: 'Toca «Permitir» para recibir recordatorios' },
  'settings.cloudJustNow':       { ua: 'щойно',                                        en: 'just now',                                   es: 'ahora mismo' },
  'settings.cloudMinAgo':        { ua: 'хв тому',                                      en: 'min ago',                                    es: 'min atrás' },
  'settings.cloudHourAgo':       { ua: 'год тому',                                     en: 'hr ago',                                     es: 'h atrás' },
  'settings.cloudDayAgo':        { ua: 'дн тому',                                      en: 'days ago',                                   es: 'días atrás' },
  'settings.cloudAutoPrefix':    { ua: 'Авто:',                                        en: 'Auto:',                                      es: 'Auto:' },
  'settings.cloudSyncError':     { ua: '⚠️ Помилка синхронізації',                     en: '⚠️ Sync error',                              es: '⚠️ Error de sincronización' },
  'settings.cloudCopied':        { ua: '✅ Скопійовано',                                en: '✅ Copied',                                  es: '✅ Copiado' },
  'settings.cloudSaving':        { ua: 'Збереження...',                                en: 'Saving...',                                  es: 'Guardando...' },
  'settings.cloudSaved':         { ua: '✅ Збережено!',                                 en: '✅ Saved!',                                  es: '✅ ¡Guardado!' },
  'settings.cloudAutoOn':        { ua: 'Авто-збереження увімкнено',                    en: 'Auto-save enabled',                          es: 'Guardado automático activado' },
  'settings.cloudAutoOff':       { ua: 'Авто-збереження вимкнено',                     en: 'Auto-save disabled',                         es: 'Guardado automático desactivado' },
  'settings.cloudEnterKey':      { ua: 'Введи ключ синхронізації',                     en: 'Enter your sync key',                        es: 'Introduce tu clave de sincronización' },
  'settings.cloudRestoreConfirm':{ ua: 'Поточний прогрес буде замінено даними з хмари. Продовжити?', en: 'Your current progress will be replaced with data from the cloud. Continue?', es: 'Tu progreso actual se reemplazará con los datos de la nube. ¿Continuar?' },
  'settings.cloudLoading':       { ua: 'Завантаження...',                              en: 'Loading...',                                 es: 'Cargando...' },
  'settings.cloudRestoreSuccess':{ ua: '✅ Успішно! Перезавантаження...',               en: '✅ Success! Reloading...',                   es: '✅ ¡Éxito! Recargando...' },
  'settings.cloudKeyTooShort':   { ua: 'Ключ занадто короткий',                        en: 'Key is too short',                           es: 'La clave es demasiado corta' },
  'settings.cloudDataNotFound':  { ua: 'Дані не знайдено',                             en: 'Data not found',                             es: 'Datos no encontrados' },
  'settings.voiceOffline':       { ua: 'офлайн',                                       en: 'offline',                                    es: 'sin conexión' },
  'settings.voiceOnline':        { ua: 'онлайн',                                       en: 'online',                                     es: 'en línea' },
  'settings.voicesNotFound':     { ua: 'Голоси не знайдено. Спробуйте оновити сторінку.', en: 'No voices found. Try refreshing the page.', es: 'No se encontraron voces. Intenta actualizar la página.' },
  'settings.enVoicesTitle':      { ua: 'Англійські голоси (EN→UA картки)',          en: 'English voices (EN→UA cards)',                  es: 'Voces en inglés (tarjetas EN→UA)' },
  'settings.ukVoicesTitle':      { ua: 'Українські голоси (UA→EN картки)',          en: 'Ukrainian voices (UA→EN cards)',                es: 'Voces en ucraniano (tarjetas UA→EN)' },
  'settings.noUkVoicesTitle':    { ua: 'Українські голоси не знайдено',             en: 'No Ukrainian voices found',                     es: 'No se encontraron voces en ucraniano' },
  'settings.noUkVoicesDesc':     { ua: 'Для озвучення UA→EN карток потрібно встановити Ukrainian TTS.<br><b>Windows:</b> Налаштування → Час і мова → Мовлення → "Polina" або "Ostap"', en: 'To hear UA→EN cards spoken, install a Ukrainian TTS voice.<br><b>Windows:</b> Settings → Time & Language → Speech → "Polina" or "Ostap"', es: 'Para escuchar las tarjetas UA→EN, instala una voz TTS ucraniana.<br><b>Windows:</b> Configuración → Hora e idioma → Voz → "Polina" u "Ostap"' },
  'settings.esVoicesTitle':      { ua: 'Іспанські голоси (картки з ES)',             en: 'Spanish voices (ES cards)',                     es: 'Voces en español (tarjetas con ES)' },
  'settings.noEsVoicesTitle':    { ua: 'Іспанські голоси не знайдено',              en: 'No Spanish voices found',                       es: 'No se encontraron voces en español' },
  'settings.noEsVoicesDesc':     { ua: 'Для озвучення карток з іспанською потрібно встановити Spanish TTS.<br><b>Windows:</b> Налаштування → Час і мова → Мовлення → "Helena" або "Pablo"', en: 'To hear Spanish cards spoken, install a Spanish TTS voice.<br><b>Windows:</b> Settings → Time & Language → Speech → "Helena" or "Pablo"', es: 'Para escuchar las tarjetas en español, instala una voz TTS en español.<br><b>Windows:</b> Configuración → Hora e idioma → Voz → "Helena" o "Pablo"' },
  'settings.swTitleOn':          { ua: 'Star Wars режим (ON) — натисни щоб вимкнути',   en: 'Star Wars mode (ON) — tap to turn off',     es: 'Modo Star Wars (ON) — toca para desactivarlo' },
  'settings.swTitle':            { ua: 'Star Wars режим',                              en: 'Star Wars mode',                             es: 'Modo Star Wars' },
  'settings.voicesFoundLabel':   { ua: 'Знайдено',                                     en: 'Found',                                      es: 'Encontradas' },
  'settings.voicesLabel':        { ua: 'голосів. UA голоси:',                          en: 'voices. UA voices:',                         es: 'voces. Voces UA:' },
  'settings.notFound':           { ua: 'не знайдено',                                  en: 'none found',                                 es: 'ninguna encontrada' },

  // ── Duel ──────────────────────────────────────────────────────
  // Lobby
  'duel.leaderboard':     { ua: '📊 Рейтинг профілів',                 en: '📊 Profile Leaderboard',                es: '📊 Clasificación de perfiles' },
  'duel.online':          { ua: '⚡ Онлайн дуель',                     en: '⚡ Online Duel',                        es: '⚡ Duelo en línea' },
  'duel.mode':            { ua: 'Режим:',                               en: 'Mode:',                                es: 'Modo:' },
  'duel.category':        { ua: 'Категорія слів:',                     en: 'Word Category:',                       es: 'Categoría de palabras:' },
  'duel.history':         { ua: '📋 Останні дуелі',                    en: '📋 Recent Duels',                       es: '📋 Duelos recientes' },
  'duel.create':          { ua: '⚔️ Створити кімнату',                 en: '⚔️ Create Room',                        es: '⚔️ Crear sala' },
  'duel.shareCode':       { ua: 'Поділись кодом з другом:',            en: 'Share the code with a friend:',         es: 'Comparte el código con un amigo:' },
  'duel.waitingOpp':      { ua: 'Чекаємо поки суперник введе код…',    en: 'Waiting for opponent to enter the code…', es: 'Esperando que el oponente ingrese el código…' },
  'duel.cancel':          { ua: '✕ Скасувати',                         en: '✕ Cancel',                             es: '✕ Cancelar' },
  'duel.orEnterCode':     { ua: 'або введи код кімнати друга:',        en: 'or enter your friend\'s room code:',    es: 'o ingresa el código de sala de tu amigo:' },
  'duel.join':            { ua: '→ Приєднатись',                       en: '→ Join',                               es: '→ Unirse' },
  'duel.modeNote':        { ua: 'Режим обирає той, хто створює кімнату', en: 'Mode is chosen by the room creator', es: 'El modo lo elige quien crea la sala' },
  'duel.spectate':        { ua: '👀 Спостерігати',                     en: '👀 Spectate',                           es: '👀 Observar' },
  'duel.reply':           { ua: '📬 Відповісти',                       en: '📬 Reply',                             es: '📬 Responder' },
  'duel.sendChallenge':   { ua: '📬 Надіслати виклик (async · 24год)', en: '📬 Send Challenge (async · 24h)',        es: '📬 Enviar desafío (async · 24h)' },
  'duel.tournament':      { ua: '🏟️ Турнір',                           en: '🏟️ Tournament',                         es: '🏟️ Torneo' },
  'duel.tourn4':          { ua: '4 гравці',                            en: '4 players',                            es: '4 jugadores' },
  'duel.tourn8':          { ua: '8 гравців',                           en: '8 players',                            es: '8 jugadores' },
  'duel.tournJoin':       { ua: '➡️ Вступити',                         en: '➡️ Join',                              es: '➡️ Unirse' },
  'duel.tournCode':       { ua: 'Код турніру:',                        en: 'Tournament code:',                     es: 'Código del torneo:' },
  // Game
  'duel.getReady':        { ua: 'Готуйся!',                            en: 'Get ready!',                           es: '¡Prepárate!' },
  'duel.you':             { ua: 'Ти',                                  en: 'You',                                  es: 'Tú' },
  'duel.opp':             { ua: 'Суперник',                            en: 'Opponent',                             es: 'Oponente' },
  'duel.player':          { ua: 'Гравець',                             en: 'Player',                               es: 'Jugador' },
  'duel.time':            { ua: 'Час:',                                en: 'Time:',                                es: 'Tiempo:' },
  'duel.writePrompt':     { ua: 'Введи переклад англійською…',         en: 'Enter translation in English…',         es: 'Escribe la traducción en inglés…' },
  'duel.writeHint':       { ua: 'Введи англійською',                  en: 'Type in English',                      es: 'Escribe en inglés' },
  'duel.check':           { ua: 'Перевірити',                         en: 'Check',                                es: 'Verificar' },
  'duel.next':            { ua: 'Далі →',                             en: 'Next →',                               es: 'Siguiente →' },
  'duel.newDuel':         { ua: '🔄 Нова дуель',                      en: '🔄 New Duel',                           es: '🔄 Nueva duelo' },
  'duel.rematch':         { ua: '⚔️ Реванш',                          en: '⚔️ Rematch',                            es: '⚔️ Revancha' },
  'duel.sendReaction':    { ua: 'Надіслати реакцію суперникам:',      en: 'Send a reaction to opponents:',         es: 'Enviar una reacción a los oponentes:' },
  'duel.react.good':      { ua: 'Добре!',                             en: 'Good!',                                es: '¡Bien!' },
  'duel.react.oops':      { ua: 'Ой!',                                en: 'Oops!',                                es: '¡Ups!' },
  'duel.react.fire':      { ua: 'Вогонь!',                            en: 'Fire!',                                es: '¡Fuego!' },
  'duel.react.lol':       { ua: 'Ха!',                                en: 'Haha!',                                es: '¡Ja!' },
  'duel.react.wow':       { ua: 'Неймовірно!',                        en: 'Unbelievable!',                        es: '¡Increíble!' },
  // Feedback
  'duel.correct':         { ua: '✓ Правильно!',                       en: '✓ Correct!',                           es: '✓ ¡Correcto!' },
  'duel.timeout':         { ua: '⏰ Час вийшов!',                     en: '⏰ Time\'s up!',                        es: '⏰ ¡Se acabó el tiempo!' },
  'duel.doublePts':       { ua: '🎯 +2 очки!',                        en: '🎯 +2 points!',                         es: '🎯 ¡+2 puntos!' },
  'duel.waiting':         { ua: '⏳ Чекаємо суперника…',              en: '⏳ Waiting for opponent…',               es: '⏳ Esperando al oponente…' },
  'duel.sent':            { ua: '✅ Надіслано',                        en: '✅ Sent',                               es: '✅ Enviado' },
  // Result
  'duel.result.won':      { ua: 'Ти переміг!',                        en: 'You won!',                             es: '¡Ganaste!' },
  'duel.result.tie':      { ua: 'Нічия!',                             en: 'Draw!',                                es: '¡Empate!' },
  'duel.result.lost':     { ua: 'Суперник переміг',                   en: 'Opponent won',                         es: 'El oponente ganó' },
  'duel.wins':            { ua: 'перемог',                            en: 'wins',                                 es: 'victorias' },
  'duel.losses':          { ua: 'поразок',                            en: 'losses',                               es: 'derrotas' },
  'duel.ties':            { ua: 'нічия',                              en: 'draws',                                es: 'empates' },
  // Best-of-3 series
  'duel.series.label':    { ua: 'Серія:',                             en: 'Series:',                              es: 'Serie:' },
  'duel.series.win':      { ua: 'твоя перемога',                     en: 'your win',                             es: 'tu victoria' },
  'duel.series.tie':      { ua: 'нічия',                             en: 'draw',                                 es: 'empate' },
  'duel.series.loss':     { ua: 'перемога суперника',                en: 'opponent\'s win',                      es: 'victoria del oponente' },
  'duel.nextRound':       { ua: '▶ Наступний раунд',                 en: '▶ Next Round',                         es: '▶ Siguiente ronda' },
  // Options
  'duel.difficulty':      { ua: 'Складність (CEFR рівень слів):',    en: 'Difficulty (CEFR word level):',         es: 'Dificultad (nivel CEFR):' },
  'duel.format':          { ua: 'Формат:',                           en: 'Format:',                              es: 'Formato:' },
  'duel.oneRound':        { ua: 'Один раунд',                        en: 'Single round',                         es: 'Una ronda' },
  'duel.hints':           { ua: 'Підказок',                          en: 'Hints',                                es: 'Pistas' },
  'duel.hintsUnlimited':  { ua: '∞ Без ліміту',                      en: '∞ Unlimited',                          es: '∞ Sin límite' },
  'duel.hints3':          { ua: '3 підказки',                        en: '3 hints',                              es: '3 pistas' },
  'duel.hints1':          { ua: '1 підказка',                        en: '1 hint',                               es: '1 pista' },
  // Mode labels/descs
  'duel.mode.quiz':       { ua: 'Тест',    en: 'Quiz',    es: 'Test' },
  'duel.mode.quiz.desc':  { ua: '4 варіанти · EN→UA', en: '4 options · EN→UA', es: '4 opciones · EN→UA' },
  'duel.mode.reverse':    { ua: 'Навпаки', en: 'Reverse', es: 'Inverso' },
  'duel.mode.reverse.desc': { ua: '4 варіанти · UA→EN', en: '4 options · UA→EN', es: '4 opciones · UA→EN' },
  'duel.mode.write':      { ua: 'Письмо',  en: 'Write',   es: 'Escribir' },
  'duel.mode.write.desc': { ua: 'Введи переклад', en: 'Type the translation', es: 'Escribe la traducción' },
  'duel.mode.tempo':      { ua: 'Темп',    en: 'Tempo',   es: 'Tempo' },
  // Difficulty descs
  'duel.diff.mixed.desc': { ua: 'Усі рівні разом',      en: 'All levels together',  es: 'Todos los niveles' },
  'duel.diff.A1.desc':    { ua: 'Початківець',           en: 'Beginner',             es: 'Principiante' },
  'duel.diff.A2.desc':    { ua: 'Елементарний',          en: 'Elementary',           es: 'Elemental' },
  'duel.diff.B1.desc':    { ua: 'Середній',              en: 'Intermediate',         es: 'Intermedio' },
  'duel.diff.B2.desc':    { ua: 'Вище середнього',       en: 'Upper Intermediate',   es: 'Intermedio alto' },
  'duel.diff.C1.desc':    { ua: 'Просунутий',            en: 'Advanced',             es: 'Avanzado' },
  'duel.diff.C2.desc':    { ua: 'Майстерний',            en: 'Mastery',              es: 'Maestría' },
  // Power-ups
  'duel.pu.double.desc':  { ua: 'Наступна правильна відповідь = 2 очки', en: 'Next correct answer = 2 points', es: 'Siguiente respuesta correcta = 2 puntos' },
  'duel.pu.skip.label':   { ua: 'Скіп',   en: 'Skip',   es: 'Saltar' },
  'duel.pu.skip.desc':    { ua: 'Пропустити питання без штрафу', en: 'Skip the question without penalty', es: 'Saltar la pregunta sin penalización' },
  'duel.pu.freeze.label': { ua: 'Мороз',  en: 'Freeze', es: 'Congelar' },
  'duel.pu.freeze.desc':  { ua: '[Тільки Темп] Заморозити таймер суперника на 5с', en: '[Tempo only] Freeze opponent\'s timer for 5s', es: '[Solo Tempo] Congela el temporizador del oponente 5s' },
  'duel.pu.freeze.unavail': { ua: '🧊 Freeze — доступно тільки в режимі Темп', en: '🧊 Freeze — available only in Tempo mode', es: '🧊 Freeze — disponible solo en modo Tempo' },
  'duel.pu.left':         { ua: 'залишилось', en: 'left',  es: 'restante' },
  'duel.pu.used':         { ua: 'використано', en: 'used', es: 'usado' },
  // Toast messages
  'duel.toast.double':    { ua: '🎯 Подвійні очки активовано!',     en: '🎯 Double points activated!',       es: '🎯 ¡Puntos dobles activados!' },
  'duel.toast.skip':      { ua: '⏩ Питання пропущено',             en: '⏩ Question skipped',               es: '⏩ Pregunta omitida' },
  'duel.toast.freeze':    { ua: '🧊 Суперника заморожено на 5с!',   en: '🧊 Opponent frozen for 5s!',        es: '🧊 ¡Oponente congelado 5s!' },
  'duel.hint.btn':        { ua: '💡 Підказка',                      en: '💡 Hint',                           es: '💡 Pista' },
  'duel.allWords':        { ua: '🌐 Всі слова',                     en: '🌐 All words',                      es: '🌐 Todas las palabras' },
  // Errors / status
  'duel.creating':        { ua: 'Створення...',                     en: 'Creating...',                      es: 'Creando...' },
  'duel.connecting':      { ua: 'Підключення...',                   en: 'Connecting...',                    es: 'Conectando...' },
  'duel.enterCode':       { ua: '❌ Введіть код кімнати',           en: '❌ Enter a room code',              es: '❌ Ingresa un código de sala' },
  'duel.err.notFound':    { ua: 'Кімнату не знайдено',              en: 'Room not found',                   es: 'Sala no encontrada' },
  'duel.err.taken':       { ua: 'Кімната вже зайнята',              en: 'Room is already taken',             es: 'La sala ya está ocupada' },
  'duel.err.finished':    { ua: 'Дуель вже завершена',              en: 'Duel is already finished',          es: 'El duelo ya terminó' },
  'duel.rematch.ask':     { ua: '🔄 Попроси суперника створити нову кімнату', en: '🔄 Ask your opponent to create a new room', es: '🔄 Pide a tu oponente que cree una nueva sala' },
  // Spectate
  'duel.spectate.title':  { ua: '👀 Спостерігати за дуеллю',       en: '👀 Spectate a Duel',                es: '👀 Observar un duelo' },
  'duel.spectate.desc':   { ua: 'Введи код кімнати, яку хочеш подивитись', en: 'Enter the room code you want to watch', es: 'Ingresa el código de sala que deseas ver' },
  'duel.spectate.mode':   { ua: '👀 Режим спостерігача',            en: '👀 Spectator mode',                 es: '👀 Modo espectador' },
  'duel.spectate.viewers': { ua: 'гляд.',                           en: 'viewers',                          es: 'espectadores' },
  'duel.spectate.waitP2': { ua: 'Очікуємо P2…',                    en: 'Waiting for P2…',                  es: 'Esperando P2…' },
  'duel.spectate.leave':  { ua: '✕ Вийти',                         en: '✕ Leave',                          es: '✕ Salir' },
  // Async challenge
  'duel.async.send':      { ua: '📬 Надіслати виклик',             en: '📬 Send Challenge',                 es: '📬 Enviar desafío' },
  'duel.async.reply.title': { ua: '📬 Відповісти на виклик',       en: '📬 Reply to a Challenge',           es: '📬 Responder a un desafío' },
  'duel.async.reply.desc': { ua: 'Введи код виклику, який тобі надіслали (дійсний 24 години)', en: 'Enter the challenge code sent to you (valid 24 hours)', es: 'Ingresa el código de desafío enviado (válido 24 horas)' },
  'duel.async.24h':       { ua: '24г на відповідь',                en: '24h to reply',                     es: '24h para responder' },
  'duel.err.chal.notFound': { ua: 'Виклик не знайдено',            en: 'Challenge not found',              es: 'Desafío no encontrado' },
  'duel.err.chal.finished': { ua: 'Виклик вже завершено',          en: 'Challenge already completed',      es: 'Desafío ya completado' },
  'duel.err.chal.expired':  { ua: 'Виклик прострочений (24 год)', en: 'Challenge expired (24h)',           es: 'Desafío expirado (24h)' },
  'duel.err.chal.taken':    { ua: 'Хтось вже відповів на цей виклик', en: 'Someone already replied to this challenge', es: 'Alguien ya respondió a este desafío' },
  // Session resume
  'duel.resume.title':    { ua: '🔄 Незавершена дуель',            en: '🔄 Unfinished Duel',               es: '🔄 Duelo sin terminar' },
  'duel.resume.pts':      { ua: 'очок',                            en: 'pts',                              es: 'pts' },
  'duel.resume.opp':      { ua: 'суперник:',                       en: 'opponent:',                        es: 'oponente:' },
  'duel.resume.continue': { ua: 'Продовжити',                      en: 'Continue',                         es: 'Continuar' },
  // Tournament
  'duel.tourn.join.title': { ua: '🏟️ Вступити в турнір',          en: '🏟️ Join a Tournament',             es: '🏟️ Unirse a un torneo' },
  'duel.tourn.join.desc':  { ua: 'Введи код турніру від організатора', en: 'Enter the tournament code from the organizer', es: 'Ingresa el código del torneo del organizador' },
  'duel.tourn.err.notFound': { ua: 'Турнір не знайдено',           en: 'Tournament not found',             es: 'Torneo no encontrado' },
  'duel.tourn.err.started':  { ua: 'Турнір вже почався',           en: 'Tournament has already started',   es: 'El torneo ya comenzó' },
  'duel.tourn.err.finished': { ua: 'Турнір завершено',             en: 'Tournament is finished',           es: 'Torneo finalizado' },
  'duel.tourn.err.noSlot':   { ua: 'Немає вільних місць',          en: 'No free slots',                    es: 'Sin plazas libres' },
  'duel.tourn.slot':         { ua: 'Слот',                         en: 'Slot',                             es: 'Puesto' },
  'duel.tourn.players':      { ua: 'гравців',                      en: 'players',                          es: 'jugadores' },
  'duel.tourn.start':        { ua: '⚔️ Почати турнір',             en: '⚔️ Start Tournament',              es: '⚔️ Iniciar torneo' },
  'duel.tourn.cancel':       { ua: '✕ Скасувати',                  en: '✕ Cancel',                         es: '✕ Cancelar' },
  'duel.tourn.champion':     { ua: 'Переможець турніру:',          en: 'Tournament champion:',             es: 'Campeón del torneo:' },
  'duel.tourn.champ.excl':   { ua: 'чемпіон!',                    en: 'champion!',                        es: '¡campeón!' },
  'duel.tourn.match':        { ua: 'Матч',                         en: 'Match',                            es: 'Partido' },
  'duel.tourn.now':          { ua: '▶ Зараз',                      en: '▶ Now',                            es: '▶ Ahora' },
  'duel.tourn.leave':        { ua: '← Вийти',                     en: '← Leave',                          es: '← Salir' },
  'duel.tourn.play':         { ua: '⚔️ Грати зараз!',              en: '⚔️ Play now!',                     es: '⚔️ ¡Jugar ahora!' },
  'duel.tourn.rejoin':       { ua: '▶ Продовжити матч',            en: '▶ Continue match',                 es: '▶ Continuar partida' },
  'duel.tourn.waiting.match': { ua: 'Ідуть матч',                  en: 'Match in progress',                es: 'Partida en curso' },
  'duel.tourn.turn.later':    { ua: 'Твій черга пізніше',          en: 'Your turn later',                  es: 'Tu turno después' },
  // Tournament round names
  'duel.round.final':     { ua: '🏆 Фінал',                        en: '🏆 Final',                         es: '🏆 Final' },
  'duel.round.semi':      { ua: '🥈 Півфінал',                     en: '🥈 Semifinal',                     es: '🥈 Semifinal' },
  'duel.round.quarter':   { ua: '🥉 Чвертьфінал',                  en: '🥉 Quarterfinal',                  es: '🥉 Cuartos de final' },
  'duel.round.n':         { ua: 'Раунд',                           en: 'Round',                            es: 'Ronda' },
  // Confirm dialog
  'duel.confirm.leave.title': { ua: 'Покинути дуель?',             en: 'Leave the Duel?',                  es: '¿Abandonar el duelo?' },
  'duel.confirm.leave.msg':   { ua: 'Поточний матч буде зараховано як поразку.', en: 'The current match will be counted as a loss.', es: 'El partido actual se contará como derrota.' },
  'duel.confirm.leave.ok':    { ua: 'Залишити',                    en: 'Leave',                            es: 'Salir' },

  'duel.noProfiles':          { ua: 'Немає профілів.',                         en: 'No profiles.',                        es: 'No hay perfiles.' },
  'duel.noHistory':           { ua: 'Ще немає зіграних дуелей',                en: 'No duels played yet',                 es: 'Aún no hay duelos jugados' },
  'duel.diff.mixed':          { ua: 'Мікс',                                    en: 'Mix',                                 es: 'Mix' },
  'duel.stats.words':         { ua: 'Слів',                                    en: 'Words',                               es: 'Palabras' },
  'duel.stats.streak':        { ua: 'Серія',                                   en: 'Streak',                              es: 'Racha' },
  'duel.stats.week':          { ua: 'Тиждень',                                 en: 'Week',                                es: 'Semana' },
  'duel.frozen':              { ua: '🧊 Заморожено на',                        en: '🧊 Frozen for',                       es: '🧊 Congelado por' },
  'duel.mode.tempo.desc':     { ua: '4 варіанти · 4с/питання',               en: '4 options · 4s/question',             es: '4 opciones · 4s/pregunta' },
  'duel.hint.info.title':     { ua: '💡 Підказки у режимі Письмо',            en: '💡 Hints in Write mode',              es: '💡 Pistas en modo Escribir' },
  'duel.hint.info.p1':        { ua: 'Під час дуелі в режимі <b>Письмо</b> можна підглянути першу третину слова.', en: 'During a duel in <b>Write</b> mode, you can peek at the first third of the word.', es: 'Durante un duelo en modo <b>Escribir</b>, puedes ver el primer tercio de la palabra.' },
  'duel.hint.info.ul':        { ua: '<b>Без ліміту</b> — підказок скільки завгодно', en: '<b>Unlimited</b> — as many hints as you want', es: '<b>Sin límite</b> — tantas pistas como quieras' },
  'duel.hint.info.3':         { ua: '<b>3 підказки</b> — можна підглянути 3 рази за гру', en: '<b>3 hints</b> — can peek 3 times per game', es: '<b>3 pistas</b> — puedes ver 3 veces por juego' },
  'duel.hint.info.1':         { ua: '<b>1 підказка</b> — тільки один раз, думай!', en: '<b>1 hint</b> — only once, think!', es: '<b>1 pista</b> — solo una vez, ¡piénsalo!' },
  'duel.pu.info.title':       { ua: '🎯 Power-ups — спеціальні здібності',    en: '🎯 Power-ups — special abilities',    es: '🎯 Power-ups — habilidades especiales' },
  'duel.pu.info.desc':        { ua: 'Кожен гравець отримує по 1 кожного типу на гру. Використай у потрібний момент!', en: 'Each player gets 1 of each type per game. Use them at the right moment!', es: 'Cada jugador recibe 1 de cada tipo por juego. ¡Úsalos en el momento adecuado!' },
  'duel.pu.double.info':      { ua: 'Наступна <b>правильна</b> відповідь дає <b>2 очки</b> замість 1. Активуй перед складним питанням!', en: 'The next <b>correct</b> answer gives <b>2 points</b> instead of 1. Activate before a hard question!', es: 'La siguiente respuesta <b>correcta</b> da <b>2 puntos</b> en vez de 1. ¡Actívalo antes de una pregunta difícil!' },
  'duel.pu.skip.info':        { ua: 'Пропустити поточне питання <b>без штрафу</b>. Рахунок не зміниться.', en: 'Skip the current question <b>without penalty</b>. Score won\'t change.', es: 'Omite la pregunta actual <b>sin penalización</b>. El marcador no cambiará.' },
  'duel.pu.freeze.info':      { ua: 'Зупиняє таймер суперника на <b>5 секунд</b>. Доступно тільки в режимі Темп — у інших режимах неактивно.', en: 'Stops the opponent\'s timer for <b>5 seconds</b>. Available only in Tempo mode — inactive in other modes.', es: 'Detiene el temporizador del oponente durante <b>5 segundos</b>. Disponible solo en modo Tempo — inactivo en otros modos.' },
  'duel.pu.freeze.tag':       { ua: 'тільки ⚡ Темп',                          en: '⚡ Tempo only',                       es: 'solo ⚡ Tempo' },

  // Settings-related modals (export/import/reset/clear)
  'modal.exportTitle':   { ua: '📤 Твій код прогресу',                                 en: '📤 Your progress code',                              es: '📤 Tu código de progreso' },
  'modal.exportSub':     { ua: 'Виділи весь текст і скопіюй його. Збережи в нотатках або надішли собі.', en: 'Select all the text and copy it. Save it in your notes or send it to yourself.', es: 'Selecciona todo el texto y cópialo. Guárdalo en tus notas o envíatelo a ti mismo.' },
  'modal.selectAll':     { ua: 'Виділити все',                                         en: 'Select all',                                          es: 'Seleccionar todo' },
  'modal.copiedExcl':    { ua: '✓ Скопійовано!',                                       en: '✓ Copied!',                                           es: '✓ ¡Copiado!' },
  'modal.done':          { ua: 'Готово',                                               en: 'Done',                                                es: 'Hecho' },
  'modal.importTitle':   { ua: '📥 Імпорт прогресу',                                   en: '📥 Import progress',                                 es: '📥 Importar progreso' },
  'modal.importSub':     { ua: 'Встав сюди код прогресу який ти скопіював раніше через «Експорт»', en: 'Paste the progress code you copied earlier via “Export”', es: 'Pega aquí el código de progreso que copiaste antes con «Exportar»' },
  'modal.importPlaceholder': { ua: 'Встав код тут...',                                 en: 'Paste your code here...',                             es: 'Pega tu código aquí...' },
  'modal.cancel':        { ua: 'Відміна',                                              en: 'Cancel',                                              es: 'Cancelar' },
  'modal.import':        { ua: 'Імпортувати',                                          en: 'Import',                                              es: 'Importar' },
  'modal.importEmpty':   { ua: 'Встав код прогресу',                                   en: 'Paste your progress code',                            es: 'Pega tu código de progreso' },
  'modal.importInvalid': { ua: '❌ Невірний код — перевір чи повністю скопіював',       en: '❌ Invalid code — check that you copied it in full',  es: '❌ Código inválido — comprueba que lo copiaste completo' },
  'modal.importedExcl':  { ua: '✓ Імпортовано!',                                       en: '✓ Imported!',                                         es: '✓ ¡Importado!' },
  'modal.resetTitle':    { ua: 'Скинути прогрес?',                                     en: 'Reset progress?',                                     es: '¿Reiniciar progreso?' },
  'modal.resetWarn':     { ua: 'Вивчені слова, серія днів, денна ціль та досягнення будуть видалені безповоротно.', en: 'Learned words, your streak, daily goal, and achievements will be permanently deleted.', es: 'Las palabras aprendidas, tu racha, tu meta diaria y tus logros se eliminarán de forma permanente.' },
  'modal.reset':         { ua: 'Скинути',                                              en: 'Reset',                                               es: 'Reiniciar' },
  'modal.imgClearTitle': { ua: 'Очистити кеш зображень?',                              en: 'Clear the image cache?',                              es: '¿Borrar la caché de imágenes?' },
  'modal.imgClearWarn':  { ua: 'Всі завантажені фото будуть видалені з кешу. Зображення завантажуватимуться знову при перегляді карток.', en: 'All downloaded photos will be removed from the cache. Images will be re-downloaded as you browse cards.', es: 'Todas las fotos descargadas se eliminarán de la caché. Las imágenes se volverán a descargar al ver las tarjetas.' },
  'modal.cancelAlt':     { ua: 'Скасувати',                                            en: 'Cancel',                                              es: 'Cancelar' },
  'modal.clear':         { ua: 'Очистити',                                             en: 'Clear',                                               es: 'Borrar' },

  // ── Idioms page ────────────────────────────────────────────
  'idioms.pageTitle':  { ua: '💬 Ідіоми',                              en: '💬 Idioms',                              es: '💬 Modismos' },
  'idioms.tabEn':      { ua: 'Англійські ідіоми',                      en: 'English idioms',                        es: 'Modismos en inglés' },
  'idioms.tabUa':      { ua: 'Українські ідіоми → англійською',        en: 'Ukrainian idioms → English',            es: 'Modismos ucranianos → inglés' },
  'idioms.searchPlaceholder': { ua: '🔍 Пошук ідіоми...',              en: '🔍 Search an idiom...',                 es: '🔍 Buscar un modismo...' },
  'idioms.empty':      { ua: 'Нічого не знайдено 🤷',                  en: 'Nothing found 🤷',                      es: 'No se encontró nada 🤷' },

  // ── Custom words modal ─────────────────────────────────────
  'custom.title':        { ua: '➕ Власні слова',                          en: '➕ Custom words',                          es: '➕ Palabras propias' },
  'custom.desc':         { ua: 'Додайте будь-яке слово яке хочете вивчити', en: 'Add any word you want to learn',          es: 'Añade cualquier palabra que quieras aprender' },
  'custom.enPlaceholder':   { ua: 'English word *',                          en: 'English word *',                         es: 'Palabra en inglés *' },
  'custom.uaPlaceholder':   { ua: 'Переклад * (обов\'язково)',               en: 'Translation * (required)',               es: 'Traducción * (obligatorio)' },
  'custom.exEnPlaceholder': { ua: 'Приклад англійською (необов\'язково)',    en: 'Example in English (optional)',          es: 'Ejemplo en inglés (opcional)' },
  'custom.exUaPlaceholder': { ua: 'Переклад прикладу (необов\'язково)',      en: 'Example translation (optional)',         es: 'Traducción del ejemplo (opcional)' },
  'custom.saveBtn':      { ua: 'Додати слово',                              en: 'Add word',                                es: 'Añadir palabra' },
  'custom.deleteTitle':  { ua: 'Видалити',                                  en: 'Delete',                                  es: 'Eliminar' },
  'custom.empty':        { ua: 'Власних слів ще немає',                     en: 'No custom words yet',                     es: 'Aún no hay palabras propias' },
  'custom.errBothFields':{ ua: 'Введіть обидва поля',                       en: 'Fill in both fields',                     es: 'Completa ambos campos' },
  'custom.errDuplicate': { ua: '⚠️ Слово "{w}" вже є у словнику',           en: '⚠️ The word "{w}" is already in the dictionary', es: '⚠️ La palabra "{w}" ya está en el diccionario' },
  'custom.errTooShort':  { ua: 'Слово занадто коротке',                     en: 'The word is too short',                   es: 'La palabra es demasiado corta' },

  // ── Profiles ───────────────────────────────────────────────
  'profile.editTitle':     { ua: '✏️ Редагувати профіль',     en: '✏️ Edit profile',     es: '✏️ Editar perfil' },
  'profile.editTooltip':   { ua: 'Редагувати',                en: 'Edit',                es: 'Editar' },
  'profile.deleteTooltip': { ua: 'Видалити',                  en: 'Delete',              es: 'Eliminar' },
  'profile.namePlaceholder':    { ua: 'Ім\'я профіля...',         en: 'Profile name...',          es: 'Nombre del perfil...' },
  'profile.newNamePlaceholder': { ua: 'Ім\'я нового профіля...',  en: 'New profile name...',      es: 'Nombre del nuevo perfil...' },
  'profile.avatarLabel':   { ua: 'Аватар:',                   en: 'Avatar:',             es: 'Avatar:' },
  'profile.cancel':        { ua: 'Скасувати',                 en: 'Cancel',              es: 'Cancelar' },
  'profile.save':          { ua: 'Зберегти',                  en: 'Save',                es: 'Guardar' },
  'profile.create':        { ua: '+ Створити',                en: '+ Create',            es: '+ Crear' },
  'profile.createFull':    { ua: '+ Створити профіль',        en: '+ Create profile',    es: '+ Crear perfil' },
};

const LEVEL_NAMES_EN: Record<string, string> = {
  '🌌 Цивільний':           '🌌 Civilian',
  '✨ Чутливий до Сили':    '✨ Force-sensitive',
  '🟡 Падаван':             '🟡 Padawan',
  '🔵 Джедай-лицар':        '🔵 Jedi Knight',
  '🟢 Майстер Джедай':      '🟢 Jedi Master',
  '🟣 Член Ради':           '🟣 Council Member',
  '🔴 Ситх-лорд':           '🔴 Sith Lord',
  '⚡ Обраний':             '⚡ The Chosen One',
  '🌠 Балансувальник Сили': '🌠 Force Balancer',
  '🏆 Магістр Йода':        '🏆 Master Yoda',
};

const LEVEL_NAMES_ES: Record<string, string> = {
  '🌌 Цивільний':           '🌌 Civil',
  '✨ Чутливий до Сили':    '✨ Sensible a la Fuerza',
  '🟡 Падаван':             '🟡 Padawan',
  '🔵 Джедай-лицар':        '🔵 Caballero Jedi',
  '🟢 Майстер Джедай':      '🟢 Maestro Jedi',
  '🟣 Член Ради':           '🟣 Miembro del Consejo',
  '🔴 Ситх-лорд':           '🔴 Señor Sith',
  '⚡ Обраний':             '⚡ El Elegido',
  '🌠 Балансувальник Сили': '🌠 Equilibrador de la Fuerza',
  '🏆 Магістр Йода':        '🏆 Maestro Yoda',
};

export function levelName(name: string): string {
  const lang = getLang();
  if (lang === 'en') return LEVEL_NAMES_EN[name] ?? name;
  if (lang === 'es') return LEVEL_NAMES_ES[name] ?? name;
  return name;
}

const CATEGORY_NAMES_EN: Record<string, string> = {
  '🐾 Тварини':                            '🐾 Animals',
  '🐟 Морські істоти':                     '🐟 Sea creatures',
  '🌿 Рослини & Квіти':                    '🌿 Plants & Flowers',
  '🍎 Фрукти & Овочі':                     '🍎 Fruits & Vegetables',
  '🍕 Їжа & Страви':                       '🍕 Food & Dishes',
  '☕ Напої':                              '☕ Drinks',
  '🏠 Дім & Меблі':                        '🏠 Home & Furniture',
  '🔧 Інструменти & Предмети':             '🔧 Tools & Objects',
  '👕 Одяг & Аксесуари':                   '👕 Clothing & Accessories',
  '🚗 Транспорт':                          '🚗 Transport',
  '🌍 Природа & Погода':                   '🌍 Nature & Weather',
  '🏙️ Місто & Будівлі':                    '🏙️ City & Buildings',
  '🏥 Здоров\'я & Медицина':               '🏥 Health & Medicine',
  '💼 Робота & Бізнес':                    '💼 Work & Business',
  '🎓 Освіта & Наука':                     '🎓 Education & Science',
  '💻 Технології':                         '💻 Technology',
  '🎭 Мистецтво & Розваги':                '🎭 Arts & Entertainment',
  '⚽ Спорт':                              '⚽ Sports',
  '✈️ Подорожі':                           '✈️ Travel',
  '👨‍👩‍👧 Люди & Стосунки':                  '👨‍👩‍👧 People & Relationships',
  '😊 Емоції & Характер':                  '😊 Emotions & Character',
  '🕐 Час & Числа':                        '🕐 Time & Numbers',
  '🍳 Кулінарія':                          '🍳 Cooking',
  '💰 Гроші & Економіка':                  '💰 Money & Economy',
  '⚖️ Право & Суспільство':                '⚖️ Law & Society',
  '🔬 Наука & Природознавство':            '🔬 Science & Nature studies',
  '🎨 Кольори & Форми':                    '🎨 Colors & Shapes',
  '🗣️ Мова & Комунікація':                 '🗣️ Language & Communication',
  '🔤 Загальна лексика':                   '🔤 General vocabulary',
  '💬 Фрази, фразові дієслова & ідіоми':   '💬 Phrases, phrasal verbs & idioms',
};

const CATEGORY_NAMES_ES: Record<string, string> = {
  '🐾 Тварини':                            '🐾 Animales',
  '🐟 Морські істоти':                     '🐟 Criaturas marinas',
  '🌿 Рослини & Квіти':                    '🌿 Plantas y flores',
  '🍎 Фрукти & Овочі':                     '🍎 Frutas y verduras',
  '🍕 Їжа & Страви':                       '🍕 Comida y platos',
  '☕ Напої':                              '☕ Bebidas',
  '🏠 Дім & Меблі':                        '🏠 Casa y muebles',
  '🔧 Інструменти & Предмети':             '🔧 Herramientas y objetos',
  '👕 Одяг & Аксесуари':                   '👕 Ropa y accesorios',
  '🚗 Транспорт':                          '🚗 Transporte',
  '🌍 Природа & Погода':                   '🌍 Naturaleza y clima',
  '🏙️ Місто & Будівлі':                    '🏙️ Ciudad y edificios',
  '🏥 Здоров\'я & Медицина':               '🏥 Salud y medicina',
  '💼 Робота & Бізнес':                    '💼 Trabajo y negocios',
  '🎓 Освіта & Наука':                     '🎓 Educación y ciencia',
  '💻 Технології':                         '💻 Tecnología',
  '🎭 Мистецтво & Розваги':                '🎭 Arte y entretenimiento',
  '⚽ Спорт':                              '⚽ Deportes',
  '✈️ Подорожі':                           '✈️ Viajes',
  '👨‍👩‍👧 Люди & Стосунки':                  '👨‍👩‍👧 Personas y relaciones',
  '😊 Емоції & Характер':                  '😊 Emociones y carácter',
  '🕐 Час & Числа':                        '🕐 Tiempo y números',
  '🍳 Кулінарія':                          '🍳 Cocina',
  '💰 Гроші & Економіка':                  '💰 Dinero y economía',
  '⚖️ Право & Суспільство':                '⚖️ Derecho y sociedad',
  '🔬 Наука & Природознавство':            '🔬 Ciencia y naturaleza',
  '🎨 Кольори & Форми':                    '🎨 Colores y formas',
  '🗣️ Мова & Комунікація':                 '🗣️ Idioma y comunicación',
  '🔤 Загальна лексика':                   '🔤 Vocabulario general',
  '💬 Фрази, фразові дієслова & ідіоми':   '💬 Frases, verbos compuestos y modismos',
};

export function categoryName(name: string): string {
  const lang = getLang();
  if (lang === 'en') return CATEGORY_NAMES_EN[name] ?? name;
  if (lang === 'es') return CATEGORY_NAMES_ES[name] ?? name;
  return name;
}

const SKILL_NAMES_EN: Record<string, string> = {
  'Базове вітання':        'Basic greetings',
  'Числа і кольори':       'Numbers and colors',
  'Сім\'я та тіло':        'Family and body',
  'Повсякденні дії':       'Everyday actions',
  'Опис людей/місць':      'Describing people/places',
  'Магазини і ціни':       'Shops and prices',
  'Подорожі':              'Travel',
  'Минулі події':          'Past events',
  'Розмова про роботу':    'Talking about work',
  'Новини та медіа':       'News and media',
  'Вирішення проблем':     'Problem solving',
  'Плани на майбутнє':     'Future plans',
  'Академічні тексти':     'Academic texts',
  'Бізнес комунікація':    'Business communication',
  'Складні аргументи':     'Complex arguments',
  'Фільми без субтитрів':  'Movies without subtitles',
  'Наукові статті':        'Scientific articles',
  'Переговори':            'Negotiations',
  'Нюанси та ідіоми':      'Nuances and idioms',
  'Публічні виступи':      'Public speaking',
  'Художня проза':         'Literary prose',
  'Академічний стиль':     'Academic style',
  'Повне розуміння':       'Full comprehension',
  'Рівень носія':          'Native-like level',
};

const SKILL_NAMES_ES: Record<string, string> = {
  'Базове вітання':        'Saludos básicos',
  'Числа і кольори':       'Números y colores',
  'Сім\'я та тіло':        'Familia y cuerpo',
  'Повсякденні дії':       'Acciones cotidianas',
  'Опис людей/місць':      'Describir personas/lugares',
  'Магазини і ціни':       'Tiendas y precios',
  'Подорожі':              'Viajes',
  'Минулі події':          'Eventos pasados',
  'Розмова про роботу':    'Hablar sobre el trabajo',
  'Новини та медіа':       'Noticias y medios',
  'Вирішення проблем':     'Resolución de problemas',
  'Плани на майбутнє':     'Planes futuros',
  'Академічні тексти':     'Textos académicos',
  'Бізнес комунікація':    'Comunicación empresarial',
  'Складні аргументи':     'Argumentos complejos',
  'Фільми без субтитрів':  'Películas sin subtítulos',
  'Наукові статті':        'Artículos científicos',
  'Переговори':            'Negociaciones',
  'Нюанси та ідіоми':      'Matices y modismos',
  'Публічні виступи':      'Hablar en público',
  'Художня проза':         'Prosa literaria',
  'Академічний стиль':     'Estilo académico',
  'Повне розуміння':       'Comprensión total',
  'Рівень носія':          'Nivel nativo',
};

export function skillName(name: string): string {
  const lang = getLang();
  if (lang === 'en') return SKILL_NAMES_EN[name] ?? name;
  if (lang === 'es') return SKILL_NAMES_ES[name] ?? name;
  return name;
}

const MONTHS_UA = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const MONTHS_ES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const DOWS_UA   = ['Пн','Вт','Ср','Чт','Пт','Сб','Нд'];
const DOWS_EN   = ['Mo','Tu','We','Th','Fr','Sa','Su'];
const DOWS_ES   = ['Lu','Ma','Mi','Ju','Vi','Sá','Do'];

const LANG_KEY = 'ew_lang';

export function getLang(): Lang {
  const v = localStorage.getItem(LANG_KEY);
  return v === 'en' ? 'en' : v === 'es' ? 'es' : 'ua';
}

function setLang(lang: Lang): void {
  localStorage.setItem(LANG_KEY, lang);
  applyI18n();
}

export function t(key: string): string {
  const entry = DICT[key];
  return entry ? entry[getLang()] : key;
}

export function wordsLabel(n: number): string {
  const lang = getLang();
  if (lang === 'en') return n === 1 ? 'word' : 'words';
  if (lang === 'es') return n === 1 ? 'palabra' : 'palabras';
  return 'слів';
}

export function monthNames(): string[] {
  const lang = getLang();
  return lang === 'en' ? MONTHS_EN : lang === 'es' ? MONTHS_ES : MONTHS_UA;
}

export function dowNames(): string[] {
  const lang = getLang();
  return lang === 'en' ? DOWS_EN : lang === 'es' ? DOWS_ES : DOWS_UA;
}

export function applyI18n(): void {
  const lang = getLang();
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const entry = key ? DICT[key] : undefined;
    if (entry) el.textContent = entry[lang];
  });
  document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const entry = key ? DICT[key] : undefined;
    if (entry) el.placeholder = entry[lang];
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-title]').forEach(el => {
    const key = el.dataset.i18nTitle;
    const entry = key ? DICT[key] : undefined;
    if (entry) el.title = entry[lang];
  });
  document.querySelectorAll<HTMLOptGroupElement>('[data-i18n-label]').forEach(el => {
    const key = el.dataset.i18nLabel;
    const entry = key ? DICT[key] : undefined;
    if (entry) el.label = entry[lang];
  });
  document.querySelectorAll<HTMLElement>('.lang-opt').forEach(btn => {
    btn.classList.toggle('lang-active', btn.dataset.lang === lang);
  });
  (window.renderLevelBadge as (() => void) | undefined)?.();
  (window.renderGameBar as (() => void) | undefined)?.();
  (window._refreshRangeOptions as (() => void) | undefined)?.();
  (window._refreshTagOptions as (() => void) | undefined)?.();
  if (document.getElementById('ach-overlay')?.classList.contains('open')) {
    (window.renderAchievements as (() => void) | undefined)?.();
    (window.renderLevelsRoadmap as (() => void) | undefined)?.();
  }
  if (document.getElementById('lp-overlay')?.classList.contains('open')) {
    (window.renderLearningPath as (() => void) | undefined)?.();
  }
  if (document.getElementById('duel-overlay')?.classList.contains('open')) {
    (window.renderDuel as (() => void) | undefined)?.();
  }
  if (document.getElementById('grammar-overlay')?.classList.contains('open')) {
    (window.openGrammarContent as (() => void) | undefined)?.();
  }
  if (document.getElementById('idioms-overlay')?.classList.contains('open')) {
    (window._refreshIdiomsUI as (() => void) | undefined)?.();
  }
  if (document.getElementById('settings-overlay')?.classList.contains('open')) {
    (window._refreshNotifUI as (() => void) | undefined)?.();
    (window._refreshPrefetchUI as (() => void) | undefined)?.();
    (window._refreshPixabayStatus as (() => void) | undefined)?.();
    (window._refreshCloudSyncUI as (() => void) | undefined)?.();
    (window._renderVoices as (() => void) | undefined)?.();
  }
  const statsOverlay = document.getElementById('stats-overlay') as HTMLElement | null;
  if (statsOverlay && statsOverlay.style.display === 'flex') {
    (window.renderStats as (() => void) | undefined)?.();
    (window._refreshStatsExtras as (() => void) | undefined)?.();
    (window._renderWeakWords as (() => void) | undefined)?.();
  }
}

document.querySelectorAll<HTMLElement>('.lang-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang === 'en' ? 'en' : btn.dataset.lang === 'es' ? 'es' : 'ua';
    setLang(lang);
  });
});

applyI18n();

window.applyI18n = applyI18n;

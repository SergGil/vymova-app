// English Words App — js/features/i18n.ts
// Minimal i18n: translates sidebar menu labels (UA ⇄ EN), persisted via localStorage

type Lang = 'ua' | 'en';

const DICT: Record<string, Record<Lang, string>> = {
  'nav.cards':        { ua: 'Картки',        en: 'Cards' },
  'nav.stats':        { ua: 'Статистика',    en: 'Statistics' },
  'nav.achievements': { ua: 'Досягнення',    en: 'Achievements' },
  'nav.modes':        { ua: 'Режими',        en: 'Modes' },
  'nav.learningPath': { ua: 'Шлях навчання', en: 'Learning Path' },
  'nav.grammar':      { ua: 'Граматика',     en: 'Grammar' },
  'nav.idioms':       { ua: 'Ідіоми',        en: 'Idioms' },
  'nav.duel':         { ua: 'Дуель',         en: 'Duel' },
  'nav.settings':     { ua: 'Налаштування',  en: 'Settings' },

  'cards.cardLabel':    { ua: 'Картка',                              en: 'Card' },
  'cards.learnedLabel': { ua: 'Вивчено',                             en: 'Learned' },
  'cards.streakLabel':  { ua: 'днів підряд',                         en: 'day streak' },
  'cards.dailyGoal':    { ua: 'Ціль на сьогодні',                    en: 'Today’s goal' },
  'cards.goalDone':     { ua: '🎉 Ціль досягнута!',                   en: '🎉 Goal reached!' },
  'cards.know':         { ua: '✓ Знаю',                              en: '✓ Know' },
  'cards.next':         { ua: 'Далі →',                              en: 'Next →' },
  'cards.forward':      { ua: '→ Далі',                              en: '→ Next' },
  'cards.back':         { ua: '← Назад',                             en: '← Back' },
  'cards.translation':  { ua: '👁 Переклад',                          en: '👁 Translation' },
  'cards.hint':         { ua: 'Натисни на картку — побачиш переклад', en: 'Tap the card to see the translation' },
  'cards.example':      { ua: 'Приклад',                             en: 'Example' },
  'cards.quickQuiz':    { ua: '⚡ Quick Quiz — 5 питань',             en: '⚡ Quick Quiz — 5 questions' },
  'cards.allTopics':    { ua: '🏷️ Всі теми',                         en: '🏷️ All topics' },
  'cards.allWords':     { ua: 'Всі слова',                           en: 'All words' },
  'cards.searchPlaceholder': { ua: 'Пошук слова...',                 en: 'Search a word...' },
  'cards.auto':         { ua: '▶ Авто',                              en: '▶ Auto' },
  'cards.stop':         { ua: '⏹ Стоп',                              en: '⏹ Stop' },
  'cards.pronounce':    { ua: 'Вимовити слово',                      en: 'Pronounce word' },
  'cards.checkPron':    { ua: 'Перевір вимову',                      en: 'Check pronunciation' },
  'cards.noteMnemonic': { ua: 'Нотатка/мнемоніка',                   en: 'Note/mnemonic' },
  'cards.addBookmark':  { ua: 'Додати в закладки',                   en: 'Add to bookmarks' },
  'cards.removeKnown':  { ua: 'Прибрати з вивчених',                 en: 'Remove from learned' },
  'cards.wotdLabel':    { ua: '📖 Слово дня',                         en: '📖 Word of the day' },
  'cards.wotdTitle':    { ua: 'Слово дня — натисни щоб перейти',     en: 'Word of the day — tap to go there' },
  'cards.tagFilterTitle': { ua: 'Фільтр по темі',                    en: 'Filter by topic' },
  'cards.autoTitle':    { ua: 'Авто-режим',                          en: 'Auto mode' },
  'cards.prevTitle':    { ua: 'Попередня картка',                    en: 'Previous card' },
  'cards.nextTitle':    { ua: 'Наступна картка',                     en: 'Next card' },
  'cards.shuffleTitle': { ua: 'Перемішати',                          en: 'Shuffle' },
  'cards.searchTitle':  { ua: 'Пошук по словнику (Ctrl+F)',          en: 'Search the dictionary (Ctrl+F)' },
  'cards.statsTitle':   { ua: 'Статистика',                          en: 'Statistics' },
  'cards.achievementsTitle': { ua: 'Досягнення',                     en: 'Achievements' },
  'cards.modesTitle':   { ua: 'Режими навчання',                     en: 'Learning modes' },
  'cards.quickQuizTitle': { ua: '5 питань з поточної колоди (Quick Quiz)', en: '5 questions from the current deck (Quick Quiz)' },
  'cards.similarTitle': { ua: 'Схожі слова',                         en: 'Similar words' },
  'cards.familyTitle':  { ua: '🌱 Сімейство слів',                    en: '🌱 Word family' },
  'cards.collocationsTitle': { ua: '🔗 Сталі словосполучення',       en: '🔗 Collocations' },
  'cards.forget':       { ua: '✕ Забути',                            en: '✕ Forget' },
  'cards.bookmarkTitle':{ ua: 'Закладка',                            en: 'Bookmark' },
  'cards.gotoCard':     { ua: '→ На картку',                         en: '→ Go to card' },
  'range.bookmarks':    { ua: '⭐ Закладки',                          en: '⭐ Bookmarks' },

  'mode.mixed':         { ua: 'Мішаний',                             en: 'Mixed' },

  'common.of':     { ua: 'з',         en: 'of' },
  'common.close':  { ua: 'Закрити',   en: 'Close' },
  'common.tryAgain': { ua: '🔄 Ще раз', en: '🔄 Try again' },

  'range.unlearned': { ua: '🔴 Тільки невивчені',     en: '🔴 Unlearned only' },
  'range.srs':       { ua: '🔁 Spaced Repetition',    en: '🔁 Spaced Repetition' },
  'range.weak':      { ua: '⚠️ Слабкі слова',         en: '⚠️ Weak words' },
  'range.hard':      { ua: '🔴 Важкі слова',          en: '🔴 Hard words' },
  'range.cefrGroup': { ua: '📊 Рівень CEFR',          en: '📊 CEFR level' },
  'range.cefrA1':    { ua: '🟢 A1 — Початківець',      en: '🟢 A1 — Beginner' },
  'range.cefrA2':    { ua: '🟩 A2 — Елементарний',     en: '🟩 A2 — Elementary' },
  'range.cefrB1':    { ua: '🟡 B1 — Середній',         en: '🟡 B1 — Intermediate' },
  'range.cefrB2':    { ua: '🟠 B2 — Вище середнього',  en: '🟠 B2 — Upper-intermediate' },
  'range.cefrC1':    { ua: '🔴 C1 — Просунутий',       en: '🔴 C1 — Advanced' },
  'range.cefrC2':    { ua: '🟣 C2 — Майстерний',       en: '🟣 C2 — Proficient' },
  'range.stale7':    { ua: '🕰️ Не бачені 7 днів',     en: '🕰️ Not seen for 7 days' },
  'range.stale30':   { ua: '🕰️ Не бачені 30 днів',    en: '🕰️ Not seen for 30 days' },

  'kbd.space':       { ua: 'Пробіл',     en: 'Space' },
  'kbd.next':        { ua: 'далі',       en: 'next' },
  'kbd.know':        { ua: 'знаю',       en: 'know' },
  'kbd.navigation':  { ua: 'навігація',  en: 'navigation' },
  'kbd.translation': { ua: 'переклад',   en: 'translation' },
  'kbd.search':      { ua: 'пошук',      en: 'search' },
  'kbd.allKeys':     { ua: 'всі клавіші', en: 'all shortcuts' },
  'kbd.allKeysTitle':{ ua: 'Всі клавіші', en: 'All shortcuts' },

  'ach.pageTitle':    { ua: '🏆 Досягнення',                  en: '🏆 Achievements' },
  'ach.roadmapTitle': { ua: '🗺️ Шлях Джедая — всі рівні',     en: '🗺️ Path of the Jedi — all levels' },
  'ach.awardsTitle':  { ua: '🏅 Нагороди',                    en: '🏅 Awards' },
  'ach.close':        { ua: 'Закрити',                        en: 'Close' },

  // Statistics page — section titles & static labels
  'stats.title':            { ua: '📊 Статистика',                          en: '📊 Statistics' },
  'stats.overallProgress':  { ua: 'Загальний прогрес',                      en: 'Overall progress' },
  'stats.wordsLearned':     { ua: 'Вивчено слів',                           en: 'Words learned' },
  'stats.ofAllWords':       { ua: 'Від усіх слів',                          en: 'Of all words' },
  'stats.daysStreak':       { ua: '🔥 Днів підряд',                         en: '🔥 Day streak' },
  'stats.perDayTitle':      { ua: 'Слів вивчено по днях (останні 14 днів)', en: 'Words learned per day (last 14 days)' },
  'stats.yearActivity':     { ua: '🗓️ Активність за рік',                   en: '🗓️ Activity over the year' },
  'stats.yearActivityDesc': { ua: '52 тижні · зелений = більше слів',       en: '52 weeks · greener = more words' },
  'stats.monthlyView':      { ua: '📅 Місячний вигляд',                     en: '📅 Monthly view' },
  'stats.bestTimeTitle':    { ua: '⏰ Найкращий час навчання',              en: '⏰ Best time to learn' },
  'stats.blockProgress':    { ua: 'Прогрес по блоках',                      en: 'Progress by blocks' },
  'stats.srsForecastTitle': { ua: '📅 SRS — Розклад повторень (14 днів)',   en: '📅 SRS — Review schedule (14 days)' },
  'stats.weakWordsTitle':   { ua: '🔴 Слабкі слова (топ-10)',               en: '🔴 Weak words (top 10)' },
  'stats.modeAccuracyTitle':{ ua: '🎮 Точність по режимах',                 en: '🎮 Accuracy by mode' },
  'stats.cefrProgressTitle':{ ua: '📊 Прогрес за CEFR рівнями',             en: '📊 Progress by CEFR level' },
  'stats.leaderboardTitle': { ua: '🏆 Глобальний лідерборд',                en: '🏆 Global leaderboard' },
  'stats.refresh':          { ua: '🔄 Оновити',                             en: '🔄 Refresh' },

  // Statistics page — dynamic strings
  'stats.noData':         { ua: 'Ще немає даних.<br>Почни вивчати слова!', en: 'No data yet.<br>Start learning words!' },
  'stats.today':          { ua: 'сьогодні',                                en: 'today' },
  'stats.todayCap':       { ua: 'Сьогодні',                                en: 'Today' },
  'stats.tomorrow':       { ua: 'Завтра',                                  en: 'Tomorrow' },
  'stats.totalScheduled': { ua: 'Всього заплановано',                      en: 'Total scheduled' },
  'stats.reviews':        { ua: 'повторень',                               en: 'reviews' },
  'stats.noModeData':     { ua: 'Ще немає даних — грай у режимах!',        en: 'No data yet — play some modes!' },
  'stats.sessionsAbbr':   { ua: 'сес.',                                    en: 'sess.' },
  'stats.noSrsData':      { ua: 'Поки немає даних SRS.',                   en: 'No SRS data yet.' },
  'stats.bestTimeLabel':  { ua: 'Найкращий час',                           en: 'Best time' },
  'stats.intervals':      { ua: 'Інтервали',                               en: 'Intervals' },
  'stats.totalForMonth':  { ua: 'Всього за місяць',                        en: 'Total for the month' },
  'stats.noWordsThisMonth':{ ua: 'Слів у цьому місяці немає',              en: 'No words learned this month' },

  'stats.night':   { ua: '🌙 ніч',   en: '🌙 night' },
  'stats.morning': { ua: '🌅 ранок', en: '🌅 morning' },
  'stats.day':     { ua: '☀️ день',  en: '☀️ afternoon' },
  'stats.evening': { ua: '🌆 вечір', en: '🌆 evening' },

  'mode.quiz':   { ua: 'Тест',    en: 'Quiz' },
  'mode.write':  { ua: 'Письмо',  en: 'Writing' },
  'mode.listen': { ua: 'Аудіо',   en: 'Listening' },
  'mode.fib':    { ua: 'Речення', en: 'Sentences' },
  'mode.lesson': { ua: 'Урок',    en: 'Lesson' },
  'mode.tempo':  { ua: 'Темп',    en: 'Tempo' },

  // Modes picker overlay — header & cards
  'modesPg.header':       { ua: '🎮 Режим навчання',         en: '🎮 Learning mode' },
  'modesPg.quizName':     { ua: 'Тест',                      en: 'Quiz' },
  'modesPg.quizDesc':     { ua: '4 варіанти',                en: '4 options' },
  'modesPg.tempoName':    { ua: 'Темп',                      en: 'Tempo' },
  'modesPg.tempoDesc':    { ua: 'На час',                    en: 'Timed' },
  'modesPg.writeName':    { ua: 'Письмо',                    en: 'Writing' },
  'modesPg.writeDesc':    { ua: 'UA → EN',                   en: 'UA → EN' },
  'modesPg.lessonName':   { ua: 'Урок',                      en: 'Lesson' },
  'modesPg.lessonDesc':   { ua: '5×3 вправи',                en: '5×3 exercises' },
  'modesPg.pairsName':    { ua: 'Пари',                      en: 'Pairs' },
  'modesPg.pairsDesc':    { ua: '6 пар',                     en: '6 pairs' },
  'modesPg.catName':      { ua: 'Теми',                      en: 'Topics' },
  'modesPg.catDesc':      { ua: 'По темі',                   en: 'By category' },
  'modesPg.listenName':   { ua: 'Слухай',                    en: 'Listen' },
  'modesPg.listenDesc':   { ua: 'Аудіо',                     en: 'Audio' },
  'modesPg.fibName':      { ua: 'Пропуск',                   en: 'Fill gap' },
  'modesPg.fibDesc':      { ua: 'Вставте слово',             en: 'Type the word' },
  'modesPg.wordName':     { ua: 'Слово',                     en: 'Word' },
  'modesPg.wordDesc':     { ua: 'Додати своє',               en: 'Add your own' },
  'modesPg.dailyName':    { ua: 'Місія дня',                 en: 'Daily mission' },
  'modesPg.dailyDesc':    { ua: '10 слів + таймер',          en: '10 words + timer' },
  'modesPg.readingName':  { ua: 'Читання',                   en: 'Reading' },
  'modesPg.readingDesc':  { ua: 'Текст зі словами',          en: 'Text with words' },
  'modesPg.contextName':  { ua: 'Контекст',                  en: 'Context' },
  'modesPg.contextDesc':  { ua: 'Вгадай з речення',          en: 'Guess from a sentence' },
  'modesPg.beeName':      { ua: 'Spelling Bee',              en: 'Spelling Bee' },
  'modesPg.beeDesc':      { ua: 'Почуй і напиши',            en: 'Listen and spell' },
  'modesPg.storyName':    { ua: 'Читання+',                  en: 'Reading+' },
  'modesPg.storyDesc':    { ua: 'Текст зі словами',          en: 'Text with words' },

  // Quiz mode
  'quiz.title':       { ua: '🧠 Тест',                  en: '🧠 Quiz' },
  'quiz.question':    { ua: 'Питання',                  en: 'Question' },
  'quiz.enToUa':      { ua: 'Англійська → Українська',  en: 'English → Ukrainian' },
  'quiz.uaToEn':      { ua: 'Українська → Англійська',  en: 'Ukrainian → English' },
  'quiz.correctLbl':  { ua: 'правильно',                en: 'correct' },
  'quiz.wrongLbl':    { ua: 'неправильно',              en: 'incorrect' },
  'quiz.correctMsg':  { ua: '✓ Правильно!',             en: '✓ Correct!' },
  'quiz.incorrectMsg':{ ua: '✗ Неправильно',            en: '✗ Incorrect' },
  'quiz.finish':      { ua: '🏆 Фініш!',                en: '🏆 Finish!' },
  'quiz.next':        { ua: 'Наступне →',               en: 'Next →' },
  'quiz.completed':   { ua: 'Тест завершено',           en: 'Quiz completed' },
  'quiz.completedExcl': { ua: 'Тест завершено!',        en: 'Quiz completed!' },
  'quiz.restartWrongPrefix': { ua: '✗ Повторити',       en: '✗ Retry' },
  'quiz.fixedTitle':  { ua: 'Помилки виправлено!',      en: 'Mistakes fixed!' },
  'quiz.fixedDescSingle': { ua: 'Слово засвоєно — чудова робота!', en: 'Word mastered — great job!' },
  'quiz.fixedDescAll':{ ua: 'Всі {n} в роботі над помилками — відмінно!', en: 'All {n} corrected — excellent!' },
  'quiz.perfectTitle':{ ua: 'Ідеально!',                en: 'Perfect!' },
  'quiz.perfectDescSingle': { ua: '1 відповідь — і одразу правильно!', en: '1 answer — and correct right away!' },
  'quiz.perfectDescAll': { ua: 'Всі {n} правильно!',    en: 'All {n} correct!' },
  'quiz.greatTitle':  { ua: 'Чудово!',                  en: 'Great job!' },
  'quiz.goodTitle':   { ua: 'Непогано!',                en: 'Not bad!' },
  'quiz.keepTitle':   { ua: 'Ще попрацюємо!',           en: 'Let’s keep practicing!' },
  'quiz.keepDescSuffix': { ua: 'Повтори слова.',        en: 'Review the words.' },
  'quiz.encourageTitle': { ua: 'Продовжуй вчити!',      en: 'Keep learning!' },
  'quiz.encourageDescSuffix': { ua: 'Не здавайся!',     en: 'Don’t give up!' },
  'quiz.answer':      { ua: 'відповідь',                en: 'answer' },
  'quiz.answers':     { ua: 'відповіді',                en: 'answers' },
  'quiz.answersGen':  { ua: 'відповідей',               en: 'answers' },
  'quiz.mistake':     { ua: 'помилку',                  en: 'mistake' },
  'quiz.mistakes':    { ua: 'помилки',                  en: 'mistakes' },
  'quiz.mistakesGen': { ua: 'помилок',                  en: 'mistakes' },

  'tempo.title':      { ua: 'Темп-режим',               en: 'Tempo Mode' },
  'tempo.subtitle':   { ua: 'Вгадай якомога більше слів за 60 секунд', en: 'Guess as many words as possible in 60 seconds' },
  'tempo.sec30':      { ua: '30 сек',                   en: '30 sec' },
  'tempo.sec60':      { ua: '60 сек',                   en: '60 sec' },
  'tempo.sec90':      { ua: '90 сек',                   en: '90 sec' },
  'tempo.start':      { ua: 'Старт ⚡',                 en: 'Start ⚡' },
  'tempo.again':      { ua: '⚡ Ще раз',                en: '⚡ Again' },
  'tempo.bestRecord': { ua: '🏆 Рекорд: {n} слів за {s}с', en: '🏆 Best: {n} words in {s}s' },
  'tempo.zeroTitle':  { ua: 'Наступного разу!',         en: 'Next time!' },
  'tempo.excellentTitle': { ua: 'Відмінно!',            en: 'Excellent!' },
  'tempo.practiceTitle': { ua: 'Тренуйся!',             en: 'Keep practicing!' },
  'tempo.newRecord':  { ua: '🌟 Новий рекорд: {n} слів!', en: '🌟 New record: {n} words!' },
  'tempo.record':     { ua: '🏆 Рекорд: {n} слів',      en: '🏆 Record: {n} words' },

  'write.title':      { ua: '✍️ Письмо',                en: '✍️ Write' },
  'write.placeholder':{ ua: 'Введіть переклад англійською...', en: 'Enter English translation...' },
  'write.checkBtn':   { ua: 'Перевірити',               en: 'Check' },
  'write.next':       { ua: 'Далі →',                   en: 'Next →' },
  'write.micTitle':   { ua: 'Голосове введення',        en: 'Voice input' },
  'write.correctAnswerPrefix': { ua: 'Правильно:',      en: 'Correct:' },
  'write.mistakesBtn':{ ua: '✗ Помилки',                en: '✗ Mistakes' },
  'write.completed':  { ua: 'Завершено',                en: 'Completed' },

  'lesson.title':     { ua: '📚 Щоденний урок',          en: '📚 Daily Lesson' },
  'lesson.step':      { ua: 'Крок',                     en: 'Step' },
  'lesson.phaseFlash':{ ua: 'Флешкарти',                en: 'Flashcards' },
  'lesson.phaseQuiz': { ua: 'Тест',                     en: 'Quiz' },
  'lesson.phaseWrite':{ ua: 'Письмо',                   en: 'Write' },
  'lesson.dirFlash':  { ua: 'Що означає це слово?',     en: 'What does this word mean?' },
  'lesson.dirQuiz':   { ua: 'Оберіть переклад:',        en: 'Choose the translation:' },
  'lesson.dirWrite':  { ua: 'Введіть переклад англійською:', en: 'Enter the English translation:' },
  'lesson.revealBtn': { ua: '👁 Показати',               en: '👁 Show' },
  'lesson.knowBtn':   { ua: '✓ Знаю',                   en: '✓ I know' },
  'lesson.skipBtn':   { ua: '→ Не знаю',                en: "→ I don't know" },
  'lesson.completedExcl': { ua: 'Завершено!',           en: 'Completed!' },
  'lesson.doneBtn':   { ua: '🏠 Завершити',             en: '🏠 Finish' },
  'lesson.scoreLine': { ua: '{total} з {max} правильно ({pct}%)', en: '{total} of {max} correct ({pct}%)' },

  'listen.title':     { ua: '🔊 Слухання',              en: '🔊 Listening' },
  'listen.word':      { ua: 'Слово',                    en: 'Word' },
  'listen.playHint':  { ua: 'Натисни щоб почути слово', en: 'Click to hear the word' },
  'listen.wrongPrefix': { ua: 'Це',                     en: 'This is' },
  'listen.keepGoingTitle': { ua: 'Продовжуй!',          en: 'Keep going!' },

  'fib.title':        { ua: '✏️ Вставте слово',          en: '✏️ Fill in the Blank' },
  'fib.placeholder':  { ua: 'Введіть слово, якого бракує...', en: 'Type the missing word...' },
  'fib.noSentences':  { ua: 'Немає підходящих речень. Спробуй інший набір слів.', en: 'No suitable sentences. Try a different word set.' },
  'fib.sentence':     { ua: 'Речення',                  en: 'Sentence' },

  'cefr.A1': { ua: 'Початківець',     en: 'Beginner' },
  'cefr.A2': { ua: 'Елементарний',    en: 'Elementary' },
  'cefr.B1': { ua: 'Середній',        en: 'Intermediate' },
  'cefr.B2': { ua: 'Вище середнього', en: 'Upper-intermediate' },
  'cefr.C1': { ua: 'Просунутий',      en: 'Advanced' },
  'cefr.C2': { ua: 'Майстерний',      en: 'Proficient' },

  'levels.maxReached': { ua: '🏆 Максимум!', en: '🏆 Max level!' },
  'levels.learned':    { ua: 'вивчено',      en: 'learned' },

  'lp.pageTitle':       { ua: '🎯 Шлях навчання',                       en: '🎯 Learning Path' },
  'lp.todayPlan':       { ua: 'Сьогоднішній план — рівень',             en: 'Today’s plan — level' },
  'lp.learnWordsNow':   { ua: 'Вчити слова',                            en: 'Learn' },
  'lp.now':             { ua: 'зараз',                                  en: 'now' },
  'lp.levelWord':       { ua: 'Рівень',                                 en: 'Level' },
  'lp.completedExcl':   { ua: 'завершено!',                             en: 'completed!' },
  'lp.allLearned':      { ua: 'Всі слова цього рівня вивчено. Переходь до наступного!', en: 'You’ve learned all the words for this level. Move on to the next one!' },
  'lp.yourPace':        { ua: 'твій темп:',                             en: 'your pace:' },
  'lp.wordsPerDay':     { ua: 'сл/день',                                en: 'words/day' },
  'lp.defaultPace':     { ua: '20 сл/день',                             en: '20 words/day' },
  'lp.currentNow':      { ua: '← зараз',                                en: '← now' },
  'lp.learnArrow':      { ua: 'Вчити →',                                en: 'Learn →' },
  'lp.daysApprox':      { ua: 'днів',                                   en: 'days' },
  'lp.openGrammar':     { ua: 'Відкрити граматику',                     en: 'Open grammar' },
  'lp.completed':       { ua: '✓ Завершено',                            en: '✓ Completed' },
  'lp.currentFocus':    { ua: 'Поточний фокус',                         en: 'Current focus' },
  'lp.cefrProgress':    { ua: '📊 Прогрес за рівнями CEFR',             en: '📊 Progress by CEFR level' },
  'lp.wordsCount':      { ua: 'слів',                                   en: 'words' },
  'lp.completedPct':    { ua: 'завершено',                              en: 'completed' },
  'lp.wordsPerDayFull': { ua: 'слів/день',                              en: 'words/day' },
  'lp.startLearning':   { ua: 'Починай вчити — побачиш свій темп',      en: 'Start learning to see your pace' },

  'lb.loading':  { ua: '⏳ Завантаження...',                              en: '⏳ Loading...' },
  'lb.empty':    { ua: 'Поки немає учасників. Ти будеш першим!',         en: 'No participants yet. You’ll be the first!' },
  'lb.top20':    { ua: '🌍 Топ-20 гравців · оновлюється при відкритті',  en: '🌍 Top 20 players · refreshes on open' },
  'lb.yourRank': { ua: 'Твоя позиція',                                    en: 'Your rank' },
  'lb.you':      { ua: 'ти',                                              en: 'you' },

  // Settings page — section titles, descriptions, static labels
  'settings.pageTitle':        { ua: '⚙️ Налаштування',                                              en: '⚙️ Settings' },
  'settings.themesTitle':      { ua: '🎨 Теми',                                                      en: '🎨 Themes' },
  'settings.themesDesc':       { ua: 'Обери оформлення застосунку.',                                 en: 'Choose the app’s appearance.' },
  'settings.darkTheme':        { ua: 'Темна тема',                                                   en: 'Dark theme' },
  'settings.starWars':         { ua: 'Star Wars',                                                    en: 'Star Wars' },
  'settings.voiceTitle':       { ua: '🔊 Голос озвучення',                                           en: '🔊 Voice' },
  'settings.voiceReload':      { ua: '🔄 Оновити список',                                            en: '🔄 Refresh list' },
  'settings.voiceReloadTitle': { ua: 'Перезавантажити список голосів',                               en: 'Reload the voice list' },
  'settings.voiceDesc':        { ua: 'Безкоштовно, без API ключа, миттєво. Аудіо кешується після першого відтворення.', en: 'Free, no API key, instant. Audio is cached after the first playback.' },
  'settings.imagesTitle':      { ua: '🖼️ Зображення на картках',                                     en: '🖼️ Card images' },
  'settings.imagesDesc1':      { ua: 'Безкоштовний ключ Pixabay дає фото для ~90% слів.',             en: 'A free Pixabay key provides photos for ~90% of words.' },
  'settings.imagesDesc2':      { ua: 'Отримай на',                                                   en: 'Get one at' },
  'settings.pixabayPlaceholder': { ua: 'Вставте Pixabay API ключ...',                                en: 'Paste your Pixabay API key...' },
  'settings.save':             { ua: 'Зберегти',                                                     en: 'Save' },
  'settings.prefetchDesc':     { ua: 'Завантаж URL зображень для всіх слів у фоні — після цього картинки з\'являтимуться миттєво.', en: 'Pre-load image URLs for all words in the background — afterwards, pictures will appear instantly.' },
  'settings.prefetchStart':    { ua: '▶ Завантажити',                                                en: '▶ Download' },
  'settings.prefetchPause':    { ua: '⏸ Пауза',                                                      en: '⏸ Pause' },
  'settings.prefetchClear':    { ua: '🗑 Очистити',                                                   en: '🗑 Clear' },
  'settings.backupTitle':      { ua: '💾 Збереження прогресу',                                       en: '💾 Save progress' },
  'settings.backupDesc':       { ua: 'Експортуй прогрес перед оновленням файлу — щоб не втратити вивчені слова.', en: 'Export your progress before updating the file — so you don’t lose learned words.' },
  'settings.export':           { ua: '📤 Експорт',                                                   en: '📤 Export' },
  'settings.import':           { ua: '📥 Імпорт',                                                    en: '📥 Import' },
  'settings.ankiCsv':          { ua: '🃏 Anki CSV',                                                  en: '🃏 Anki CSV' },
  'settings.share':            { ua: '📤 Поділитись',                                                en: '📤 Share' },
  'settings.sheetsCsv':        { ua: '📊 Google Sheets CSV',                                         en: '📊 Google Sheets CSV' },
  'settings.pdfExport':        { ua: '🖨️ PDF / Друк',                                                en: '🖨️ PDF / Print' },
  'settings.csvImport':        { ua: '📂 Імпорт CSV',                                                en: '📂 Import CSV' },
  'settings.csvImportTitle':   { ua: 'Імпорт власних слів з CSV файлу',                              en: 'Import your own words from a CSV file' },
  'settings.csvFormatLabel':   { ua: 'Формат CSV:',                                                  en: 'CSV format:' },
  'settings.csvFormatHint':    { ua: '(одне слово на рядок)',                                        en: '(one word per line)' },
  'settings.exportLabel':      { ua: 'Експортувати:',                                                en: 'Export:' },
  'settings.exportKnown':      { ua: '✓ Тільки вивчені',                                             en: '✓ Learned only' },
  'settings.exportUnknown':    { ua: '🔴 Тільки невивчені',                                          en: '🔴 Unlearned only' },
  'settings.exportAll':        { ua: '📚 Всі слова',                                                 en: '📚 All words' },
  'settings.exportCustom':     { ua: '➕ Тільки власні',                                             en: '➕ Custom only' },
  'settings.notifTitle':       { ua: '🔔 Сповіщення',                                                en: '🔔 Notifications' },
  'settings.notifDesc':        { ua: 'Щоденне нагадування якщо ще не вчив сьогодні.',                en: 'A daily reminder if you haven’t studied yet today.' },
  'settings.notifAllow':       { ua: 'Дозволити',                                                    en: 'Allow' },
  'settings.notifTimeLabel':   { ua: '⏰ Нагадувати щодня о',                                        en: '⏰ Remind me daily at' },
  'settings.notifTimeSuffix':  { ua: 'якщо не вчив сьогодні',                                        en: 'if you haven’t studied today' },
  'settings.cloudTitle':       { ua: '☁️ Хмарний бекап',                                             en: '☁️ Cloud backup' },
  'settings.cloudCopy':        { ua: '📋 Копія',                                                     en: '📋 Copy' },
  'settings.cloudSave':        { ua: '⬆️ Зберегти в хмару',                                          en: '⬆️ Save to cloud' },
  'settings.cloudAutoLabel':   { ua: '🔄 Авто-збереження:',                                          en: '🔄 Auto-save:' },
  'settings.intervalOff':      { ua: 'Вимк',                                                         en: 'Off' },
  'settings.interval30':       { ua: '30 хв',                                                        en: '30 min' },
  'settings.interval60':       { ua: '1 год',                                                        en: '1 hr' },
  'settings.interval360':      { ua: '6 год',                                                        en: '6 hrs' },
  'settings.intervalDaily':    { ua: 'Щодня',                                                        en: 'Daily' },
  'settings.cloudRestoreLabel':{ ua: 'Відновити на цьому пристрої:',                                 en: 'Restore on this device:' },
  'settings.cloudRestore':     { ua: '⬇️ Відновити',                                                 en: '⬇️ Restore' },
  'settings.cloudHintLine1':   { ua: 'Збережи ключ — він потрібен для відновлення.',                 en: 'Save your key — you’ll need it to restore.' },
  'settings.cloudHintLine2':   { ua: 'Дані доступні лише за ключем.',                                en: 'Data is only accessible with the key.' },
  'settings.dangerTitle':      { ua: '⚠️ Небезпечна зона',                                           en: '⚠️ Danger zone' },
  'settings.dangerDesc':       { ua: 'Незворотна дія — всі вивчені слова, серія днів та досягнення будуть видалені.', en: 'Irreversible action — all learned words, your streak, and achievements will be deleted.' },
  'settings.resetBtn':         { ua: '↺ Скинути прогрес',                                            en: '↺ Reset progress' },

  // Settings page — dynamic strings
  'settings.prefetchLoading':    { ua: 'Завантажується...',                            en: 'Downloading...' },
  'settings.withPhotos':         { ua: 'з фото',                                       en: 'with photos' },
  'settings.prefetchDonePrefix': { ua: '✅ Готово:',                                    en: '✅ Done:' },
  'settings.prefetchImagesOf':   { ua: 'зображень з',                                  en: 'images out of' },
  'settings.prefetchPaused':     { ua: 'Призупинено:',                                 en: 'Paused:' },
  'settings.prefetchReady':      { ua: 'Готово до завантаження',                       en: 'Ready to download' },
  'settings.images':             { ua: 'зображень',                                    en: 'images' },
  'settings.pixabayKeySaved':    { ua: '✅ Ключ збережено. Нові слова отримають фото автоматично.', en: '✅ Key saved. New words will get photos automatically.' },
  'settings.pixabayNoKey':       { ua: 'Ключ не вказано — використовується лише Wikipedia.', en: 'No key set — only Wikipedia is used.' },
  'settings.notifNotSupported':  { ua: 'Браузер не підтримує сповіщення',               en: 'Your browser doesn’t support notifications' },
  'settings.notifBlocked':       { ua: '❌ Заблоковано — дозволь в браузері',           en: '❌ Blocked — allow it in your browser' },
  'settings.notifBlockedShort':  { ua: '🔒 Заблоковано',                                en: '🔒 Blocked' },
  'settings.notifReminderAt':    { ua: '✅ Нагадування о',                              en: '✅ Reminder at' },
  'settings.notifGrantedOff':    { ua: 'Дозвіл є, але сповіщення вимкнено',             en: 'Permission granted, but notifications are off' },
  'settings.notifPromptToEnable':{ ua: 'Натисни «Дозволити» щоб отримувати нагадування', en: 'Tap “Allow” to get reminders' },
  'settings.cloudJustNow':       { ua: 'щойно',                                        en: 'just now' },
  'settings.cloudMinAgo':        { ua: 'хв тому',                                      en: 'min ago' },
  'settings.cloudHourAgo':       { ua: 'год тому',                                     en: 'hr ago' },
  'settings.cloudDayAgo':        { ua: 'дн тому',                                      en: 'days ago' },
  'settings.cloudAutoPrefix':    { ua: 'Авто:',                                        en: 'Auto:' },
  'settings.cloudSyncError':     { ua: '⚠️ Помилка синхронізації',                     en: '⚠️ Sync error' },
  'settings.cloudCopied':        { ua: '✅ Скопійовано',                                en: '✅ Copied' },
  'settings.cloudSaving':        { ua: 'Збереження...',                                en: 'Saving...' },
  'settings.cloudSaved':         { ua: '✅ Збережено!',                                 en: '✅ Saved!' },
  'settings.cloudAutoOn':        { ua: 'Авто-збереження увімкнено',                    en: 'Auto-save enabled' },
  'settings.cloudAutoOff':       { ua: 'Авто-збереження вимкнено',                     en: 'Auto-save disabled' },
  'settings.cloudEnterKey':      { ua: 'Введи ключ синхронізації',                     en: 'Enter your sync key' },
  'settings.cloudRestoreConfirm':{ ua: 'Поточний прогрес буде замінено даними з хмари. Продовжити?', en: 'Your current progress will be replaced with data from the cloud. Continue?' },
  'settings.cloudLoading':       { ua: 'Завантаження...',                              en: 'Loading...' },
  'settings.cloudRestoreSuccess':{ ua: '✅ Успішно! Перезавантаження...',               en: '✅ Success! Reloading...' },
  'settings.cloudKeyTooShort':   { ua: 'Ключ занадто короткий',                        en: 'Key is too short' },
  'settings.cloudDataNotFound':  { ua: 'Дані не знайдено',                             en: 'Data not found' },
  'settings.voiceOffline':       { ua: 'офлайн',                                       en: 'offline' },
  'settings.voiceOnline':        { ua: 'онлайн',                                       en: 'online' },
  'settings.voicesNotFound':     { ua: 'Голоси не знайдено. Спробуйте оновити сторінку.', en: 'No voices found. Try refreshing the page.' },
  'settings.enVoicesTitle':      { ua: 'Англійські голоси (EN→UA картки)',          en: 'English voices (EN→UA cards)' },
  'settings.ukVoicesTitle':      { ua: 'Українські голоси (UA→EN картки)',          en: 'Ukrainian voices (UA→EN cards)' },
  'settings.noUkVoicesTitle':    { ua: 'Українські голоси не знайдено',             en: 'No Ukrainian voices found' },
  'settings.noUkVoicesDesc':     { ua: 'Для озвучення UA→EN карток потрібно встановити Ukrainian TTS.<br><b>Windows:</b> Налаштування → Час і мова → Мовлення → "Polina" або "Ostap"', en: 'To hear UA→EN cards spoken, install a Ukrainian TTS voice.<br><b>Windows:</b> Settings → Time & Language → Speech → "Polina" or "Ostap"' },
  'settings.swTitleOn':          { ua: 'Star Wars режим (ON) — натисни щоб вимкнути',   en: 'Star Wars mode (ON) — tap to turn off' },
  'settings.swTitle':            { ua: 'Star Wars режим',                              en: 'Star Wars mode' },
  'settings.voicesFoundLabel':   { ua: 'Знайдено',                                     en: 'Found' },
  'settings.voicesLabel':        { ua: 'голосів. UA голоси:',                          en: 'voices. UA voices:' },
  'settings.notFound':           { ua: 'не знайдено',                                  en: 'none found' },

  // Settings-related modals (export/import/reset/clear)
  'modal.exportTitle':   { ua: '📤 Твій код прогресу',                                 en: '📤 Your progress code' },
  'modal.exportSub':     { ua: 'Виділи весь текст і скопіюй його. Збережи в нотатках або надішли собі.', en: 'Select all the text and copy it. Save it in your notes or send it to yourself.' },
  'modal.selectAll':     { ua: 'Виділити все',                                         en: 'Select all' },
  'modal.copiedExcl':    { ua: '✓ Скопійовано!',                                       en: '✓ Copied!' },
  'modal.done':          { ua: 'Готово',                                               en: 'Done' },
  'modal.importTitle':   { ua: '📥 Імпорт прогресу',                                   en: '📥 Import progress' },
  'modal.importSub':     { ua: 'Встав сюди код прогресу який ти скопіював раніше через «Експорт»', en: 'Paste the progress code you copied earlier via “Export”' },
  'modal.importPlaceholder': { ua: 'Встав код тут...',                                 en: 'Paste your code here...' },
  'modal.cancel':        { ua: 'Відміна',                                              en: 'Cancel' },
  'modal.import':        { ua: 'Імпортувати',                                          en: 'Import' },
  'modal.importEmpty':   { ua: 'Встав код прогресу',                                   en: 'Paste your progress code' },
  'modal.importInvalid': { ua: '❌ Невірний код — перевір чи повністю скопіював',       en: '❌ Invalid code — check that you copied it in full' },
  'modal.importedExcl':  { ua: '✓ Імпортовано!',                                       en: '✓ Imported!' },
  'modal.resetTitle':    { ua: 'Скинути прогрес?',                                     en: 'Reset progress?' },
  'modal.resetWarn':     { ua: 'Вивчені слова, серія днів, денна ціль та досягнення будуть видалені безповоротно.', en: 'Learned words, your streak, daily goal, and achievements will be permanently deleted.' },
  'modal.reset':         { ua: 'Скинути',                                              en: 'Reset' },
  'modal.imgClearTitle': { ua: 'Очистити кеш зображень?',                              en: 'Clear the image cache?' },
  'modal.imgClearWarn':  { ua: 'Всі завантажені фото будуть видалені з кешу. Зображення завантажуватимуться знову при перегляді карток.', en: 'All downloaded photos will be removed from the cache. Images will be re-downloaded as you browse cards.' },
  'modal.cancelAlt':     { ua: 'Скасувати',                                            en: 'Cancel' },
  'modal.clear':         { ua: 'Очистити',                                             en: 'Clear' },

  // ── Idioms page ────────────────────────────────────────────
  'idioms.pageTitle':  { ua: '💬 Ідіоми',                              en: '💬 Idioms' },
  'idioms.tabEn':      { ua: 'Англійські ідіоми',                      en: 'English idioms' },
  'idioms.tabUa':      { ua: 'Українські ідіоми → англійською',        en: 'Ukrainian idioms → English' },
  'idioms.searchPlaceholder': { ua: '🔍 Пошук ідіоми...',              en: '🔍 Search an idiom...' },
  'idioms.empty':      { ua: 'Нічого не знайдено 🤷',                  en: 'Nothing found 🤷' },
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

export function levelName(name: string): string {
  return getLang() === 'en' ? (LEVEL_NAMES_EN[name] ?? name) : name;
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
  '📦 Інше':                               '📦 Other',
};

export function categoryName(name: string): string {
  return getLang() === 'en' ? (CATEGORY_NAMES_EN[name] ?? name) : name;
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

export function skillName(name: string): string {
  return getLang() === 'en' ? (SKILL_NAMES_EN[name] ?? name) : name;
}

const MONTHS_UA = ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'];
const MONTHS_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DOWS_UA   = ['Пн','Вт','Ср','Чт','Пт','Сб','Нд'];
const DOWS_EN   = ['Mo','Tu','We','Th','Fr','Sa','Su'];

const LANG_KEY = 'ew_lang';

export function getLang(): Lang {
  return localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'ua';
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
  return getLang() === 'en' ? (n === 1 ? 'word' : 'words') : 'слів';
}

export function monthNames(): string[] {
  return getLang() === 'en' ? MONTHS_EN : MONTHS_UA;
}

export function dowNames(): string[] {
  return getLang() === 'en' ? DOWS_EN : DOWS_UA;
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
  (window._refreshRangeOptions as (() => void) | undefined)?.();
  (window._refreshTagOptions as (() => void) | undefined)?.();
  if (document.getElementById('ach-overlay')?.classList.contains('open')) {
    (window.renderAchievements as (() => void) | undefined)?.();
    (window.renderLevelsRoadmap as (() => void) | undefined)?.();
  }
  if (document.getElementById('lp-overlay')?.classList.contains('open')) {
    (window.renderLearningPath as (() => void) | undefined)?.();
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
    const lang = btn.dataset.lang === 'en' ? 'en' : 'ua';
    setLang(lang);
  });
});

applyI18n();

window.applyI18n = applyI18n;

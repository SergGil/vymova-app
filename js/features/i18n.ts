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

  'cefr.A1': { ua: 'Початківець',     en: 'Beginner' },
  'cefr.A2': { ua: 'Елементарний',    en: 'Elementary' },
  'cefr.B1': { ua: 'Середній',        en: 'Intermediate' },
  'cefr.B2': { ua: 'Вище середнього', en: 'Upper-intermediate' },
  'cefr.C1': { ua: 'Просунутий',      en: 'Advanced' },
  'cefr.C2': { ua: 'Майстерний',      en: 'Proficient' },

  'lb.loading':  { ua: '⏳ Завантаження...',                              en: '⏳ Loading...' },
  'lb.empty':    { ua: 'Поки немає учасників. Ти будеш першим!',         en: 'No participants yet. You’ll be the first!' },
  'lb.top20':    { ua: '🌍 Топ-20 гравців · оновлюється при відкритті',  en: '🌍 Top 20 players · refreshes on open' },
  'lb.yourRank': { ua: 'Твоя позиція',                                    en: 'Your rank' },
  'lb.you':      { ua: 'ти',                                              en: 'you' },
};

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
  document.querySelectorAll<HTMLElement>('.lang-opt').forEach(btn => {
    btn.classList.toggle('lang-active', btn.dataset.lang === lang);
  });
  if (document.getElementById('ach-overlay')?.classList.contains('open')) {
    (window.renderAchievements as (() => void) | undefined)?.();
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

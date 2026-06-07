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
};

const LANG_KEY = 'ew_lang';

function getLang(): Lang {
  return localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'ua';
}

function setLang(lang: Lang): void {
  localStorage.setItem(LANG_KEY, lang);
  applyI18n();
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
}

document.querySelectorAll<HTMLElement>('.lang-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang === 'en' ? 'en' : 'ua';
    setLang(lang);
  });
});

applyI18n();

window.applyI18n = applyI18n;

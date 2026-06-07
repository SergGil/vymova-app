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
  const toggle = document.getElementById('lang-toggle');
  if (toggle) toggle.textContent = lang === 'ua' ? 'UA' : 'EN';
}

document.getElementById('lang-toggle')?.addEventListener('click', () => {
  setLang(getLang() === 'ua' ? 'en' : 'ua');
});

applyI18n();

window.applyI18n = applyI18n;

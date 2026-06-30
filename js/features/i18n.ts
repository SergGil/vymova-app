// Vymova — js/features/i18n.ts
// Minimal i18n: translates sidebar menu labels (UA ⇄ EN), persisted via localStorage

import { useEffect, type ReactElement } from 'react';
import i18next from 'i18next';
import { notifyStateChange } from '../../src/store.ts';
import ua from '../../locales/ua/translation.json';
import en from '../../locales/en/translation.json';
import es from '../../locales/es/translation.json';
import fr from '../../locales/fr/translation.json';
import uaDates from '../../locales/ua/dates.json';
import enDates from '../../locales/en/dates.json';
import esDates from '../../locales/es/dates.json';
import frDates from '../../locales/fr/dates.json';
import enLevels from '../../locales/en/levels.json';
import esLevels from '../../locales/es/levels.json';
import frLevels from '../../locales/fr/levels.json';
import enCategories from '../../locales/en/categories.json';
import esCategories from '../../locales/es/categories.json';
import frCategories from '../../locales/fr/categories.json';
import enSkills from '../../locales/en/skills.json';
import esSkills from '../../locales/es/skills.json';
import frSkills from '../../locales/fr/skills.json';
import enAchievements from '../../locales/en/achievements.json';
import esAchievements from '../../locales/es/achievements.json';
import frAchievements from '../../locales/fr/achievements.json';
import it from '../../locales/it/translation.json';
import pt from '../../locales/pt/translation.json';
import de from '../../locales/de/translation.json';
import itDates from '../../locales/it/dates.json';
import ptDates from '../../locales/pt/dates.json';
import deDates from '../../locales/de/dates.json';
import itLevels from '../../locales/it/levels.json';
import ptLevels from '../../locales/pt/levels.json';
import deLevels from '../../locales/de/levels.json';
import itCategories from '../../locales/it/categories.json';
import ptCategories from '../../locales/pt/categories.json';
import deCategories from '../../locales/de/categories.json';
import itSkills from '../../locales/it/skills.json';
import ptSkills from '../../locales/pt/skills.json';
import deSkills from '../../locales/de/skills.json';
import itAchievements from '../../locales/it/achievements.json';
import ptAchievements from '../../locales/pt/achievements.json';
import deAchievements from '../../locales/de/achievements.json';

export type Lang = 'ua' | 'en' | 'es' | 'fr' | 'it' | 'pt' | 'de';

const LANG_KEY = 'ew_lang';

function storedLang(): Lang {
  const v = localStorage.getItem(LANG_KEY);
  return v === 'en'
    ? 'en'
    : v === 'es'
      ? 'es'
      : v === 'fr'
        ? 'fr'
        : v === 'it'
          ? 'it'
          : v === 'pt'
            ? 'pt'
            : v === 'de'
              ? 'de'
              : 'ua';
}

i18next.init({
  lng: storedLang(),
  fallbackLng: 'ua',
  keySeparator: false,
  nsSeparator: false,
  ns: ['translation', 'dates', 'levels', 'categories', 'skills', 'achievements'],
  interpolation: { escapeValue: false },
  resources: {
    ua: { translation: ua, dates: uaDates },
    en: {
      translation: en,
      dates: enDates,
      levels: enLevels,
      categories: enCategories,
      skills: enSkills,
      achievements: enAchievements,
    },
    es: {
      translation: es,
      dates: esDates,
      levels: esLevels,
      categories: esCategories,
      skills: esSkills,
      achievements: esAchievements,
    },
    fr: {
      translation: fr,
      dates: frDates,
      levels: frLevels,
      categories: frCategories,
      skills: frSkills,
      achievements: frAchievements,
    },
    it: {
      translation: it,
      dates: itDates,
      levels: itLevels,
      categories: itCategories,
      skills: itSkills,
      achievements: itAchievements,
    },
    pt: {
      translation: pt,
      dates: ptDates,
      levels: ptLevels,
      categories: ptCategories,
      skills: ptSkills,
      achievements: ptAchievements,
    },
    de: {
      translation: de,
      dates: deDates,
      levels: deLevels,
      categories: deCategories,
      skills: deSkills,
      achievements: deAchievements,
    },
  },
});

// 'ua' isn't a valid Intl.PluralRules locale — borrow Ukrainian (uk) plural
// categories (one/few/many/other) so wordsLabel() pluralizes correctly.
const pluralResolver = i18next.services.pluralResolver;
const baseGetRule = pluralResolver.getRule.bind(pluralResolver);
pluralResolver.getRule = (code: string, options?: object) =>
  baseGetRule(code === 'ua' ? 'uk' : code, options);

export function getLang(): Lang {
  return i18next.language as Lang;
}

function setLang(lang: Lang): void {
  localStorage.setItem(LANG_KEY, lang);
  i18next.changeLanguage(lang);
  applyI18n();
}

export function t(key: string, params?: Record<string, string | number>): string {
  return i18next.exists(key, params) ? i18next.t(key, params) : key;
}

export function tLang(key: string, lang: Lang, params?: Record<string, string | number>): string {
  return i18next.exists(key, { ...params, lng: lang }) ? i18next.getFixedT(lang)(key, params) : key;
}

export function wordsLabel(n: number): string {
  return i18next.t('common_word', { count: n });
}

export function pluralLabel(base: string, n: number): string {
  return i18next.t(base, { count: n });
}

export function monthNames(): string[] {
  const lang = getLang();
  return (i18next.getResource(lang, 'dates', 'months') as string[] | undefined) ?? uaDates.months;
}

export function dowNames(): string[] {
  const lang = getLang();
  return (i18next.getResource(lang, 'dates', 'dows') as string[] | undefined) ?? uaDates.dows;
}

export function levelName(name: string): string {
  return i18next.t(name, { ns: 'levels', defaultValue: name });
}

export function categoryName(name: string): string {
  return i18next.t(name, { ns: 'categories', defaultValue: name });
}

export function skillName(name: string): string {
  return i18next.t(name, { ns: 'skills', defaultValue: name });
}

export function achName(a: { id: string; name: string }): string {
  return i18next.t(`${a.id}_name`, { ns: 'achievements', defaultValue: a.name });
}

export function achHint(a: { id: string; hint: string }): string {
  return i18next.t(`${a.id}_hint`, { ns: 'achievements', defaultValue: a.hint });
}

export function achCatName(cat: string): string {
  return i18next.t(cat, { ns: 'achievements', defaultValue: cat });
}

function applyI18n(): void {
  const lang = getLang();
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (key && i18next.exists(key)) el.textContent = tLang(key, lang);
  });
  document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (key && i18next.exists(key)) el.placeholder = tLang(key, lang);
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-title]').forEach((el) => {
    const key = el.dataset.i18nTitle;
    if (key && i18next.exists(key)) el.title = tLang(key, lang);
  });
  document.querySelectorAll<HTMLOptGroupElement>('[data-i18n-label]').forEach((el) => {
    const key = el.dataset.i18nLabel;
    if (key && i18next.exists(key)) el.label = tLang(key, lang);
  });
  document.querySelectorAll<HTMLElement>('.lang-opt').forEach((btn) => {
    btn.classList.toggle('lang-active', btn.dataset.lang === lang);
  });
  // Один notifyStateChange() ре-рендерить усі useStateVersion-підписники:
  // lang-pair-select, word-of-day, search-inline/overlay, tag-filter-select,
  // game bar (streak/goal/level), achievements/levels roadmap — заміна
  // ~10 окремих window._refreshXxx/renderXxx викликів (усі — тонкі
  // notifyStateChange()-обгортки).
  notifyStateChange();
  import('./deck-filter.tsx')
    .then(({ _refreshRangeOptions }) => _refreshRangeOptions())
    .catch(() => {});
  import('../core/card-engine.ts').then(({ render }) => render()).catch(() => {});
  if (document.getElementById('lp-overlay')?.classList.contains('open')) {
    import('./learning-path.ts')
      .then(({ renderLearningPath }) => renderLearningPath())
      .catch(() => {});
  }
  if (document.getElementById('duel-overlay')?.classList.contains('open')) {
    import('./duel.ts').then(({ renderDuel }) => renderDuel()).catch(() => {});
  }
  if (document.getElementById('grammar-overlay')?.classList.contains('open')) {
    import('./grammar-page.tsx')
      .then(({ openGrammarContent }) => openGrammarContent())
      .catch(() => {});
  }
  if (document.getElementById('idioms-overlay')?.classList.contains('open')) {
    import('./idioms-page.tsx')
      .then(({ openIdiomsContent }) => openIdiomsContent())
      .catch(() => {});
  }
  if (document.getElementById('settings-overlay')?.classList.contains('open')) {
    import('./notifications.tsx').then(({ _updateUI }) => _updateUI()).catch(() => {});
    import('./cloud-sync.tsx')
      .then(({ _refreshCloudSyncUI }) => _refreshCloudSyncUI())
      .catch(() => {});
    import('./voice.tsx').then(({ _renderVoices }) => _renderVoices()).catch(() => {});
  }
  const statsOverlay = document.getElementById('stats-overlay') as HTMLElement | null;
  if (statsOverlay && statsOverlay.style.display === 'flex') {
    import('./stats-page.tsx').then(({ refreshStatsPage }) => refreshStatsPage()).catch(() => {});
    import('../modes/catpairs.tsx')
      .then(({ renderWeakWords }) => renderWeakWords())
      .catch(() => {});
  }
}

applyI18n();

export function I18nInit(): ReactElement | null {
  useEffect(() => {
    const btns = document.querySelectorAll<HTMLElement>('.lang-opt');
    const onLangClick = (btn: HTMLElement) => () => {
      const dl = btn.dataset.lang;
      const lang: Lang =
        dl === 'en'
          ? 'en'
          : dl === 'es'
            ? 'es'
            : dl === 'fr'
              ? 'fr'
              : dl === 'it'
                ? 'it'
                : dl === 'pt'
                  ? 'pt'
                  : dl === 'de'
                    ? 'de'
                    : 'ua';
      setLang(lang);
    };
    const handlers = new Map<HTMLElement, () => void>();
    btns.forEach((btn) => {
      const handler = onLangClick(btn);
      handlers.set(btn, handler);
      btn.addEventListener('click', handler);
    });

    return () => {
      handlers.forEach((handler, btn) => btn.removeEventListener('click', handler));
    };
  }, []);

  return null;
}

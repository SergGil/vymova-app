// Vymova — js/features/i18n.ts
// Minimal i18n: translates UI labels, persisted via localStorage.
// Only the active locale is bundled at startup; the other 6 are lazy-loaded
// on first language switch (same pattern as per-language word tables).

import { useEffect, type ReactElement } from 'react';
import i18next from 'i18next';
import { notifyStateChange } from '../../src/store.ts';
import ua from '../../locales/ua/translation.json';
import uaDates from '../../locales/ua/dates.json';

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

// ── Lazy-load infrastructure ───────────────────────────────────

type LocaleBundle = {
  translation: Record<string, unknown>;
  dates: Record<string, unknown>;
  levels: Record<string, unknown>;
  categories: Record<string, unknown>;
  skills: Record<string, unknown>;
  achievements: Record<string, unknown>;
};

type NonUaLang = Exclude<Lang, 'ua'>;

// One dynamic import per locale — Rollup/Vite bundles each into its own chunk.
const LOCALE_LOADERS: Record<NonUaLang, () => Promise<LocaleBundle>> = {
  en: () => import('../../locales/en/index.ts') as Promise<LocaleBundle>,
  es: () => import('../../locales/es/index.ts') as Promise<LocaleBundle>,
  fr: () => import('../../locales/fr/index.ts') as Promise<LocaleBundle>,
  it: () => import('../../locales/it/index.ts') as Promise<LocaleBundle>,
  pt: () => import('../../locales/pt/index.ts') as Promise<LocaleBundle>,
  de: () => import('../../locales/de/index.ts') as Promise<LocaleBundle>,
};

const LOADED: Partial<Record<NonUaLang, LocaleBundle>> = {};
const LOADING: Partial<Record<NonUaLang, Promise<void>>> = {};

function _addBundle(lang: NonUaLang, b: LocaleBundle): void {
  i18next.addResourceBundle(lang, 'translation', b.translation, true, true);
  i18next.addResourceBundle(lang, 'dates', b.dates, true, true);
  i18next.addResourceBundle(lang, 'levels', b.levels, true, true);
  i18next.addResourceBundle(lang, 'categories', b.categories, true, true);
  i18next.addResourceBundle(lang, 'skills', b.skills, true, true);
  i18next.addResourceBundle(lang, 'achievements', b.achievements, true, true);
}

export async function ensureLocaleLoaded(lang: Lang): Promise<void> {
  if (lang === 'ua') return;
  const code = lang as NonUaLang;
  if (LOADED[code]) return;
  if (!LOADING[code]) {
    LOADING[code] = LOCALE_LOADERS[code]().then((bundle) => {
      LOADED[code] = bundle;
      // Only call addResourceBundle if i18next is already initialised (i.e.
      // called from setLang() during a switch, not from the boot block below).
      if (i18next.isInitialized) _addBundle(code, bundle);
    });
  }
  await LOADING[code];
}

// ── Boot: pre-load the active locale before i18next.init() ────

const initialLang = storedLang();

if (initialLang !== 'ua') {
  await ensureLocaleLoaded(initialLang);
}

// Build the initial resources object (ua always present; active lang if loaded)
const _initResources: Record<string, Record<string, unknown>> = {
  ua: { translation: ua as Record<string, unknown>, dates: uaDates as Record<string, unknown> },
};
const _activeBundle = LOADED[initialLang as NonUaLang];
if (_activeBundle) {
  _initResources[initialLang] = {
    translation: _activeBundle.translation,
    dates: _activeBundle.dates,
    levels: _activeBundle.levels,
    categories: _activeBundle.categories,
    skills: _activeBundle.skills,
    achievements: _activeBundle.achievements,
  };
}

i18next.init({
  lng: initialLang,
  fallbackLng: 'ua',
  keySeparator: false,
  nsSeparator: false,
  ns: ['translation', 'dates', 'levels', 'categories', 'skills', 'achievements'],
  interpolation: { escapeValue: false },
  resources: _initResources as Parameters<typeof i18next.init>[0]['resources'],
});

// 'ua' isn't a valid Intl.PluralRules locale — borrow Ukrainian (uk) plural
// categories (one/few/many/other) so wordsLabel() pluralizes correctly.
const pluralResolver = i18next.services.pluralResolver;
const baseGetRule = pluralResolver.getRule.bind(pluralResolver);
pluralResolver.getRule = (code: string, options?: object) =>
  baseGetRule(code === 'ua' ? 'uk' : code, options);

// ── Public API ────────────────────────────────────────────────

export function getLang(): Lang {
  return i18next.language as Lang;
}

function setLang(lang: Lang): void {
  localStorage.setItem(LANG_KEY, lang);
  void ensureLocaleLoaded(lang).then(() => {
    // If loaded via ensureLocaleLoaded after init, _addBundle was already called.
    // If it was the initial lang (loaded before init), resources are in init().
    i18next.changeLanguage(lang);
    applyI18n();
  });
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

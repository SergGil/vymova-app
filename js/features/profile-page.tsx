// Vymova — js/features/profile-page.tsx
// Profile page: full-body character avatar + customization + key stats.
import { createPortal } from 'react-dom';
import { useState, type ReactElement } from 'react';
import {
  CharacterAvatar,
  BODY_TYPES,
  SKIN_TONES,
  HAIR_STYLES,
  HAIR_COLORS,
  EYE_COLORS,
  OUTFIT_STYLES,
  OUTFIT_COLORS,
} from './character-avatar.tsx';
import { loadCharacter, saveCharacter } from '../core/storage.ts';
import { getGameData, loadUnlocked } from './game.ts';
import { getKnownInLang } from './mode-utils.ts';
import { ACHIEVEMENTS } from '../../data/achievements.ts';
import { t } from './i18n.ts';
import { useStateVersion } from '../../src/store.ts';
import type { CharacterAppearance } from '../../src/types.js';
import { getKnownSnapshot, type KnownLang } from '../../src/known-words-store.ts';
import { ALL_TARGET_LANGS } from '../../src/types.ts';
import { flagUrl } from '../core/flags.ts';

type PickerKey = keyof CharacterAppearance;

const PICKERS: { key: PickerKey; labelKey: string; len: number; names?: () => string[] }[] = [
  {
    key: 'bodyType',
    labelKey: 'profile.bodyType',
    len: BODY_TYPES.length,
    names: () => [t('profile.bodyMasc'), t('profile.bodyFem')],
  },
  { key: 'skinTone', labelKey: 'profile.skinTone', len: SKIN_TONES.length },
  { key: 'hairStyle', labelKey: 'profile.hairStyle', len: HAIR_STYLES.length },
  { key: 'hairColor', labelKey: 'profile.hairColor', len: HAIR_COLORS.length },
  { key: 'eyeColor', labelKey: 'profile.eyeColor', len: EYE_COLORS.length },
  { key: 'outfitStyle', labelKey: 'profile.outfit', len: OUTFIT_STYLES.length },
  { key: 'outfitColor', labelKey: 'profile.outfitColor', len: OUTFIT_COLORS.length },
];

// Language display names (native) + ISO 3166-1 alpha-2 country codes for flags.
// Uses the same flagUrl() / data/countries/*.svg system as lang-pair-select.
const LANG_META: Record<string, { name: string; country: string }> = {
  en: { name: 'English', country: 'gb' },
  es: { name: 'Español', country: 'es' },
  fr: { name: 'Français', country: 'fr' },
  it: { name: 'Italiano', country: 'it' },
  pt: { name: 'Português', country: 'pt' },
  de: { name: 'Deutsch', country: 'de' },
  he: { name: 'עִברִית', country: 'il' },
  ar: { name: 'العربية', country: 'sa' },
  pl: { name: 'Polski', country: 'pl' },
  zh: { name: '中文', country: 'cn' },
  el: { name: 'Ελληνικά', country: 'gr' },
  ja: { name: '日本語', country: 'jp' },
  tr: { name: 'Türkçe', country: 'tr' },
  nl: { name: 'Nederlands', country: 'nl' },
};

function LangFlag({ lang, size = 24 }: { lang: string; size?: number }): ReactElement {
  const meta = LANG_META[lang];
  const src = meta ? (flagUrl(meta.country) ?? null) : null;
  if (src) return <img src={src} alt={meta.name} width={size} height={size} className="profile-lang-flag-img" />;
  return <span className="profile-lang-flag-fb">{lang.toUpperCase()}</span>;
}

export function ProfilePage(): ReactElement | null {
  useStateVersion();
  const target = document.getElementById('profile-content');
  const [savedAppearance, setSavedAppearance] = useState<CharacterAppearance>(() =>
    loadCharacter(),
  );
  const [appearance, setAppearance] = useState<CharacterAppearance>(savedAppearance);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const dirty = PICKERS.some((p) => appearance[p.key] !== savedAppearance[p.key]);

  if (!target) return null;

  function cycle(key: PickerKey, len: number, dir: 1 | -1): void {
    setAppearance((prev) => ({ ...prev, [key]: ((((prev[key] ?? 0) + dir) % len) + len) % len }));
  }

  function saveChanges(): void {
    saveCharacter(appearance);
    setSavedAppearance(appearance);
  }

  const gd = getGameData();
  const knownCount = getKnownInLang();
  const totalXp = (gd.xp ?? 0) + knownCount * 5;
  const achCount = loadUnlocked().length;

  // Current learn language (always shown as primary card)
  const rawLearnLang = localStorage.getItem('ew_learn_lang') ?? 'en';
  const learnLang = (LANG_META[rawLearnLang] ? rawLearnLang : 'en') as KnownLang;
  const primaryCount = getKnownSnapshot(learnLang).size;
  const primaryMeta = LANG_META[learnLang];

  // Other languages with at least 1 known word
  const otherLangs = (['en', ...ALL_TARGET_LANGS] as KnownLang[])
    .filter((code) => code !== learnLang)
    .map((code) => ({ code, count: getKnownSnapshot(code).size }))
    .filter((x) => x.count > 0);

  return createPortal(
    <div className="profile-panel">
      <div className="profile-avatar-wrap">
        <CharacterAvatar appearance={appearance} size={200} />
      </div>

      <div className="profile-customize">
        <button
          className="profile-customize-toggle"
          onClick={() => setCustomizeOpen((o) => !o)}
          aria-expanded={customizeOpen}
        >
          <span>{t('profile.customizeTitle')}</span>
          <span className={`profile-customize-chevron${customizeOpen ? ' open' : ''}`}>▼</span>
        </button>
        {customizeOpen && (
          <div className="profile-customize-body">
            {PICKERS.map((p) => (
              <div className="profile-picker-row" key={p.key}>
                <span className="profile-picker-label">{t(p.labelKey)}</span>
                <div className="profile-picker-controls">
                  <button className="profile-picker-arrow" onClick={() => cycle(p.key, p.len, -1)}>
                    ◀
                  </button>
                  <span className="profile-picker-val">
                    {p.names
                      ? p.names()[appearance[p.key] ?? 0]
                      : `${(appearance[p.key] ?? 0) + 1} / ${p.len}`}
                  </span>
                  <button className="profile-picker-arrow" onClick={() => cycle(p.key, p.len, 1)}>
                    ▶
                  </button>
                </div>
              </div>
            ))}
            <button className="profile-save-btn" disabled={!dirty} onClick={saveChanges}>
              {t('profile.saveChanges')}
            </button>
          </div>
        )}
      </div>

      <div className="profile-lang-stats">
        <div className="profile-lang-stats-title">{t('profile.langStatsTitle')}</div>
        <div className="profile-lang-grid">

          {/* Primary card — current learn language with all global stats */}
          <div className="profile-lang-card profile-lang-card--primary">
            <LangFlag lang={learnLang} size={40} />
            <div className="profile-lang-info">
              <span className="profile-lang-name">{primaryMeta?.name ?? learnLang.toUpperCase()}</span>
              <div className="profile-lang-mini-stats">
                <div className="profile-mini-stat">
                  <span className="profile-mini-val">{gd.streak || 0}</span>
                  <span className="profile-mini-label">{t('stats.daysStreak')}</span>
                </div>
                <div className="profile-mini-stat">
                  <span className="profile-mini-val">{primaryCount}</span>
                  <span className="profile-mini-label">{t('stats.wordsLearned')}</span>
                </div>
                <div className="profile-mini-stat">
                  <span className="profile-mini-val">{totalXp}</span>
                  <span className="profile-mini-label">{t('profile.totalXp')}</span>
                </div>
                <div className="profile-mini-stat">
                  <span className="profile-mini-val">
                    {achCount}/{ACHIEVEMENTS.length}
                  </span>
                  <span className="profile-mini-label">{t('profile.achievements')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Other languages — compact, only if ≥1 word known */}
          {otherLangs.map(({ code, count }) => (
            <div key={code} className="profile-lang-card">
              <LangFlag lang={code} size={28} />
              <div className="profile-lang-info">
                <span className="profile-lang-name">{LANG_META[code]?.name ?? code.toUpperCase()}</span>
                <span className="profile-lang-count">
                  {count} {t('profile.langWords')}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>,
    target,
  );
}

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

// Native language names + flags — intentionally not translated, as native
// names are universally recognizable regardless of UI language.
const LANG_INFO: Record<string, { flag: string; name: string }> = {
  en: { flag: '🇬🇧', name: 'English' },
  es: { flag: '🇪🇸', name: 'Español' },
  fr: { flag: '🇫🇷', name: 'Français' },
  it: { flag: '🇮🇹', name: 'Italiano' },
  pt: { flag: '🇵🇹', name: 'Português' },
  de: { flag: '🇩🇪', name: 'Deutsch' },
  he: { flag: '🇮🇱', name: 'עִברִית' },
  ar: { flag: '🇸🇦', name: 'العربية' },
  pl: { flag: '🇵🇱', name: 'Polski' },
  zh: { flag: '🇨🇳', name: '中文' },
  el: { flag: '🇬🇷', name: 'Ελληνικά' },
  ja: { flag: '🇯🇵', name: '日本語' },
  tr: { flag: '🇹🇷', name: 'Türkçe' },
  nl: { flag: '🇳🇱', name: 'Nederlands' },
};

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

  const langStats = (['en', ...ALL_TARGET_LANGS] as KnownLang[])
    .map((code) => ({ code, count: getKnownSnapshot(code).size, ...LANG_INFO[code] }))
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

      <div className="stats-summary profile-stats">
        <div className="stat-card">
          <div className="sv">{gd.streak || 0}</div>
          <div className="sl">{t('stats.daysStreak')}</div>
        </div>
        <div className="stat-card">
          <div className="sv">{totalXp}</div>
          <div className="sl">{t('profile.totalXp')}</div>
        </div>
        <div className="stat-card">
          <div className="sv">{knownCount}</div>
          <div className="sl">{t('stats.wordsLearned')}</div>
        </div>
        <div className="stat-card">
          <div className="sv">
            {achCount}/{ACHIEVEMENTS.length}
          </div>
          <div className="sl">{t('profile.achievements')}</div>
        </div>
      </div>

      {langStats.length > 0 && (
        <div className="profile-lang-stats">
          <div className="profile-lang-stats-title">{t('profile.langStatsTitle')}</div>
          <div className="profile-lang-grid">
            {langStats.map(({ code, flag, name, count }) => (
              <div key={code} className="profile-lang-card">
                <span className="profile-lang-flag">{flag}</span>
                <div className="profile-lang-info">
                  <span className="profile-lang-name">{name}</span>
                  <span className="profile-lang-count">
                    {count} {t('profile.langWords')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>,
    target,
  );
}

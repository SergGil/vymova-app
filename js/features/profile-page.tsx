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
import { loadUnlocked, getLangStreak, getLangXp, getLangAchCount } from './game.ts';
import { getKnownInLang } from './mode-utils.ts';
import { ACHIEVEMENTS } from '../../data/achievements.ts';
import { t, wordsLabel } from './i18n.ts';
import { useStateVersion } from '../../src/store.ts';
import type { CharacterAppearance } from '../../src/types.js';
import { useAllKnownWords, type KnownLang } from '../../src/known-words-store.ts';
import { ALL_TARGET_LANGS } from '../../src/types.ts';
import { flagUrl } from '../core/flags.ts';
import { getLevelInfo, LEVEL_XP, LEVEL_MILESTONES } from '../core/level-system.ts';

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

// Language display names (native) + ISO 3166-1 alpha-2 country codes.
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
  vi: { name: 'Tiếng Việt', country: 'vn' },
};

function FlagCircle({ lang, size = 44 }: { lang: string; size?: number }): ReactElement {
  const meta = LANG_META[lang];
  const src = meta ? (flagUrl(meta.country) ?? null) : null;
  return (
    <div
      className="profile-flag-circle"
      style={{ width: size, height: size }}
      aria-label={meta?.name ?? lang}
    >
      {src
        ? <img src={src} alt={meta?.name ?? lang} className="profile-flag-circle-img" />
        : <span className="profile-flag-circle-fb">{lang.slice(0, 2).toUpperCase()}</span>
      }
    </div>
  );
}

function getProfileName(): string {
  try {
    const profiles = JSON.parse(localStorage.getItem('ew_profiles') ?? '[]') as { id: string; name?: string }[];
    const activeId = localStorage.getItem('ew_active_profile') ?? '';
    return profiles.find((p) => p.id === activeId)?.name ?? '';
  } catch {
    return '';
  }
}

export function ProfilePage(): ReactElement | null {
  useStateVersion();
  const allKnownWords = useAllKnownWords();
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

  const achCount = loadUnlocked().length;

  // Total XP across ALL languages (words × 5 + game activity XP per language) — reactive via useAllKnownWords
  const allLangs = ['en', ...ALL_TARGET_LANGS] as KnownLang[];
  const allKnownCount = allLangs.reduce((sum, lang) => sum + allKnownWords[lang].size, 0);
  const allGameXp = allLangs.reduce((sum, lang) => sum + getLangXp(lang), 0);
  const totalXp = allGameXp + allKnownCount * 5;
  const levelInfo = getLevelInfo(totalXp);

  // Current language
  const rawLearnLang = localStorage.getItem('ew_learn_lang') ?? 'en';
  const learnLang = (LANG_META[rawLearnLang] ? rawLearnLang : 'en') as KnownLang;
  const primaryMeta = LANG_META[learnLang];

  // Other languages with at least 1 known word
  const otherLangs = (['en', ...ALL_TARGET_LANGS] as KnownLang[])
    .filter((code) => code !== learnLang)
    .map((code) => ({ code, count: allKnownWords[code].size }))
    .filter((x) => x.count > 0);

  // knownCount in current lang for the primary card
  const knownCount = getKnownInLang();

  const profileName = getProfileName();
  const xpNext = levelInfo.isMax ? null : LEVEL_XP[levelInfo.level];

  return createPortal(
    <div className="profile-panel">

      {/* ── Hero card ─────────────────────────────────────────────── */}
      <div className="profile-hero">
        <div className="profile-hero-banner" />
        <div className="profile-hero-body">
          <div className="profile-hero-avatar-ring">
            <CharacterAvatar appearance={appearance} size={90} />
          </div>
          {profileName && (
            <div className="profile-hero-name">{profileName}</div>
          )}
          <div className="profile-hero-level-row">
            <span className="profile-hero-lvl-badge" aria-label={`${t('profile.level')} ${levelInfo.level}`}>
              {t('profile.level')} {levelInfo.level}{levelInfo.isMax ? ' 🏅' : ''}
            </span>
            {!levelInfo.isMax && (
              <div className="profile-hero-bar-wrap">
                <div
                  className="profile-hero-bar"
                  style={{ width: `${Math.round(levelInfo.progress * 100)}%` }}
                />
              </div>
            )}
            <span className="profile-hero-xp-text">
              {levelInfo.isMax
                ? t('profile.levelMax')
                : `${totalXp.toLocaleString()} / ${(xpNext ?? 0).toLocaleString()} XP`}
            </span>
            {/* Info popup — click to toggle */}
            <details className="level-info-wrap">
              <summary className="level-info-btn" title={t('profile.xpInfo')}>ⓘ</summary>
              <div className="level-info-popup">
                <div className="level-info-title">{t('profile.xpInfo')}</div>
                <div className="level-info-rule">{t('profile.xpWordRule')}</div>
                <div className="level-info-rule">{t('profile.xpGameRule')}</div>
                <div className="level-info-rule">{t('profile.xpComboRule')}</div>
                <div className="level-info-divider" />
                <div className="level-info-table-title">{t('profile.xpLevelTable')}</div>
                {LEVEL_MILESTONES.map(([lv, xp]) => (
                  <div key={lv} className="level-info-row">
                    <span>{t('profile.level')} {lv}</span>
                    <span>{xp.toLocaleString()} XP</span>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* ── Customize dropdown ───────────────────────────────────── */}
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

      {/* ── Language stats ───────────────────────────────────────── */}
      <div className="profile-lang-stats">
        <div className="profile-lang-stats-title">{t('profile.langStatsTitle')}</div>
        <div className="profile-lang-grid">

          {/* Primary card — current learn language */}
          <div className="profile-lang-card profile-lang-card--primary">
            <FlagCircle lang={learnLang} size={48} />
            <div className="profile-lang-info">
              <span className="profile-lang-name">{primaryMeta?.name ?? learnLang.toUpperCase()}</span>
              <div className="profile-stat-row">
                <span className="profile-stat-item">
                  <span className="profile-stat-val">{getLangStreak(learnLang)}</span>
                  <span className="profile-stat-lbl">{t('stats.daysStreak')}</span>
                </span>
                <span className="profile-stat-item">
                  <span className="profile-stat-icon">📖</span>
                  <span className="profile-stat-val">{knownCount}</span>
                  <span className="profile-stat-lbl">{wordsLabel(knownCount)}</span>
                </span>
                <span className="profile-stat-item">
                  <span className="profile-stat-icon">⭐</span>
                  <span className="profile-stat-val">{(getLangXp(learnLang) + allKnownWords[learnLang].size * 5).toLocaleString()}</span>
                  <span className="profile-stat-lbl">XP</span>
                </span>
                <span className="profile-stat-item">
                  <span className="profile-stat-icon">🏆</span>
                  <span className="profile-stat-val">{achCount}/{ACHIEVEMENTS.length}</span>
                  <span className="profile-stat-lbl">{t('profile.achievements')}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Secondary language cards */}
          {otherLangs.map(({ code, count }) => (
            <div key={code} className="profile-lang-card">
              <FlagCircle lang={code} size={38} />
              <div className="profile-lang-info">
                <span className="profile-lang-name">{LANG_META[code]?.name ?? code.toUpperCase()}</span>
                <div className="profile-stat-row">
                  <span className="profile-stat-item">
                    <span className="profile-stat-val">{getLangStreak(code)}</span>
                    <span className="profile-stat-lbl">{t('stats.daysStreak')}</span>
                  </span>
                  <span className="profile-stat-item">
                    <span className="profile-stat-icon">📖</span>
                    <span className="profile-stat-val">{count}</span>
                    <span className="profile-stat-lbl">{wordsLabel(count)}</span>
                  </span>
                  <span className="profile-stat-item">
                    <span className="profile-stat-icon">⭐</span>
                    <span className="profile-stat-val">{(getLangXp(code) + count * 5).toLocaleString()}</span>
                    <span className="profile-stat-lbl">XP</span>
                  </span>
                  <span className="profile-stat-item">
                    <span className="profile-stat-icon">🏆</span>
                    <span className="profile-stat-val">{getLangAchCount(code)}/{ACHIEVEMENTS.length}</span>
                    <span className="profile-stat-lbl">{t('profile.achievements')}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>,
    target,
  );
}

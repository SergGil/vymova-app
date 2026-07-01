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
};

function LangFlag({ lang, size = 24 }: { lang: string; size?: number }): ReactElement {
  const meta = LANG_META[lang];
  const src = meta ? (flagUrl(meta.country) ?? null) : null;
  if (src)
    return (
      <img
        src={src}
        alt={meta.name}
        width={size}
        height={size}
        className="profile-lang-flag-img"
      />
    );
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
  const achCount = loadUnlocked().length;

  // Total XP across ALL languages (words × 5 + game activity XP)
  const allKnownCount = (['en', ...ALL_TARGET_LANGS] as KnownLang[]).reduce(
    (sum, lang) => sum + getKnownSnapshot(lang).size,
    0,
  );
  const totalXp = (gd.xp ?? 0) + allKnownCount * 5;
  const levelInfo = getLevelInfo(totalXp);

  // Current language word count (for the primary lang card)
  const rawLearnLang = localStorage.getItem('ew_learn_lang') ?? 'en';
  const learnLang = (LANG_META[rawLearnLang] ? rawLearnLang : 'en') as KnownLang;
  const primaryCount = getKnownSnapshot(learnLang).size;
  const primaryMeta = LANG_META[learnLang];

  // Other languages with at least 1 known word
  const otherLangs = (['en', ...ALL_TARGET_LANGS] as KnownLang[])
    .filter((code) => code !== learnLang)
    .map((code) => ({ code, count: getKnownSnapshot(code).size }))
    .filter((x) => x.count > 0);

  // knownCount in current lang for the mini-stat card
  const knownCount = getKnownInLang();

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

      {/* ── Level card ────────────────────────────────────────── */}
      <div className="profile-level-card">
        <div className="profile-level-top">
          <div className="profile-level-badge" aria-label={`${t('profile.level')} ${levelInfo.level}`}>
            {levelInfo.level}
          </div>
          <div className="profile-level-meta">
            <span className="profile-level-label">
              {t('profile.level')} <strong>{levelInfo.level}</strong>
              {levelInfo.isMax && ' 🏅'}
            </span>
            <span className="profile-level-sub">
              {levelInfo.isMax
                ? t('profile.levelMax')
                : `${totalXp.toLocaleString()} / ${LEVEL_XP[levelInfo.level].toLocaleString()} XP`}
            </span>
          </div>

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

        {!levelInfo.isMax && (
          <div className="profile-level-bar-wrap">
            <div
              className="profile-level-bar"
              style={{ width: `${Math.round(levelInfo.progress * 100)}%` }}
            />
          </div>
        )}
      </div>

      {/* ── Language stats ───────────────────────────────────── */}
      <div className="profile-lang-stats">
        <div className="profile-lang-stats-title">{t('profile.langStatsTitle')}</div>
        <div className="profile-lang-grid">

          {/* Primary card — current learn language with stats */}
          <div className="profile-lang-card profile-lang-card--primary">
            <LangFlag lang={learnLang} size={40} />
            <div className="profile-lang-info">
              <span className="profile-lang-name">
                {primaryMeta?.name ?? learnLang.toUpperCase()}
              </span>
              <div className="profile-lang-mini-stats">
                <div className="profile-mini-stat">
                  <span className="profile-mini-val">{gd.streak || 0}</span>
                  <span className="profile-mini-label">{t('stats.daysStreak')}</span>
                </div>
                <div className="profile-mini-stat">
                  <span className="profile-mini-val">{knownCount}</span>
                  <span className="profile-mini-label">{t('stats.wordsLearned')}</span>
                </div>
                <div className="profile-mini-stat">
                  <span className="profile-mini-val">{totalXp.toLocaleString()}</span>
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

          {/* Other languages — compact */}
          {otherLangs.map(({ code, count }) => (
            <div key={code} className="profile-lang-card">
              <LangFlag lang={code} size={28} />
              <div className="profile-lang-info">
                <span className="profile-lang-name">
                  {LANG_META[code]?.name ?? code.toUpperCase()}
                </span>
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

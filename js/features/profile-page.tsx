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
  hi: { name: "हिन्दी", country: 'in' },
  bn: { name: "বাংলা", country: 'bd' },
  id: { name: "Bahasa Indonesia", country: 'id' },
  pcm: { name: "Naijá", country: 'ng' },
  ko: { name: "한국어", country: 'kr' },
  fa: { name: "فارسی", country: 'ir' },
  sw: { name: "Kiswahili", country: 'tz' },
  ms: { name: "Bahasa Melayu", country: 'my' },
  th: { name: "ภาษาไทย", country: 'th' },
  az: { name: "Azərbaycanca", country: 'az' },
  ro: { name: "Română", country: 'ro' },
  hu: { name: "Magyar", country: 'hu' },
  cs: { name: "Čeština", country: 'cz' },
  kk: { name: "Қазақша", country: 'kz' },
  sv: { name: "Svenska", country: 'se' },
  ka: { name: "ქართული", country: 'ge' },
  hr: { name: "Hrvatski", country: 'hr' },
  sr: { name: "Српски", country: 'rs' },
  bs: { name: "Bosanski", country: 'ba' },
  bg: { name: "Български", country: 'bg' },
  sk: { name: "Slovenčina", country: 'sk' },
  hy: { name: "Հայերեն", country: 'am' },
  da: { name: "Dansk", country: 'dk' },
  fi: { name: "Suomi", country: 'fi' },
  no: { name: "Norsk", country: 'no' },
  la: { name: "Latina", country: 'spqr' },
  lt: { name: "Lietuvių", country: 'lt' },
  lv: { name: "Latviešu", country: 'lv' },
  et: { name: "Eesti", country: 'ee' },
  sl: { name: "Slovenščina", country: 'si' },
  mk: { name: "Македонски", country: 'mk' },
  sq: { name: "Shqip", country: 'al' },
  is: { name: "Íslenska", country: 'is' },
  cy: { name: "Cymraeg", country: 'wls' },
  ga: { name: "Gaeilge", country: 'ie' },
  tl: { name: "Filipino", country: 'ph' },
  mn: { name: "Монгол", country: 'mn' },
  uz: { name: "Oʻzbekcha", country: 'uz' },
  am: { name: "አማርኛ", country: 'et' },
  eo: { name: "Esperanto", country: 'eo' },
  ta: { name: "தமிழ்", country: 'in' },
  pa: { name: "ਪੰਜਾਬੀ", country: 'in' },
  zu: { name: "isiZulu", country: 'za' },
  af: { name: "Afrikaans", country: 'za' },
  ky: { name: "Кыргызча", country: 'kg' },
  tg: { name: "Тоҷикӣ", country: 'tj' },
  tk: { name: "Türkmençe", country: 'tm' },
  ug: { name: "ئۇيغۇرچە", country: 'cn' },
  eu: { name: "Euskara", country: 'eu' },
  ca: { name: "Català", country: 'cat' },
  gl: { name: "Galego", country: 'gal' },
  mt: { name: "Malti", country: 'mt' },
  lb: { name: "Lëtzebuergesch", country: 'lu' },
  ht: { name: "Kreyòl Ayisyen", country: 'ht' },
  bo: { name: "བོད་སྐད་", country: 'cn' },
  my: { name: "မြန်မာဘာသာ", country: 'mm' },
  km: { name: "ខ្មែរ", country: 'kh' },
  lo: { name: "ລາວ", country: 'la' },
  ne: { name: "नेपाली", country: 'np' },
  si: { name: "සිංහල", country: 'lk' },
  ur: { name: "اردو", country: 'pk' },
  te: { name: "తెలుగు", country: 'in' },
  ml: { name: "മലയാളം", country: 'in' },
  kn: { name: "ಕನ್ನಡ", country: 'in' },
  mr: { name: "मराठी", country: 'in' },
  gu: { name: "ગુજરાતી", country: 'in' },
  or: { name: "ଓଡ଼ିଆ", country: 'in' },
  as: { name: "অসমীয়া", country: 'in' },
  sd: { name: "سنڌي", country: 'pk' },
  ps: { name: "پښتو", country: 'af' },
  so: { name: "Soomaali", country: 'so' },
  ha: { name: "Hausa", country: 'ng' },
  yo: { name: "Yorùbá", country: 'ng' },
  ig: { name: "Igbo", country: 'ng' },
  ti: { name: "ትግርኛ", country: 'er' },
  wo: { name: "Wolof", country: 'sn' },
  mg: { name: "Malagasy", country: 'mg' },
  xh: { name: "isiXhosa", country: 'za' },
  sn: { name: "chiShona", country: 'zw' },
  ny: { name: "Chichewa", country: 'mw' },
  fj: { name: "Na Vosa Vakaviti", country: 'fj' },
  sm: { name: "Gagana Sāmoa", country: 'ws' },
  to: { name: "Lea Faka-Tonga", country: 'to' },
  mi: { name: "Te Reo Māori", country: 'nz' },
  haw: { name: "ʻŌlelo Hawaiʻi", country: 'us' },
  jv: { name: "Basa Jawa", country: 'id' },
  su: { name: "Basa Sunda", country: 'id' },
  gd: { name: "Gàidhlig", country: 'sct' },
  br: { name: "Brezhoneg", country: 'fr' },
  kw: { name: "Kernewek", country: 'corn' },
  gv: { name: "Gaelg", country: 'gb' },
  fo: { name: "Føroyskt", country: 'fo' },
  oc: { name: "Occitan", country: 'fr' },
  co: { name: "Corsu", country: 'fr' },
  sc: { name: "Sardu", country: 'it' },
  fy: { name: "Frysk", country: 'nl' },
  yi: { name: "ייִדיש", country: 'il' },
  lad: { name: "Judeoespañol", country: 'es' },
  qu: { name: "Runasimi", country: 'pe' },
  gn: { name: "Avañeʼẽ", country: 'py' },
  ay: { name: "Aymar aru", country: 'bo' },
  dz: { name: "རྫོང་ཁ", country: 'bt' },
  dv: { name: "ދިވެހި", country: 'mv' },
  tet: { name: "Tetun", country: 'tl' },
  be: { name: "Беларуская", country: 'by' },
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

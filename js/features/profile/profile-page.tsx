// Vymova — js/features/profile/profile-page.tsx
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
} from '../character-avatar.tsx';
import { loadCharacter, saveCharacter } from '../../core/storage.ts';
import { loadUnlocked, getLangStreak, getLangXp, getLangAchCount } from '../game/game.ts';
import { getKnownInLang } from '../mode/mode-utils.ts';
import { ACHIEVEMENTS } from '../../../data/achievements.ts';
import { t, wordsLabel } from '../i18n.ts';
import { useLangVersion, useGameBarVersion } from '../../../src/store.ts';
import type { CharacterAppearance } from '../../../src/types.js';
import { useAllKnownWords, type KnownLang } from '../../../src/known-words-store.ts';
import { ALL_TARGET_LANGS } from '../../../src/types.ts';
import { flagUrl } from '../../core/flags.ts';
import { getLevelInfo, LEVEL_XP, LEVEL_MILESTONES } from '../../core/level-system.ts';

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
export const LANG_META: Record<string, { name: string; country: string }> = {
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
  qya: { name: "Quenya", country: 'qya' },
  sjn: { name: "Sindarin", country: 'sjn' },
  ku: { name: "Kurdî", country: 'ku' },
  om: { name: "Oromoo", country: 'et' },
  ln: { name: "Lingála", country: 'cd' },
  bho: { name: "भोजपुरी", country: 'in' },
  ceb: { name: "Bisaya", country: 'ph' },
  rm: { name: "Rumantsch", country: 'ch' },
  ty: { name: "Reo Tahiti", country: 'pf' },
  ch: { name: "Chamoru", country: 'gu' },
  mh: { name: "Kajin M̧ajeļ", country: 'mh' },
  pau: { name: "Tekoi er a Belau", country: 'pw' },
  nah: { name: "Nāhuatl", country: 'mx' },
  nv: { name: "Diné bizaad", country: 'us' },
  tlh: { name: "tlhIngan Hol", country: 'tlh' },
  val: { name: "Valyrio", country: 'val' },
  dth: { name: "Lekh Dothraki", country: 'dth' },
};

function FlagCircle({
  lang,
  size = 44,
  primary = false,
}: {
  lang: string;
  size?: number;
  primary?: boolean;
}): ReactElement {
  const meta = LANG_META[lang];
  const src = meta ? (flagUrl(meta.country) ?? null) : null;
  const border = primary
    ? 'border-[var(--accent)] shadow-[0_0_0_1px_color-mix(in_srgb,var(--accent)_30%,transparent)]'
    : 'border-[color-mix(in_srgb,var(--accent)_60%,transparent)]';
  return (
    <div
      className={`profile-flag-circle flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 bg-[var(--bg)] ${border}`}
      style={{ width: size, height: size }}
      aria-label={meta?.name ?? lang}
    >
      {src ? (
        <img
          src={src}
          alt={meta?.name ?? lang}
          className="profile-flag-circle-img h-full w-full object-cover"
        />
      ) : (
        <span className="profile-flag-circle-fb text-[.58rem] font-bold tracking-[0.04em] text-white">
          {lang.slice(0, 2).toUpperCase()}
        </span>
      )}
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
  useLangVersion();
  useGameBarVersion();
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
    <div className="profile-panel flex flex-col items-center gap-[18px]">

      {/* ── Hero card ─────────────────────────────────────────────── */}
      <div className="profile-hero w-full max-w-[420px] overflow-visible rounded-[18px] border border-[var(--border)] bg-[var(--card)]">
        <div className="profile-hero-banner h-[80px] rounded-t-[18px] bg-[linear-gradient(135deg,var(--accent)_0%,color-mix(in_srgb,var(--accent)_55%,#7c3aed_45%)_100%)]" />
        <div className="profile-hero-body flex flex-col items-center gap-1.5 px-5 pb-[18px]">
          <div className="profile-hero-avatar-ring -mt-[45px] flex h-[90px] w-[90px] shrink-0 items-start justify-center overflow-hidden rounded-2xl border-[3px] border-[var(--card)] bg-[var(--bg)] shadow-[0_0_0_2px_var(--accent),0_6px_20px_rgba(0,0,0,.35)]">
            <CharacterAvatar appearance={appearance} size={90} />
          </div>
          {profileName && (
            <div className="profile-hero-name mt-1 text-[1.05rem] font-bold tracking-[-0.2px] text-[var(--text)]">
              {profileName}
            </div>
          )}
          <div className="profile-hero-level-row flex w-full flex-nowrap items-center gap-2">
            <span
              className="profile-hero-lvl-badge shrink-0 whitespace-nowrap rounded-[20px] bg-[linear-gradient(135deg,var(--accent),color-mix(in_srgb,var(--accent)_60%,#7c3aed))] px-2.5 py-[3px] text-[.72rem] font-bold text-white"
              aria-label={`${t('profile.level')} ${levelInfo.level}`}
            >
              {t('profile.level')} {levelInfo.level}{levelInfo.isMax ? ' 🏅' : ''}
            </span>
            {!levelInfo.isMax && (
              <div className="profile-hero-bar-wrap h-[5px] min-w-[30px] flex-1 overflow-hidden rounded-full bg-[var(--bg)]">
                <div
                  className="profile-hero-bar h-full min-w-[5px] rounded-full bg-[linear-gradient(90deg,var(--accent),color-mix(in_srgb,var(--accent)_60%,#fff_40%))] transition-[width] duration-500 ease-in-out"
                  style={{ width: `${Math.round(levelInfo.progress * 100)}%` }}
                />
              </div>
            )}
            <span className="profile-hero-xp-text shrink-0 whitespace-nowrap text-[.68rem] text-[var(--text3)]">
              {levelInfo.isMax
                ? t('profile.levelMax')
                : `${totalXp.toLocaleString()} / ${(xpNext ?? 0).toLocaleString()} XP`}
            </span>
            {/* Info popup — click to toggle */}
            <details className="level-info-wrap relative shrink-0 [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden">
              <summary
                className="level-info-btn flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] text-[.78rem] text-[var(--text3)] select-none transition-colors duration-150 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                title={t('profile.xpInfo')}
              >
                ⓘ
              </summary>
              <div className="level-info-popup absolute top-[calc(100%+8px)] right-0 z-[200] w-[270px] rounded-[14px] border border-[var(--border)] bg-[var(--card)] px-4 py-3.5 shadow-[0_8px_28px_rgba(0,0,0,.35)]">
                <div className="level-info-title mb-2 text-[.8rem] font-bold text-[var(--text)]">
                  {t('profile.xpInfo')}
                </div>
                <div className="level-info-rule mb-1 text-[.75rem] leading-[1.4] text-[var(--text2)]">
                  {t('profile.xpWordRule')}
                </div>
                <div className="level-info-rule mb-1 text-[.75rem] leading-[1.4] text-[var(--text2)]">
                  {t('profile.xpGameRule')}
                </div>
                <div className="level-info-rule mb-1 text-[.75rem] leading-[1.4] text-[var(--text2)]">
                  {t('profile.xpComboRule')}
                </div>
                <div className="level-info-divider my-2.5 border-0 border-t border-[var(--border)]" />
                <div className="level-info-table-title mb-1.5 text-[.72rem] font-bold uppercase tracking-[0.06em] text-[var(--text3)]">
                  {t('profile.xpLevelTable')}
                </div>
                {LEVEL_MILESTONES.map(([lv, xp]) => (
                  <div
                    key={lv}
                    className="level-info-row flex justify-between py-0.5 text-[.75rem] text-[var(--text2)]"
                  >
                    <span>{t('profile.level')} {lv}</span>
                    <span className="font-semibold text-[var(--accent)]">
                      {xp.toLocaleString()} XP
                    </span>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* ── Customize dropdown ───────────────────────────────────── */}
      <div className="profile-customize w-full max-w-[420px] overflow-hidden rounded-[14px] border border-[var(--border)] bg-[var(--card)]">
        <button
          className="profile-customize-toggle flex w-full cursor-pointer items-center justify-between gap-2 bg-transparent px-4 py-[13px] text-left font-[inherit] text-[.88rem] font-semibold text-[var(--text)] hover:bg-[var(--hover,rgba(255,255,255,.04))]"
          onClick={() => setCustomizeOpen((o) => !o)}
          aria-expanded={customizeOpen}
        >
          <span>{t('profile.customizeTitle')}</span>
          <span
            className={
              'profile-customize-chevron shrink-0 text-[.7rem] text-[var(--text3)] transition-transform duration-200' +
              (customizeOpen ? ' open rotate-180' : '')
            }
          >
            ▼
          </span>
        </button>
        {customizeOpen && (
          <div className="profile-customize-body border-t border-[var(--border)] px-4 pb-3.5">
            {PICKERS.map((p) => (
              <div
                className="profile-picker-row flex items-center justify-between border-b border-[var(--border)] py-2 last:border-b-0"
                key={p.key}
              >
                <span className="profile-picker-label text-[.82rem] text-[var(--text2)]">
                  {t(p.labelKey)}
                </span>
                <div className="profile-picker-controls flex items-center gap-2.5">
                  <button
                    className="profile-picker-arrow h-[28px] w-[28px] cursor-pointer rounded-md border border-[var(--border)] bg-[var(--bg)] text-[.8rem] leading-none text-[var(--text)] hover:bg-[var(--accent)] hover:text-white"
                    onClick={() => cycle(p.key, p.len, -1)}
                  >
                    ◀
                  </button>
                  <span className="profile-picker-val min-w-[38px] text-center text-[.78rem] text-[var(--text3)]">
                    {p.names
                      ? p.names()[appearance[p.key] ?? 0]
                      : `${(appearance[p.key] ?? 0) + 1} / ${p.len}`}
                  </span>
                  <button
                    className="profile-picker-arrow h-[28px] w-[28px] cursor-pointer rounded-md border border-[var(--border)] bg-[var(--bg)] text-[.8rem] leading-none text-[var(--text)] hover:bg-[var(--accent)] hover:text-white"
                    onClick={() => cycle(p.key, p.len, 1)}
                  >
                    ▶
                  </button>
                </div>
              </div>
            ))}
            <button
              className="profile-save-btn bg-[var(--confirm-btn-bg,var(--accent))]"
              disabled={!dirty}
              onClick={saveChanges}
            >
              {t('profile.saveChanges')}
            </button>
          </div>
        )}
      </div>

      {/* ── Language stats ───────────────────────────────────────── */}
      <div className="profile-lang-stats w-full max-w-[420px]">
        <div className="profile-lang-stats-title mb-2.5 text-[.78rem] font-bold uppercase tracking-[0.07em] text-[var(--text3)]">
          {t('profile.langStatsTitle')}
        </div>
        <div className="profile-lang-grid flex flex-col gap-2">

          {/* Primary card — current learn language */}
          <div className="profile-lang-card profile-lang-card--primary flex items-center gap-3 rounded-xl border border-[color-mix(in_srgb,var(--accent)_40%,transparent)] bg-[color-mix(in_srgb,var(--accent)_8%,transparent)] px-[18px] py-3.5 [-webkit-backdrop-filter:blur(8px)] [backdrop-filter:blur(8px)]">
            <FlagCircle lang={learnLang} size={48} primary />
            <div className="profile-lang-info flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="profile-lang-name mb-1 text-base font-bold text-[var(--text)]">
                {primaryMeta?.name ?? learnLang.toUpperCase()}
              </span>
              <div className="profile-stat-row mt-[5px] flex flex-wrap gap-x-3.5 gap-y-1.5">
                <span className="profile-stat-item flex items-baseline gap-[3px]">
                  <span className="profile-stat-val text-[.88rem] font-bold leading-none text-[var(--text)]">
                    {getLangStreak(learnLang)}
                  </span>
                  <span className="profile-stat-lbl text-[.68rem] text-[var(--text3)]">
                    {t('stats.daysStreak')}
                  </span>
                </span>
                <span className="profile-stat-item flex items-baseline gap-[3px]">
                  <span className="profile-stat-icon text-[.8rem] leading-none">📖</span>
                  <span className="profile-stat-val text-[.88rem] font-bold leading-none text-[var(--text)]">
                    {knownCount}
                  </span>
                  <span className="profile-stat-lbl text-[.68rem] text-[var(--text3)]">
                    {wordsLabel(knownCount)}
                  </span>
                </span>
                <span className="profile-stat-item flex items-baseline gap-[3px]">
                  <span className="profile-stat-icon text-[.8rem] leading-none">⭐</span>
                  <span className="profile-stat-val text-[.88rem] font-bold leading-none text-[var(--text)]">
                    {(getLangXp(learnLang) + allKnownWords[learnLang].size * 5).toLocaleString()}
                  </span>
                  <span className="profile-stat-lbl text-[.68rem] text-[var(--text3)]">XP</span>
                </span>
                <span className="profile-stat-item flex items-baseline gap-[3px]">
                  <span className="profile-stat-icon text-[.8rem] leading-none">🏆</span>
                  <span className="profile-stat-val text-[.88rem] font-bold leading-none text-[var(--text)]">
                    {achCount}/{ACHIEVEMENTS.length}
                  </span>
                  <span className="profile-stat-lbl text-[.68rem] text-[var(--text3)]">
                    {t('profile.achievements')}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Secondary language cards */}
          {otherLangs.map(({ code, count }) => (
            <div
              key={code}
              className="profile-lang-card flex items-center gap-3 rounded-[14px] border border-[rgba(255,255,255,.07)] bg-[rgba(255,255,255,.04)] px-4 py-3 [-webkit-backdrop-filter:blur(8px)] [backdrop-filter:blur(8px)]"
            >
              <FlagCircle lang={code} size={38} />
              <div className="profile-lang-info flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="profile-lang-name text-[.9rem] font-bold text-[var(--text)]">
                  {LANG_META[code]?.name ?? code.toUpperCase()}
                </span>
                <div className="profile-stat-row mt-[5px] flex flex-wrap gap-x-3.5 gap-y-1.5">
                  <span className="profile-stat-item flex items-baseline gap-[3px]">
                    <span className="profile-stat-val text-[.88rem] font-bold leading-none text-[var(--text)]">
                      {getLangStreak(code)}
                    </span>
                    <span className="profile-stat-lbl text-[.68rem] text-[var(--text3)]">
                      {t('stats.daysStreak')}
                    </span>
                  </span>
                  <span className="profile-stat-item flex items-baseline gap-[3px]">
                    <span className="profile-stat-icon text-[.8rem] leading-none">📖</span>
                    <span className="profile-stat-val text-[.88rem] font-bold leading-none text-[var(--text)]">
                      {count}
                    </span>
                    <span className="profile-stat-lbl text-[.68rem] text-[var(--text3)]">
                      {wordsLabel(count)}
                    </span>
                  </span>
                  <span className="profile-stat-item flex items-baseline gap-[3px]">
                    <span className="profile-stat-icon text-[.8rem] leading-none">⭐</span>
                    <span className="profile-stat-val text-[.88rem] font-bold leading-none text-[var(--text)]">
                      {(getLangXp(code) + count * 5).toLocaleString()}
                    </span>
                    <span className="profile-stat-lbl text-[.68rem] text-[var(--text3)]">XP</span>
                  </span>
                  <span className="profile-stat-item flex items-baseline gap-[3px]">
                    <span className="profile-stat-icon text-[.8rem] leading-none">🏆</span>
                    <span className="profile-stat-val text-[.88rem] font-bold leading-none text-[var(--text)]">
                      {getLangAchCount(code)}/{ACHIEVEMENTS.length}
                    </span>
                    <span className="profile-stat-lbl text-[.68rem] text-[var(--text3)]">
                      {t('profile.achievements')}
                    </span>
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

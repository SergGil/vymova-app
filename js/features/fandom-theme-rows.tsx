// Vymova — js/features/fandom-theme-rows.tsx
// Sidebar/Settings "fandom skin" rows (Star Wars, Harry Potter, ...) — the
// visible half of legacy-modernization-roadmap.md item 4d. Wires the
// static set-<key> rows and title-<key>-toggle header buttons to
// fandom-theme-store.ts's toggleFandomTheme() directly (no more proxying a
// click onto a hidden settings.tsx button), and syncs each row's pill
// 'on' class reactively off the store (no more MutationObserver).
//
// full-react-migration-roadmap.md Phase 6: the 14 rows themselves (previously
// static markup in index.html, only wired imperatively here) are now
// rendered directly by this component — className/onClick/data-i18n replace
// the old getElementById+addEventListener+classList.toggle effects. The
// "dark theme" row (#set-theme/#set-theme-pill) is NOT one of these 14 —
// it's a separate, independent toggle owned by sidebar.tsx's
// _updateDarkPill(), untouched. title-<key>-toggle (the header quick-toggle
// buttons in header-left.tsx — only sw/hp actually exist there) stay wired
// imperatively via useEffect, since they live in a different component's
// static-id output, not this one's own render.
import { useEffect, useState, type ReactElement } from 'react';
import {
  FANDOM_THEME_KEYS,
  toggleFandomTheme,
  useFandomTheme,
  type FandomThemeKey,
} from '../../src/fandom-theme-store.ts';
import { t } from './i18n.ts';

// Only the base 2 rows (SW/HP) show by default; the rest sit behind a
// "show more" toggle — unless one of them is already the active theme, in
// which case start expanded so the user can see what's currently selected.
const BASE_THEME_KEYS: FandomThemeKey[] = ['sw', 'hp'];
const EXTRA_THEME_KEYS: FandomThemeKey[] = [
  'cp',
  'lotr',
  'mcu',
  'witcher',
  'mc',
  'dc',
  'got',
  'dw',
  'dune',
  'hg',
  'avt',
  'dt',
];

const THEME_META: Record<FandomThemeKey, { icon: string; labelKey: string }> = {
  sw: { icon: '⚔️', labelKey: 'settings.starWars' },
  hp: { icon: '🦁', labelKey: 'settings.harryPotter' },
  cp: { icon: '🤖', labelKey: 'settings.cyberpunk' },
  lotr: { icon: '💍', labelKey: 'settings.lotr' },
  mcu: { icon: '🛡️', labelKey: 'settings.marvel' },
  witcher: { icon: '🐺', labelKey: 'settings.witcher' },
  mc: { icon: '⛏️', labelKey: 'settings.minecraft' },
  dc: { icon: '🦇', labelKey: 'settings.dc' },
  got: { icon: '🐉', labelKey: 'settings.got' },
  dw: { icon: '🐢', labelKey: 'settings.discworld' },
  dune: { icon: '🏜️', labelKey: 'settings.dune' },
  hg: { icon: '🏹', labelKey: 'settings.hungerGames' },
  avt: { icon: '🌿', labelKey: 'settings.avatar' },
  dt: { icon: '🗼', labelKey: 'settings.darkTower' },
};

function ThemeRow({
  themeKey,
  active,
}: {
  themeKey: FandomThemeKey;
  active: FandomThemeKey | null;
}): ReactElement {
  const meta = THEME_META[themeKey];
  return (
    <div
      className="sb-toggle-row flex cursor-pointer items-center gap-2.5 rounded-[10px] px-3 py-[9px] transition-colors duration-[120ms] select-none hover:bg-[var(--bg)]"
      id={`set-${themeKey}`}
      style={{ background: 'var(--bg)', borderRadius: 10 }}
      onClick={() => toggleFandomTheme(themeKey)}
    >
      <span className="sb-icon w-[22px] shrink-0 text-center text-base">{meta.icon}</span>
      <span className="sb-label flex-1" data-i18n={meta.labelKey}>
        {t(meta.labelKey)}
      </span>
      <span
        className={
          'sb-toggle-pill relative h-[18px] w-[34px] shrink-0 rounded-[12px] bg-[var(--border)] [transition:background_0.2s] after:absolute after:left-0.5 after:top-0.5 after:h-[14px] after:w-[14px] after:rounded-full after:bg-white after:shadow-[0_1px_3px_rgba(0,0,0,0.2)] after:content-[\'\'] after:[transition:translate_0.2s] [&.on]:bg-[var(--accent)] [&.on]:after:translate-x-4' +
          (themeKey === active ? ' on' : '')
        }
        id={`set-${themeKey}-pill`}
      />
    </div>
  );
}

export function FandomThemeRowsController(): ReactElement {
  const { active } = useFandomTheme();

  // Header quick-toggle buttons (title-sw-toggle/title-hp-toggle in
  // header-left.tsx) live in a sibling component's static-id output, so
  // this wiring stays imperative — looping over all 14 keys is harmless,
  // only sw/hp actually match an element.
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    for (const key of FANDOM_THEME_KEYS) {
      const titleToggle = document.getElementById(`title-${key}-toggle`);
      const onClick = () => toggleFandomTheme(key);
      titleToggle?.addEventListener('click', onClick);
      cleanups.push(() => titleToggle?.removeEventListener('click', onClick));
    }
    return () => cleanups.forEach((fn) => fn());
  }, []);

  // Show-more/less — expanded state is a one-time decision at mount
  // (matching the original behavior), not kept reactively in sync
  // afterwards, hence the lazy useState initializer instead of an effect
  // keyed on `active`.
  const [expanded, setExpanded] = useState(
    () => active !== null && EXTRA_THEME_KEYS.includes(active),
  );

  return (
    <>
      {BASE_THEME_KEYS.map((key) => (
        <ThemeRow key={key} themeKey={key} active={active} />
      ))}
      <div
        id="theme-rows-extra"
        style={{ display: expanded ? 'flex' : 'none', flexDirection: 'column', gap: 2 }}
      >
        {EXTRA_THEME_KEYS.map((key) => (
          <ThemeRow key={key} themeKey={key} active={active} />
        ))}
      </div>
      <button
        type="button"
        id="theme-rows-toggle"
        className="theme-rows-toggle-btn mt-1 cursor-pointer rounded-[10px] border border-dashed border-[var(--border)] bg-transparent px-3 py-[7px] text-center text-[.78rem] font-semibold text-[var(--text3)] transition-colors duration-150 hover:border-[var(--accent)] hover:text-[var(--accent)]"
        data-i18n={expanded ? 'settings.showLessThemes' : 'settings.showMoreThemes'}
        onClick={() => setExpanded((e) => !e)}
      >
        {t(expanded ? 'settings.showLessThemes' : 'settings.showMoreThemes')}
      </button>
    </>
  );
}

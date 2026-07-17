// Vymova — js/features/fandom-theme-rows.tsx
// Sidebar/Settings "fandom skin" rows (Star Wars, Harry Potter, ...) — the
// visible half of legacy-modernization-roadmap.md item 4d. Wires the
// static set-<key> rows and title-<key>-toggle header buttons to
// fandom-theme-store.ts's toggleFandomTheme() directly (no more proxying a
// click onto a hidden settings.tsx button), and syncs each row's pill
// 'on' class reactively off the store (no more MutationObserver).
import { useEffect, useState, type ReactElement } from 'react';
import {
  FANDOM_THEME_KEYS,
  toggleFandomTheme,
  useFandomTheme,
  type FandomThemeKey,
} from '../../src/fandom-theme-store.ts';
import { t } from './i18n.ts';

// Only the base 3 rows (dark/SW/HP) show by default; the rest sit behind a
// "show more" toggle — unless one of them is already the active theme, in
// which case start expanded so the user can see what's currently selected.
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

export function FandomThemeRowsController(): ReactElement | null {
  const { active } = useFandomTheme();

  // Keep each row's pill in sync with the shared store.
  useEffect(() => {
    for (const key of FANDOM_THEME_KEYS) {
      document.getElementById(`set-${key}-pill`)?.classList.toggle('on', key === active);
    }
  }, [active]);

  // Click wiring, attached once — toggleFandomTheme() itself drives state,
  // so the handlers never need to change.
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    for (const key of FANDOM_THEME_KEYS) {
      const setRow = document.getElementById(`set-${key}`);
      const titleToggle = document.getElementById(`title-${key}-toggle`);
      const onClick = () => toggleFandomTheme(key);
      setRow?.addEventListener('click', onClick);
      titleToggle?.addEventListener('click', onClick);
      cleanups.push(() => {
        setRow?.removeEventListener('click', onClick);
        titleToggle?.removeEventListener('click', onClick);
      });
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

  // Reflects `expanded` onto the static DOM nodes — the source of truth is
  // the React state above, not style.display read back from the element.
  useEffect(() => {
    const extraRows = document.getElementById('theme-rows-extra');
    const toggleRowsBtn = document.getElementById('theme-rows-toggle');
    if (extraRows) extraRows.style.display = expanded ? 'flex' : 'none';
    if (toggleRowsBtn) {
      toggleRowsBtn.textContent = t(
        expanded ? 'settings.showLessThemes' : 'settings.showMoreThemes',
      );
    }
  }, [expanded]);

  useEffect(() => {
    const toggleRowsBtn = document.getElementById('theme-rows-toggle');
    const onToggleClick = () => setExpanded((e) => !e);
    toggleRowsBtn?.addEventListener('click', onToggleClick);
    return () => toggleRowsBtn?.removeEventListener('click', onToggleClick);
  }, []);

  return null;
}

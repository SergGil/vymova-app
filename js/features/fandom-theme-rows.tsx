// Vymova — js/features/fandom-theme-rows.tsx
// Sidebar/Settings "fandom skin" rows (Star Wars, Harry Potter, ...) — the
// visible half of legacy-modernization-roadmap.md item 4d. Wires the
// static set-<key> rows and title-<key>-toggle header buttons to
// fandom-theme-store.ts's toggleFandomTheme() directly (no more proxying a
// click onto a hidden settings.tsx button), and syncs each row's pill
// 'on' class reactively off the store (no more MutationObserver).
import { useEffect, type ReactElement } from 'react';
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
  // afterwards.
  useEffect(() => {
    const extraRows = document.getElementById('theme-rows-extra');
    const toggleRowsBtn = document.getElementById('theme-rows-toggle');
    const setExpanded = (expanded: boolean): void => {
      if (extraRows) extraRows.style.display = expanded ? 'flex' : 'none';
      if (toggleRowsBtn) {
        toggleRowsBtn.textContent = t(
          expanded ? 'settings.showLessThemes' : 'settings.showMoreThemes',
        );
      }
    };
    setExpanded(active !== null && EXTRA_THEME_KEYS.includes(active));
    const onToggleClick = () => setExpanded(extraRows?.style.display === 'none');
    toggleRowsBtn?.addEventListener('click', onToggleClick);
    return () => toggleRowsBtn?.removeEventListener('click', onToggleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- one-time decision at mount, see comment above
  }, []);

  return null;
}

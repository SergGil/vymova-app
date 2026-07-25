// Vymova — js/features/tag-filter-select.tsx
// Topic/category filter dropdown (#sel-tag). Renders the <select> itself
// (docs/card-shell-migration-roadmap.md Phase 3 — previously portaled
// <option>s into a pre-existing static <select>); selection handling stays
// imperative since #sel-tag is read/written directly by deck-filter.ts and
// deck-mode.ts.
import { useEffect, type ReactElement } from 'react';
import { useLangVersion } from '../../src/store.ts';
import { setActiveTagSet } from '../../src/deck-filter-store.ts';
import { getWordIndex } from '../core/word-index.ts';
import { WORD_CATEGORIES, CATEGORY_LIST } from '../../data/categories.js';
import { categoryName, t } from './i18n.ts';
import { getRawMode } from './mode/mode-utils.ts';
import { _rebuildEsDeck, _isSpecialMode } from './deck/deck-mode.tsx';

function fitSelTag(selTag: HTMLSelectElement): void {
  const tmp = document.createElement('select');
  tmp.style.cssText =
    'visibility:hidden;position:absolute;font:inherit;font-size:12px;padding:6px 24px 6px 10px;';
  const opt = document.createElement('option');
  opt.textContent = selTag.options[selTag.selectedIndex]?.textContent ?? '';
  tmp.appendChild(opt);
  document.body.appendChild(tmp);
  selTag.style.width = tmp.offsetWidth + 'px';
  document.body.removeChild(tmp);
}

function applyTagFilter(selTag: HTMLSelectElement): void {
  const tag = selTag.value;
  if (!tag) {
    setActiveTagSet(null);
  } else {
    const wordIdx = getWordIndex();
    const words = (WORD_CATEGORIES[tag] ?? [])
      .map((w) => w.toLowerCase())
      .filter((w) => (wordIdx ? wordIdx.has(w) : true));
    setActiveTagSet(new Set(words));
  }
  if (_isSpecialMode(getRawMode())) {
    _rebuildEsDeck();
  } else {
    document.getElementById('sel-range')?.dispatchEvent(new Event('change'));
  }
}

export function TagFilterSelect(): ReactElement {
  useLangVersion();

  useEffect(() => {
    const selTag = document.getElementById('sel-tag') as HTMLSelectElement | null;
    if (!selTag) return;
    fitSelTag(selTag);
    function onChange(): void {
      applyTagFilter(selTag!);
      fitSelTag(selTag!);
    }
    selTag.addEventListener('change', onChange);
    return () => selTag.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const selTag = document.getElementById('sel-tag') as HTMLSelectElement | null;
    if (selTag) fitSelTag(selTag);
  });

  return (
    <select id="sel-tag" title="Фільтр по темі" data-i18n-title="cards.tagFilterTitle">
      <option value="">{t('cards.allTopics')}</option>
      {CATEGORY_LIST.map((cat) => (
        <option key={cat} value={cat}>
          {categoryName(cat)}
        </option>
      ))}
    </select>
  );
}

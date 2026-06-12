// English Words App — js/features/tag-filter-select.tsx
// Topic/category filter dropdown (#sel-tag). Renders <option>s into the
// existing <select> element; selection handling stays imperative since
// #sel-tag is read/written directly by deck-filter.ts and deck-mode.ts.
import { createRoot, type Root } from 'react-dom/client';
import { useEffect, type ReactElement } from 'react';
import { state } from '../../src/state.ts';
import { WORD_CATEGORIES, CATEGORY_LIST } from '../../data/categories.js';
import { categoryName, t } from './i18n.ts';
import { ES_MODES } from './mode-utils.ts';

function fitSelTag(selTag: HTMLSelectElement): void {
  const tmp = document.createElement('select');
  tmp.style.cssText = 'visibility:hidden;position:absolute;font:inherit;font-size:12px;padding:6px 24px 6px 10px;';
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
    state._activeTagSet = null;
  } else {
    const wordIdx = (window as Window & { _wordIdx?: Map<string, number> })._wordIdx;
    const words = (WORD_CATEGORIES[tag] ?? [])
      .map(w => w.toLowerCase())
      .filter(w => wordIdx ? wordIdx.has(w) : true);
    state._activeTagSet = new Set(words);
  }
  const selMode = document.getElementById('sel-mode') as HTMLSelectElement | null;
  if (selMode && ES_MODES.has(selMode.value)) {
    (window as Window & { _rebuildEsDeck?: () => void })._rebuildEsDeck?.();
  } else {
    document.getElementById('sel-range')?.dispatchEvent(new Event('change'));
  }
}

function TagFilterSelect(): ReactElement {
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

  return (
    <>
      <option value="">{t('cards.allTopics')}</option>
      {CATEGORY_LIST.map(cat => (
        <option key={cat} value={cat}>{categoryName(cat)}</option>
      ))}
    </>
  );
}

let _root: Root | null = null;

export function mountTagFilterSelect(): void {
  const el = document.getElementById('sel-tag') as HTMLSelectElement | null;
  if (!el) return;
  _root = createRoot(el);
  _root.render(<TagFilterSelect />);
}

export function refreshTagFilterSelect(): void {
  if (!_root) return;
  _root.render(<TagFilterSelect />);
  const selTag = document.getElementById('sel-tag') as HTMLSelectElement | null;
  if (selTag) fitSelTag(selTag);
}

(window as unknown as { _refreshTagOptions?: () => void })._refreshTagOptions = refreshTagFilterSelect;

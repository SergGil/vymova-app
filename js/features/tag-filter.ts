// English Words App — js/features/tag-filter.ts
// ════════ TAG FILTER ════════
import { state } from '../../src/state.ts';
import { WORD_CATEGORIES, CATEGORY_LIST } from '../../data/categories.js';

const selTag   = document.getElementById('sel-tag')   as HTMLSelectElement | null;
const selRange = document.getElementById('sel-range') as HTMLSelectElement | null;

if (selTag) {
  // Populate options in defined order
  CATEGORY_LIST.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat; opt.textContent = cat;
    selTag.appendChild(opt);
  });

  function applyTagFilter(): void {
    const tag = selTag!.value;
    if (!tag) {
      state._activeTagSet = null;
    } else {
      const wordIdx: Map<string, number> | undefined = (window as Window & { _wordIdx?: Map<string, number> })._wordIdx;
      // Normalize to lowercase to prevent case-mismatch with W[i][0]
      const words = (WORD_CATEGORIES[tag] ?? [])
        .map(w => w.toLowerCase())
        .filter(w => wordIdx ? wordIdx.has(w) : true);
      state._activeTagSet = new Set(words);
    }
    selRange?.dispatchEvent(new Event('change'));
  }

  function _fitSelTag(): void {
    const tmp = document.createElement('select');
    tmp.style.cssText = 'visibility:hidden;position:absolute;font:inherit;font-size:12px;padding:6px 24px 6px 10px;';
    const opt = document.createElement('option');
    opt.textContent = selTag!.options[selTag!.selectedIndex]?.textContent ?? '';
    tmp.appendChild(opt);
    document.body.appendChild(tmp);
    selTag!.style.width = tmp.offsetWidth + 'px';
    document.body.removeChild(tmp);
  }

  _fitSelTag();
  selTag.addEventListener('change', () => { applyTagFilter(); _fitSelTag(); });
}

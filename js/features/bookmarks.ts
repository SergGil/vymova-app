// English Words App — js/features/bookmarks.ts
import { t } from './i18n.ts';

let _bm = new Set<string>();
try {
  const arr = JSON.parse(localStorage.getItem('ew_bookmarks') ?? '[]') as string[];
  _bm = new Set(arr);
} catch (e) {}

function _save(): void {
  try { localStorage.setItem('ew_bookmarks', JSON.stringify([..._bm])); } catch (e) {}
}

export function isBookmarked(w: string): boolean { return _bm.has(w); }
export function getBookmarks(): Set<string> { return _bm; }
export function toggleBookmark(w: string): boolean {
  if (_bm.has(w)) _bm.delete(w); else _bm.add(w);
  _save();
  return _bm.has(w);
}

// #sel-range itself is legacy (Phase 4 of REACT_MIGRATION_PLAN.md), so this
// option is inserted imperatively until that select becomes a component.
const sel = document.getElementById('sel-range') as HTMLSelectElement | null;
if (sel && !sel.querySelector('option[value="bookmarks"]')) {
  const opt = document.createElement('option');
  opt.value = 'bookmarks'; opt.dataset.i18n = 'range.bookmarks'; opt.textContent = t('range.bookmarks');
  const srsOpt = sel.querySelector('option[value="srs"]');
  if (srsOpt) srsOpt.after(opt); else sel.appendChild(opt);
}

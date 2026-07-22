// Vymova — js/features/bookmarks.ts
import { _jsonLoad, _jsonSave } from '../core/storage.ts';

const _bm = new Set<string>(_jsonLoad<string[]>('ew_bookmarks', []));

function _save(): void {
  _jsonSave('ew_bookmarks', [..._bm]);
}

export function isBookmarked(w: string): boolean {
  return _bm.has(w);
}
export function getBookmarks(): Set<string> {
  return _bm;
}
export function toggleBookmark(w: string): boolean {
  if (_bm.has(w)) _bm.delete(w);
  else _bm.add(w);
  _save();
  return _bm.has(w);
}

// English Words App — js/features/notes.ts
// Personal notes / mnemonics per word
// Modal UI lives in note-modal.tsx (React).

const _notes: Record<string, string> = {};
try { Object.assign(_notes, JSON.parse(localStorage.getItem('ew_notes') ?? '{}')); } catch (e) {}

function _save(): void {
  try { localStorage.setItem('ew_notes', JSON.stringify(_notes)); } catch (e) {}
}

export function getNoteForWord(w: string): string { return _notes[w] ?? ''; }
export function hasNote(w: string): boolean { return !!_notes[w]; }
export function setNoteForWord(w: string, text: string): void {
  if (text?.trim()) _notes[w] = text.trim();
  else delete _notes[w];
  _save();
}

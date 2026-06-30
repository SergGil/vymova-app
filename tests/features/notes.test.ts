import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('notes.ts', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.resetModules();
  });

  it('returns empty string and false for a word with no note', async () => {
    const { getNoteForWord, hasNote } = await import('../../js/features/notes.ts');
    expect(getNoteForWord('abandon')).toBe('');
    expect(hasNote('abandon')).toBe(false);
  });

  it('saves a note, trims it, and persists to localStorage', async () => {
    const { getNoteForWord, hasNote, setNoteForWord } = await import('../../js/features/notes.ts');
    setNoteForWord('abandon', '  remember the root "bandon"  ');
    expect(getNoteForWord('abandon')).toBe('remember the root "bandon"');
    expect(hasNote('abandon')).toBe(true);
    expect(JSON.parse(localStorage.getItem('ew_notes')!)).toEqual({
      abandon: 'remember the root "bandon"',
    });
  });

  it('deletes the note when set to an empty or whitespace-only string', async () => {
    const { getNoteForWord, hasNote, setNoteForWord } = await import('../../js/features/notes.ts');
    setNoteForWord('abandon', 'note');
    setNoteForWord('abandon', '   ');
    expect(hasNote('abandon')).toBe(false);
    expect(getNoteForWord('abandon')).toBe('');
    expect(JSON.parse(localStorage.getItem('ew_notes')!)).toEqual({});
  });

  it('loads existing notes from localStorage on module init', async () => {
    localStorage.setItem('ew_notes', JSON.stringify({ cat: 'feline friend' }));
    const { getNoteForWord, hasNote } = await import('../../js/features/notes.ts');
    expect(hasNote('cat')).toBe(true);
    expect(getNoteForWord('cat')).toBe('feline friend');
  });

  it('starts with empty notes if localStorage contains invalid JSON', async () => {
    localStorage.setItem('ew_notes', 'not json');
    const { getNoteForWord, hasNote } = await import('../../js/features/notes.ts');
    expect(hasNote('cat')).toBe(false);
    expect(getNoteForWord('cat')).toBe('');
  });
});

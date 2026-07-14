import { describe, it, expect } from 'vitest';
import { latinizeForSpeech } from '../../js/features/voice/latinize.ts';

describe('latinizeForSpeech', () => {
  it('strips Swedish diacritics from a word', () => {
    expect(latinizeForSpeech('välsignelse', 'sv')).toBe('valsignelse');
  });

  it('strips diacritics across a full sentence, not just a single word', () => {
    expect(latinizeForSpeech('En dold välsignelse för alla.', 'sv')).toBe(
      'En dold valsignelse for alla.',
    );
  });

  it('strips Czech diacritics, including ř (no direct ASCII equivalent)', () => {
    expect(latinizeForSpeech('Dvořák miloval hudbu.', 'cs')).toBe('Dvorak miloval hudbu.');
  });

  it('strips Romanian diacritics', () => {
    expect(latinizeForSpeech('mulțumesc pentru totul', 'ro')).toBe('multumesc pentru totul');
  });

  it('expands multi-character replacements (Croatian đ -> dj)', () => {
    expect(latinizeForSpeech('Đorđe', 'hr')).toBe('Djordje');
  });

  it('normalizes the Cyrillic-schwa typo found in some Azerbaijani entries', () => {
    expect(latinizeForSpeech('çəllәk', 'az')).toBe('cellek');
  });

  it('leaves already-plain-ASCII text unchanged for a language with an empty map', () => {
    expect(latinizeForSpeech('hujambo rafiki', 'sw')).toBe('hujambo rafiki');
  });

  it('passes text through unchanged for a language with no diacritic map at all', () => {
    expect(latinizeForSpeech('hello', 'es')).toBe('hello');
  });

  it('returns empty string for empty input', () => {
    expect(latinizeForSpeech('', 'sv')).toBe('');
  });
});

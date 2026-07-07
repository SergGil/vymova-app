import { describe, it, expect, afterEach } from 'vitest';
import {
  normalizeWords,
  sentenceSimilarity,
  speechRecognitionSupported,
  getSpeechRecognitionCtor,
} from '../../js/modes/shadowing.tsx';

describe('shadowing-logic', () => {
  describe('normalizeWords()', () => {
    it('lowercases and strips punctuation before splitting on whitespace', () => {
      expect(normalizeWords("Don't Stop, Believing!")).toEqual(['dont', 'stop', 'believing']);
    });

    it('returns an empty array for an empty or punctuation-only string', () => {
      expect(normalizeWords('')).toEqual([]);
      expect(normalizeWords('...!!')).toEqual([]);
    });
  });

  describe('sentenceSimilarity()', () => {
    it('returns 1 for an identical sentence', () => {
      expect(sentenceSimilarity('the cat sleeps', 'the cat sleeps')).toBe(1);
    });

    it('returns 0 when nothing matches', () => {
      expect(sentenceSimilarity('the cat sleeps', 'a dog runs')).toBe(0);
    });

    it('returns the fraction of target words found in the spoken text', () => {
      expect(sentenceSimilarity('the cat sleeps all day', 'the cat runs')).toBeCloseTo(2 / 5, 5);
    });

    it('is case-insensitive and punctuation-insensitive', () => {
      expect(sentenceSimilarity('The Cat Sleeps.', 'the, cat! sleeps?')).toBe(1);
    });

    it('ignores extra words spoken beyond the target', () => {
      expect(sentenceSimilarity('cat sleeps', 'the cat sleeps very well today')).toBe(1);
    });

    it('returns 0 for an empty target sentence', () => {
      expect(sentenceSimilarity('', 'anything')).toBe(0);
    });
  });

  describe('getSpeechRecognitionCtor() / speechRecognitionSupported()', () => {
    afterEach(() => {
      delete (window as unknown as { SpeechRecognition?: unknown }).SpeechRecognition;
      delete (window as unknown as { webkitSpeechRecognition?: unknown }).webkitSpeechRecognition;
    });

    it('reports unsupported when neither constructor exists on window (e.g. Firefox)', () => {
      expect(getSpeechRecognitionCtor()).toBeNull();
      expect(speechRecognitionSupported()).toBe(false);
    });

    it('picks up window.SpeechRecognition when present', () => {
      class FakeRec {}
      (window as unknown as { SpeechRecognition: unknown }).SpeechRecognition = FakeRec;
      expect(getSpeechRecognitionCtor()).toBe(FakeRec);
      expect(speechRecognitionSupported()).toBe(true);
    });

    it('falls back to window.webkitSpeechRecognition when SpeechRecognition is absent', () => {
      class FakeWebkitRec {}
      (window as unknown as { webkitSpeechRecognition: unknown }).webkitSpeechRecognition =
        FakeWebkitRec;
      expect(getSpeechRecognitionCtor()).toBe(FakeWebkitRec);
      expect(speechRecognitionSupported()).toBe(true);
    });
  });
});

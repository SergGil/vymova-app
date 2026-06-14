import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

class FakeRecognition {
  lang = '';
  interimResults = false;
  maxAlternatives = 1;
  onresult: ((e: any) => void) | null = null;
  onerror: ((e: any) => void) | null = null;
  onend: (() => void) | null = null;
  start = vi.fn();
  abort = vi.fn();
}

function resultEvent(transcript: string) {
  return { results: [[{ transcript }]] };
}

describe('pronunciation.ts', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe('without SpeechRecognition support', () => {
    beforeEach(() => {
      vi.resetModules();
      vi.stubGlobal('SpeechRecognition', undefined);
      vi.stubGlobal('webkitSpeechRecognition', undefined);
    });

    it('isPronuncSupported() returns false', async () => {
      const { isPronuncSupported } = await import('../../js/features/pronunciation.ts');
      expect(isPronuncSupported()).toBe(false);
    });

    it('startPronunciationCheck immediately reports "unsupported"', async () => {
      const { startPronunciationCheck } = await import('../../js/features/pronunciation.ts');
      const onResult = vi.fn();
      startPronunciationCheck('hello', null, onResult);
      expect(onResult).toHaveBeenCalledWith('unsupported', 0);
    });
  });

  describe('with SpeechRecognition support', () => {
    let lastInstance: FakeRecognition;

    beforeEach(() => {
      vi.resetModules();
      vi.stubGlobal('SpeechRecognition', function () {
        lastInstance = new FakeRecognition();
        return lastInstance;
      });
      vi.stubGlobal('webkitSpeechRecognition', undefined);
    });

    async function load() {
      return import('../../js/features/pronunciation.ts');
    }

    it('isPronuncSupported() returns true', async () => {
      const { isPronuncSupported } = await load();
      expect(isPronuncSupported()).toBe(true);
    });

    it('starts recognition and updates the button to listening state', async () => {
      const { startPronunciationCheck } = await load();
      const btn = document.createElement('button');
      startPronunciationCheck('hello', btn, vi.fn());
      expect(lastInstance.start).toHaveBeenCalled();
      expect(lastInstance.lang).toBe('en-US');
      expect(btn.classList.contains('on')).toBe(true);
      expect(btn.textContent).toBe('🔴');
    });

    it('reports "perfect" for an exact transcript match', async () => {
      const { startPronunciationCheck } = await load();
      const onResult = vi.fn();
      startPronunciationCheck('hello', null, onResult);
      lastInstance.onresult?.(resultEvent('hello'));
      expect(onResult).toHaveBeenCalledWith('perfect', 1, 'hello', 'hello');
    });

    it('reports "try_again" for a very different transcript', async () => {
      const { startPronunciationCheck } = await load();
      const onResult = vi.fn();
      startPronunciationCheck('hello', null, onResult);
      lastInstance.onresult?.(resultEvent('xyz completely different phrase'));
      const [status, score] = onResult.mock.calls[0];
      expect(status).toBe('try_again');
      expect(score).toBeLessThan(0.4);
    });

    it('resets the button and state on error', async () => {
      const { startPronunciationCheck } = await load();
      const btn = document.createElement('button');
      const onResult = vi.fn();
      startPronunciationCheck('hello', btn, onResult);
      lastInstance.onerror?.({});
      expect(onResult).toHaveBeenCalledWith('error', 0);
      expect(btn.classList.contains('on')).toBe(false);
      expect(btn.textContent).toBe('🎤');
    });

    it('resets the button on end', async () => {
      const { startPronunciationCheck } = await load();
      const btn = document.createElement('button');
      startPronunciationCheck('hello', btn, vi.fn());
      lastInstance.onend?.();
      expect(btn.classList.contains('on')).toBe(false);
      expect(btn.textContent).toBe('🎤');
    });

    it('calling startPronunciationCheck again while listening stops the previous session', async () => {
      const { startPronunciationCheck } = await load();
      const btn = document.createElement('button');
      startPronunciationCheck('hello', btn, vi.fn());
      const firstInstance = lastInstance;
      startPronunciationCheck('hello', btn, vi.fn());
      expect(firstInstance.abort).toHaveBeenCalled();
    });
  });
});

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';

// Regression test for the stale-closure bug: startMic()'s recog.onend used
// to call the `submit` function it captured back when the mic button was
// first clicked — which closed over `input` as it was *before* recognition
// produced any text (typically ''), so a correctly-recognized voice answer
// was still graded against an empty string. Fixed by passing the
// just-recognized transcript into submit(overrideInput) explicitly instead
// of relying on a closure that's stale by the time onend fires.
//
// window.SpeechRecognition must exist *before* write.tsx is first imported
// (the module reads it once at module-eval time into a top-level const), so
// this file dynamically imports write.tsx after stubbing the global, rather
// than statically importing it like tests/modes/write.test.tsx does.

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

class MockSpeechRecognition extends EventTarget {
  lang = '';
  continuous = false;
  interimResults = false;
  onresult: ((e: { results: { [i: number]: { [i: number]: { transcript: string } } } }) => void) | null =
    null;
  onerror: (() => void) | null = null;
  onend: (() => void) | null = null;
  start(): void {
    MockSpeechRecognition.lastInstance = this;
  }
  stop(): void {
    this.onend?.();
  }
  abort(): void {}
  static lastInstance: MockSpeechRecognition | null = null;
}

vi.stubGlobal('SpeechRecognition', MockSpeechRecognition);
const { WritePage, openWrite } = await import('../../js/modes/write.tsx');

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function flush(ms = 30): Promise<void> {
  await act(async () => {
    await wait(ms);
  });
}

const TEN_WORDS: WordEntry[] = [
  ['zqcloud', 'зхмара', '', ''],
  ['zqnight', 'зніч', '', ''],
  ['zqplant', 'зрослина', '', ''],
  ['zqcover', 'зобкладинка', '', ''],
  ['zqstone', 'закамінь', '', ''],
  ['zqchair', 'застілець', '', ''],
  ['zqbread', 'захліб', '', ''],
  ['zqhouse', 'здім', '', ''],
  ['zqwater', 'звода', '', ''],
  ['zqmusic', 'змузика', '', ''],
];

function currentWord(container: HTMLElement): WordEntry {
  return TEN_WORDS.find((w) => container.textContent?.includes(w[1]))!;
}
function findButton(container: HTMLElement, re: RegExp): HTMLButtonElement {
  return Array.from(container.querySelectorAll('button')).find((b) => b.textContent?.match(re))!;
}

describe('write.tsx — voice answer (mic)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'write-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    setDeckState(TEN_WORDS);
    MockSpeechRecognition.lastInstance = null;

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<WritePage />);
    });
    act(() => {
      openWrite(null);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
  });

  it('grades a correctly-recognized voice answer as correct, not as an empty guess', async () => {
    const w = currentWord(container);
    act(() => {
      findButton(container, /🎤/).click();
    });
    const recog = MockSpeechRecognition.lastInstance!;
    expect(recog).toBeTruthy();

    act(() => {
      recog.onresult?.({ results: { 0: { 0: { transcript: w[0] } } } });
    });
    // Input box reflects the recognized transcript immediately.
    const input = container.querySelector<HTMLInputElement>('input')!;
    expect(input.value).toBe(w[0]);

    act(() => {
      recog.onend?.();
    });
    await flush(30);

    expect(container.textContent).toMatch(/✓|правильно/i);
    expect(container.textContent).not.toMatch(/write\.correctAnswerPrefix/);
  });

  it('grades a wrong voice answer as wrong (sanity check — not just "always correct" now)', async () => {
    act(() => {
      findButton(container, /🎤/).click();
    });
    const recog = MockSpeechRecognition.lastInstance!;

    act(() => {
      recog.onresult?.({ results: { 0: { 0: { transcript: 'zzznotevenclose' } } } });
    });
    act(() => {
      recog.onend?.();
    });
    await flush(30);

    const w = currentWord(container);
    expect(container.textContent).toContain(w[0]);
  });

  it('does nothing on mic end if no speech was recognized (empty transcript)', async () => {
    act(() => {
      findButton(container, /🎤/).click();
    });
    const recog = MockSpeechRecognition.lastInstance!;

    act(() => {
      recog.onend?.();
    });
    await flush(30);

    // Still unanswered — the "Далі" (next) button shouldn't be showing yet,
    // the check button should.
    expect(findButton(container, /перевірити/i)).toBeTruthy();
  });
});

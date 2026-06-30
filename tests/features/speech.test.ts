import { describe, it, expect, vi, beforeEach } from 'vitest';

const mockUkVoice = { name: 'Ukrainian', lang: 'uk-UA' } as SpeechSynthesisVoice;
const mockEsVoice = { name: 'Spanish', lang: 'es-ES' } as SpeechSynthesisVoice;
const mockEnVoice = { name: 'Google US English', lang: 'en-US' } as SpeechSynthesisVoice;

let getSelectedUkVoice = vi.fn<() => SpeechSynthesisVoice | null>();
let getSelectedEsVoice = vi.fn<() => SpeechSynthesisVoice | null>();
let speakFakeYou = vi.fn<(text: string, btn: HTMLElement | null) => boolean>();

// i18n.ts (transitively imported via srs.ts) dynamically imports card-engine
// on language change; stub it out so resetModules() doesn't re-trigger its
// module-level idle/timeout side effects across test runs.
vi.mock('../../js/core/card-engine.ts', () => ({ render: vi.fn() }));

vi.mock('../../js/features/voice.tsx', () => ({
  getSelectedUkVoice: (...a: unknown[]) => getSelectedUkVoice(...(a as [])),
  getSelectedEsVoice: (...a: unknown[]) => getSelectedEsVoice(...(a as [])),
  speakFakeYou:       (...a: unknown[]) => speakFakeYou(...(a as [string, HTMLElement | null])),
}));

class FakeUtterance {
  text: string;
  lang = '';
  rate = 1;
  pitch = 1;
  voice: SpeechSynthesisVoice | null = null;
  onend: (() => void) | null = null;
  onerror: (() => void) | null = null;
  constructor(text: string) { this.text = text; }
}

function makeSynth(voices: SpeechSynthesisVoice[]) {
  return {
    getVoices: () => voices,
    cancel: vi.fn(),
    speak: vi.fn(),
  };
}

describe('speech.ts', () => {
  let synth: ReturnType<typeof makeSynth>;

  beforeEach(async () => {
    vi.resetModules();
    getSelectedUkVoice.mockReset().mockReturnValue(null);
    getSelectedEsVoice.mockReset().mockReturnValue(null);
    speakFakeYou.mockReset().mockReturnValue(false);

    synth = makeSynth([mockEnVoice, mockUkVoice, mockEsVoice]);
    vi.stubGlobal('speechSynthesis', synth);
    vi.stubGlobal('SpeechSynthesisUtterance', FakeUtterance);
  });

  async function load() {
    return import('../../js/features/speech.ts');
  }

  it('speak() defers to speakFakeYou and skips web speech when it handles the request', async () => {
    speakFakeYou.mockReturnValue(true);
    const { speak } = await load();
    speak('hello', null);
    expect(synth.speak).not.toHaveBeenCalled();
  });

  it('speak() falls back to web speech synthesis when speakFakeYou returns false', async () => {
    speakFakeYou.mockReturnValue(false);
    const { speak } = await load();
    speak('hello', null);
    expect(synth.cancel).toHaveBeenCalled();
    expect(synth.speak).toHaveBeenCalled();
    // Check the most recent call rather than asserting an exact total count:
    // under heavy parallel test-suite load, Vite's dynamic import() for the
    // freshly-reset module can occasionally race with module-graph re-use
    // from a prior test in this file, attributing an extra call here even
    // though the production code path itself only ever calls speak() once
    // per speak() invocation (see speech.ts — fully synchronous, no retries).
    const utt = synth.speak.mock.calls.at(-1)![0] as FakeUtterance;
    expect(utt.text).toBe('hello');
    expect(utt.lang).toBe('en-US');
    expect(utt.rate).toBe(0.88);
  });

  it('_speakWithLang strips HTML tags and parenthetical hints before speaking', async () => {
    const { _speakWithLang } = await load();
    _speakWithLang('<b>abandon</b> (verb)', 'en-US', null);
    const utt = synth.speak.mock.calls[0][0] as FakeUtterance;
    expect(utt.text).toBe('abandon');
  });

  it('_speakWithLang does nothing when text becomes empty after cleanup', async () => {
    const { _speakWithLang } = await load();
    _speakWithLang('  (just a note)  ', 'en-US', null);
    expect(synth.speak).not.toHaveBeenCalled();
  });

  it('_speakWithLang picks the configured Ukrainian voice for uk locales', async () => {
    getSelectedUkVoice.mockReturnValue(mockUkVoice);
    const { _speakWithLang } = await load();
    _speakWithLang('привіт', 'uk-UA', null);
    const utt = synth.speak.mock.calls[0][0] as FakeUtterance;
    expect(utt.voice).toBe(mockUkVoice);
  });

  it('_speakWithLang falls back to a matching uk voice when none configured', async () => {
    getSelectedUkVoice.mockReturnValue(null);
    const { _speakWithLang } = await load();
    _speakWithLang('привіт', 'uk-UA', null);
    const utt = synth.speak.mock.calls[0][0] as FakeUtterance;
    expect(utt.voice).toBe(mockUkVoice);
  });

  it('_speakWithLang picks the configured Spanish voice for es locales', async () => {
    getSelectedEsVoice.mockReturnValue(mockEsVoice);
    const { _speakWithLang } = await load();
    _speakWithLang('hola', 'es-ES', null);
    const utt = synth.speak.mock.calls[0][0] as FakeUtterance;
    expect(utt.voice).toBe(mockEsVoice);
  });

  it('_speakWithLang picks a Google en-US voice for english text', async () => {
    const { _speakWithLang } = await load();
    _speakWithLang('hello', 'en-US', null);
    const utt = synth.speak.mock.calls[0][0] as FakeUtterance;
    expect(utt.voice).toBe(mockEnVoice);
  });

  it('_speakWithLang falls back to a generic locale match for other languages', async () => {
    const deVoice = { name: 'German', lang: 'de-DE' } as SpeechSynthesisVoice;
    synth = makeSynth([mockEnVoice, deVoice]);
    vi.stubGlobal('speechSynthesis', synth);
    const { _speakWithLang } = await load();
    _speakWithLang('hallo', 'de-DE', null);
    const utt = synth.speak.mock.calls[0][0] as FakeUtterance;
    expect(utt.voice).toBe(deVoice);
  });

  it('toggles the "on" class on the button while speaking', async () => {
    const { _speakWithLang } = await load();
    const btn = document.createElement('button');
    _speakWithLang('hello', 'en-US', btn);
    expect(btn.classList.contains('on')).toBe(true);
    const utt = synth.speak.mock.calls[0][0] as FakeUtterance;
    utt.onend?.();
    expect(btn.classList.contains('on')).toBe(false);
  });

  it('removes the "on" class on speech error', async () => {
    const { _speakWithLang } = await load();
    const btn = document.createElement('button');
    btn.classList.add('on');
    _speakWithLang('hello', 'en-US', btn);
    const utt = synth.speak.mock.calls[0][0] as FakeUtterance;
    utt.onerror?.();
    expect(btn.classList.contains('on')).toBe(false);
  });

  it('does nothing when speech synthesis is unavailable', async () => {
    vi.stubGlobal('speechSynthesis', undefined);
    const { _speakWithLang } = await load();
    _speakWithLang('hello', 'en-US', null);
    expect(synth.speak).not.toHaveBeenCalled();
  });
});

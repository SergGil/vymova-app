import { describe, it, expect, vi, beforeEach } from 'vitest';

const mockHeVoice = { name: 'Hebrew', lang: 'he-IL' } as SpeechSynthesisVoice;
const mockUkVoice = { name: 'Ukrainian', lang: 'uk-UA' } as SpeechSynthesisVoice;

const getSelectedHeVoice = vi.fn<() => SpeechSynthesisVoice | null>();
const getSelectedFrVoice = vi.fn<() => SpeechSynthesisVoice | null>();
const getSelectedUkVoice = vi.fn<() => SpeechSynthesisVoice | null>();

const speak = vi.fn<(text: string, btn: HTMLElement | null) => void>();
const _speakWithLang = vi.fn<(text: string, lang: string, btn: HTMLElement | null) => void>();

// he has a Latin-script Entry[2] transliteration (LATIN_TRANSLIT_LANGS member);
// fr's Entry[2] is IPA (not in LATIN_TRANSLIT_LANGS) — chosen specifically to
// exercise both sides of the translit-fallback gate in speakForCode().
vi.mock('../../js/features/voice/voice.tsx', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../../js/features/voice/voice.tsx')>();
  return {
    ...actual,
    getSelectedHeVoice: (...a: unknown[]) => getSelectedHeVoice(...(a as [])),
    getSelectedFrVoice: (...a: unknown[]) => getSelectedFrVoice(...(a as [])),
    getSelectedUkVoice: (...a: unknown[]) => getSelectedUkVoice(...(a as [])),
  };
});

vi.mock('../../js/features/voice/speech.ts', () => ({
  speak: (...a: unknown[]) => speak(...(a as [string, HTMLElement | null])),
  _speakWithLang: (...a: unknown[]) =>
    _speakWithLang(...(a as [string, string, HTMLElement | null])),
}));

describe('speak-lang.ts', () => {
  beforeEach(() => {
    vi.resetModules();
    getSelectedHeVoice.mockReset().mockReturnValue(null);
    getSelectedFrVoice.mockReset().mockReturnValue(null);
    getSelectedUkVoice.mockReset().mockReturnValue(null);
    speak.mockReset();
    _speakWithLang.mockReset();
  });

  async function load() {
    return import('../../js/features/voice/speak-lang.ts');
  }

  it('speaks natively when a browser voice exists for the target language', async () => {
    getSelectedHeVoice.mockReturnValue(mockHeVoice);
    const { speakForCode } = await load();
    const btn = document.createElement('button');
    speakForCode('he', 'שלום', 'hello', btn, 'shalom');
    expect(_speakWithLang).toHaveBeenCalledWith('שלום', 'he-IL', btn);
    expect(speak).not.toHaveBeenCalled();
    expect(btn.classList.contains('approx')).toBe(false);
  });

  it('falls back to reading the transliteration via the English voice when no native voice exists and the language is in LATIN_TRANSLIT_LANGS', async () => {
    getSelectedHeVoice.mockReturnValue(null);
    const { speakForCode } = await load();
    const btn = document.createElement('button');
    speakForCode('he', 'שלום', 'hello', btn, 'shalom');
    expect(_speakWithLang).not.toHaveBeenCalled();
    expect(speak).toHaveBeenCalledWith('shalom', btn);
    expect(btn.classList.contains('approx')).toBe(true);
  });

  it('falls back straight to the English text when no native voice exists and the language is not in LATIN_TRANSLIT_LANGS (IPA-only transcription)', async () => {
    getSelectedFrVoice.mockReturnValue(null);
    const { speakForCode } = await load();
    const btn = document.createElement('button');
    // 'sal.ɥ' would be French's real Entry[2] shape (IPA) — never safe to
    // read literally, so speakForCode must ignore it even though it's present.
    speakForCode('fr', 'salut', 'hi', btn, 'sal.ɥ');
    expect(speak).toHaveBeenCalledWith('hi', btn);
    expect(btn.classList.contains('approx')).toBe(false);
  });

  it('falls back to English when no native voice exists and no translit was provided (regression guard)', async () => {
    getSelectedHeVoice.mockReturnValue(null);
    const { speakForCode } = await load();
    const btn = document.createElement('button');
    speakForCode('he', 'שלום', 'hello', btn);
    expect(speak).toHaveBeenCalledWith('hello', btn);
    expect(btn.classList.contains('approx')).toBe(false);
  });

  it('clears a stale .approx hint from a previous call once a native voice becomes available', async () => {
    getSelectedHeVoice.mockReturnValue(null);
    const { speakForCode } = await load();
    const btn = document.createElement('button');
    speakForCode('he', 'שלום', 'hello', btn, 'shalom');
    expect(btn.classList.contains('approx')).toBe(true);

    getSelectedHeVoice.mockReturnValue(mockHeVoice);
    speakForCode('he', 'שלום', 'hello', btn, 'shalom');
    expect(btn.classList.contains('approx')).toBe(false);
  });

  it('speaks with the Ukrainian voice when one is selected for the "ua" code', async () => {
    getSelectedUkVoice.mockReturnValue(mockUkVoice);
    const { speakForCode } = await load();
    const btn = document.createElement('button');
    speakForCode('ua', 'привіт', 'hello', btn);
    expect(_speakWithLang).toHaveBeenCalledWith('привіт', 'uk-UA', btn);
  });

  it('falls back to English for "ua" when no Ukrainian voice is selected', async () => {
    getSelectedUkVoice.mockReturnValue(null);
    const { speakForCode } = await load();
    const btn = document.createElement('button');
    speakForCode('ua', 'привіт', 'hello', btn);
    expect(speak).toHaveBeenCalledWith('hello', btn);
  });

  it('always uses the generic speak() dispatcher for "en"', async () => {
    const { speakForCode } = await load();
    const btn = document.createElement('button');
    speakForCode('en', 'hello', 'hello', btn);
    expect(speak).toHaveBeenCalledWith('hello', btn);
    expect(_speakWithLang).not.toHaveBeenCalled();
  });
});

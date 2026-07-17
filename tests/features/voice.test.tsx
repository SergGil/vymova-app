import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import {
  VoiceInit,
  _renderVoices,
  speakPreferredEnVoice,
  speakEnAccent,
  getSelectedUkVoice,
  getSelectedEsVoice,
  getSelectedFrVoice,
  getSelectedItVoice,
  getSelectedPtVoice,
  getSelectedDeVoice,
  getSelectedHeVoice,
  getSelectedArVoice,
} from '../../js/features/voice/voice.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { synth } = vi.hoisted(() => ({
  synth: { cancel: vi.fn(), speak: vi.fn() },
}));
vi.mock('../../js/core/srs.ts', () => ({ synth }));

type FakeVoice = { name: string; lang: string; voiceURI: string; localService: boolean };

function makeVoice(name: string, lang: string, localService = true): FakeVoice {
  return { name, lang, voiceURI: name, localService };
}

// mount() renders <VoiceInit/> — which portals the picker straight into the
// real #fy-voices-list DOM node, so `container` (the react-root's own mount
// div) always stays empty; assertions on the picker itself go through
// document.getElementById('fy-voices-list') instead. Since the picker
// recomputes everything fresh from speechSynthesis/localStorage on every
// render (no cached props), stubbing voices BEFORE calling mount() is
// enough to see them reflected immediately — no separate _renderVoices()
// call needed afterward, unlike the old imperative implementation.
function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<VoiceInit />);
  });
  return { container, root };
}

class FakeUtterance {
  text: string;
  voice: FakeVoice | null = null;
  lang = '';
  rate = 1;
  pitch = 1;
  onend: (() => void) | null = null;
  onerror: (() => void) | null = null;
  constructor(text: string) {
    this.text = text;
  }
}

function makeFakeSynth(voices: FakeVoice[]) {
  return {
    getVoices: vi.fn(() => voices),
    cancel: vi.fn(),
    speak: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  };
}

describe('voice.tsx', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="fy-voices-list"></div>
      <div id="settings-overlay"></div>
      <button id="voices-reload-btn"></button>
    `;
    localStorage.clear();
    roots = [];
    synth.cancel.mockClear();
    synth.speak.mockClear();
    vi.stubGlobal('SpeechSynthesisUtterance', FakeUtterance);
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
    vi.unstubAllGlobals();
  });

  it('renders nothing into its own mount point (picker portals into #fy-voices-list instead)', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.innerHTML).toBe('');
  });

  it('shows the "not found" message when there are no voices', () => {
    vi.stubGlobal('speechSynthesis', makeFakeSynth([]));
    const { root } = mount();
    roots.push(root);

    const list = document.getElementById('fy-voices-list')!;
    expect(list.textContent).toContain('Голоси не знайдено');
  });

  it('renders EN voices and "missing" notices for languages without voices', () => {
    const voices = [makeVoice('Google US English', 'en-US'), makeVoice('Microsoft David', 'en-US')];
    vi.stubGlobal('speechSynthesis', makeFakeSynth(voices));
    const { root } = mount();
    roots.push(root);

    const list = document.getElementById('fy-voices-list')!;
    expect(list.textContent).toContain('Англійські голоси');
    expect(list.querySelectorAll('.voice-card').length).toBe(2);
    expect(list.textContent).toContain('Українських голосів не знайдено');
    expect(list.textContent).toContain('Іспанських голосів не знайдено');
  });

  it('renders Ukrainian voices when present', () => {
    const voices = [makeVoice('Google US English', 'en-US'), makeVoice('Microsoft Ostap', 'uk-UA')];
    vi.stubGlobal('speechSynthesis', makeFakeSynth(voices));
    const { root } = mount();
    roots.push(root);

    const list = document.getElementById('fy-voices-list')!;
    expect(list.textContent).toContain('Українські голоси (UA→EN картки)');
    expect(list.textContent).not.toContain('Українських голосів не знайдено');
  });

  it('selecting a voice card persists the choice and speaks a test phrase', () => {
    const voices = [makeVoice('Google US English', 'en-US'), makeVoice('Microsoft David', 'en-US')];
    const fakeSynth = makeFakeSynth(voices);
    vi.stubGlobal('speechSynthesis', fakeSynth);
    const { root } = mount();
    roots.push(root);

    const cards = document.querySelectorAll<HTMLButtonElement>('.voice-card');
    act(() => {
      cards[1].click();
    });

    expect(localStorage.getItem('ew_ws_voice')).toBe('Microsoft David');
    expect(synth.cancel).toHaveBeenCalled();
    expect(synth.speak).toHaveBeenCalled();
    expect(document.querySelectorAll('.voice-card-active')[0].textContent).toContain(
      'Microsoft David',
    );
  });

  it('speakPreferredEnVoice returns false when there are no EN voices', () => {
    vi.stubGlobal('speechSynthesis', makeFakeSynth([]));
    expect(speakPreferredEnVoice('hello', null)).toBe(false);
  });

  it('speakPreferredEnVoice speaks the cleaned text via the EN voice and toggles the button "on" class', () => {
    const voices = [makeVoice('Google US English', 'en-US')];
    vi.stubGlobal('speechSynthesis', makeFakeSynth(voices));
    const btn = document.createElement('button');

    const ok = speakPreferredEnVoice('Hello (greeting) <b>world</b>', btn);

    expect(ok).toBe(true);
    expect(synth.cancel).toHaveBeenCalled();
    expect(synth.speak).toHaveBeenCalled();
    const utterance = synth.speak.mock.calls[0][0] as FakeUtterance;
    expect(utterance.text).toBe('Hello world');
    expect(btn.classList.contains('on')).toBe(true);

    act(() => {
      utterance.onend?.();
    });
    expect(btn.classList.contains('on')).toBe(false);
  });

  it('speakPreferredEnVoice rejects Cyrillic-only text', () => {
    const voices = [makeVoice('Google US English', 'en-US')];
    vi.stubGlobal('speechSynthesis', makeFakeSynth(voices));
    expect(speakPreferredEnVoice('Привіт', null)).toBe(false);
  });

  it('getSelected*Voice falls back to the first matching voice when nothing saved', () => {
    const voices = [
      makeVoice('Microsoft Ostap', 'uk-UA'),
      makeVoice('Microsoft Helena', 'es-ES'),
      makeVoice('Microsoft Henri', 'fr-FR'),
      makeVoice('Microsoft Elsa', 'it-IT'),
      makeVoice('Microsoft Raquel', 'pt-PT'),
      makeVoice('Microsoft Katja', 'de-DE'),
      makeVoice('Microsoft Asaf', 'he-IL'),
      makeVoice('Microsoft Hamed', 'ar-SA'),
    ];
    vi.stubGlobal('speechSynthesis', makeFakeSynth(voices));

    expect(getSelectedUkVoice()?.name).toBe('Microsoft Ostap');
    expect(getSelectedEsVoice()?.name).toBe('Microsoft Helena');
    expect(getSelectedFrVoice()?.name).toBe('Microsoft Henri');
    expect(getSelectedItVoice()?.name).toBe('Microsoft Elsa');
    expect(getSelectedPtVoice()?.name).toBe('Microsoft Raquel');
    expect(getSelectedDeVoice()?.name).toBe('Microsoft Katja');
    expect(getSelectedHeVoice()?.name).toBe('Microsoft Asaf');
    expect(getSelectedArVoice()?.name).toBe('Microsoft Hamed');
  });

  it('renders Hebrew/Arabic voice sections and "missing" notices when absent', () => {
    const voices = [makeVoice('Google US English', 'en-US')];
    vi.stubGlobal('speechSynthesis', makeFakeSynth(voices));
    const { root } = mount();
    roots.push(root);

    const list = document.getElementById('fy-voices-list')!;
    expect(list.textContent).toContain('Голосів івриту не знайдено');
    expect(list.textContent).toContain('Арабських голосів не знайдено');
  });

  it('renders Hebrew and Arabic voices when present', () => {
    const voices = [
      makeVoice('Google US English', 'en-US'),
      makeVoice('Microsoft Asaf', 'he-IL'),
      makeVoice('Microsoft Hamed', 'ar-SA'),
    ];
    vi.stubGlobal('speechSynthesis', makeFakeSynth(voices));
    const { root } = mount();
    roots.push(root);

    const list = document.getElementById('fy-voices-list')!;
    expect(list.textContent).not.toContain('Голосів івриту не знайдено');
    expect(list.textContent).not.toContain('Арабських голосів не знайдено');
    expect(list.querySelectorAll('.voice-card').length).toBe(3);
  });

  it('VoiceInit mounts and renders voices when speechSynthesis already has voices', () => {
    const voices = [makeVoice('Google US English', 'en-US')];
    vi.stubGlobal('speechSynthesis', makeFakeSynth(voices));
    const { root } = mount();
    roots.push(root);

    const list = document.getElementById('fy-voices-list')!;
    expect(list.querySelectorAll('.voice-card').length).toBe(1);
  });

  // A plain click inside the (already open) overlay must NOT force a
  // re-render — under the old innerHTML-rebuild implementation that would
  // collapse any <details> dropdown the user just expanded. Verified here
  // via a voice list that changes AFTER mount: a plain click must not pick
  // the change up, only the overlay gaining the 'open' class should.
  it('opening the settings overlay re-renders voices, but clicking inside it does not', async () => {
    const fakeSynth = makeFakeSynth([makeVoice('Google US English', 'en-US')]);
    vi.stubGlobal('speechSynthesis', fakeSynth);
    const { root } = mount();
    roots.push(root);
    expect(document.getElementById('fy-voices-list')!.querySelectorAll('.voice-card').length).toBe(
      1,
    );

    fakeSynth.getVoices.mockReturnValue([
      makeVoice('Google US English', 'en-US'),
      makeVoice('Microsoft David', 'en-US'),
    ]);

    act(() => {
      document
        .getElementById('settings-overlay')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(document.getElementById('fy-voices-list')!.querySelectorAll('.voice-card').length).toBe(
      1,
    );

    await act(async () => {
      document.getElementById('settings-overlay')!.classList.add('open');
      await Promise.resolve();
    });
    expect(document.getElementById('fy-voices-list')!.querySelectorAll('.voice-card').length).toBe(
      2,
    );
  });

  it('reload button logs voices and forces a re-render', () => {
    const voices = [makeVoice('Google US English', 'en-US')];
    const fakeSynth = makeFakeSynth(voices);
    vi.stubGlobal('speechSynthesis', fakeSynth);
    const { root } = mount();
    roots.push(root);

    const logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    act(() => {
      document
        .getElementById('voices-reload-btn')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(fakeSynth.cancel).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining('Google US English'));
    expect(document.getElementById('fy-voices-list')!.querySelectorAll('.voice-card').length).toBe(
      1,
    );
    logSpy.mockRestore();
  });

  it('reload button shows a debug message listing found Ukrainian-ish voices when none pass the uk filter', () => {
    const voices = [makeVoice('Google US English', 'en-US')];
    const fakeSynth = makeFakeSynth(voices);
    vi.stubGlobal('speechSynthesis', fakeSynth);
    const { root } = mount();
    roots.push(root);
    vi.spyOn(console, 'log').mockImplementation(() => {});
    vi.spyOn(console, 'group').mockImplementation(() => {});
    vi.spyOn(console, 'groupEnd').mockImplementation(() => {});

    act(() => {
      document
        .getElementById('voices-reload-btn')!
        .dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(document.querySelector('.voice-debug-msg')).not.toBeNull();
  });

  // _renderVoices() is a registration-hook trigger — a no-op when nothing's
  // mounted yet (matches the original's `if (!container) return;` guard),
  // and forces a fresh re-render (from live speechSynthesis/localStorage
  // state) once VoiceInit is mounted.
  it('_renderVoices() is a no-op before VoiceInit mounts, and force-refreshes afterward', () => {
    vi.stubGlobal('speechSynthesis', makeFakeSynth([]));
    expect(() => _renderVoices()).not.toThrow();

    const fakeSynth = makeFakeSynth([]);
    vi.stubGlobal('speechSynthesis', fakeSynth);
    const { root } = mount();
    roots.push(root);
    expect(document.getElementById('fy-voices-list')!.querySelectorAll('.voice-card').length).toBe(
      0,
    );

    fakeSynth.getVoices.mockReturnValue([makeVoice('Google US English', 'en-US')]);
    act(() => {
      _renderVoices();
    });
    expect(document.getElementById('fy-voices-list')!.querySelectorAll('.voice-card').length).toBe(
      1,
    );
  });

  it('speakEnAccent picks the voice matching the requested accent', () => {
    const gbVoice = makeVoice('Microsoft Sonia', 'en-GB');
    const usVoice = makeVoice('Microsoft Aria', 'en-US');
    vi.stubGlobal('speechSynthesis', makeFakeSynth([usVoice, gbVoice]));

    speakEnAccent('hello', 'GB', null);
    expect(synth.cancel).toHaveBeenCalled();
    const utterance = synth.speak.mock.calls[0][0] as FakeUtterance;
    expect(utterance.voice?.name).toBe('Microsoft Sonia');
    expect(utterance.lang).toBe('en-GB');
  });

  it('speakEnAccent falls back to a lang-based match when no labelled voice fits the accent', () => {
    const gbVoice = makeVoice('Some Unlabelled Voice', 'en-GB');
    vi.stubGlobal('speechSynthesis', makeFakeSynth([gbVoice]));

    speakEnAccent('hello', 'GB', null);
    const utterance = synth.speak.mock.calls[0][0] as FakeUtterance;
    expect(utterance.voice?.name).toBe('Some Unlabelled Voice');
  });

  it('speakEnAccent falls back to en-US/en-GB lang string when there are no EN voices at all', () => {
    vi.stubGlobal('speechSynthesis', makeFakeSynth([]));

    speakEnAccent('hello', 'US', null);
    const utterance = synth.speak.mock.calls[0][0] as FakeUtterance;
    expect(utterance.voice).toBeNull();
    expect(utterance.lang).toBe('en-US');
  });

  it('speakEnAccent toggles the "on" class on the button while speaking', () => {
    vi.stubGlobal('speechSynthesis', makeFakeSynth([makeVoice('Microsoft Aria', 'en-US')]));
    const btn = document.createElement('button');

    speakEnAccent('hello', 'US', btn);
    expect(btn.classList.contains('on')).toBe(true);

    const utterance = synth.speak.mock.calls[0][0] as FakeUtterance;
    act(() => {
      utterance.onend?.();
    });
    expect(btn.classList.contains('on')).toBe(false);
  });

  it('removes listeners on unmount', () => {
    const voices = [makeVoice('Google US English', 'en-US')];
    const fakeSynth = makeFakeSynth(voices);
    vi.stubGlobal('speechSynthesis', fakeSynth);
    const { root } = mount();
    act(() => {
      root.unmount();
    });

    expect(fakeSynth.removeEventListener).toHaveBeenCalled();
  });
});

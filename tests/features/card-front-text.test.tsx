import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { setCwState, setFlippedState, setModeState } from '../../src/deck-store.ts';
import { clearSrsData } from '../../src/srs-store.ts';
import type { WordEntry } from '../../src/types.ts';
import {
  WordText, Transcription, PosTag, SrsBadge, Translation, ExEn, ExUa, OtherMeanings,
} from '../../js/features/card-front-text.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { speakEnAccent } = vi.hoisted(() => ({ speakEnAccent: vi.fn() }));
vi.mock('../../js/features/voice.tsx', () => ({
  speakEnAccent,
  speakEsAccent: vi.fn(), speakPtAccent: vi.fn(), hasEsAccent: vi.fn(() => false), hasPtAccent: vi.fn(() => false),
  getSelectedUkVoice: vi.fn(() => null),
  getSelectedEsVoice: vi.fn(() => null), getSelectedFrVoice: vi.fn(() => null), getSelectedItVoice: vi.fn(() => null),
  getSelectedPtVoice: vi.fn(() => null), getSelectedDeVoice: vi.fn(() => null), getSelectedHeVoice: vi.fn(() => null),
  getSelectedArVoice: vi.fn(() => null), getSelectedPlVoice: vi.fn(() => null), getSelectedZhVoice: vi.fn(() => null),
  getSelectedElVoice: vi.fn(() => null), getSelectedJaVoice: vi.fn(() => null), getSelectedTrVoice: vi.fn(() => null),
  getSelectedNlVoice: vi.fn(() => null),
}));

const { speak } = vi.hoisted(() => ({ speak: vi.fn() }));
vi.mock('../../js/features/speech.ts', () => ({ speak }));

const cw: WordEntry = ['abandon', 'покинути', 'He will <b>abandon</b> it.', 'Він <b>покине</b> його.', 'ˈæ', 'v'];

function mount(Component: () => JSX.Element | null): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<Component />); });
  return { container, root };
}

describe('card-front-text.tsx', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    setModeState('en');
    setCwState(cw);
    setFlippedState(false);
    clearSrsData();
    speakEnAccent.mockClear();
    speak.mockClear();
  });

  it('WordText renders nothing when there is no current word', () => {
    setCwState(null);
    const { container } = mount(WordText);
    expect(container.innerHTML).toBe('');
  });

  it('WordText renders the front word for the current mode', () => {
    const { container } = mount(WordText);
    expect(container.querySelector('#wword')!.textContent).toBe('abandon');
  });

  it('Transcription shows the decoded IPA for English-front modes', () => {
    const { container } = mount(Transcription);
    const el = container.querySelector('#wtrans') as HTMLElement;
    expect(el.style.display).toBe('flex');
    expect(el.querySelector('span')!.textContent).toBe('[ˈæ]');
  });

  it('Transcription renders UK/US accent buttons (as flag icons) for English-front modes', () => {
    const { container } = mount(Transcription);
    const el = container.querySelector('#wtrans') as HTMLElement;
    const btns = el.querySelectorAll<HTMLButtonElement>('button.accent-btn');
    expect(btns.length).toBe(2);
    expect(btns[0].title).toBe('British');
    expect(btns[1].title).toBe('American');
    expect(btns[0].querySelector('img')!.alt).toBe('GB');
    expect(btns[1].querySelector('img')!.alt).toBe('US');
  });

  it('clicking the GB/US buttons speaks the front word with that accent', () => {
    const { container } = mount(Transcription);
    const el = container.querySelector('#wtrans') as HTMLElement;
    const [gbBtn, usBtn] = el.querySelectorAll<HTMLButtonElement>('button.accent-btn');

    act(() => { gbBtn.click(); });
    expect(speakEnAccent).toHaveBeenCalledWith('abandon', 'GB', gbBtn);

    act(() => { usBtn.click(); });
    expect(speakEnAccent).toHaveBeenCalledWith('abandon', 'US', usBtn);
  });

  it('WordText has no dir attribute for LTR-front modes', () => {
    const { container } = mount(WordText);
    expect(container.querySelector('#wword')!.hasAttribute('dir')).toBe(false);
  });

  it('WordText sets dir="rtl" when the front language is Hebrew', () => {
    setModeState('he-en');
    const { container } = mount(WordText);
    expect(container.querySelector('#wword')!.getAttribute('dir')).toBe('rtl');
  });

  it('Translation sets dir="rtl" when the back language is Arabic', () => {
    setModeState('en-ar');
    const { container } = mount(Translation);
    expect(container.querySelector('#wtransl')!.getAttribute('dir')).toBe('rtl');
  });

  it('ExEn/ExUa have no dir attribute for the default en/ua mode', () => {
    const { container: c1 } = mount(ExEn);
    expect(c1.querySelector('#exen')!.hasAttribute('dir')).toBe(false);
    const { container: c2 } = mount(ExUa);
    expect(c2.querySelector('#exua')!.hasAttribute('dir')).toBe(false);
  });

  it('Transcription hides itself for non-English-front modes', () => {
    setModeState('ua');
    const { container } = mount(Transcription);
    const el = container.querySelector('#wtrans') as HTMLElement;
    expect(el.style.display).toBe('none');
  });

  it('PosTag shows the translated part-of-speech for the front language', () => {
    const { container } = mount(PosTag);
    const el = container.querySelector('#wpos') as HTMLElement;
    expect(el.style.display).toBe('block');
    expect(el.textContent).toBe('verb');
  });

  it('PosTag hides itself when the word has no part-of-speech code', () => {
    setCwState(['abandon', 'покинути', '', '', '', ''] as unknown as WordEntry);
    const { container } = mount(PosTag);
    const el = container.querySelector('#wpos') as HTMLElement;
    expect(el.style.display).toBe('none');
  });

  it('SrsBadge renders a hidden placeholder when there is nothing to show', () => {
    document.body.innerHTML = '<select id="sel-range"><option value="all" selected>all</option></select>';
    const { container } = mount(SrsBadge);
    const el = container.querySelector('#srs-next') as HTMLElement;
    expect(el.style.display).toBe('none');
  });

  it('SrsBadge shows a "new" badge when the SRS range is selected and the word is unscheduled', () => {
    document.body.innerHTML = '<select id="sel-range"><option value="srs" selected>srs</option></select>';
    (document.getElementById('sel-range') as HTMLSelectElement).value = 'srs';
    const { container } = mount(SrsBadge);
    const el = container.querySelector('#srs-next') as HTMLElement;
    expect(el.className).toBe('srs-next new');
    expect(el.textContent).toBe('🆕 Нове');
  });

  it('Translation toggles the "show" class based on flipped state', () => {
    const { container } = mount(Translation);
    const el = container.querySelector('#wtransl') as HTMLElement;
    expect(el.textContent).toBe('покинути');
    expect(el.className).toBe('transl');

    act(() => { setFlippedState(true); });
    expect(container.querySelector('#wtransl')!.className).toBe('transl show');
  });

  it('ExEn renders the bolded English example HTML', () => {
    const { container } = mount(ExEn);
    const el = container.querySelector('#exen') as HTMLElement;
    expect(el.innerHTML).toContain('<b>abandon</b>');
  });

  it('ExUa renders the bolded Ukrainian example and toggles "show" with flipped', () => {
    const { container } = mount(ExUa);
    const el = container.querySelector('#exua') as HTMLElement;
    expect(el.innerHTML).toContain('<b>покине</b>');
    expect(el.className).toBe('ex-ua');

    act(() => { setFlippedState(true); });
    expect(container.querySelector('#exua')!.className).toBe('ex-ua show');
  });

  describe('OtherMeanings', () => {
    it('renders nothing when the card is not flipped', () => {
      setFlippedState(false);
      setCwState(['light', 'світло', '', '', '', 'n'] as unknown as WordEntry);
      const { container } = mount(OtherMeanings);
      expect(container.innerHTML).toBe('');
    });

    it('renders nothing when the word has no sense list', () => {
      setFlippedState(true);
      const { container } = mount(OtherMeanings);
      expect(container.innerHTML).toBe('');
    });

    it('renders each numbered sense with its own translation and example when flipped', () => {
      setFlippedState(true);
      setCwState(['light', 'світло', '', '', '', 'n'] as unknown as WordEntry);
      const { container } = mount(OtherMeanings);
      const items = container.querySelectorAll('#cb-senses-list li');
      expect(items.length).toBe(2);
      expect(items[0].querySelector('.sense-translation')!.textContent).toBe('світло');
      expect(items[0].querySelector('.sense-example')!.textContent).toContain('turn on the light');
      expect(items[1].querySelector('.sense-translation')!.textContent).toBe('легкий (за вагою)');
    });

    it('shows the "All meanings" title', () => {
      setFlippedState(true);
      setCwState(['light', 'світло', '', '', '', 'n'] as unknown as WordEntry);
      const { container } = mount(OtherMeanings);
      expect(container.querySelector('.similar-title')!.textContent).toContain('Усі значення');
    });

    it('each sense has its own speak button that speaks that sense\'s example', () => {
      setFlippedState(true);
      setCwState(['light', 'світло', '', '', '', 'n'] as unknown as WordEntry);
      const { container } = mount(OtherMeanings);
      const items = container.querySelectorAll('#cb-senses-list li');
      const btns = Array.from(items).map(li => li.querySelector<HTMLButtonElement>('.sense-speak-btn')!);
      expect(btns.length).toBe(2);

      act(() => { btns[0].click(); });
      expect(speak).toHaveBeenCalledWith('Please turn on the light in the hallway.', btns[0]);

      act(() => { btns[1].click(); });
      expect(speak).toHaveBeenCalledWith('This suitcase is surprisingly light for its size.', btns[1]);
    });
  });
});

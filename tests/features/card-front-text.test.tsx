import { describe, it, expect, vi, beforeAll, beforeEach } from 'vitest';
import { ensureLocaleLoaded } from '../../js/features/i18n.ts';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { setCwState, setFlippedState, setModeState } from '../../src/deck-store.ts';
import { clearSrsData } from '../../src/srs-store.ts';
import type { WordEntry } from '../../src/types.ts';
import {
  WordText,
  Transcription,
  PosTag,
  SrsBadge,
  Translation,
  ExEn,
  ExUa,
  OtherMeanings,
} from '../../js/features/card-front-text.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { speakEnAccent } = vi.hoisted(() => ({ speakEnAccent: vi.fn() }));
vi.mock('../../js/features/voice/voice.tsx', () => ({
  speakEnAccent,
  speakEsAccent: vi.fn(),
  speakPtAccent: vi.fn(),
  hasEsAccent: vi.fn(() => false),
  hasPtAccent: vi.fn(() => false),
  getSelectedUkVoice: vi.fn(() => null),
  getSelectedEsVoice: vi.fn(() => null),
  getSelectedFrVoice: vi.fn(() => null),
  getSelectedItVoice: vi.fn(() => null),
  getSelectedPtVoice: vi.fn(() => null),
  getSelectedDeVoice: vi.fn(() => null),
  getSelectedHeVoice: vi.fn(() => null),
  getSelectedArVoice: vi.fn(() => null),
  getSelectedPlVoice: vi.fn(() => null),
  getSelectedZhVoice: vi.fn(() => null),
  getSelectedElVoice: vi.fn(() => null),
  getSelectedJaVoice: vi.fn(() => null),
  getSelectedTrVoice: vi.fn(() => null),
  getSelectedNlVoice: vi.fn(() => null),
  getSelectedViVoice: vi.fn(() => null),
  getSelectedHiVoice: vi.fn(() => null),
  getSelectedBnVoice: vi.fn(() => null),
  getSelectedIdVoice: vi.fn(() => null),
  getSelectedPcmVoice: vi.fn(() => null),
  getSelectedKoVoice: vi.fn(() => null),
  getSelectedFaVoice: vi.fn(() => null),
  getSelectedSwVoice: vi.fn(() => null),
  getSelectedMsVoice: vi.fn(() => null),
  getSelectedThVoice: vi.fn(() => null),
  getSelectedAzVoice: vi.fn(() => null),
  getSelectedRoVoice: vi.fn(() => null),
  getSelectedHuVoice: vi.fn(() => null),
  getSelectedCsVoice: vi.fn(() => null),
  getSelectedKkVoice: vi.fn(() => null),
  getSelectedSvVoice: vi.fn(() => null),
  getSelectedKaVoice: vi.fn(() => null),
  getSelectedHrVoice: vi.fn(() => null),
  getSelectedSrVoice: vi.fn(() => null),
  getSelectedBsVoice: vi.fn(() => null),
  getSelectedBgVoice: vi.fn(() => null),
  getSelectedSkVoice: vi.fn(() => null),
  getSelectedHyVoice: vi.fn(() => null),
  getSelectedDaVoice: vi.fn(() => null),
  getSelectedFiVoice: vi.fn(() => null),
  getSelectedNoVoice: vi.fn(() => null),
  getSelectedLaVoice: vi.fn(() => null),
  getSelectedLtVoice: vi.fn(() => null),
  getSelectedLvVoice: vi.fn(() => null),
  getSelectedEtVoice: vi.fn(() => null),
  getSelectedSlVoice: vi.fn(() => null),
  getSelectedMkVoice: vi.fn(() => null),
  getSelectedSqVoice: vi.fn(() => null),
  getSelectedIsVoice: vi.fn(() => null),
  getSelectedCyVoice: vi.fn(() => null),
  getSelectedGaVoice: vi.fn(() => null),
  getSelectedTlVoice: vi.fn(() => null),
  getSelectedMnVoice: vi.fn(() => null),
  getSelectedUzVoice: vi.fn(() => null),
  getSelectedAmVoice: vi.fn(() => null),
  getSelectedEoVoice: vi.fn(() => null),
  getSelectedTaVoice: vi.fn(() => null),
  getSelectedPaVoice: vi.fn(() => null),
  getSelectedZuVoice: vi.fn(() => null),
  getSelectedAfVoice: vi.fn(() => null),
  getSelectedKyVoice: vi.fn(() => null),
  getSelectedTgVoice: vi.fn(() => null),
  getSelectedTkVoice: vi.fn(() => null),
  getSelectedUgVoice: vi.fn(() => null),
  getSelectedEuVoice: vi.fn(() => null),
  getSelectedCaVoice: vi.fn(() => null),
  getSelectedGlVoice: vi.fn(() => null),
  getSelectedMtVoice: vi.fn(() => null),
  getSelectedLbVoice: vi.fn(() => null),
  getSelectedHtVoice: vi.fn(() => null),
  getSelectedBoVoice: vi.fn(() => null),
  getSelectedMyVoice: vi.fn(() => null),
  getSelectedKmVoice: vi.fn(() => null),
  getSelectedLoVoice: vi.fn(() => null),
  getSelectedNeVoice: vi.fn(() => null),
  getSelectedSiVoice: vi.fn(() => null),
  getSelectedUrVoice: vi.fn(() => null),
  getSelectedTeVoice: vi.fn(() => null),
  getSelectedMlVoice: vi.fn(() => null),
  getSelectedKnVoice: vi.fn(() => null),
  getSelectedMrVoice: vi.fn(() => null),
  getSelectedGuVoice: vi.fn(() => null),
  getSelectedOrVoice: vi.fn(() => null),
  getSelectedAsVoice: vi.fn(() => null),
  getSelectedSdVoice: vi.fn(() => null),
  getSelectedPsVoice: vi.fn(() => null),
  getSelectedSoVoice: vi.fn(() => null),
  getSelectedHaVoice: vi.fn(() => null),
  getSelectedYoVoice: vi.fn(() => null),
  getSelectedIgVoice: vi.fn(() => null),
  getSelectedTiVoice: vi.fn(() => null),
  getSelectedWoVoice: vi.fn(() => null),
  getSelectedMgVoice: vi.fn(() => null),
  getSelectedXhVoice: vi.fn(() => null),
  getSelectedSnVoice: vi.fn(() => null),
  getSelectedNyVoice: vi.fn(() => null),
  getSelectedFjVoice: vi.fn(() => null),
  getSelectedSmVoice: vi.fn(() => null),
  getSelectedToVoice: vi.fn(() => null),
  getSelectedMiVoice: vi.fn(() => null),
  getSelectedHawVoice: vi.fn(() => null),
  getSelectedJvVoice: vi.fn(() => null),
  getSelectedSuVoice: vi.fn(() => null),
  getSelectedGdVoice: vi.fn(() => null),
  getSelectedBrVoice: vi.fn(() => null),
  getSelectedKwVoice: vi.fn(() => null),
  getSelectedGvVoice: vi.fn(() => null),
  getSelectedFoVoice: vi.fn(() => null),
  getSelectedOcVoice: vi.fn(() => null),
  getSelectedCoVoice: vi.fn(() => null),
  getSelectedScVoice: vi.fn(() => null),
  getSelectedFyVoice: vi.fn(() => null),
  getSelectedYiVoice: vi.fn(() => null),
  getSelectedLadVoice: vi.fn(() => null),
  getSelectedQuVoice: vi.fn(() => null),
  getSelectedGnVoice: vi.fn(() => null),
  getSelectedAyVoice: vi.fn(() => null),
  getSelectedDzVoice: vi.fn(() => null),
  getSelectedDvVoice: vi.fn(() => null),
  getSelectedTetVoice: vi.fn(() => null),
  getSelectedBeVoice: vi.fn(() => null),
  getSelectedQyaVoice: vi.fn(() => null),
  getSelectedSjnVoice: vi.fn(() => null),
  getSelectedKuVoice: vi.fn(() => null),
  getSelectedOmVoice: vi.fn(() => null),
  getSelectedLnVoice: vi.fn(() => null),
  getSelectedBhoVoice: vi.fn(() => null),
  getSelectedCebVoice: vi.fn(() => null),
  getSelectedRmVoice: vi.fn(() => null),
  getSelectedTyVoice: vi.fn(() => null),
  getSelectedChVoice: vi.fn(() => null),
  getSelectedMhVoice: vi.fn(() => null),
  getSelectedPauVoice: vi.fn(() => null),
  getSelectedNahVoice: vi.fn(() => null),
  getSelectedNvVoice: vi.fn(() => null),
  getSelectedTlhVoice: vi.fn(() => null),
  getSelectedValVoice: vi.fn(() => null),
  getSelectedDthVoice: vi.fn(() => null),
}));

const { speak } = vi.hoisted(() => ({ speak: vi.fn() }));
vi.mock('../../js/features/voice/speech.ts', () => ({ speak }));

const cw: WordEntry = [
  'abandon',
  'покинути',
  'He will <b>abandon</b> it.',
  'Він <b>покине</b> його.',
  'ˈæ',
  'v',
];

function mount(Component: () => JSX.Element | null): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<Component />);
  });
  return { container, root };
}

describe('card-front-text.tsx', () => {
  beforeAll(async () => {
    // PosTag renders the part-of-speech label translated into the front language.
    await ensureLocaleLoaded('en');
  });

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

    act(() => {
      gbBtn.click();
    });
    expect(speakEnAccent).toHaveBeenCalledWith('abandon', 'GB', gbBtn);

    act(() => {
      usBtn.click();
    });
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
    document.body.innerHTML =
      '<select id="sel-range"><option value="all" selected>all</option></select>';
    const { container } = mount(SrsBadge);
    const el = container.querySelector('#srs-next') as HTMLElement;
    expect(el.style.display).toBe('none');
  });

  it('SrsBadge shows a "new" badge when the SRS range is selected and the word is unscheduled', () => {
    document.body.innerHTML =
      '<select id="sel-range"><option value="srs" selected>srs</option></select>';
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

    act(() => {
      setFlippedState(true);
    });
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

    act(() => {
      setFlippedState(true);
    });
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

    it("each sense has its own speak button that speaks that sense's example", () => {
      setFlippedState(true);
      setCwState(['light', 'світло', '', '', '', 'n'] as unknown as WordEntry);
      const { container } = mount(OtherMeanings);
      const items = container.querySelectorAll('#cb-senses-list li');
      const btns = Array.from(items).map((li) =>
        li.querySelector<HTMLButtonElement>('.sense-speak-btn')!,
      );
      expect(btns.length).toBe(2);

      act(() => {
        btns[0].click();
      });
      expect(speak).toHaveBeenCalledWith('Please turn on the light in the hallway.', btns[0]);

      act(() => {
        btns[1].click();
      });
      expect(speak).toHaveBeenCalledWith(
        'This suitcase is surprisingly light for its size.',
        btns[1],
      );
    });
  });
});

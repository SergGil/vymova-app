import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { IDIOMS_EN as ENGLISH_IDIOMS } from '../../data/idioms-data/idioms_en.ts';
import { IDIOMS_UA as UKRAINIAN_IDIOMS } from '../../data/idioms-data/idioms_ua.ts';
import { IDIOMS_ES as SPANISH_IDIOMS } from '../../data/idioms-data/idioms_es.ts';
import { IDIOMS_HE as HEBREW_IDIOMS } from '../../data/idioms-data/idioms_he.ts';
import { IDIOMS_AR as ARABIC_IDIOMS } from '../../data/idioms-data/idioms_ar.ts';
import { IDIOMS_PL as POLISH_IDIOMS } from '../../data/idioms-data/idioms_pl.ts';
import { IdiomsPageRoot, openIdiomsContent } from '../../js/features/idioms-page.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { speakWithLang } = vi.hoisted(() => ({ speakWithLang: vi.fn() }));
vi.mock('../../js/features/voice/speech.ts', () => ({ _speakWithLang: speakWithLang }));

// Idiom data now loads lazily per tab (js/features/idioms-loader.ts) —
// mount() waits for that dynamic import (and the re-render it triggers) to
// settle before returning, so callers see the fully-loaded content, same
// as before.
async function mount(): Promise<{ container: HTMLElement; root: Root }> {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<IdiomsPageRoot />);
  });
  await act(async () => {
    await vi.dynamicImportSettled();
  });
  return { container, root };
}

describe('idioms-page.tsx IdiomsPageRoot', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    localStorage.clear();
    speakWithLang.mockClear();
  });

  it('renders the English idioms tab by default', async () => {
    const { container } = await mount();
    expect(container.querySelector('.idioms-tab-active')!.textContent).toContain('Англійські');
    expect(container.querySelectorAll('.idiom-card').length).toBe(ENGLISH_IDIOMS.length);
  });

  it('switches to the Ukrainian idioms tab', async () => {
    const { container } = await mount();
    const tabs = container.querySelectorAll('.idioms-tab');
    act(() => {
      (tabs[1] as HTMLButtonElement).click();
    });
    await act(async () => {
      await vi.dynamicImportSettled();
    });
    expect(container.querySelector('.idioms-tab-active')!.textContent).toContain('Українські');
    expect(container.querySelectorAll('.idiom-card').length).toBe(UKRAINIAN_IDIOMS.length);
  });

  it('switches to the Spanish idioms tab and shows the English meaning', async () => {
    localStorage.setItem('ew_learn_lang', 'ua');
    localStorage.setItem('ew_know_lang', 'es');
    const { container } = await mount();
    const tabs = container.querySelectorAll('.idioms-tab');
    act(() => {
      (tabs[1] as HTMLButtonElement).click();
    });
    await act(async () => {
      await vi.dynamicImportSettled();
    });
    expect(container.querySelector('.idioms-tab-active')!.textContent).toContain('Іспанські');
    expect(container.querySelectorAll('.idiom-card').length).toBe(SPANISH_IDIOMS.length);
    expect(container.querySelector('.idiom-meaning-en')).not.toBeNull();
  });

  it('only shows tabs relevant to the current know/learn language pair', async () => {
    localStorage.setItem('ew_learn_lang', 'en');
    localStorage.setItem('ew_know_lang', 'ua');
    const { container } = await mount();
    expect(container.querySelectorAll('.idioms-tab').length).toBe(2);
  });

  it('shows idiom tabs for a language pair outside en/ua/es', async () => {
    localStorage.setItem('ew_learn_lang', 'fr');
    localStorage.setItem('ew_know_lang', 'it');
    const { container } = await mount();
    const tabs = container.querySelectorAll('.idioms-tab');
    expect(tabs.length).toBe(2);
    expect(container.querySelector('.idioms-tab-active')!.textContent).toContain('Французькі');
  });

  it('shows Hebrew idioms with RTL phrase/example for an en/he pair', async () => {
    localStorage.setItem('ew_learn_lang', 'he');
    localStorage.setItem('ew_know_lang', 'en');
    const { container } = await mount();
    expect(container.querySelector('.idioms-tab-active')!.textContent).toContain('Івритські');
    expect(container.querySelectorAll('.idiom-card').length).toBe(HEBREW_IDIOMS.length);
    expect(container.querySelector('.idiom-phrase')!.getAttribute('dir')).toBe('rtl');
    expect(container.querySelector('.idiom-ex-src')!.getAttribute('dir')).toBe('rtl');
  });

  it('shows Arabic idioms with RTL phrase/example for an en/ar pair', async () => {
    localStorage.setItem('ew_learn_lang', 'ar');
    localStorage.setItem('ew_know_lang', 'en');
    const { container } = await mount();
    expect(container.querySelector('.idioms-tab-active')!.textContent).toContain('Арабські');
    expect(container.querySelectorAll('.idiom-card').length).toBe(ARABIC_IDIOMS.length);
    expect(container.querySelector('.idiom-phrase')!.getAttribute('dir')).toBe('rtl');
  });

  it('shows Polish idioms for an en/pl pair', async () => {
    localStorage.setItem('ew_learn_lang', 'pl');
    localStorage.setItem('ew_know_lang', 'en');
    const { container } = await mount();
    expect(container.querySelector('.idioms-tab-active')!.textContent).toContain('Польські');
    expect(container.querySelectorAll('.idiom-card').length).toBe(POLISH_IDIOMS.length);
  });

  it('filters idioms by search query', async () => {
    const { container } = await mount();
    const input = container.querySelector('.idioms-search') as HTMLInputElement;
    const nativeValueSetter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    )!.set!;
    act(() => {
      nativeValueSetter.call(input, 'break the ice');
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    const cards = container.querySelectorAll('.idiom-card');
    expect(cards.length).toBe(1);
    expect(cards[0].textContent).toContain('Break the ice');
  });

  it('shows an empty message when no idioms match the query', async () => {
    const { container } = await mount();
    const input = container.querySelector('.idioms-search') as HTMLInputElement;
    const nativeValueSetter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    )!.set!;
    act(() => {
      nativeValueSetter.call(input, 'zzzzzzzzznotfound');
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    expect(container.querySelector('.idioms-empty')!.textContent).toBe('Нічого не знайдено 🤷');
  });

  it('calls _speakWithLang when a speak button is clicked', async () => {
    const { container } = await mount();
    const btn = container.querySelector('.idiom-speak') as HTMLButtonElement;
    act(() => {
      btn.click();
    });
    expect(speakWithLang).toHaveBeenCalledWith(ENGLISH_IDIOMS[0].phrase, 'en-US', btn);
  });

  it('speaks the English-tab translation example in Ukrainian, not English', async () => {
    // idiom.exampleTr on every non-UA tab's data is Ukrainian text — the
    // speak button for it must use the Ukrainian voice, not the tab's own
    // source-language voice, or the TTS engine reads Ukrainian text with
    // an English locale.
    const { container } = await mount();
    const firstCard = container.querySelector('.idiom-card')!;
    const speakBtns = firstCard.querySelectorAll('.idiom-speak');
    const trSpeakBtn = speakBtns[speakBtns.length - 1] as HTMLButtonElement;
    act(() => {
      trSpeakBtn.click();
    });
    expect(speakWithLang).toHaveBeenCalledWith(ENGLISH_IDIOMS[0].exampleTr, 'uk-UA', trSpeakBtn);
  });

  it("speaks the Ukrainian tab's untranslated example in English, not Ukrainian", async () => {
    // UKRAINIAN_IDIOMS' own idiom.exampleTr fallback (no translations entry
    // for the current learn language) is English text.
    localStorage.setItem('ew_learn_lang', 'ja'); // not covered by any idiom's translations map
    const { container } = await mount();
    const tabs = container.querySelectorAll('.idioms-tab');
    const uaTab = [...tabs].find((tb) => tb.textContent?.includes('Українські'))!;
    act(() => {
      (uaTab as HTMLButtonElement).click();
    });
    await act(async () => {
      await vi.dynamicImportSettled();
    });
    const firstCard = container.querySelector('.idiom-card')!;
    const speakBtns = firstCard.querySelectorAll('.idiom-speak');
    const trSpeakBtn = speakBtns[speakBtns.length - 1] as HTMLButtonElement;
    act(() => {
      trSpeakBtn.click();
    });
    expect(speakWithLang).toHaveBeenCalledWith(UKRAINIAN_IDIOMS[0].exampleTr, 'en-US', trSpeakBtn);
  });

  it('does not throw when openIdiomsContent is called', async () => {
    await mount();
    expect(() => openIdiomsContent()).not.toThrow();
  });
});

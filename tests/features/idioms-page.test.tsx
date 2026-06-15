import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ENGLISH_IDIOMS, UKRAINIAN_IDIOMS, SPANISH_IDIOMS } from '../../data/idioms.ts';
import { IdiomsPageRoot, openIdiomsContent } from '../../js/features/idioms-page.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { speakWithLang } = vi.hoisted(() => ({ speakWithLang: vi.fn() }));
vi.mock('../../js/features/speech.ts', () => ({ _speakWithLang: speakWithLang }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<IdiomsPageRoot />); });
  return { container, root };
}

describe('idioms-page.tsx IdiomsPageRoot', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    localStorage.clear();
    speakWithLang.mockClear();
  });

  it('renders the English idioms tab by default', () => {
    const { container } = mount();
    expect(container.querySelector('.idioms-tab-active')!.textContent).toContain('Англійські');
    expect(container.querySelectorAll('.idiom-card').length).toBe(ENGLISH_IDIOMS.length);
  });

  it('switches to the Ukrainian idioms tab', () => {
    const { container } = mount();
    const tabs = container.querySelectorAll('.idioms-tab');
    act(() => { (tabs[1] as HTMLButtonElement).click(); });
    expect(container.querySelector('.idioms-tab-active')!.textContent).toContain('Українські');
    expect(container.querySelectorAll('.idiom-card').length).toBe(UKRAINIAN_IDIOMS.length);
  });

  it('switches to the Spanish idioms tab and shows the English meaning', () => {
    localStorage.setItem('ew_learn_lang', 'ua');
    localStorage.setItem('ew_know_lang', 'es');
    const { container } = mount();
    const tabs = container.querySelectorAll('.idioms-tab');
    act(() => { (tabs[1] as HTMLButtonElement).click(); });
    expect(container.querySelector('.idioms-tab-active')!.textContent).toContain('Іспанські');
    expect(container.querySelectorAll('.idiom-card').length).toBe(SPANISH_IDIOMS.length);
    expect(container.querySelector('.idiom-meaning-en')).not.toBeNull();
  });

  it('only shows tabs relevant to the current know/learn language pair', () => {
    localStorage.setItem('ew_learn_lang', 'en');
    localStorage.setItem('ew_know_lang', 'ua');
    const { container } = mount();
    expect(container.querySelectorAll('.idioms-tab').length).toBe(2);
  });

  it('shows idiom tabs for a language pair outside en/ua/es', () => {
    localStorage.setItem('ew_learn_lang', 'fr');
    localStorage.setItem('ew_know_lang', 'it');
    const { container } = mount();
    const tabs = container.querySelectorAll('.idioms-tab');
    expect(tabs.length).toBe(2);
    expect(container.querySelector('.idioms-tab-active')!.textContent).toContain('Французькі');
  });

  it('filters idioms by search query', () => {
    const { container } = mount();
    const input = container.querySelector('.idioms-search') as HTMLInputElement;
    const nativeValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!;
    act(() => {
      nativeValueSetter.call(input, 'break the ice');
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    const cards = container.querySelectorAll('.idiom-card');
    expect(cards.length).toBe(1);
    expect(cards[0].textContent).toContain('Break the ice');
  });

  it('shows an empty message when no idioms match the query', () => {
    const { container } = mount();
    const input = container.querySelector('.idioms-search') as HTMLInputElement;
    const nativeValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!;
    act(() => {
      nativeValueSetter.call(input, 'zzzzzzzzznotfound');
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    expect(container.querySelector('.idioms-empty')!.textContent).toBe('Нічого не знайдено 🤷');
  });

  it('calls _speakWithLang when a speak button is clicked', () => {
    const { container } = mount();
    const btn = container.querySelector('.idiom-speak') as HTMLButtonElement;
    act(() => { btn.click(); });
    expect(speakWithLang).toHaveBeenCalledWith(ENGLISH_IDIOMS[0].phrase, 'en-US', btn);
  });

  it('does not throw when openIdiomsContent is called', () => {
    mount();
    expect(() => openIdiomsContent()).not.toThrow();
  });
});

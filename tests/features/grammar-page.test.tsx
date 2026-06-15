import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { GRAMMAR } from '../../data/grammar.ts';
import { GrammarPage, jumpToGrammarRule, openGrammarContent } from '../../js/features/grammar-page.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { openPage } = vi.hoisted(() => ({ openPage: vi.fn() }));
vi.mock('../../js/features/sidebar.tsx', () => ({ openPage }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<GrammarPage />); });
  return { container, root };
}

describe('grammar-page.tsx GrammarPage', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    openPage.mockClear();
    localStorage.removeItem('ew_learn_lang');
  });

  it('renders a navigation button for every grammar rule', () => {
    const { container } = mount();
    const totalRules = GRAMMAR.reduce((n, cat) => n + cat.rules.length, 0);
    expect(container.querySelectorAll('.gr-nav-btn').length).toBe(totalRules);
    expect(container.querySelectorAll('.gr-cat').length).toBe(GRAMMAR.length);
  });

  it('shows the first rule active and rendered by default', () => {
    const { container } = mount();
    const firstRule = GRAMMAR[0].rules[0];
    const activeBtn = container.querySelector('.gr-nav-active') as HTMLElement;
    expect(activeBtn.dataset.id).toBe(firstRule.id);
    expect(container.querySelector('.grammar-content')!.innerHTML).toContain(firstRule.title);
  });

  it('switches the displayed rule when a nav button is clicked', () => {
    const { container } = mount();
    const secondRule = GRAMMAR[0].rules[1] ?? GRAMMAR[1].rules[0];
    const btn = Array.from(container.querySelectorAll('.gr-nav-btn')).find(b => (b as HTMLElement).dataset.id === secondRule.id) as HTMLButtonElement;
    act(() => { btn.click(); });

    expect(btn.className).toContain('gr-nav-active');
    expect(container.querySelector('.grammar-content')!.innerHTML).toContain(secondRule.title);
  });

  it('jumpToGrammarRule sets the active rule and opens the grammar page', async () => {
    const { container } = mount();
    const targetRule = GRAMMAR[GRAMMAR.length - 1].rules[0];
    act(() => { jumpToGrammarRule(targetRule.id); });
    await vi.dynamicImportSettled();

    expect(openPage).toHaveBeenCalledWith('grammar');
    const activeBtn = container.querySelector('.gr-nav-active') as HTMLElement;
    expect(activeBtn.dataset.id).toBe(targetRule.id);
  });

  it('does not throw when openGrammarContent is called', () => {
    mount();
    expect(() => openGrammarContent()).not.toThrow();
  });

  it('shows English grammar by default (learn language = en)', () => {
    const { container } = mount();
    expect(container.querySelectorAll('.gr-nav-btn').length).toBeGreaterThan(0);
    expect(container.querySelector('.gr-empty')).toBeNull();
  });

  it('shows a "not available" placeholder when learning a language without grammar data', () => {
    localStorage.setItem('ew_learn_lang', 'ua');
    const { container } = mount();
    expect(container.querySelectorAll('.gr-nav-btn').length).toBe(0);
    expect(container.querySelector('.gr-empty')).not.toBeNull();
  });

  it('shows French grammar when learning French', () => {
    localStorage.setItem('ew_learn_lang', 'fr');
    const { container } = mount();
    expect(container.querySelectorAll('.gr-nav-btn').length).toBeGreaterThan(0);
    expect(container.querySelector('.gr-empty')).toBeNull();
  });
});

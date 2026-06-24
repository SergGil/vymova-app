import { describe, it, expect, vi, beforeEach } from 'vitest';
import { state } from '../../src/state.ts';
import { setKnownWords, getKnownSnapshot } from '../../src/known-words-store.ts';
import { W } from '../../data/words.js';

vi.mock('../../js/core/card-engine.ts', () => ({ render: vi.fn() }));

const { openPage, closePage, jumpToGrammarRule } = vi.hoisted(() => ({
  openPage: vi.fn(),
  closePage: vi.fn(),
  jumpToGrammarRule: vi.fn(),
}));
vi.mock('../../js/features/sidebar.tsx', () => ({ openPage, closePage }));
vi.mock('../../js/features/grammar-page.tsx', () => ({ jumpToGrammarRule }));

import { renderLearningPath, openLearningPath } from '../../js/features/learning-path.ts';

describe('learning-path.ts renderLearningPath/openLearningPath', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    localStorage.clear();
    setKnownWords('en', new Set());
    openPage.mockClear();
    closePage.mockClear();
    jumpToGrammarRule.mockClear();
  });

  it('does nothing when #lp-content is absent', () => {
    expect(() => renderLearningPath()).not.toThrow();
    expect(document.getElementById('lp-content')).toBeNull();
  });

  it('renders the hero, daily challenge and CEFR progress rows', () => {
    document.body.innerHTML = '<div id="lp-content"></div>';
    renderLearningPath();
    const el = document.getElementById('lp-content')!;

    expect(el.innerHTML).toContain('lp-hero');
    expect(el.innerHTML).toContain('lp-levels-list');
    expect(el.querySelectorAll('.lp-level-row').length).toBe(6);
    expect(el.querySelector('.lp-current')).not.toBeNull();
    expect(el.innerHTML).toContain('lp-day-words');
  });

  it('shows the "level complete" message when a level is ~done', () => {
    document.body.innerHTML = '<div id="lp-content"></div>';
    setKnownWords('en', new Set((W as unknown as [string, ...unknown[]][]).map(w => w[0])));
    renderLearningPath();
    const el = document.getElementById('lp-content')!;
    expect(el.innerHTML).toContain('lp-complete');
  });

  it('saves a pace snapshot for today to localStorage', () => {
    document.body.innerHTML = '<div id="lp-content"></div>';
    setKnownWords('en', new Set(['abandon']));
    renderLearningPath();
    const snaps = JSON.parse(localStorage.getItem('lp_pace_snapshots')!);
    const today = new Date().toISOString().slice(0, 10);
    expect(snaps).toEqual([{ date: today, count: 1 }]);
  });

  it('clicking a [data-lp-level] button navigates to that CEFR level', () => {
    document.body.innerHTML = '<div id="lp-content"></div><select id="sel-range"><option value="all">all</option><option value="cefr-A1">A1</option><option value="cefr-A2">A2</option></select>';
    renderLearningPath();
    const el = document.getElementById('lp-content')!;
    const btn = el.querySelector('[data-lp-level]') as HTMLButtonElement;
    expect(btn).not.toBeNull();

    const sel = document.getElementById('sel-range') as HTMLSelectElement;
    let changeFired = false;
    sel.addEventListener('change', () => { changeFired = true; });

    btn.click();

    expect(sel.value).toBe(`cefr-${btn.dataset.lpLevel}`);
    expect(changeFired).toBe(true);
    expect(openPage).toHaveBeenCalledWith('cards');
    expect(closePage).toHaveBeenCalled();
  });

  it('clicking a grammar skill link jumps to the linked grammar rule', () => {
    document.body.innerHTML = '<div id="lp-content"></div>';
    renderLearningPath();
    const el = document.getElementById('lp-content')!;
    const link = el.querySelector('.lp-skill-link') as HTMLElement;
    expect(link).not.toBeNull();
    const gid = link.dataset.grammar!;

    link.click();

    expect(jumpToGrammarRule).toHaveBeenCalledWith(gid);
  });

  it('openLearningPath renders without throwing when #lp-content is present', () => {
    document.body.innerHTML = '<div id="lp-content"></div>';
    expect(() => openLearningPath()).not.toThrow();
    expect(document.getElementById('lp-content')!.innerHTML).toContain('lp-hero');
  });
});

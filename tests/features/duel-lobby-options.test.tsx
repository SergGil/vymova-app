import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { CATEGORY_LIST } from '../../data/categories.js';
import {
  DuelModePicker,
  DuelCategoryPicker,
  DuelOptionsRow,
} from '../../js/features/duel-lobby-options.tsx';
import type { Difficulty, BestOf, DuelMode } from '../../js/features/duel.ts';
import type { ReactElement } from 'react';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const {
  showInfoTooltip,
  getSelMode,
  setSelMode,
  getSelCategory,
  setSelCategory,
  getSelDifficulty,
  setSelDifficulty,
  getSelBestOf,
  setSelBestOf,
  getSelMaxHints,
  setSelMaxHints,
  getSelPowerups,
  setSelPowerups,
} = vi.hoisted(() => ({
  showInfoTooltip: vi.fn(),
  getSelMode: vi.fn((): DuelMode => 'quiz'),
  setSelMode: vi.fn(),
  getSelCategory: vi.fn(() => ''),
  setSelCategory: vi.fn(),
  getSelDifficulty: vi.fn((): Difficulty => 'mixed'),
  setSelDifficulty: vi.fn(),
  getSelBestOf: vi.fn((): BestOf => 1),
  setSelBestOf: vi.fn(),
  getSelMaxHints: vi.fn(() => 3),
  setSelMaxHints: vi.fn(),
  getSelPowerups: vi.fn(() => true),
  setSelPowerups: vi.fn(),
}));
vi.mock('../../js/features/duel.ts', async (importOriginal) => {
  const orig = await importOriginal<typeof import('../../js/features/duel.ts')>();
  return {
    ...orig,
    _showInfoTooltip: showInfoTooltip,
    _getSelMode: getSelMode,
    _setSelMode: setSelMode,
    _getSelCategory: getSelCategory,
    _setSelCategory: setSelCategory,
    _getSelDifficulty: getSelDifficulty,
    _setSelDifficulty: setSelDifficulty,
    _getSelBestOf: getSelBestOf,
    _setSelBestOf: setSelBestOf,
    _getSelMaxHints: getSelMaxHints,
    _setSelMaxHints: setSelMaxHints,
    _getSelPowerups: getSelPowerups,
    _setSelPowerups: setSelPowerups,
  };
});

function mount(el: ReactElement): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(el);
  });
  return { container, root };
}

describe('duel-lobby-options.tsx DuelModePicker', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    setSelMode.mockClear();
    getSelMode.mockClear().mockReturnValue('quiz');
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('renders all duel mode buttons with the active one marked', () => {
    const { container, root } = mount(<DuelModePicker />);
    roots.push(root);
    const buttons = container.querySelectorAll('.duel-mode-btn');
    expect(buttons.length).toBe(6);
    expect(buttons[0].className).toContain('duel-mode-sel');
    expect(buttons[0].textContent).toContain('🧠');
  });

  it('clicking a mode calls _setSelMode and updates the selection', () => {
    const { container, root } = mount(<DuelModePicker />);
    roots.push(root);
    const buttons = container.querySelectorAll('.duel-mode-btn');
    act(() => {
      (buttons[3] as HTMLButtonElement).click();
    });
    expect(setSelMode).toHaveBeenCalledWith('tempo');
    expect(buttons[3].className).toContain('duel-mode-sel');
    expect(buttons[0].className).not.toContain('duel-mode-sel');
  });
});

describe('duel-lobby-options.tsx DuelCategoryPicker', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    setSelCategory.mockClear();
    getSelCategory.mockClear().mockReturnValue('');
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('renders an "all words" option plus every category', () => {
    const { container, root } = mount(<DuelCategoryPicker />);
    roots.push(root);
    const select = container.querySelector('select') as HTMLSelectElement;
    expect(select.options.length).toBe(CATEGORY_LIST.length + 1);
    expect(select.options[0].textContent).toContain('Всі слова');
  });

  it('changing the category calls _setSelCategory', () => {
    const { container, root } = mount(<DuelCategoryPicker />);
    roots.push(root);
    const select = container.querySelector('select') as HTMLSelectElement;
    act(() => {
      select.value = CATEGORY_LIST[0];
      select.dispatchEvent(new Event('change', { bubbles: true }));
    });
    expect(setSelCategory).toHaveBeenCalledWith(CATEGORY_LIST[0]);
  });
});

describe('duel-lobby-options.tsx DuelOptionsRow', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    setSelDifficulty.mockClear();
    setSelBestOf.mockClear();
    setSelMaxHints.mockClear();
    setSelPowerups.mockClear();
    showInfoTooltip.mockClear();
    getSelDifficulty.mockClear().mockReturnValue('mixed');
    getSelBestOf.mockClear().mockReturnValue(1);
    getSelMaxHints.mockClear().mockReturnValue(3);
    getSelPowerups.mockClear().mockReturnValue(true);
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('renders the 7 difficulty buttons with "mixed" active', () => {
    const { container, root } = mount(<DuelOptionsRow />);
    roots.push(root);
    const buttons = container.querySelectorAll('.duel-cefr-btn');
    expect(buttons.length).toBe(7);
    expect(buttons[0].className).toContain('duel-cefr-active');
    expect(buttons[0].textContent).toContain('Мікс');
  });

  it('clicking a difficulty button calls _setSelDifficulty', () => {
    const { container, root } = mount(<DuelOptionsRow />);
    roots.push(root);
    const buttons = container.querySelectorAll('.duel-cefr-btn');
    act(() => {
      (buttons[1] as HTMLButtonElement).click();
    });
    expect(setSelDifficulty).toHaveBeenCalledWith('A1');
  });

  it('changing best-of and max-hints selects calls their setters', () => {
    const { container, root } = mount(<DuelOptionsRow />);
    roots.push(root);
    const selects = container.querySelectorAll('select');
    act(() => {
      selects[0].value = '3';
      selects[0].dispatchEvent(new Event('change', { bubbles: true }));
    });
    expect(setSelBestOf).toHaveBeenCalledWith(3);

    act(() => {
      selects[1].value = '1';
      selects[1].dispatchEvent(new Event('change', { bubbles: true }));
    });
    expect(setSelMaxHints).toHaveBeenCalledWith(1);
  });

  it('toggling the power-ups checkbox calls _setSelPowerups', () => {
    const { container, root } = mount(<DuelOptionsRow />);
    roots.push(root);
    const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
    act(() => {
      checkbox.click();
    });
    expect(setSelPowerups).toHaveBeenCalledWith(false);
  });

  it('clicking an info button calls _showInfoTooltip', () => {
    const { container, root } = mount(<DuelOptionsRow />);
    roots.push(root);
    const infoButtons = container.querySelectorAll('.duel-info-btn');
    act(() => {
      (infoButtons[0] as HTMLButtonElement).click();
    });
    expect(showInfoTooltip).toHaveBeenCalled();
  });
});

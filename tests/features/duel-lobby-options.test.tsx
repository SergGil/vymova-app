import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CATEGORY_LIST } from '../../data/categories.js';
import { categoryName, t } from '../../js/features/i18n.ts';
import {
  DuelModePicker,
  DuelCategoryPicker,
  DuelOptionsRow,
  DuelKnowLangPicker,
  DuelLangPicker,
} from '../../js/features/duel/duel-lobby-options.tsx';
import type { Difficulty, BestOf, DuelMode } from '../../js/features/duel/duel.ts';
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
  getSelLang,
  setSelLang,
  getSelKnowLang,
  setSelKnowLang,
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
  getSelLang: vi.fn(() => 'en'),
  setSelLang: vi.fn(),
  getSelKnowLang: vi.fn(() => 'ua'),
  setSelKnowLang: vi.fn(),
}));
vi.mock('../../js/features/duel/duel-lobby-logic.ts', async (importOriginal) => {
  const orig = await importOriginal<typeof import('../../js/features/duel/duel-lobby-logic.ts')>();
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
    _getSelLang: getSelLang,
    _setSelLang: setSelLang,
    _getSelKnowLang: getSelKnowLang,
    _setSelKnowLang: setSelKnowLang,
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

  it('renders an "all words" option plus every category', async () => {
    const { container, root } = mount(<DuelCategoryPicker />);
    roots.push(root);
    const trigger = container.querySelector('[role="combobox"]') as HTMLElement;
    await act(async () => {
      await userEvent.click(trigger);
    });
    const options = screen.getAllByRole('option');
    expect(options.length).toBe(CATEGORY_LIST.length + 1);
    expect(options[0].textContent).toContain('Всі слова');
  });

  it('changing the category calls _setSelCategory', async () => {
    const { container, root } = mount(<DuelCategoryPicker />);
    roots.push(root);
    const trigger = container.querySelector('[role="combobox"]') as HTMLElement;
    await act(async () => {
      await userEvent.click(trigger);
    });
    await act(async () => {
      await userEvent.click(screen.getByRole('option', { name: categoryName(CATEGORY_LIST[0]) }));
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

  it('changing best-of and max-hints selects calls their setters', async () => {
    const { container, root } = mount(<DuelOptionsRow />);
    roots.push(root);
    const [bestOfTrigger, maxHintsTrigger] = Array.from(
      container.querySelectorAll('[role="combobox"]'),
    ) as HTMLElement[];

    await act(async () => {
      await userEvent.click(bestOfTrigger);
    });
    await act(async () => {
      await userEvent.click(screen.getByRole('option', { name: t('duel.bestOf3') }));
    });
    expect(setSelBestOf).toHaveBeenCalledWith(3);

    await act(async () => {
      await userEvent.click(maxHintsTrigger);
    });
    await act(async () => {
      await userEvent.click(screen.getByRole('option', { name: t('duel.hints1') }));
    });
    expect(setSelMaxHints).toHaveBeenCalledWith(1);
  });

  it('toggling the power-ups switch calls _setSelPowerups', async () => {
    const { container, root } = mount(<DuelOptionsRow />);
    roots.push(root);
    const powerupsSwitch = container.querySelector('[role="switch"]') as HTMLElement;
    expect(powerupsSwitch.getAttribute('aria-checked')).toBe('true');
    await act(async () => {
      await userEvent.click(powerupsSwitch);
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

describe('duel-lobby-options.tsx DuelKnowLangPicker / DuelLangPicker', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    setSelLang.mockClear();
    setSelKnowLang.mockClear();
    getSelLang.mockClear().mockReturnValue('en');
    getSelKnowLang.mockClear().mockReturnValue('ua');
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('renders a closed dropdown button showing the current know-language', () => {
    const { container, root } = mount(<DuelKnowLangPicker />);
    roots.push(root);
    const btn = container.querySelector('.flagdd-btn') as HTMLButtonElement;
    expect(btn).toBeTruthy();
    expect(btn.getAttribute('data-value')).toBe('ua');
    expect(container.querySelector('.flagdd-list')).toBeNull();
  });

  it('opens the list on click, excluding the currently-selected learn language', () => {
    const { container, root } = mount(<DuelKnowLangPicker />);
    roots.push(root);
    const btn = container.querySelector('.flagdd-btn') as HTMLButtonElement;
    act(() => {
      btn.click();
    });
    const list = container.querySelector('.flagdd-list');
    expect(list).toBeTruthy();
    const items = Array.from(container.querySelectorAll('.flagdd-item'));
    expect(items.some((el) => el.getAttribute('data-value') === 'en')).toBe(false);
    expect(items.some((el) => el.getAttribute('data-value') === 'es')).toBe(true);
  });

  it('picking an option calls _setSelKnowLang and closes the list', () => {
    const { container, root } = mount(<DuelKnowLangPicker />);
    roots.push(root);
    const btn = container.querySelector('.flagdd-btn') as HTMLButtonElement;
    act(() => {
      btn.click();
    });
    const item = container.querySelector('.flagdd-item[data-value="es"]') as HTMLButtonElement;
    act(() => {
      item.click();
    });
    expect(setSelKnowLang).toHaveBeenCalledWith('es');
    expect(container.querySelector('.flagdd-list')).toBeNull();
  });

  it('DuelLangPicker excludes the currently-selected know language and calls _setSelLang', () => {
    const { container, root } = mount(<DuelLangPicker />);
    roots.push(root);
    const btn = container.querySelector('.flagdd-btn') as HTMLButtonElement;
    expect(btn.getAttribute('data-value')).toBe('en');
    act(() => {
      btn.click();
    });
    const items = Array.from(container.querySelectorAll('.flagdd-item'));
    expect(items.some((el) => el.getAttribute('data-value') === 'ua')).toBe(false);
    const item = container.querySelector('.flagdd-item[data-value="es"]') as HTMLButtonElement;
    act(() => {
      item.click();
    });
    expect(setSelLang).toHaveBeenCalledWith('es');
  });
});

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  setActiveTagSet,
  setActiveTagValue,
  getActiveTagSetSnapshot,
} from '../../src/deck-filter-store.ts';
import { CATEGORY_LIST, WORD_CATEGORIES } from '../../data/categories.js';
import { categoryName, t } from '../../js/features/i18n.ts';
import { TagFilterSelect } from '../../js/features/tag-filter-select.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

vi.mock('../../js/core/card-engine.ts', () => ({ render: vi.fn() }));

let _mockWordIdx = new Map<string, number>();
vi.mock('../../js/core/word-index.ts', () => ({
  getWordIndex: () => _mockWordIdx,
}));

const { _rebuildEsDeck, _isSpecialMode } = vi.hoisted(() => ({
  _rebuildEsDeck: vi.fn(),
  _isSpecialMode: vi.fn(() => false),
}));
vi.mock('../../js/features/deck/deck-mode.tsx', () => ({ _rebuildEsDeck, _isSpecialMode }));

const { rebuildDeckForCurrentRange } = vi.hoisted(() => ({
  rebuildDeckForCurrentRange: vi.fn(),
}));
vi.mock('../../js/features/deck/deck-filter.tsx', () => ({ rebuildDeckForCurrentRange }));

let roots: Root[] = [];

function mount(): { trigger: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<TagFilterSelect />);
  });
  roots.push(root);
  return { trigger: document.getElementById('sel-tag')!, root };
}

async function openTrigger(trigger: HTMLElement): Promise<void> {
  await act(async () => {
    await userEvent.click(trigger);
  });
}

describe('tag-filter-select.tsx TagFilterSelect', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    setActiveTagSet(null);
    setActiveTagValue('');
    _mockWordIdx = new Map();
    _rebuildEsDeck.mockClear();
    _isSpecialMode.mockClear();
    _isSpecialMode.mockReturnValue(false);
    rebuildDeckForCurrentRange.mockClear();
    roots = [];
  });

  afterEach(() => {
    roots.forEach((r) => act(() => r.unmount()));
  });

  it('renders the "all topics" option plus one option per category', async () => {
    const { trigger } = mount();
    await openTrigger(trigger);
    const options = screen.getAllByRole('option').map((o) => o.textContent);
    expect(options).toEqual([t('cards.allTopics'), ...CATEGORY_LIST.map((c) => categoryName(c))]);
  });

  it('selecting a category sets activeTagSet and rebuilds the deck', async () => {
    const { trigger } = mount();
    const cat = CATEGORY_LIST[0];
    const word = (WORD_CATEGORIES[cat] ?? [])[0];
    _mockWordIdx = new Map([[word.toLowerCase(), 0]]);

    await openTrigger(trigger);
    await act(async () => {
      await userEvent.click(screen.getByRole('option', { name: categoryName(cat) }));
    });

    expect(getActiveTagSetSnapshot()).toEqual(new Set([word.toLowerCase()]));
    expect(rebuildDeckForCurrentRange).toHaveBeenCalled();
    expect(_rebuildEsDeck).not.toHaveBeenCalled();
  });

  it('selecting the "all topics" option clears activeTagSet', async () => {
    setActiveTagSet(new Set(['abandon']));
    setActiveTagValue(CATEGORY_LIST[0]);
    const { trigger } = mount();

    await openTrigger(trigger);
    await act(async () => {
      await userEvent.click(screen.getByRole('option', { name: t('cards.allTopics') }));
    });

    expect(getActiveTagSetSnapshot()).toBeNull();
  });

  it('calls _rebuildEsDeck instead of rebuilding via range-store when in a special mode', async () => {
    _isSpecialMode.mockReturnValue(true);
    const { trigger } = mount();
    const cat = CATEGORY_LIST[0];

    await openTrigger(trigger);
    await act(async () => {
      await userEvent.click(screen.getByRole('option', { name: categoryName(cat) }));
    });

    expect(_rebuildEsDeck).toHaveBeenCalled();
    expect(rebuildDeckForCurrentRange).not.toHaveBeenCalled();
  });
});

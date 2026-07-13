import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
// lesson.tsx reaches core/srs.ts by two different routes in this file's
// module graph (once directly, once via combo.ts -> game-bar-level.tsx ->
// sidebar.tsx -> voice/voice.tsx) — not a true cycle (verified: no static
// import path loops back), but that diamond shape leaves combo.ts's
// `sessionCombo` binding stuck in the TDZ the first time lesson.tsx calls
// getComboMult(), under this specific test-runner's module transform.
// Pre-loading game-bar-level.tsx settles the ordering up front. Doesn't
// happen in the real app, where app-root.tsx's eager imports already settle
// this before any lazy-loaded mode runs.
import '../../js/features/game-bar-level.tsx';
import { LessonPage, openLesson } from '../../js/modes/lesson.tsx';
import { setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

// Synthetic, dictionary-unique EN/UA strings — buildQuizOptions() draws wrong
// answers from the real full W dictionary, so these must never collide.
const FIVE_WORDS: WordEntry[] = [
  ['zqcloud', 'зхмара', '', ''],
  ['zqnight', 'зніч', '', ''],
  ['zqplant', 'зрослина', '', ''],
  ['zqcover', 'зобкладинка', '', ''],
  ['zqstone', 'закамінь', '', ''],
];

const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  'value',
)!.set!;
function typeInto(input: HTMLInputElement, value: string): void {
  nativeInputValueSetter.call(input, value);
  input.dispatchEvent(new Event('input', { bubbles: true }));
}
function pressEnter(input: HTMLInputElement): void {
  input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
}

function findButton(container: HTMLElement, re: RegExp): HTMLButtonElement {
  return Array.from(container.querySelectorAll('button')).find((b) => b.textContent?.match(re))!;
}

/** Drives one flashcard-phase step: reveal, then "know". */
function driveFlashStep(container: HTMLElement): void {
  act(() => {
    findButton(container, /показати/i).click();
  });
  act(() => {
    findButton(container, /^✓/).click();
  });
}

/** Drives one quiz-phase step: pick the correct option, then advance. */
function driveQuizStep(container: HTMLElement): void {
  const w = FIVE_WORDS.find((w) => container.textContent?.includes(w[1]))!;
  const correctBtn = Array.from(container.querySelectorAll<HTMLButtonElement>('.quiz-option')).find(
    (b) => b.textContent?.includes(w[0]),
  )!;
  act(() => {
    correctBtn.click();
  });
  act(() => {
    findButton(container, /далі|фініш/i).click();
  });
}

/** Drives one write-phase step: type the correct answer, submit, advance. */
function driveWriteStep(container: HTMLElement): void {
  const w = FIVE_WORDS.find((w) => container.textContent?.includes(w[1]))!;
  const input = container.querySelector<HTMLInputElement>('input')!;
  act(() => {
    typeInto(input, w[0]);
  });
  act(() => {
    pressEnter(input);
  });
  act(() => {
    pressEnter(input);
  });
}

describe('lesson.tsx (LessonPage)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'lesson-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    setDeckState(FIVE_WORDS);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<LessonPage />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
  });

  it('renders nothing until opened', () => {
    expect(container.innerHTML).toBe('');
  });

  it('opening starts the flashcard phase showing the front word and a reveal button', () => {
    act(() => {
      openLesson();
    });
    expect(overlay.style.display).toBe('flex');
    expect(container.textContent).toMatch(/показати/i);
    expect(container.textContent).toContain('1');
  });

  it('revealing the flashcard shows the translation and know/skip buttons', () => {
    act(() => {
      openLesson();
    });
    act(() => {
      findButton(container, /показати/i).click();
    });
    expect(findButton(container, /^✓/)).toBeTruthy();
    expect(findButton(container, /^→/)).toBeTruthy();
  });

  it('finishing all 5 flashcards moves into the quiz phase', () => {
    act(() => {
      openLesson();
    });
    for (let i = 0; i < 5; i++) driveFlashStep(container);
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(4);
  });

  it('answering all 5 quiz questions moves into the write phase', () => {
    act(() => {
      openLesson();
    });
    for (let i = 0; i < 5; i++) driveFlashStep(container);
    for (let i = 0; i < 5; i++) driveQuizStep(container);
    expect(container.querySelector('input')).not.toBeNull();
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(0);
  });

  it('completing all 15 steps (5+5+5) shows the final score screen', () => {
    act(() => {
      openLesson();
    });
    for (let i = 0; i < 5; i++) driveFlashStep(container);
    for (let i = 0; i < 5; i++) driveQuizStep(container);
    for (let i = 0; i < 5; i++) driveWriteStep(container);
    expect(container.textContent).toMatch(/15/);
    expect(container.textContent).toMatch(/XP/);
    expect(findButton(container, /завершити/i)).toBeTruthy();
  });

  it('"done" on the final screen closes the lesson', () => {
    act(() => {
      openLesson();
    });
    for (let i = 0; i < 5; i++) driveFlashStep(container);
    for (let i = 0; i < 5; i++) driveQuizStep(container);
    for (let i = 0; i < 5; i++) driveWriteStep(container);
    act(() => {
      findButton(container, /завершити/i).click();
    });
    expect(overlay.style.display).toBe('none');
  });

  it('Escape closes the page', () => {
    act(() => {
      openLesson();
    });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });

  it('closing via the close button hides the overlay', () => {
    act(() => {
      openLesson();
    });
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.style.display).toBe('none');
  });
});

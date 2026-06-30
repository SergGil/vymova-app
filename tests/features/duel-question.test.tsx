import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { DuelQuestion } from '../../js/features/duel-question.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

interface QuestionOptionVM {
  text: string;
  num: number;
  cls: string;
}
interface QuestionData {
  mode: string;
  quizIdx: number;
  waiting: boolean;
  myCorrect: number;
  myWrong: number;
  qPrimary: string;
  qSecondary: string;
  qTertiary: string;
  hintNote: string | null;
  options: QuestionOptionVM[];
  answered: boolean;
  showOptions: boolean;
  showInputRow: boolean;
  inputBorderColor: string;
  showHintBtn: boolean;
  hintBtnText: string;
  hintBtnDisabled: boolean;
  showNextBtn: boolean;
}

const { getQuestionData, onOptionClick, onInputChange, submitWrite, useHint, onNextClick } =
  vi.hoisted(() => ({
    getQuestionData: vi.fn(() => ({}) as QuestionData),
    onOptionClick: vi.fn(),
    onInputChange: vi.fn(),
    submitWrite: vi.fn(),
    useHint: vi.fn(),
    onNextClick: vi.fn(),
  }));
vi.mock('../../js/features/duel.ts', () => ({
  _getQuestionData: getQuestionData,
  _onOptionClick: onOptionClick,
  _onInputChange: onInputChange,
  _submitWrite: submitWrite,
  _useHint: useHint,
  _onNextClick: onNextClick,
}));

function baseData(over: Partial<QuestionData> = {}): QuestionData {
  return {
    mode: 'quiz',
    quizIdx: 0,
    waiting: false,
    myCorrect: 0,
    myWrong: 0,
    qPrimary: 'Hello',
    qSecondary: '',
    qTertiary: '',
    hintNote: null,
    options: [
      { text: 'Привіт', num: 1, cls: 'quiz-option' },
      { text: 'Бувай', num: 2, cls: 'quiz-option' },
    ],
    answered: false,
    showOptions: true,
    showInputRow: false,
    inputBorderColor: '',
    showHintBtn: false,
    hintBtnText: '💡 Підказка',
    hintBtnDisabled: false,
    showNextBtn: false,
    ...over,
  };
}

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<DuelQuestion />);
  });
  return { container, root };
}

describe('duel-question.tsx DuelQuestion', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    onOptionClick.mockClear();
    onInputChange.mockClear();
    submitWrite.mockClear();
    useHint.mockClear();
    onNextClick.mockClear();
    getQuestionData.mockClear().mockReturnValue(baseData());
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('shows the waiting summary when waiting for the opponent', () => {
    getQuestionData.mockReturnValue(baseData({ waiting: true, myCorrect: 3, myWrong: 1 }));
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('Правильно');
    expect(container.textContent).toContain('Неправильно');
    expect(container.textContent).toContain('3');
    expect(container.textContent).toContain('1');
  });

  it('renders the question text and quiz options', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('Hello');
    const opts = container.querySelectorAll('.quiz-option');
    expect(opts.length).toBe(2);
    expect(opts[0].textContent).toContain('Привіт');
  });

  it('clicking an option calls _onOptionClick with its text', () => {
    const { container, root } = mount();
    roots.push(root);
    const opts = container.querySelectorAll('.quiz-option');
    act(() => {
      (opts[1] as HTMLButtonElement).click();
    });
    expect(onOptionClick).toHaveBeenCalledWith('Бувай');
  });

  it('disables options once answered', () => {
    getQuestionData.mockReturnValue(
      baseData({
        answered: true,
        options: [
          { text: 'Привіт', num: 1, cls: 'quiz-option correct' },
          { text: 'Бувай', num: 2, cls: 'quiz-option wrong' },
        ],
      }),
    );
    const { container, root } = mount();
    roots.push(root);
    const opts = container.querySelectorAll('.quiz-option') as NodeListOf<HTMLButtonElement>;
    expect(opts[0].disabled).toBe(true);
    expect(opts[0].className).toContain('correct');
    expect(opts[1].className).toContain('wrong');
  });

  it('renders an input row for write mode and submits on Enter', () => {
    getQuestionData.mockReturnValue(
      baseData({ mode: 'write', showOptions: false, showInputRow: true, showHintBtn: true }),
    );
    const { container, root } = mount();
    roots.push(root);

    const input = container.querySelector('input') as HTMLInputElement;
    expect(input).not.toBeNull();

    const nativeValueSetter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    )!.set!;
    act(() => {
      nativeValueSetter.call(input, 'hello');
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    expect(onInputChange).toHaveBeenCalledWith('hello');

    act(() => {
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    });
    expect(submitWrite).toHaveBeenCalled();
  });

  it('the check button calls _submitWrite and the hint button calls _useHint', () => {
    getQuestionData.mockReturnValue(
      baseData({ mode: 'write', showOptions: false, showInputRow: true, showHintBtn: true }),
    );
    const { container, root } = mount();
    roots.push(root);

    const checkBtn = Array.from(container.querySelectorAll('button')).find(
      (b) => b.textContent === 'Перевірити',
    ) as HTMLButtonElement;
    act(() => {
      checkBtn.click();
    });
    expect(submitWrite).toHaveBeenCalled();

    const hintBtn = Array.from(container.querySelectorAll('button')).find(
      (b) => b.textContent === '💡 Підказка',
    ) as HTMLButtonElement;
    act(() => {
      hintBtn.click();
    });
    expect(useHint).toHaveBeenCalled();
  });

  it('shows and clicks the next button when showNextBtn is true', () => {
    getQuestionData.mockReturnValue(
      baseData({ mode: 'write', showOptions: false, showInputRow: true, showNextBtn: true }),
    );
    const { container, root } = mount();
    roots.push(root);

    const nextBtn = Array.from(container.querySelectorAll('button')).find(
      (b) => b.textContent === 'Далі →',
    ) as HTMLButtonElement;
    expect(nextBtn.style.display).toBe('inline-block');
    act(() => {
      nextBtn.click();
    });
    expect(onNextClick).toHaveBeenCalled();
  });

  it('shows a hint note when present', () => {
    getQuestionData.mockReturnValue(baseData({ hintNote: 'Підказка: h___o' }));
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('Підказка: h___o');
  });
});

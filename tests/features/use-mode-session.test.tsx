import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { useState, type ReactElement } from 'react';
import { useModeSession } from '../../js/features/use-mode-session.ts';

const { recordModeComplete } = vi.hoisted(() => ({ recordModeComplete: vi.fn() }));
vi.mock('../../js/features/game.ts', () => ({ recordModeComplete }));

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

// Minimal stand-in for a js/modes/*.tsx page: local idx state advances
// toward `final`, wired through useModeSession exactly like a real mode
// would wire deck/idx into `isFinal`. While closed it renders only an
// "open" button (mirroring how a real mode returns `<></>` until isOpen,
// with the actual open() call coming from an external openXxx() instead).
function TestMode({
  final = 2,
  onOpen,
  onClose,
  closeOnEscape,
}: {
  final?: number;
  onOpen?: () => void;
  onClose?: () => void;
  closeOnEscape?: boolean;
}): ReactElement {
  const [idx, setIdx] = useState(0);
  const session = useModeSession({
    overlayId: 'tm-overlay',
    modeId: 'testmode',
    isFinal: idx >= final,
    onOpen,
    onClose,
    closeOnEscape,
  });
  if (!session.isOpen) {
    return (
      <button data-testid="open" onClick={session.open}>
        open
      </button>
    );
  }
  return (
    <div data-testid="open-marker">
      <button data-testid="advance" onClick={() => setIdx((i) => i + 1)}>
        {idx}
      </button>
      <button data-testid="close" onClick={session.close}>
        close
      </button>
    </div>
  );
}

function mount(el: ReactElement): { container: HTMLElement; root: Root } {
  document.body.innerHTML = '<div id="tm-overlay" style="display:none;"></div>';
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(el);
  });
  return { container, root };
}

function click(container: HTMLElement, testId: string): void {
  act(() => {
    (container.querySelector(`[data-testid="${testId}"]`) as HTMLButtonElement).click();
  });
}

describe('useModeSession', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    roots = [];
    recordModeComplete.mockClear();
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('starts closed with the overlay hidden', () => {
    const { container, root } = mount(<TestMode />);
    roots.push(root);
    expect(container.querySelector('[data-testid="open-marker"]')).toBeNull();
    expect(document.getElementById('tm-overlay')!.style.display).toBe('none');
  });

  it('open() shows the overlay and runs onOpen', () => {
    const onOpen = vi.fn();
    const { container, root } = mount(<TestMode onOpen={onOpen} />);
    roots.push(root);
    click(container, 'open');
    expect(container.querySelector('[data-testid="open-marker"]')).toBeTruthy();
    expect(document.getElementById('tm-overlay')!.style.display).toBe('flex');
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it('close() hides the overlay and runs onClose', () => {
    const onClose = vi.fn();
    const { container, root } = mount(<TestMode onClose={onClose} />);
    roots.push(root);
    click(container, 'open');
    click(container, 'close');
    expect(container.querySelector('[data-testid="open-marker"]')).toBeNull();
    expect(document.getElementById('tm-overlay')!.style.display).toBe('none');
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('Escape closes the session when closeOnEscape is true (default)', () => {
    const { container, root } = mount(<TestMode />);
    roots.push(root);
    click(container, 'open');
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(container.querySelector('[data-testid="open-marker"]')).toBeNull();
    expect(document.getElementById('tm-overlay')!.style.display).toBe('none');
  });

  it('does not close on Escape when closeOnEscape is false', () => {
    const { container, root } = mount(<TestMode closeOnEscape={false} />);
    roots.push(root);
    click(container, 'open');
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(container.querySelector('[data-testid="open-marker"]')).toBeTruthy();
  });

  it('does not react to Escape while closed', () => {
    const { container, root } = mount(<TestMode />);
    roots.push(root);
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(container.querySelector('[data-testid="open-marker"]')).toBeNull();
  });

  it('calls recordModeComplete exactly once when isFinal flips true, not again on further re-renders', () => {
    const { container, root } = mount(<TestMode final={2} />);
    roots.push(root);
    click(container, 'open');
    click(container, 'advance'); // idx 1, not final
    expect(recordModeComplete).not.toHaveBeenCalled();
    click(container, 'advance'); // idx 2, final
    expect(recordModeComplete).toHaveBeenCalledTimes(1);
    expect(recordModeComplete).toHaveBeenCalledWith('testmode');
    click(container, 'advance'); // idx 3, still final — must not re-fire
    expect(recordModeComplete).toHaveBeenCalledTimes(1);
  });

  it('does not fire recordModeComplete while closed even if isFinal is already true', () => {
    const { container, root } = mount(<TestMode final={0} />);
    roots.push(root);
    // idx (0) >= final (0) is true before ever opening.
    expect(recordModeComplete).not.toHaveBeenCalled();
    click(container, 'open');
    expect(recordModeComplete).toHaveBeenCalledTimes(1);
  });

  it('resets completed on the next open(), so a second session can re-fire recordModeComplete', () => {
    const onOpen = vi.fn();
    const { container, root } = mount(<TestMode final={1} onOpen={onOpen} />);
    roots.push(root);

    click(container, 'open');
    click(container, 'advance'); // idx 1, final
    expect(recordModeComplete).toHaveBeenCalledTimes(1);
    click(container, 'close');
    // TestMode doesn't reset idx on open the way a real mode's startGame()
    // would — idx is still 1, so isFinal is already true the instant the
    // session reopens. completed must still reset to false in open(), or
    // this second completion would never fire.
    click(container, 'open');
    expect(recordModeComplete).toHaveBeenCalledTimes(2);
  });
});

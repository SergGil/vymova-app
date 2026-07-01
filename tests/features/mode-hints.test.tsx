import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ModeHints } from '../../js/features/mode-hints.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<ModeHints />);
  });
  return { container, root };
}

describe('mode-hints.tsx ModeHints', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="quiz-overlay">
        <div class="quiz-panel"></div>
      </div>
    `;
    localStorage.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('shows a hint banner once a watched overlay becomes visible', async () => {
    mount();
    const overlay = document.getElementById('quiz-overlay')!;
    act(() => {
      overlay.classList.add('open');
    });

    await vi.advanceTimersByTimeAsync(0);
    await vi.advanceTimersByTimeAsync(250);

    const banner = overlay.querySelector('.mode-hint-banner');
    expect(banner).not.toBeNull();
    expect(banner!.textContent).toContain('Тест');
  });

  it('marks the overlay as seen and does not show the hint again', async () => {
    mount();
    const overlay = document.getElementById('quiz-overlay')!;
    act(() => {
      overlay.classList.add('open');
    });
    await vi.advanceTimersByTimeAsync(250);
    expect(overlay.querySelector('.mode-hint-banner')).not.toBeNull();

    const seen = JSON.parse(localStorage.getItem('ew_mode_hints_seen')!);
    expect(seen).toContain('quiz-overlay');

    overlay.querySelector('.mode-hint-banner')!.remove();
    act(() => {
      overlay.classList.remove('open');
    });
    act(() => {
      overlay.classList.add('open');
    });
    await vi.advanceTimersByTimeAsync(250);
    expect(overlay.querySelector('.mode-hint-banner')).toBeNull();
  });

  it('fades out and removes the banner after 4500ms + 450ms', async () => {
    mount();
    const overlay = document.getElementById('quiz-overlay')!;
    act(() => {
      overlay.classList.add('open');
    });
    await vi.advanceTimersByTimeAsync(250);
    const banner = overlay.querySelector('.mode-hint-banner') as HTMLElement;
    expect(banner).not.toBeNull();

    await vi.advanceTimersByTimeAsync(4500);
    expect(banner.style.opacity).toBe('0');

    await vi.advanceTimersByTimeAsync(450);
    expect(overlay.querySelector('.mode-hint-banner')).toBeNull();
  });

  it('does nothing for an overlay that is not visible', async () => {
    mount();
    const overlay = document.getElementById('quiz-overlay')!;
    act(() => {
      overlay.setAttribute('style', 'display:none');
    });
    await vi.advanceTimersByTimeAsync(250);
    expect(overlay.querySelector('.mode-hint-banner')).toBeNull();
  });

  it('disconnects observers on unmount', async () => {
    const { root } = mount();
    act(() => {
      root.unmount();
    });
    const overlay = document.getElementById('quiz-overlay')!;
    overlay.classList.add('open');
    await vi.advanceTimersByTimeAsync(250);
    expect(overlay.querySelector('.mode-hint-banner')).toBeNull();
  });

  it('shows a hint for youtube-player-overlay when it becomes visible', async () => {
    document.body.innerHTML = `
      <div id="youtube-player-overlay" style="display:none">
        <div class="yt-player-panel"></div>
      </div>
    `;
    mount();
    const overlay = document.getElementById('youtube-player-overlay')!;
    act(() => {
      overlay.style.display = 'flex';
    });
    await vi.advanceTimersByTimeAsync(250);
    const banner = overlay.querySelector('.mode-hint-banner');
    expect(banner).not.toBeNull();
    expect(banner!.textContent).toContain('YouTube');
  });

  it('shows a hint for scramble-overlay when it becomes visible', async () => {
    document.body.innerHTML = `
      <div id="scramble-overlay">
        <div class="quiz-panel"></div>
      </div>
    `;
    mount();
    const overlay = document.getElementById('scramble-overlay')!;
    act(() => {
      overlay.classList.add('open');
    });
    await vi.advanceTimersByTimeAsync(250);
    const banner = overlay.querySelector('.mode-hint-banner');
    expect(banner).not.toBeNull();
    expect(banner!.textContent).toContain('Скремблер');
  });

  it('shows a hint for letters-overlay when it becomes visible', async () => {
    document.body.innerHTML = `
      <div id="letters-overlay">
        <div class="quiz-panel"></div>
      </div>
    `;
    mount();
    const overlay = document.getElementById('letters-overlay')!;
    act(() => {
      overlay.classList.add('open');
    });
    await vi.advanceTimersByTimeAsync(250);
    const banner = overlay.querySelector('.mode-hint-banner');
    expect(banner).not.toBeNull();
    expect(banner!.textContent).toContain('Букви');
  });
});

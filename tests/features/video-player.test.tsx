import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';
import { VideoPlayerPage } from '../../js/features/video-player.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const dictWord = (W as unknown as WordEntry[]).find(w => /^[a-z]+$/i.test(w[0]) && w[0].length >= 4)!;

async function flush(): Promise<void> {
  await act(async () => { await Promise.resolve(); await Promise.resolve(); });
}

describe('video-player.tsx VideoPlayerPage', () => {
  let root: Root;

  beforeEach(() => {
    document.body.innerHTML = '<div id="video-player-content"></div>';
    state.known = new Set();
    vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:mock-url');
    vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});
  });

  afterEach(() => {
    act(() => { root?.unmount(); });
    vi.restoreAllMocks();
  });

  function mount(): HTMLElement {
    const container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => { root.render(<VideoPlayerPage />); });
    return document.getElementById('video-player-content')!;
  }

  it('shows the no-subtitles hint before any file is loaded', () => {
    const target = mount();
    expect(target.textContent).toContain('Завантаж файл субтитрів');
  });

  async function loadSubtitles(target: HTMLElement, text: string): Promise<void> {
    const file = new File([text], 'subs.srt', { type: 'text/plain' });
    const input = target.querySelector('#vp-sub-input') as HTMLInputElement;
    Object.defineProperty(input, 'files', { value: [file], configurable: true });
    await act(async () => { input.dispatchEvent(new Event('change', { bubbles: true })); });
    await flush();
  }

  async function loadVideoAndSeek(target: HTMLElement, seconds: number): Promise<void> {
    const file = new File(['fake'], 'movie.mp4', { type: 'video/mp4' });
    const input = target.querySelector('#vp-video-input') as HTMLInputElement;
    Object.defineProperty(input, 'files', { value: [file], configurable: true });
    await act(async () => { input.dispatchEvent(new Event('change', { bubbles: true })); });
    await flush();
    const video = target.querySelector('.video-player-el') as HTMLVideoElement;
    Object.defineProperty(video, 'currentTime', { value: seconds, configurable: true });
    act(() => { video.dispatchEvent(new Event('timeupdate', { bubbles: true })); });
  }

  it('parses an uploaded .srt file and shows a count once cues are loaded', async () => {
    const target = mount();
    await loadSubtitles(target, `1\n00:00:00,000 --> 00:00:10,000\nThe word ${dictWord[0]} appears here.\n`);
    expect(target.querySelector('.video-player-cue-count')).not.toBeNull();
    expect(target.textContent).not.toContain('Завантаж файл субтитрів');
  });

  it('renders the active cue as clickable words once the video reaches that timestamp', async () => {
    const target = mount();
    await loadSubtitles(target, `1\n00:00:00,000 --> 00:00:10,000\n${dictWord[0]}\n`);
    await loadVideoAndSeek(target, 1);
    expect(target.querySelector('.video-player-cue')).not.toBeNull();
    expect(target.querySelector('.rd-word')).not.toBeNull();
  });

  it('shows the translation popup when a recognized word is clicked', async () => {
    const target = mount();
    state.known.add(dictWord[0]);
    await loadSubtitles(target, `1\n00:00:00,000 --> 00:00:10,000\n${dictWord[0]}\n`);
    await loadVideoAndSeek(target, 1);

    const wordSpan = target.querySelector('.rd-word') as HTMLElement;
    expect(wordSpan).not.toBeNull();
    act(() => { wordSpan.click(); });

    expect(target.querySelector('.rd-word-popup')).not.toBeNull();
    expect(target.textContent).toContain(dictWord[0]);
  });
});

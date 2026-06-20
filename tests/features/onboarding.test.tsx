import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { W } from '../../data/words.js';
import { OnboardingPage } from '../../js/features/onboarding.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const FLAG_KEY = 'ew_onboarding_needed';

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<OnboardingPage />); });
  return { container, root };
}

async function wait(ms: number): Promise<void> {
  await act(async () => { await new Promise(r => setTimeout(r, ms)); });
}

describe('onboarding.tsx OnboardingPage', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '<select id="sel-range"><option value="0">All</option><option value="srs">SRS</option><option value="unlearned">Unlearned</option></select><button id="btn-daily-challenge"></button>';
    localStorage.clear();
    roots = [];
  });

  afterEach(() => {
    roots.forEach(r => { act(() => { r.unmount(); }); });
  });

  it('renders nothing when the onboarding flag is not set', async () => {
    const { container, root } = mount();
    roots.push(root);
    await wait(350);
    expect(container.innerHTML).toBe('');
  });

  it('shows the onboarding overlay and clears the flag when needed', async () => {
    localStorage.setItem(FLAG_KEY, '1');
    const { container, root } = mount();
    roots.push(root);
    await wait(350);

    expect(container.querySelector('#ob-overlay')).not.toBeNull();
    expect(localStorage.getItem(FLAG_KEY)).toBeNull();
  });

  it('interpolates the word count into slide 1 instead of leaving a literal placeholder', async () => {
    localStorage.setItem(FLAG_KEY, '1');
    const { container, root } = mount();
    roots.push(root);
    await wait(350);

    const slide1 = container.querySelectorAll('.ob-slide')[0];
    expect(slide1.innerHTML).toContain(String(W.length));
    expect(slide1.innerHTML).not.toContain('{n}');
    expect(slide1.innerHTML).not.toContain('{{n}}');
  });

  it('navigates through slides via the "next" button, updating dots', async () => {
    localStorage.setItem(FLAG_KEY, '1');
    const { container, root } = mount();
    roots.push(root);
    await wait(350);

    const slides = container.querySelectorAll('.ob-slide');
    expect(slides.length).toBe(4);
    expect(slides[0].className).toContain('ob-active');

    const nextBtn = container.querySelector('.ob-btn-next') as HTMLButtonElement;
    act(() => { nextBtn.click(); });

    expect(slides[0].className).not.toContain('ob-active');
    expect(slides[1].className).toContain('ob-active');
    expect(container.querySelectorAll('.ob-dot-active').length).toBe(1);
    expect(container.querySelector('.ob-dots')!.children[1].className).toContain('ob-dot-active');
  });

  it('shows the level picker with the SRS level pre-selected on the last slide', async () => {
    localStorage.setItem(FLAG_KEY, '1');
    const { container, root } = mount();
    roots.push(root);
    await wait(350);

    const nextBtn = container.querySelector('.ob-btn-next') as HTMLButtonElement;
    act(() => { nextBtn.click(); });
    act(() => { nextBtn.click(); });
    act(() => { nextBtn.click(); });

    const levelBtns = container.querySelectorAll('.ob-level-btn');
    expect(levelBtns.length).toBe(4);
    const srsBtn = container.querySelector('.ob-level-btn[data-range="srs"]') as HTMLElement;
    expect(srsBtn.className).toContain('ob-sel');

    const allBtn = container.querySelector('.ob-level-btn[data-range="0"]') as HTMLElement;
    expect(allBtn.textContent).toContain(String(W.length));

    act(() => { allBtn.click(); });
    expect(allBtn.className).toContain('ob-sel');
    expect(srsBtn.className).not.toContain('ob-sel');

    expect(nextBtn.textContent).toBe('🚀 Почати навчання!');
    expect(container.querySelector('.ob-btn-skip')).toBeNull();
  });

  it('finishes onto the selected range and closes when "start" is clicked on the last slide', async () => {
    localStorage.setItem(FLAG_KEY, '1');
    const { container, root } = mount();
    roots.push(root);
    await wait(350);

    const nextBtn = container.querySelector('.ob-btn-next') as HTMLButtonElement;
    act(() => { nextBtn.click(); });
    act(() => { nextBtn.click(); });
    act(() => { nextBtn.click(); });

    const unlearnedBtn = container.querySelector('.ob-level-btn[data-range="unlearned"]') as HTMLElement;
    act(() => { unlearnedBtn.click(); });

    const selRange = document.getElementById('sel-range') as HTMLSelectElement;
    let changeFired = false;
    selRange.addEventListener('change', () => { changeFired = true; });

    act(() => { nextBtn.click(); });

    expect(selRange.value).toBe('unlearned');
    expect(changeFired).toBe(true);

    await wait(250);
    expect(container.querySelector('#ob-overlay')).toBeNull();
  });

  it('triggers the daily challenge button when "daily" is selected and finished', async () => {
    localStorage.setItem(FLAG_KEY, '1');
    const { container, root } = mount();
    roots.push(root);
    await wait(350);

    const nextBtn = container.querySelector('.ob-btn-next') as HTMLButtonElement;
    act(() => { nextBtn.click(); });
    act(() => { nextBtn.click(); });
    act(() => { nextBtn.click(); });

    const dailyBtn = container.querySelector('.ob-level-btn[data-range="daily"]') as HTMLElement;
    act(() => { dailyBtn.click(); });

    const dailyChallengeBtn = document.getElementById('btn-daily-challenge') as HTMLButtonElement;
    let clicked = false;
    dailyChallengeBtn.addEventListener('click', () => { clicked = true; });

    act(() => { nextBtn.click(); });
    expect(clicked).toBe(true);
  });

  it('finishes via the "skip" button on a non-last slide', async () => {
    localStorage.setItem(FLAG_KEY, '1');
    const { container, root } = mount();
    roots.push(root);
    await wait(350);

    const skipBtn = container.querySelector('.ob-btn-skip') as HTMLButtonElement;
    expect(skipBtn).not.toBeNull();

    const selRange = document.getElementById('sel-range') as HTMLSelectElement;
    let changeFired = false;
    selRange.addEventListener('change', () => { changeFired = true; });

    act(() => { skipBtn.click(); });

    expect(selRange.value).toBe('srs');
    expect(changeFired).toBe(true);

    await wait(250);
    expect(container.querySelector('#ob-overlay')).toBeNull();
  });
});

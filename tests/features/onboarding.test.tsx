import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { W } from '../../data/words-data/words.js';
import { OnboardingPage } from '../../js/features/onboarding.tsx';

const FLAG_KEY = 'ew_onboarding_needed';

async function wait(ms: number): Promise<void> {
  await act(async () => {
    await new Promise((r) => setTimeout(r, ms));
  });
}

beforeEach(() => {
  document.body.innerHTML =
    '<select id="sel-range"><option value="0">All</option><option value="srs">SRS</option><option value="unlearned">Unlearned</option></select><button id="btn-daily-challenge"></button>';
  localStorage.clear();
});

describe('onboarding.tsx OnboardingPage', () => {
  it('renders nothing when the onboarding flag is not set', async () => {
    render(<OnboardingPage />);
    await wait(500);
    expect(screen.queryByText('Ласкаво просимо!')).toBeNull();
  });

  it('shows the onboarding overlay and clears the flag when needed', async () => {
    localStorage.setItem(FLAG_KEY, '1');
    render(<OnboardingPage />);
    await wait(500);

    expect(screen.getByText('Ласкаво просимо!')).toBeInTheDocument();
    expect(localStorage.getItem(FLAG_KEY)).toBeNull();
  });

  it('interpolates the word count into slide 1 instead of leaving a literal placeholder', async () => {
    localStorage.setItem(FLAG_KEY, '1');
    render(<OnboardingPage />);
    await wait(500);

    const slide1 = screen.getByText('Ласкаво просимо!').closest('.ob-slide')!;
    expect(within(slide1).getByText(new RegExp(String(W.length)))).toBeInTheDocument();
    expect(within(slide1).queryByText(/\{n\}/)).toBeNull();
    expect(within(slide1).queryByText(/\{\{n\}\}/)).toBeNull();
  });

  it('navigates through slides via the "next" button, updating dots', async () => {
    localStorage.setItem(FLAG_KEY, '1');
    render(<OnboardingPage />);
    await wait(500);

    // happy-dom doesn't load the compiled Tailwind stylesheet in tests, so
    // toBeVisible()'s computed-style check can't see the `hidden` utility
    // class actually hiding an element (it only takes effect once real CSS
    // is loaded, e.g. in the browser/build) — check the class token instead.
    const slide1 = screen.getByText('Ласкаво просимо!').closest('.ob-slide')!;
    const slide2 = screen.getByText('Як вчити слова').closest('.ob-slide')!;
    expect(slide1.classList.contains('hidden')).toBe(false);
    expect(slide2.classList.contains('hidden')).toBe(true);

    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: /Далі/ }));

    expect(slide1.classList.contains('hidden')).toBe(true);
    expect(slide2.classList.contains('hidden')).toBe(false);
    const dots = document.querySelectorAll('.ob-dot');
    expect(dots[1].classList.contains('ob-dot-active')).toBe(true);
    expect(Array.from(dots).filter((d) => d.classList.contains('ob-dot-active'))).toHaveLength(1);
  });

  it('shows the level picker with the SRS level pre-selected on the last slide', async () => {
    localStorage.setItem(FLAG_KEY, '1');
    render(<OnboardingPage />);
    await wait(500);

    const user = userEvent.setup();
    const nextBtn = screen.getByRole('button', { name: /Далі/ });
    await user.click(nextBtn);
    await user.click(nextBtn);
    await user.click(nextBtn);

    const srsBtn = screen.getByRole('button', { name: /SRS режим/ });
    expect(srsBtn.classList.contains('ob-sel')).toBe(true);

    const allBtn = screen.getByRole('button', { name: new RegExp(`Всі ${W.length} слів`) });
    await user.click(allBtn);
    expect(allBtn.classList.contains('ob-sel')).toBe(true);
    expect(srsBtn.classList.contains('ob-sel')).toBe(false);

    expect(screen.getByRole('button', { name: '🚀 Почати навчання!' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Пропустити' })).toBeNull();
  });

  it('finishes onto the selected range and closes when "start" is clicked on the last slide', async () => {
    localStorage.setItem(FLAG_KEY, '1');
    render(<OnboardingPage />);
    await wait(500);

    const user = userEvent.setup();
    const nextBtn = screen.getByRole('button', { name: /Далі/ });
    await user.click(nextBtn);
    await user.click(nextBtn);
    await user.click(nextBtn);

    await user.click(screen.getByRole('button', { name: /Тільки невивчені/ }));

    const selRange = document.getElementById('sel-range') as HTMLSelectElement;
    let changeFired = false;
    selRange.addEventListener('change', () => {
      changeFired = true;
    });

    await user.click(screen.getByRole('button', { name: '🚀 Почати навчання!' }));

    expect(selRange.value).toBe('unlearned');
    expect(changeFired).toBe(true);

    await wait(250);
    expect(screen.queryByText('Ласкаво просимо!')).toBeNull();
  });

  it('triggers the daily challenge button when "daily" is selected and finished', async () => {
    localStorage.setItem(FLAG_KEY, '1');
    render(<OnboardingPage />);
    await wait(500);

    const user = userEvent.setup();
    const nextBtn = screen.getByRole('button', { name: /Далі/ });
    await user.click(nextBtn);
    await user.click(nextBtn);
    await user.click(nextBtn);

    await user.click(screen.getByRole('button', { name: /Місія дня/ }));

    const dailyChallengeBtn = document.getElementById('btn-daily-challenge') as HTMLButtonElement;
    let clicked = false;
    dailyChallengeBtn.addEventListener('click', () => {
      clicked = true;
    });

    await user.click(screen.getByRole('button', { name: '🚀 Почати навчання!' }));
    expect(clicked).toBe(true);
  });

  it('finishes via the "skip" button on a non-last slide', async () => {
    localStorage.setItem(FLAG_KEY, '1');
    render(<OnboardingPage />);
    await wait(500);

    const user = userEvent.setup();
    const skipBtn = screen.getByRole('button', { name: 'Пропустити' });

    const selRange = document.getElementById('sel-range') as HTMLSelectElement;
    let changeFired = false;
    selRange.addEventListener('change', () => {
      changeFired = true;
    });

    await user.click(skipBtn);

    expect(selRange.value).toBe('srs');
    expect(changeFired).toBe(true);

    await wait(250);
    expect(screen.queryByText('Ласкаво просимо!')).toBeNull();
  });
});

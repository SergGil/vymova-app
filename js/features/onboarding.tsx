// Vymova — js/features/onboarding.tsx
// First-launch onboarding for new profiles
import { useEffect, useState, type ReactElement } from 'react';
import { t } from './i18n.ts';
import { W } from '../../data/words.js';

const FLAG_KEY = 'ew_onboarding_needed';

type Tip = { icon: string; text: string };
type Slide = { emoji: string; title: string; html: string; tips?: Tip[]; isLevelPicker?: boolean };
type Level = { emoji: string; name: string; words: string; range: string; hint: string };

function getSlides(wordCount: string): Slide[] {
  return [
    {
      emoji: '👋',
      title: t('ob.slide1.title'),
      html: t('ob.slide1.html', { n: wordCount }),
    },
    {
      emoji: '🃏',
      title: t('ob.slide2.title'),
      html: t('ob.slide2.html'),
      tips: [
        { icon: '✓', text: t('ob.slide2.tip1') },
        { icon: '→', text: t('ob.slide2.tip2') },
        { icon: '↑', text: t('ob.slide2.tip3') },
        { icon: '🔁', text: t('ob.slide2.tip4') },
      ],
    },
    {
      emoji: '🎮',
      title: t('ob.slide3.title'),
      html: t('ob.slide3.html'),
      tips: [
        { icon: '🧠', text: t('ob.slide3.tip1') },
        { icon: '✍️', text: t('ob.slide3.tip2') },
        { icon: '🔊', text: t('ob.slide3.tip3') },
        { icon: '⚡', text: t('ob.slide3.tip4') },
      ],
    },
    {
      emoji: '🎯',
      title: t('ob.slide4.title'),
      html: t('ob.slide4.html'),
      isLevelPicker: true,
    },
  ];
}

function getLevels(wordCount: string): Level[] {
  return [
    {
      emoji: '🔁',
      name: t('ob.level.srs.name'),
      words: t('ob.level.srs.words'),
      range: 'srs',
      hint: t('ob.level.srs.hint'),
    },
    {
      emoji: '🔴',
      name: t('ob.level.unlearned.name'),
      words: t('ob.level.unlearned.words'),
      range: 'unlearned',
      hint: t('ob.level.unlearned.hint'),
    },
    {
      emoji: '🏆',
      name: t('ob.level.all.name', { n: wordCount }),
      words: t('ob.level.all.words'),
      range: '0',
      hint: t('ob.level.all.hint'),
    },
    {
      emoji: '📅',
      name: t('ob.level.daily.name'),
      words: t('ob.level.daily.words'),
      range: 'daily',
      hint: t('ob.level.daily.hint'),
    },
  ];
}

function finish(selectedRange: string, overlayEl: HTMLDivElement | null): void {
  if (overlayEl) {
    overlayEl.style.opacity = '0';
    overlayEl.style.transition = 'opacity .2s';
  }

  if (selectedRange === 'daily') {
    document.getElementById('btn-daily-challenge')?.click();
    return;
  }

  const selRange = document.getElementById('sel-range') as HTMLSelectElement | null;
  if (selRange) {
    selRange.value = selectedRange;
    selRange.dispatchEvent(new Event('change'));
  }
}

function Onboarding({ onClose }: { onClose: () => void }): ReactElement {
  const wordCount = String(W.length);
  const [slides] = useState(() => getSlides(wordCount));
  const [levels] = useState(() => getLevels(wordCount));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedRange, setSelectedRange] = useState('srs');
  const [closing, setClosing] = useState(false);

  const isLast = currentSlide === slides.length - 1;

  function close(): void {
    setClosing(true);
    setTimeout(onClose, 220);
  }

  function handleNext(): void {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      finish(selectedRange, null);
      close();
    }
  }

  function handleSkip(): void {
    finish(selectedRange, null);
    close();
  }

  return (
    <div
      id="ob-overlay"
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/72 p-4 animate-[ob-fade-in_0.25s_ease]"
      style={closing ? { opacity: 0, transition: 'opacity .2s' } : undefined}
    >
      <div
        id="ob-card"
        className="flex min-h-[400px] w-full max-w-[420px] flex-col rounded-3xl bg-[#1a2540] px-7 pt-8 pb-6 shadow-[0_16px_60px_rgba(0,0,0,0.55)]"
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className={
              'ob-slide flex-1 flex-col ' +
              (i === currentSlide
                ? 'ob-active flex animate-[ob-slide-in_0.2s_ease]'
                : 'hidden')
            }
          >
            <div className="ob-emoji mb-3.5 text-center text-[2.8rem] leading-none">
              {s.emoji}
            </div>
            <div className="ob-title mb-2.5 text-center text-[1.2rem] font-extrabold text-white">
              {s.title}
            </div>
            <div
              className="ob-desc flex-1 text-center text-[.86rem] leading-[1.65] text-white/78"
              dangerouslySetInnerHTML={{ __html: s.html }}
            />
            {s.tips && (
              <div className="ob-tips mt-3.5 flex flex-col gap-[7px]">
                {s.tips.map((tip, ti) => (
                  <div
                    className="ob-tip flex items-center gap-2.5 rounded-[10px] bg-white/7 px-3 py-2 text-[.82rem] text-white/75"
                    key={ti}
                  >
                    <span className="ob-tip-icon min-w-[22px] shrink-0 text-center text-[1.1rem]">
                      {tip.icon}
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: tip.text }} />
                  </div>
                ))}
              </div>
            )}
            {s.isLevelPicker && (
              <div className="ob-levels mt-2.5 grid grid-cols-2 gap-2">
                {levels.map((lv) => (
                  <button
                    key={lv.range}
                    className={'ob-level-btn' + (lv.range === selectedRange ? ' ob-sel' : '')}
                    data-range={lv.range}
                    onClick={() => setSelectedRange(lv.range)}
                  >
                    <span className="ob-lv-emoji mb-1 block text-[1.6rem] leading-none">
                      {lv.emoji}
                    </span>
                    <div
                      className="ob-lv-name text-[.78rem] font-bold text-white"
                      dangerouslySetInnerHTML={{ __html: lv.name }}
                    />
                    <div
                      className="ob-lv-words mt-0.5 text-[.65rem] text-white/50"
                      dangerouslySetInnerHTML={{ __html: lv.words }}
                    />
                    <div
                      className="ob-lv-hint mt-[3px] text-[.63rem] text-[#4ecca3] opacity-90"
                      dangerouslySetInnerHTML={{ __html: lv.hint }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="ob-dots mt-4 mb-1 flex justify-center gap-1.5">
          {slides.map((_, i) => (
            <div
              key={i}
              className={
                'ob-dot h-[7px] rounded-full bg-white/25 transition-all duration-200 ' +
                (i === currentSlide
                  ? 'ob-dot-active w-[18px] rounded bg-[#4ecca3]'
                  : 'w-[7px]')
              }
            />
          ))}
        </div>

        <div className="ob-actions mt-2.5 flex gap-2.5">
          {!isLast && (
            <button
              className="ob-btn-skip flex-1 cursor-pointer rounded-[12px] border-[1.5px] border-white/22 bg-transparent p-3 font-[inherit] text-[.85rem] text-white/65 hover:border-white/50 hover:text-white"
              onClick={handleSkip}
            >
              {t('ob.skip')}
            </button>
          )}
          <button
            className="ob-btn-next flex-[2] cursor-pointer rounded-[12px] border-none bg-[#4ecca3] p-3 font-[inherit] text-[.9rem] font-bold text-[#0a1628] hover:opacity-[.88]"
            onClick={handleNext}
          >
            {isLast ? t('ob.start') : t('ob.next')}
          </button>
        </div>
      </div>
    </div>
  );
}

export function OnboardingPage(): ReactElement | null {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(FLAG_KEY) !== '1') return;
    function reveal(): void {
      localStorage.removeItem(FLAG_KEY);
      setShow(true);
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', reveal);
      return () => document.removeEventListener('DOMContentLoaded', reveal);
    } else {
      const id = setTimeout(reveal, 300);
      return () => clearTimeout(id);
    }
  }, []);

  if (!show) return null;
  return <Onboarding onClose={() => setShow(false)} />;
}

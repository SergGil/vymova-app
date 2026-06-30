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
    <div id="ob-overlay" style={closing ? { opacity: 0, transition: 'opacity .2s' } : undefined}>
      <div id="ob-card">
        {slides.map((s, i) => (
          <div key={i} className={'ob-slide' + (i === currentSlide ? ' ob-active' : '')}>
            <div className="ob-emoji">{s.emoji}</div>
            <div className="ob-title">{s.title}</div>
            <div className="ob-desc" dangerouslySetInnerHTML={{ __html: s.html }} />
            {s.tips && (
              <div className="ob-tips">
                {s.tips.map((tip, ti) => (
                  <div className="ob-tip" key={ti}>
                    <span className="ob-tip-icon">{tip.icon}</span>
                    <span dangerouslySetInnerHTML={{ __html: tip.text }} />
                  </div>
                ))}
              </div>
            )}
            {s.isLevelPicker && (
              <div className="ob-levels">
                {levels.map((lv) => (
                  <button
                    key={lv.range}
                    className={'ob-level-btn' + (lv.range === selectedRange ? ' ob-sel' : '')}
                    data-range={lv.range}
                    onClick={() => setSelectedRange(lv.range)}
                  >
                    <span className="ob-lv-emoji">{lv.emoji}</span>
                    <div className="ob-lv-name" dangerouslySetInnerHTML={{ __html: lv.name }} />
                    <div className="ob-lv-words" dangerouslySetInnerHTML={{ __html: lv.words }} />
                    <div className="ob-lv-hint" dangerouslySetInnerHTML={{ __html: lv.hint }} />
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        <div className="ob-dots">
          {slides.map((_, i) => (
            <div key={i} className={'ob-dot' + (i === currentSlide ? ' ob-dot-active' : '')} />
          ))}
        </div>

        <div className="ob-actions">
          {!isLast && (
            <button className="ob-btn-skip" onClick={handleSkip}>
              {t('ob.skip')}
            </button>
          )}
          <button className="ob-btn-next" onClick={handleNext}>
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

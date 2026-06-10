// English Words App — js/features/onboarding.ts
// First-launch onboarding for new profiles
import { t } from './i18n.ts';
import { W } from '../../data/words.js';
export {};

const FLAG_KEY = 'ew_onboarding_needed';

// Use DOMContentLoaded in case module runs during parsing
function _tryShowOnboarding(): void {
  if (localStorage.getItem(FLAG_KEY) !== '1') return;
  localStorage.removeItem(FLAG_KEY);
  _showOnboarding();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _tryShowOnboarding);
} else {
  // DOM already ready — delay slightly to let app finish rendering
  setTimeout(_tryShowOnboarding, 300);
}

function _showOnboarding(): void {
  // Inject styles once
  if (!document.getElementById('ob-styles')) {
    const style = document.createElement('style');
    style.id = 'ob-styles';
    style.textContent = `
      #ob-overlay {
        position: fixed; inset: 0; background: rgba(0,0,0,.72);
        z-index: 999999; display: flex; align-items: center;
        justify-content: center; padding: 16px;
        animation: ob-fade-in .25s ease;
      }
      @keyframes ob-fade-in { from { opacity:0 } to { opacity:1 } }
      #ob-card {
        background: #1a2540;
        border-radius: 24px; padding: 32px 28px 24px;
        max-width: 420px; width: 100%;
        box-shadow: 0 16px 60px rgba(0,0,0,.55);
        display: flex; flex-direction: column;
        min-height: 400px;
      }
      .ob-slide { display: none; flex-direction: column; flex: 1; animation: none; }
      .ob-slide.ob-active { display: flex; animation: ob-slide-in .2s ease; }
      @keyframes ob-slide-in { from { opacity:0; transform:translateX(16px) } to { opacity:1; transform:none } }
      .ob-emoji { font-size: 2.8rem; margin-bottom: 14px; text-align: center; line-height: 1; }
      .ob-title { font-size: 1.2rem; font-weight: 800; color: #fff; margin-bottom: 10px; text-align: center; }
      .ob-desc { font-size: .86rem; color: rgba(255,255,255,.78); line-height: 1.65; text-align: center; flex: 1; }
      .ob-desc b { color: #4ecca3; }
      .ob-tips { margin-top: 14px; display: flex; flex-direction: column; gap: 7px; }
      .ob-tip { display: flex; align-items: center; gap: 10px; font-size: .82rem;
        color: rgba(255,255,255,.75); background: rgba(255,255,255,.07);
        border-radius: 10px; padding: 8px 12px; }
      .ob-tip b { color: #fff; }
      .ob-tip-icon { font-size: 1.1rem; flex-shrink: 0; min-width: 22px; text-align: center; }
      .ob-levels { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 10px; }
      .ob-level-btn {
        border: 2px solid rgba(255,255,255,.18); border-radius: 14px; padding: 12px 8px;
        cursor: pointer; background: rgba(255,255,255,.04); color: #fff; text-align: center;
        transition: all .15s; font-family: inherit;
      }
      .ob-level-btn:hover { border-color: #4ecca3; background: rgba(78,204,163,.1); }
      .ob-level-btn.ob-sel { border-color: #4ecca3; background: rgba(78,204,163,.15); }
      .ob-level-btn .ob-lv-emoji { font-size: 1.6rem; display: block; margin-bottom: 4px; line-height: 1; }
      .ob-level-btn .ob-lv-name { font-size: .78rem; font-weight: 700; color: #fff; }
      .ob-level-btn .ob-lv-words { font-size: .65rem; color: rgba(255,255,255,.5); margin-top: 2px; }
      .ob-level-btn .ob-lv-hint { font-size: .63rem; color: #4ecca3; margin-top: 3px; opacity: .9; }
      .ob-dots { display: flex; justify-content: center; gap: 6px; margin: 16px 0 4px; }
      .ob-dot { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,.25); transition: all .2s; }
      .ob-dot.ob-dot-active { background: #4ecca3; width: 18px; border-radius: 4px; }
      .ob-actions { display: flex; gap: 10px; margin-top: 10px; }
      .ob-btn-skip { flex: 1; padding: 12px; border-radius: 12px; border: 1.5px solid rgba(255,255,255,.22);
        background: none; color: rgba(255,255,255,.65); cursor: pointer; font-family: inherit; font-size: .85rem; }
      .ob-btn-skip:hover { border-color: rgba(255,255,255,.5); color: #fff; }
      .ob-btn-next { flex: 2; padding: 12px; border-radius: 12px; border: none;
        background: #4ecca3; color: #0a1628; cursor: pointer; font-family: inherit;
        font-size: .9rem; font-weight: 700; }
      .ob-btn-next:hover { opacity: .88; }
    `;
    document.head.appendChild(style);
  }

  const wordCount = String(W.length);

  const SLIDES = [
    {
      emoji: '👋',
      title: t('ob.slide1.title'),
      html: t('ob.slide1.html').replace(/\{n\}/g, wordCount),
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
  ] as const;

  const LEVELS = [
    { emoji: '🔁', name: t('ob.level.srs.name'),       words: t('ob.level.srs.words'),       range: 'srs', hint: t('ob.level.srs.hint') },
    { emoji: '🔴', name: t('ob.level.unlearned.name'), words: t('ob.level.unlearned.words'), range: 'unlearned', hint: t('ob.level.unlearned.hint') },
    { emoji: '🏆', name: t('ob.level.all.name').replace('{n}', wordCount), words: t('ob.level.all.words'), range: '0', hint: t('ob.level.all.hint') },
    { emoji: '📅', name: t('ob.level.daily.name'),     words: t('ob.level.daily.words'),     range: 'daily', hint: t('ob.level.daily.hint') },
  ];

  let currentSlide = 0;
  let selectedRange = 'srs'; // default: SRS recommended

  const overlay = document.createElement('div');
  overlay.id = 'ob-overlay';

  const card = document.createElement('div');
  card.id = 'ob-card';

  // Build slides
  const slideEls: HTMLElement[] = SLIDES.map((s, i) => {
    const div = document.createElement('div');
    div.className = 'ob-slide' + (i === 0 ? ' ob-active' : '');

    div.innerHTML = `<div class="ob-emoji">${s.emoji}</div><div class="ob-title">${s.title}</div>`;

    const desc = document.createElement('div');
    desc.className = 'ob-desc';
    desc.innerHTML = s.html;
    div.appendChild(desc);

    if ('tips' in s && s.tips) {
      const tips = document.createElement('div');
      tips.className = 'ob-tips';
      (s.tips as readonly { icon: string; text: string }[]).forEach(t => {
        tips.innerHTML += `<div class="ob-tip"><span class="ob-tip-icon">${t.icon}</span><span>${t.text}</span></div>`;
      });
      div.appendChild(tips);
    }

    if ('isLevelPicker' in s && s.isLevelPicker) {
      const grid = document.createElement('div');
      grid.className = 'ob-levels';
      LEVELS.forEach(lv => {
        const btn = document.createElement('button');
        btn.className = 'ob-level-btn' + (lv.range === selectedRange ? ' ob-sel' : '');
        btn.dataset.range = lv.range;
        btn.innerHTML = `<span class="ob-lv-emoji">${lv.emoji}</span><div class="ob-lv-name">${lv.name}</div><div class="ob-lv-words">${lv.words}</div><div class="ob-lv-hint">${lv.hint}</div>`;
        btn.addEventListener('click', () => {
          selectedRange = lv.range;
          grid.querySelectorAll('.ob-level-btn').forEach(b => b.classList.remove('ob-sel'));
          btn.classList.add('ob-sel');
        });
        grid.appendChild(btn);
      });
      div.appendChild(grid);
    }

    return div;
  });
  slideEls.forEach(el => card.appendChild(el));

  // Dots
  const dotsEl = document.createElement('div');
  dotsEl.className = 'ob-dots';
  SLIDES.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'ob-dot' + (i === 0 ? ' ob-dot-active' : '');
    dotsEl.appendChild(dot);
  });
  card.appendChild(dotsEl);

  // Buttons
  const actions = document.createElement('div');
  actions.className = 'ob-actions';
  const skipBtn = document.createElement('button');
  skipBtn.className = 'ob-btn-skip';
  skipBtn.textContent = t('ob.skip');
  const nextBtn = document.createElement('button');
  nextBtn.className = 'ob-btn-next';
  nextBtn.textContent = t('ob.next');
  actions.append(skipBtn, nextBtn);
  card.appendChild(actions);

  overlay.appendChild(card);
  document.body.appendChild(overlay);

  function updateSlide(): void {
    slideEls.forEach((el, i) => el.classList.toggle('ob-active', i === currentSlide));
    dotsEl.querySelectorAll('.ob-dot').forEach((d, i) => d.classList.toggle('ob-dot-active', i === currentSlide));
    const isLast = currentSlide === SLIDES.length - 1;
    nextBtn.textContent = isLast ? t('ob.start') : t('ob.next');
    skipBtn.style.display = isLast ? 'none' : '';
  }

  function finish(): void {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity .2s';
    setTimeout(() => { try { overlay.remove(); } catch (e) {} }, 220);

    if (selectedRange === 'daily') {
      // Open daily challenge mode
      document.getElementById('btn-daily-challenge')?.click();
      return;
    }

    const selRange = document.getElementById('sel-range') as HTMLSelectElement | null;
    if (selRange) {
      selRange.value = selectedRange;
      selRange.dispatchEvent(new Event('change'));
    }
  }

  nextBtn.addEventListener('click', () => {
    if (currentSlide < SLIDES.length - 1) { currentSlide++; updateSlide(); }
    else finish();
  });
  skipBtn.addEventListener('click', finish);
}

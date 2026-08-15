// Vymova — js/modes/daily-challenge.tsx
// ⚡ Daily Challenge: 10 seeded words + timer + bonus XP
import { useEffect, type ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { _shuf } from '../core/srs.ts';
import { today as localToday, msUntilNextLocalMidnight } from '../core/today.ts';
import { W } from '../../data/words-data/words.js';
import { getGameData, saveGameData, recordModeComplete } from '../features/game/game.ts';
import { closePage, openPage } from '../features/sidebar/sidebar.tsx';
import { speakBtn, decodeIpa } from '../core/ui-helpers.ts';
import { playSound } from '../core/audio.ts';
import { t } from '../features/i18n.ts';
import { refreshGameBarLevel } from '../features/game/game-bar-level.tsx';
import { checkAchievements } from '../features/achievements/render-achievements.ts';
import type { WordEntry } from '../../src/types.js';
import { entryFor, getKnownSetForLang, isTargetLang } from '../features/mode/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';
import { scoreEmoji } from '../features/mode/mode-final-screen.tsx';

const DC_SIZE = 10,
  DC_XP = 3;

// Exported for direct testing (tests/modes/daily-challenge-logic.test.ts) —
// same underscore-prefixed-but-exported convention as srs.ts's _shuf.
export function _todayWords(): WordEntry[] {
  const today = localToday();
  let seed = today.split('').reduce((a, c) => a * 31 + c.charCodeAt(0), 0);
  // getKnownSetForLang(learnLang) — not a hardcoded getKnownSnapshot('en') —
  // so the "already known" exclusion actually looks at progress in whatever
  // language is being learned. This mode already fully supports arbitrary
  // language pairs for display (entryFor() below), but the pool exclusion
  // was still checking the base English known-set, which stays empty for
  // anyone not also studying the en/ua pair — so a Spanish learner, say,
  // kept getting challenged on Spanish words they'd already long mastered.
  // 'ua' maps to the same base 'en' bucket as isTargetLang() itself does
  // elsewhere (mode-utils.ts's targetLangFromStorageKey) — the base en/ua
  // pair shares one known-words store, not two.
  const learnLang = getLearnLang();
  const known = getKnownSetForLang(isTargetLang(learnLang) ? learnLang : 'en');
  let pool = (W as unknown as WordEntry[]).filter((w) => !known.has(w[0]));
  if (pool.length < DC_SIZE) pool = W.slice(0) as unknown as WordEntry[];
  const arr = pool.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    seed = (seed * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(seed) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, DC_SIZE);
}

export function DailyChallenge(): ReactElement | null {
  useEffect(() => {
    const overlay = document.getElementById('dc-overlay');
    if (!overlay) return;

    let dcDeck: WordEntry[] = [],
      dcIdx = 0,
      dcCorrect = 0;
    let dcTimer: ReturnType<typeof setInterval> | null = null,
      dcTimeLeft = 120,
      dcStarted = false;
    let dcCooldownTimer: ReturnType<typeof setInterval> | null = null;

    const elTitle = document.getElementById('dc-title')!;
    const elWord = document.getElementById('dc-word')!;
    const elIpa = document.getElementById('dc-ipa')!;
    const elPbar = document.getElementById('dc-pbar')! as HTMLElement;
    const elTimer = document.getElementById('dc-timer')!;
    const elOpts = document.getElementById('dc-options')!;
    const elResult = document.getElementById('dc-result')!;
    const elFinal = document.getElementById('dc-final')! as HTMLElement;
    const elFinalEmoji = document.getElementById('dc-final-emoji')!;
    const elFinalTitle = document.getElementById('dc-final-title')!;
    const elFinalXP = document.getElementById('dc-final-xp')!;
    const elFinalCooldown = document.getElementById('dc-final-cooldown')!;
    const elWordArea = document.getElementById('dc-word-area')!;
    const elPbarWrap = document.getElementById('dc-pbar-wrap')!;

    function isDoneToday(): boolean {
      return getGameData().dailyMissionDate === localToday();
    }

    function _formatCountdown(ms: number): string {
      const totalSec = Math.max(0, Math.floor(ms / 1000));
      const h = Math.floor(totalSec / 3600);
      const m = Math.floor((totalSec % 3600) / 60);
      const s = totalSec % 60;
      return [h, m, s].map((n) => String(n).padStart(2, '0')).join(':');
    }

    function _stopCooldownTicker(): void {
      if (dcCooldownTimer) {
        clearInterval(dcCooldownTimer);
        dcCooldownTimer = null;
      }
    }

    function _startCooldownTicker(): void {
      _stopCooldownTicker();
      const tick = (): void => {
        const ms = msUntilNextLocalMidnight();
        elFinalCooldown.textContent = t('daily.nextIn', { time: _formatCountdown(ms) });
        if (ms <= 0) {
          _stopCooldownTicker();
          open();
        }
      };
      tick();
      dcCooldownTimer = setInterval(tick, 1000);
    }

    function showLockedScreen(): void {
      elWordArea.style.display = 'none';
      elPbarWrap.style.display = 'none';
      elTimer.textContent = '';
      elOpts.innerHTML = '';
      elFinalEmoji.textContent = '✅';
      elFinalTitle.textContent = t('daily.alreadyDoneTitle');
      elFinalXP.textContent = '';
      elFinal.style.display = 'block';
      _startCooldownTicker();
    }

    function open(): void {
      closePage();
      // classList.remove alone is enough — .modes-overlay's base CSS rule is
      // already display:none, .open is what adds display:flex. Also setting
      // style.display='none' here used to leave a stale inline override that
      // permanently beat any later classList.add('open') (inline style always
      // wins over a non-!important class rule), which meant the Modes overlay
      // could never be reopened again after visiting this mode once.
      document.getElementById('modes-overlay')?.classList.remove('as-page', 'open');
      overlay!.classList.add('open');
      if (isDoneToday()) {
        showLockedScreen();
        return;
      }
      elWordArea.style.display = '';
      elPbarWrap.style.display = '';
      dcDeck = _todayWords();
      dcIdx = 0;
      dcCorrect = 0;
      dcStarted = false;
      elFinal.style.display = 'none';
      elResult.textContent = '';
      _renderQ();
    }
    function close(): void {
      overlay!.classList.remove('open');
      if (dcTimer) {
        clearInterval(dcTimer);
        dcTimer = null;
      }
      _stopCooldownTicker();
      openPage('modes');
    }

    function _startTimer(): void {
      if (dcStarted) return;
      dcStarted = true;
      dcTimeLeft = DC_SIZE * 12;
      elTimer.style.color = '';
      dcTimer = setInterval(() => {
        dcTimeLeft--;
        elTimer.textContent = dcTimeLeft + t('common.secSuffix');
        if (dcTimeLeft <= 15) elTimer.style.color = 'var(--danger)';
        if (dcTimeLeft > 0 && dcTimeLeft <= 15) {
          try {
            playSound('tick');
          } catch (e) {}
        }
        if (dcTimeLeft <= 0) {
          clearInterval(dcTimer!);
          dcTimer = null;
          _showFinal();
        }
      }, 1000);
    }

    function _renderQ(): void {
      if (dcIdx >= dcDeck.length) {
        _showFinal();
        return;
      }
      const w = dcDeck[dcIdx];
      const learnLang = getLearnLang();
      const knowLang = getKnowLang();
      const learnWord = entryFor(learnLang, w).word;
      const correct = entryFor(knowLang, w).word;
      if (!learnWord || !correct) {
        dcIdx++;
        _renderQ();
        return;
      }
      const isFmt = w[2]?.[0] === '/' || w[2]?.[0] === '[';
      const rawIpa = isFmt ? w[2] : (w[4] ?? '');
      elWord.textContent = learnWord;
      elIpa.textContent = learnLang === 'en' ? decodeIpa(rawIpa) : '';
      elWord.parentElement?.querySelector('.mode-speak')?.remove();
      if (learnLang === 'en') elWord.insertAdjacentElement('afterend', speakBtn(w[0]));
      elPbar.style.width = (dcIdx / dcDeck.length) * 100 + '%';
      elResult.textContent = '';
      elTimer.textContent = dcStarted ? dcTimeLeft + t('common.secSuffix') : '⏱';
      elTitle.textContent = `${t('daily.missionTitle')} — ${dcIdx + 1} / ${dcDeck.length}`;
      const pool = (W as unknown as WordEntry[]).filter((x) => {
        const o = entryFor(knowLang, x).word;
        return o && o !== correct;
      });
      const opts = _shuf([
        correct,
        ..._shuf(pool)
          .slice(0, 3)
          .map((x) => entryFor(knowLang, x).word),
      ]);
      elOpts.innerHTML = '';
      opts.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'dc-opt';
        btn.textContent = opt;
        btn.addEventListener('click', () => {
          if (!dcStarted) _startTimer();
          const ok = opt === correct;
          if (ok) {
            dcCorrect++;
            btn.classList.add('dc-opt-ok');
            elResult.innerHTML = `<span style="color:var(--success)">${t('quiz.correctMsg')}</span>`;
          } else {
            btn.classList.add('dc-opt-fail');
            elResult.innerHTML = `<span style="color:var(--danger)">✗ ${correct}</span>`;
          }
          elOpts.querySelectorAll<HTMLButtonElement>('.dc-opt').forEach((b) => {
            b.disabled = true;
            if (b.textContent === correct) b.classList.add('dc-opt-ok');
          });
          setTimeout(() => {
            dcIdx++;
            _renderQ();
          }, 900);
        });
        elOpts.appendChild(btn);
      });
    }

    function _showFinal(): void {
      if (dcTimer) {
        clearInterval(dcTimer);
        dcTimer = null;
      }
      const pct = Math.round((dcCorrect / DC_SIZE) * 100);
      const xp = dcCorrect * DC_XP * 10;
      elFinalEmoji.textContent = scoreEmoji(pct);
      elFinalTitle.textContent =
        (pct === 100
          ? t('daily.missionDone')
          : pct >= 80
            ? t('tempo.excellentTitle')
            : pct >= 60
              ? t('quiz.goodTitle')
              : t('daily.keepTraining')) + ` — ${dcCorrect} / ${DC_SIZE} (${pct}%)`;
      elFinalXP.textContent = t('daily.xpLabel', { xp });
      elFinal.style.display = 'block';
      elOpts.innerHTML = '';
      try {
        const d = getGameData();
        d.xp = (d.xp ?? 0) + xp;
        d.dailyMissionDate = localToday();
        saveGameData(d);
        refreshGameBarLevel();
      } catch (e) {}
      recordModeComplete('daily');
      try {
        checkAchievements();
      } catch (e) {}
      _startCooldownTicker();
    }

    const btnOpen = document.getElementById('btn-daily-challenge');
    const btnClose = document.getElementById('dc-close');
    const onOverlayClick = (e: MouseEvent) => {
      if (e.target === overlay) close();
    };

    btnOpen?.addEventListener('click', open);
    btnClose?.addEventListener('click', close);
    overlay.addEventListener('click', onOverlayClick);

    return () => {
      if (dcTimer) clearInterval(dcTimer);
      _stopCooldownTicker();
      btnOpen?.removeEventListener('click', open);
      btnClose?.removeEventListener('click', close);
      overlay.removeEventListener('click', onOverlayClick);
    };
  }, []);

  // full-react-migration-roadmap.md Phase 2: the wrapper markup itself
  // (previously static in index.html) — the effect above still reads/writes
  // these same ids via getElementById exactly as before, untouched.
  //
  // Correction: the "position:fixed escapes normal flow, no Portal needed"
  // reasoning this comment used to give was wrong — #app-root (the real
  // React root, see src/app-root.tsx) is `display: none` by design, and
  // fixed positioning does NOT escape a display:none ancestor (the whole
  // subtree is skipped from rendering, regardless of position). Rendered as
  // a plain direct child, #dc-overlay was a literal descendant of that
  // invisible root and never painted. Portaling to <body> escapes it, same
  // fix as modes-overlay-shell.tsx/quiz-overlay-shell.tsx/pairs.tsx.
  if (typeof document === 'undefined') return null;
  return createPortal(
    <div
      id="dc-overlay"
      // z-[650], not the other page-overlays' z-[600]: sits above the
      // modes panel (docs/full-css-tailwind-migration-roadmap.md Tier 2a
      // — same for #reading-overlay/#duel-overlay in index.html).
      className="page-overlay hidden fixed left-[var(--sb-width)] right-0 z-[650] overflow-x-hidden overflow-y-auto overscroll-contain bg-bg [&.open]:block max-[900px]:left-0 max-[900px]:h-[100dvh] inset-y-0"
    >
      <div className="page-inner border-l-[var(--page-inner-border)] mx-auto max-w-[520px] px-6 pt-5 pb-8 [.page-overlay.open_&]:animate-[slideUpPanel_0.28s_cubic-bezier(0.34,1.26,0.64,1)_backwards]">
        <div className="mb-3 flex items-center justify-between">
          <div
            id="dc-title"
            className="page-title text-[var(--page-title-color)] [font-family:var(--page-title-font)] [letter-spacing:var(--page-title-tracking)]"
          >
            ⚡ Місія дня
          </div>
          <div className="flex items-center gap-2.5">
            <span
              id="dc-timer"
              className="font-[Orbitron,monospace] text-[1.1rem] font-bold text-[var(--accent)]"
            >
              ⏱
            </span>
            <button
              id="dc-close"
              className="page-close-btn bg-transparent border-0 text-[1.2rem] cursor-pointer text-[var(--text3)] py-1 px-2 rounded-md transition-all duration-[120ms] hover:bg-[var(--bg)] hover:text-[var(--text)]"
              title={t('common.close')}
              data-i18n-title="common.close"
            >
              ✕
            </button>
          </div>
        </div>
        <div id="dc-pbar-wrap" className="mb-5 h-[5px] overflow-hidden rounded-[5px] bg-[var(--border)]">
          <div
            id="dc-pbar"
            className="dc-pbar-fill bg-[image:var(--confirm-btn-bg,linear-gradient(90deg,var(--accent),#27ae60))]"
            style={{ width: '0%' }}
          />
        </div>
        <div id="dc-word-area" className="mb-5 min-h-[80px] text-center">
          <div id="dc-word" className="dc-word text-[var(--dc-word-color)]" />
          <div id="dc-ipa" className="mt-1 text-[.9rem] text-[var(--accent)]" />
          <div id="dc-result" className="mt-2 min-h-[22px] text-[.88rem] font-semibold" />
        </div>
        <div id="dc-options" className="grid grid-cols-2 gap-2" />
        <div id="dc-final" className="py-5 text-center" style={{ display: 'none' }}>
          <div id="dc-final-emoji" className="mb-2.5 text-[2.5rem]" />
          <div id="dc-final-title" className="mb-1.5 text-[1.1rem] font-bold text-[var(--text)]" />
          <div id="dc-final-xp" className="mb-3 text-[.88rem] text-[var(--accent)]" />
          <div id="dc-final-cooldown" className="text-[.8rem] text-[var(--text3)]" />
        </div>
      </div>
    </div>,
    document.body,
  );
}

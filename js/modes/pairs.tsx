// Vymova — js/modes/pairs.tsx
// 🔗 PAIRS MODE
import { useEffect, type ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { _shuf, orderDeckPool } from '../core/srs.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words-data/words.js';
import { t } from '../features/i18n.ts';
import { recordModeComplete } from '../features/game.ts';
import { addCombo, breakCombo, awardXP } from '../features/combo.ts';
import { playSound } from '../core/audio.ts';
import type { WordEntry } from '../../src/types.js';
import { entryFor } from '../features/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';

const N = 6;

// Per-learn-language, same convention as assoc-chain.tsx's getBest(lang)/
// ghost-race.tsx's ghostKey() — a single shared 'ew_pairs_best' meant a
// record set in one language silently became the bar every other language's
// runs were compared against, regardless of how (un)familiar the vocabulary
// actually was. 'en'/'ua' share one bucket (the base dictionary, not a
// TargetLang) — every other learn language gets its own suffixed key.
// Exported for direct testing (tests/modes/pairs-logic.test.ts) — same
// underscore-prefixed-but-exported convention as srs.ts's _shuf.
export function _pairsBestKey(): string {
  const lang = getLearnLang();
  return lang === 'en' || lang === 'ua' ? 'ew_pairs_best' : `ew_pairs_best_${lang}`;
}
export function getBest(): number {
  return parseFloat(localStorage.getItem(_pairsBestKey()) ?? '0');
}
export function setBest(secs: number): void {
  const b = getBest();
  if (!b || secs < b) localStorage.setItem(_pairsBestKey(), secs.toFixed(1));
}
function fmt(ms: number): string {
  return (ms / 1000).toFixed(1) + t('common.secSuffix');
}

export function PairsMode(): ReactElement | null {
  useEffect(() => {
    const pOverlay = document.getElementById('pairs-overlay');
    const pBoard = document.getElementById('pairs-board');
    const pTimer = document.getElementById('pairs-timer');
    const pFinal = document.getElementById('pairs-final');
    const pBest = document.getElementById('pairs-best-label');
    if (!pOverlay || !pBoard || !pTimer || !pFinal || !pBest) return;

    let pDeck: WordEntry[] = [];
    let pSel: { el: HTMLElement; id: number; side: string } | null = null;
    let pMatched = 0;
    let pStart: number | null = null;
    let pTick: ReturnType<typeof setInterval> | null = null;

    function open(): void {
      const pool = orderDeckPool(
        (getDeckSnapshot()?.length >= N ? getDeckSnapshot() : W).slice() as WordEntry[],
      );
      pDeck = pool.slice(0, N);
      pSel = null;
      pMatched = 0;
      pStart = null;
      if (pTick) clearInterval(pTick);
      pTimer!.textContent = '0.0' + t('common.secSuffix');
      pTimer!.style.color = 'var(--accent)';
      pFinal!.style.display = 'none';
      pBoard!.style.display = '';
      const b = getBest();
      pBest!.textContent = b ? t('pairs.record', { t: fmt(b * 1000) }) : '';
      renderBoard();
      pOverlay!.style.display = 'flex';
    }
    function close(): void {
      if (pTick) clearInterval(pTick);
      pOverlay!.style.display = 'none';
    }

    function startTimer(): void {
      if (pStart) return;
      pStart = Date.now();
      pTick = setInterval(() => {
        pTimer!.textContent = fmt(Date.now() - pStart!);
      }, 100);
    }

    function renderBoard(): void {
      const learnLang = getLearnLang();
      const knowLang = getKnowLang();
      const en = _shuf(pDeck.map((w, i) => ({ text: entryFor(learnLang, w).word, id: i })));
      const ua = _shuf(pDeck.map((w, i) => ({ text: entryFor(knowLang, w).word, id: i })));
      pBoard!.innerHTML =
        '<div id="pairs-col-en" style="display:flex;flex-direction:column;gap:8px;"></div>' +
        '<div id="pairs-col-ua" style="display:flex;flex-direction:column;gap:8px;"></div>';
      Object.assign(pBoard!.style, { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' });
      const colEn = document.getElementById('pairs-col-en')!;
      const colUa = document.getElementById('pairs-col-ua')!;
      en.forEach((item) => colEn.appendChild(makeBtn(item, 'en')));
      ua.forEach((item) => colUa.appendChild(makeBtn(item, 'ua')));
    }

    function makeBtn(item: { text: string; id: number }, side: string): HTMLButtonElement {
      const btn = document.createElement('button');
      btn.className = 'pair-btn';
      btn.textContent = item.text;
      btn.dataset.id = String(item.id);
      btn.dataset.side = side;
      btn.addEventListener('click', () => onClick(btn, item, side));
      return btn;
    }

    function onClick(btn: HTMLElement, item: { text: string; id: number }, side: string): void {
      if (btn.classList.contains('matched')) return;
      startTimer();
      if (!pSel) {
        pSel = { el: btn, id: item.id, side };
        btn.classList.add('selected');
      } else if (pSel.el === btn) {
        btn.classList.remove('selected');
        pSel = null;
      } else if (pSel.side === side) {
        pSel.el.classList.remove('selected');
        pSel = { el: btn, id: item.id, side };
        btn.classList.add('selected');
      } else if (pSel.id === item.id) {
        pSel.el.classList.remove('selected');
        pSel.el.classList.add('matched');
        btn.classList.add('matched');
        pSel = null;
        pMatched++;
        try {
          playSound('know');
          addCombo();
          awardXP(5);
        } catch (e) {}
        if (pMatched === N) setTimeout(finish, 350);
      } else {
        const wrongA = pSel.el;
        wrongA.classList.remove('selected');
        wrongA.classList.add('wrong');
        btn.classList.add('wrong');
        pSel = null;
        try {
          playSound('next');
          breakCombo();
        } catch (e) {}
        setTimeout(() => {
          wrongA.classList.remove('wrong');
          btn.classList.remove('wrong');
        }, 420);
      }
    }

    function finish(): void {
      if (pTick) clearInterval(pTick);
      const ms = Date.now() - pStart!;
      const secs = ms / 1000;
      const b = getBest(),
        isNew = !b || secs < b;
      setBest(secs);
      pBoard!.style.display = 'none';
      pFinal!.style.display = 'block';
      recordModeComplete('pairs');
      pTimer!.textContent = fmt(ms);
      pTimer!.style.color = isNew ? 'var(--accent2)' : 'var(--accent)';
      document.getElementById('pf-emoji')!.textContent = isNew ? '🏆' : '🎉';
      document.getElementById('pf-time')!.textContent = fmt(ms);
      document.getElementById('pf-best')!.textContent = isNew
        ? t('pairs.newRecord')
        : t('pairs.record', { t: fmt(getBest() * 1000) });
      pBest!.textContent = t('pairs.record', { t: fmt(getBest() * 1000) });
    }

    const btnPairs = document.getElementById('btn-pairs');
    const pairsClose = document.getElementById('pairs-close');
    const pairsAgain = document.getElementById('pairs-again');
    const pairsExit = document.getElementById('pairs-exit');
    const onOverlayClick = (e: MouseEvent) => {
      if (e.target === pOverlay) close();
    };
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && pOverlay!.style.display === 'flex') close();
    };

    btnPairs?.addEventListener('click', open);
    pairsClose?.addEventListener('click', close);
    pairsAgain?.addEventListener('click', open);
    pairsExit?.addEventListener('click', close);
    pOverlay.addEventListener('click', onOverlayClick);
    document.addEventListener('keydown', onKeydown);

    return () => {
      if (pTick) clearInterval(pTick);
      btnPairs?.removeEventListener('click', open);
      pairsClose?.removeEventListener('click', close);
      pairsAgain?.removeEventListener('click', open);
      pairsExit?.removeEventListener('click', close);
      pOverlay.removeEventListener('click', onOverlayClick);
      document.removeEventListener('keydown', onKeydown);
    };
  }, []);

  // full-react-migration-roadmap.md Phase 2: the wrapper markup itself
  // (previously static in index.html) — the effect above still reads/writes
  // these same ids via getElementById exactly as before, untouched
  // (including #pairs-board's innerHTML/appendChild tile rendering, which
  // stays imperative — only the wrapper moved).
  //
  // Correction: the "position:fixed escapes normal flow, no Portal needed"
  // reasoning this comment used to give was wrong — #app-root (the real
  // React root, see src/app-root.tsx) is `display: none` by design, and
  // fixed positioning does NOT escape a display:none ancestor (the whole
  // subtree is skipped from rendering, regardless of position). Rendered as
  // a plain direct child, #pairs-overlay was a literal descendant of that
  // invisible root and never painted. Portaling to <body> escapes it, same
  // fix as modes-overlay-shell.tsx/quiz-overlay-shell.tsx/sidebar-nav.tsx.
  if (typeof document === 'undefined') return null;
  return createPortal(
    <div
      id="pairs-overlay"
      className="fixed inset-0 z-[9100] flex items-center justify-center bg-black/55 px-3 py-4"
      style={{ display: 'none' }}
    >
      <div className="pairs-panel">
        <div className="mb-1.5 flex items-center justify-between">
          <div>
            <div className="text-[1.05rem] font-bold text-[var(--text)]" data-i18n="pairs.title">
              {t('pairs.title')}
            </div>
            <div id="pairs-best-label" className="mt-0.5 text-[.72rem] text-[var(--text3)]" />
          </div>
          <div className="flex items-center gap-2.5">
            <div
              id="pairs-timer"
              className="min-w-[56px] text-right text-[1.5rem] font-bold text-[var(--accent)]"
            >
              0.0с
            </div>
            <button
              id="pairs-close"
              className="cursor-pointer border-none bg-transparent text-[1.3rem] text-[var(--text3)]"
              title={t('common.close')}
              data-i18n-title="common.close"
            >
              ✕
            </button>
          </div>
        </div>
        <div id="pairs-board" className="mb-3.5" />
        <div id="pairs-final" className="py-2 text-center" style={{ display: 'none' }}>
          <div className="mb-2 text-[2.5rem]" id="pf-emoji">
            ⏱
          </div>
          <div className="mb-1 text-[1.4rem] font-bold text-[var(--text)]" id="pf-time" />
          <div className="mb-[18px] text-[.88rem] text-[var(--text2)]" id="pf-best" />
          <div className="flex justify-center gap-2.5">
            <button
              id="pairs-again"
              className="cursor-pointer rounded-[10px] border-[1.5px] border-[var(--accent)] bg-transparent px-[22px] py-2.5 font-['DM_Sans',sans-serif] text-[.88rem] font-semibold text-[var(--accent)]"
              data-i18n="pairs.again"
            >
              {t('pairs.again')}
            </button>
            <button
              id="pairs-exit"
              className="cursor-pointer rounded-[10px] border-[1.5px] border-[var(--border)] bg-transparent px-[22px] py-2.5 font-['DM_Sans',sans-serif] text-[.88rem] text-[var(--text2)]"
              data-i18n="common.close"
            >
              {t('common.close')}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

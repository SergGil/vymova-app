// Vymova — js/modes/pairs.tsx
// 🔗 PAIRS MODE
import { useEffect, type ReactElement } from 'react';
import { _shuf } from '../core/srs.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { t } from '../features/i18n.ts';
import { recordModeComplete } from '../features/game.ts';
import { playSound } from '../core/audio.ts';
import type { WordEntry } from '../../src/types.js';
import { esEntry, frEntry, itEntry, ptEntry, deEntry, heEntry, arEntry, plEntry, zhEntry, elEntry, jaEntry, trEntry, nlEntry } from '../features/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';

function getWordInLang(w: WordEntry, lang: string): string {
  switch (lang) {
    case 'ua': return w[1];
    case 'es': return esEntry(w[0])?.[0] ?? '';
    case 'fr': return frEntry(w[0])?.[0] ?? '';
    case 'it': return itEntry(w[0])?.[0] ?? '';
    case 'pt': return ptEntry(w[0])?.[0] ?? '';
    case 'de': return deEntry(w[0])?.[0] ?? '';
    case 'he': return heEntry(w[0])?.[0] ?? '';
    case 'ar': return arEntry(w[0])?.[0] ?? '';
    case 'pl': return plEntry(w[0])?.[0] ?? '';
    case 'zh': return zhEntry(w[0])?.[0] ?? '';
    case 'el': return elEntry(w[0])?.[0] ?? '';
    case 'ja': return jaEntry(w[0])?.[0] ?? '';
    case 'tr': return trEntry(w[0])?.[0] ?? '';
    case 'nl': return nlEntry(w[0])?.[0] ?? '';
    default:   return w[0];
  }
}

const N = 6;

function getBest(): number { return parseFloat(localStorage.getItem('ew_pairs_best') ?? '0'); }
function setBest(secs: number): void { const b = getBest(); if (!b || secs < b) localStorage.setItem('ew_pairs_best', secs.toFixed(1)); }
function fmt(ms: number): string { return (ms / 1000).toFixed(1) + t('common.secSuffix'); }

export function PairsMode(): ReactElement | null {
  useEffect(() => {
    const pOverlay = document.getElementById('pairs-overlay');
    const pBoard   = document.getElementById('pairs-board');
    const pTimer   = document.getElementById('pairs-timer');
    const pFinal   = document.getElementById('pairs-final');
    const pBest    = document.getElementById('pairs-best-label');
    if (!pOverlay || !pBoard || !pTimer || !pFinal || !pBest) return;

    let pDeck: WordEntry[] = [];
    let pSel: { el: HTMLElement; id: number; side: string } | null = null;
    let pMatched = 0;
    let pStart: number | null = null;
    let pTick: ReturnType<typeof setInterval> | null = null;

    function open(): void {
      const pool = _shuf((state.deck?.length >= N ? state.deck : W).slice() as WordEntry[]);
      pDeck = pool.slice(0, N);
      pSel = null; pMatched = 0; pStart = null;
      if (pTick) clearInterval(pTick);
      pTimer!.textContent = '0.0' + t('common.secSuffix'); pTimer!.style.color = 'var(--accent)';
      pFinal!.style.display = 'none'; pBoard!.style.display = '';
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
      pTick = setInterval(() => { pTimer!.textContent = fmt(Date.now() - pStart!); }, 100);
    }

    function renderBoard(): void {
      const learnLang = getLearnLang();
      const knowLang  = getKnowLang();
      const en = _shuf(pDeck.map((w, i) => ({ text: getWordInLang(w, learnLang), id: i })));
      const ua = _shuf(pDeck.map((w, i) => ({ text: getWordInLang(w, knowLang), id: i })));
      pBoard!.innerHTML = '<div id="pairs-col-en" style="display:flex;flex-direction:column;gap:8px;"></div>' +
                         '<div id="pairs-col-ua" style="display:flex;flex-direction:column;gap:8px;"></div>';
      Object.assign(pBoard!.style, { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' });
      const colEn = document.getElementById('pairs-col-en')!;
      const colUa = document.getElementById('pairs-col-ua')!;
      en.forEach(item => colEn.appendChild(makeBtn(item, 'en')));
      ua.forEach(item => colUa.appendChild(makeBtn(item, 'ua')));
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
        btn.classList.remove('selected'); pSel = null;
      } else if (pSel.side === side) {
        pSel.el.classList.remove('selected');
        pSel = { el: btn, id: item.id, side };
        btn.classList.add('selected');
      } else if (pSel.id === item.id) {
        pSel.el.classList.remove('selected');
        pSel.el.classList.add('matched');
        btn.classList.add('matched');
        pSel = null; pMatched++;
        try { playSound('know'); } catch (e) {}
        if (pMatched === N) setTimeout(finish, 350);
      } else {
        const wrongA = pSel.el;
        wrongA.classList.remove('selected');
        wrongA.classList.add('wrong'); btn.classList.add('wrong');
        pSel = null;
        try { playSound('next'); } catch (e) {}
        setTimeout(() => { wrongA.classList.remove('wrong'); btn.classList.remove('wrong'); }, 420);
      }
    }

    function finish(): void {
      if (pTick) clearInterval(pTick);
      const ms = Date.now() - pStart!;
      const secs = ms / 1000;
      const b  = getBest(), isNew = !b || secs < b;
      setBest(secs);
      pBoard!.style.display = 'none'; pFinal!.style.display = 'block';
      recordModeComplete('pairs');
      pTimer!.textContent = fmt(ms); pTimer!.style.color = isNew ? '#e67e22' : 'var(--accent)';
      document.getElementById('pf-emoji')!.textContent = isNew ? '🏆' : '🎉';
      document.getElementById('pf-time')!.textContent  = fmt(ms);
      document.getElementById('pf-best')!.textContent  = isNew ? t('pairs.newRecord') : t('pairs.record', { t: fmt(getBest() * 1000) });
      pBest!.textContent = t('pairs.record', { t: fmt(getBest() * 1000) });
    }

    const btnPairs  = document.getElementById('btn-pairs');
    const pairsClose = document.getElementById('pairs-close');
    const pairsAgain = document.getElementById('pairs-again');
    const pairsExit  = document.getElementById('pairs-exit');
    const onOverlayClick = (e: MouseEvent) => { if (e.target === pOverlay) close(); };
    const onKeydown = (e: KeyboardEvent) => { if (e.key === 'Escape' && pOverlay!.style.display === 'flex') close(); };

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

  return null;
}

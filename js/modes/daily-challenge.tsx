// Vymova — js/modes/daily-challenge.tsx
// ⚡ Daily Challenge: 10 seeded words + timer + bonus XP
import { useEffect, type ReactElement } from 'react';
import { state } from '../../src/state.ts';
import { _shuf } from '../core/srs.ts';
import { W } from '../../data/words.js';
import { getGameData, saveGameData, recordModeComplete } from '../features/game.ts';
import { closePage, openPage } from '../features/sidebar.tsx';
import { speakBtn, decodeIpa } from '../core/ui-helpers.ts';
import { playSound } from '../core/audio.ts';
import { t } from '../features/i18n.ts';
import { refreshGameBarLevel } from '../features/game-bar-level.tsx';
import { checkAchievements } from '../features/render-achievements.ts';
import type { WordEntry } from '../../src/types.js';
import { esEntry, frEntry, itEntry, ptEntry, deEntry, heEntry, arEntry, plEntry, zhEntry, elEntry, jaEntry, trEntry, nlEntry } from '../features/mode-utils.ts';
import { getKnowLang, getLearnLang } from '../features/lang-pair-select.tsx';
import { getKnownSnapshot } from '../../src/known-words-store.ts';

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

const DC_SIZE = 10, DC_XP = 3;

function _todayWords(): WordEntry[] {
  const today = new Date().toISOString().slice(0, 10);
  let seed = today.split('').reduce((a, c) => a * 31 + c.charCodeAt(0), 0);
  let pool = (W as unknown as WordEntry[]).filter(w => !getKnownSnapshot('en').has(w[0]));
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

    let dcDeck: WordEntry[] = [], dcIdx = 0, dcCorrect = 0;
    let dcTimer: ReturnType<typeof setInterval> | null = null, dcTimeLeft = 120, dcStarted = false;

    const elTitle      = document.getElementById('dc-title')!;
    const elWord       = document.getElementById('dc-word')!;
    const elIpa        = document.getElementById('dc-ipa')!;
    const elPbar       = document.getElementById('dc-pbar')!     as HTMLElement;
    const elTimer      = document.getElementById('dc-timer')!;
    const elOpts       = document.getElementById('dc-options')!;
    const elResult     = document.getElementById('dc-result')!;
    const elFinal      = document.getElementById('dc-final')!    as HTMLElement;
    const elFinalEmoji = document.getElementById('dc-final-emoji')!;
    const elFinalTitle = document.getElementById('dc-final-title')!;
    const elFinalXP    = document.getElementById('dc-final-xp')!;

    function open(): void {
      closePage();
      const modesOvl = document.getElementById('modes-overlay') as HTMLElement | null;
      if (modesOvl) { modesOvl.classList.remove('as-page', 'open'); modesOvl.style.display = 'none'; }
      overlay!.classList.add('open');
      dcDeck = _todayWords(); dcIdx = 0; dcCorrect = 0; dcStarted = false;
      elFinal.style.display = 'none'; elResult.textContent = ''; _renderQ();
    }
    function close(): void {
      overlay!.classList.remove('open');
      if (dcTimer) { clearInterval(dcTimer); dcTimer = null; }
      openPage('modes');
    }

    function _startTimer(): void {
      if (dcStarted) return;
      dcStarted = true; dcTimeLeft = DC_SIZE * 12; elTimer.style.color = '';
      dcTimer = setInterval(() => {
        dcTimeLeft--;
        elTimer.textContent = dcTimeLeft + t('common.secSuffix');
        if (dcTimeLeft <= 15) elTimer.style.color = '#e74c3c';
        if (dcTimeLeft > 0 && dcTimeLeft <= 15) { try { playSound('tick'); } catch (e) {} }
        if (dcTimeLeft <= 0) { clearInterval(dcTimer!); dcTimer = null; _showFinal(); }
      }, 1000);
    }

    function _renderQ(): void {
      if (dcIdx >= dcDeck.length) { _showFinal(); return; }
      const w = dcDeck[dcIdx];
      const learnLang = getLearnLang();
      const knowLang  = getKnowLang();
      const learnWord = getWordInLang(w, learnLang);
      const correct   = getWordInLang(w, knowLang);
      if (!learnWord || !correct) { dcIdx++; _renderQ(); return; }
      const isFmt = w[2]?.[0] === '/' || w[2]?.[0] === '[';
      const rawIpa = isFmt ? w[2] : (w[4] ?? '');
      elWord.textContent = learnWord;
      elIpa.textContent = learnLang === 'en' ? decodeIpa(rawIpa) : '';
      elWord.parentElement?.querySelector('.mode-speak')?.remove();
      if (learnLang === 'en') elWord.insertAdjacentElement('afterend', speakBtn(w[0]));
      elPbar.style.width = (dcIdx / dcDeck.length * 100) + '%';
      elResult.textContent = '';
      elTimer.textContent = dcStarted ? dcTimeLeft + t('common.secSuffix') : '⏱';
      elTitle.textContent = `${t('daily.missionTitle')} — ${dcIdx + 1} / ${dcDeck.length}`;
      const pool = (W as unknown as WordEntry[]).filter(x => { const o = getWordInLang(x, knowLang); return o && o !== correct; });
      const opts = _shuf([correct, ..._shuf(pool).slice(0, 3).map(x => getWordInLang(x, knowLang))]);
      elOpts.innerHTML = '';
      opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'dc-opt'; btn.textContent = opt;
        btn.addEventListener('click', () => {
          if (!dcStarted) _startTimer();
          const ok = opt === correct;
          if (ok) { dcCorrect++; btn.classList.add('dc-opt-ok'); elResult.innerHTML = `<span style="color:#27ae60">${t('quiz.correctMsg')}</span>`; }
          else    { btn.classList.add('dc-opt-fail'); elResult.innerHTML = `<span style="color:#e74c3c">✗ ${correct}</span>`; }
          elOpts.querySelectorAll<HTMLButtonElement>('.dc-opt').forEach(b => { b.disabled = true; if (b.textContent === correct) b.classList.add('dc-opt-ok'); });
          setTimeout(() => { dcIdx++; _renderQ(); }, 900);
        });
        elOpts.appendChild(btn);
      });
    }

    function _showFinal(): void {
      if (dcTimer) { clearInterval(dcTimer); dcTimer = null; }
      const pct = Math.round(dcCorrect / DC_SIZE * 100);
      const xp  = dcCorrect * DC_XP * 10;
      elFinalEmoji.textContent = pct===100?'🏆':pct>=80?'🎉':pct>=60?'👍':'💪';
      elFinalTitle.textContent = (pct===100?t('daily.missionDone'):pct>=80?t('tempo.excellentTitle'):pct>=60?t('quiz.goodTitle'):t('daily.keepTraining')) + ` — ${dcCorrect} / ${DC_SIZE} (${pct}%)`;
      elFinalXP.textContent = t('daily.xpLabel', { xp });
      elFinal.style.display = 'block'; elOpts.innerHTML = '';
      try { const d = getGameData(); d.xp = (d.xp ?? 0) + xp; saveGameData(d); refreshGameBarLevel(); } catch (e) {}
      recordModeComplete('daily');
      try { checkAchievements(); } catch (e) {}
    }

    const btnOpen = document.getElementById('btn-daily-challenge');
    const btnClose = document.getElementById('dc-close');
    const btnRestart = document.getElementById('dc-restart');
    const onRestart = () => {
      dcIdx = 0; dcCorrect = 0; dcStarted = false;
      if (dcTimer) clearInterval(dcTimer);
      elFinal.style.display = 'none'; _renderQ();
    };
    const onOverlayClick = (e: MouseEvent) => { if (e.target === overlay) close(); };

    btnOpen?.addEventListener('click', open);
    btnClose?.addEventListener('click', close);
    btnRestart?.addEventListener('click', onRestart);
    overlay.addEventListener('click', onOverlayClick);

    return () => {
      if (dcTimer) clearInterval(dcTimer);
      btnOpen?.removeEventListener('click', open);
      btnClose?.removeEventListener('click', close);
      btnRestart?.removeEventListener('click', onRestart);
      overlay.removeEventListener('click', onOverlayClick);
    };
  }, []);

  return null;
}

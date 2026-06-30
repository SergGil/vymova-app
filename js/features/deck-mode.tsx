// Vymova — js/features/deck-mode.tsx
// Special-mode deck management: sel-mode listener filters the deck to whatever
// target language(s) the current pair involves (see mode-utils.ts getWordsForMode).
import { useEffect, type ReactElement } from 'react';
import { getActiveTagSetSnapshot } from '../../src/deck-filter-store.ts';
import { getDeckSnapshot, getIdxSnapshot } from '../../src/deck-store.ts';
import { W } from '../../data/words.js';
import { getMode, getWordsForMode, isSpecialMode, noTranslationsKey } from './mode-utils.ts';
import { t } from './i18n.ts';
import { _refreshRangeOptions } from './deck-filter.tsx';
import { render, setDeck, setIdx, stopAuto } from '../core/card-engine.ts';
import { shuffle } from '../core/srs.ts';
import type { WordEntry } from '../../src/types.js';

let _preSpecialDeck: WordEntry[] | null = null;
let _preSpecialIdx = 0;

export const _isSpecialMode = isSpecialMode;

function _getSpecialDeck(m: string): WordEntry[] {
  return getWordsForMode(m, W as unknown as WordEntry[]);
}

export function _rebuildEsDeck(): void {
  const m = getMode();
  if (!_isSpecialMode(m)) return;
  const specialDeck = _getSpecialDeck(m);
  const ats = getActiveTagSetSnapshot();
  let deck = ats ? specialDeck.filter((w) => (ats as Set<string>).has(w[0])) : specialDeck.slice();
  if (!deck.length) deck = specialDeck.slice();
  setDeck(shuffle(deck));
  setIdx(0);
  render();
}

export function DeckModeInit(): ReactElement | null {
  useEffect(() => {
    const selMode = document.getElementById('sel-mode');

    // On mount: if a special mode was already set (restored from localStorage
    // before this listener registered), apply the filtered deck immediately.
    const initMode = (selMode as HTMLSelectElement | null)?.value ?? '';
    if (_isSpecialMode(initMode)) {
      const specialDeck = _getSpecialDeck(initMode);
      if (specialDeck.length) {
        if (!_preSpecialDeck) {
          _preSpecialDeck = getDeckSnapshot();
          _preSpecialIdx = getIdxSnapshot();
        }
        const ats = getActiveTagSetSnapshot();
        let deck = ats
          ? specialDeck.filter((w) => (ats as Set<string>).has(w[0]))
          : specialDeck.slice();
        if (!deck.length) deck = specialDeck.slice();
        setDeck(shuffle(deck));
        setIdx(0);
        _refreshRangeOptions();
        render();
      }
    }

    const onChange = function (this: HTMLSelectElement) {
      stopAuto();
      const m = this.value;
      const isSpecial = _isSpecialMode(m);

      if (isSpecial) {
        const specialDeck = _getSpecialDeck(m);
        if (!specialDeck.length) {
          const _mt = document.getElementById('milestone-toast');
          if (_mt) {
            _mt.textContent = t(noTranslationsKey(m, W as unknown as WordEntry[]));
            _mt.className = 'milestone-toast';
            void _mt.offsetWidth;
            _mt.className = 'milestone-toast show';
            setTimeout(() => {
              _mt.className = 'milestone-toast';
            }, 3500);
          }
          this.value = 'en';
          render();
          return;
        }
        if (!_preSpecialDeck) {
          _preSpecialDeck = getDeckSnapshot();
          _preSpecialIdx = getIdxSnapshot();
        }
        const ats = getActiveTagSetSnapshot();
        let deck = ats
          ? specialDeck.filter((w) => (ats as Set<string>).has(w[0]))
          : specialDeck.slice();
        if (!deck.length) deck = specialDeck.slice();
        setDeck(shuffle(deck));
        setIdx(0);
        _refreshRangeOptions();
      } else if (!isSpecial && _preSpecialDeck) {
        setDeck(_preSpecialDeck);
        const deckLen = getDeckSnapshot().length;
        setIdx(deckLen ? _preSpecialIdx % deckLen : 0);
        _preSpecialDeck = null;
        _refreshRangeOptions();
      }
      render();
    };
    selMode?.addEventListener('change', onChange as EventListener);
    return () => selMode?.removeEventListener('change', onChange as EventListener);
  }, []);

  return null;
}

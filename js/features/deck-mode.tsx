// Vymova — js/features/deck-mode.tsx
// Special-mode deck management: sel-mode listener filters the deck to whatever
// target language(s) the current pair involves (see mode-utils.ts getWordsForMode).
import { useEffect, type ReactElement } from 'react';
import { getActiveTagSetSnapshot } from '../../src/deck-filter-store.ts';
import { getDeckSnapshot, getIdxSnapshot } from '../../src/deck-store.ts';
import { subscribeMode, setMode } from '../../src/mode-store.ts';
import { W } from '../../data/words-data/words.js';
import { getMode, getRawMode, getWordsForMode, isSpecialMode, noTranslationsKey } from './mode-utils.ts';
import { t } from './i18n.ts';
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
    // On mount: if a special mode was already set (restored from localStorage
    // before this subscription registered), apply the filtered deck immediately.
    const initMode = getRawMode();
    if (_isSpecialMode(initMode)) {
      const specialDeck = _getSpecialDeck(initMode);
      if (specialDeck.length) {
        if (!_preSpecialDeck) {
          // Snapshot a copy, not the live array reference — getDeckSnapshot()
          // returns the store's actual deck array, so stashing it directly
          // would let any future in-place mutation of "the current deck"
          // silently corrupt this restore-point too.
          _preSpecialDeck = getDeckSnapshot().slice();
          _preSpecialIdx = getIdxSnapshot();
        }
        const ats = getActiveTagSetSnapshot();
        let deck = ats
          ? specialDeck.filter((w) => (ats as Set<string>).has(w[0]))
          : specialDeck.slice();
        if (!deck.length) deck = specialDeck.slice();
        setDeck(shuffle(deck));
        setIdx(0);
        render();
      }
    }

    const onModeChange = (): void => {
      stopAuto();
      const m = getRawMode();
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
          setMode('en');
          render();
          return;
        }
        if (!_preSpecialDeck) {
          // Snapshot a copy, not the live array reference — getDeckSnapshot()
          // returns the store's actual deck array, so stashing it directly
          // would let any future in-place mutation of "the current deck"
          // silently corrupt this restore-point too.
          _preSpecialDeck = getDeckSnapshot().slice();
          _preSpecialIdx = getIdxSnapshot();
        }
        const ats = getActiveTagSetSnapshot();
        let deck = ats
          ? specialDeck.filter((w) => (ats as Set<string>).has(w[0]))
          : specialDeck.slice();
        if (!deck.length) deck = specialDeck.slice();
        setDeck(shuffle(deck));
        setIdx(0);
      } else if (!isSpecial && _preSpecialDeck) {
        setDeck(_preSpecialDeck);
        const deckLen = getDeckSnapshot().length;
        setIdx(deckLen ? _preSpecialIdx % deckLen : 0);
        _preSpecialDeck = null;
      }
      render();
    };
    return subscribeMode(onModeChange);
  }, []);

  return null;
}

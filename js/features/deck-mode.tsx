// English Words App — js/features/deck-mode.tsx
// ES/FR mode deck management: sel-mode listener + _rebuildEsDeck / _rebuildFrDeck
import { useEffect, type ReactElement } from 'react';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { W_ES } from '../../data/words_es.js';
import { W_FR } from '../../data/words_fr.js';
import { W_IT } from '../../data/words_it.js';
import { W_PT } from '../../data/words_pt.js';
import { W_DE } from '../../data/words_de.js';
import { ES_MODES, FR_MODES, IT_MODES, PT_MODES, DE_MODES, getMode } from './mode-utils.ts';
import { t } from './i18n.ts';
import { _refreshRangeOptions } from './deck-filter.tsx';
import { render, setDeck, setIdx, stopAuto } from '../core/card-engine.ts';
import type { WordEntry } from '../../src/types.js';

let _esWords: WordEntry[] | null = null;

function _getEsDeck(): WordEntry[] {
  if (!_esWords) {
    _esWords = (W as unknown as WordEntry[]).filter(
      w => Object.prototype.hasOwnProperty.call(W_ES, w[0])
    );
  }
  return _esWords;
}

let _frWords: WordEntry[] | null = null;

function _getFrDeck(): WordEntry[] {
  if (!_frWords) {
    _frWords = (W as unknown as WordEntry[]).filter(
      w => Object.prototype.hasOwnProperty.call(W_FR, w[0])
    );
  }
  return _frWords;
}

let _itWords: WordEntry[] | null = null;

function _getItDeck(): WordEntry[] {
  if (!_itWords) {
    _itWords = (W as unknown as WordEntry[]).filter(
      w => Object.prototype.hasOwnProperty.call(W_IT, w[0])
    );
  }
  return _itWords;
}

let _ptWords: WordEntry[] | null = null;

function _getPtDeck(): WordEntry[] {
  if (!_ptWords) {
    _ptWords = (W as unknown as WordEntry[]).filter(
      w => Object.prototype.hasOwnProperty.call(W_PT, w[0])
    );
  }
  return _ptWords;
}

let _deWords: WordEntry[] | null = null;

function _getDeDeck(): WordEntry[] {
  if (!_deWords) {
    _deWords = (W as unknown as WordEntry[]).filter(
      w => Object.prototype.hasOwnProperty.call(W_DE, w[0])
    );
  }
  return _deWords;
}

let _esFrWords: WordEntry[] | null = null;

// Words usable for ES⇄FR mode: need both an ES and an FR translation (bridged via EN).
function _getEsFrDeck(): WordEntry[] {
  if (!_esFrWords) {
    _esFrWords = (W as unknown as WordEntry[]).filter(
      w => Object.prototype.hasOwnProperty.call(W_ES, w[0]) && Object.prototype.hasOwnProperty.call(W_FR, w[0])
    );
  }
  return _esFrWords;
}

let _preSpecialDeck: WordEntry[] | null = null;
let _preSpecialIdx = 0;

const ES_FR_MODES = new Set(['es-fr', 'fr-es']);

function _getSpecialDeck(m: string): WordEntry[] {
  if (ES_FR_MODES.has(m)) return _getEsFrDeck();
  if (ES_MODES.has(m))    return _getEsDeck();
  if (FR_MODES.has(m))    return _getFrDeck();
  if (IT_MODES.has(m))    return _getItDeck();
  if (PT_MODES.has(m))    return _getPtDeck();
  if (DE_MODES.has(m))    return _getDeDeck();
  return [];
}

function _noTransKey(m: string): string {
  if (ES_FR_MODES.has(m)) return 'deck.noEsFrTranslations';
  if (ES_MODES.has(m))    return 'deck.noEsTranslations';
  if (FR_MODES.has(m))    return 'deck.noFrTranslations';
  if (IT_MODES.has(m))    return 'deck.noItTranslations';
  if (PT_MODES.has(m))    return 'deck.noPtTranslations';
  return 'deck.noDeTranslations';
}

export function _isSpecialMode(m: string): boolean {
  return ES_MODES.has(m) || FR_MODES.has(m) || IT_MODES.has(m) || PT_MODES.has(m) || DE_MODES.has(m);
}

export function _rebuildEsDeck(): void {
  const m = getMode();
  if (!_isSpecialMode(m)) return;
  const specialDeck = _getSpecialDeck(m);
  const ats    = state._activeTagSet as Set<string> | null;
  let deck     = ats ? specialDeck.filter(w => (ats as Set<string>).has(w[0])) : specialDeck.slice();
  if (!deck.length) deck = specialDeck.slice();
  setDeck(deck);
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
      const selRangeEl = document.getElementById('sel-range') as HTMLSelectElement | null;
      const specialDeck = _getSpecialDeck(initMode);
      if (specialDeck.length) {
        if (!_preSpecialDeck) {
          _preSpecialDeck = state.deck;
          _preSpecialIdx  = state.idx;
          if (selRangeEl) selRangeEl.disabled = true;
        }
        const ats = state._activeTagSet as Set<string> | null;
        let deck = ats ? specialDeck.filter(w => (ats as Set<string>).has(w[0])) : specialDeck.slice();
        if (!deck.length) deck = specialDeck.slice();
        setDeck(deck);
        setIdx(0);
        _refreshRangeOptions();
        render();
      }
    }

    const onChange = function(this: HTMLSelectElement) {
      stopAuto();
      const m          = this.value;
      const isSpecial  = _isSpecialMode(m);
      const selRangeEl = document.getElementById('sel-range') as HTMLSelectElement | null;
      const selTagEl   = document.getElementById('sel-tag')   as HTMLSelectElement | null;

      if (isSpecial) {
        const specialDeck = _getSpecialDeck(m);
        if (!specialDeck.length) {
          const _mt = document.getElementById('milestone-toast');
          if (_mt) {
            _mt.textContent = t(_noTransKey(m));
            _mt.className = 'milestone-toast'; void _mt.offsetWidth;
            _mt.className = 'milestone-toast show';
            setTimeout(() => { _mt.className = 'milestone-toast'; }, 3500);
          }
          this.value = 'en';
          render();
          return;
        }
        if (!_preSpecialDeck) {
          _preSpecialDeck = state.deck;
          _preSpecialIdx  = state.idx;
          if (selRangeEl) selRangeEl.disabled = true;
        }
        const ats = state._activeTagSet as Set<string> | null;
        let deck = ats ? specialDeck.filter(w => (ats as Set<string>).has(w[0])) : specialDeck.slice();
        if (!deck.length) deck = specialDeck.slice();
        setDeck(deck);
        setIdx(0);
        _refreshRangeOptions();
      } else if (!isSpecial && _preSpecialDeck) {
        setDeck(_preSpecialDeck);
        const deckLen = (state.deck).length;
        setIdx(deckLen ? _preSpecialIdx % deckLen : 0);
        _preSpecialDeck = null;
        if (selRangeEl) selRangeEl.disabled = false;
        if (selTagEl)   selTagEl.disabled   = false;
        _refreshRangeOptions();
      }
      render();
    };
    selMode?.addEventListener('change', onChange as EventListener);
    return () => selMode?.removeEventListener('change', onChange as EventListener);
  }, []);

  return null;
}

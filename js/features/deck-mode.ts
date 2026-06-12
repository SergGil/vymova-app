// English Words App — js/features/deck-mode.ts
// ES/FR mode deck management: sel-mode listener + _rebuildEsDeck / _rebuildFrDeck
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { W_ES } from '../../data/words_es.js';
import { W_FR } from '../../data/words_fr.js';
import { ES_MODES, FR_MODES, getMode } from './mode-utils.ts';
import { t } from './i18n.ts';
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

window._rebuildEsDeck = function(): void {
  const m = getMode();
  if (!ES_MODES.has(m)) return;
  const esDeck = ES_FR_MODES.has(m) ? _getEsFrDeck() : _getEsDeck();
  const ats    = state._activeTagSet as Set<string> | null;
  let deck     = ats ? esDeck.filter(w => (ats as Set<string>).has(w[0])) : esDeck.slice();
  if (!deck.length) deck = esDeck.slice();
  (window as any).setDeck(deck);
  (window as any).setIdx(0);
  (window as any).render?.();
};

window._rebuildFrDeck = function(): void {
  if (!FR_MODES.has(getMode())) return;
  const frDeck = _getFrDeck();
  const ats    = state._activeTagSet as Set<string> | null;
  let deck     = ats ? frDeck.filter(w => (ats as Set<string>).has(w[0])) : frDeck.slice();
  if (!deck.length) deck = frDeck.slice();
  (window as any).setDeck(deck);
  (window as any).setIdx(0);
  (window as any).render?.();
};

document.getElementById('sel-mode')!.addEventListener('change', function() {
  (window as any).stopAuto?.();
  const m          = (this as HTMLSelectElement).value;
  const isEsFr     = ES_FR_MODES.has(m);
  const isEs       = ES_MODES.has(m);
  const isFr       = FR_MODES.has(m);
  const isSpecial  = isEs || isFr;
  const selRangeEl = document.getElementById('sel-range') as HTMLSelectElement | null;
  const selTagEl   = document.getElementById('sel-tag')   as HTMLSelectElement | null;

  if (isSpecial) {
    const specialDeck = isEsFr ? _getEsFrDeck() : isEs ? _getEsDeck() : _getFrDeck();
    if (!specialDeck.length) {
      const _mt = document.getElementById('milestone-toast');
      if (_mt) {
        _mt.textContent = t(isEsFr ? 'deck.noEsFrTranslations' : isEs ? 'deck.noEsTranslations' : 'deck.noFrTranslations');
        _mt.className = 'milestone-toast'; void _mt.offsetWidth;
        _mt.className = 'milestone-toast show';
        setTimeout(() => { _mt.className = 'milestone-toast'; }, 3500);
      }
      (this as HTMLSelectElement).value = 'en';
      (window as any).render?.();
      return;
    }
    if (!_preSpecialDeck) {
      _preSpecialDeck = (window as any).deck as WordEntry[];
      _preSpecialIdx  = (window as any).idx as number;
      if (selRangeEl) selRangeEl.disabled = true;
    }
    const ats = state._activeTagSet as Set<string> | null;
    let deck = ats ? specialDeck.filter(w => (ats as Set<string>).has(w[0])) : specialDeck.slice();
    if (!deck.length) deck = specialDeck.slice();
    (window as any).setDeck(deck);
    (window as any).setIdx(0);
  } else if (!isSpecial && _preSpecialDeck) {
    (window as any).setDeck(_preSpecialDeck);
    const deckLen = ((window as any).deck as WordEntry[]).length;
    (window as any).setIdx(deckLen ? _preSpecialIdx % deckLen : 0);
    _preSpecialDeck = null;
    if (selRangeEl) selRangeEl.disabled = false;
    if (selTagEl)   selTagEl.disabled   = false;
  }
  (window as any).render?.();
});

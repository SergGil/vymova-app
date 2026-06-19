import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { state } from '../../src/state.ts';
import type { WordEntry } from '../../src/types.ts';
import {
  getMode, getFrontLang, getResolvedMode, getActiveKnown, computeCardView,
  esEntry, frEntry, itEntry, ptEntry, deEntry, heEntry, arEntry,
  ES_MODES, FR_MODES, IT_MODES, PT_MODES, DE_MODES, HE_MODES, AR_MODES,
} from '../../js/features/mode-utils.ts';

const abandon: WordEntry = ['abandon', 'покинути', 'They had to <b>abandon</b> the ship.', 'Вони мусили <b>покинути</b> корабель.'];

describe('mode-utils.ts', () => {
  afterEach(() => {
    document.body.innerHTML = '';
    state._mode = 'en';
  });

  describe('getMode', () => {
    it('returns "en" when #sel-mode is absent', () => {
      expect(getMode()).toBe('en');
    });

    it('returns the selected value', () => {
      document.body.innerHTML = `<select id="sel-mode"><option value="en-es" selected>x</option></select>`;
      (document.getElementById('sel-mode') as HTMLSelectElement).value = 'en-es';
      expect(getMode()).toBe('en-es');
    });

    it('resolves "mix" mode to either mixA or mixB based on data attributes', () => {
      document.body.innerHTML = `<select id="sel-mode"><option value="mix">mix</option></select>`;
      const sel = document.getElementById('sel-mode') as HTMLSelectElement;
      sel.value = 'mix';
      sel.dataset.mixA = 'en-es';
      sel.dataset.mixB = 'es-en';
      const results = new Set<string>();
      for (let i = 0; i < 30; i++) results.add(getMode());
      expect(results).toEqual(new Set(['en-es', 'es-en']));
    });
  });

  describe('getFrontLang', () => {
    it('maps modes to their front-side language', () => {
      expect(getFrontLang('en')).toBe('EN');
      expect(getFrontLang('ua')).toBe('UA');
      expect(getFrontLang('es-en')).toBe('ES');
      expect(getFrontLang('en-es')).toBe('EN');
      expect(getFrontLang('fr-ua')).toBe('FR');
      expect(getFrontLang('it-en')).toBe('IT');
      expect(getFrontLang('pt-ua')).toBe('PT');
      expect(getFrontLang('de-en')).toBe('DE');
      expect(getFrontLang('he-en')).toBe('HE');
      expect(getFrontLang('ar-ua')).toBe('AR');
      expect(getFrontLang('unknown-mode')).toBe('EN');
    });
  });

  describe('getResolvedMode', () => {
    it('returns state._mode when set', () => {
      state._mode = 'en-es';
      expect(getResolvedMode()).toBe('en-es');
    });

    it('falls back to getMode() when state._mode is empty', () => {
      state._mode = '';
      expect(getResolvedMode()).toBe('en');
    });
  });

  describe('getActiveKnown', () => {
    const fallback = new Set(['fallback']);

    it('returns the given set for "en"/"ua" modes', () => {
      state._mode = 'en';
      expect(getActiveKnown(fallback)).toBe(fallback);
    });

    it('returns state.knownEs for ES modes', () => {
      state._mode = 'en-es';
      expect(getActiveKnown(fallback)).toBe(state.knownEs);
    });

    it('returns state.knownFr for FR modes', () => {
      state._mode = 'fr-en';
      expect(getActiveKnown(fallback)).toBe(state.knownFr);
    });

    it('returns state.knownDe for DE modes', () => {
      state._mode = 'de-ua';
      expect(getActiveKnown(fallback)).toBe(state.knownDe);
    });

    it('returns state.knownHe for HE modes', () => {
      state._mode = 'he-ua';
      expect(getActiveKnown(fallback)).toBe(state.knownHe);
    });

    it('returns state.knownAr for AR modes', () => {
      state._mode = 'en-ar';
      expect(getActiveKnown(fallback)).toBe(state.knownAr);
    });
  });

  describe('mode sets', () => {
    it('contain expected pairs', () => {
      expect(ES_MODES.has('en-es')).toBe(true);
      expect(FR_MODES.has('es-fr')).toBe(true);
      expect(IT_MODES.has('it-en')).toBe(true);
      expect(PT_MODES.has('pt-ua')).toBe(true);
      expect(DE_MODES.has('de-en')).toBe(true);
      expect(HE_MODES.has('en-he')).toBe(true);
      expect(AR_MODES.has('ar-ua')).toBe(true);
    });
  });

  describe('entry lookups', () => {
    it('returns a translation entry for a known word', () => {
      expect(esEntry('abandon')).toEqual(['abandonar', expect.any(String)]);
      expect(frEntry('abandon')).toEqual(['abandonner', expect.any(String)]);
      expect(heEntry('abandon')).toEqual([expect.any(String), expect.any(String)]);
      expect(arEntry('abandon')).toEqual([expect.any(String), expect.any(String)]);
    });

    it('returns null for unknown words', () => {
      expect(esEntry('___nope___')).toBeNull();
      expect(frEntry('___nope___')).toBeNull();
      expect(itEntry('___nope___')).toBeNull();
      expect(ptEntry('___nope___')).toBeNull();
      expect(deEntry('___nope___')).toBeNull();
      expect(heEntry('___nope___')).toBeNull();
      expect(arEntry('___nope___')).toBeNull();
    });
  });

  describe('computeCardView', () => {
    it('"en" mode shows English front / Ukrainian back with bolded examples', () => {
      const view = computeCardView(abandon, 'en');
      expect(view.FRONT_LANG).toBe('EN');
      expect(view.frontWord).toBe('abandon');
      expect(view.backWord).toBe('покинути');
      expect(view.exenHtml).toContain('<b>');
    });

    it('"ua" mode shows Ukrainian front / English back', () => {
      const view = computeCardView(abandon, 'ua');
      expect(view.FRONT_LANG).toBe('UA');
      expect(view.frontWord).toBe('покинути');
      expect(view.backWord).toBe('abandon');
    });

    it('"en-es" mode resolves the Spanish translation as the back word', () => {
      const view = computeCardView(abandon, 'en-es');
      expect(view.FRONT_LANG).toBe('EN');
      expect(view.frontWord).toBe('abandon');
      expect(view.backWord).toBe('abandonar');
    });

    it('"es-fr" mode resolves both front and back from translation tables', () => {
      const view = computeCardView(abandon, 'es-fr');
      expect(view.FRONT_LANG).toBe('ES');
      expect(view.frontWord).toBe('abandonar');
      expect(view.backWord).toBe('abandonner');
    });

    it('falls back to EN/EN-UA pair for unknown modes', () => {
      const view = computeCardView(abandon, 'unknown-mode');
      expect(view.FRONT_LANG).toBe('EN');
      expect(view.frontWord).toBe('abandon');
      expect(view.backWord).toBe('покинути');
      expect(view.exenHtml).toBe('');
      expect(view.exuaHtml).toBe('');
    });

    it('"en-he" mode resolves the Hebrew translation as the back word and flags it RTL', () => {
      const view = computeCardView(abandon, 'en-he');
      expect(view.FRONT_LANG).toBe('EN');
      expect(view.frontWord).toBe('abandon');
      expect(view.backWord).toBe(heEntry('abandon')?.[0]);
      expect(view.frontRtl).toBe(false);
      expect(view.backRtl).toBe(true);
    });

    it('"he-en" mode shows Hebrew front and flags it RTL', () => {
      const view = computeCardView(abandon, 'he-en');
      expect(view.FRONT_LANG).toBe('HE');
      expect(view.frontWord).toBe(heEntry('abandon')?.[0]);
      expect(view.backWord).toBe('abandon');
      expect(view.frontRtl).toBe(true);
      expect(view.backRtl).toBe(false);
    });

    it('"en-ar" mode resolves the Arabic translation as the back word and flags it RTL', () => {
      const view = computeCardView(abandon, 'en-ar');
      expect(view.FRONT_LANG).toBe('EN');
      expect(view.backWord).toBe(arEntry('abandon')?.[0]);
      expect(view.frontRtl).toBe(false);
      expect(view.backRtl).toBe(true);
    });

    it('"ar-en" mode shows Arabic front and flags it RTL', () => {
      const view = computeCardView(abandon, 'ar-en');
      expect(view.FRONT_LANG).toBe('AR');
      expect(view.frontWord).toBe(arEntry('abandon')?.[0]);
      expect(view.frontRtl).toBe(true);
      expect(view.backRtl).toBe(false);
    });
  });
});

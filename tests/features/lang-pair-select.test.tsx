import { describe, it, expect, beforeEach, vi } from 'vitest';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { LangPairSelect } from '../../js/features/lang-pair-select.tsx';

// Stub word files so ensureLangTableLoaded resolves instantly (no real file I/O)
// and areLangTablesReady returns true synchronously — tests only verify UI state.
vi.mock('../../data/words-data/words_es.js', () => ({ W_ES: {} }));
vi.mock('../../data/words-data/words_fr.js', () => ({ W_FR: {} }));
vi.mock('../../data/words-data/words_it.js', () => ({ W_IT: {} }));
vi.mock('../../data/words-data/words_pt.js', () => ({ W_PT: {} }));
vi.mock('../../data/words-data/words_de.js', () => ({ W_DE: {} }));
vi.mock('../../data/words-data/words_he.js', () => ({ W_HE: {} }));
vi.mock('../../data/words-data/words_ar.js', () => ({ W_AR: {} }));
vi.mock('../../data/words-data/words_pl.js', () => ({ W_PL: {} }));
vi.mock('../../data/words-data/words_zh.js', () => ({ W_ZH: {} }));
vi.mock('../../data/words-data/words_el.js', () => ({ W_EL: {} }));
vi.mock('../../data/words-data/words_ja.js', () => ({ W_JA: {} }));
vi.mock('../../data/words-data/words_tr.js', () => ({ W_TR: {} }));
vi.mock('../../data/words-data/words_nl.js', () => ({ W_NL: {} }));
vi.mock('../../data/words-data/words_vi.js', () => ({ W_VI: {} }));
vi.mock('../../data/words-data/words_hi.js', () => ({ W_HI: {} }));
vi.mock('../../data/words-data/words_bn.js', () => ({ W_BN: {} }));
vi.mock('../../data/words-data/words_id.js', () => ({ W_ID: {} }));
vi.mock('../../data/words-data/words_pcm.js', () => ({ W_PCM: {} }));
vi.mock('../../data/words-data/words_ko.js', () => ({ W_KO: {} }));
vi.mock('../../data/words-data/words_fa.js', () => ({ W_FA: {} }));
vi.mock('../../data/words-data/words_sw.js', () => ({ W_SW: {} }));
vi.mock('../../data/words-data/words_ms.js', () => ({ W_MS: {} }));
vi.mock('../../data/words-data/words_th.js', () => ({ W_TH: {} }));
vi.mock('../../data/words-data/words_az.js', () => ({ W_AZ: {} }));
vi.mock('../../data/words-data/words_ro.js', () => ({ W_RO: {} }));
vi.mock('../../data/words-data/words_hu.js', () => ({ W_HU: {} }));
vi.mock('../../data/words-data/words_cs.js', () => ({ W_CS: {} }));
vi.mock('../../data/words-data/words_kk.js', () => ({ W_KK: {} }));
vi.mock('../../data/words-data/words_sv.js', () => ({ W_SV: {} }));
vi.mock('../../data/words-data/words_ka.js', () => ({ W_KA: {} }));
vi.mock('../../data/words-data/words_hr.js', () => ({ W_HR: {} }));
vi.mock('../../data/words-data/words_sr.js', () => ({ W_SR: {} }));
vi.mock('../../data/words-data/words_bs.js', () => ({ W_BS: {} }));
vi.mock('../../data/words-data/words_bg.js', () => ({ W_BG: {} }));
vi.mock('../../data/words-data/words_sk.js', () => ({ W_SK: {} }));
vi.mock('../../data/words-data/words_hy.js', () => ({ W_HY: {} }));
vi.mock('../../data/words-data/words_da.js', () => ({ W_DA: {} }));
vi.mock('../../data/words-data/words_fi.js', () => ({ W_FI: {} }));
vi.mock('../../data/words-data/words_no.js', () => ({ W_NO: {} }));
vi.mock('../../data/words-data/words_la.js', () => ({ W_LA: {} }));
vi.mock('../../data/words-data/words_lt.js', () => ({ W_LT: {} }));
vi.mock('../../data/words-data/words_lv.js', () => ({ W_LV: {} }));
vi.mock('../../data/words-data/words_et.js', () => ({ W_ET: {} }));
vi.mock('../../data/words-data/words_sl.js', () => ({ W_SL: {} }));
vi.mock('../../data/words-data/words_mk.js', () => ({ W_MK: {} }));
vi.mock('../../data/words-data/words_sq.js', () => ({ W_SQ: {} }));
vi.mock('../../data/words-data/words_is.js', () => ({ W_IS: {} }));
vi.mock('../../data/words-data/words_cy.js', () => ({ W_CY: {} }));
vi.mock('../../data/words-data/words_ga.js', () => ({ W_GA: {} }));
vi.mock('../../data/words-data/words_tl.js', () => ({ W_TL: {} }));
vi.mock('../../data/words-data/words_mn.js', () => ({ W_MN: {} }));
vi.mock('../../data/words-data/words_uz.js', () => ({ W_UZ: {} }));
vi.mock('../../data/words-data/words_am.js', () => ({ W_AM: {} }));
vi.mock('../../data/words-data/words_eo.js', () => ({ W_EO: {} }));
vi.mock('../../data/words-data/words_ta.js', () => ({ W_TA: {} }));
vi.mock('../../data/words-data/words_pa.js', () => ({ W_PA: {} }));
vi.mock('../../data/words-data/words_zu.js', () => ({ W_ZU: {} }));
vi.mock('../../data/words-data/words_af.js', () => ({ W_AF: {} }));
vi.mock('../../data/words-data/words_ky.js', () => ({ W_KY: {} }));
vi.mock('../../data/words-data/words_tg.js', () => ({ W_TG: {} }));
vi.mock('../../data/words-data/words_tk.js', () => ({ W_TK: {} }));
vi.mock('../../data/words-data/words_ug.js', () => ({ W_UG: {} }));
vi.mock('../../data/words-data/words_eu.js', () => ({ W_EU: {} }));
vi.mock('../../data/words-data/words_ca.js', () => ({ W_CA: {} }));
vi.mock('../../data/words-data/words_gl.js', () => ({ W_GL: {} }));
vi.mock('../../data/words-data/words_mt.js', () => ({ W_MT: {} }));
vi.mock('../../data/words-data/words_lb.js', () => ({ W_LB: {} }));
vi.mock('../../data/words-data/words_ht.js', () => ({ W_HT: {} }));
vi.mock('../../data/words-data/words_bo.js', () => ({ W_BO: {} }));
vi.mock('../../data/words-data/words_my.js', () => ({ W_MY: {} }));
vi.mock('../../data/words-data/words_km.js', () => ({ W_KM: {} }));
vi.mock('../../data/words-data/words_lo.js', () => ({ W_LO: {} }));
vi.mock('../../data/words-data/words_ne.js', () => ({ W_NE: {} }));
vi.mock('../../data/words-data/words_si.js', () => ({ W_SI: {} }));
vi.mock('../../data/words-data/words_ur.js', () => ({ W_UR: {} }));
vi.mock('../../data/words-data/words_te.js', () => ({ W_TE: {} }));
vi.mock('../../data/words-data/words_ml.js', () => ({ W_ML: {} }));
vi.mock('../../data/words-data/words_kn.js', () => ({ W_KN: {} }));
vi.mock('../../data/words-data/words_mr.js', () => ({ W_MR: {} }));
vi.mock('../../data/words-data/words_gu.js', () => ({ W_GU: {} }));
vi.mock('../../data/words-data/words_or.js', () => ({ W_OR: {} }));
vi.mock('../../data/words-data/words_as.js', () => ({ W_AS: {} }));
vi.mock('../../data/words-data/words_sd.js', () => ({ W_SD: {} }));
vi.mock('../../data/words-data/words_ps.js', () => ({ W_PS: {} }));
vi.mock('../../data/words-data/words_so.js', () => ({ W_SO: {} }));
vi.mock('../../data/words-data/words_ha.js', () => ({ W_HA: {} }));
vi.mock('../../data/words-data/words_yo.js', () => ({ W_YO: {} }));
vi.mock('../../data/words-data/words_ig.js', () => ({ W_IG: {} }));
vi.mock('../../data/words-data/words_ti.js', () => ({ W_TI: {} }));
vi.mock('../../data/words-data/words_wo.js', () => ({ W_WO: {} }));
vi.mock('../../data/words-data/words_mg.js', () => ({ W_MG: {} }));
vi.mock('../../data/words-data/words_xh.js', () => ({ W_XH: {} }));
vi.mock('../../data/words-data/words_sn.js', () => ({ W_SN: {} }));
vi.mock('../../data/words-data/words_ny.js', () => ({ W_NY: {} }));
vi.mock('../../data/words-data/words_fj.js', () => ({ W_FJ: {} }));
vi.mock('../../data/words-data/words_sm.js', () => ({ W_SM: {} }));
vi.mock('../../data/words-data/words_to.js', () => ({ W_TO: {} }));
vi.mock('../../data/words-data/words_mi.js', () => ({ W_MI: {} }));
vi.mock('../../data/words-data/words_haw.js', () => ({ W_HAW: {} }));
vi.mock('../../data/words-data/words_jv.js', () => ({ W_JV: {} }));
vi.mock('../../data/words-data/words_su.js', () => ({ W_SU: {} }));
vi.mock('../../data/words-data/words_gd.js', () => ({ W_GD: {} }));
vi.mock('../../data/words-data/words_br.js', () => ({ W_BR: {} }));
vi.mock('../../data/words-data/words_kw.js', () => ({ W_KW: {} }));
vi.mock('../../data/words-data/words_gv.js', () => ({ W_GV: {} }));
vi.mock('../../data/words-data/words_fo.js', () => ({ W_FO: {} }));
vi.mock('../../data/words-data/words_oc.js', () => ({ W_OC: {} }));
vi.mock('../../data/words-data/words_co.js', () => ({ W_CO: {} }));
vi.mock('../../data/words-data/words_sc.js', () => ({ W_SC: {} }));
vi.mock('../../data/words-data/words_fy.js', () => ({ W_FY: {} }));
vi.mock('../../data/words-data/words_yi.js', () => ({ W_YI: {} }));
vi.mock('../../data/words-data/words_lad.js', () => ({ W_LAD: {} }));
vi.mock('../../data/words-data/words_qu.js', () => ({ W_QU: {} }));
vi.mock('../../data/words-data/words_gn.js', () => ({ W_GN: {} }));
vi.mock('../../data/words-data/words_ay.js', () => ({ W_AY: {} }));
vi.mock('../../data/words-data/words_dz.js', () => ({ W_DZ: {} }));
vi.mock('../../data/words-data/words_dv.js', () => ({ W_DV: {} }));
vi.mock('../../data/words-data/words_tet.js', () => ({ W_TET: {} }));
vi.mock('../../data/words-data/words_be.js', () => ({ W_BE: {} }));
vi.mock('../../data/words-data/words_qya.js', () => ({ W_QYA: {} }));
vi.mock('../../data/words-data/words_sjn.js', () => ({ W_SJN: {} }));
vi.mock('../../data/words-data/words_ku.js', () => ({ W_KU: {} }));
vi.mock('../../data/words-data/words_om.js', () => ({ W_OM: {} }));
vi.mock('../../data/words-data/words_ln.js', () => ({ W_LN: {} }));
vi.mock('../../data/words-data/words_bho.js', () => ({ W_BHO: {} }));
vi.mock('../../data/words-data/words_ceb.js', () => ({ W_CEB: {} }));
vi.mock('../../data/words-data/words_rm.js', () => ({ W_RM: {} }));
vi.mock('../../data/words-data/words_ty.js', () => ({ W_TY: {} }));
vi.mock('../../data/words-data/words_ch.js', () => ({ W_CH: {} }));
vi.mock('../../data/words-data/words_mh.js', () => ({ W_MH: {} }));
vi.mock('../../data/words-data/words_pau.js', () => ({ W_PAU: {} }));
vi.mock('../../data/words-data/words_nah.js', () => ({ W_NAH: {} }));
vi.mock('../../data/words-data/words_nv.js', () => ({ W_NV: {} }));
vi.mock('../../data/words-data/words_tlh.js', () => ({ W_TLH: {} }));
vi.mock('../../data/words-data/words_val.js', () => ({ W_VAL: {} }));
vi.mock('../../data/words-data/words_dth.js', () => ({ W_DTH: {} }));
import { ensureLangTableLoaded } from '../../js/features/mode/mode-utils.ts';
import { getModeStateSnapshot, subscribeMode } from '../../src/mode-store.ts';

const NEW_LANGS = [
  'hi', 'bn', 'id', 'pcm', 'ko', 'fa', 'sw', 'ms', 'th', 'az', 'ro', 'hu', 'cs', 'kk', 'sv',
  'ka', 'hr', 'sr', 'bs', 'bg', 'sk', 'hy', 'da', 'fi', 'no', 'la',
  'lt', 'lv', 'et', 'sl', 'mk', 'sq', 'is', 'cy', 'ga', 'tl', 'mn', 'uz', 'am', 'eo',
  'ta', 'pa', 'zu', 'af', 'ky', 'tg', 'tk', 'ug', 'eu', 'ca', 'gl', 'mt', 'lb', 'ht', 'bo',
  'my', 'km', 'lo', 'ne', 'si',
  'ur', 'te', 'ml', 'kn', 'mr', 'gu', 'or', 'as', 'sd', 'ps',
  'so', 'ha', 'yo', 'ig', 'ti', 'wo', 'mg', 'xh', 'sn', 'ny',
  'fj', 'sm', 'to', 'mi', 'haw', 'jv', 'su',
  'gd', 'br', 'kw', 'gv', 'fo', 'oc', 'co', 'sc', 'fy',
  'yi', 'lad', 'qu', 'gn', 'ay', 'dz', 'dv', 'tet', 'be', 'qya', 'sjn',
  'ku', 'om', 'ln', 'bho', 'ceb', 'rm', 'ty', 'ch', 'mh', 'pau', 'nah', 'nv', 'tlh',
  'val', 'dth',
];

function mountLangPairSelect(): void {
  const el = document.getElementById('lang-pair-select')!;
  act(() => {
    createRoot(el).render(<LangPairSelect />);
  });
}

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function setupDom(): void {
  document.body.innerHTML = `<span id="lang-pair-select"></span>`;
}

function dropdowns(): HTMLDivElement[] {
  return Array.from(document.querySelectorAll('#lang-pair-select .flagdd')) as HTMLDivElement[];
}

// Opens a dropdown (by its position: 0=know, 1=learn, 2=direction) and clicks the option with the given value.
function selectOption(index: number, value: string): void {
  const dd = dropdowns()[index];
  act(() => {
    (dd.querySelector('.flagdd-btn') as HTMLButtonElement).click();
  });
  act(() => {
    (dd.querySelector(`.flagdd-item[data-value="${value}"]`) as HTMLButtonElement).click();
  });
}

describe('lang-pair-select', () => {
  beforeAll(async () => {
    // Preload all lang tables (from stubs above) so areLangTablesReady()
    // returns true and persist() takes the synchronous applyMode path.
    await Promise.all(
      ['es', 'fr', 'it', 'pt', 'de', 'he', 'ar', 'pl', 'zh', 'el', 'ja', 'tr', 'nl', 'vi', ...NEW_LANGS].map(
        ensureLangTableLoaded,
      ),
    );
  });

  beforeEach(() => {
    localStorage.clear();
    setupDom();
  });

  it('renders three flag dropdowns with options', () => {
    act(() => {
      mountLangPairSelect();
    });
    const dds = dropdowns();
    expect(dds.length).toBe(3);

    act(() => {
      (dds[0].querySelector('.flagdd-btn') as HTMLButtonElement).click();
    });
    expect(dds[0].querySelectorAll('.flagdd-item').length).toBe(138); // know: ua/en/es/fr/it/pt/de/he/ar/pl/zh/el/ja/tr/nl/vi + 122 new langs

    act(() => {
      (dds[1].querySelector('.flagdd-btn') as HTMLButtonElement).click();
    });
    expect(dds[1].querySelectorAll('.flagdd-item').length).toBe(137); // learn options for know=ua

    act(() => {
      (dds[2].querySelector('.flagdd-btn') as HTMLButtonElement).click();
    });
    expect(dds[2].querySelectorAll('.flagdd-item').length).toBe(3); // direction: fwd/rev/mix
  });

  it('restores pair from localStorage', () => {
    localStorage.setItem('ew_know_lang', 'ua');
    localStorage.setItem('ew_learn_lang', 'es');
    localStorage.setItem('ew_direction', 'fwd');
    act(() => {
      mountLangPairSelect();
    });
    const [knowDD, learnDD] = dropdowns();
    expect((knowDD.querySelector('.flagdd-btn') as HTMLButtonElement).dataset.value).toBe('ua');
    expect((learnDD.querySelector('.flagdd-btn') as HTMLButtonElement).dataset.value).toBe('es');
  });

  it(
    'changing "know" updates the mode store and notifies subscribers',
    () => {
      act(() => {
        mountLangPairSelect();
      });
      let changed = false;
      const unsubscribe = subscribeMode(() => {
        changed = true;
      });
      selectOption(0, 'es');
      expect(getModeStateSnapshot().mode).toBe('en-es');
      expect(changed).toBe(true);
      unsubscribe();
    },
    300000,
  );

  it('changing "learn" updates the mode store', () => {
    act(() => {
      mountLangPairSelect();
    });
    selectOption(1, 'fr');
    expect(getModeStateSnapshot().mode).toBe('fr-ua');
  });

  it('selecting a value closes the dropdown', () => {
    act(() => {
      mountLangPairSelect();
    });
    selectOption(1, 'fr');
    expect(dropdowns()[1].querySelector('.flagdd-list')).toBeNull();
  });
});

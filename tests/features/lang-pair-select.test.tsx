import { describe, it, expect, beforeEach, vi } from 'vitest';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { LangPairSelect } from '../../js/features/lang-pair-select.tsx';

// Stub word files so ensureLangTableLoaded resolves instantly (no real file I/O)
// and areLangTablesReady returns true synchronously — tests only verify UI state.
vi.mock('../../data/words_es.js', () => ({ W_ES: {} }));
vi.mock('../../data/words_fr.js', () => ({ W_FR: {} }));
vi.mock('../../data/words_it.js', () => ({ W_IT: {} }));
vi.mock('../../data/words_pt.js', () => ({ W_PT: {} }));
vi.mock('../../data/words_de.js', () => ({ W_DE: {} }));
vi.mock('../../data/words_he.js', () => ({ W_HE: {} }));
vi.mock('../../data/words_ar.js', () => ({ W_AR: {} }));
vi.mock('../../data/words_pl.js', () => ({ W_PL: {} }));
vi.mock('../../data/words_zh.js', () => ({ W_ZH: {} }));
vi.mock('../../data/words_el.js', () => ({ W_EL: {} }));
vi.mock('../../data/words_ja.js', () => ({ W_JA: {} }));
vi.mock('../../data/words_tr.js', () => ({ W_TR: {} }));
vi.mock('../../data/words_nl.js', () => ({ W_NL: {} }));
vi.mock('../../data/words_vi.js', () => ({ W_VI: {} }));
vi.mock('../../data/words_hi.js', () => ({ W_HI: {} }));
vi.mock('../../data/words_bn.js', () => ({ W_BN: {} }));
vi.mock('../../data/words_id.js', () => ({ W_ID: {} }));
vi.mock('../../data/words_pcm.js', () => ({ W_PCM: {} }));
vi.mock('../../data/words_ko.js', () => ({ W_KO: {} }));
vi.mock('../../data/words_fa.js', () => ({ W_FA: {} }));
vi.mock('../../data/words_sw.js', () => ({ W_SW: {} }));
vi.mock('../../data/words_ms.js', () => ({ W_MS: {} }));
vi.mock('../../data/words_th.js', () => ({ W_TH: {} }));
vi.mock('../../data/words_az.js', () => ({ W_AZ: {} }));
vi.mock('../../data/words_ro.js', () => ({ W_RO: {} }));
vi.mock('../../data/words_hu.js', () => ({ W_HU: {} }));
vi.mock('../../data/words_cs.js', () => ({ W_CS: {} }));
vi.mock('../../data/words_kk.js', () => ({ W_KK: {} }));
vi.mock('../../data/words_sv.js', () => ({ W_SV: {} }));
vi.mock('../../data/words_ka.js', () => ({ W_KA: {} }));
vi.mock('../../data/words_hr.js', () => ({ W_HR: {} }));
vi.mock('../../data/words_sr.js', () => ({ W_SR: {} }));
vi.mock('../../data/words_bs.js', () => ({ W_BS: {} }));
vi.mock('../../data/words_bg.js', () => ({ W_BG: {} }));
vi.mock('../../data/words_sk.js', () => ({ W_SK: {} }));
vi.mock('../../data/words_hy.js', () => ({ W_HY: {} }));
vi.mock('../../data/words_da.js', () => ({ W_DA: {} }));
vi.mock('../../data/words_fi.js', () => ({ W_FI: {} }));
vi.mock('../../data/words_no.js', () => ({ W_NO: {} }));
vi.mock('../../data/words_la.js', () => ({ W_LA: {} }));
vi.mock('../../data/words_lt.js', () => ({ W_LT: {} }));
vi.mock('../../data/words_lv.js', () => ({ W_LV: {} }));
vi.mock('../../data/words_et.js', () => ({ W_ET: {} }));
vi.mock('../../data/words_sl.js', () => ({ W_SL: {} }));
vi.mock('../../data/words_mk.js', () => ({ W_MK: {} }));
vi.mock('../../data/words_sq.js', () => ({ W_SQ: {} }));
vi.mock('../../data/words_is.js', () => ({ W_IS: {} }));
vi.mock('../../data/words_cy.js', () => ({ W_CY: {} }));
vi.mock('../../data/words_ga.js', () => ({ W_GA: {} }));
vi.mock('../../data/words_tl.js', () => ({ W_TL: {} }));
vi.mock('../../data/words_mn.js', () => ({ W_MN: {} }));
vi.mock('../../data/words_uz.js', () => ({ W_UZ: {} }));
vi.mock('../../data/words_am.js', () => ({ W_AM: {} }));
vi.mock('../../data/words_eo.js', () => ({ W_EO: {} }));
vi.mock('../../data/words_ta.js', () => ({ W_TA: {} }));
vi.mock('../../data/words_pa.js', () => ({ W_PA: {} }));
vi.mock('../../data/words_zu.js', () => ({ W_ZU: {} }));
vi.mock('../../data/words_af.js', () => ({ W_AF: {} }));
vi.mock('../../data/words_ky.js', () => ({ W_KY: {} }));
vi.mock('../../data/words_tg.js', () => ({ W_TG: {} }));
vi.mock('../../data/words_tk.js', () => ({ W_TK: {} }));
vi.mock('../../data/words_ug.js', () => ({ W_UG: {} }));
vi.mock('../../data/words_eu.js', () => ({ W_EU: {} }));
vi.mock('../../data/words_ca.js', () => ({ W_CA: {} }));
vi.mock('../../data/words_gl.js', () => ({ W_GL: {} }));
vi.mock('../../data/words_mt.js', () => ({ W_MT: {} }));
vi.mock('../../data/words_lb.js', () => ({ W_LB: {} }));
vi.mock('../../data/words_ht.js', () => ({ W_HT: {} }));
vi.mock('../../data/words_bo.js', () => ({ W_BO: {} }));
vi.mock('../../data/words_my.js', () => ({ W_MY: {} }));
vi.mock('../../data/words_km.js', () => ({ W_KM: {} }));
vi.mock('../../data/words_lo.js', () => ({ W_LO: {} }));
vi.mock('../../data/words_ne.js', () => ({ W_NE: {} }));
vi.mock('../../data/words_si.js', () => ({ W_SI: {} }));
vi.mock('../../data/words_ur.js', () => ({ W_UR: {} }));
vi.mock('../../data/words_te.js', () => ({ W_TE: {} }));
vi.mock('../../data/words_ml.js', () => ({ W_ML: {} }));
vi.mock('../../data/words_kn.js', () => ({ W_KN: {} }));
vi.mock('../../data/words_mr.js', () => ({ W_MR: {} }));
vi.mock('../../data/words_gu.js', () => ({ W_GU: {} }));
vi.mock('../../data/words_or.js', () => ({ W_OR: {} }));
vi.mock('../../data/words_as.js', () => ({ W_AS: {} }));
vi.mock('../../data/words_sd.js', () => ({ W_SD: {} }));
vi.mock('../../data/words_ps.js', () => ({ W_PS: {} }));
vi.mock('../../data/words_so.js', () => ({ W_SO: {} }));
vi.mock('../../data/words_ha.js', () => ({ W_HA: {} }));
vi.mock('../../data/words_yo.js', () => ({ W_YO: {} }));
vi.mock('../../data/words_ig.js', () => ({ W_IG: {} }));
vi.mock('../../data/words_ti.js', () => ({ W_TI: {} }));
vi.mock('../../data/words_wo.js', () => ({ W_WO: {} }));
vi.mock('../../data/words_mg.js', () => ({ W_MG: {} }));
vi.mock('../../data/words_xh.js', () => ({ W_XH: {} }));
vi.mock('../../data/words_sn.js', () => ({ W_SN: {} }));
vi.mock('../../data/words_ny.js', () => ({ W_NY: {} }));
vi.mock('../../data/words_fj.js', () => ({ W_FJ: {} }));
vi.mock('../../data/words_sm.js', () => ({ W_SM: {} }));
vi.mock('../../data/words_to.js', () => ({ W_TO: {} }));
vi.mock('../../data/words_mi.js', () => ({ W_MI: {} }));
vi.mock('../../data/words_haw.js', () => ({ W_HAW: {} }));
vi.mock('../../data/words_jv.js', () => ({ W_JV: {} }));
vi.mock('../../data/words_su.js', () => ({ W_SU: {} }));
import { ensureLangTableLoaded } from '../../js/features/mode-utils.ts';

const NEW_LANGS = [
  'hi', 'bn', 'id', 'pcm', 'ko', 'fa', 'sw', 'ms', 'th', 'az', 'ro', 'hu', 'cs', 'kk', 'sv',
  'ka', 'hr', 'sr', 'bs', 'bg', 'sk', 'hy', 'da', 'fi', 'no', 'la',
  'lt', 'lv', 'et', 'sl', 'mk', 'sq', 'is', 'cy', 'ga', 'tl', 'mn', 'uz', 'am', 'eo',
  'ta', 'pa', 'zu', 'af', 'ky', 'tg', 'tk', 'ug', 'eu', 'ca', 'gl', 'mt', 'lb', 'ht', 'bo',
  'my', 'km', 'lo', 'ne', 'si',
  'ur', 'te', 'ml', 'kn', 'mr', 'gu', 'or', 'as', 'sd', 'ps',
  'so', 'ha', 'yo', 'ig', 'ti', 'wo', 'mg', 'xh', 'sn', 'ny',
  'fj', 'sm', 'to', 'mi', 'haw', 'jv', 'su',
];

function mountLangPairSelect(): void {
  const el = document.getElementById('lang-pair-select')!;
  act(() => {
    createRoot(el).render(<LangPairSelect />);
  });
}

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function setupDom(selModeValue = 'en'): void {
  document.body.innerHTML = `
    <span id="lang-pair-select"></span>
    <select id="sel-mode">
      <option value="en">EN → UA</option>
      <option value="ua">UA → EN</option>
      <option value="en-es">EN → ES</option>
      <option value="es-en">ES → EN</option>
      <option value="es-ua">ES → UA</option>
      <option value="ua-es">UA → ES</option>
      <option value="en-fr">EN → FR</option>
      <option value="fr-en">FR → EN</option>
      <option value="fr-ua">FR → UA</option>
      <option value="ua-fr">UA → FR</option>
      <option value="es-fr">ES → FR</option>
      <option value="fr-es">FR → ES</option>
      <option value="mix">Mixed</option>
    </select>`;
  (document.getElementById('sel-mode') as HTMLSelectElement).value = selModeValue;
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
    setupDom('en');
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
    expect(dds[0].querySelectorAll('.flagdd-item').length).toBe(103); // know: ua/en/es/fr/it/pt/de/he/ar/pl/zh/el/ja/tr/nl/vi + 87 new langs

    act(() => {
      (dds[1].querySelector('.flagdd-btn') as HTMLButtonElement).click();
    });
    expect(dds[1].querySelectorAll('.flagdd-item').length).toBe(102); // learn options for know=ua

    act(() => {
      (dds[2].querySelector('.flagdd-btn') as HTMLButtonElement).click();
    });
    expect(dds[2].querySelectorAll('.flagdd-item').length).toBe(3); // direction: fwd/rev/mix
  });

  it('restores pair from existing #sel-mode value', () => {
    setupDom('es-ua');
    act(() => {
      mountLangPairSelect();
    });
    const [knowDD, learnDD] = dropdowns();
    expect((knowDD.querySelector('.flagdd-btn') as HTMLButtonElement).dataset.value).toBe('ua');
    expect((learnDD.querySelector('.flagdd-btn') as HTMLButtonElement).dataset.value).toBe('es');
  });

  it(
    'changing "know" updates #sel-mode and dispatches change',
    () => {
      act(() => {
        mountLangPairSelect();
      });
      let changed = false;
      document.getElementById('sel-mode')!.addEventListener('change', () => {
        changed = true;
      });
      selectOption(0, 'es');
      expect((document.getElementById('sel-mode') as HTMLSelectElement).value).toBe('en-es');
      expect(changed).toBe(true);
    },
    60000,
  );

  it('changing "learn" updates #sel-mode', () => {
    act(() => {
      mountLangPairSelect();
    });
    selectOption(1, 'fr');
    expect((document.getElementById('sel-mode') as HTMLSelectElement).value).toBe('fr-ua');
  });

  it('selecting a value closes the dropdown', () => {
    act(() => {
      mountLangPairSelect();
    });
    selectOption(1, 'fr');
    expect(dropdowns()[1].querySelector('.flagdd-list')).toBeNull();
  });
});

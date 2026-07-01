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
import { ensureLangTableLoaded } from '../../js/features/mode-utils.ts';

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
      ['es', 'fr', 'it', 'pt', 'de', 'he', 'ar', 'pl', 'zh', 'el', 'ja', 'tr', 'nl'].map(
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
    expect(dds[0].querySelectorAll('.flagdd-item').length).toBe(15); // know: ua/en/es/fr/it/pt/de/he/ar/pl/zh/el/ja/tr/nl

    act(() => {
      (dds[1].querySelector('.flagdd-btn') as HTMLButtonElement).click();
    });
    expect(dds[1].querySelectorAll('.flagdd-item').length).toBe(14); // learn options for know=ua

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

  it('changing "know" updates #sel-mode and dispatches change', () => {
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
  });

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

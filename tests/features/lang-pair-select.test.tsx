import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { mountLangPairSelect } from '../../js/features/lang-pair-select.tsx';

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
    </select>`;
  (document.getElementById('sel-mode') as HTMLSelectElement).value = selModeValue;
}

describe('lang-pair-select', () => {
  beforeEach(() => {
    localStorage.clear();
    setupDom('en');
  });

  it('renders two selects with options', () => {
    act(() => { mountLangPairSelect(); });
    const selects = document.querySelectorAll('#lang-pair-select select');
    expect(selects.length).toBe(2);
    expect((selects[0] as HTMLSelectElement).options.length).toBe(4); // know: ua/en/es/fr
    expect((selects[1] as HTMLSelectElement).options.length).toBe(3); // learn options for know=ua
  });

  it('restores pair from existing #sel-mode value', () => {
    setupDom('es-ua');
    act(() => { mountLangPairSelect(); });
    const [knowSel, learnSel] = document.querySelectorAll('#lang-pair-select select') as unknown as HTMLSelectElement[];
    expect(knowSel.value).toBe('ua');
    expect(learnSel.value).toBe('es');
  });

  it('changing "know" updates #sel-mode and dispatches change', () => {
    act(() => { mountLangPairSelect(); });
    let changed = false;
    document.getElementById('sel-mode')!.addEventListener('change', () => { changed = true; });
    const [knowSel] = document.querySelectorAll('#lang-pair-select select') as unknown as HTMLSelectElement[];
    act(() => {
      knowSel.value = 'es';
      knowSel.dispatchEvent(new Event('change', { bubbles: true }));
    });
    expect((document.getElementById('sel-mode') as HTMLSelectElement).value).toBe('en-es');
    expect(changed).toBe(true);
  });

  it('changing "learn" updates #sel-mode', () => {
    act(() => { mountLangPairSelect(); });
    const [, learnSel] = document.querySelectorAll('#lang-pair-select select') as unknown as HTMLSelectElement[];
    act(() => {
      learnSel.value = 'fr';
      learnSel.dispatchEvent(new Event('change', { bubbles: true }));
    });
    expect((document.getElementById('sel-mode') as HTMLSelectElement).value).toBe('fr-ua');
  });
});

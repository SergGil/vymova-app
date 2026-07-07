import { describe, it, expect } from 'vitest';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { AssocChainPage, openAssocChain, buildSymmetricDict } from '../../js/modes/assoc-chain.tsx';
import { SYNONYMS, SYNONYMS_ES } from '../../data/synonyms.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const EN_KEYS = new Set(Object.keys(buildSymmetricDict(SYNONYMS)));
const ES_KEYS = new Set(Object.keys(buildSymmetricDict(SYNONYMS_ES)));

// Regression test for a real bug found during a react-hooks/exhaustive-deps
// audit: the mount-only `_open` effect used to close over a component-level
// `learnLang` const, frozen forever at whatever language was selected the
// first time this (persistently-mounted) page ever opened. Switching the
// learn language afterwards silently kept building the game from the OLD
// language's synonym dictionary. The fix makes startGame() call
// getLearnLang() fresh instead of relying on a hoisted per-render const —
// this test opens the game once per language and checks the *actual*
// rendered word each time, so it fails again if that pattern regresses.
describe('AssocChainPage picks up the current learn language on every open (not just at first mount)', () => {
  it('starts a new game in the newly-selected language after switching learn language mid-session', () => {
    localStorage.setItem('ew_learn_lang', 'en');

    document.body.innerHTML = '';
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    act(() => {
      root.render(<AssocChainPage />);
    });

    act(() => {
      openAssocChain();
    });
    const firstWord = container.querySelector('[data-testid="assoc-current-word"]')?.textContent;
    expect(firstWord).toBeTruthy();
    expect(EN_KEYS.has(firstWord!.toLowerCase())).toBe(true);

    // Switch language mid-session (no remount — this page never unmounts
    // once lazy-loaded, exactly like in production) and reopen.
    localStorage.setItem('ew_learn_lang', 'es');
    act(() => {
      openAssocChain();
    });
    const secondWord = container.querySelector('[data-testid="assoc-current-word"]')?.textContent;
    expect(secondWord).toBeTruthy();
    expect(ES_KEYS.has(secondWord!.toLowerCase())).toBe(true);

    root.unmount();
  });
});

// tests/src/store-batching.test.tsx — proves the claim in
// docs/state-stores-overview.md's "Крос-доменний dispatch" section: a
// synchronous handler that dispatches to two independent Zustand stores
// (the real shape of js/features/card-actions.ts's onEasyClick, runReset,
// and js/features/duel/duel.ts's _onOptionClick) never lets a subscriber
// observe store A already updated while store B is still stale.
// This isn't test-only act() batching — the dispatches happen inside a real
// DOM click handler, so it exercises React 18+'s automatic batching the same
// way production code does.
//
// Was create-domain-store-batching.test.tsx, proving this same property for
// the homegrown createDomainStore() factory before the 2026-08-15
// state-management migration replaced every domain store with Zustand
// (docs/state-stores-overview.md). Re-verified here against the real
// library, not assumed to carry over just because both rely on
// useSyncExternalStore under the hood.
import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { create } from 'zustand';

describe('Zustand stores — cross-store dispatch batching', () => {
  it('a click handler dispatching to two stores synchronously produces one render, never an intermediate mixed state', () => {
    const useStoreA = create<number>()(() => 0);
    const useStoreB = create<number>()(() => 0);
    const renders: Array<[number, number]> = [];

    function Probe() {
      const a = useStoreA();
      const b = useStoreB();
      renders.push([a, b]);
      return (
        <button
          onClick={() => {
            useStoreA.setState((n) => n + 1);
            useStoreB.setState((n) => n + 1);
          }}
        >
          bump
        </button>
      );
    }

    const { getByText } = render(<Probe />);
    expect(renders).toEqual([[0, 0]]);

    fireEvent.click(getByText('bump'));

    // If the two dispatches ever produced separate render passes, this log
    // would contain an intermediate [1, 0] entry between the two — i.e. a
    // subscriber to both stores would briefly see "A updated, B not yet".
    // It doesn't: React 18+'s automatic batching collapses both external
    // store updates from this synchronous click handler into a single
    // render, so [1, 0] never appears.
    expect(renders).toEqual([
      [0, 0],
      [1, 1],
    ]);
  });
});

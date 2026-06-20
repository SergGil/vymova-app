import { describe, it, expect, afterEach } from 'vitest';
import { createRoot, type Root } from 'react-dom/client';
import { act } from 'react';
import { CharacterAvatar } from '../../../js/features/character-avatar/index.tsx';
import type { CharacterAppearance } from '../../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const mounted: Root[] = [];

async function mount(props: { appearance: CharacterAppearance; animated?: boolean }): Promise<HTMLElement> {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  mounted.push(root);
  await act(async () => { root.render(<CharacterAvatar {...props} />); });
  // Flush any pending lazy-import/microtask work triggered on first render.
  await act(async () => { await Promise.resolve(); });
  return container;
}

afterEach(() => {
  while (mounted.length) mounted.pop()?.unmount();
});

const defaultAppearance: CharacterAppearance = {
  skinTone: 0, hairStyle: 0, hairColor: 0, eyeColor: 0, outfitStyle: 0, outfitColor: 0,
};

describe('character-avatar/index.tsx CharacterAvatar', () => {
  it('mounts without throwing for the default appearance (animated)', async () => {
    const container = await mount({ appearance: defaultAppearance });
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('mounts without throwing when animated=false (thumbnail path)', async () => {
    const container = await mount({ appearance: defaultAppearance, animated: false });
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('mounts without throwing for out-of-range appearance indices', async () => {
    const wild: CharacterAppearance = {
      skinTone: 99, hairStyle: -3, hairColor: 7, eyeColor: -1, outfitStyle: 12, outfitColor: -7,
    };
    const container = await mount({ appearance: wild });
    expect(container.children.length).toBeGreaterThan(0);
  });

  it('renders a labeled placeholder when WebGL is unavailable', async () => {
    // happy-dom's canvas has no real WebGL context, so the renderer should
    // fall back rather than throw, and the fallback keeps the a11y label.
    const container = await mount({ appearance: defaultAppearance, animated: false });
    expect(container.querySelector('[aria-label="character avatar"]')).not.toBeNull();
  });
});

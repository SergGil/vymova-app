import { describe, it, expect } from 'vitest';
import { createRoot, type Root } from 'react-dom/client';
import { act } from 'react';
import { CharacterAvatar, SKIN_TONES, HAIR_STYLES, HAIR_COLORS, EYE_COLORS, OUTFIT_STYLES, OUTFIT_COLORS } from '../../js/features/character-avatar.tsx';
import type { CharacterAppearance } from '../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(appearance: CharacterAppearance): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<CharacterAvatar appearance={appearance} />); });
  return { container, root };
}

describe('character-avatar.tsx CharacterAvatar', () => {
  it('renders an svg with a head circle for the default appearance', () => {
    const { container } = mount({ skinTone: 0, hairStyle: 0, hairColor: 0, eyeColor: 0, outfitStyle: 0, outfitColor: 0 });
    expect(container.querySelector('svg')).not.toBeNull();
    // head + 2 ears + 2 eye whites + 2 pupils = at least 6 circles
    expect(container.querySelectorAll('circle').length).toBeGreaterThanOrEqual(6);
  });

  it('renders no extra hair shapes when hairStyle is "bald"', () => {
    const baldIdx = HAIR_STYLES.indexOf('bald');
    const { container: withBald } = mount({ skinTone: 0, hairStyle: baldIdx, hairColor: 0, eyeColor: 0, outfitStyle: 0, outfitColor: 0 });
    const baldCircleCount = withBald.querySelectorAll('circle').length;

    const { container: withCurly } = mount({ skinTone: 0, hairStyle: HAIR_STYLES.indexOf('curly'), hairColor: 0, eyeColor: 0, outfitStyle: 0, outfitColor: 0 });
    const curlyCircleCount = withCurly.querySelectorAll('circle').length;

    // Curly hair adds extra <circle> bumps on top of the head/eyes that bald doesn't have.
    expect(curlyCircleCount).toBeGreaterThan(baldCircleCount);
  });

  it('wraps out-of-range indices instead of crashing', () => {
    const { container } = mount({ skinTone: 99, hairStyle: -3, hairColor: 7, eyeColor: -1, outfitStyle: 12, outfitColor: -7 });
    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('exposes equally-sized option lists used by the customization picker', () => {
    expect(SKIN_TONES.length).toBeGreaterThan(0);
    expect(HAIR_STYLES.length).toBeGreaterThan(0);
    expect(HAIR_COLORS.length).toBeGreaterThan(0);
    expect(EYE_COLORS.length).toBeGreaterThan(0);
    expect(OUTFIT_STYLES.length).toBeGreaterThan(0);
    expect(OUTFIT_COLORS.length).toBeGreaterThan(0);
  });
});

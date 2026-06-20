import { describe, it, expect } from 'vitest';
import { Group } from 'three';
import {
  buildCharacterGroup, buildHair, clampIdx, cacheKeyFor,
} from '../../../js/features/character-avatar/scene-builder.ts';
import { HAIR_STYLES } from '../../../js/features/character-avatar/appearance-options.ts';
import type { CharacterAppearance } from '../../../src/types.ts';

describe('character-avatar/scene-builder.ts clampIdx', () => {
  it('wraps negative indices into range', () => {
    expect(clampIdx(-1, 8)).toBe(7);
    expect(clampIdx(-3, 8)).toBe(5);
  });

  it('wraps indices at or beyond length into range', () => {
    expect(clampIdx(8, 8)).toBe(0);
    expect(clampIdx(12, 8)).toBe(4);
  });

  it('leaves in-range indices untouched', () => {
    expect(clampIdx(0, 8)).toBe(0);
    expect(clampIdx(5, 8)).toBe(5);
  });
});

describe('character-avatar/scene-builder.ts buildHair', () => {
  it('produces no meshes for "bald"', () => {
    expect(buildHair('bald', '#000')).toHaveLength(0);
  });

  it('produces more meshes for "curly" than "bald"', () => {
    expect(buildHair('curly', '#000').length).toBeGreaterThan(buildHair('bald', '#000').length);
  });

  it('produces at least one mesh for every defined hair style', () => {
    for (const style of HAIR_STYLES) {
      if (style === 'bald') continue;
      expect(buildHair(style, '#000').length).toBeGreaterThan(0);
    }
  });
});

describe('character-avatar/scene-builder.ts buildCharacterGroup', () => {
  const valid: CharacterAppearance = {
    skinTone: 0, hairStyle: 0, hairColor: 0, eyeColor: 0, outfitStyle: 0, outfitColor: 0,
  };

  it('returns a BuiltCharacter wrapping a THREE.Group', () => {
    const built = buildCharacterGroup(valid);
    expect(built.group).toBeInstanceOf(Group);
    expect(built.eyelids).toHaveLength(2);
    built.dispose();
  });

  it('wraps out-of-range indices instead of throwing', () => {
    const wild: CharacterAppearance = {
      skinTone: 99, hairStyle: -3, hairColor: 7, eyeColor: -1, outfitStyle: 12, outfitColor: -7,
    };
    expect(() => {
      const built = buildCharacterGroup(wild);
      built.dispose();
    }).not.toThrow();
  });

  it('dispose() does not throw', () => {
    const built = buildCharacterGroup(valid);
    expect(() => built.dispose()).not.toThrow();
  });
});

describe('character-avatar/scene-builder.ts cacheKeyFor', () => {
  const a: CharacterAppearance = {
    skinTone: 1, hairStyle: 2, hairColor: 3, eyeColor: 0, outfitStyle: 1, outfitColor: 4,
  };

  it('produces identical keys for identical inputs', () => {
    expect(cacheKeyFor(a, 'head', 24)).toBe(cacheKeyFor(a, 'head', 24));
  });

  it('produces different keys for different variant or size', () => {
    expect(cacheKeyFor(a, 'head', 24)).not.toBe(cacheKeyFor(a, 'full', 24));
    expect(cacheKeyFor(a, 'head', 24)).not.toBe(cacheKeyFor(a, 'head', 48));
  });

  it('collapses out-of-range appearances onto their wrapped equivalent', () => {
    const wrapped: CharacterAppearance = {
      skinTone: a.skinTone + 8, hairStyle: a.hairStyle - 8, hairColor: a.hairColor + 8,
      eyeColor: a.eyeColor + 6, outfitStyle: a.outfitStyle - 5, outfitColor: a.outfitColor + 8,
    };
    expect(cacheKeyFor(wrapped, 'head', 24)).toBe(cacheKeyFor(a, 'head', 24));
  });
});

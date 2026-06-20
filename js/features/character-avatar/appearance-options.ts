// Vymova — js/features/character-avatar/appearance-options.ts
// Customization option lists, unchanged from the old SVG avatar so saved
// CharacterAppearance indices keep meaning the same thing.
import type { CharacterAppearance } from '../../../src/types.ts';

export const SKIN_TONES  = ['#FFE0BD', '#FFDBAC', '#F1C27D', '#E0AC69', '#C68642', '#8D5524', '#5C3A21', '#3B2219'];
export const HAIR_COLORS = ['#2C2C2C', '#5A3825', '#A0522D', '#D4A017', '#E8B4B8', '#9B9B9B', '#1F4E79', '#27AE60'];
export const EYE_COLORS  = ['#3B2412', '#2E5E8C', '#3F6B35', '#555555', '#6B3FA0', '#8B5E3C'];
export const HAIR_STYLES = ['bald', 'short', 'long', 'curly', 'mohawk', 'ponytail', 'bun', 'spiky'] as const;
export const OUTFIT_STYLES = ['tshirt', 'hoodie', 'jacket', 'dress', 'overalls'] as const;
export const OUTFIT_COLORS = ['#e74c3c', '#2980b9', '#27ae60', '#9b59b6', '#f1c40f', '#2c3e50', '#e67e22', '#1abc9c'];

export const DEFAULT_APPEARANCE: CharacterAppearance = {
  skinTone: 1, hairStyle: 1, hairColor: 0, eyeColor: 0, outfitStyle: 0, outfitColor: 0,
};

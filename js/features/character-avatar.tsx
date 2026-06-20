// English Words App — js/features/character-avatar.tsx
// Full-body SVG character avatar with swappable skin/hair/eyes/outfit layers.
import type { ReactElement } from 'react';
import type { CharacterAppearance } from '../../src/types.ts';

export const SKIN_TONES = ['#FFDBAC', '#F1C27D', '#E0AC69', '#C68642', '#8D5524', '#5C3A21'];
export const HAIR_COLORS = ['#2C2C2C', '#5A3825', '#A0522D', '#D4A017', '#E8B4B8', '#9B9B9B'];
export const EYE_COLORS = ['#3B2412', '#2E5E8C', '#3F6B35', '#555555'];
export const HAIR_STYLES = ['bald', 'short', 'long', 'curly', 'mohawk'] as const;

export interface Outfit { style: 'tshirt' | 'hoodie' | 'jacket' | 'dress'; color: string; }
export const OUTFITS: Outfit[] = [
  { style: 'tshirt', color: '#e74c3c' },
  { style: 'hoodie', color: '#2980b9' },
  { style: 'jacket', color: '#27ae60' },
  { style: 'dress',  color: '#9b59b6' },
  { style: 'tshirt', color: '#f1c40f' },
  { style: 'hoodie', color: '#2c3e50' },
];

export const DEFAULT_APPEARANCE: CharacterAppearance = {
  skinTone: 0, hairStyle: 1, hairColor: 0, eyeColor: 0, outfit: 0,
};

function clampIdx(i: number, len: number): number { return ((i % len) + len) % len; }

function Hair({ style, color }: { style: string; color: string }): ReactElement | null {
  if (style === 'bald') return null;
  if (style === 'short') {
    return <path d="M58 58 A42 42 0 0 1 142 58 L142 38 Q100 16 58 38 Z" fill={color} />;
  }
  if (style === 'long') {
    return (
      <>
        <path d="M58 58 A42 42 0 0 1 142 58 L142 38 Q100 16 58 38 Z" fill={color} />
        <rect x="50" y="50" width="14" height="70" rx="6" fill={color} />
        <rect x="136" y="50" width="14" height="70" rx="6" fill={color} />
      </>
    );
  }
  if (style === 'curly') {
    return (
      <>
        <path d="M58 58 A42 42 0 0 1 142 58 L142 38 Q100 16 58 38 Z" fill={color} />
        {[62, 78, 100, 122, 138].map(cx => <circle key={cx} cx={cx} cy="38" r="9" fill={color} />)}
      </>
    );
  }
  // mohawk
  return <rect x="90" y="14" width="20" height="48" rx="8" fill={color} />;
}

function Outfit({ outfit, skin }: { outfit: Outfit; skin: string }): ReactElement {
  const legs = outfit.style === 'dress'
    ? <path d="M70 200 L130 200 L142 300 L58 300 Z" fill={outfit.color} />
    : (
      <>
        <rect x="62" y="200" width="30" height="100" rx="8" fill="#34495e" />
        <rect x="108" y="200" width="30" height="100" rx="8" fill="#34495e" />
        <rect x="58" y="295" width="36" height="16" rx="6" fill="#1c2833" />
        <rect x="106" y="295" width="36" height="16" rx="6" fill="#1c2833" />
      </>
    );
  return (
    <>
      {/* arms */}
      <rect x="38" y="128" width="24" height="78" rx="11" fill={outfit.color} />
      <rect x="138" y="128" width="24" height="78" rx="11" fill={outfit.color} />
      <circle cx="50" cy="210" r="11" fill={skin} />
      <circle cx="150" cy="210" r="11" fill={skin} />
      {/* torso */}
      <rect x="60" y="122" width="80" height="88" rx="18" fill={outfit.color} />
      {outfit.style === 'hoodie' && <path d="M78 122 Q100 138 122 122" fill="none" stroke="#00000022" strokeWidth="4" />}
      {outfit.style === 'jacket' && <path d="M100 122 L92 200 M100 122 L108 200" stroke="#00000033" strokeWidth="3" fill="none" />}
      {legs}
    </>
  );
}

export function CharacterAvatar({ appearance, size = 220 }: { appearance: CharacterAppearance; size?: number }): ReactElement {
  const skin     = SKIN_TONES[clampIdx(appearance.skinTone, SKIN_TONES.length)];
  const hairCol  = HAIR_COLORS[clampIdx(appearance.hairColor, HAIR_COLORS.length)];
  const hairStyl = HAIR_STYLES[clampIdx(appearance.hairStyle, HAIR_STYLES.length)];
  const eyeCol   = EYE_COLORS[clampIdx(appearance.eyeColor, EYE_COLORS.length)];
  const outfit   = OUTFITS[clampIdx(appearance.outfit, OUTFITS.length)];

  return (
    <svg viewBox="0 0 200 320" width={size} height={size * (320 / 200)} role="img" aria-label="character avatar">
      <Outfit outfit={outfit} skin={skin} />
      {/* neck */}
      <rect x="88" y="100" width="24" height="22" fill={skin} />
      {/* ears */}
      <circle cx="58" cy="72" r="8" fill={skin} />
      <circle cx="142" cy="72" r="8" fill={skin} />
      {/* head */}
      <circle cx="100" cy="68" r="42" fill={skin} />
      {/* eyes */}
      <circle cx="84" cy="64" r="6" fill="#fff" />
      <circle cx="116" cy="64" r="6" fill="#fff" />
      <circle cx="84" cy="65" r="3.2" fill={eyeCol} />
      <circle cx="116" cy="65" r="3.2" fill={eyeCol} />
      {/* mouth */}
      <path d="M86 84 Q100 94 114 84" fill="none" stroke="#00000055" strokeWidth="3" strokeLinecap="round" />
      <Hair style={hairStyl} color={hairCol} />
    </svg>
  );
}

// English Words App — js/features/character-avatar.tsx
// Full-body SVG character avatar with swappable skin/hair/eyes/outfit layers
// and a subtle idle animation (breathing + blinking).
import type { ReactElement } from 'react';
import type { CharacterAppearance } from '../../src/types.ts';

export const SKIN_TONES  = ['#FFE0BD', '#FFDBAC', '#F1C27D', '#E0AC69', '#C68642', '#8D5524', '#5C3A21', '#3B2219'];
export const HAIR_COLORS = ['#2C2C2C', '#5A3825', '#A0522D', '#D4A017', '#E8B4B8', '#9B9B9B', '#1F4E79', '#27AE60'];
export const EYE_COLORS  = ['#3B2412', '#2E5E8C', '#3F6B35', '#555555', '#6B3FA0', '#8B5E3C'];
export const HAIR_STYLES = ['bald', 'short', 'long', 'curly', 'mohawk', 'ponytail', 'bun', 'spiky'] as const;
export const OUTFIT_STYLES = ['tshirt', 'hoodie', 'jacket', 'dress', 'overalls'] as const;
export const OUTFIT_COLORS = ['#e74c3c', '#2980b9', '#27ae60', '#9b59b6', '#f1c40f', '#2c3e50', '#e67e22', '#1abc9c'];

export const DEFAULT_APPEARANCE: CharacterAppearance = {
  skinTone: 1, hairStyle: 1, hairColor: 0, eyeColor: 0, outfitStyle: 0, outfitColor: 0,
};

function clampIdx(i: number, len: number): number { return ((i % len) + len) % len; }

function Hair({ style, color }: { style: string; color: string }): ReactElement | null {
  const cap = <path d="M58 58 A42 42 0 0 1 142 58 L142 38 Q100 16 58 38 Z" fill={color} />;
  if (style === 'bald') return null;
  if (style === 'short') return cap;
  if (style === 'long') {
    return (
      <>
        {cap}
        <rect x="50" y="50" width="14" height="70" rx="6" fill={color} />
        <rect x="136" y="50" width="14" height="70" rx="6" fill={color} />
      </>
    );
  }
  if (style === 'curly') {
    return (
      <>
        {cap}
        {[62, 78, 100, 122, 138].map(cx => <circle key={cx} cx={cx} cy="38" r="9" fill={color} />)}
      </>
    );
  }
  if (style === 'mohawk') return <rect x="90" y="14" width="20" height="48" rx="8" fill={color} />;
  if (style === 'ponytail') {
    return (
      <>
        {cap}
        <path d="M138 44 Q160 60 152 110 Q148 118 140 112 Q146 70 130 46 Z" fill={color} />
      </>
    );
  }
  if (style === 'bun') {
    return (
      <>
        {cap}
        <circle cx="138" cy="34" r="14" fill={color} />
      </>
    );
  }
  // spiky
  return (
    <path
      d="M58 58 L62 30 L74 50 L80 22 L92 48 L100 18 L108 48 L120 22 L126 50 L138 30 L142 58 Q100 38 58 58 Z"
      fill={color}
    />
  );
}

interface OutfitSpec { style: string; color: string; }

function Outfit({ outfit, skin }: { outfit: OutfitSpec; skin: string }): ReactElement {
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
      {outfit.style === 'overalls' && (
        <>
          <rect x="72" y="150" width="56" height="60" rx="6" fill="#00000022" />
          <rect x="68" y="122" width="10" height="34" fill={outfit.color} />
          <rect x="122" y="122" width="10" height="34" fill={outfit.color} />
        </>
      )}
      {legs}
    </>
  );
}

export interface CharacterAvatarProps {
  appearance: CharacterAppearance;
  size?: number;
  /** 'full' = whole body (profile page); 'head' = cropped head+shoulders (small thumbnails). */
  variant?: 'full' | 'head';
  /** Idle breathing + blinking animation. Disable for many small thumbnails rendered at once. */
  animated?: boolean;
}

export function CharacterAvatar({ appearance, size = 220, variant = 'full', animated = true }: CharacterAvatarProps): ReactElement {
  const skin     = SKIN_TONES[clampIdx(appearance.skinTone, SKIN_TONES.length)];
  const hairCol  = HAIR_COLORS[clampIdx(appearance.hairColor, HAIR_COLORS.length)];
  const hairStyl = HAIR_STYLES[clampIdx(appearance.hairStyle, HAIR_STYLES.length)];
  const eyeCol   = EYE_COLORS[clampIdx(appearance.eyeColor, EYE_COLORS.length)];
  const outfit: OutfitSpec = {
    style: OUTFIT_STYLES[clampIdx(appearance.outfitStyle, OUTFIT_STYLES.length)],
    color: OUTFIT_COLORS[clampIdx(appearance.outfitColor, OUTFIT_COLORS.length)],
  };

  const viewBox = variant === 'head' ? '34 8 132 130' : '0 0 200 320';
  const [, , vbW, vbH] = viewBox.split(' ').map(Number);
  const breathe = animated ? 'char-breathe' : '';
  const blink = animated ? 'char-blink' : '';

  return (
    <svg viewBox={viewBox} width={size} height={size * (vbH / vbW)} role="img" aria-label="character avatar">
      <g className={breathe} style={{ transformOrigin: '100px 200px' }}>
        <Outfit outfit={outfit} skin={skin} />
        {/* neck */}
        <rect x="88" y="100" width="24" height="22" fill={skin} />
        {/* ears */}
        <circle cx="58" cy="72" r="8" fill={skin} />
        <circle cx="142" cy="72" r="8" fill={skin} />
        {/* head */}
        <circle cx="100" cy="68" r="42" fill={skin} />
        {/* eyes */}
        <g className={blink} style={{ transformOrigin: '84px 64px' }}>
          <circle cx="84" cy="64" r="6" fill="#fff" />
          <circle cx="84" cy="65" r="3.2" fill={eyeCol} />
        </g>
        <g className={blink} style={{ transformOrigin: '116px 64px' }}>
          <circle cx="116" cy="64" r="6" fill="#fff" />
          <circle cx="116" cy="65" r="3.2" fill={eyeCol} />
        </g>
        {/* mouth */}
        <path d="M86 84 Q100 94 114 84" fill="none" stroke="#00000055" strokeWidth="3" strokeLinecap="round" />
        <Hair style={hairStyl} color={hairCol} />
      </g>
    </svg>
  );
}

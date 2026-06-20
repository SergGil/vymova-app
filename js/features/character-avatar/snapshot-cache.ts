// Vymova — js/features/character-avatar/snapshot-cache.ts
// One shared, never-attached WebGLRenderer used to rasterize thumbnail
// avatars into cached data-URLs. This is what lets profile-switcher and
// duel-leaderboard show many avatars at once without each opening its own
// WebGL context (browsers cap concurrent contexts at roughly 8-16).
import { WebGLRenderer } from 'three';
import type { CharacterAppearance } from '../../../src/types.ts';
import { buildCharacterGroup, cacheKeyFor } from './scene-builder.ts';
import { createLitScene, createCamera } from './scene-lighting.ts';

const CACHE_LIMIT = 200;
const cache = new Map<string, string>();

let renderer: WebGLRenderer | null = null;
let webglUnavailable = false;
const sharedScene = createLitScene();

function getRenderer(): WebGLRenderer | null {
  if (webglUnavailable) return null;
  if (renderer) return renderer;
  try {
    const canvas = document.createElement('canvas');
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
    return renderer;
  } catch {
    webglUnavailable = true;
    return null;
  }
}

function rememberInCache(key: string, dataUrl: string): void {
  cache.delete(key);
  cache.set(key, dataUrl);
  if (cache.size > CACHE_LIMIT) {
    const oldest = cache.keys().next().value;
    if (oldest !== undefined) cache.delete(oldest);
  }
}

export function getSnapshot(appearance: CharacterAppearance, variant: 'full' | 'head', size: number): string | null {
  const key = cacheKeyFor(appearance, variant, size);
  const cached = cache.get(key);
  if (cached) {
    rememberInCache(key, cached);
    return cached;
  }

  const r = getRenderer();
  if (!r) return null;

  const aspect = variant === 'head' ? 1 : 200 / 320;
  const width = size;
  const height = Math.round(size * (variant === 'head' ? 1 : 320 / 200));
  const pixelRatio = Math.min(Math.max(window.devicePixelRatio || 1, 1), 2);
  r.setPixelRatio(pixelRatio);
  r.setSize(Math.min(width, 512), Math.min(height, 512), false);

  const built = buildCharacterGroup(appearance);
  sharedScene.add(built.group);
  const camera = createCamera(variant, built, width / height || aspect);

  try {
    r.render(sharedScene, camera);
    const dataUrl = r.domElement.toDataURL('image/png');
    rememberInCache(key, dataUrl);
    return dataUrl;
  } catch {
    webglUnavailable = true;
    return null;
  } finally {
    sharedScene.remove(built.group);
    built.dispose();
  }
}

export function __resetSnapshotCacheForTests(): void {
  cache.clear();
  if (renderer) {
    renderer.dispose();
    renderer = null;
  }
  webglUnavailable = false;
}

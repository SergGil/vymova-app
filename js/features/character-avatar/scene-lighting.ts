// Vymova — js/features/character-avatar/scene-lighting.ts
// Shared lighting rig + camera framing. 'full' vs 'head' variants are
// implemented purely via camera framing (analogous to the old SVG viewBox),
// not via different geometry.
import { Scene, AmbientLight, DirectionalLight, PerspectiveCamera } from 'three';
import { BONE_WORLD } from './skeleton-builder.ts';

export function createLitScene(): Scene {
  const scene = new Scene();
  scene.add(new AmbientLight('#ffffff', 0.7));
  const key = new DirectionalLight('#ffffff', 1.1);
  key.position.set(1.2, 2, 2.5);
  scene.add(key);
  const fill = new DirectionalLight('#bcd4ff', 0.35);
  fill.position.set(-1.5, 0.5, -1);
  scene.add(fill);
  return scene;
}

// The head bone's rest-pose position is a fixed rig constant (independent of
// appearance), so the camera can be framed without needing a built character.
export function createCamera(variant: 'full' | 'head', aspect: number): PerspectiveCamera {
  const camera = new PerspectiveCamera(variant === 'head' ? 28 : 32, aspect, 0.1, 20);
  if (variant === 'head') {
    const [hx, hy, hz] = BONE_WORLD.head;
    camera.position.set(hx, hy + 0.05, hz + 1.25);
    camera.lookAt(hx, hy, hz);
  } else {
    camera.position.set(0, 1.0, 3.4);
    camera.lookAt(0, 0.85, 0);
  }
  return camera;
}

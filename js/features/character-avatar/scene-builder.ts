// Vymova — js/features/character-avatar/scene-builder.ts
// Pure procedural geometry builder for the 3D character avatar.
// No DOM, no WebGL — safe to unit-test directly.
import {
  Group, Mesh,
  SphereGeometry, CapsuleGeometry, CylinderGeometry, ConeGeometry, BoxGeometry,
  MeshStandardMaterial,
} from 'three';
import type { Object3D } from 'three';
import type { CharacterAppearance } from '../../../src/types.ts';
import {
  SKIN_TONES, HAIR_COLORS, EYE_COLORS, HAIR_STYLES, OUTFIT_STYLES, OUTFIT_COLORS,
} from './appearance-options.ts';

export function clampIdx(i: number, len: number): number {
  return ((i % len) + len) % len;
}

export interface BuiltCharacter {
  group: Group;
  torso: Object3D;
  headAnchor: Object3D;
  eyelids: Object3D[];
  dispose(): void;
}

function disposeMesh(mesh: Mesh): void {
  mesh.geometry.dispose();
  const mat = mesh.material;
  if (Array.isArray(mat)) mat.forEach(m => m.dispose());
  else mat.dispose();
}

function disposeGroup(root: Object3D): void {
  root.traverse((obj: Object3D) => {
    if (obj instanceof Mesh) disposeMesh(obj);
  });
}

// Half-dome "cap" shared by most hair styles, mirrors the old SVG <path> cap.
function hairCap(color: string): Mesh {
  const mesh = new Mesh(
    new SphereGeometry(0.62, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.55),
    new MeshStandardMaterial({ color, roughness: 0.7 }),
  );
  mesh.position.y = 1.55;
  return mesh;
}

export function buildHair(style: string, color: string): Mesh[] {
  if (style === 'bald') return [];

  if (style === 'short') return [hairCap(color)];

  if (style === 'long') {
    const cap = hairCap(color);
    const strandGeo = new CapsuleGeometry(0.08, 0.7, 4, 8);
    const mat = new MeshStandardMaterial({ color, roughness: 0.7 });
    const left = new Mesh(strandGeo, mat);
    left.position.set(-0.58, 1.05, 0);
    const right = new Mesh(strandGeo, mat.clone());
    right.position.set(0.58, 1.05, 0);
    return [cap, left, right];
  }

  if (style === 'curly') {
    const cap = hairCap(color);
    const bumpGeo = new SphereGeometry(0.16, 10, 8);
    const mat = new MeshStandardMaterial({ color, roughness: 0.8 });
    const bumps = [-0.45, -0.22, 0, 0.22, 0.45].map(x => {
      const m = new Mesh(bumpGeo, mat.clone());
      m.position.set(x, 1.78, 0.15);
      return m;
    });
    return [cap, ...bumps];
  }

  if (style === 'mohawk') {
    const mesh = new Mesh(
      new BoxGeometry(0.16, 0.6, 0.5),
      new MeshStandardMaterial({ color, roughness: 0.7 }),
    );
    mesh.position.y = 1.9;
    return [mesh];
  }

  if (style === 'ponytail') {
    const cap = hairCap(color);
    const tail = new Mesh(
      new ConeGeometry(0.16, 0.75, 10),
      new MeshStandardMaterial({ color, roughness: 0.7 }),
    );
    tail.position.set(0.55, 1.15, -0.25);
    tail.rotation.x = Math.PI * 0.55;
    return [cap, tail];
  }

  if (style === 'bun') {
    const cap = hairCap(color);
    const bun = new Mesh(
      new SphereGeometry(0.22, 12, 10),
      new MeshStandardMaterial({ color, roughness: 0.7 }),
    );
    bun.position.set(0.5, 1.75, -0.1);
    return [cap, bun];
  }

  // spiky
  const cap = hairCap(color);
  const spikeGeo = new ConeGeometry(0.1, 0.4, 8);
  const mat = new MeshStandardMaterial({ color, roughness: 0.7 });
  const spikes = [-0.45, -0.27, -0.09, 0.09, 0.27, 0.45].map(x => {
    const m = new Mesh(spikeGeo, mat.clone());
    m.position.set(x, 1.9, 0);
    return m;
  });
  return [cap, ...spikes];
}

export function buildCharacterGroup(appearance: CharacterAppearance): BuiltCharacter {
  const skin = SKIN_TONES[clampIdx(appearance.skinTone, SKIN_TONES.length)];
  const hairColor = HAIR_COLORS[clampIdx(appearance.hairColor, HAIR_COLORS.length)];
  const hairStyle = HAIR_STYLES[clampIdx(appearance.hairStyle, HAIR_STYLES.length)];
  const eyeColor = EYE_COLORS[clampIdx(appearance.eyeColor, EYE_COLORS.length)];
  const outfitStyle = OUTFIT_STYLES[clampIdx(appearance.outfitStyle, OUTFIT_STYLES.length)];
  const outfitColor = OUTFIT_COLORS[clampIdx(appearance.outfitColor, OUTFIT_COLORS.length)];

  const group = new Group();
  const skinMat = new MeshStandardMaterial({ color: skin, roughness: 0.6 });
  const outfitMat = new MeshStandardMaterial({ color: outfitColor, roughness: 0.65 });
  const pantsMat = new MeshStandardMaterial({ color: '#34495e', roughness: 0.7 });
  const shoeMat = new MeshStandardMaterial({ color: '#1c2833', roughness: 0.5 });

  // Torso
  const torso = new Mesh(new CapsuleGeometry(0.42, 0.7, 4, 12), outfitMat);
  torso.position.y = 0.95;
  group.add(torso);

  // Outfit accents
  if (outfitStyle === 'hoodie') {
    const zip = new Mesh(new BoxGeometry(0.04, 0.55, 0.04), new MeshStandardMaterial({ color: '#00000033', roughness: 0.9 }));
    zip.position.set(0, 0.9, 0.43);
    group.add(zip);
  } else if (outfitStyle === 'jacket') {
    const stripe = new Mesh(new BoxGeometry(0.06, 0.6, 0.04), new MeshStandardMaterial({ color: '#00000033', roughness: 0.9 }));
    stripe.position.set(0, 0.9, 0.43);
    group.add(stripe);
  } else if (outfitStyle === 'overalls') {
    const strapMat = new MeshStandardMaterial({ color: outfitColor, roughness: 0.65 });
    [-0.22, 0.22].forEach(x => {
      const strap = new Mesh(new BoxGeometry(0.1, 0.5, 0.06), strapMat);
      strap.position.set(x, 1.3, 0.4);
      group.add(strap);
    });
  }

  // Arms
  const armGeo = new CapsuleGeometry(0.1, 0.62, 4, 8);
  [-0.5, 0.5].forEach(x => {
    const arm = new Mesh(armGeo, outfitMat);
    arm.position.set(x, 0.95, 0);
    group.add(arm);
    const hand = new Mesh(new SphereGeometry(0.1, 10, 8), skinMat);
    hand.position.set(x, 0.6, 0);
    group.add(hand);
  });

  // Legs / dress
  if (outfitStyle === 'dress') {
    const dress = new Mesh(new CylinderGeometry(0.2, 0.5, 0.85, 16), outfitMat);
    dress.position.y = 0.15;
    group.add(dress);
  } else {
    const legGeo = new CapsuleGeometry(0.14, 0.7, 4, 8);
    [-0.18, 0.18].forEach(x => {
      const leg = new Mesh(legGeo, pantsMat);
      leg.position.set(x, 0.15, 0);
      group.add(leg);
      const shoe = new Mesh(new BoxGeometry(0.2, 0.12, 0.32), shoeMat);
      shoe.position.set(x, -0.27, 0.05);
      group.add(shoe);
    });
  }

  // Neck
  const neck = new Mesh(new CylinderGeometry(0.14, 0.16, 0.14, 10), skinMat);
  neck.position.y = 1.42;
  group.add(neck);

  // Head
  const headAnchor = new Group();
  headAnchor.position.y = 1.7;
  group.add(headAnchor);

  const head = new Mesh(new SphereGeometry(0.45, 20, 16), skinMat);
  headAnchor.add(head);

  // Ears
  const earGeo = new SphereGeometry(0.07, 10, 8);
  [-0.45, 0.45].forEach(x => {
    const ear = new Mesh(earGeo, skinMat);
    ear.position.set(x, 0, 0);
    headAnchor.add(ear);
  });

  // Eyes
  const eyeWhiteGeo = new SphereGeometry(0.07, 10, 8);
  const eyeWhiteMat = new MeshStandardMaterial({ color: '#ffffff', roughness: 0.3 });
  const pupilGeo = new SphereGeometry(0.038, 8, 6);
  const pupilMat = new MeshStandardMaterial({ color: eyeColor, roughness: 0.4 });
  const eyelids: Object3D[] = [];
  [-0.17, 0.17].forEach(x => {
    const eyeGroup = new Group();
    eyeGroup.position.set(x, 0.05, 0.39);
    const white = new Mesh(eyeWhiteGeo, eyeWhiteMat);
    eyeGroup.add(white);
    const pupil = new Mesh(pupilGeo, pupilMat);
    pupil.position.z = 0.05;
    eyeGroup.add(pupil);
    headAnchor.add(eyeGroup);
    eyelids.push(eyeGroup);
  });

  // Hair
  const hairMeshes = buildHair(hairStyle, hairColor);
  hairMeshes.forEach(m => headAnchor.add(m));

  return {
    group,
    torso,
    headAnchor,
    eyelids,
    dispose(): void {
      disposeGroup(group);
    },
  };
}

export function cacheKeyFor(appearance: CharacterAppearance, variant: 'full' | 'head', size: number): string {
  const skinTone = clampIdx(appearance.skinTone, SKIN_TONES.length);
  const hairStyle = clampIdx(appearance.hairStyle, HAIR_STYLES.length);
  const hairColor = clampIdx(appearance.hairColor, HAIR_COLORS.length);
  const eyeColor = clampIdx(appearance.eyeColor, EYE_COLORS.length);
  const outfitStyle = clampIdx(appearance.outfitStyle, OUTFIT_STYLES.length);
  const outfitColor = clampIdx(appearance.outfitColor, OUTFIT_COLORS.length);
  return `${variant}|${size}|${skinTone}.${hairStyle}.${hairColor}.${eyeColor}.${outfitStyle}.${outfitColor}`;
}

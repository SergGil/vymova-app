// Vymova — js/features/character-avatar.tsx
// Thin re-export: implementation now lives in ./character-avatar/ (3D via three.js).
// Kept as a stable import path so profile-page.tsx / profile-switcher.tsx /
// duel-leaderboard.tsx don't need to change their import specifiers.
export * from './character-avatar/index.tsx';

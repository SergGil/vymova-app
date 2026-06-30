// Vymova — js/features/duel-powerups.tsx
// Рядок паверапів ігрового екрану дуелі (item 32, Фаза 5). Чисте
// відображення знімку `_getPowerupsData()`; клік делегується в
// `_onPowerupClick()` (duel.ts), яка зберігає весь guard/state-machine.
import type { ReactElement } from 'react';
import { _getPowerupsData, _onPowerupClick, POWERUPS, type PowerupType } from './duel.ts';
import { t } from './i18n.ts';
import { notifyStateChange } from '../../src/store.ts';
import { useDuelRoomState } from '../../src/duel-room-store.ts';

export function DuelPowerups(): ReactElement | null {
  useDuelRoomState();
  const d = _getPowerupsData();
  if (!d.enabled) return null;
  return (
    <div
      style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap', marginTop: 6 }}
    >
      {POWERUPS.map((p) => {
        const left = d.myPowerups[p.id];
        // 🧊 Freeze — лише в Tempo; в інших режимах показуємо затемненим з поясненням
        const unavailable = p.id === 'freeze' && d.mode !== 'tempo';
        const canUse = left > 0 && !d.answered && !unavailable;
        const titleText = unavailable
          ? t('duel.pu.freeze.unavail')
          : `${t('duel.pu.' + p.id + '.desc')}${left > 0 ? ` (×${left} ${t('duel.pu.left')})` : ` (${t('duel.pu.used')})`}`;
        const borderColor = unavailable
          ? 'var(--border)'
          : left > 0
            ? 'var(--accent)'
            : 'var(--border)';
        const bgColor = unavailable
          ? 'transparent'
          : left > 0
            ? 'rgba(0,200,100,.08)'
            : 'var(--bg2)';
        const textColor = unavailable
          ? 'var(--text3)'
          : left > 0
            ? 'var(--accent)'
            : 'var(--text3)';
        const opacity = unavailable ? '0.4' : '1';
        return (
          <button
            key={p.id}
            title={titleText}
            style={{
              padding: '5px 8px',
              borderRadius: 9,
              border: `1.5px solid ${borderColor}`,
              background: bgColor,
              cursor: canUse ? 'pointer' : 'default',
              fontSize: '.78rem',
              color: textColor,
              opacity,
              // pointer-events замість disabled: на iOS Safari disabled-кнопка
              // все ще ковтає тапи, що може блокувати сусідню кнопку в рядку.
              pointerEvents: canUse ? 'auto' : 'none',
              transition: 'opacity .2s',
              fontFamily: 'inherit',
            }}
            onClick={() => {
              if (canUse) _onPowerupClick(p.id as PowerupType);
            }}
          >
            {p.icon} {p.id === 'double' ? '×2' : t('duel.pu.' + p.id + '.label')}
            {!unavailable && left > 0 ? ` (${left})` : ''}
            {unavailable ? ' 🚫' : ''}
          </button>
        );
      })}
    </div>
  );
}

export function refreshDuelPowerups(): void {
  notifyStateChange();
}

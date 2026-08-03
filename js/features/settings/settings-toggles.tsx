// Vymova — js/features/settings/settings-toggles.tsx
// The Settings page's simple on/off preference switches (SRS priority,
// haptic feedback, reduced motion, high contrast) — first slice of
// settings.tsx's imperative-DOM giant useEffect converted to real React
// state (legacy-modernization-roadmap.md item 4). Each toggle owns its own
// localStorage-backed state instead of settings.tsx reaching into the DOM
// by id to read/write .checked and status text by hand.
//
// Deliberately NOT included here: haptic's touch-device/iOS section-hiding
// and disabled-state logic, and the fandom theme skins — those still live
// in settings.tsx's effect (unrelated concerns, kept out of this slice to
// keep it small and low-risk; the ids below are preserved so that
// settings.tsx's existing `getElementById('haptic-toggle')`-based logic
// keeps working unchanged against this React-rendered element).
import { useEffect, useState, type ReactElement } from 'react';
import { isSrsPriorityEnabled } from '../../core/srs.ts';
import { t } from '../i18n.ts';
import { Switch } from '../../../src/components/ui/switch.tsx';

function SettingsToggle({
  id,
  checked,
  onChange,
  onLabel,
  offLabel,
  disabled,
}: {
  id: string;
  checked: boolean;
  onChange: (next: boolean) => void;
  onLabel: string;
  offLabel: string;
  disabled?: boolean;
}): ReactElement {
  return (
    <>
      <Switch id={id} checked={checked} onCheckedChange={onChange} disabled={disabled} />
      <span style={{ fontSize: '.85rem', color: 'var(--text2)' }}>
        {checked ? onLabel : offLabel}
      </span>
    </>
  );
}

export function SrsPriorityToggle(): ReactElement {
  const [checked, setChecked] = useState(isSrsPriorityEnabled);
  return (
    <SettingsToggle
      id="srs-priority-toggle"
      checked={checked}
      onChange={(v) => {
        localStorage.setItem('ew_srs_priority', v ? '1' : '0');
        setChecked(v);
      }}
      onLabel={t('settings.srsPriorityOn')}
      offLabel={t('settings.srsPriorityOff')}
    />
  );
}

function hapticEnabledDefault(): boolean {
  return localStorage.getItem('ew_haptic') !== '0';
}

// iOS has no Vibration API — settings.tsx's own effect still hides this
// whole section on non-touch devices (a structural DOM concern, left there),
// but "disabled" itself has to be real React state: base-ui's Switch reads
// its `disabled` prop at click time, not the hidden mirror <input>'s own
// .disabled DOM property, so the old `getElementById('haptic-toggle')
// .disabled = true` trick that worked on a plain native checkbox silently
// stopped blocking clicks once this became a Switch.
function hapticUnsupported(): boolean {
  return navigator.maxTouchPoints > 0 && !('vibrate' in navigator);
}

export function HapticToggle(): ReactElement {
  const [checked, setChecked] = useState(hapticEnabledDefault);
  return (
    <SettingsToggle
      id="haptic-toggle"
      checked={checked}
      disabled={hapticUnsupported()}
      onChange={(v) => {
        localStorage.setItem('ew_haptic', v ? '1' : '0');
        setChecked(v);
      }}
      onLabel={t('settings.hapticOn')}
      offLabel={t('settings.hapticOff')}
    />
  );
}

function reducedMotionEnabledDefault(): boolean {
  const stored = localStorage.getItem('ew_reduced_motion');
  if (stored === '1') return true;
  if (stored === '0') return false;
  return !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
}

export function ReducedMotionToggle(): ReactElement {
  const [checked, setChecked] = useState(reducedMotionEnabledDefault);

  useEffect(() => {
    document.body.classList.toggle('reduced-motion', checked);
  }, [checked]);

  // Track the OS-level preference live, but only while the user hasn't set
  // an explicit override — mirrors the auto-dark-mode listener pattern.
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const onChange = () => {
      if (!localStorage.getItem('ew_reduced_motion')) setChecked(!!mq?.matches);
    };
    mq?.addEventListener('change', onChange);
    return () => mq?.removeEventListener('change', onChange);
  }, []);

  return (
    <SettingsToggle
      id="reduced-motion-toggle"
      checked={checked}
      onChange={(v) => {
        localStorage.setItem('ew_reduced_motion', v ? '1' : '0');
        setChecked(v);
      }}
      onLabel={t('settings.reducedMotionOn')}
      offLabel={t('settings.reducedMotionOff')}
    />
  );
}

function highContrastEnabledDefault(): boolean {
  return localStorage.getItem('ew_high_contrast') === '1';
}

export function HighContrastToggle(): ReactElement {
  const [checked, setChecked] = useState(highContrastEnabledDefault);

  useEffect(() => {
    document.body.classList.toggle('high-contrast', checked);
  }, [checked]);

  return (
    <SettingsToggle
      id="high-contrast-toggle"
      checked={checked}
      onChange={(v) => {
        localStorage.setItem('ew_high_contrast', v ? '1' : '0');
        setChecked(v);
      }}
      onLabel={t('settings.highContrastOn')}
      offLabel={t('settings.highContrastOff')}
    />
  );
}

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ProfileSwitcher } from '../../js/features/profile-switcher.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { renderDuel } = vi.hoisted(() => ({ renderDuel: vi.fn() }));
vi.mock('../../js/features/duel.ts', () => ({ renderDuel }));

const LIST_KEY = 'ew_profiles';
const ACTIVE_KEY = 'ew_active_profile';

function setupProfiles(
  profiles: { id: string; name: string; avatar: string }[],
  activeId: string,
): void {
  localStorage.setItem(LIST_KEY, JSON.stringify(profiles));
  localStorage.setItem(ACTIVE_KEY, activeId);
}

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<ProfileSwitcher />);
  });
  return { container, root };
}

describe('profile-switcher.tsx ProfileSwitcher', () => {
  let roots: Root[] = [];
  let reloadSpy: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="profile-btn"></div>
      <div id="prf-delete-overlay"></div>
    `;
    localStorage.clear();
    setupProfiles(
      [
        { id: 'p1', name: 'Alice', avatar: '🧑' },
        { id: 'p2', name: 'Bob', avatar: '🦊' },
      ],
      'p1',
    );
    roots = [];
    renderDuel.mockClear();
    reloadSpy = vi.fn();
    Object.defineProperty(window, 'location', {
      value: { ...window.location, reload: reloadSpy },
      writable: true,
    });
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('renders the active profile and updates the legacy header button', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelector('#sb-profile-name')!.textContent).toBe('Alice');
    expect(
      container.querySelector('#sb-profile-av [aria-label="character avatar"]'),
    ).not.toBeNull();
    expect(document.getElementById('profile-btn')!.innerHTML).toContain('Alice');
  });

  it('toggles the profile dropdown and shows all profiles with a checkmark on the active one', () => {
    const { container, root } = mount();
    roots.push(root);
    act(() => {
      (container.querySelector('#sb-profile-btn') as HTMLButtonElement).click();
    });

    const dropdown = container.querySelector('#sb-dropdown')!;
    expect(dropdown.className).toContain('open');
    const items = dropdown.querySelectorAll('.sb-dd-item');
    expect(items.length).toBe(2);
    expect(items[0].querySelector('.sb-dd-check')).not.toBeNull();
    expect(items[1].querySelector('.sb-dd-check')).toBeNull();
  });

  it('clicking the same active profile in the dropdown closes it without reloading', () => {
    const { container, root } = mount();
    roots.push(root);
    act(() => {
      (container.querySelector('#sb-profile-btn') as HTMLButtonElement).click();
    });
    const items = container.querySelectorAll('.sb-dd-item');
    act(() => {
      (items[0] as HTMLButtonElement).click();
    });

    expect(container.querySelector('#sb-dropdown')!.className).not.toContain('open');
    expect(reloadSpy).not.toHaveBeenCalled();
  });

  it('switching to a different profile saves a snapshot, sets the active id and reloads', () => {
    localStorage.setItem('ew_known', '["hello"]');
    const { container, root } = mount();
    roots.push(root);
    act(() => {
      (container.querySelector('#sb-profile-btn') as HTMLButtonElement).click();
    });
    const items = container.querySelectorAll('.sb-dd-item');
    act(() => {
      (items[1] as HTMLButtonElement).click();
    });

    expect(localStorage.getItem('ew_p_p1__ew_known')).toBe('["hello"]');
    expect(localStorage.getItem(ACTIVE_KEY)).toBe('p2');
    expect(reloadSpy).toHaveBeenCalled();
  });

  it('opens the add-profile form and shows an error for an empty name', async () => {
    const { container, root } = mount();
    roots.push(root);
    act(() => {
      (container.querySelector('#sb-add-btn') as HTMLButtonElement).click();
    });
    expect(container.querySelector('#sb-add-form')!.className).toContain('open');

    act(() => {
      (container.querySelector('#sb-new-confirm') as HTMLButtonElement).click();
    });
    const input = container.querySelector('#sb-new-name') as HTMLInputElement;
    expect(input.style.border).toContain('#e74c3c');
    expect(reloadSpy).not.toHaveBeenCalled();
  });

  it('creates a new profile and reloads', () => {
    const { container, root } = mount();
    roots.push(root);
    act(() => {
      (container.querySelector('#sb-add-btn') as HTMLButtonElement).click();
    });

    const input = container.querySelector('#sb-new-name') as HTMLInputElement;
    const nativeValueSetter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    )!.set!;
    act(() => {
      nativeValueSetter.call(input, 'Carol');
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    act(() => {
      (container.querySelector('#sb-new-confirm') as HTMLButtonElement).click();
    });

    const profiles = JSON.parse(localStorage.getItem(LIST_KEY)!);
    expect(profiles).toHaveLength(3);
    expect(profiles[2].name).toBe('Carol');
    expect(localStorage.getItem('ew_onboarding_needed')).toBe('1');
    expect(reloadSpy).toHaveBeenCalled();
  });

  it('opens the edit modal, validates an empty name, and saves changes', () => {
    const { container, root } = mount();
    roots.push(root);
    act(() => {
      (container.querySelector('#sb-profile-btn') as HTMLButtonElement).click();
    });
    const editBtn = container.querySelectorAll('.prf-dd-edit')[0] as HTMLButtonElement;
    act(() => {
      editBtn.click();
    });

    const overlay = document.getElementById('prf-edit-overlay') as HTMLElement;
    expect(overlay).not.toBeNull();
    const nameInput = overlay.querySelector('input') as HTMLInputElement;
    const nativeValueSetter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      'value',
    )!.set!;

    act(() => {
      nativeValueSetter.call(nameInput, '');
      nameInput.dispatchEvent(new Event('input', { bubbles: true }));
    });
    const saveBtn = Array.from(overlay.querySelectorAll('button')).find(
      (b) => b.textContent === 'Зберегти',
    ) as HTMLButtonElement;
    act(() => {
      saveBtn.click();
    });
    expect(nameInput.style.border).toContain('#e74c3c');
    expect(document.getElementById('prf-edit-overlay')).not.toBeNull();

    act(() => {
      nativeValueSetter.call(nameInput, 'Alice2');
      nameInput.dispatchEvent(new Event('input', { bubbles: true }));
    });
    const avatarBtn = overlay.querySelectorAll('.prf-av-btn')[2] as HTMLButtonElement;
    act(() => {
      avatarBtn.click();
    });
    act(() => {
      saveBtn.click();
    });

    expect(document.getElementById('prf-edit-overlay')).toBeNull();
    const profiles = JSON.parse(localStorage.getItem(LIST_KEY)!);
    expect(profiles[0].name).toBe('Alice2');
    expect(renderDuel).toHaveBeenCalled();
  });

  it('closes the edit modal via the cancel button without saving', () => {
    const { container, root } = mount();
    roots.push(root);
    act(() => {
      (container.querySelector('#sb-profile-btn') as HTMLButtonElement).click();
    });
    const editBtn = container.querySelectorAll('.prf-dd-edit')[0] as HTMLButtonElement;
    act(() => {
      editBtn.click();
    });

    const overlay = document.getElementById('prf-edit-overlay') as HTMLElement;
    const cancelBtn = Array.from(overlay.querySelectorAll('button')).find(
      (b) => b.textContent === 'Скасувати',
    ) as HTMLButtonElement;
    act(() => {
      cancelBtn.click();
    });

    expect(document.getElementById('prf-edit-overlay')).toBeNull();
    const profiles = JSON.parse(localStorage.getItem(LIST_KEY)!);
    expect(profiles[0].name).toBe('Alice');
  });

  it('shows the delete button only when more than one profile exists', () => {
    setupProfiles([{ id: 'p1', name: 'Alice', avatar: '🧑' }], 'p1');
    const { container, root } = mount();
    roots.push(root);
    act(() => {
      (container.querySelector('#sb-profile-btn') as HTMLButtonElement).click();
    });
    expect(container.querySelectorAll('.prf-dd-del').length).toBe(0);
  });

  it('deletes a non-active profile from the dropdown', () => {
    const { container, root } = mount();
    roots.push(root);
    act(() => {
      (container.querySelector('#sb-profile-btn') as HTMLButtonElement).click();
    });
    const delBtn = container.querySelectorAll('.prf-dd-del')[1] as HTMLButtonElement;
    act(() => {
      delBtn.click();
    });

    const overlay = document.getElementById('prf-delete-overlay') as HTMLElement;
    expect(overlay.classList.contains('open')).toBe(true);
    expect(overlay.querySelector('#prf-delete-name')!.textContent).toContain('Bob');

    const confirmBtn = overlay.querySelector('.prf-delete-btn-confirm') as HTMLButtonElement;
    act(() => {
      confirmBtn.click();
    });

    const profiles = JSON.parse(localStorage.getItem(LIST_KEY)!);
    expect(profiles).toHaveLength(1);
    expect(profiles[0].id).toBe('p1');
    expect(overlay.classList.contains('open')).toBe(false);
    expect(reloadSpy).not.toHaveBeenCalled();
  });

  it('cancelling the delete dialog keeps the profile', () => {
    const { container, root } = mount();
    roots.push(root);
    act(() => {
      (container.querySelector('#sb-profile-btn') as HTMLButtonElement).click();
    });
    const delBtn = container.querySelectorAll('.prf-dd-del')[1] as HTMLButtonElement;
    act(() => {
      delBtn.click();
    });

    const overlay = document.getElementById('prf-delete-overlay') as HTMLElement;
    const cancelBtn = overlay.querySelector('.prf-delete-btn-cancel') as HTMLButtonElement;
    act(() => {
      cancelBtn.click();
    });

    expect(overlay.classList.contains('open')).toBe(false);
    const profiles = JSON.parse(localStorage.getItem(LIST_KEY)!);
    expect(profiles).toHaveLength(2);
  });

  it('deleting the active profile selects the next one and reloads', () => {
    const { container, root } = mount();
    roots.push(root);
    act(() => {
      (container.querySelector('#sb-profile-btn') as HTMLButtonElement).click();
    });
    const delBtn = container.querySelectorAll('.prf-dd-del')[0] as HTMLButtonElement;
    act(() => {
      delBtn.click();
    });

    const overlay = document.getElementById('prf-delete-overlay') as HTMLElement;
    const confirmBtn = overlay.querySelector('.prf-delete-btn-confirm') as HTMLButtonElement;
    act(() => {
      confirmBtn.click();
    });

    const profiles = JSON.parse(localStorage.getItem(LIST_KEY)!);
    expect(profiles).toHaveLength(1);
    expect(profiles[0].id).toBe('p2');
    expect(localStorage.getItem(ACTIVE_KEY)).toBe('p2');
    expect(reloadSpy).toHaveBeenCalled();
  });

  it('closes the dropdown and add form when clicking outside', () => {
    const { container, root } = mount();
    roots.push(root);
    act(() => {
      (container.querySelector('#sb-profile-btn') as HTMLButtonElement).click();
    });
    expect(container.querySelector('#sb-dropdown')!.className).toContain('open');

    act(() => {
      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(container.querySelector('#sb-dropdown')!.className).not.toContain('open');
  });
});

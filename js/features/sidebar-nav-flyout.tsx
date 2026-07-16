// Vymova — js/features/sidebar-nav-flyout.tsx
// Sidebar nav-group hover-flyout submenus (🤖 ШІ навчання, 🎬 Відео
// навчання) — second sidebar.tsx slice (legacy-modernization-roadmap.md
// item 5). Isolated into its own file for testability; still DOM-driven
// (not real React state) — the positioning math and the .body reparenting
// trick (to escape .sidebar's stacking context) are exactly the kind of
// thing that's risky to rewrite into a different mechanism without a real
// browser to visually verify against, so this keeps the original approach
// and only moves it out of sidebar.tsx's giant effect.
//
// Navigation itself (openPage() on click) is NOT handled here — the
// flyout's .sb-btn links are wired by sidebar.tsx's own NAV_LINKS loop;
// this component only opens/closes/positions the flyout panel and closes
// it once a link inside has been clicked.
import { useEffect, type ReactElement } from 'react';

export function NavFlyoutController(): ReactElement | null {
  useEffect(() => {
    const groupCleanups: Array<() => void> = [];
    const allFlyoutGroups: Array<{ group: HTMLElement; flyout: HTMLElement }> = [];
    const closeOtherFlyouts = (except: HTMLElement) => {
      allFlyoutGroups.forEach(({ group: g, flyout: f }) => {
        if (f !== except) {
          f.classList.remove('open');
          g.classList.remove('open');
        }
      });
    };

    document.querySelectorAll<HTMLElement>('.sb-group').forEach((group) => {
      const trigger = group.querySelector<HTMLElement>('.sb-group-trigger');
      const flyout = group.querySelector<HTMLElement>('.sb-flyout');
      if (!trigger || !flyout) return;
      // .sidebar has its own z-index, which makes it a stacking context —
      // any z-index on a fixed-position descendant only ranks against that
      // context's siblings, so the flyout would stay pinned behind page
      // overlays no matter how high its z-index goes. Move it to <body> so
      // it competes in the top-level stacking order instead.
      const flyoutPlaceholder = document.createComment('sb-flyout-slot');
      flyout.before(flyoutPlaceholder);
      document.body.appendChild(flyout);
      let closeTimer: ReturnType<typeof setTimeout> | null = null;
      const isMobile = () => window.innerWidth <= 900;
      const positionFlyout = () => {
        const r = trigger.getBoundingClientRect();
        if (isMobile()) {
          flyout.style.left = `${r.left}px`;
          flyout.style.top = `${r.bottom + 2}px`;
          flyout.style.width = `${r.width}px`;
        } else {
          flyout.style.left = `${r.right + 4}px`;
          flyout.style.top = `${r.top}px`;
          flyout.style.width = '';
        }
      };
      const openFlyout = () => {
        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
        if (isMobile()) return;
        closeOtherFlyouts(flyout);
        positionFlyout();
        flyout.classList.add('open');
      };
      const scheduleClose = () => {
        closeTimer = setTimeout(() => flyout.classList.remove('open'), 150);
      };
      const onTriggerEnter = () => openFlyout();
      const onTriggerLeave = () => {
        if (!isMobile()) scheduleClose();
      };
      const onFlyoutEnter = () => {
        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
      };
      const onFlyoutLeave = () => scheduleClose();
      const onTriggerClick = (e: MouseEvent) => {
        e.preventDefault();
        const willOpen = !flyout.classList.contains('open');
        if (willOpen) {
          closeOtherFlyouts(flyout);
          positionFlyout();
        }
        flyout.classList.toggle('open', willOpen);
        group.classList.toggle('open', willOpen);
      };
      const onFlyoutItemClick = (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest('a.sb-btn')) {
          flyout.classList.remove('open');
          group.classList.remove('open');
        }
      };
      trigger.addEventListener('mouseenter', onTriggerEnter);
      trigger.addEventListener('mouseleave', onTriggerLeave);
      flyout.addEventListener('mouseenter', onFlyoutEnter);
      flyout.addEventListener('mouseleave', onFlyoutLeave);
      trigger.addEventListener('click', onTriggerClick);
      flyout.addEventListener('click', onFlyoutItemClick);
      allFlyoutGroups.push({ group, flyout });
      groupCleanups.push(() => {
        trigger.removeEventListener('mouseenter', onTriggerEnter);
        trigger.removeEventListener('mouseleave', onTriggerLeave);
        flyout.removeEventListener('mouseenter', onFlyoutEnter);
        flyout.removeEventListener('mouseleave', onFlyoutLeave);
        trigger.removeEventListener('click', onTriggerClick);
        flyout.removeEventListener('click', onFlyoutItemClick);
        if (closeTimer) clearTimeout(closeTimer);
        const idx = allFlyoutGroups.findIndex((x) => x.flyout === flyout);
        if (idx !== -1) allFlyoutGroups.splice(idx, 1);
        flyoutPlaceholder.replaceWith(flyout);
      });
    });

    const onDocClickCloseGroups = (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>('.sb-group').forEach((group) => {
        // The flyout itself lives under <body> now (see the reparenting
        // above), so it's no longer a descendant of .sb-group — look it up
        // by id instead of group.querySelector.
        const flyoutEl = document.getElementById(`${group.id}-flyout`);
        const target = e.target as Node;
        if (!group.contains(target) && !flyoutEl?.contains(target)) {
          group.classList.remove('open');
          flyoutEl?.classList.remove('open');
        }
      });
    };
    document.addEventListener('click', onDocClickCloseGroups);

    return () => {
      groupCleanups.forEach((fn) => fn());
      document.removeEventListener('click', onDocClickCloseGroups);
    };
  }, []);

  return null;
}

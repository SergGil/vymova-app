// First test file in this repo written with @testing-library/react instead
// of the raw react-dom/client + querySelector pattern used elsewhere (see
// docs/legacy-modernization-roadmap.md item 4) — new tests only, existing
// suites are intentionally left as-is.
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InfoIcon, InfoNote } from '../../js/features/info-icon.tsx';

describe('<InfoIcon/>', () => {
  it('renders a button labeled and titled with the given label', () => {
    render(<InfoIcon open={false} onToggle={vi.fn()} label="Пояснення" />);
    const btn = screen.getByRole('button', { name: 'Пояснення' });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute('title', 'Пояснення');
  });

  it('reflects the open state via aria-expanded and an "active" class', () => {
    const { rerender } = render(<InfoIcon open={false} onToggle={vi.fn()} label="l" />);
    const btn = screen.getByRole('button', { name: 'l' });
    expect(btn).toHaveAttribute('aria-expanded', 'false');
    expect(btn.className).not.toContain('active');

    rerender(<InfoIcon open={true} onToggle={vi.fn()} label="l" />);
    expect(btn).toHaveAttribute('aria-expanded', 'true');
    expect(btn.className).toContain('active');
  });

  it('calls onToggle when clicked', async () => {
    const onToggle = vi.fn();
    render(<InfoIcon open={false} onToggle={onToggle} label="l" />);
    await userEvent.click(screen.getByRole('button', { name: 'l' }));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it("stops the click event from bubbling to an outer handler (so toggling the icon doesn't also trigger a parent card's own click)", async () => {
    const outerClick = vi.fn();
    render(
      <div onClick={outerClick}>
        <InfoIcon open={false} onToggle={vi.fn()} label="l" />
      </div>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'l' }));
    expect(outerClick).not.toHaveBeenCalled();
  });
});

describe('<InfoNote/>', () => {
  it('renders its children inside a .info-note container', () => {
    render(<InfoNote>Пояснювальний текст</InfoNote>);
    expect(screen.getByText('Пояснювальний текст')).toBeInTheDocument();
    expect(screen.getByText('Пояснювальний текст').closest('.info-note')).not.toBeNull();
  });

  it("stops its own click from bubbling (so clicking the note's text doesn't also close/toggle a parent card)", async () => {
    const outerClick = vi.fn();
    render(
      <div onClick={outerClick}>
        <InfoNote>text</InfoNote>
      </div>,
    );
    await userEvent.click(screen.getByText('text'));
    expect(outerClick).not.toHaveBeenCalled();
  });
});

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { AppShell } from '../../src/app-shell.tsx';

describe('<AppShell/>', () => {
  it('renders nothing when every slot and children are omitted', () => {
    const { container } = render(<AppShell />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders children when no slots are provided', () => {
    const { getByText } = render(
      <AppShell>
        <span>hello</span>
      </AppShell>,
    );
    expect(getByText('hello')).toBeInTheDocument();
  });

  it('renders sidebar, header, mainContent, overlays and children together, in that order', () => {
    const { container } = render(
      <AppShell
        sidebar={<span>sidebar</span>}
        header={<span>header</span>}
        mainContent={<span>main</span>}
        overlays={<span>overlays</span>}
      >
        <span>rest</span>
      </AppShell>,
    );
    const texts = Array.from(container.querySelectorAll('span')).map((el) => el.textContent);
    expect(texts).toEqual(['sidebar', 'header', 'main', 'overlays', 'rest']);
  });
});

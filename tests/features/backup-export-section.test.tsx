import { describe, it, expect } from 'vitest';
import { act } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BackupExportSection } from '../../js/features/export.tsx';

// full-react-migration-roadmap.md Phase 6: the "Збереження прогресу"
// backup/export block's static markup moved here; ProgressIO/
// CsvExportButton are inlined directly (their separate <Portal> wrappers
// in app-root.tsx are gone — nothing else referenced those wrapper ids).
describe('<BackupExportSection/>', () => {
  it('renders the anki/share/pdf export buttons and the export-filter select with all 3 options', async () => {
    const { container } = render(<BackupExportSection />);
    expect(document.getElementById('btn-anki-export')).not.toBeNull();
    expect(document.getElementById('btn-share')).not.toBeNull();
    expect(document.getElementById('btn-pdf-export')).not.toBeNull();
    const trigger = document.getElementById('export-filter') as HTMLElement;
    expect(trigger).not.toBeNull();

    await act(async () => {
      await userEvent.click(trigger);
    });
    expect(screen.getAllByRole('option').map((o) => o.textContent)).toEqual([
      '✓ Тільки вивчені',
      '🔴 Тільки невивчені',
      '📚 Всі слова',
    ]);
    expect(container.querySelectorAll('.backup-row')).toHaveLength(3);
  });
});

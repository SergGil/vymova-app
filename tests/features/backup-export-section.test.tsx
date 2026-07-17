import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BackupExportSection } from '../../js/features/export.tsx';

// full-react-migration-roadmap.md Phase 6: the "Збереження прогресу"
// backup/export block's static markup moved here; ProgressIO/
// CsvExportButton are inlined directly (their separate <Portal> wrappers
// in app-root.tsx are gone — nothing else referenced those wrapper ids).
describe('<BackupExportSection/>', () => {
  it('renders the anki/share/pdf export buttons and the export-filter select with all 3 options', () => {
    const { container } = render(<BackupExportSection />);
    expect(document.getElementById('btn-anki-export')).not.toBeNull();
    expect(document.getElementById('btn-share')).not.toBeNull();
    expect(document.getElementById('btn-pdf-export')).not.toBeNull();
    const select = document.getElementById('export-filter') as HTMLSelectElement;
    expect(select).not.toBeNull();
    expect(Array.from(select.options).map((o) => o.value)).toEqual(['known', 'unknown', 'all']);
    expect(container.querySelectorAll('.backup-row')).toHaveLength(3);
  });
});

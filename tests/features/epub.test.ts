import { describe, it, expect, vi } from 'vitest';
import JSZip from 'jszip';

vi.mock('../../js/core/card-engine.ts', () => ({ render: vi.fn() }));

import { loadEpub } from '../../js/features/epub.ts';

const CONTAINER_XML = `<?xml version="1.0"?>
<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`;

const OPF_XML = `<?xml version="1.0"?>
<package xmlns="http://www.idpf.org/2007/opf" version="2.0">
  <manifest>
    <item id="chap1" href="chap1.xhtml" media-type="application/xhtml+xml"/>
    <item id="chap2" href="chap2.xhtml" media-type="application/xhtml+xml"/>
  </manifest>
  <spine>
    <itemref idref="chap1"/>
    <itemref idref="chap2"/>
  </spine>
</package>`;

function chapterHtml(paragraphCount: number, wordsPerParagraph: number, prefix: string): string {
  const paragraphs = Array.from(
    { length: paragraphCount },
    (_, i) => `<p>${prefix} paragraph ${i} ${'word '.repeat(wordsPerParagraph).trim()}</p>`,
  ).join('\n');
  return `<html><body>${paragraphs}</body></html>`;
}

async function buildEpub(
  opts: { withContainer?: boolean; opfXml?: string; chapters?: Record<string, string> } = {},
): Promise<File> {
  const {
    withContainer = true,
    opfXml = OPF_XML,
    chapters = {
      'OEBPS/chap1.xhtml': chapterHtml(10, 30, 'one'),
      'OEBPS/chap2.xhtml': chapterHtml(10, 30, 'two'),
    },
  } = opts;
  const zip = new JSZip();
  if (withContainer) zip.file('META-INF/container.xml', CONTAINER_XML);
  zip.file('OEBPS/content.opf', opfXml);
  for (const [path, html] of Object.entries(chapters)) zip.file(path, html);
  const bytes = await zip.generateAsync({ type: 'uint8array' });
  // happy-dom's Blob/File support is incomplete for JSZip.loadAsync, so we
  // hand it a raw ArrayBuffer (a type JSZip natively supports) cast as File.
  return bytes.buffer as unknown as File;
}

describe('epub.ts loadEpub', () => {
  it('reports "Файл не обрано" when no file is provided', () => {
    const onProgress = vi.fn();
    const onDone = vi.fn();
    loadEpub(null as unknown as File, onProgress, onDone);
    expect(onDone).toHaveBeenCalledWith(null, 'Файл не обрано');
  });

  it('parses a valid epub into text chunks and reports progress', async () => {
    const file = await buildEpub();
    const onProgress = vi.fn();
    const onDone = vi.fn();
    loadEpub(file, onProgress, onDone);
    await vi.waitFor(() => expect(onDone).toHaveBeenCalled());

    expect(onProgress).toHaveBeenCalledWith('Відкриваємо epub…', 5);
    const [chapters, err] = onDone.mock.calls[0];
    expect(err).toBeNull();
    expect(Array.isArray(chapters)).toBe(true);
    expect(chapters.length).toBeGreaterThan(0);
    expect(chapters[0]).toContain('one paragraph');
  });

  it('reports an error when META-INF/container.xml is missing', async () => {
    const file = await buildEpub({ withContainer: false });
    const onDone = vi.fn();
    loadEpub(file, vi.fn(), onDone);
    await vi.waitFor(() => expect(onDone).toHaveBeenCalled());

    const [chapters, err] = onDone.mock.calls[0];
    expect(chapters).toBeNull();
    expect(err).toBe('Помилка: Не знайдено META-INF/container.xml');
  });

  it('reports an error when the OPF references no recognizable chapters', async () => {
    const emptyOpf = `<?xml version="1.0"?>
      <package xmlns="http://www.idpf.org/2007/opf" version="2.0">
        <manifest></manifest>
        <spine></spine>
      </package>`;
    const file = await buildEpub({ opfXml: emptyOpf, chapters: {} });
    const onDone = vi.fn();
    loadEpub(file, vi.fn(), onDone);
    await vi.waitFor(() => expect(onDone).toHaveBeenCalled());

    const [chapters, err] = onDone.mock.calls[0];
    expect(chapters).toBeNull();
    expect(err).toBe('Помилка: Немає розділів у книзі');
  });

  it('reports a generic error for an invalid (non-zip) file', async () => {
    const bytes = new TextEncoder().encode('not a zip file');
    const file = bytes.buffer as unknown as File;
    const onDone = vi.fn();
    loadEpub(file, vi.fn(), onDone);
    await vi.waitFor(() => expect(onDone).toHaveBeenCalled());

    const [chapters, err] = onDone.mock.calls[0];
    expect(chapters).toBeNull();
    expect(err).toContain('Помилка: ');
  });

  it('skips chapters shorter than the minimum text length', async () => {
    const file = await buildEpub({
      chapters: { 'OEBPS/chap1.xhtml': '<html><body><p>too short</p></body></html>' },
    });
    const onDone = vi.fn();
    loadEpub(file, vi.fn(), onDone);
    await vi.waitFor(() => expect(onDone).toHaveBeenCalled());

    const [chapters, err] = onDone.mock.calls[0];
    expect(err).toBeNull();
    expect(chapters).toEqual([]);
  });
});

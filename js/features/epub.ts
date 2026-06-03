// English Words App — js/features/epub.ts
// EPUB import for Reading mode

type ProgressFn = (msg: string, pct: number) => void;
type DoneFn = (chapters: string[] | null, err: string | null) => void;
type JSZipType = any;

export function loadEpub(file: File, onProgress: ProgressFn, onDone: DoneFn): void {
  const JSZip = (window as Window & { JSZip?: JSZipType }).JSZip;
  if (!JSZip) { onDone(null, 'JSZip не завантажено'); return; }
  if (!file)  { onDone(null, 'Файл не обрано'); return; }
  onProgress('Відкриваємо epub…', 5);
  (JSZip.loadAsync(file) as Promise<JSZipType>).then((zip: JSZipType) => {
    onProgress('Читаємо структуру…', 15);
    return _parseEpub(zip, onProgress);
  }).then((chapters: string[]) => {
    onDone(chapters, null);
  }).catch((err: Error) => {
    onDone(null, 'Помилка: ' + (err.message ?? String(err)));
  });
}
window.loadEpub = loadEpub;

function _parseEpub(zip: JSZipType, onProgress: ProgressFn): Promise<string[]> {
  const containerFile = zip.file('META-INF/container.xml');
  if (!containerFile) return Promise.reject(new Error('Не знайдено META-INF/container.xml'));
  return containerFile.async('text').then((containerXml: string) => {
    const opfMatch = containerXml.match(/full-path="([^"]+)"/);
    if (!opfMatch) return Promise.reject(new Error('OPF файл не знайдено'));
    const opfPath = opfMatch[1];
    const opfDir  = opfPath.includes('/') ? opfPath.substring(0, opfPath.lastIndexOf('/') + 1) : '';
    onProgress('Читаємо зміст книги…', 25);
    const opfFile = zip.file(opfPath);
    if (!opfFile) return Promise.reject(new Error('OPF файл не відкрито: ' + opfPath));
    return opfFile.async('text').then((opfXml: string) => _processOpf(zip, opfDir, opfXml, onProgress));
  });
}

function _processOpf(zip: JSZipType, opfDir: string, opfXml: string, onProgress: ProgressFn): Promise<string[]> {
  const opfDoc = new DOMParser().parseFromString(opfXml, 'application/xml');
  const manifest: Record<string, { href: string; mt: string }> = {};
  opfDoc.querySelectorAll('manifest item, item').forEach(item => {
    const id = item.getAttribute('id'), href = item.getAttribute('href'), mt = item.getAttribute('media-type') ?? '';
    if (id && href) manifest[id] = { href, mt };
  });
  let spineItems: string[] = Array.from(opfDoc.querySelectorAll('spine itemref, itemref'))
    .map(ref => ref.getAttribute('idref') ?? '').filter(id => id && manifest[id])
    .filter(id => { const mt = manifest[id].mt; return !mt || mt.includes('html') || mt.includes('xhtml') || mt === ''; });
  if (!spineItems.length) spineItems = Object.keys(manifest).filter(id => manifest[id].href.match(/\.(html|xhtml|htm)$/i));
  if (!spineItems.length) return Promise.reject(new Error('Немає розділів у книзі'));
  onProgress('Читаємо ' + spineItems.length + ' розділів…', 35);
  const allTexts: string[] = [];
  return spineItems.reduce((promise, id, i) =>
    promise.then(() => {
      const href = _normalizePath(opfDir + manifest[id].href);
      const chapterFile = zip.file(href) ?? zip.file(decodeURIComponent(href));
      if (!chapterFile) return;
      return chapterFile.async('text').then((html: string) => {
        const text = _extractText(html);
        if (text.length > 150) allTexts.push(text);
        onProgress('Розділ ' + (i + 1) + ' / ' + spineItems.length, 35 + Math.round((i / spineItems.length) * 50));
      });
    }), Promise.resolve()
  ).then(() => { onProgress('Обробляємо текст…', 90); return _chunksFromTexts(allTexts); });
}

function _extractText(html: string): string {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  ['script','style','nav','aside','figure','figcaption','sup','sub','table'].forEach(tag => {
    doc.querySelectorAll(tag).forEach(el => el.remove());
  });
  const paragraphs: string[] = [];
  doc.querySelectorAll('p, div, li, h1, h2, h3, h4').forEach(el => {
    const t = (el.textContent ?? '').replace(/\s+/g, ' ').trim();
    if (t.length > 20) paragraphs.push(t);
  });
  if (!paragraphs.length) paragraphs.push((doc.body.textContent ?? '').replace(/\s+/g, ' ').trim());
  return paragraphs.join(' ');
}

function _chunksFromTexts(texts: string[]): string[] {
  const TARGET = 280, chunks: string[] = [];
  texts.forEach(text => {
    const words = text.split(/\s+/).filter(Boolean);
    for (let i = 0; i < words.length; i += TARGET) {
      const slice = words.slice(i, i + TARGET).join(' ');
      if (slice.split(/\s+/).length > 40) chunks.push(slice);
    }
  });
  return chunks;
}

function _normalizePath(path: string): string {
  path = path.split('?')[0].split('#')[0];
  const result: string[] = [];
  path.split('/').forEach(p => { if (p === '..') result.pop(); else if (p && p !== '.') result.push(p); });
  return result.join('/');
}

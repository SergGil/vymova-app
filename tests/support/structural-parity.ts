// tests/support/structural-parity.ts
// docs/full-react-migration-roadmap.md, Phase 0: before deleting a static
// index.html chunk in favor of a JSX-rendered equivalent, a test in the
// migrating phase should assert the two are structurally identical (same
// tag/id/class set/attrs/nesting/text), so the "buttons still say the same
// thing, still nest the same way" guarantee doesn't rest on eyeballing a
// diff. Attribute *order* and insignificant whitespace between elements
// don't count as structural differences — JSX authoring is free to reorder
// those without changing what's rendered — but the `class`/`style`
// attributes' token/declaration order is also ignored for the same reason
// (JSX often composes classes/inline styles in a different order than the
// original hand-written HTML, and React's own inline-style serialization
// format doesn't byte-match hand-written `style="..."` strings either).
function normalizeAttrValue(name: string, value: string): string {
  if (name === 'class') return value.trim().split(/\s+/).sort().join(' ');
  if (name === 'style') {
    return value
      .split(';')
      .map((decl) => decl.trim().replace(/\s*:\s*/, ':'))
      .filter(Boolean)
      .sort()
      .join(';');
  }
  return value;
}

function normalizeNode(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.textContent?.trim();
    return text ? JSON.stringify(text) : '';
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return '';
  const el = node as Element;
  const attrs = Array.from(el.attributes)
    .map((a) => `${a.name}=${JSON.stringify(normalizeAttrValue(a.name, a.value))}`)
    .sort()
    .join(' ');
  const children = Array.from(el.childNodes).map(normalizeNode).filter(Boolean).join('');
  return `<${el.tagName.toLowerCase()} ${attrs}>${children}</${el.tagName.toLowerCase()}>`;
}

/** Parses an HTML fragment string into a normalized, order-insensitive form. */
export function normalizeHtml(html: string): string {
  const container = document.createElement('div');
  container.innerHTML = html.trim();
  return Array.from(container.childNodes).map(normalizeNode).filter(Boolean).join('');
}

/**
 * Asserts two HTML fragments (e.g. a rendered JSX component's markup vs. a
 * saved fixture of the original static index.html chunk it replaces) are
 * structurally identical, ignoring attribute/class-token order and
 * whitespace-only text.
 */
export function expectStructuralParity(actualHtml: string, expectedHtml: string): void {
  const actual = normalizeHtml(actualHtml);
  const expected = normalizeHtml(expectedHtml);
  if (actual !== expected) {
    throw new Error(
      `Structural parity mismatch.\n\n--- actual ---\n${actual}\n\n--- expected ---\n${expected}`,
    );
  }
}

import { describe, it, expect } from 'vitest';
import { expectStructuralParity } from './structural-parity.ts';

describe('expectStructuralParity', () => {
  it('passes for byte-identical HTML', () => {
    expect(() =>
      expectStructuralParity('<a id="x" class="foo bar">Hi</a>', '<a id="x" class="foo bar">Hi</a>'),
    ).not.toThrow();
  });

  it('ignores attribute order', () => {
    expect(() =>
      expectStructuralParity('<a id="x" class="foo bar" href="/y">Hi</a>', '<a href="/y" class="foo bar" id="x">Hi</a>'),
    ).not.toThrow();
  });

  it('ignores class token order', () => {
    expect(() =>
      expectStructuralParity('<a class="foo bar baz">Hi</a>', '<a class="baz foo bar">Hi</a>'),
    ).not.toThrow();
  });

  it('ignores inline style declaration order and spacing', () => {
    expect(() =>
      expectStructuralParity(
        '<div style="cursor: pointer">Hi</div>',
        '<div style="cursor:pointer;">Hi</div>',
      ),
    ).not.toThrow();
  });

  it('throws when a style declaration actually differs', () => {
    expect(() =>
      expectStructuralParity('<div style="cursor: pointer">Hi</div>', '<div style="cursor: default">Hi</div>'),
    ).toThrow(/Structural parity mismatch/);
  });

  it('ignores insignificant whitespace between/around elements', () => {
    expect(() =>
      expectStructuralParity(
        '<div>\n  <span>Hi</span>\n</div>',
        '<div><span>Hi</span></div>',
      ),
    ).not.toThrow();
  });

  it('throws when an id differs', () => {
    expect(() => expectStructuralParity('<a id="x">Hi</a>', '<a id="y">Hi</a>')).toThrow(
      /Structural parity mismatch/,
    );
  });

  it('throws when nesting differs', () => {
    expect(() =>
      expectStructuralParity('<div><span>Hi</span></div>', '<div><a>Hi</a></div>'),
    ).toThrow(/Structural parity mismatch/);
  });

  it('throws when text content differs', () => {
    expect(() => expectStructuralParity('<a>Hi</a>', '<a>Bye</a>')).toThrow(
      /Structural parity mismatch/,
    );
  });

  it('throws when a class token differs (not just order)', () => {
    expect(() => expectStructuralParity('<a class="foo bar">Hi</a>', '<a class="foo baz">Hi</a>')).toThrow(
      /Structural parity mismatch/,
    );
  });
});

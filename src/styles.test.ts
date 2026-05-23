import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const css = readFileSync(resolve(process.cwd(), 'src/styles.css'), 'utf-8');

describe('Design tokens', () => {
  it('--accent primary color token is #000000 (used for buttons and icons)', () => {
    expect(css).toMatch(/--accent:\s*#000000/);
  });
});

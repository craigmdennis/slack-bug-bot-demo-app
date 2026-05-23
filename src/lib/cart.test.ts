import { describe, it, expect } from 'vitest';
import { calculateTotal, lineTotal, type CartItem } from './cart';

const item = (price: number, quantity: number): CartItem => ({ name: 'X', subtitle: 'x', price, quantity });

describe('calculateTotal', () => {
  it('returns 0 for an empty cart', () => {
    expect(calculateTotal([])).toBe(0);
  });
  it('returns the price of a single-unit item', () => {
    expect(calculateTotal([item(25, 1)])).toBe(25);
  });
  it('sums multiple single-unit items', () => {
    expect(calculateTotal([item(25, 1), item(10, 1)])).toBe(35);
  });
});

describe('lineTotal', () => {
  it('multiplies price by quantity', () => {
    expect(lineTotal(item(25, 2))).toBe(50);
    expect(lineTotal(item(5, 3))).toBe(15);
  });
});

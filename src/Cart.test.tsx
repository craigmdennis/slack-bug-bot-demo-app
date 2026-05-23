import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Cart, formatUSD } from './Cart';
import { calculateTotal } from './lib/cart';
import { seededCart } from './data/cart';

describe('Cart', () => {
  it('renders every line item with its subtitle', () => {
    render(<Cart items={seededCart} />);
    expect(screen.getByText('Widget')).toBeInTheDocument();
    expect(screen.getByText('Premium widget')).toBeInTheDocument();
    expect(screen.getByText('Gadget')).toBeInTheDocument();
    expect(screen.getByText('Gizmo')).toBeInTheDocument();
  });

  it('renders a checkout button', () => {
    render(<Cart items={seededCart} />);
    expect(screen.getByRole('button', { name: /checkout/i })).toBeInTheDocument();
  });

  it('renders the total wired to calculateTotal', () => {
    render(<Cart items={seededCart} />);
    expect(screen.getByTestId('cart-total')).toHaveTextContent(formatUSD(calculateTotal(seededCart)));
  });
});

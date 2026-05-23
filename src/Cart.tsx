import { calculateTotal, lineTotal, type CartItem } from './lib/cart';
import { Icon } from './components/Icon';
import { Tooltip } from './components/Tooltip';

export function formatUSD(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

export function Cart({ items }: { items: CartItem[] }) {
  const subtotal = calculateTotal(items);
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <section className="cart">
      <header className="cart-header">
        <Icon name="cart" size={20} />
        <h1>Your Cart</h1>
      </header>

      <ul className="cart-items">
        {items.map((item) => (
          <li key={item.name} className="cart-item">
            <Icon name="item" className="item-icon" />
            <div className="item-info">
              <span className="item-name">{item.name}</span>
              <span className="item-subtitle">{item.subtitle}</span>
            </div>
            <div className="qty-stepper">
              <button type="button" className="qty-btn" aria-label={`decrease ${item.name}`}>−</button>
              <span className="qty">{item.quantity}</span>
              <button type="button" className="qty-btn" aria-label={`increase ${item.name}`}>+</button>
            </div>
            <span className="line-price">{formatUSD(lineTotal(item))}</span>
            <button type="button" className="remove-btn" aria-label={`remove ${item.name}`}>
              <Icon name="trash" />
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>{formatUSD(subtotal)}</span>
        </div>
        <div className="summary-row">
          <span className="shipping-label">
            Shipping
            <Tooltip text="Usually dispatched within 24 hours">
              <Icon name="info" className="info-icon" />
            </Tooltip>
          </span>
          <span>{formatUSD(shipping)}</span>
        </div>
        <div className="summary-row total-row">
          <span>Total</span>
          <span data-testid="cart-total">{formatUSD(total)}</span>
        </div>
        <button type="button" className="checkout-btn">Checkout</button>
      </div>
    </section>
  );
}

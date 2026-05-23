export interface CartItem {
  name: string;
  subtitle: string;
  price: number;
  quantity: number;
}

/** Total cost of the cart. */
export function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price, 0);
}

/** Cost of a single line (price × quantity). */
export function lineTotal(item: CartItem): number {
  return item.price * item.quantity;
}

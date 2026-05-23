import { Cart } from './Cart';
import { seededCart } from './data/cart';

export function App() {
  return (
    <main className="page">
      <Cart items={seededCart} />
    </main>
  );
}

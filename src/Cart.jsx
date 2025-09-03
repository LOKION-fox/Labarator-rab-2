import { useCart } from "./CartC"; // изменено

function Cart() {
  const { cart } = useCart();

  return (
    <div>
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cart.map((item, i) => (
            <li key={i}>
              {item.name} (ID: {item.id})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;



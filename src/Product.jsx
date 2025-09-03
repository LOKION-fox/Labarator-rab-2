import { useParams } from "react-router-dom";
import { useCart } from "./CartC"; // изменено

function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Товар с ID: {id}</h2>
      <button onClick={() => addToCart({ id, name: `Товар ${id}` })}>
        Добавить в корзину
      </button>
    </div>
  );
}

export default Product;

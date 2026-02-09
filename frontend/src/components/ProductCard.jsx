import { useState } from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="card">
      <img src={product.image} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <input
        type="number"
        min="1"
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
      />

      <button onClick={() => addToCart(product, qty)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) return <h2>Cart is empty</h2>;

  return (
    <div>
      {cart.map((item) => (
        <div key={item._id} className="cart-item">
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>

          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              updateQuantity(item._id, Number(e.target.value))
            }
          />

          <button onClick={() => removeFromCart(item._id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;

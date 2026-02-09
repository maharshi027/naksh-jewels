import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, total } = useCart();

  if (!cart || cart.length === 0) {
    return <h2>Cart is empty</h2>;
  }

  return (
    <div className="cart-container">
      {cart.map((i) => (
        <div className="cart-item" key={i._id}>
          <h3>{i.name}</h3>
          <p>₹{i.price}</p>

          <input
            type="number"
            min="1"
            value={i.quantity}
            onChange={(e) =>
              updateQuantity(i._id, Number(e.target.value))
            }
          />

          <button onClick={() => removeFromCart(i._id)}>
            Remove
          </button>
        </div>
      ))}

      <h2 className="cart-total">Total: ₹{total}</h2>
    </div>
  );
};

export default Cart;

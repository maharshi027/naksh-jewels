import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <Link to="/">Products</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
};

export default Navbar;

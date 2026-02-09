import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Products
        </Link>
      </div>

      <div className="nav-center">
        <span className="brand">Naksh Jewels</span>
      </div>

      <div className="nav-right">
        <Link
          to="/cart"
          className={location.pathname === "/cart" ? "active" : ""}
        >
          Cart
          {cart.length > 0 && (
            <span className="cart-badge">{cart.length}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

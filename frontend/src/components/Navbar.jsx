import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">
          Products
        </Link>
      </div>

      <div className="nav-center">
        <span className="brand">Naksh Jewels</span>
      </div>

      <div className="nav-right">
        <Link
          className={location.pathname === "/add-product" ? "active" : ""}
          to="/add-product"
        >
          Add Product
        </Link>

        <Link
          className={location.pathname === "/cart" ? "active" : ""}
          to="/cart"
        >
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

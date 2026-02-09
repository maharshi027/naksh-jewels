import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Products from "./pages/Product";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;

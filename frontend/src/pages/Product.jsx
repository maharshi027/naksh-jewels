import { useEffect, useState } from "react";
import { fetchProducts } from "..//api/api.js";
import ProductCard from "../components/ProductCart";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;

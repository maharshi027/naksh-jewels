import { useEffect, useState } from "react";
import { fetchProducts } from "../api/api.js";
import ProductCard from "../components/ProductCart";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
};

export default Products;

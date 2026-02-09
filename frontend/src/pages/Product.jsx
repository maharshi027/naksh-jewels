import { useEffect, useState } from "react";
import { fetchProducts } from "../api/api.js";
import ProductCard from "../components/ProductCard.jsx";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <div className="loader">Loading jewels...</div>;

  return (
    <div className="grid">
      {products.length > 0 ? (
        products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))
      ) : (
        <p style={{ textAlign: 'center', gridColumn: '1/-1' }}>No products found.</p>
      )}
    </div>
  );
};

export default Products;
const API_BASE_URL = "http://localhost:7000/api";

export const fetchProducts = async () => {
  const res = await fetch(`${API_BASE_URL}/products`);
  const data = await res.json();
  return data.data;
};

export const addToCartApi = async (item) => {
  const res = await fetch(`${API_BASE_URL}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });

  return res.json();
};

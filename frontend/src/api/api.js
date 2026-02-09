export const BASE_URL = "http://localhost:7000/api";

export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  const json = await res.json();
  return json.data;
};

export const addToCartApi = async (productId, quantity) => {
  await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, quantity }),
  });
};

export const createProductApi = async (formData) => {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    body: formData
  });

  return res.json();
};

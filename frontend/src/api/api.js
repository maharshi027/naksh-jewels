import api from "./Axios";

export const fetchProducts = async () => {
  const res = await api.get("/products");
  return res.data.data;
};

export const createProductApi = async (formData) => {
  const res = await api.post("/add-product", formData);
  return res.data;
};

export const addToCartApi = async (productId, quantity) => {
  const res = await api.post("/cart", {
    productId,
    quantity,
  });
  return res.data;
};

export const updateCartQuantityApi = async (productId, quantity) => {
  const res = await api.put("/cart", {
    productId,
    quantity,
  });
  return res.data;
};

export const removeFromCartApi = async (productId) => {
  const res = await api.delete(`/cart/${productId}`);
  return res.data;
};

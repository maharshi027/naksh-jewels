import { ApiError } from "../utils/ApiError.js";
export const createProductValidation = (req, res, next) => {
  const { name, price, stock } = req.body;
  if (!name || !price) {
    throw new ApiError(400, "All are required to create a product");
  }
  if (isNaN(price) || price <= 0) {
    throw new ApiError(400, "negative price not possible");
  }
  next();
};
export const addToCartValidation = (req, res, next) => {
  const { productId, quantity } = req.body;
  if (!productId) throw new ApiError(400, "Product ID is required");
  if (!quantity || quantity < 1) throw new ApiError(400, "Quantity must be at least 1");
  next();
};
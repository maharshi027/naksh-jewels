import { ApiError } from "../utils/ApiError.js";

export const addToCartValidation = (req, res, next) => {
  const { productId, quantity } = req.body;

  if (!productId) {
    throw new ApiError(400, "Product ID is required");
  }

  if (!quantity || quantity < 1) {
    throw new ApiError(400, "Quantity must be at least 1");
  }
  next();
};


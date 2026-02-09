import Cart from "../models/cart.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    throw new ApiError(400, "ProductId and quantity are required");
  }

  const item = await Cart.create({ productId, quantity });

  return res
    .status(201)
    .json(new ApiResponse(201, item, "Item added to cart"));
});

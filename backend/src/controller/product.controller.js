import Product from "../models/product.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createProduct = asyncHandler(async (req, res) => {
  const { name, price, description, stock } = req.body;
  const file = req.file;

  if (!name || !price || !file) {
    throw new ApiError(400, "Name, Price, and Image file are required");
  }

  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${file.filename}`;

  const product = await Product.create({
    name,
    price,
    image: imageUrl,
    stock,
    description,
  });

  res.status(201).json(new ApiResponse(201, product, "Created"));
});
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  return res
    .status(200)
    .json(new ApiResponse(200, products, "Products fetched successfully"));
});
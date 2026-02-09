import express from "express";
import { addToCart } from "../controller/cart.controller.js";
import { addToCartValidation } from "../middleware/valid.middleware.js";

const router = express.Router();

router.post("/", addToCartValidation, addToCart);

export default router;


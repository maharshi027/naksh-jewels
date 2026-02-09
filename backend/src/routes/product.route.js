import express from "express";
import multer from "multer";
import { createProduct, getProducts } from "../controller/product.controller.js";
import { addToCartValidation} from '../middleware/valid.middleware.js'
const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/add-product", upload.single("image"), addToCartValidation, createProduct);
router.get("/products", getProducts);

export default router;
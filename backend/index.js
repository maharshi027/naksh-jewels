import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./src/routes/product.route.js";
import cartRoutes from "./src/routes/cart.routes.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

export default app;

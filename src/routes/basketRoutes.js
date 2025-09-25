import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/basketController.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is working fine");
});

router.get("/products", getAllProducts);
router.put("/product/:id", updateProduct);
router.get("/product/:id", getProductById);
router.post("/product", createProduct);
router.delete("/product/:id", deleteProductById);

export default router;

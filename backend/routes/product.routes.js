import express from "express";

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// get all products from database
router.get("/", getAllProducts);

// Create Product
router.post("/", createProduct);

// Update a Product
router.put("/:id", updateProduct);

// Delete Product
router.delete("/:id", deleteProduct);

export default router

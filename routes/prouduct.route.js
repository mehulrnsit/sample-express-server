import express from "express";
import { createProduct, getProducts, getProductByKey, updateProductByKey, deleteProductByKey } from "../controller/products.controller.js";

const router = express.Router();

router.get("/", getProducts);                // get all the products
router.get("/:key", getProductByKey);        // get a product by key
router.post("/", createProduct);             // create a new product
router.put("/:key", updateProductByKey);     // update a product by key
router.delete("/:key", deleteProductByKey);  // delete a product by key

// Export the router
export default router;
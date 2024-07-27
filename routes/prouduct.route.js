const express = require("express");
const router = express.Router();
const { createProduct, getProducts, getProductByKey, updateProductByKey, deleteProductByKey } = require("../controller/products.controller");

router.get("/", getProducts);
router.get("/:key", getProductByKey);
router.post("/", createProduct);
router.put("/:key", updateProductByKey);
router.delete("/:key", deleteProductByKey);

// Export the router
module.exports = router;

const express = require("express");
const router = express.Router();
const productRoutes = require("./prouduct.route");
const { getRoot, getHealthCheck } = require("../controller/healthcheck.controller");

// product routes
router.use("/api/v1/products", productRoutes);

// healthcheck routes
router.get('/', getRoot)
router.get('/healthcheck', getHealthCheck)

// special case where user requests for an endpoint which doesn't exist
router.get("/*", (req, res) => {
    res.status(404).json({message: "404 Not found"})
})

// Export the router
module.exports = router;

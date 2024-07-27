import express from "express";
import { getRoot, getHealthCheck } from "../controller/healthcheck.controller.js";
import productRoutes from "./prouduct.route.js";
const router = express.Router();

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
export default router;

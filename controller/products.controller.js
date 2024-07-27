import Product from "../models/product.model.js";
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}

const getProductByKey = async (req, res) => {
    try {
        const product = await Product.find({ key: req.params.key });
        res.status(200).json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}

const updateProductByKey = async (req, res) => {
    try {
        const filter = {
            key: req.params.key,
        };
        const update = req.body;
        const product = await Product.findOneAndUpdate(filter, update, { new: true });
        if (!product) {
            return res.status(404).json({ message: `Product ${req.params.key} not found.` });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}

const deleteProductByKey = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ key: req.params.key });
        if (!product) {
            return res.status(404).json({ message: `Product ${req.params.key} not found.` });
        }
        res.status(200).json({ message: "Product Deleted Successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}

export {
    createProduct,
    getProducts,
    getProductByKey,
    updateProductByKey,
    deleteProductByKey
}
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    key: {
        type: String,
        required: [true, "Product key can't be null"],
        unique: true
    },
    name: {
        type: String,
        required: [true, "Product Name can't be null"],
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
},
    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
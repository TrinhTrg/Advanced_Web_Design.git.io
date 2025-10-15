const mongoose = require("mongoose");

const typeProductsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: null
    },
    updatedAt: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model("TypeProduct", typeProductsSchema);
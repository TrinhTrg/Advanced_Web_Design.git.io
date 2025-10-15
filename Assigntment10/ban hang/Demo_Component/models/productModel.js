const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    idType: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "ProductType", // Assuming a separate ProductType schema exists 
        required: true 
    },
    description: { type: String},
    unit_price: { type: Number},
    promotion_price: { type: Number},
    image: { type: String},
    unit: { type: String},
    createdAt: { type: Date, },
    updatedAt: { type: Date}
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
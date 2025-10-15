const mongoose = require("mongoose");
const product = require("../models/productModel");
const productType = require("../models/productTypeModel");

exports.getAllProduct = async (req, res) => {
    try {
        const products = await product.find(); // Fetch products from the database
        console.log(products); // Debugging: Ensure products are fetched
        res.render('index', { content: 'partials/home', products }); // Pass products and content to the view
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const productDetail = await product.findById(productId).populate('idType');
        if (!productDetail) {
            return res.status(404).render('index', {
                content: 'partials/error',
                error: 'Product not found'
            });
        }
        res.render('index', {
            content: 'partials/productDetail',
            product: productDetail
        });
    } catch (error) {
        console.error('Error getting product by ID:', error);
        res.status(500).render('index', {
            content: 'partials/error',
            error: 'Error loading product details'
        });
    }
};


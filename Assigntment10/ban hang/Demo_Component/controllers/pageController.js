const mongoose = require("mongoose");
const product = require("../models/productModel");
const productType = require("../models/productTypeModel");

exports.home = (req, res) => {
    res.render('index', { content: 'partials/home' });
};

exports.about = (req, res) => {
    res.render('index', { content: 'partials/about' });
};

exports.contact = (req, res) => {
    res.render('index', { content: 'partials/contact' });
};

exports.productType = async (req, res) => {
    console.log('productType controller method called');
    try {
        // Lấy tất cả sản phẩm từ MongoDB giống như trang home
        const products = await product.find();
        console.log('Products fetched for productType:', products.length);
        
        // Truyền dữ liệu vào view với tên biến products (giống như trang home)
        res.render('index', { 
            content: 'partials/productType', 
            products: products 
        });
    } catch (error) {
        console.error('Error in productType controller:', error);
        res.status(500).send('Error loading product type page');
    }
};

exports.checkout = (req, res) => {
    res.render('index', { content: 'partials/checkout' });
};
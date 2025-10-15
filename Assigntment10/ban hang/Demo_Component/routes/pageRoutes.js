const express = require('express');										
const router = express.Router();										
const pageController = require('../controllers/pageController');	
const productController = require('../controllers/productController');	

// Route definitions										
router.get('/', productController.getAllProduct); // Use getAllProduct to render the homepage
router.get('/product_type', (req, res) => {
    console.log('Product type route hit');
    pageController.productType(req, res);
}); // Add product_type route
router.get('/about', pageController.about);										
router.get('/contact', pageController.contact);
router.get('/contacts', pageController.contact); // Add contacts route
router.get('/checkout', pageController.checkout); // Add checkout route
router.get('/product/:id', productController.getProductById); 
							
module.exports = router;

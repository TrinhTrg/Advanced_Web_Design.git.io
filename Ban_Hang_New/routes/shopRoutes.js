const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');

// Trang danh sách sản phẩm
router.get('/shop', shopController.showShop);

// Trang chi tiết sản phẩm
router.get('/detail/:id', shopController.showProductDetail);

module.exports = router;

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Trang danh sách
router.get('/', productController.getAllProducts);

// Trang thêm mới
router.get('/create', productController.showCreateForm);
router.post('/create', productController.upload.single('image'), productController.createProduct);

// Trang chỉnh sửa
router.get('/edit/:id', productController.getProductById);
router.post('/edit/:id', productController.upload.single('image'), productController.updateProduct);

// Xoá
router.get('/delete/:id', productController.deleteProduct);

module.exports = router;

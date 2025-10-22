const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminControllers');
const upload = require('../middlewares/uploadMiddleware');

// Trang admin - danh sách sản phẩm
router.get('/', adminController.getAllProducts);

// Trang admin - thêm sản phẩm
router.get('/create', adminController.showCreateForm);
router.post('/create', upload.single('image'), adminController.create);

// Trang admin - chi tiết sản phẩm
router.get('/edit/:id', adminController.edit);
router.put('/edit/:id', upload.single('image'), adminController.update);

// Trang admin - xóa sản phẩm
router.get('/delete/:id', adminController.showDeleteConfirm);
router.delete('/delete/:id', adminController.delete);

module.exports = router;
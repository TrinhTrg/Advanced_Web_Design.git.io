const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

module.exports = (upload) => {
  // 🟢 Tạo sản phẩm mới (có upload hình)
  router.post('/', upload.single('image'), productController.create);

  // 🟡 Lấy danh sách sản phẩm
  router.get('/', productController.list);

  // 🔵 Lấy chi tiết 1 sản phẩm theo ID
  router.get('/:id', productController.get);

  // 🟠 Cập nhật sản phẩm (có thể kèm hình mới)
  router.put('/:id', upload.single('image'), productController.update);

  // 🔴 Xóa sản phẩm
  router.delete('/:id', productController.remove);

  return router;
};

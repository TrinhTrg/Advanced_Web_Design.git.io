const Product = require('../models/productModel');
const { Op } = require('sequelize');

// 🟦 Lấy toàn bộ sản phẩm (phân trang + sắp xếp)
exports.getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    // 🟢 Nhận query để chọn cột sắp xếp & thứ tự
    const sortBy = req.query.sortBy || 'id'; // mặc định sắp theo ID
    const sortOrder = req.query.sortOrder === 'desc' ? 'DESC' : 'ASC';

    const { count, rows } = await Product.findAndCountAll({
      limit,
      offset,
      order: [[sortBy, sortOrder]],
    });

    res.render('admin/index', {
      products: rows,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      sortBy,
      sortOrder,
    });
  } catch (err) {
    console.error('❌ Lỗi lấy sản phẩm:', err);
    res.status(500).send('Lỗi server khi lấy sản phẩm');
  }
};

// 🟩 Thêm sản phẩm mới
exports.create = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const image = req.file ? req.file.filename : null;

    // ✅ Nếu bảng trống thì reset AUTO_INCREMENT về 1
    const count = await Product.count();
    if (count === 0) {
      await Product.sequelize.query('ALTER TABLE products AUTO_INCREMENT = 1;');
    }

    await Product.create({ name, price, imageUrl: image, description });
    res.redirect('/admin');
  } catch (err) {
    console.error('❌ Lỗi tạo sản phẩm:', err);
    res.status(500).send('Lỗi server khi tạo sản phẩm');
  }
};

// 🟨 Chỉnh sửa sản phẩm
exports.edit = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.render('admin/edit', { product });
  } catch (err) {
    console.error('❌ Lỗi edit sản phẩm:', err);
    res.status(500).send('Lỗi khi lấy thông tin sản phẩm để sửa');
  }
};

// 🟧 Cập nhật sản phẩm
exports.update = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const updateData = { name, price, description };
    if (req.file) updateData.imageUrl = req.file.filename;

    await Product.update(updateData, {
      where: { id: req.params.id },
    });

    res.redirect('/admin');
  } catch (err) {
    console.error('❌ Lỗi cập nhật sản phẩm:', err);
    res.status(500).send('Lỗi khi cập nhật sản phẩm');
  }
};

// 🟥 Xóa sản phẩm
exports.delete = async (req, res) => {
  try {
    await Product.destroy({
      where: { id: req.params.id },
    });

    // ✅ Sau khi xóa, kiểm tra nếu bảng trống thì reset lại ID về 1
    const count = await Product.count();
    if (count === 0) {
      await Product.sequelize.query('ALTER TABLE products AUTO_INCREMENT = 1;');
    }

    res.redirect('/admin');
  } catch (err) {
    console.error('❌ Lỗi xóa sản phẩm:', err);
    res.status(500).send('Lỗi khi xóa sản phẩm');
  }
};

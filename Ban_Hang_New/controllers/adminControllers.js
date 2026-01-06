const { Op } = require('sequelize');
const Product = require('../models/productModel');

// -------------------
// ⚙️ ADMIN SIDE (CRUD)
// -------------------

// 🟦 Lấy toàn bộ sản phẩm (phân trang + sắp xếp)
exports.getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    const sortBy = req.query.sortBy || 'id';
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
      title: 'Quản lý sản phẩm'
    });
  } catch (err) {
    console.error('❌ Lỗi lấy sản phẩm admin:', err);
    res.status(500).send('Lỗi server khi lấy sản phẩm');
  }
};

exports.showCreateForm = (req, res) => {
  res.render('admin/create', { title: 'Thêm sản phẩm mới' });
};

exports.create = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const image = req.file ? req.file.filename : null;

    const count = await Product.count();
    if (count === 0) {
      await Product.sequelize.query('ALTER TABLE products AUTO_INCREMENT = 1;');
    }

    await Product.create({ name, price, description, imageUrl: image });
    res.redirect('/admin');
  } catch (err) {
    console.error('❌ Lỗi tạo sản phẩm:', err);
    res.status(500).send('Lỗi server khi tạo sản phẩm');
  }
};

// Lấy  form chỉnh sửa
exports.edit = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).send('Không tìm thấy sản phẩm');
    res.render('admin/edit', { product, title: 'Chỉnh sửa sản phẩm' });
  } catch (err) {
    console.error('❌ Lỗi lấy sản phẩm để sửa:', err);
    res.status(500).send('Lỗi khi lấy thông tin sản phẩm');
  }
};

// Cập nhật sản phẩm
exports.update = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    // Tìm sản phẩm hiện tại
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).send('Không tìm thấy sản phẩm');

    //Tạo object dữ liệu cập nhật
    const updateData = { name, price, description };

    //Nếu có ảnh mới thì xóa ảnh cũ
    if (req.file) {
      const oldImagePath = path.join(__dirname, '..', 'uploads', product.imageUrl);
      if (product.imageUrl && fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
        console.log('🧹 Đã xóa ảnh cũ:', product.imageUrl);
      }
      updateData.imageUrl = req.file.filename;
    }

    //Cập nhật database
    await product.update(updateData);

    res.redirect('/admin');
  } catch (err) {
    console.error('❌ Lỗi cập nhật sản phẩm:', err);
    res.status(500).send('Lỗi khi cập nhật sản phẩm');
  }
};

// 🟥 Hiển thị form xác nhận xóa
exports.showDeleteConfirm = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).send('Không tìm thấy sản phẩm');
    res.render('admin/delete', { product, title: 'Xóa sản phẩm' });
  } catch (err) {
    console.error('❌ Lỗi hiển thị form xóa:', err);
    res.status(500).send('Lỗi khi lấy thông tin sản phẩm');
  }
};

// 🟥 Thực hiện xóa sản phẩm
exports.delete = async (req, res) => {
  try {
    await Product.destroy({ where: { id: req.params.id } });

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

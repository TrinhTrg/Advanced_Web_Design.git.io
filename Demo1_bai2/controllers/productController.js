const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { Product } = require('../models');

// 🟢 Cấu hình Multer để lưu file ảnh
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = './uploads';
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });
exports.upload = upload;

// 🟢 Trang danh sách sản phẩm
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.render('index', { title: 'Product List', products });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching products');
  }
};

// 🟢 Trang tạo sản phẩm
exports.showCreateForm = (req, res) => {
  res.render('admin/create', { title: 'Create Product' });
};

// 🟢 Xử lý thêm sản phẩm mới
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const image = req.file ? req.file.filename : null;

    await Product.create({ name, price, description, image });

    res.redirect('/'); // ➤ Sau khi tạo xong thì quay lại trang danh sách
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating product');
  }
};

// 🟢 Trang chỉnh sửa sản phẩm
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).send('Product not found');

    res.render('admin/edit', { title: 'Edit Product', product });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching product');
  }
};

// 🟢 Cập nhật sản phẩm
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).send('Product not found');

    product.name = req.body.name;
    product.price = req.body.price;
    product.description = req.body.description;

    if (req.file) {
      product.image = req.file.filename;
    }

    await product.save();
    res.redirect('/'); // ➤ Cập nhật xong quay lại danh sách
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating product');
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).send('Product not found');

    // Xóa file ảnh nếu có
    if (product.image) {
      const imagePath = path.join(__dirname, '../uploads', product.image);
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    }

    await product.destroy();
    res.redirect('/'); // trở lại trang danh sách
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting product');
  }
};



const { Product } = require('../models');
const path = require('path');
const fs = require('fs');

module.exports = {
  // 🟢 CREATE: Thêm sản phẩm mới
  create: async (req, res) => {
    try {
      const { name, price, description } = req.body;
      const imageFile = req.file ? req.file.filename : null;

      const product = await Product.create({
        name,
        price: parseFloat(price || 0),
        description,
        image: imageFile
      });

      return res.status(201).json({ success: true, product });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  // 🟢 LIST: Lấy danh sách sản phẩm
  list: async (req, res) => {
    try {
      const products = await Product.findAll({ order: [['createdAt', 'DESC']] });
      return res.json({ success: true, products });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  // 🟢 GET: Lấy thông tin sản phẩm theo ID
  get: async (req, res) => {
    try {
      const id = req.params.id;
      const product = await Product.findByPk(id);
      if (!product)
        return res.status(404).json({ success: false, message: 'Not found' });

      return res.json({ success: true, product });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  // 🟢 UPDATE: Cập nhật sản phẩm
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const { name, price, description } = req.body;
      const product = await Product.findByPk(id);

      if (!product)
        return res.status(404).json({ success: false, message: 'Not found' });

      // Nếu có file ảnh mới → xóa ảnh cũ
      if (req.file) {
        if (product.image) {
          const oldPath = path.join(process.cwd(), process.env.UPLOAD_DIR || 'uploads', product.image);
          if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
        }
        product.image = req.file.filename;
      }

      // Cập nhật các trường khác
      product.name = name ?? product.name;
      product.price = price !== undefined ? parseFloat(price) : product.price;
      product.description = description ?? product.description;

      await product.save();
      return res.json({ success: true, product });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: err.message });
    }
  },

  // 🟢 REMOVE: Xóa sản phẩm
  remove: async (req, res) => {
    try {
      const id = req.params.id;
      const product = await Product.findByPk(id);
      if (!product)
        return res.status(404).json({ success: false, message: 'Not found' });

      // Xóa file ảnh nếu có
      if (product.image) {
        const filePath = path.join(process.cwd(), process.env.UPLOAD_DIR || 'uploads', product.image);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      }

      await product.destroy();
      return res.json({ success: true, message: 'Deleted' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: err.message });
    }
  }
};

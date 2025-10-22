const Product = require('../models/productModel');

// Trang hiển thị sản phẩm cho khách
exports.showShop = async (req, res) => {
  try {
    const products = await Product.findAll({
      order: [['id', 'DESC']]
    });

    res.render('shop/index', {
      title: 'Trang bán hàng',
      products
    });
  } catch (err) {
    console.error('❌ Lỗi hiển thị trang shop:', err);
    res.status(500).send('Lỗi khi tải sản phẩm');
  }
};

// Hiển thị chi tiết sản phẩm
exports.showProductDetail = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).send('Không tìm thấy sản phẩm');
    }

    res.render('shop/detail', {
      title: `Chi tiết sản phẩm - ${product.name}`,
      product,
    });
  } catch (err) {
    console.error('❌ Lỗi hiển thị chi tiết sản phẩm:', err);
    res.status(500).send('Lỗi khi tải chi tiết sản phẩm');
  }
};
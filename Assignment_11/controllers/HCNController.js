const HinhChuNhat = require('../models/HinhChuNhatModel');

//trang chủ nhập dữ liệu
exports.getHinhChuNhatForm = (req, res) => {
    res.render('index');
}
//trang xử lý dữ liệu
exports.postHinhChuNhat = async (req, res) => {
    const { length, width } = req.body;
    // Tính chu vi & diện tích
    const perimeter = (parseFloat(length) + parseFloat(width)) * 2;
    const area = parseFloat(length) * parseFloat(width);
    // Lưu vào database
    await HinhChuNhat.create({ length, width, perimeter, area });
    res.redirect('/list');
};
//trang hiển thị kết quả
exports.getList = async (req, res) => {
    const data = await HinhChuNhat.findAll({ order: [['id', 'DESC']] });
    res.render(`list`,{data});
}




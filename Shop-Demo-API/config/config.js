const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
dotenv.config();

// 1️⃣ Tạo kết nối Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, 
  }
);

// 2️⃣ Tạo object db để gom tất cả models
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// 3️⃣ Import các models (sửa đường dẫn nếu cần)
db.Product = require('../models/productModel')(sequelize, Sequelize.DataTypes);

// 4️⃣ Export ra để dùng nơi khác
module.exports = db;

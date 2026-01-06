require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

// Tạo kết nối Sequelize từ biến môi trường .env
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

// Gom các models vào object db
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import model
db.Product = require('./productModel')(sequelize, DataTypes);

module.exports = db;

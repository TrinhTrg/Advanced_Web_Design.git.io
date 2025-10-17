// connect database sequelize + mysql2
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
}
);
module.exports = sequelize; // xuat ra sequelize để sử dụng ở nơi khác
    
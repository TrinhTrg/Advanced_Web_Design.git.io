const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,       
    },
    price: DataTypes.FLOAT,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT
},{
    tableName: 'products',
    timestamps: false, 
});
module.exports = Product;
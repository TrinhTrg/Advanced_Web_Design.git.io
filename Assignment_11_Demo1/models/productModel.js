const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: DataTypes.FLOAT,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT
}, {
    tableName: 'products',
    timestamps: false, 
});

module.exports = Product;

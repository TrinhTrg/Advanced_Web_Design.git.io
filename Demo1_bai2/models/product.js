'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here (nếu sau này cần)
    }
  }

  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Product',
      tableName: 'product',
      timestamps: false,
    }
  );

  return Product;
};

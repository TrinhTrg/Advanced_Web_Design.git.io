const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const HinhChuNhatModel = sequelize.define('HinhChuNhat', {
    length: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    width: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    perimeter: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    area: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    tableName: 'hcn',
    timestamps: false,
});

module.exports = HinhChuNhatModel;

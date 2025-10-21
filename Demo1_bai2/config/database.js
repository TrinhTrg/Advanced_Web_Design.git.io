const { Sequelize } = require('sequelize');

// Kết nối đến cơ sở dữ liệu MySQL
const sequelize = new Sequelize('myappdb', 'root', 'trinh147:ttt', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('DB error:', err));
    
module.exports = sequelize;

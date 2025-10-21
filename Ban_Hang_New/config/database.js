const { Sequelize } = require('sequelize');
const password = 'trinh147:ttt'; 
const sequelize = new Sequelize('banhang_db', 'root', password, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.log('DB error:', err));

module.exports = sequelize;

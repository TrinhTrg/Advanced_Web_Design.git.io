const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./config/database');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

// Cấu hình EJS làm view engine
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));  // Để truy cập các file tải lên
app.use(expressLayouts);
app.set('layout', 'layout'); // Trỏ tới views/layout.ejs

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use(productRoutes);

// Kết nối cơ sở dữ liệu
// sequelize.authenticate()
//   .then(() => console.log('Database connected'))
//   .catch(err => console.log('Unable to connect to the database:', err));

// Đồng bộ hóa models
sequelize.sync()
  .then(() => console.log('Models synced'))
  .catch(err => console.log('Error syncing models:', err));

// Khởi động server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

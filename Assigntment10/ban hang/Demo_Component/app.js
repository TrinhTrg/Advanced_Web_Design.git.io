const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const pageRoutes = require('./routes/pageRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Cấu hình view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Cấu hình thư mục static cho CSS, JavaScript, và hình ảnh
app.use(express.static(path.join(__dirname, 'public')));

// Kết nối database đúng chuẩn
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Sử dụng các routes
app.use('/', pageRoutes);
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));
app.use('/image', express.static(path.join(__dirname, 'public', 'image')));


// Bắt đầu server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

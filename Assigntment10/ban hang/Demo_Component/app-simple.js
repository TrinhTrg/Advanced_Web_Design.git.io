const express = require('express');
const path = require('path');
const pageRoutes = require('./routes/pageRoutes');

const app = express();
const PORT = 4000;

// Cấu hình view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Cấu hình thư mục static cho CSS, JavaScript, và hình ảnh
app.use(express.static(path.join(__dirname, 'public')));

// Debug: Log all routes
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// Test route trực tiếp
app.get('/test-product-type', (req, res) => {
    console.log('Direct test route hit');
    res.send('Direct route is working!');
});

// Sử dụng các routes
app.use('/', pageRoutes);
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));
app.use('/image', express.static(path.join(__dirname, 'public', 'image')));

// Bắt đầu server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Available routes:');
  console.log('- GET /');
  console.log('- GET /product_type');
  console.log('- GET /about');
  console.log('- GET /contacts');
  console.log('- GET /checkout');
});

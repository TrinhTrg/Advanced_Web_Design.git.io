const express = require('express');
const path = require('path');
const hbs = require('hbs');
const pageRoutes = require('./routes/pageRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Cấu hình view engine ---
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// --- Cấu hình thư mục public để load CSS / JS / ảnh ---
app.use(express.static(path.join(__dirname, 'public')));

// --- Sử dụng routes ---
app.use('/', pageRoutes);

// --- Khởi động server ---
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

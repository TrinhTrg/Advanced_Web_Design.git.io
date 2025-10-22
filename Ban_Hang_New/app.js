const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const sequelize = require('./config/database');
const adminRoutes = require('./routes/adminRoutes');
const shopRoutes = require('./routes/shopRoutes');
const Product = require('./models/productModel');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
//const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();

// Cấu hình EJS làm view engine
app.use(expressLayouts);
app.set('layout', 'layout'); // trỏ tới views/layout.ejs

//Middleware
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use('/', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/uploads', express.static('uploads'));

app.get('/', async (req, res) => {
    res.redirect('/shop');
});
app.use('/shop', shopRoutes);

// Cấu hình session
app.use(session({
  secret: 'secret-key-demo', //  bí mật để mã hóa session
  resave: false,
  saveUninitialized: true
}));

//tạo bảng và seed data (100 sản phẩm)
(async () =>{
    await sequelize.sync();
    const count = await Product.count();
    if(count === 0){
        const demoData = [];
        for(let i = 1; i<= 100; i++){
            demoData.push({
                name: `Product ${i}`,
                price: parseFloat((Math.random() * 100).toFixed(2)),
                imageUrl: `https://via.placeholder.com/150?text=Product+${i}`,
                description: `Description for Product ${i}`
            });
        }
        await product.bulkCreate(demoData);
        console.log('✅ Demo data inserted!');
    }
    else{
        console.log('✅ Demo data already inserted!');
        }

})
async function cleanUnusedImages() {
  const uploadDir = path.join(__dirname, 'uploads');
  const files = fs.readdirSync(uploadDir);

  const products = await Product.findAll({ attributes: ['imageUrl'] });
  const usedImages = products.map(p => p.imageUrl);

  for (const file of files) {
    if (!usedImages.includes(file)) {
      const filePath = path.join(uploadDir, file);
      fs.unlinkSync(filePath);
      console.log('🧹 Đã xóa ảnh không dùng:', file);
    }
  }
}

// Gọi khi khởi động server
cleanUnusedImages();

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

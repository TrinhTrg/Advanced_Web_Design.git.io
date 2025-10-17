const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/database');
const adminRoute = require('./routes/adminRoute')
const product = require('./models/productModel');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layout'); // trỏ tới views/layout.ejs

//không sử dụng biến môi trường
//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use('/admin', adminRoute);

app.get('/', async (req, res) => {
    res.redirect('/admin');
});

//tạo bảng và seed data (100 sản phẩm)
(async () =>{
    await sequelize.sync();
    const count = await product.count();
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
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

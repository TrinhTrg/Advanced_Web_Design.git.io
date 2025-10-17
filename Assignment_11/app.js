const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/database');
const hcnRoute = require('./routes/HCNroutes');
require('dotenv').config();


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
app.use('/', hcnRoute);

// Kết nối DB & chạy server
sequelize.sync().then(() => {
  console.log('✅ Database connected!');
  app.listen(process.env.PORT || 3000, () =>
    console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
  );
}).catch(err => console.log('Error: ', err));

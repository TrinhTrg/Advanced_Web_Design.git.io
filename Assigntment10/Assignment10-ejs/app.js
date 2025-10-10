const express = require('express');  
const path = require('path');  
const pageRoutes = require('./routes/pageRoutes');  

const app = express();  
const PORT = process.env.PORT || 3000;  

// Cấu hình view engine  
app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views'));  

// Cấu hình thư mục static cho CSS, JavaScript, và hình ảnh  
app.use(express.static(path.join(__dirname, 'public')));  

// Sử dụng các routes  
app.use('/', pageRoutes);  

// Bắt đầu server  
app.listen(PORT, () => {  
    console.log(`Server is running on http://localhost:${PORT}`);  
});  

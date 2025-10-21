const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
}); 
const upload = multer({ storage });
// Route to display all product
router.get('/', productController.getAllProducts);
router.post('/add', upload.single('imageUrl'), productController.create);
router.get('/edit/:id', productController.edit);
router.post('/edit/:id', upload.single('imageUrl'), productController.update);
router.get('/delete/:id', productController.delete);

module.exports = router;
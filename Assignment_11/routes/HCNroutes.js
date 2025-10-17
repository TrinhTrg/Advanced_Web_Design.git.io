const express = require('express');
const router = express.Router();
const hcnController = require('../controllers/HCNController');

router.get('/', hcnController.getHinhChuNhatForm);
router.post('/calculate', hcnController.postHinhChuNhat);
router.get('/list', hcnController.getList);

module.exports = router;

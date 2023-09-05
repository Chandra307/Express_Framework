const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();

router.get('/add-product', productController.addProduct);

router.post('/product', productController.redirect);

module.exports = router;
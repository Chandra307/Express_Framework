const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.shop);

module.exports = router;
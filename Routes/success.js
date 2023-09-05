const express = require('express');

const route = express.Router();

const controller = require('../controllers/success');

route.post('/success', controller.success);

module.exports = route;
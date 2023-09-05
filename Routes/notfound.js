const express = require('express');

const route = express.Router();

const controller = require('../controllers/notfound');

route.use( controller.notfound);

module.exports = route;
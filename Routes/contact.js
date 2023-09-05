const express = require('express');

const controller = require('../controllers/contact');

const route = express.Router();

route.get('/contactus', controller.contact);

module.exports = route;
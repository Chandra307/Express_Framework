const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const route = express.Router();

route.get('/contactus',(req, res, next) => {
    res.sendFile(path.join(rootDir,'views', 'contact.htm'))
})

module.exports = route;
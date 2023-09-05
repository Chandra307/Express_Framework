const path = require('path');

const rootDir = require('../util/path');

exports.addProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','admin.html'))
}

exports.redirect = (req, res, next) => {
    console.log(req.body);
    res.redirect('/admin/add-product');
}
const path = require('path');

const rootDir = require('../util/path');

exports.contact = (req, res, next) => {
    res.sendFile(path.join(rootDir,'views', 'contact.htm'))
}
const path = require('path');

const rootDir = require('../util/path');

exports.notfound = (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views','notFound.html'))
}
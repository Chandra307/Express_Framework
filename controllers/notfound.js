const path = require('path');

exports.notfound =  (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'views', 'notfound.html'));
  }
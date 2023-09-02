const express = require('express');

const app = express();

const adminRoute = require('./Routes/admin.js');
const shopRoute = require('./Routes/shop.js');

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.use('/shop',shopRoute);
app.use('/admin',adminRoute);

app.use( (req, res, next) => {
    res.status(404).send(`<h1>Page not found</h1>`)
})

app.listen(3000);

const express = require('express');

const path = require('path');

const app = express();

const adminRoute = require('./Routes/admin.js');
const shopRoute = require('./Routes/shop.js');
const contactRoute = require('./Routes/contact.js');


const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.use('/shop',shopRoute);
app.use('/admin',adminRoute);
app.use(contactRoute);

app.use(express.static(path.join(__dirname,'public')));

app.post('/success',(req, res, next) => {
    console.log(req.body);
    res.send(`<h1>Form filled successfully</h1>`)
})

app.use( (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views','notFound.html'))
})

app.listen(4000);

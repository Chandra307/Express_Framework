const express = require('express');

const path = require('path');

const app = express();

const bodyparser = require('body-parser');

const adminRoute = require('./Routes/admin.js');
const shopRoute = require('./Routes/shop.js');
const contactRoute = require('./Routes/contact.js');
const successRoute = require('./Routes/success');
const notfoundRoute = require('./Routes/notfound');



app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/shop',shopRoute);
app.use('/admin',adminRoute);
app.use(contactRoute);
app.use(successRoute);
app.use(notfoundRoute);




app.listen(4000);

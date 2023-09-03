const express = require('express');

const login = require('./login.js');
const sendPage = require('./send.js');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(login);

app.use(sendPage);

app.use((req,res,next) => {
    res.send(`<h1>Page not found</h1>`);
})

app.listen(3000);

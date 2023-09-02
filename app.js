const express = require('express');

const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send(`<form action="/product" method="POST">
    <input type="text" name="product">
    <input type="text" name="size">
    <button type="submit">Add Product</button></form>`);
})
app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})
app.use( (req, res, next) => {
    res.send('<h1>Hello from Express!');
})

app.listen(3000);

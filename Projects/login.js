const express = require('express');

const route = express.Router();

route.get('/login', (req, res, next) => {
    res.send(`<form onsubmit= 'localStorage.setItem("username", document.getElementById("username").value)' action='/message' method='POST'><input type='text' id='username' name='username'><button type='submit'>Login</button></form>`);
})

module.exports = route;
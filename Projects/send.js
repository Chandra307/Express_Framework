const express = require('express');

const fs = require('fs');

const route = express.Router();


route.post('/message', (req, res, next) => {

    res.redirect('/');
})

route.get('/', (req, res, next) => {

    fs.readFile('./msg.txt', { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            console.log(err);
        }

        if(data === undefined){
            res.send(`No chats to show here!<br><form onsubmit='document.querySelector("#username").value = localStorage.getItem("username")'
             action='/store' method='POST'><input type='text' name='message'><input type='hidden' name='message' id='username'>
            <button type='submit' style='margin-left: 4px;'>Send message</button></form>`)
        } else {
            res.send(`${data}<br><form onsubmit='document.querySelector("#username").value = localStorage.getItem("username")'
             action='/store' method='POST'><input type='text' name='message'><input type='hidden' name='username' id='username'>
             <button type='submit' style='margin-left: 4px;'>Send message</button></form>`)
        }
    })
})

route.post('/store', (req, res, next) => {

    fs.appendFile('msg.txt', `${req.body.username}: ${req.body.message} `, (err) => {
        if (err) {
            console.log(err);
        }
        console.log(req.body.username, req.body.message);
        res.redirect('/');
    })
})

module.exports = route;
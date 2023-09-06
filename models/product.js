const fs = require('fs');

const path = require('path');
const p = path.join(__dirname,'..', 'data', 'products.json');

const readFileContent = (cb) => {
    fs.readFile(p, {encoding: 'utf-8'}, (err, content) => {
        if(err){
            cb([]);
        }else {
            cb(JSON.parse(content));
        }
    });
}

module.exports = class Product {
    constructor(n){
        this.title = n;
    }
    save(){        
        readFileContent( (products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),(err) => {
                if(err){
                    console.log(err);
                }
            })
        })    
    }
    static fetchAll(cb) {
        readFileContent(cb);
    }             
}
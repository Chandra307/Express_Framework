const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile(products => {
      if(this.id){

        const existingProductIndex = products.findIndex(p => p.id === this.id);
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        });
      } 
      else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findProduct(id, cb){
    getProductsFromFile( (products) => {
      const prod = products.find(p => p.id === id);
      cb(prod);
      // console.log(prod);
    })
  }

  static deleteProductById(id, cb) {

    getProductsFromFile( (products) => {
      const index = products.findIndex( p => p.id === id);
      products[index] = null;
      products = [...products].filter(p => p);

      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      })
      
      cb();
    })
  }
};

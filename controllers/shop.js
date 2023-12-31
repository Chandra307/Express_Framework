const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(([rows]) => {
    res.render('shop/product-list', { 
      prods: rows,
      pageTitle: 'All Products',
      path:'/products'})
  })
  .catch(er => console.log(er));
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findProduct(prodId)
  .then(([product]) => {
      res.render('shop/product-detail', { 
        product: product[0],
        pageTitle: product.title,
        path:'/products'})
  })
  .catch(err => console.log(err));
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
  .then( ([rows]) => {
    console.log(rows);
      res.render('shop/index', {
        prods: rows,
        pageTitle: 'Shop',
        path: '/'
      });
  })
  .catch(err => console.log(err));
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findProduct(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  })
  res.redirect('/cart');
}

exports.deleteProduct = (req, res, next) => {
  const productId = req.params.prodId;
  Product.deleteProductById (productId, () => res.redirect('/products'));
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

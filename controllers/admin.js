const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null, title, imageUrl, description, price);
  product.save()
  .then( () => res.redirect('/'))
  .catch(err => console.log(err));
}

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect('/');
  }
  const prodId = req.params.prodId;
  Product.findProduct(prodId, (product) => {
    if(!product){
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    })
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;

  const updatedTitle = req.body.title;
  const updatedImage = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDesc = req.body.description;

  const updatedProduct = new Product(
    prodId,
    updatedTitle,
    updatedImage,
    updatedDesc,
    updatedPrice
    );
  updatedProduct.save();
  res.redirect('/admin/products')
}
exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then( ([products]) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    })
  })
  .catch(err => console.log(err));
};

exports.deleteProduct = (req, res, next) => {
  const prodId = req.body.prodId;
  Product.deleteProductById (prodId)
  .then( () => res.redirect('/admin/products'))
  .catch(err => console.log(err));
}

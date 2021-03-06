const express = require('express');
const Products = require('../db/products');
const product = express.Router();

product.route('/')

  .get((req,res) => {
    let result = Products.showAll()
      .then(result => {
        res.render('index',{
        page: 'Product Page',
        result
        });
      });
  })

  .post((req,res) => {
    Products.add(req.body)
    .then(()=> {
      res.send({"success": true});
    });
  });

product.route('/:id')

  .put((req,res) => {
    req.body.id = req.params.id;
    Products.editProduct(req.body)
    .then(() => {
      res.send({"success":true});
    });
  })

  .delete((req,res) => {
    Products.deleteProduct(req.params.id)
    .then(() => {
      res.send({"success":true});
    });
  });

product.route('/:id/edit')
  .post ((req,res) => {
    req.body.id = req.params.id;
    Products.editProduct(req.body)
    .then(() => {
      res.send({"success":true});
    });
  })

  .get((req,res) => {
    Products.oneProduct(req.params)
    .then((products) => {
      console.log('products: ',products);
      res.render('edit', {
        page: 'Product Page',

        product: products[0]
      });
    });
  });

product.route('/new')
  .get((req,res) => {
    res.render('new', {
      page: 'Product Page'
    });
  })

  .post((req,res) => {
    Products.add(req.body)
    .then(()=> {
      res.send({"success": true});
    });
  });

module.exports = product;
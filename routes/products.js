const express = require('express');
const Products = require('../db/products');
const product = express.Router();

product.route('/')

  .get((req,res) => {
    let result = Products.showAll();
    res.render('index', {
      result
    });
  })

  .post((req,res) => {
    Products.add(req.body);
    res.json({"success": true});
  });

product.route('/:id')

  .put((req,res) => {
    req.body.id = req.params.id;
    Products.editProduct(req.body);
    res.json({"success": true});
  })

  .delete((req,res) => {
    Products.deleteProduct(req.params.id);
    res.json({"success":true});
  });

product.route('/:id/edit')
  .get((req,res) => {

  });

product.route('/new')
  .get((req,res) => {

  });

module.exports = product;
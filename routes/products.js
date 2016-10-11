const express = require('express');
const router = express.Router();
let newProd = [];
let productId = 0;

router.route('/')
  .get((req,res) => {
    res.render('index', {
      title: 'Products'
    });
  })

  .post((req,res) => {
    let product = {
      id: productId,
      name: req.body.name,
      price: req.body.price,
      inventory: req.body.inventory
    };
    newProd.push(product);
    productId += 1;
    console.log(newProd);
    res.send(`{"success": true}`);
  });


router.route('/:id')
  .put((req,res) => {

  })

  .delete((req,res) => {

  });

router.route('/:id/edit')
  .get((req,res) => {

  });

router.route('./new')
  .get((req,res) => {
    res.render('index', {

    });
  });


module.exports = router;
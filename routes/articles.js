const express = require('express');
const Articles = require('../db/articles');
const article = express.Router();

article.route('/')
  .get((req,res) => {
    let results = Articles.showAll();
    res.send(results);
  })

  .post((req,res) => {
    Articles.add(req.body);
    res.json({"success":true});
  });


article.route('/:title')
  .put((req,res) => {
    req.body.totle = req.params.title;
    Articles.editArticle(req.body);
    res.json({"success":true});
  })

  .delete((req,res) => {
    Articles.deleteArticle(req.params.title);
    res.json({"success":true});
  });

module.exports = article;
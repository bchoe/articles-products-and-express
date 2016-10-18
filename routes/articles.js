const express = require('express');
const Articles = require('../db/articles');
const article = express.Router();

article.route('/')
  .get((req,res) => {
    Articles.showAll()
      .then(result => {
        res.render('index',{
          result
        });
      });
    })
  .post((req,res) => {
    Articles.add(req.body)
      .then(() => {
        res.send({"success":true});
      });
  });

article.route('/:title')
  .put((req,res) => {
    req.body.title = req.params.title;
    Articles.editArticle(req.body)
    .then(() => {
      res.send({"success":true});
    });
  })

  .delete((req,res) => {
    Articles.deleteArticle(req.params.title)
    .then(() => {
      res.send({"success":true});
    });
  });

 article.route('/:title/edit')
  .post((req,res) => {
    req.body.title = req.params.title;
    Articles.editArticle(req.body)
    .then(() => {
      res.send({"success":true});
    });
  })

  .get((req,res) => {
    req.body.title = req.params.title;
    Articles.oneArticle(req.body)
    .then((articl) => {
      res.render('edit', {
        article: article
      });
    });
  });

 article.route('/new')
  .get((req,res) => {
    res.render('new');
  })

  .post((req,res) => {
    Articles.add(req.body)
    .then(()=> {
      res.send({"success":true});
    });
  });

module.exports = article;
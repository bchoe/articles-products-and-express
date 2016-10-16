const Promise = require('bluebird');
const pgp = require('pg-promise')({
  //initialization options
  promiseLib: Promise
});

const db = pgp('postgres://ape_user:1234@localhost:5432/articles_products_and_express');

let newArticle = {
  title: 'My favorite article',
  body: 'Happy to be here',
  author: 'Casey',
  url_title: 'My%20favorite%20article'
};

db.query('INSERT INTO articles (title, body, author, url_title) VALUES (${title}, ${body}, ${author}, ${url_title})', newArticle)
.then(console.log);


db.query('SELECT * FROM articles')
.then(console.log)
.catch ((err) => {
  console.error('unable to read');
});
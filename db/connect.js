const Promise = require('bluebird');
const pgp = require('pg-promise')({
  //initialization options taking module and invoking it
  promiseLib: Promise
});

//same as
// const Express = require('express');
// const App = Express();

const db = pgp('postgres://ape_user:1234@localhost:5432/articles_products_and_express');






module.exports = db;
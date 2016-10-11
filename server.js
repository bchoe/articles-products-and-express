const express = require('express');
const pug = require('pug');
const app = express();
const PORT = 3000;
const articles = require('./routes/articles.js');
const products = require('./routes/products.js');

app.use('/articles', articles);
app.use('/products', products);


const server = app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
})
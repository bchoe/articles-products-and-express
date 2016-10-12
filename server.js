const express = require('express');
const pug = require('pug');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const articles = require('./routes/articles');
const products = require('./routes/products');

//set template engine to use pug
app.set('view engine', 'pug');
//tell express where our template files live
app.set('views', './templates');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/articles', articles);
app.use('/products', products);

const server = app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
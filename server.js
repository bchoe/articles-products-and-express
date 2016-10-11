const express = require('express');
const pug = require('pug');
const app = express();
const PORT = 3000;
const articles = require('./routes/articles.js');
const products = require('./routes/products.js');

//set template engine to use pug
app.set('view engine', 'pug');
//tell express where our template files live
app.set('views', './templates');
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use('/articles', articles);
app.use('/products', products);

app.get('/', (req,res) => {
  //use res.render to render static HTML file
  res.render('index', {
    response: 'Pen pineapple, apple pen'
  });
});

const server = app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
})
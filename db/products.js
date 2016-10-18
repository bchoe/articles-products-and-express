const db = require('./connect.js');

let id = 1;

//POST request
function add(newProduct){
  console.log(newProduct);
  let productTemp = {
    id: id,
    name: newProduct.name,
    price: newProduct.price,
    inventory: newProduct.inventory
  };
  id ++;
  return db.query('INSERT INTO products (name, price, inventory) VALUES (${name}, ${price}, ${inventory})', productTemp)
    .catch(error => {
      console.error(error);
    });
}

//GET request
function showAll(){
  return db.query('SELECT * FROM products', showAll)
    .catch(error => {
      console.error(error);
    });
  }

//PUT request
function editProduct(data){
  console.log('data*****',data);
  return db.query('UPDATE products SET name = ${name}, price = ${price}, inventory = ${inventory} WHERE id = ${id}', data)
    .catch(error => {
      console.error(error);
  });
}

//DELETE request
function deleteProduct(id){
  return db.query('DELETE FROM articles WHERE id=\'$1#\'',id)
    .catch(error => {
      console.error(error);
  });
}

function oneProduct(data){
  return db.query('SELECT * FROM products WHERE id = id', data)
    .catch(error => {
      console.error(error);
  });
}

module.exports = {
  add,
  showAll,
  deleteProduct,
  editProduct,
  oneProduct
};
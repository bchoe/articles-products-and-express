const db = require('./connect.js');

let savedProd = [];
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

//DELETE request
function deleteProduct(id){
  return savedProd = savedProd.filter((element) => {
    return element.id !== parseFloat(id);
  });
}

//PUT request
function editProduct(data){
  return savedProd = savedProd.map((element)=> {
    console.log("element*******",element);
    if(element.name === parseFloat(data.id)){
      console.log("found***", element);
      element.name = data.name;
      element.inventory = data.inventory;
      element.price = data.price;
    }
    return element;
  });
}

function oneProduct(data){
  return savedProd.find((element) => {
    if(element.id === parseFloat(data.id)){
      return element;
    }
  });
}

module.exports = {
  add,
  showAll,
  deleteProduct,
  editProduct,
  oneProduct
};
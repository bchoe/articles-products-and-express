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
  savedProd.push(productTemp);
}

//GET request
function showAll(){
  console.log("saved product*****:",savedProd);
  return savedProd;
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
    if(element.name === parseFloat(data.id)){
      element.name = data.name;
      element.inventory = data.inventory;
      element.price = data.price;
    }
    return element;
  });
}


module.exports = {
  add,
  showAll,
  deleteProduct,
  editProduct
};
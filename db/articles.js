let savedArticles = [];
let id = 1;

//POST
function add(newArt){
  console.log(newArt);
  let articleTemp = {
    title: newArt.title,
    body: newArt.body,
    author: newArt.author,
    urlTitle: encodeURI(newArt.title)
  };
  savedArticles.push(articleTemp);
}

//GET
function showAll(){
  console.log("savedArticles*****:", savedArticles);
  return savedArticles;
}

//PUT request
function editArticle(data){
  return savedArticles = savedArticles.map((element)=> {
    if(element.title === data.title){
      element.body = data.body;
      element.author = data.author;
    }
    return element;
  });
}

//DELETE request
function deleteArticle(title){
  return savedArticles = savedArticles.filter((element) => {
    return element.title !== title;
  });

}

//get response generates new template
function oneArticle(data){
  return savedArticles.find((element) => {
    if(element.title === data.title){
      return element;
    }
  });
}


module.exports = {
  add,
  showAll,
  deleteArticle,
  editArticle,
  oneArticle,
};
const db = require('./connect.js');

let id = 1;



//POST
function add(newArt){
  let articleTemp = {
    title: newArt.title,
    body: newArt.body,
    author: newArt.author,
    urlTitle: encodeURI(newArt.title)
  };
  return db.query('INSERT INTO articles (title, body, author, url_title) VALUES (${title}, ${body}, ${author}, ${urlTitle})', articleTemp)
    .catch(error => {
      console.error(error);
    });

}

//GET
function showAll(){
  return db.query('SELECT * FROM articles', showAll)
    .catch(error => {
      console.error(error);
    });
  }

//PUT request
function editArticle(data){
  return db.query('UPDATE articles SET title = ${title}, body = ${body}, author = ${author} WHERE title = ${title}', data)
    .catch(error => {
      console.error(error);
    });
}

//DELETE request
function deleteArticle(title){

  return db.query('DELETE FROM articles WHERE title =\'$1#\'', title)
    .catch(error => {
      console.error(error);
    });
}

//get response generates new template
function oneArticle(data){
  return db.query('SELECT * FROM articles WHERE title = title', data)
    .catch(error => {
      console.error(error);
    });
}


module.exports = {
  add,
  showAll,
  deleteArticle,
  editArticle,
  oneArticle
};
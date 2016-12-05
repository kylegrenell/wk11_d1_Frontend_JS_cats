// ROUGH AND READY VERSION

window.onload = function(){

var catClass = document.createElement('section');
catClass.classList.add('cat');

var catName = document.createElement('li');
catName.innerText = 'Name: Malarky';

var favFood = document.createElement('li');
favFood.innerText = 'Favourite food: ice cream';

catName.appendChild(favFood);
catClass.appendChild(catName);

var newCat = document.querySelector('#cats');
newCat.append(catClass);

var img = document.createElement('img');
img.src = "http://68.media.tumblr.com/cde31840019eec8fd7468455c88e3ddc/tumblr_n92rgh47IY1r4xjo2o1_500.gif";
img.width = "500";
document.getElementById('cats').appendChild(img);

}


///////// REFACTORED VERSION

// var createCatClass = function(){

//   var catClass = document.createElement('section');
//   catClass.classList.add('cat')
//   return catClass;
// }

// var createName = function(text){

//   var catName = document.createElement('catName');
//   catName.innerText = text + " ";
//   return catName;
// }

// var createFood = function(name){

//   var favFood = document.createElement('favFood');
//   favFood.innerText = name;
//   return favFood;
// }

// var createImage = function(img){

//   var catImage = document.createElement('img');
//   catImage.src = img;
//   catImage.width = '500';
//   return catImage;
// };

// var addNewCat = function(name, food, img){

//   var catClass = createCatClass();
//   var catName = createName(name);
//   var favFood = createFood(food);
//   var catsPhoto = createImage(img);

//   var newCat = document.querySelector('#cats');

//   catName.appendChild(favFood);
//   catClass.appendChild(catName);
//   catClass.appendChild(catsPhoto);
//   newCat.appendChild(catClass);

// }

// window.onload = function(){
//     addNewCat(
//       'Name: Malarky', 
//       'Favourite Food: ice cream', 
//       'http://68.media.tumblr.com/cde31840019eec8fd7468455c88e3ddc/tumblr_n92rgh47IY1r4xjo2o1_500.gif'
//     );
// };

// var catsArray = [['Name: Malarky', 'Favourite Food: ice cream'], ["Name: petey peteface", "Favourite food: lobster roll"]];

// function addCatsArray(arrayOfCats){
//      for (var i = 0; i < arrayOfCats.length; i++) {
//           addQuoteArticle(arrayOfCats[i][0], arrayOfCats[i][1])
//      }
// };

// addCatsArray(catsArray);

// }
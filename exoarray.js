var arrayTest = [1,2,3,4,5]
var arrayTest2 = [5,6,7,8]

function getAverage(marks){
  var sum = marks.reduce((a,b) => a + b);
var tailleArray = marks.length 
var moyenne = sum / tailleArray
var arrondi = Math.floor(moyenne)
console.log(arrondi)
return arrondi

}

getAverage(arrayTest2);
getAverage(arrayTest);
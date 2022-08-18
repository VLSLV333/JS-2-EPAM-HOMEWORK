// function reverseNumber(num) {
//   let reversed = '';
//   if (num > 0){
//     num = num + '';
//     for (let i = num.length - 1; i >= 0; i--){
//       reversed += num[i];
//     }
//     console.log(+reversed);     
//   } else if (num < 0){
//     num = -num + '';
//     for (let i = num.length - 1; i >= 0; i--){         
//      reversed += num[i];
//     }
//      reversed = +reversed
//      console.log(-reversed);     
//   } else {
//     console.log(0);
//   }
// }

function forEach(arr, func) {
  for (let item of arr) {
   func(item);
  }
}

function map(arr, func) {
  const result = [];
  function addModifiedElToArray(el) {
    result.push(func(el));
  }
  forEach(arr, addModifiedElToArray);
  return result;
}


function filter(arr, func) {
  const result = [];
  function addFilteredElToArray(el) {
    if (func(el) === true){
      result.push(el);
    } 
  }
  forEach(arr, addFilteredElToArray);
  return result;
}

// let data = 
//   [
//     {
//     "_id": "5b5e3168c6bf40f2c1235cd6",
//     "index": 0,
//     "age": 39,
//     "eyeColor": "green",
//     "name": "Stein",
//     "favoriteFruit": "apple"
//     },
//     {
//     "_id": "5b5e3168e328c0d72e4f27d8","index": 1,
//     "age": 38,
//     "eyeColor": "blue",
//     "name": "Cortez",
//     "favoriteFruit": "strawberry"
//     },
//     {
//     "_id": "5b5e3168cc79132b631c666a",
//     "index": 2,
//     "age": 2,
//     "eyeColor": "blue",
//     "name": "Suzette",
//     "favoriteFruit": "apple"
//     },
//     {
//     "_id": "5b5e31682093adcc6cd0dde5",
//     "index": 3,
//     "age": 17,
//     "eyeColor": "green",
//     "name": "Weiss",
//     "favoriteFruit": "banana"
//     },
//     {
//     "_id": "5b5e3168209323123zxcc6cd0dde5",
//     "index": 6,
//     "age": 20,
//     "eyeColor": "green",
//     "name": "Yuliana",
//     "favoriteFruit": "strawberry"
//     }
//     ]

function getAdultAppleLovers(data) {
  let requiredAge = 18;
  function requirmentsForObjects (el) {
    if (el['favoriteFruit'] === 'apple' && el['age'] > requiredAge){
      return true;
    }
  };
  objectsWhichFit = filter(data, requirmentsForObjects);
  function whichParametrToReturn (el){
    return el.name;
  }
 finalAnswer = map(objectsWhichFit, whichParametrToReturn);
  return finalAnswer
}
// console.log(getAdultAppleLovers(data))


// function getKeys(obj) {

// }

// function getValues(obj) {

// }


// function forEach(arr, func){
//   for (let i = 0; i < arr.length; i++) {
//    func(arr[i]);
//   }
// }
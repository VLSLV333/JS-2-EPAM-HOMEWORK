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

// function forEach(arr, func) {
//   for (let item of arr) {
//    func(item);
//   }
// }

function forEach(arr, func){
  for (let i = 0; i < arr.length; i++) {
   func(arr[i]);
  }
}
// function map(arr, mapFunc) {
//   const mapArr = [];
//   for (let item of arr) {
//     const result = mapFunc(item);
//     mapArr.push(result);
//   }
//   console.log(mapArr);
// }
function map(array, callback) {
  const result = [];
  function addModifiedElToArray(el) {
    result.push(callback(el));
  }
  forEach(array, addModifiedElToArray);
  return result;
}
console.log(map([1, 2, 3, 4, 5], function (el) { return el * 2; }))




// function map(arr, func) {
//   const results = [];
//   forEach(arr, func);
//   return results;
// }
// function map(arr, mapFunc){    
// const mapArr = [];  
//   for(let item of arr) {
//     const result = mapFunc(item);        
//     mapArr.push(result);}    
//     return mapArr;
// }

// function add (part){
//   return part += 3
// }



// function filter(arr, func) {

// }

// function getAdultAppleLovers(data) {

// }

// function getKeys(obj) {

// }

// function getValues(obj) {

// }


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

// function map(arr, func) {

// }

// function filter(arr, func) {

// }

// function getAdultAppleLovers(data) {

// }

// function getKeys(obj) {

// }

// function getValues(obj) {

// }


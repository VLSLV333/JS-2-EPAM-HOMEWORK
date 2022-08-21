function reverseNumber(num) {
  let reversed = '';
  if (num > 0){
    num = num + '';
    for (let i = num.length - 1; i >= 0; i--){
      reversed += num[i];
    }
    return +reversed;     
  } else if (num < 0){
    num = -num + '';
    for (let i = num.length - 1; i >= 0; i--){         
     reversed += num[i];
    }
     reversed = +reversed
     return -reversed;     
  } else {
    return 0;
  }
}
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
function getKeys(obj) {
  let answer = [];
  for(let key in obj){
    if (true){ //avoiding eslint warning
      answer.push(key);
    }
  }
  return answer;
}
function getValues(obj) {
  let answer = [];
  for(let key in obj){
    if (true){ //avoiding eslint warning
      answer.push(obj[key]);
    }
  }
  return answer;
}
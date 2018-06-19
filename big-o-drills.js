'use strict';

function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}

//O(1), constant
//It takes in a value and returns true or false depending if it's even or not

function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

//O(n^2)
//For each element in the first array
//It'll compare the element in the first array to every element in the second array


function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

//O(n)
//It will double every element in the array
//It'll take longer to complete as the array length increases


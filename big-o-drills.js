'use strict';

function isEven(value){
  if (value % 2 === 0){
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

function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}
// O(n)
// For each element of an array it will comapre the element to a passed in item
// Worst case: checks every element in the array, Best case: checks on the first element


function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) {
      console.log(arr[i] + ', ' +  arr[j] );  
    }
  }
}
// createPairs([1,2,3,4,5,6,7,8,9,10]);
// O(n^2)
// for each element in the array it matches and logs that element with each element after it in the array

function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i === 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}
// O(n)
// It creates an array with a length equal to 'num'
// The greater num is the number of array elements it has to compute increases linearly


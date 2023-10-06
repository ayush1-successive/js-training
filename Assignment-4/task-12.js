// Write a program to display intersection of two array

// Returns the array containing intersection of
// two arrays. Uses brute force
const intersectionOfTwoArrays = (array1, array2) => {
  let resultArray = new Array();

  for (const elemArray1 of array1) {
    if (array2.find((elem) => elem == elemArray1) != undefined)
      resultArray.push(elemArray1);
  }

  return resultArray;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 4, 5, 6, 7, 9];

const intersection = intersectionOfTwoArrays(array1, array2);
console.log(intersection);  // Result = 1, 4, 5

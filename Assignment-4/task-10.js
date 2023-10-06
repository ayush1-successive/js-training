// Write a program to concatenate an input of array of arrays

// Returns a concatenated array of all arrays
const concatenateArrayOfArrays = (arrayOfArrays) => {
  return arrayOfArrays.flat();
};

const myArrayOfArrays = [
  [1, 2, 3, 4, 5],
  ["Apple", "Orange", "Banana", "Guvava"],
  ["White", "Blue", "Green", "Yellow", "Red"],
];
console.log(myArrayOfArrays);

const concatenatedArray = concatenateArrayOfArrays(myArrayOfArrays);
console.log(concatenatedArray);

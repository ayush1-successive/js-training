// Write a program to return inverse of an array

// Returns the inverse of an array
// Do not modify the original array
const inverseArray = (array) => {
  let resultArray = new Array(array.length);

  for (const index in array) {
    resultArray[array[index]] = index;
  }

  return resultArray;
};

const myArray = [5, 3, 6, 4, 0, 2, 1];
console.log("myArray =", myArray);

const inversedArray = inverseArray(myArray);
// Result = 4, 6, 5, 1, 3, 0, 2
console.log("inversedArray =", inversedArray);

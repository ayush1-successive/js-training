// Write a program to find the last duplicate index in an array

// Returns the index of last duplicated element
const findLastDuplicateIndex = (array) => {
  for (let index = array.length - 1; index >= 0; --index) {
    // Find the first occurence of element in the array
    const elemFirstIndex = array.indexOf(array[index]);

    // If element occurs before the current index,
    // it is a duplicated element
    if (elemFirstIndex != index) return index;
  }
  return -1; // No duplicated element
};

const myArray = [1, 1, 2, 2, 3, 4, 5, 7];
console.log(myArray);

const lastDuplicateIndex = findLastDuplicateIndex(myArray);
console.log("Last Duplicate Index =", lastDuplicateIndex); // Result = 3

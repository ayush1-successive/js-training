// Write a program to find index of duplicate elements in an array

// Return the array of indexes of duplicate elements
const findDuplicateElementsIndex = (array) => {
  // Stores elements from array which have already occured
  let occuredELems = new Set();
  let duplicateIndexesList = new Array();

  for (let index = 0; index < array.length; index++) {
    // Check if element has already occured
    if (occuredELems.has(array[index])) duplicateIndexesList.push(index);

    // Add the element in the set.
    occuredELems.add(array[index]);
  }

  return duplicateIndexesList;
};

const myArray = [2, 2, 7, 4, -3, 1, -3];
console.log("myArray = ", myArray);

const duplicateElementIndexes = findDuplicateElementsIndex(myArray);

// Result = 1, 6
console.log("Duplicate element indexes =", duplicateElementIndexes);

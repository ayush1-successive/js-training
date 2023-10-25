// Write a program to remove duplicate elements from an array

// Modifies the orignal array by removing
// duplicate values from the array
const removeDuplicatesFromArray = (array) => {
  let occuredELems = new Set();

  for (let index = 0; index < array.length; ++index) {
    // If elem at index is duplicated, remove
    // the element from array and re-check the index
    if (occuredELems.has(array[index])) {
      array.splice(index, 1);
      --index;
    }

    occuredELems.add(array[index]);
  }
};

const myArray = [1, 1, 2, 2, 3, 4, 3, 4];
console.log(myArray);

removeDuplicatesFromArray(myArray);
console.log("myArray after removing duplicates =", myArray);

// Write a program to find sum of an array

// Returns the sum of an array using javascript reduce method
const sumOfArray = (numArray) => {
  return numArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

const myArray = [17, 23, 55, -32, 7, 76];
console.log("Array =", myArray);

const myArraySum = sumOfArray(myArray);
console.log("MyArraySum =", myArraySum);

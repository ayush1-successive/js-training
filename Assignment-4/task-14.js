// Write a program to reverse an array

// Performs an in-place reverse on the array
const reverseArray = (array) => {
  const len = array.length; // store the length of array
  const lenHalf = Math.floor(len / 2);

  for (let index = 0; index < lenHalf; index++) {
    [array[index], array[len - 1 - index]] = [
      array[len - 1 - index],
      array[index],
    ];
  }
};

const fruitArray = [
  "Apple",
  "Banana",
  "Guvava",
  "Mango",
  "Cherry",
  "Pineapple",
];
console.log("fruitArray =", fruitArray);

reverseArray(fruitArray);
console.log("reversed fruitArray =", fruitArray);

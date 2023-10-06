// Write a program to sort an array (bubble sort)

// Sort the provided array using bubble sort algorithm
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
};

// Partitions the array into two
// halfs according to pivot element
const partition = (array, start, end) => {
  // Avoid corner test-cases (e.g- descending order)
  let randomIndex = start + Math.ceil(Math.random() * (end - start));
  [array[start], array[randomIndex]] = [array[randomIndex], array[start]];

  const pivot = array[start];
  let elemIndex = start + 1;
  let currIndex = start + 1;

  // Put all elements samller than
  // pivot to the left of pivot
  while (currIndex <= end) {
    if (array[currIndex] < pivot) {
      [array[elemIndex], array[currIndex]] = [
        array[currIndex],
        array[elemIndex],
      ];
      elemIndex++;
    }
    currIndex++;
  }

  [array[elemIndex - 1], array[start]] = [array[start], array[elemIndex - 1]];
  return elemIndex - 1;
};

// Sort the provided array using quick sort algorithm
const quickSort = (array, start = 0, end = array.length - 1) => {
  if (start >= end) return;

  // console.log(start, end);
  const pivotIndex = partition(array, start, end);
  quickSort(array, start, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, end);
};

const myArray = [77, 23, 46, 1, 12, -5, 99, 52];
console.log("myArray =", myArray);

bubbleSort(myArray);
console.log("myArray after buubleSort =", myArray);

const myArray2 = [77, 23, 46, 1, 12, -5, 99, 52];
console.log("myArray2 =", myArray2);

quickSort(myArray2);
console.log("myArray2 after quickSort =", myArray2);

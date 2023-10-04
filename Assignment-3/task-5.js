// Write a program to print all even number first and then all odd numbers using only one iteration

// Returns the list of even numbers followed by odd numbers upto maxNum.
function evenOddList(maxNum) {
  let evenNumbersIndex = 0;
  let oddNumbersIndex = Math.ceil(maxNum / 2);

  let evenOddArray = new Array(maxNum);

  for (let currentNum = 1; currentNum <= maxNum; currentNum++) {
    if (currentNum % 2 == 0) evenOddArray[evenNumbersIndex++] = currentNum;
    else evenOddArray[oddNumbersIndex++] = currentNum;
  }
  return evenOddArray;
}

even_odd = evenOddList(40);

// Prints each element in the list.
even_odd.forEach((element) => {
  console.log(element);
});

// Write a program to dispaly number from 1-20 using all types of loops

// Print upto n using for loop
function printUsingForLoop(maxNum) {
  for (let num = 1; num <= maxNum; num++) console.log(num);
}

// Print upto n using while loop
function printUsingWhileLoop(maxNum) {
  num = 0;
  while (++num <= maxNum) console.log(num);
}

// Print upto n using do-while loop
function printUsingDoWhileLoop(maxNum) {
  let num = 0;
  do {
    console.log(++num);
  } while (num < maxNum);
}

printUsingForLoop(20);

console.log(); // For space
printUsingWhileLoop(20);

console.log(); // For space
printUsingDoWhileLoop(20);

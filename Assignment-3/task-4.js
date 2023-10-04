// Write a program to print all even number first and then all odd numbers

// Print even numbers followed by odd numbers upto lastNum
function printEvenThenOddNumbers(lastNum) {
  for (let currentNum = 2; currentNum <= lastNum; currentNum += 2)
    console.log(currentNum);

  for (let currentNum = 1; currentNum <= lastNum; currentNum += 2)
    console.log(currentNum);
}

printEvenThenOddNumbers(20); // Upto 20..

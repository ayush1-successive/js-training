// Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)

// Print numbers in exponential series starting from 2 [2, 4, 8, .... 4096]
function printExponentialSeries(lastNum) {
  for (let num = 2; num <= lastNum; num = num * 2) {
    console.log(num);
  }
}

printExponentialSeries(4096);

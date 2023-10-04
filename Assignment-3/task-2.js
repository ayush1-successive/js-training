// Write a program to display following output as shown in figure

const { cursorTo } = require("readline");

// Pattern-1
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// Pattern-2
// 1
// 2 2
// 3 3 3
// 4 4 4 4

// Pattern-3
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function pattern1(lastNum) {
  let currentNum = 1;

  for (let maxNumsInLine = 1; ; maxNumsInLine++) {
    line = "";
    let counter = 0;
    while (counter < maxNumsInLine && currentNum <= lastNum) {
      line += currentNum + " ";
      currentNum += 1;
      counter += 1;
    }
    console.log(line);
    if (currentNum > lastNum) break;
  }
}

function pattern2(lastNum) {
  for (let i = 1; i <= lastNum; i++) {
    currentLine = (String(i) + " ").repeat(i);
    console.log(currentLine);
  }
}

function pattern3(n) {
  // Returns a string of increasing numbers for 1 to patternSize
  const genIncreasingIntPattern = (patternSize) => {
    line = "";
    for (let i = 1; i <= patternSize; i++) line += i + " ";
    return line;
  };

  for (let i = n; i >= 1; i--) console.log(genIncreasingIntPattern(i));
  for (let i = 1; i <= n; i++) console.log(genIncreasingIntPattern(i));
}

pattern1(10);

console.log(); // for space
pattern2(4);

console.log(); // for space
pattern3(5);

// All of the above questions from 3-6 needs to be done with arrow functions also

// Task-3

const funcGreetings = () => "Hello World!";

const takeAnotherFunc = (anotherFunc) => console.log(anotherFunc());

takeAnotherFunc(funcGreetings);

// Task-4

// Returns the square of a number.
const square = (num) => num * num;
console.log("Square =", square(7));

// Task-5

// Returns the sum of two numbers.
const sum = (a, b) => a + b;
console.log("Sum =", sum(7, 9));

// Task-6

// Check if a number is even or not.
const isEven = (num) => num % 2 == 0;

console.log(isEven(10)); // true
console.log(isEven(33)); // false

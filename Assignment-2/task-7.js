// All of the above questions from 3-6 needs to be done with arrow functions also

// Task-3

const func = () => console.log("Hello World!");

const take_another_func = (another_func) => console.log(another_func());

console.log(take_another_func(func));

// Task-4

const square = (num) => num * num;
console.log("Square =", square(7));

// Task-5

const sum = (a, b) => a + b;
console.log("Sum =", sum(7, 9));

// Task-6

const is_even = (num) => num % 2 == 0;

console.log(is_even(10)); // true
console.log(is_even(33)); // false

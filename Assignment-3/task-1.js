// Write a program to perform functionality of a calculator (add,sub,multiply,divide)
const readline = require("readline");

const add = (a, b) => a + b;

const minus = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter task : [+, -, *, /] : ", (task) => {
  rl.question("Enter first number : ", (textNum1) => {
    rl.question("Enter second number : ", (textNum2) => {
      num1 = parseInt(textNum1);
      num2 = parseInt(textNum2);

      if (task == "+") console.log(num1, task, num2, "=", add(num1, num2));
      else if (task == "-")
        console.log(num1, task, num2, "=", minus(num1, num2));
      else if (task == "*")
        console.log(num1, task, num2, "=", multiply(num1, num2));
      else if (task == "/")
        console.log(num1, task, num2, "=", divide(num1, num2));

      rl.close();
    });
  });
});

// Write a program to take input(age, name, phone no.) from user and display it

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter name: ", (name) => {
  rl.question("Enter age: ", (age) => {
    rl.question("Enter phone number: ", (phoneNo) => {
      console.log("User name =", name);
      console.log("User age =", age);
      console.log("User phone number =", phoneNo);

      rl.close();
    });
  });
});

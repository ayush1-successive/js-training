// Write a program to take input(age, name, phone no.) from user and display it

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getResponse = (question) => {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
};

const getUserData = async () => {
  const name = await getResponse("Enter name: ");
  const age = await getResponse("Enter age: ");
  const phoneNo = await getResponse("Enter phone no: ");

  rl.close();

  console.log("User name =", name);
  console.log("User age =", age);
  console.log("User phone number =", phoneNo);
};

getUserData();

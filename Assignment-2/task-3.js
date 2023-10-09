//  Write a function expression that takes in another function as an argument

function func() {
  console.log("Hello World");
}

function takeAnotherFunction(anotherFunc) {
  console.log(anotherFunc());
}

takeAnotherFunction(func);

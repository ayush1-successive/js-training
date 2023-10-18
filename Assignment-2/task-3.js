//  Write a function expression that takes in another function as an argument

// Uses the concept of first-class citizenship
function funcGreetings() {
  return "Hello World";
}

function takeAnotherFunction(anotherFunc) {
  console.log(anotherFunc());
}

takeAnotherFunction(funcGreetings);

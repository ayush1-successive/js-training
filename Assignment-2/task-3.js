//  Write a function expression that takes in another function as an argument

function func() {
  console.log("Hello World");
}

function take_another_function(another_func) {
  console.log(another_func());
}

take_another_function(func);

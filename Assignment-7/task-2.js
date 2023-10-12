// Give an example of using multiple callback functions in a single function in JavaScript

const funcWithMultipleCallbacks = (callback1, callback2) => {
  setTimeout(callback1, 2000);
  setTimeout(callback2, 5000);
};

const firstFunction = () => console.log("2 seconds passed!");
const secondFunction = () => console.log("5 seconds passed!");

funcWithMultipleCallbacks(firstFunction, secondFunction);

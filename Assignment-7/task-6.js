// Implement a function that returns a resolved Promise after a specified delay using async/await.

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const delayedFunction = async () => {
  await delay(2000);
  console.log("2 seconds passed!");

  return Promise.resolve("Task completed successfully!");
};

delayedFunction().then((data) => console.log(data));

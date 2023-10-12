// Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

// Provides a delay in ms.
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class rateLimiter {
  constructor(tasks, maxRequests) {
    this.maxRequests = maxRequests;
    this.tasks = tasks;
  }

  // Run all promises
  async runPromises() {
    const tasksWithId = this.assignPriority(this.tasks);
    console.log("Tasks:\n", tasksWithId);

    // Sort all processes by their id.
    // Lower id process takes higher priority
    tasksWithId.sort((a, b) => a["id"] - b["id"]);

    const promises = tasksWithId
      .slice(0, this.maxRequests)
      .map((elem) => elem["task"]);

    Promise.all(promises).then((values) => {
      console.log("Result:", values);
    });
    this.tasks = tasksWithId
      .slice(this.maxRequests)
      .map((elem) => elem["task"]);
  }

  taskLeft() {
    return this.tasks.length > 0;
  }

  // Assigns a priority to each process in every iteration
  assignPriority = () => {
    return this.tasks.map((elem) => {
      return { task: elem, id: Math.floor(Math.random() * 20) };
    });
  };
}

// Run all processes according to their id
// assigned and provided concurrency limit
const rateLimitedQuery = async (tasks, rate) => {
  const limiter = new rateLimiter(tasks, rate);

  while (limiter.taskLeft()) {
    limiter.runPromises(tasks);
    await delay(1000);
  }
};

// List of promises
const tasks = [
  Promise.resolve("Successful resolve promise 1"),
  Promise.resolve("Successful resolve promise 2"),
  Promise.resolve("Successful resolve promise 3"),
  Promise.resolve("Successful resolve promise 4"),
  Promise.resolve("Successful resolve promise 5"),
  Promise.resolve("Successful resolve promise 6"),
  Promise.resolve("Successful resolve promise 7"),
];

rateLimitedQuery(tasks, 3);

// Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

// Provides a delay in ms.
const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class rateLimiter {
  constructor(maxRequests) {
    this.maxRequests = maxRequests;
    this.iters = 1;
    this.concurrentTasks = [];
  }

  tasksLeftInQueue() {
    return this.concurrentTasks.length > 0;
  }

  async runTasks() {
    await Promise.all(this.concurrentTasks).then((values) => {
      console.log(`Result (iter-${this.iters++})`, values);
      this.concurrentTasks = [];
    });

    await delay(2000);
  }

  async addTask(currentPromise) {
    this.concurrentTasks.push(currentPromise);

    // Concurrency limit hit, run all tasks
    if (this.concurrentTasks.length >= this.maxRequests) {
      await this.runTasks();
    }
  }
}

// Run all processes according to provided concurrency limit
const rateLimitedQuery = async (promisesList, rate) => {
  const limiter = new rateLimiter(rate);

  for (const promise of promisesList) {
    await limiter.addTask(promise);
  }

  if (limiter.tasksLeftInQueue()) {
    await limiter.runTasks();
  }
};

// List of promises
const promises = [
  Promise.resolve("Successful resolve promise 1"),
  Promise.resolve("Successful resolve promise 2"),
  Promise.resolve("Successful resolve promise 3"),
  Promise.resolve("Successful resolve promise 4"),
  Promise.resolve("Successful resolve promise 5"),
  Promise.resolve("Successful resolve promise 6"),
  Promise.resolve("Successful resolve promise 7"),
];

rateLimitedQuery(promises, 3);

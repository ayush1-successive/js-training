// Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

// Give a delay in ms.
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class rateLimiter {
  constructor(maxRequests, intervalMs) {
    this.maxRequests = maxRequests;
    this.currentRequestCounter = 0;
    this.intervalMs = intervalMs;
    this.startClock = new Date().getTime();
  }

  // Check if query limit exceeded in current interval
  isInInterval() {
    const endClock = new Date().getTime();
    return endClock - this.startClock < this.intervalMs;
  }

  // Run the promise if the rate + interval is correct.
  run(promise) {
    return new Promise(async (resolve, reject) => {
      if (this.currentRequestCounter < this.maxRequests) {
        this.currentRequestCounter++;

        // Run the promise
        promise
          .then((result) => resolve(result))
          .catch((error) => reject(error));
      } else {
        if (this.isInInterval()) {
          reject("Concurrent request limit exceeeded for current interval!");
        } else {
          // Reset interval + requestCounter
          this.startClock = new Date().getTime();
          this.currentRequestCounter = 1;

          // Run the promise
          promise
            .then((result) => resolve(result))
            .catch((error) => reject(error));
        }
      }
    });
  }
}

// List of promises
const promises = [
  Promise.resolve(7),
  Promise.resolve("Successful resolve for promise 2"),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetch successfully");
    }, 500);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task completed for promise 4");
    }, 1000);
  }),
];

// Run promises according to provided rate and interval
const rateLimitedQuery = async (promises, rate, intervalMs) => {
  const limiter = new rateLimiter(rate, intervalMs);

  for (const promise of promises) {
    limiter
      .run(promise)
      .then((result) => console.log("Result:", result))
      .catch((error) => console.log("Error:", error));
    await delay(2000);
  }
};

rateLimitedQuery(promises, 2, 5000);

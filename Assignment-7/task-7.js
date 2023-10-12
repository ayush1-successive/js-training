// Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

// Check for primality asynchronously
const isPrimeAsync = (num) => {
  return new Promise((resolve) => {
    if (num < 2) {
      resolve({ num, flag: false }); // 0,1 are non-primes
      return;
    }

    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        resolve({ num, flag: false });
        return;
      }
    }

    resolve({ num, flag: true });
  });
};

// Create numbers into promises
const createPromiseForIsPrime = async (num) => {
  return Promise.resolve(isPrimeAsync(num));
};

const printPrimes = async (numList) => {
  const promises = numList.map((elem) => createPromiseForIsPrime(elem));
  const results = await Promise.all(promises); // Wait for all promises to resolve

  // Filter all numbers whose flags are true for primes
  const primesNumbers = results
    .filter((elem) => elem["flag"])
    .map((elem) => elem.num);
  console.log("Primes =", primesNumbers);
};

// List of primes and non-primes
const numList = [89879371, 7842979, 38997071, 16298039, 21284477, 22886389];
printPrimes(numList);

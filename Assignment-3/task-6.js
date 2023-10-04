// Write a program to display prime numbers from 1 to 50

// Check if a number is prime.
function isPrime(num) {
  if (num < 2) return false; // 0, 1 are non-primes

  for (let i = 2; i * i <= num; i++) {
    // If num is divisible by i, then non-prime
    if (num % i == 0) return false;
  }
  return true;
}

// Print prime numbers upto maxNum
function printPrimes(maxNum) {
  for (let num = 1; num <= maxNum; num++) {
    if (isPrime(num)) console.log(num);
  }
}

printPrimes(50); // Primes upto 50

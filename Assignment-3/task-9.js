// Write a program to print fibonaaci series

// Returns an list of fibonacci series upto term n
function fibonacciSeries(length) {
  if (length == 1) return [0];
  if (length == 2) return [0, 1];

  let fibSeries = new Array(0, 1);
  for (let i = 3; i <= length; i++)
    fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]);
  return fibSeries;
}

// Fibonacci series of length 14
fibSeries = fibonacciSeries(14);

// Print series
fibSeries.forEach((element) => {
  console.log(element);
});

// Write a program to reverse a string ("Hello John" => "olleH nhoJ")

// Returns a string every word reversed of original string.
const reverseStringElements = (str) => {
  // Split the string into individual words
  let words = str.split(" ");

  // There is no in-built function to reverse the string
  // thus convert the string into array of chars,
  // reverse the array and later join the array into string
  words = words.map((elem) => elem.split("").reverse().join(""));

  // Join all words together
  return words.join(" ");
};

const myStr = "Hello John";
console.log("Original =", myStr);

const reversedStr = reverseStringElements(myStr);
console.log("Reversed =", reversedStr);

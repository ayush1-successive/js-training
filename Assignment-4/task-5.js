// Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

// Returns a new string in camel case
const convertToCamelCase = (str) => {
  // split the string into individual words
  let words = str.split(" ");
  console.log(words);

  // Convert all words with first letter capital
  // rest all should be lowercase
  words = words.map((elem) => {
    if (!elem) return;
    return elem[0].toUpperCase() + elem.slice(1).toLowerCase();
  });

  // Now, convert first word to all lowercase
  words[0] = words[0].toLowerCase();

  return words.join("");
};

const myString = "hello john doe";
console.log("myString =", myString);

const camelCasedString = convertToCamelCase(myString);
console.log("camelCasedString =", camelCasedString);

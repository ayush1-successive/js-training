// Write a program to convert given string to upperCase OR lowerCase

const isLowerCase = (char) => {
  return "a" <= char && char <= "z";
};

const isUpperCase = (char) => {
  return "A" <= char && char <= "Z";
};

const isAlphabet = (char) => {
  return isLowerCase(char) || isUpperCase(char);
};

// Method assumes provided char is an alphabet
const convertToLowerCase = (char) => {
  if (isLowerCase(char)) return char;
  return String.fromCharCode(char.charCodeAt(0) + 32);
};

// Method assumes provided char is an alphabet
const convertToUpperCase = (char) => {
  if (isUpperCase(char)) return char;
  return String.fromCharCode(char.charCodeAt(0) - 32);
};

// Returns a new string by changing alphabers
// accordingly by provided method
const convertString = (str, elemModifier) => {
  let resultString = "";

  for (const char of str) {
    if (isAlphabet(char)) resultString += elemModifier(char);
    else resultString += char;
  }
  return resultString;
};

const myString = "Hello World!";
console.log("Original =", myString);

// Convert to upper-case string
// upperCasedString = myString.toUpperCase()        // JavaScript in-built method
const upperCasedString = convertString(myString, convertToUpperCase);
console.log("UpperCasedString =", upperCasedString);

// lowerCasedString = myString.toLowerCase()        // JavaScript in-built method
const lowerCasedString = convertString(myString, convertToLowerCase);
console.log("LowerCasedString =", lowerCasedString);

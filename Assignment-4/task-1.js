// Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

// Remove duplicates from the string,
// Preserve order of elements.
const removeDuplicates = (str) => {
  // Set to store occured elements
  let uniqueChars = new Set();
  let modifiedString = "";

  for (const char of str) {
    if (!uniqueChars.has(char)) modifiedString += char;
    uniqueChars.add(char);
  }
  return modifiedString;
};

const myStr = "Hello Yellow";
console.log("Original =", myStr);

const modifiedStr = removeDuplicates(myStr);
console.log("Modified =", modifiedStr);

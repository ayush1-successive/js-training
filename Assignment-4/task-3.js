// Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

// Returns a string with each character frequency in it.
// This method assumes the string is in lower case.
const countVariablesInString = (str) => {
  let resultString = "";

  let charCount = new Array(26);
  charCount.fill(0);

  // Store the freq of each character in an array
  for (const index in str) {
    charCount[str.charCodeAt(index) - 97]++; // ascii code for 'a' -> 97
  }

  // If a character appeared more than once, add it in the resultString
  for (let i = 0; i < 26; i++) {
    if (charCount[i] > 0)
      resultString += String.fromCharCode(i + 97) + String(charCount[i]);
  }

  return resultString;
};

const myStr = "abcabcdabbcc";
console.log("Original =", myStr);

const elemCountedStr = countVariablesInString(myStr);
console.log("ElemCountedStr =", elemCountedStr);

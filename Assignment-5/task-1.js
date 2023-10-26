// Write a program to iterate over object.

const person = {
  firstName: "Ritik",
  lastName: "Maurya",
  age: 41,
  gender: "Male",
  phoneNo: "123456000",
};

// Iterate using for-in
for (const key in person) {
  console.log(key, person[key]);
}
console.log(); // For space

// Iterate using for-of and Object.keys
for (const value of Object.keys(person)) {
  console.log(value, person[value]); // key in person object
}
console.log();

// Iterate using Object.keys and for-each
Object.keys(person).forEach((elem) => {
  console.log(elem, person[elem]);
});

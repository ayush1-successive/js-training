// Write a program to sort an array of object on the basis of age ({name:"John", age:26})

persons = [
  {
    firstName: "Ritik",
    lastName: "Maurya",
    age: 64,
    gender: "Male",
  },
  {
    firstName: "Mary",
    lastName: "Johnson",
    age: 14,
    gender: "Female",
  },
  {
    firstName: "John",
    lastName: "Doe",
    age: 26,
    gender: "Male",
  },
  {
    firstName: "Linda",
    lastName: "Jones",
    age: 33,
    gender: "Female",
  },
];

// Sort all persons accordingly by their age
persons.sort((a, b) => {
  return a.age - b.age;
});

console.log(persons);

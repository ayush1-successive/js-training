// Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

persons = [
  {
    firstName: "Ritik",
    lastName: "Maurya",
    id: 4,
  },
  {
    firstName: "Mary",
    lastName: "Johnson",
    id: 2,
  },
  {
    firstName: "John",
    lastName: "Doe",
    id: 3,
  },
  {
    firstName: "Linda",
    lastName: "Jones",
    id: 1,
  },
];

// Using for loop and delete keyword
// for (const key in persons) {
//   delete persons[key].id;
// }

// Using for-each and delete keyword
// Object.keys(persons).forEach((elem) => {
//   delete persons[elem].elemid;
// });

// Using for-each and ...rest method
Object.keys(persons).forEach((key) => {
  const { id, ...rest } = persons[key];
  persons[key] = rest;
});

console.log(persons);

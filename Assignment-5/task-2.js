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

// Sort the array using bubbleSort algorithm
const bubbleSort = (personsArray) => {
  for (let i = 0; i < personsArray.length; i++) {
    for (let j = i + 1; j < personsArray.length; j++) {
      if (personsArray[j].age < personsArray[i].age)
        [personsArray[i], personsArray[j]] = [personsArray[j], personsArray[i]];
    }
  }
};

// Sort all persons accordingly by their age
bubbleSort(persons);

// Using JavaScript in-built sorting method
// persons.sort((a, b) => {
//   return a.age - b.age;
// });

console.log(persons);

// Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Returns a person's fullname
  get fullName() {
    const { firstName, lastName } = this;
    return `${firstName} ${lastName}`;
  }

  // Returns average age of all persons in the array
  static averageAge(persons) {
    const intialValue = 0;
    const totalAge = persons.reduce(
      (accumulator, currentPerson) => accumulator + currentPerson.age,
      intialValue
    );
    return totalAge / persons.length;
  }
}

const person = new Person("Alice", "Smith", 45);
// Display Alice fullName
console.log(person.fullName);

const persons = [
  new Person("John", "Doe", 27),
  new Person("Emma", "Lee", 56),
  new Person("Peter", "Parker", 14),
  new Person("Bruce", "Banner", 38),
];

// Calculate average age of all persons
console.log(Person.averageAge(persons), "years");

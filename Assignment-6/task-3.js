// Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.
// Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.
// Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  // Greet the person
  greeting() {
    const { name, age, gender, interests } = this;
    return `Hello ${name}, Your age is ${age} and your gender is ${gender}. Your interests are ${interests.join(
      ", "
    )}.\n`;
  }

  // Farewell to person
  farewell() {
    return `Goodbye ${this.name}. Happy Coding!\n`;
  }
}

class Student extends Person {
  constructor(name, age, gender, interests, studies) {
    super(name, age, gender, interests);
    this.studies = studies;
  }

  greeting() {
    const { name, age, gender, interests, studies } = this;
    return `Hello ${name}, Your age is ${age} and your gender is ${gender}. Your interests are ${interests.join(
      ", "
    )}.\n${name} is studying ${studies.join(", ")}.\n`;
  }
}

class Teacher extends Person {
  constructor(name, age, gender, interests, subjectsTaught) {
    super(name, age, gender, interests);
    this.subjectsTaught = subjectsTaught;
  }

  farewell() {
    const { name, subjectsTaught } = this;
    return `Goodbye ${name}. ${name} teaches ${subjectsTaught.join(", ")}.\n`;
  }
}

const person = new Person("John Doe", 32, "Male", [
  "Football",
  "Coding",
  "Fussball",
]);

// Display Person class greetings
console.log(person.greeting());

// Display farewell message
console.log(person.farewell());

const student = new Student(
  "Amy Shaw",
  26,
  "Female",
  ["Reading", "Badminton", "Chess"],
  ["Biology", "Computer Science", "English"]
);

// Display Student class greeting
console.log(student.greeting());

const teacher = new Teacher(
  "HC Verma",
  68,
  "Male",
  ["Teaching", "Content-Creation"],
  ["Physics", "Maths"]
);

// Display Teacher class farewell
console.log(teacher.farewell());

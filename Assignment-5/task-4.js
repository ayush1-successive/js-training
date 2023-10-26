// Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

// return a deep copy of an object
const deepClone = (object) => {
  if (typeof object == null || typeof object != "object") {
    return object;
  }

  // Intialise a new object
  let newObject = {};

  Object.keys(object).forEach((key) => {
    // Object check
    if (typeof object[key] == "object") {
      // Separate case for arrays
      if (object[key] instanceof Array) {
        // Create a temp array
        let tempArray = new Array(object[key].length);
        for (const keyArray in object[key])
          tempArray[keyArray] = deepClone(object[key][keyArray]);
        newObject[key] = tempArray;
      }
      // Separate case for Date object
      else if (object[key] instanceof Date) {
        newObject[key] = new Date(object[key].getTime());
      } else {
        // Recursively deep-clone the object
        newObject[key] = deepClone(object[key]);
      }
    } else {
      newObject[key] = object[key];
    }
  });

  return newObject;
};

// Test Object
const obj1 = {
  id: 1,
  fraction: {
    nemo: 10,
    deno: 20,
  },
  array: [1, 2, 3, 4],
  name: "someName",
  date: new Date(),
  func: () => {
    return "Hello World!";
  },
};

// Deep cloning obj1 into obj2
const obj2 = deepClone(obj1);

// Updating the contents of obj2
obj2.id = 7;
obj2.fraction.deno = 50;
obj2.array[2] = 99;
obj2.name = "newName";
obj2.date.setDate(14);
obj2.func = () => "Bye World!";

console.log(obj1);
console.log(obj2);

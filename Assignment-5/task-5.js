// Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
// const obj = {
//     a: 1,
//     b: { c: 2, d: [3, 4] }
//  };
//  Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }

// Flattens the content of an object recursively
const flattenObject = (object, keySoFar, flattenedObject) => {
  Object.keys(object).forEach((key) => {
    // Check for key type, if its object recursively call to flatten
    // the object else add it to the flattenObject
    if (typeof object[key] == "object") {
      // Separate case for Date object
      if (object[key] instanceof Date) {
        flattenedObject[keySoFar + key] = object[key];
      } else {
        return flattenObject(
          object[key],
          keySoFar + key + ".",
          flattenedObject
        );
      }
    }
    flattenedObject[keySoFar + key] = object[key];
  });
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

const flattenedObject = {};
// Flatten the content of obj1
flattenObject(obj1, "", flattenedObject);
console.log(flattenedObject);

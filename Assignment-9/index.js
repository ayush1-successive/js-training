// index.js

const math = require("./math/math");
const _ = require("lodash");

console.log(_.camelCase("hello world in camelcase"));

const a = 10;
const b = 20;

console.log(`Sum of A and B = ${math.add(a, b)}`);
console.log(`Difference of A and B = ${math.subtract(a, b)}`);

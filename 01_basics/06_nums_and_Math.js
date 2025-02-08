const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
// console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(10)); // returns string representing a number of fixed point notation

const otherNumber = 123.85;

console.log(otherNumber.toPrecision(8)); // is used to format the number to the specified precision

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // return num in positive every time
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); //Rounds a number up to the nearest integer.
console.log(Math.floor(4.9)); //Rounds a number down to the nearest integer.
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // gives value b/w 10 to 20

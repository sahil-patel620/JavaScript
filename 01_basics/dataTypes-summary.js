
//  Primitive types

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n  //adding n convert it into BigInt



// Reference (Non primitive) types

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

// object 
let myObj = {
    name: "hitesh",
    age: 22,
}

// function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);   // output: object
console.log(typeof myObj);   // output: object
console.log(typeof myFunction);  // output: function 

// to learn more 
// https://262.ecma-international.org/5.1/#sec-11.4.3

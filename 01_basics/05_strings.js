const names = "Sahil"
const repoCount = 50

// console.log(name + repoCount + " Value");    //not a good practice

console.log(`Hello my name is ${names} and my repo count is ${repoCount}`);

const gameName = new String('sahil-sp-com')

console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));  

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   sahil    "
console.log(newStringOne);
console.log(newStringOne.trim());  // remove white spaces and line terminator characters from string
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimStart());


const url = "https://sahil.com/sahil%20patel"

console.log(url.replace('%20', '-'))   // replace %20 to -

console.log(url.includes('sundar'))   // checks for 'sundar' in url  if present return true otherwise false 

// console.log(gameName.split('-'));  // split where - is present and return as array of splitted string
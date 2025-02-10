// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6)
myArr.push(7)  // added at last 
myArr.pop()   // remove last element

myArr.unshift(9)   // push at startinng
myArr.shift()      // pop from starting

console.log(myArr.includes(9));  // to check element is present in aaray or not
console.log(myArr.indexOf(3));   // to get index of any element from array

const newArr = myArr.join()     // converts array's elements into string 
console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);
// slice return a array where ending index element is excluded and do not effect original array
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

// splice return a array where ending index is also included and remove these index elements from original array
const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


// console.log("2" > 1);      // "2" and "02" is converted as number and then compared
console.log("02" > 1);


// *********** Try to avoid this kind of comparison *************

console.log(null > 0);   // output: false
console.log(null == 0);  // output: false
console.log(null >= 0);  // output: true

/* The reason is that an euality check == and comparisons >, <, >=, <= work differently .
Comparisons convert null to a number, treating it as 0.  */

console.log(undefined == 0);    // output: false
console.log(undefined > 0);     // output: false
console.log(undefined < 0);     // output: false

// ===  strict check , it check data types also

console.log("2" === 2);    // output: false
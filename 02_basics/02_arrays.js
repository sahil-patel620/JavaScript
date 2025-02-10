const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros); // this will add array as element

console.log(marvel_heros);
console.log(marvel_heros[3][1]); // to access element of array under array

const allHeros = marvel_heros.concat(dc_heros); // concat merge two array elements into single
console.log(allHeros);

// ... is spread which merge two two or more array into single array . this is widely used
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
//  flat Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_another_array = another_array.flat(Infinity); // Infinity is depth
console.log(real_another_array);

console.log(Array.isArray("Sahil")); //to check is array or not
console.log(Array.from("Sahil")); // to convert into array
console.log(Array.from({ name: "Sahil" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

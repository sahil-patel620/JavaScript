
// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());  // output with day and month name
console.log(myDate.toLocaleString());  // output in indian style
console.log(typeof myDate);

let myCreatedDate1 = new Date(2025, 0, 23) // in JS month start from 0
let myCreatedDate2 = new Date(2025, 0, 23, 5, 3)  // date with hrs and minutes
let myCreatedDate3 = new Date("2025-01-14")  //  YY-MM-DD
let myCreatedDate = new Date("02-09-2025")   // MM-DD-YY
console.log(myCreatedDate.toDateString());   

let myTimeStamp = Date.now()  // current time 

console.log(myTimeStamp);  // give output in milliseconds from 1st Jan 1970 till now
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // converting millisecond to second 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // +1 because month in JS start with 0 to avoid confusion to user we added 1
console.log(newDate.getDay());


// to customize date and time 
newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Kolkata",
})

// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)    //Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// array of objects which we can get from databases
const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);

console.log(Object.keys(tinderUser)); // return array of keys of object
console.log(Object.values(tinderUser)); //Returns an array of values of object keys
console.log(Object.entries(tinderUser)); //Returns an array of key/values of the enumerable own properties of an object

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //Determines whether an object has a property with the specified name

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// DE-constructing of object

const { courseInstructor: instructor } = course;

console.log(instructor);
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const { name, age, city } = person;
console.log(name); // Outputs: John
console.log(age); // Outputs: 30
console.log(city); // Outputs: New York


// API TALKS

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]

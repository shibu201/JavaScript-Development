/*
Objects => allow you to store data in the form of key–value pairs. Keys → identifiers (usually strings).Values → can be of any type (string, number, boolean, function, even another object). it reserve larger memory blocks. Each property in memory is stored as primitive value and so mutable. Declared using {} or new Object() (but {} is preferred).
When u declare an object using const, the object reference will be fixed, but it's value is still mutable. But u cannot reassign the entire object.
*/
// Creating object
let user = {
    firstName: "Shibu",
    email: "Sk@example.com",
    isLoggedIn: true
};
console.log(user);
let user2 = {} // declaring an empty object
console.log(user2, typeof user2);
// declaring and changing using const
const user3 = {
    Name : 'Shibu',
    'first name' : 'SK',  // When key have spaces, put it in quotes
    place : 'Bihar',
    age : 23
}
user3.Name = 'saransh' // allowed even with const
user3.place = 'Bangalore'
console.log(user3); // see the changed value

// Accessing the object properties
// using dot notation
console.log(user3.place);
// console.log(user3.first name); Error as dot notation doesn't work here
// using bracket notation - when key has space or key is stored in variable. universal and applied everywhere.
console.log(user3['Name']);
console.log(user3['first name']);
// key stored in variable
const car = {
  make: "Honda",
  model: "Civic",
  year: 2023
};
let selectedProperty = "model";
console.log(car[selectedProperty]); // Outputs: "Civic"
selectedProperty = 'year'
console.log(car[selectedProperty]); // Outputs: "2023"

// Adding new property to an object - 2 ways
user3['last name'] = 'Singh'
user3.fullName = 'Shibu Saransh'
console.log(user3);
user3.age = 24 // updating existing properties


/*
Special Cases in Objects + Inbuilt Objects => JavaScript provides many built-in objects to make programming easier. ex- Date, Math, JSON, RegExp.  
*/
let today = new Date() // show this time
console.log(today);
// Data has many in built method also to see different formats. check documentation for available methods
console.log(today.getDate());
console.log(today.getMonth());
console.log(today.getFullYear());
console.log(today.getDay());
console.log(today.getTime());
let formattedDate = `${today.getDate()}-${today.getMonth()+1}-${today.getFullYear()}`;
console.log(formattedDate);


/*
Arrays => An array is a non-primitive data structure in JavaScript used to store collections of values. store values in ordered indexes. can store multiple data types together. zero-indexed. 
*/
let heroes = ["Ironman", "Batman", "Spiderman"];
console.log(heroes);
let mixed = ["Shibu", 25, true, { city: "Delhi" }];
console.log(mixed);
console.log(mixed[1]); // accesing elements of array
console.log(mixed[mixed.length - 1]); // last element. -1 won't work here, as array is an object and when use array[-1], it tries to find the key of -1 and show undefined.

// Note = objects are better for structured data (User details). Arrays are better when we just need a list/collection of items (like names, numbers, etc.).

// Array inside array is called multidimensional array. matrix type structure.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][1]); // 2 accessing 1st index item of 0th indexed item (array).
// arrays are mutable — their contents can be updated even if declared with const. Many more in-built methods are there.
heroes[1] = 'hulk' // value updated.
heroes.push('captain america') // value added to last
console.log(heroes);
// Array with object - best of both worlds. 
let users = [
    { 'first Name': "Shibu", isLoggedIn: true },
    { 'first Name': "Hitesh", isLoggedIn: false }
];
console.log(users[0]['first Name']);
console.log(users[1].isLoggedIn);


/*
Type Conversion => changing one datatype to another. either do manually by developers (explicit) or automatically by JS (implicit). 
*/
// Implicit conversion. considered unreliable.
console.log(1 + "1");  // "11"
console.log(true + '12');
console.log(true + 12); // boolean implicit
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number('abc')); // NaN
console.log(typeof NaN);
// Explicit conversion
console.log(Number('123'));
console.log(String(234));
console.log(Boolean(1));
// Note = typescript is built in top of Js to avoid the bugs in JS and support good development enviornment
/*
Introduction & Data Handling vs Data Processing => Handling data means Managing, storing, and recognizing the type of data. ex- string or number. we are handling data by recognizing and assigning types. 
Processing data means applying logic, algorithm or transformation. Deciding what to do with the data. Once data handling is natural, processing becomes second nature.
*/
// Handling
let username = "Shibu";   // string
let score = 95;           // number
// Processing
if (score >= 90) {
    console.log(`${username} passed with distinction 🎉 Wao`);
} else {
    console.log(`${username} passed`);
}


/*
JavaScript Data Types Overview => specifies the type of value, a variable can hold. they determine: ✅ How the data is stored in memory and ✅ What operations can be performed on the data. 
Non-primitives are stored by reference, not by value and are mutable (changable). Primitives are stored by value and are immutable (not changable).  
*/
console.log('Primitive Data types');
// Strings - can be declared using both single/double quotes and backtics ` . 
let Name = "Shibu"; // double quotes
console.log('Hello ' + Name); // old way concatenation
let city = 'Delhi'; // single quotes
let greet = `Hello ${Name}`; // backticks (template literal). New way. Easier concatenation. support multiline strings. allow embedding expression/variable in ${}. 
let value = `2 + 2 = ${2 + 2}`;
console.log(value); // "2 + 2 = 4"
// Numbers
let age = 25;
let price = 199.99;
console.log(typeof age);
// Booleans
let isActive = true;
let isStudent = false;
let newBoolean = new Boolean(false) // another way (not recommended)
console.log(newBoolean, typeof newBoolean); // object
// Null represent no value
let user = null
console.log(typeof user); // return object as it is legacy bug in JS
// Undefined → Declared but not assigned
let score2;
console.log(score2); // undefined
let lastName = undefined // another way of declaring
console.log(score2, typeof lastName); // both value and type is undefined   
// Symbol → Represents unique values. Symbols are often used as object keys to avoid accidental overwrites.
let id = Symbol("userID");
let id2 = Symbol("userID");
console.log(id === id2); // false (always unique)
let X = {
    name: "Shibu",
    [id]: 123
};
console.log(X[id]); // 123

// Non primitive data types
// Objects - Key-value pairs
let user2 = {
    name: "Shibu",
    age: 25,
    isDeveloper: true
};
// Arrays → Ordered list of values
let fruits = ["🍎", "🍌", "🍇"];
console.log(fruits);
// Functions → Blocks of reusable code
function greetUser() {
    console.log("Hello Developer 🚀");
}

// Note = Everything is an object in JS. typeof value/variable is used to check the type.
console.log(typeof score);
let score_ = new Number(100) // a different way to create a number
let score2_ = new Number(56)
let fullScore = score_ + score2_
console.log(score_ + score2_);
console.log(typeof score2_); // object as it is shown as primitive to object conversion. This is called number object.
console.log(typeof fullScore); // number, not object


/*
Practical Demonstrations & Advanced Notes => typeof symbol is symbol, undefined is undefined, null is object, arrays is object, function is function 
*/
console.log(typeof Symbol('my id'));
console.log(typeof undefined);
console.log(typeof {name : 'shibu', clas : 'first-class'});
console.log(typeof [1,2,3]);
console.log(typeof function(){});

// All primitive can be converted to object. so everything is an object in JS. use new to convert. But always prefer primitive declaration. Non primitives are already reference based.
let num = 50;
let numObj = new Number(50);
console.log(typeof num);    // "number"
console.log(typeof numObj); // "object"
/*
Various ways to printing to display output and debugging and tracking program flow. There are many ways to print output in different forms. 
*/
console.log('hello'); // print message/value to console
process.stdout.write('shibu')
process.stdout.write(' saransh') // another printing way that do not give newline
console.table([1,2,'shibu', 'saransh']) // output in tabular form

/*
DATA TYPES = different data type for storing different types of values. can be primitive or non primitive. 
*/
// 7 Primitive data types
let Name = 'shibu' // string
let score = 90 // number
let is_logged_in = true // boolean
let bigNumber = 9999999999999999999999999n // bigint
let not_assigned // undefined means no value is assigned to it
let empty_value = null // null means intentionally given empty value
let uniqueID = Symbol(123) // symbol
// 2 non primitive data types
let tea_type = ['lemon', 'ginger', 'green', 'mint', 'choclate'] // arrays - collection
console.log(tea_type);
let user_ = {
    firstName :'shibu',
    lastName : 'saransh',
    age : 23
} // object data type means key-value pair
console.log(user_);

/*
VARIABLE = avoid var, let (block scoped, can be reassigned but not redeclared within same scope), const (block scoped, for constants, not reassigned or redeclaration and must initialization, reference cannot be reassigned, content can change if it stores object or array). Use meaningful names, camelCase, start with a letter, _ or $.
*/
let score2 = 78
score2 = 99 // reassigned
// let score2 = 88 // error as it cannot be redeclared
const PI = 3.24
// PI = 88 // error as cannot be reassigned
const fruits = ['apple', 'mango']
fruits.push('banana') // even with const with non primitive, it can be modified, but it's reference cannot be changed.
console.log(fruits);
// Note = The reference to the object/array is constant, but the internal values can change. Use let if u expect to change the variable value later. 
let getScore = score2 // copying variable values
{
    let student = 'Shibu Saransh'
    console.log(student); // accesible as it is inside the block and let is block scoped
}
// console.log(student); // not accessible as it is outside the block

/*
STRING OPERATION AND TEMPLATE LITERALS = create string using single/double quotes. Template literals allow string interpolation using {}. it support multiline string without special character and it is easy to follow.   
*/
let first_Name = 'shibu'
let last_Name = 'saransh'
let full_Name = first_Name + ' ' + last_Name // concatenation of 2 strings
console.log(full_Name);
full_Name = `The full name is ${first_Name} ${last_Name}` // using template literals
console.log(full_Name);
let place = `Bangalore
560092
Church gate`
console.log(place); // template literal support multiline strings
// Many string methods can be used. There can be many built-in methods. 
console.log(full_Name.length);
console.log(full_Name.toUpperCase());
console.log(full_Name.indexOf('r'));
console.log(full_Name.slice(0,4));
console.log(full_Name.replace('shibu', 'shubh'));
// Type conversion - using string() or number() to convert. use typeof value/variable to check. if u convert non-numeric into Number type will result NaN. 
let scoreAsString = String(score) // converted to string
console.log(typeof score, typeof scoreAsString);
let price = '899'
let priceinNum = Number(price) // converted to number
console.log(typeof price, typeof priceinNum);
console.log(Number('abc')); // NaN

/*
NUMBERS, ARTHEMATIC OPERATIONS & TYPE COERCION = numbers are always stored as floating value even if it store as an integer. 
*/
// Basic arthematic operations using numbers
console.log(6 + 3);
console.log(6 - 3);
console.log(6 * 3);
console.log(6 / 3);
console.log(6 % 3);
console.log(6 ** 3);
// Increment and decrement
let count = 5
console.log(count++); // 5 as it print first and then increment it
console.log(count); // 6 as it prints the incremented value
console.log(count--); // same as count++
console.log(count); // 5 as it prints the decremented value
console.log(++count); // 6 as it increment first and then print
console.log(--count); // 5 as it decrement first and print later
// Basic assignment operator
count +=4 // means count = count + 4. same as -=, *=, /= and so on
console.log(count); // 9
// Type coercion means JS automatically converts one datatype to another to perform an operation. if operation happens between number and string and both are convertible, JS tries to convert one or both of them to perform operation in best possible way. ex- in case of + , it tries to concatenate by converting it to string. for all other arthematic operation it will convert to numbers
console.log(5 + '5'); // string conversion and concatenation
console.log('5' * '6'); // both converted to number
console.log('6' - '4'); // both converted to number
console.log(1/0);
console.log(-1/0);
console.log('abc' * 3); // NaN as it tries to convert to number

/*
Booleans, Comparisons & Conditional Logic = booleans used in decision makeing as it results true or false. we use comparision operator to compare values which results in  booleans. == (perform coercion and checks value, not type), === (does not perform coercion and checks both value and type), != (reverse of ==), !==, >, <, >=, <= 
*/
console.log(5=='5');
console.log(5==='5'); // always use strict equality
console.log(5!='5');
console.log(5!=='5');
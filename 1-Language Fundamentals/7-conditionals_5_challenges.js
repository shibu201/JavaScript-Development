/*
Conditionals = basically giving brain to program for decision making. 
Introduction to Conditionals = we want to make our program smart so that it do different things based on different conditions. ex- if it is rainy, suggest umbrella or if it sunny, suggest something else and so on. Conditionals = statements that let the program decide what to do based on a condition.A condition is a check → is it true or false? Program branches into different paths depending on the result.
If condition is true → execute Block A. If condition is false → execute Block B. Here, we mostly use comparision or logical operator as it only results to either true or false.
*/
// Basic Syntax are as -
// if (condition) {
//    // Runs if condition is true
// } else {
//    // Runs if condition is false
// }
let isRaining = true;
if (isRaining) {
  console.log("Take an umbrella 🌂");
} else {
  console.log("No umbrella needed ☀️");
}
// The evaluation of condition must come down to either true or false. 
// Nested Conditionals = conditions inside conditions. - If today is **Monday**:- If it’s **raining** → "Take umbrella to office".- Else → "Just go to office". basically, checking one condition inside another.
let day = "Monday";
let is_raining = true;
if (day === "Monday") {
  if (is_raining) {
    console.log("Take umbrella to office ☂️🏢");
  } else {
    console.log("Go to office without umbrella 🏢");
  }
}


/*
Conditionals with Numbers & Strings => { } can mean object OR code block, depending on where it’s used. 
*/
// Challenge - 1 - it handles both true and false cases.
console.log(`Check if One Number is Greater than Another`);
let num1 = 45
let num2 = 66
if (num1 > num2) {
    console.log(`num 1 ${num1} is greater then num 2 ${num2}`);
} else {
    console.log(`num 2 ${num2} is greater then num 1 ${num1}`);
}

// Challenge - 2
console.log(`2. Check if two usernames are equal.`);
let user_name_1 = 'shibu'
let user_name_2 = 'shibu'
if (user_name_1 === user_name_2) {   // === checks both value and types
    console.log(`The user names are same. Take a different user name`);
} else {
    console.log(`The user names are different. Go with it`);
}
// Another way
// Real life use case = When a user registers, the system must check if the username already exists. 
if (user_name_1 !== user_name_2) {
  console.log("✅ You can use this username");
} else {
  console.log("❌ Pick another username");
}
let enteredUsername = "shibu123";
let existingUsernames = ["alex", "shibu123", "mark"];

if (existingUsernames.includes(enteredUsername)) {
  console.log("❌ Username already taken, please choose another");
} else {
  console.log("✅ Username available");
}


/*
Conditionals with Numbers & Booleans => 
*/
// Challenge - 3 - checking if a variable is a number. in real world, it is used in banking where the type of balance must be a number to prevent bugs.
console.log('Challenge 3');
let score = [1,2,4]
if (typeof score === 'number') {
    console.log('The type of score is number');
} else {
    console.log(`The type of score is not a number. The type is ${typeof score}`);
}
// 🔹 Challenge 4: Check if a Boolean Value is True/False. used in Feature toggles in apps: like dark mode enabled or disabled.
let is_tea_ready = true
if (is_tea_ready) {
    console.log(`Woo... Let's have a sip of tea in this beautiful whether`);
} else {
    console.log(`damm.. need to wait for a few minutes to enjoy`);
}


/*
Conditionals with Arrays + Recap
*/
// 🔹 Challenge 5: Check if an Array is Empty. we use .length property to test. Used in database queries.
// My approach
let arr = [1,2,3,4,5]
if (arr.length === 0) {
    console.log(`This is an empty array`);
} else {
    console.log(`The array is not empty`);
}
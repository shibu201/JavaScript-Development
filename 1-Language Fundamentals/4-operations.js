// Theme = JS operators and operations


console.log('Arthematic Operations ++++++++++++++++++++++++++++++++++++++++++++++++++');
/*
ARTHEMATIC OPERATOR => Operators are symbol that tell computer to perform certain mathematical or ligical actions on values and variables.
arthematic operator include + - * / %
*/
let score = 89
let bonus = 34
let total = score + bonus // performing addition
console.log(total);
console.log(score - bonus); // subtraction
console.log(score * bonus); // multiplication
console.log(score / bonus); // division - always give floating value
console.log(score % bonus); // modulus return remainder
console.log(score ** bonus); // exponentiation raises a number powers another


console.log('comparison operations++++++++++++++++++++++++++++++++++++++++++++++++');
/*
COMPARISION OPERATOR => Comparison operators are used to compare two values and return boolean result. used in decision making like conditional statements and loop. == === !== != > < >= <=.  
*/
let num1 = 6
let num2 = 5
console.log(num1 == num2); // checks if both values are equal. it is loose equality and allow type coercion.
console.log(num1 != num2); // checks if both values are not equal
// Note - == is comparision operator and check equality and produce boolean value. = is assignment operator which assign a value to a variable.
console.log(5 === '5'); // strict equality checks both value and type and do not perform coercion. prefer it over ==


console.log('LOGICAL OPERATORS +++++++++++++++++++++++++++++++++++++++++++++++');
/*
LOGICAL OPERATORS => if u want to check multiple conditions together. it also give only boolean results. ex- a user should be logged in and paid to see premium content. either log in through google or github to grant account access. 
AND (&&) returns true only if both conditions are true else false. OR (||) returns true if at least one of the conditions is true else false. NOT (!) Operator just reverse the result. means !(true) = false. The operations is always performed from left to right. 
*/
// AND Operations
let isLoggedIn = true
let isPaid = true
let accessGrant = isLoggedIn && isPaid
let accessDenied = !(isLoggedIn && isPaid)
console.log('Access Granted is', accessGrant);
console.log('Access Denied is', accessDenied);
// OR Operations
let isEmailUser = true
let isGithubUser = false
let getIn = isEmailUser || isGithubUser
console.log('User can enter - ', getIn);
// NOT Operator
let not_get_in = !(isEmailUser || isGithubUser)
console.log('User cannot enter - ', not_get_in);
// Note = even more then 2 condition can be used in logical operations and the result will be evaluated based on rule defined above.
let hasCredits = true;
console.log('User can see the dashboard - ',isLoggedIn && isPaid && hasCredits);

/*
Assignment Operators & Operator Precedence => it assigns a value to the variable. = is the basic assignment operator. U can also assign results of expression to a variable. += -= %= are also there.
*/
num1+=3 // means num1 = num1 + 3
num2*=6
// Operator Precedence - () then ** . multiplication and division before add and subtract. left to right. order can be controlled using parenthesis. it is a better approach as it makes the things readable.
let result = 2 + 3 * 4
console.log(result);
let result2 = (2 + 3) * 4 // controlling order of execution using ()
console.log(result2);
let result3 = ((2 * 3) + 2) - 1; // 7
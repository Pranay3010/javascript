// if 

// if (condition){
//     // code to be executed if condition is true
// }
let name = "John";
// if (name === "John"){
//     console.log("This will be printed");
// }

if (false){
    console.log("This will not be printed");
}


// < less than
// > greater than
// <= less than or equal to
// >= greater than or equal to
// == equal to
// === strictly equal to (checks both value and type)
// != not equal to
// !== not strictly equal to


// if (2=="2"){
//     console.log("This will be printed because == does type coercion");

// }

// if (2==="2"){
//     console.log("This will not be printed because === does not do type coercion");
// }
// let temperature = 35;
// if (temperature > 30){
//     console.log("It's a hot day");
// }
// else {
//     console.log("It's not a hot day");

// }

// const score = 85;

// if (score > 50){
//     const power ="fly"
//     var power2 = "invisibility"
//     console.log(`User power ${power}`);
// }
// // console.log(`User power ${power}`);  // This will throw an error because power is not defined outside the if block local scope.

// // but if var is used instead of const or let, it will be function scoped and can be accessed outside the if block. However, using var is generally not recommended due to its quirks and potential for bugs.

// console.log(power2); // This will be accessible because power2 is declared with var, which is function-scoped.
 

const balance = 500;

// if (balance > 500) console.log("Yes"); // This will be executed because the condition is true, but it is generally recommended to use curly braces for better readability and to avoid potential bugs in more complex code.
// // known as implicit block, it is only recommended for single statements, if there are multiple statements, it is better to use curly braces to define


// if (balance > 500) console.log("Yes"),
// console.log("Balance is greater than 500");
// // not recommended to use comma operator in this way, it can lead to confusion and is not considered good practice. It is better to use curly braces to clearly define the block of code that should be executed when the condition is true.


// if (balance < 500) {
//     console.log("Balance is less than 500");
// }
// else if (balance > 500) {
//     console.log("Balance is greater than 500");
// }
// else {
//     console.log("Balance is exactly 500");
// }
    

const userloggedIn = true;
const paymentMade = true;
const loggedInfromGoogle = true;
const loggedInfromEmail = false;

// && is the logical AND operator, it returns true if both operands are true, otherwise it returns false.
if (userloggedIn && paymentMade){
    console.log("Access granted");
}
else {
    console.log("Access denied");
}
// || is the logical OR operator, it returns true if at least one of the operands is true, otherwise it returns false.


if (loggedInfromGoogle || loggedInfromEmail){
    console.log("User logged in");
}
else {
    console.log("User not logged in");
}

// Nullish coalescing operator (??) is used to provide a default value when the left-hand side operand is null or undefined. It returns the right-hand side operand if the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand.
// based on null , undefined

let val1;
//val1 = 55 ?? 100; // val1 will be 55 because it is not null or undefined
 
//val1 = null ?? 100; // val1 will be 100 because the left-hand side operand is null


// val1 = undefined ?? 10; // val1 will be 100 because the left-hand side operand is undefined


val1 = null ?? 100 ?? 200; // val1 will be 100 because the left-hand side operand is null, the nullish coalescing operator will return the right-hand side operand which is 100, and the second nullish coalescing operator will not be evaluated because the first one already returned a value.
console.log(val1);


// Ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. The syntax is: condition ? value_if_true : value_if_false
// condition ? value_if_true : value_if_false

const age = 17

age >= 18 ? console.log("You are an adult") : console.log("You are a minor");
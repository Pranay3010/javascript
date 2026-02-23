// primitive data types

// 7 primitive data types in JavaScript
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol (ES6)
// 7. bigint (ES2020)




// const id = Symbol("123");
// const id2 = Symbol("123");


// console.log(id);
// console.log(id2);
// console.log(id === id2); // ans= false (boolean)

// const bigInt1 = 99799898n
// console.log(typeof bigInt1);

// Reference (non-primitive) data types
// 1. array
// 2. object
// 3. function


// const arr = [1, 2, 3];
// const obj = { name: "Hitesh", age: 30 };
// const func = function() {
//     console.log("Hello World");
// }

// console.log(arr); // ans= [1, 2, 3] (array)
// console.log(typeof arr); // ans= object

// console.log(obj); // ans= { name: "Hitesh", age: 30 } (object)  
// console.log(typeof obj); // ans= object

// console.log(func); // ans= function() { console.log("Hello World"); } (function)
// console.log(typeof func); // ans= function

// JavaScript is a dynamically typed language
// it means that we don't need to specify the data type of a variable when we declare it
// and we can change the data type of a variable at any time

// JavaScript is a loosely typed language
// it means that we can perform operations on variables without worrying about their data types
// for example, we can add a number and a string and it will concatenate them

//console.log(2 + "2"); // ans= "22" (string)









// ===========================+++++++++++++++++==========================
// Memory management in JavaScript
// Stack memory (primitive data types)
// Heap memory (non-primitive data types)

// When we declare a variable with a primitive data type, it is stored in the stack memory  
// When we declare a variable with a non-primitive data type, it is stored in the heap memory and a reference to that memory location is stored in the stack memory

// In stack memory, the variable holds the actual value
// In heap memory, the variable holds a reference to the value

// When we assign a primitive data type to another variable, a copy of the value is created
// When we assign a non-primitive data type to another variable, a reference to the same memory location is created


// let myyoutubename = "pranayrathore"
// let myyoutubename2 = myyoutubename

// console.log(myyoutubename);
// console.log(myyoutubename2);

// myyoutubename2 = "hiteshchoudhary"

// console.log(myyoutubename); // ans= "pranayrathore" (string)
// console.log(myyoutubename2); // ans= "hiteshchoudhary" (string)

let user1= { name: "Pranay", age: 30 }
let user2 = user1

console.log(user1); // ans= { name: "Pranay", age: 30 } (object)
console.log(user2); // ans= { name: "Pranay", age: 30 } (object)

user2.name = "Hitesh"

console.log(user1); // ans= { name: "Hitesh", age: 30 } (object)
console.log(user2); // ans= { name: "Hitesh", age: 30 } (object)
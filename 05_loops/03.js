// for of , array specific loop

// ['','','']
//[{},{},{}]

const array1 =[1,2,3,4,5];

// for (const num of array1) {
//     console.log(num);
// }

// const greeting = "Hello World";

// for (const greet of greeting) {
//     console.log(greet);
// }


// MAPS

const myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("city", "New York");
myMap.set("age", 30);


// console.log(myMap);

// for (const [key, value] of myMap) {
//     console.log(`${key}: ${value}`);
// }

const myObject = {
    name: "Pranay",
    age: 30,
    city: "New York"
}

for (const key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
}
// Immediatly Invoked Function Expression (IIFE)

// function chai() {
//     console.log("I am chai");
// }

// chai(); // normal way to call a function

(function chai() {   // named IIFE, we can also write it as an anonymous function
    console.log("I am chai");
})(); // IIFE way to call a function, it is immediately invoked after its declaration


//  () ()  first () is for function declaration and second () is for calling the function
// IIFE is used to create a new scope and avoid polluting the global scope, it is also used to execute code immediately without having to call the function separately.


(() => {
    console.log("I am chai2");
})(); 
// this is an arrow function, it is not a function declaration, it is a function expression, it is not hoisted, we cannot call it before its declaration

((name) => {
    console.log(`I am chai2 with ${name}`);
})("pranay"); 
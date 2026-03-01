// console.log("P")
// console.log("R")
// console.log("A")
// console.log("N")
// console.log("A")
// console.log("Y")

function printName() {
    console.log("P")
console.log("R")
console.log("A")
console.log("N")
console.log("A")
console.log("Y")
}

// printName(); // calling the function to execute the code inside it and print the name "PRANAY" to the console. When this line is executed, the function printName() is invoked, and the code inside the function is executed, resulting in the output of "PRANAY" being printed to the console.

function AddTwoNumbers(num1, num2) {
    const sum = num1 + num2;
   console.log(sum); // logging the calculated sum to the console. This allows you to see the result of the addition operation directly in the console output when the function is called. The sum variable holds the result of adding num1 and num2, and this line will print that result to the console for verification or debugging purposes.
}

//const result = AddTwoNumbers(5, 10); // calling the AddTwoNumbers function with arguments 5 and 10, and storing the returned result in a variable named result. When this line is executed, the function AddTwoNumbers is invoked with num1 set to 5 and num2 set to 10. The function calculates the sum of these two numbers and returns the result, which is then assigned to the variable result.

// //console.log(result); // output: 15
// console.log(AddTwoNumbers(3,4)); // calling the AddTwoNumbers function with arguments 3 and 4, and directly logging the returned result to the console. When this line is executed, the function AddTwoNumbers is invoked with num1 set to 3 and num2 set to 4. The function calculates the sum of these two numbers and returns the result, which is then immediately logged to the console without being stored in a variable. The output will be 7.
// AddTwoNumbers(7,8); // calling the AddTwoNumbers function with arguments 7 and 8, but not storing or using the returned result. When this line is executed, the function AddTwoNumbers is invoked with num1 set to 7 and num2 set to 8. The function calculates the sum of these two numbers and returns the result, but since it is not assigned to any variable or used in any way, the returned value is effectively ignored.


function AddTwoNumbers1(num1, num2) {
    const sum = num1 + num2;
   return sum; // returning the calculated sum from the function. This allows the caller of the function to receive the result of the addition operation and use it for further processing or display. The return statement exits the function and sends the value of sum back to the caller, making it available for use outside the function.
   // orrr

    // return num1 + num2; // directly returning the result of adding num1 and num2 without storing it in a separate variable. This is a more concise way to achieve the same result, as it eliminates the need for an intermediate variable to hold the sum. When this line is executed, the function will calculate the sum of num1 and num2 and return it directly to the caller.

}

const result1 = AddTwoNumbers1(5, 10); // calling the AddTwoNumbers1 function with arguments 5 and 10, and storing the returned result in a variable named result1. When this line is executed, the function AddTwoNumbers1 is invoked with num1 set to 5 and num2 set to 10. The function calculates the sum of these two numbers and returns the result, which is then assigned to the variable result1.

//console.log("result1:", result1); // output: 15

// function loginUserMssage(username) {
//     return `Welcome back, ${username}!`; // returning a personalized welcome message that includes the provided username. The function takes a username as an argument and constructs a string using template literals to create a welcoming message. When this line is executed, the function will return a string that says "Welcome back, [username]!", where [username] is replaced with the actual value of the username passed to the function.
// }

//loginUserMssage("Pranay"); // calling the loginUserMssage function with the argument "Pranay". When this line is executed, the function loginUserMssage is invoked with the username parameter set to "Pranay". The function will return the string "Welcome back, Pranay!", but since the returned value is not stored in a variable or logged to the console, it will not be visible in the output. To see the message, you would need to log it to the console or store it in a variable and then log that variable.

//console.log(loginUserMssage("Pranay")); // calling the loginUserMssage function with the argument "Pranay" and logging the returned message to the console. When this line is executed, the function loginUserMssage is invoked with the username parameter set to "Pranay". The function will return the string "Welcome back, Pranay!", which is then logged to the console, allowing you to see the personalized welcome message in the output.
//console.log(loginUserMssage()); // calling the loginUserMssage function with the argument "Pranay" and logging the returned message to the console. When this line is executed, the function loginUserMssage is invoked with the username parameter set to "Pranay". The function will return the string "Welcome back, Pranay!", which is then logged to the console, allowing you to see the personalized welcome message in the output.

// function loginUserMssage(username) {
//     if (username === undefined) {
//         return "Welcome back, Guest!"; // returning a default welcome message for guests when the username is not provided. This condition checks if the username parameter is undefined, which means that the caller did not pass any argument for the username. If this condition is true, the function returns a generic welcome message that addresses the user as "Guest". This allows the function to handle cases where a username is not provided and still provide a welcoming message to the user.
//     }   
//     else {
//         return `Welcome back, ${username}!`; // returning a personalized welcome message that includes the provided username. If the username parameter is defined (i.e., the caller has passed a value for the username), this line will execute, and the function will return a string that says "Welcome back, [username]!", where [username] is replaced with the actual value of the username passed to the function. This allows for a personalized greeting when a username is provided.
//     }
// }

// // console.log(loginUserMssage()); // calling the loginUserMssage function with the argument "Pranay" and logging the returned message to the console. When this line is executed, the function loginUserMssage is invoked with the username parameter set to "Pranay". The function will return the string "Welcome back, Guest!", which is then logged to the console, allowing you to see the default welcome message in the output.
// // console.log(loginUserMssage("Pranay")); // calling the loginUserMssage function with the argument "Pranay" and logging the returned message to the console. When this line is executed, the function loginUserMssage is invoked with the username parameter set to "Pranay". The function will return the string "Welcome back, Pranay!", which is then logged to the console, allowing you to see the personalized welcome message in the output.


// function loginUserMssage(username="Sammy") { // setting a default value of "Sammy" for the username parameter. This means that if the caller does not provide an argument for the username when calling the function, it will automatically use "Sammy" as the default value. This allows the function to still return a personalized welcome message even when no username is provided, as it will use "Sammy" as the default name in the greeting.    
//     if (username === undefined) {
//         return "Welcome back, Guest!"; // returning a default welcome message for guests when the username is not provided. This condition checks if the username parameter is undefined, which means that the caller did not pass any argument for the username. If this condition is true, the function returns a generic welcome message that addresses the user as "Guest". This allows the function to handle cases where a username is not provided and still provide a welcoming message to the user.
//     }   
//     else {
//         return `Welcome back, ${username}!`; // returning a personalized welcome message that includes the provided username. If the username parameter is defined (i.e., the caller has passed a value for the username), this line will execute, and the function will return a string that says "Welcome back, [username]!", where [username] is replaced with the actual value of the username passed to the function. This allows for a personalized greeting when a username is provided.
//     }
// }

// console.log(loginUserMssage("Pranay")); // calling the loginUserMssage function with the argument "Pranay" and logging the returned message to the console. When this line is executed, the function loginUserMssage is invoked with the username parameter set to "Pranay". The function will return the string "Welcome back, Pranay!", which is then logged to the console, allowing you to see the personalized welcome message in the output.



//===============Function with object =======+++++++++++++++

function calculateCartPrice(...cart) { // rest opreator
    return cart  // gives an array of all the arguments passed to the function as an array named cart. The rest parameter syntax allows the function to accept an indefinite number of arguments and collects them into an array. In this case, when you call calculateCartPrice(200, 300, 400), the cart parameter will be an array containing the values [200, 300, 400]. This allows you to work with all the passed arguments as a single array within the function.
}

console.log(calculateCartPrice(200,300,400));

function calculateCartPrice1(val1,val2,...cart) { // rest opreator
    return cart  // gives an array of all the arguments passed to the function as an array named cart. The rest parameter syntax allows the function to accept an indefinite number of arguments and collects them into an array. In this case, when you call calculateCartPrice(200, 300, 400), the cart parameter will be an array containing the values [200, 300, 400]. This allows you to work with all the passed arguments as a single array within the function.
}

console.log(calculateCartPrice1(200,300,400,500,600));


const user = {
    name: "Pranay",
    age: 25,
}

function printUserDetails(anyobject) { // destructuring the user object to extract the name and age properties directly in the function parameters. This allows you to access the name and age values without needing to reference the user object inside the function. When you call printUserDetails(user), the function will receive the user object, destructure it to extract the name and age properties, and then you can use those values directly within the function.
    return `Name: ${anyobject.name}, Age: ${anyobject.age}`; // returning a formatted string that includes the name and age properties of the anyobject parameter. This allows you to create a readable output that displays the user's details in a clear format. When this line is executed, the function will return a string that says "Name: [name], Age: [age]", where [name] and [age] are replaced with the actual values of the name and age properties from the anyobject parameter.
}

console.log(printUserDetails(user)); // calling the printUserDetails function with the user object as an argument and logging the returned string to the console. When this line is executed, the function printUserDetails is invoked with the user object passed as the anyobject parameter. The function will return a string that says "Name: Pranay, Age: 25", which is then logged to the console, allowing you to see the user's details in the output.  

console.log(printUserDetails({
    name: "Sammy",
    age: 30,
})); // calling the printUserDetails function with an inline object that has name and age properties. When this line is executed, the function printUserDetails is invoked with the inline object passed as the anyobject parameter. The function will return a string that says "Name: Sammy, Age: 30", which is then logged to the console, allowing you to see the details of the user represented by the inline object in the output.

const mynewArray = [1,2,3,4,5];

function printArraySecondElement(arr) { // defining a function named printArraySecondElement that takes an array as an argument. This function is designed to access and return the second element of the provided array. When you call printArraySecondElement(mynewArray), the function will receive the mynewArray as the arr parameter, and it will return the value at index 1 of that array, which is the second element.
    return arr[1]; // returning the second element of the array passed as an argument to the function. In JavaScript, array indexing starts at 0, so arr[1] refers to the second element of the array. When this line is executed, the function will return the value at index 1 of the arr parameter, allowing you to access and use that specific element from the array.
}

console.log(printArraySecondElement(mynewArray)); // calling the printArraySecondElement function with mynewArray as an argument and logging the returned value to the console. When this line is executed, the function printArraySecondElement is invoked with mynewArray passed as the arr parameter. The function will return the second element of mynewArray, which is 2, and this value will be logged to the console, allowing you to see it in the output. 
console.log(printArraySecondElement([2,3,31,2])); // calling the printArraySecondElement function with mynewArray as an argument and logging the returned value to the console. When this line is executed, the function printArraySecondElement is invoked with mynewArray passed as the arr parameter. The function will return the second element of mynewArray, which is 2, and this value will be logged to the console, allowing you to see it in the output. 


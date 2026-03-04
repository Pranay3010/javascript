const userEmail = "pranay@gmail.com";
const userEmails = [];
if (userEmail) {
    console.log("You have an email");
} else {
    console.log("You don't have an email");
}

// In JavaScript, the following values are considered falsy:
// false
// 0 and -0 and 0n (BigInt zero)
// "" (empty string)
// null
// undefined
// NaN

// All other values are considered truthy. This means that if you use any of these values in a condition, it will evaluate to true. For example:

// []  // This is an empty array, but it is considered truthy in JavaScript. So if you use it in a condition, it will evaluate to true.

// {}  // This is an empty object, but it is also considered truthy in JavaScript. So if you use it in a condition, it will evaluate to true.

// 42  // This is a number, and it is considered truthy in JavaScript. So if you use it in a condition, it will evaluate to true.

// "0"  // This is a string that contains a zero, but it is considered truthy in JavaScript. So if you use it in a condition, it will evaluate to true.

// "false"  // This is a string that contains the word "false", but it is considered truthy in JavaScript. So if you use it in a condition, it will evaluate to true.

// " "  // This is a string that contains a space, but it is considered truthy in JavaScript. So if you use it in a condition, it will evaluate to true.

// function(){}  // This is a function, and it is considered truthy in JavaScript. So if you use it in a condition, it will evaluate to true.


// if (userEmails.length === 0 ) {
//     console.log("You don't have any emails");
// } else {
//     console.log("You have emails");
// }

const emptyObject = {};
if (Object.keys(emptyObject).length  === 0 ) {
    console.log("The object is empty");
} else {
    console.log("The object is not empty");
}


// false == 0  // true
// false === 0  // false
// false == ""  // true
// 0 == ""  // true


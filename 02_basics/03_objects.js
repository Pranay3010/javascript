// singleton object

const mySymbol = Symbol("mySymbol1");

const JsUser = {
    name: "Pranay",
    [mySymbol]: "mySymbolValue", // using a symbol as a property key
    age: 30,
    location: "Indore",
    email: "pranay@example.com",
    isLoggedIn: false,
    lastLogin: "2023-10-01"
};

// console.log(JsUser.name);
// console.log(JsUser["name"]); // accessing the value of the "name" property using bracket notation

// console.log(JsUser[mySymbol]); // accessing the value of the symbol property using bracket notation


JsUser.email = "pranay.updated@example.com"; // updating the email property
console.log(JsUser.email); // Output:

//Object.freeze(JsUser); // freezing the object to prevent further modifications

// JsUser.age = 31; // trying to update the age property (will not work due to freeze)
// console.log(JsUser.age); // Output: 30 (age remains unchanged)


// console.log(JsUser);

//function to create user objects

JsUser.createUser = function() {
    console.log("Helloww");
};
JsUser.greting = function() {
    console.log(`Hellow ${this.name}`);
    
};

console.log(JsUser.greting()); // Output: Hellow Pranay

console.log(JsUser.createUser()); // Output: [Function: createUser]

    
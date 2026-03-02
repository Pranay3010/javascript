const user = {
    username: 'Pranay',
    price : 1000,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username} to our website`);
        console.log(this);
    },
}

// user.welcomeMessage();

// user.username = "Pranay Rathore";
// user.welcomeMessage();
// console.log(user.username);

// console.log(this); // global object in browser, empty object in node

// function one() {
//     let username = "Pranay";
//     console.log(this.username); //  object in browser, empty object in node
// }

// one(); // console.log(username); // gives error because username is not defined in global scope


// +++++++++++++++++++==========Arrow Function===============++++++++++++++++++++

// const chai = () => {
//     console.log("I am chai");
//     console.log(this); // empty object in node, global object in browser
// }

// chai();

// const addTwo = (num1, num2) => { //explicit return, we have to use return keyword when we have more than one line of code in function body
//     return num1 + num2;
// }


// const addTwo = (num1, num2) => num1 + num2;  // emplicit return, only works when we have one line of code in function body


// const addTwo = (num1, num2) => (num1 + num2);  // emplicit return, only works when we have one line of code in function body

const name = (name) => ({name: name});  // emplicit return, only works when we have one line of code in function body


// console.log(addTwo(5, 1));

console.log(name("Pranay"));
//by taking a vaiable and assigning a new promise to it, we can create a promise. The promise constructor takes a function as an argument which has two parameters, resolve and reject. We can perform some asynchronous work inside the function and call resolve when the work is completed successfully or reject if there is an error.

// const promise1 = new Promise(function (resolve, reject) {
//     // Do some async work
//     // DB calls, cyptography, network calls
//     setTimeout(function () {
//         console.log('Async work completed');
//         resolve();
//     }, 2000);
// });

// promise1.then(function () {
//     console.log('Promise consumed');
    
// });



// without assigning the promise to a variable, we can directly create and consume the promise. This is useful when we don't need to reuse the promise later in the code.


// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task 2");
//         resolve();
//     },2000);
// }).then(function () {
//     console.log("Promise consumed for task 2");
// });


// const promise3 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ username : "john_doe" , email : "john@example.com" });
//     },1000);
// })

// promise3.then(function (user) {
//     console.log(user);
// });


// const promise4 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if(!error) {
//             resolve({ username : "john_doe" , email : "john@example.com" });
//         } else {
//             reject(new Error("Something went wrong"));
//         }
//     },1000);
// })

// promise4.then(function (user) {
//     console.log(user);
//     return user.username;
// }).then(function (username) {
//     console.log(username);
// }).catch(function (error) {
//     console.log(error.message);
// });


// promise4.then(function (user) {
//     console.log(user);
//     return user.username;
// }).then(function (username) {
//     console.log(username);
// }).catch(function (error) {
//     console.log(error.message);
// }).finally(function () {
//     console.log("Promise is either resolved or rejected");
// });


// const promise5 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false;
//         if(!error) {
//             resolve({ username : "JavaScript_dev" , email : "john@example.com" });
//         } else {
//             reject("JS went wrong");
//         }
//     },2000);
// })

// async function consumePromise5(){
//     try {
//         const user = await promise5;
//         console.log(user);
//     } catch (error) {
//         console.log(error);
//     }   
// }
// consumePromise5();


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
// } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();

// const promise6 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//           const response = fetch('https://jsonplaceholder.typicode.com/users');
//           const data =  response.json();
//           resolve(data);
//         } else {
//            reject("Error fetching data");
//         }
//     },3000);
// })

// promise6.then(function (data) {
//     console.log(data);
// }).catch(function (error) {
//     console.log(error);
// });


fetch("https://api.github.com/users/Pranay3010")
.then(function (response) {
    return response.json();
}).then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
});
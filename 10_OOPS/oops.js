// const user = {
//     name: "John",
//     age: 30,
//     greet: function() {
//         // console.log("Hello, " + this.name);
//         console.log(this);
//     }
// }

// console.log(user.name);
// user.greet();

// console.log(this);


// Constructor Function new keyword ke sath use karte hain

function user1(name, age) {
    this.name = name;
    this.age = age;
    return this; // agar return this nahi karenge to bhi chalega kyunki by default return this hota hai constructor function me
}

const john = new user1("John", 30);
const pranay = new user1("Pranay", 25);
console.log(john);
console.log(pranay);
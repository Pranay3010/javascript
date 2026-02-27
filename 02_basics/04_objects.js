//const tinderUser = new Object(); // creating an empty object using the Object constructor and a singleton object literal

const tinderUser = {}; // creating an empty object using object literal syntax, which is more concise and commonly used in JavaScript not a singleton object

tinderUser.Id= "12345";
tinderUser.name = "Pranay";
tinderUser.age = 30;

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",    
    fullName: {
        userfullName: {
            firstName: "Pranay",
            lastName: "Rathore"
        }
    }
};

// console.log(regularUser.fullName); // accessing nested properties using dot notation
// console.log(regularUser.fullName.userfullName); // accessing nested properties using dot notation
// console.log(regularUser.fullName.userfullName.firstName  ); // accessing nested properties using dot notation


const obj1 = { 1: "one", 2: "two", 3: "three" }; // object with numeric keys
const obj2 = { 4: "four", 5: "five", 6: "six" }; // another object with numeric keys

// const obj3 =  Object.assign({}, obj1, obj2); // merging obj2 into obj1 using Object.assign()  {} creates a new empty object as the target for the merge, and obj1 and obj2 are the source objects whose properties will be copied into the target object. The resulting obj3 will contain all the properties from both obj1 and obj2. If there are any overlapping keys, the values from obj2 will overwrite those from obj1 in the resulting obj3.

// console.log(obj3);

const obj3 = {...obj1, ...obj2}; // merging obj1 and obj2 using the spread operator ... creates a new object that contains all the properties from both obj1 and obj2. The spread operator allows you to spread the properties of an object into another object. In this case, it creates a new object that includes all the properties from obj1 and obj2. If there are any overlapping keys, the values from obj2 will overwrite those from obj1 in the resulting obj3.

// console.log("Spreading",obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // returns an array of the keys of the tinderUser object, which are ["Id", "name", "age"]
console.log(Object.values(tinderUser)); // returns an array of the values of the tinderUser object, which are ["12345", "Pranay", 30]
console.log(Object.entries(tinderUser)); // returns an array of key-value pairs of the tinderUser object, which are [["Id", "12345"], ["name", "Pranay"], ["age", 30]]


console.log(tinderUser.hasOwnProperty("name")); // checks if the tinderUser object has a property named "name", which returns true because the property exists in the object
console.log(tinderUser.hasOwnProperty("gender")); // checks if the tinderUser object has a property named
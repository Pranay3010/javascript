const marvelHeroes = ["thor", "ironman", "hulk", "captain america"];
const dcHeroes = ["superman", "batman", "wonder woman", "flash"];

// marvelHeroes.push(dcHeroes); // adds the entire dcHeroes array as a single element to the end of the marvelHeroes array
// console.log(marvelHeroes);

// console.log(marvelHeroes[4]); // accesses the last element of the marvelHeroes array, which is the dcHeroes array
// console.log(marvelHeroes[4][0]); // accesses the first element of the dcHeroes array, which is "superman"

// const allHeroes = marvelHeroes.concat(dcHeroes); // creates a new array that is the result of concatenating the marvelHeroes and dcHeroes arrays
// console.log(allHeroes);


// console.log(Array.isArray("Pranay")); // checks if the provided value is an array, in this case, it returns false because "Pranay" is a string, not an array
// console.log(Array.from("Pranay")); // creates a new array from an array-like or iterable object, in this case, it creates an array of characters from the string "Pranay"
// console.log(Array.from({name: "Pranay", age: 30})); // creates a new array from an array-like or iterable object, in this case, it creates an empty array because the provided object is not iterable

let score1 =100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1,score2,score3)); // creates a new array from a variable number of arguments, in this case, it creates an array containing the values of score1, score2, and score3

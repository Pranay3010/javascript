//arrays

const myArray = [1, 2, 3, 4, 5];

const myHeroes = ["Superman", "Batman", "Wonder", "Flash", "Green Lantern"];

//const arry = new Array(1, 2, 3, 4, 5 , 6);

console.log(myArray);
//console.log(arry);
//console.log(myArray[1]);

// myArray.push(6); // adds an element to the end of the array
// myArray.push(7); // adds an element to the end of the array
// console.log(myArray);

// myArray.pop(); // removes the last element from the array
// console.log(myArray);


// myArray.unshift(0); // adds an element to the beginning of the array
// console.log(myArray);

// myArray.shift(); // removes the first element from the array
// console.log(myArray);

// console.log(myArray.includes(3)); // checks if the array includes the specified element
// console.log(myArray.includes(10)); // checks if the array includes the specified element

// console.log(myArray.indexOf(2));
// console.log(myArray.indexOf(7)); // returns -1 if the element is not found in the array

// console.log(myArray.length); // returns the number of elements in the array


// const newArr = myArray.join(); // joins all elements of the array into a string, separated by the specified separator (default is a comma)
// console.log(newArr);
// console.log(typeof newArr);

// slice ,splice

const slicedArray = myArray.slice(1, 4); // returns a shallow copy of a portion of the array into a new array object selected from start to end (end not included)
console.log("A" ,myArray);
console.log(slicedArray);

const splicedArray = myArray.splice(1, 4); // changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
console.log("B" ,myArray);
console.log(splicedArray);
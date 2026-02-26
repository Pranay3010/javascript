// Temporal.Now.instant() // current time as an Instant\

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

//let myCreateDate = new Date(2005, 9, 30); // January 1, 2020 (months are 0-indexed)
let myCreateDate2 = new Date(2005, 9, 30 , 20,20); // January 1, 2020 (months are 0-indexed)

//console.log(myCreateDate.toDateString());
console.log(myCreateDate2.toLocaleString());


let myTimestamp = Date.now(); // current timestamp in milliseconds

// console.log(myTimestamp);
// console.log(myCreateDate2.getTime());
console.log(Date.now());

let newDate = new Date()

console.log(newDate.getDay());
console.log(newDate.getMonth() + 1); // Months are zero-indexed, so we add 1 to get the correct month number


// const number = 42;

// console.log(number); // 42

// const balance = new Number(1000);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

// const pin = 32.55556;
// console.log(pin.toPrecision(3)); // 32.6

// const hundred = 10000000000
// console.log(hundred.toLocaleString()); // 100,000,000 (US NUMBER SYSTEM)
// console.log(hundred.toLocaleString('en-IN')); // 100,000,000 (INDIAN NUMBER SYSTEM)

// ++++++++++++++++++++++============++++++++++++++++++++
// Math library

// console.log(Math);
// console.log(Math.abs(-5)); // 5
// console.log(Math.round(4.5)); // 5
// console.log(Math.ceil(4.4)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.max(1, 5, 3)); // 5
// console.log(Math.min(1, 5, 3)); // 1



console.log(Math.random()); // 0.123456789 (random number between 0 and 1)
console.log(Math.random()*10); // 0.123456789 (random number between 0 and 1)
console.log(Math.random()*10); // 0.123456789 (random number between 0 and 1)
console.log(Math.floor(Math.random()*10)); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (random integer between 0 and 9) 



const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min); // random integer between 10 and 20 (inclusive) 
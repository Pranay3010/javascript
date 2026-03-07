// reduce 

// const arr = [1, 2, 3, 4, 5];

// const sum = arr.reduce((acc, curr) => { 
//     console.log(`acc: ${acc}, curr: ${curr}`);
//     return acc + curr; }, 0); // 0 is the initial value of acc

// console.log(sum); 

const shop =[
    {name: "laptop", price: 1000},
    {name: "phone", price: 500},
    {name: "tablet", price: 300},
    {name: "monitor", price: 200},
    {name: "keyboard", price: 100}
]

let totalPrice = shop.reduce((acc, item) => {
    console.log(`acc : ${acc} , current_value : ${item.price}`);
    
    return acc + item.price;
}, 0);

console.log(totalPrice);
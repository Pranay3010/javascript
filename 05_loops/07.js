const mynum =[1,2,3,4,5,6,7,8,9,10]

// mynum.forEach ((num)=>{  /// using for each
//     console.log(num+10);
// })

// let num1 =mynum.filter((num)=>  num>0);  // using filter
// console.log(num1);


// const newmynum = mynum.map((num)=> num+10);  // using map
// console.log(newmynum);

            // const newmynum = mynum.map((num)=> {return num+10});  // using map with return because we have declared a scope here with {}
            // console.log(newmynum);


// channing map and filter together

// const newNum = mynum.map((num)=> num*10).map((num)=> num+1);  // using map and filter together

// console.log(newNum);

const newNum = mynum.map((num)=> num*10).map((num)=> num+1).filter((num)=> num>40) // using map and filter together

console.log(newNum);
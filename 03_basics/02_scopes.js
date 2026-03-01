// let a = 10;
// const b = 20;
var c = 30;  // global scope


{} // scope block


let a = 1000; // global scope

if (true) {
    let a = 100;  // block scope
    const b = 200;
    var c = 300; // block scope
    console.log("Inner", a);
    
}

// console.log(a);
//console.log(b);
//console.log(c); // print 300 because var is function scoped, not block scoped

// +++++++++++++++++++==========Nested Scope===============++++++++++++++++++++


function one() {
    const username ="Pranay"

    function two() {
        const web = "JS"
        console.log(username);
    }
    // console.log(web);

    two();

}

one();
    
// ===============+++++ interesting +++++=============
console.log(addone(5));
function addone(num) {
    return num + 1;
}
// addone(5)

// both are same but patern of writing is different



addtwo(5) // gives error because of function expression, it is not hoisted like function declaration
const addtwo = function(num) {
    return num + 2;
    
}
// addtwo(5)

// we can also write above code like this
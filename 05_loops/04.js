// for in loop

const myobj = {
    js : 'javascript',
    py : 'python',
    rb : 'ruby'
}
// for (const key in myobj) {
    
//     console.log(key);
    
// }
// for (const key in myobj) {
    
//     console.log(myobj[key]);

// }
    
// for (const key in myobj) {
    
//     console.log(`${key} : ${myobj[key]}`);
    
// }


const myarr = ["js", "py", "rb"];

for (const key in myarr) {
    console.log(key);   
    
}

for (const key in myarr) {
    
    console.log(myarr[key]);

}
    
for (const key in myarr) {
    
    console.log(`${key} : ${myarr[key]}`);
    
}

// Maps are not iterable using for in loop, we have to use for of loop to iterate over maps.

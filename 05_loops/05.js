// for each loop

const coding = ["js", "py", "rb", "java", "c++"];

// coding.forEach(function(lang) {
//     console.log(lang);
// });


// using arrow function

// coding.forEach((lang) => {
//     console.log(lang);
// });

//function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(`${index} : ${item}`);
//     console.log(arr);
// });

const mycoding = [
    {lang: "js", framework: "react"},
    {lang: "py", framework: "django"},
    {lang: "rb", framework: "rails"}
];

mycoding.forEach((item)=>{
    console.log(`${item.lang} : ${item.framework}`);
});
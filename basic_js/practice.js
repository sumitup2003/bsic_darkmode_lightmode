//Array

// let items = [250, 645, 300, 900, 50];
// let i = 0;

// for(let val of items){
//    let offerPrice = val*0.10;
//    items[i] = items[i]- offerPrice;
//     console.log(`final values = ${items[i]}`);
//     i++;

// }



// Functions

// function addition(a, b){
//     console.log(a+b)
// }
//  addition(25, 5);

// function vowels(str){
//     let count = 0;
//     for(const s of str){
//       if(s === "a" || s === "e" || s === "i" || s==="o" || s==="u"){
//         count++; 
//       }
       
//       }
//       console.log(count);
//     }
       
// vowels("aewwww");

// countVwl=(str)=> {
//     let count =0;
//     for(const s of str){
//       if(s === "a" || s === "e" || s === "i" || s==="o" || s==="u"){         
//         count++; 
//       }
               
//            }
//     console.log(count);

// }

//ForEach method(it is a higher order function which
//can take other fnx values also)
//  let students = ["hafeez", "venkat", "suresh", "Rahul", "sumit"];
//  students.forEach((i, ind)=>{
//     console.log(i, ind);
//  });

//example for Each

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num, i)=>{
//     console.log(num**2, i)
// })



// let marks = [87, 93, 64, 99, 76];

// newArray = marks.filter((mark) => {
//     return mark>90;
// })
// console.log(newArray);

// let newNumber = prompt("enter a number");

// let arr = [];

// for(let i=1; i<=newNumber; i++){
//     arr[i-1] = i;
// }

// let sumArr = arr.reduce((previous, current)=>{
//     previous = previous + current;
//     return previous;
// });
// console.log(sumArr);


// DOM practice

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";
// body = document.querySelector("body");
// body.prepend(newBtn)

// ex-2

let btnClk = document.querySelector("button");
let htmpg = document.querySelector("html");
let mode = "light";

btnClk.addEventListener("click", ()=>{
    if(mode=== "light"){
        mode = "dark";
        htmpg.style.backgroundColor= "black";
    }
    else{
        mode = "light"
        htmpg.style.backgroundColor="white";
    }
    console.log(mode);
});


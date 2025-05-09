// index.js - Lab 8 anon functions and callbacks
// Author: ailish smith aibsmith@ucsc.edu
// Date: 5/9/25

// my function
    function mathStuff(number) {
        let result = number * 2;
        return result;
    }

// my array
let array = [1, 12, 13, 14, 15, 16, 17, 18, 19]
console.log("here are numbers ! " + array);

// function in action, should return [2, 24, 26, 28, 30, 32, 34, 36, 38]
console.log('here are those numbers but changed ! ' + array.map(mathStuff));

// new function
let result2 = array.map(function(x){
    return x * .25;
})

let x = array.map(mathStuff);

// new function in action, should return [.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5]
console.log("those numbers but changed a bit more : " + result2 );

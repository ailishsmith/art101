// index.js - Lab 13: Loops
// Author: ailish smith aibsmith@ucsc.edu
// Date: 5/23/25

// building a long string and inserting it once
function fizzBuzzBoom(){
    let output = "";
// Use a for loop to print all the numbers from 1 to 200. Test and debug.
for (let i=1; i<=200; i++) {
    let str = "";
    // Add an if statement: if the number is a multiple of 3, print “Fizz” instead of the number.
    if (i % 3 == 0)
      str += "fizz";
  // Add an else if condition: If the number is a multiple of 5, print “Buzz” instead of the number.
    if (i % 5 == 0)
      str += "buzz";
  // If the number is a multiple of 7, it should print "Boom!"
    if (i % 7 == 0)
      str += "boom";
  // Can you add an additional factor?
    if (i % 4 ==0)
      str += "bang";
  // If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom. For example, if the number is a multiple of 3 AND 5, it should print "FizzBuzz!" and so on.
//formatting tips from ChatGPT
    if (str === "") {
        output += `<div class="item">${i}</div>`;
    }else {
        output += `<div class="item fbText">${i} ${str}!</div>`;
    }
   }
  //Make it so the output of your program appears in your output div. 
    $("#output").html(output);
  }
// Don't forget to call your function.
$(document).ready(function() {
    fizzBuzzBoom();
});
// index.js - lab 7 : functions
// Author: ailish smith aibsmith@ucsc.edu
// Date: 05/01/25

// blockLinks to an external site.

// sortName: my function that takes user input and sorts the letters of their name. 
function sortName() {
    let userName = window.prompt("what's ur name? i bet ur wrong...");
    console.log("userName =", userName);
    // split string to array
    let nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    // sort the array
    let nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    // join array back to a string
    let nameSorted = nameArraySort.join('');
    console.log("namedSorted =", nameSorted);
    return nameSorted;
}

// output
document.writeln("yeah, u were wrong... here's ur real name: ", sortName(), "</br>");

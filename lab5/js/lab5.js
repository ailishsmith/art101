// index.js - lab5 
// Author: ailish smith aibsmith@ucsc.edu
// Date: 04/23/2025
 
//  blocklinks to an external site.
 
// Define Variables
  const carMake = "Mazda";
  const carModel = "Hatchback";
  const carColor = "Grey";
  const carYear = 2012;

// Ownership status
  let ownIt = false;

// calculate
  const currentYear = 2025;
  let carAge = currentYear - carYear;

// Variable outputs using document.writeln()
  document.writeln("Make: " + carMake + "<br>");
  document.writeln("Model: " + carModel + "<br>");
  document.writeln("Color: " + carColor + "<br>");
  document.writeln("Year: " + carYear + "<br>");
  document.writeln("Do I own it? " + ownIt + "<br>");
  document.writeln("Car Age: " + carAge + " years<br>");
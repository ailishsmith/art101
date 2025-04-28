// index.js - lab 6: arrays and objects
// Author: ailish smith aibsmith@ucsc.edu
// Date: 4/27/25

// blockLinks to an external site.

// my maid ride
  let myMainRide = {
    make: "Mazda",
    model: "hatchback",
    color: "grey",
    year: "2012",
    age: "13"
  }

  document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

    
// my transport
  let myTransport = ["the bus", "my girlfriend's car", "my roommate's car", "lyft"];

  document.writeln("Getting around: " + myTransport + "<br>");



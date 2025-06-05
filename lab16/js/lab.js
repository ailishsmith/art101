// index.js - Lab 16: JSON and APIs
// Author: ailish smith aibsmith@ucsc.edu
// Date: 6.05.25

// Use $.ajax() to retrieve data and store this object in a variable comicObj. 
const comicObj = {
    url: "https://xkcd.com/614/info.0.json",
    // data: ,
    type: "GET",
    dataType: "json"
};

// Within the success callback function, process the parts and add them to your webpage with the appropriate tags.
$("#button").click(function(){

    $.ajax(comicObj)
    .done(function(data){
        console.log(data);

        let title = data.title;
        let date = data.year;
        let desc = data.alt;
        let imageURL = data.img;

        $("#output").html(`<h2>${title}</h2>`);
        $("#output").append(`<img src= "${imageURL}" />`);
        $("#output").append(`<p class= "data">${date}</p>`);
        $("#output").append(`<p class= "data">${desc}</p>`);
    })
    // fail callback
    .fail(function(xhr, status, error){
        console.error("AJAX request failed:", status, error);
    });

});


// Give the section a title using the comicObj.title key from the object
// Create an image tag using the comicObj.img key from the object
// Give the image an alt and title attributes using the comicObj.alt key from the object




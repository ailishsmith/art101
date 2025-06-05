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
$.ajax({
    url: "https://api.allorigins.win/get?url=https://xkcd.com/info.0.json",
    type: "GET",
    dataType: "json",
    success: function (response) {
        const data = JSON.parse(response.contents); // this is the actual XKCD data
        console.log("Success!", data);
        let comicHTML = `
            <h3>${data.title}</h3>
            <img src="${data.img}" alt="${data.alt}" title="${data.alt}">
            <p>${data.alt}</p>
        `;
        $("#output").html(comicHTML);
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
        $("#output").html("<p>Could not load XKCD comic.</p>");
    }
 });
 


// Give the section a title using the comicObj.title key from the object
// Create an image tag using the comicObj.img key from the object
// Give the image an alt and title attributes using the comicObj.alt key from the object




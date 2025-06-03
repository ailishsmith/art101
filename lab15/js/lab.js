// index.js - lab 15
// Author: ailish smith aibsmith@ucsc.edu
// Date: 6/2/2025

// Add a click event to the button
// When a user clicks the button, use a jQuery AJAX call to fetch output from your API 
// Put the output of the AJAX call in the output div.
    // parse the JSON data structure like we did in lecture

// go to https://yesno.wtf/api
const ajaxObj = {
    url: "https://yesno.wtf/api",
    // data: {},
    type: "GET",
    dataType: "json"
}

// when a user clicks the button
$("#activate").click(function() {
    console.log("click!");

    // use a jQuery AJAX call to fetch output
    $.ajax(ajaxObj)
    // callback for success chained to ajax
    .done(function(data) {
        console.log("success!");
        console.log(data);

    // extract the data from data
    let answer = data.answer;
    // extract image from data
    let imageURL = data.image;
    let imageHTML = "<img src='" + imageURL + "'>";
    // insert the output in the output div
    $("#output").html("<h1>" + answer + "<h1>");
    $("#output").append(imageHTML);
    })

// callback for failure chained to ajax
    .fail(function(xhr, status, errorThrown) {
        console.log(errorThrown + "Status:" + status);
    });
})
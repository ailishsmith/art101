// index.js - Task 2: Create a JavaScript file
    // needs JQuery to run
// Author: ailish smith aibsmith@ucsc.edu
// Date: 5/20/25

// Create a function sortingHat()
    // that takes a string as an argument: function sortingHat(str)
    function sortingHat(string) {
        // counts the letters in str and assigns it to a variable length
        let length = string.length;
        // uses modulus (% operator) to get the remainder with 4: mod = length % 4;
        let mod = length % 4;
        // mod will now be a value between 0 and 3
        // create a conditional that will return one of four iconic houses depending on whether the value of mod is 0, 1, 2, or 3 (you can pick the lore you like, Tolkien, Games of Thrones, Star Wars, Dune, Avatar: The Last Airbender, Hogwarts, whatever).
        if (mod == 0) {
            return "congrats you're an air bender! airbenders are known for their freedom, peace, and spiritual nature, with a focus on balance and harmony. they are often peaceful and non-violent, valuing all life."
        } else if (mod == 1){
            return "congrats, you're an earth bender! earthbenders are generally stubborn, practical, and grounded, with a strong sense of responsibility and resilience. they are often described as strong, reliable, and determined."
        } else if (mod == 2) {
            return"congrats, you're a water bender! waterbenders are often seen as adaptable, calm, and compassionate, with a strong sense of community and empathy. they are also known for their adaptability and ability to flow with the situation."
        } else if (mod == 3) {
            return "congrats, you're a fire bender! firebenders are characterized by their passion, energy, and intensity, often displaying a drive and ambition to lead. they can be passionate, but also prone to anger and aggression."
        }

}


// Create an click listener attached to #button
$("#button").click(function(){
    // that gets the value of #input and assigns it to a variable name
    let name = $("#input").val();
    // runs sortingHat(name) and stores the result in a variable house
    let element = sortingHat(name);
    // appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
    $("#output").html("<p class='element' >" + element + "</p>");
});


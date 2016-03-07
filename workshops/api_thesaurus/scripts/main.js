console.log("...javascript {main.js} loaded...");


var THESAURUS_URL = "http://words.bighugelabs.com/api/2/fb07b071e2ebb35983a5131ce325af58/escape";

var result = null;
var msg_results = "<p class='msg'>the results will be placed here</p>";

function onClear() {
    $("#results").empty();
    $("#results").append(msg_results);
}

function onSubmit() {
    //get the word that the user entered
    var query = $('#query').val();

    console.log('you want to find words that are similar to: ' + query);

    //pass the user's entry to a function that will format it to submit to the server
    // the reason to do this is because of the next step where we call the
    // jQuery getJSON function.
    // See below for the explanation
 

       $.getJSON('http://words.bighugelabs.com/api/2/fb07b071e2ebb35983a5131ce325af58/' + query + '/json').done( onJSONSuccess );

}



function onJSONSuccess( returnedData ) {
    var i, obj, count = 20; // some variables that we will use in our loop of the results

    
    console.log("SUCCESS!!!")
    console.log( "got: " + returnedData.length + " results back");
    
    //I just save the returned data to this variable so that I can interact with it on the console
    // whilst testing
    result = returnedData;

    // Now we just need to display the results. For that I am going to create HTML elements using jQuery
    // and attach them to the <div id='results'></div> in the html page
    // See:
    // http://www.w3schools.com/jquery/jquery_dom_add.asp    


    // Here is a longer traditional way to iterate through 20 results
    for(i=0; i < count; i++ ) {
        obj = returnedData[i];
        //I am going to assign a class variable depending on the score of the result        
    

        //Now add the element that we just created to the end of the result div
        $("#results").append( returnedData.length );

    }
}
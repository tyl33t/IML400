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
    var myRequest = formatQuery(query);

       $.getJSON('http://words/bighugelabs.com/api/2/fb07b071e2ebb35983a5131ce325af58/' + query);

}



function formatQuery( aQueryString ) {

    //If you read the documentation for the getJSON method:
    //  http://api.jquery.com/jquery.getjson/
    //
    //  See the examples at the bottom of the page
    //  Essentially, what you have to do is construct an object that has
    //  the parameter names and values that the API service requires.
    //  What does this mean in this example?
    //
    //  Well, the rhymebrain API requires a function parameter and word
    //  parameter. 
    //
    // So what I do is create an object that has properites with the EXACT NAME
    // of the parameters that the API needs AND that has the values
    // that I want to send to the server.  In this case those values are
    // function = getRhymes
    // word = <whatever the user entered that we passed to this function
  
    var request = { "function": "getJSON"};    

    //the encodeURIComponent function will simply substitute URL escape codes into the string
    // For instance if the user typed any spaces they will be substituted
    // with the string '%20'
    //
    // Note that this also adds the a 'word' property to our request object
    request.word = encodeURIComponent(aQueryString);

    console.log('going to make the following request:');    
    console.log(request);
    return request;
}


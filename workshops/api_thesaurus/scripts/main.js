console.log("...javascript {main.js} loaded...");

var result = null;
var msg_results = "<p class='msg'>the results will be placed here</p>";
var base_URL = "https://words.bighugelabs.com/api/2/fb07b071e2ebb35983a5131ce325af58/"


function onClear() {
    $("#results").empty();
    $("#results").append(msg_results);
    console.log("cleared results")
}

function onSubmit() {
    //get the word that the user entered
    var query = $('#query').val();

    console.log('you want to find words that are similar to: ' + query);

    //pass the user's entry to a function that will format it to submit to the server
    // the reason to do this is because of the next step where we call the
    // jQuery getJSON function.
    // See below for the explanation
    var URL = 'https://words.bighugelabs.com/api/2/fb07b071e2ebb35983a5131ce325af58/' + query + '/json'
    console.log( URL )
    var result = $.getJSON('https://words.bighugelabs.com/api/2/fb07b071e2ebb35983a5131ce325af58/' + query + '/json').done( onJSONSuccess );

    console.log( result );

}

function formatQuery( aQueryString ) {
  var request = { "var": "result" }

    console.log('going to make the following request:')
    console.log(request);
    return request;
}

function onJSONSuccess( returnedData ) {
     // some variables that we will use in our loop of the results

    console.log("SUCCESS!!!")
    console.log( "got some results back")

    result = returnedData

    console.log( result.noun.syn )
        //I am going to assign a class variable depending on the score of the result        
    

        //Now add the element that we just created to the end of the result div
        $("#results").append( "<h3>Nouns</h3>" )
        $("#results").append( "<br>" )
        $("#results").append( result.noun.syn[0] )
        $("#results").append( "<br>" )
        $("#results").append( result.noun.syn[1] )
        $("#results").append( "<br>" )
        $("#results").append( result.noun.syn[2] )
        $("#results").append( "<br>" )
        $("#results").append( result.noun.syn[3] )
        $("#results").append( "<br>" )
        $("#results").append( result.noun.syn[4] )
        $("#results").append( "<br>" )
        $("#results").append( "<br>" )
        $("#results").append( "<h3>Verbs</h3>" )
        $("#results").append( "<br>" )
        $("#results").append( result.verb.syn[0] )
        $("#results").append( "<br>" )
        $("#results").append( result.verb.syn[1] )
        $("#results").append( "<br>" )
        $("#results").append( result.verb.syn[2] )
        $("#results").append( "<br>" )
        $("#results").append( result.verb.syn[3] )
        $("#results").append( "<br>" )
        $("#results").append( result.verb.syn[4] );

    }

function onJSONFail( error ) {
    console.log("there was a problem: " );
    console.log(error);
}

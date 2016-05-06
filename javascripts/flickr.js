    console.log('YOOOOOOO!')
    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        console.log('Query variable %s not found', variable);
    }
    console.log('your variable was: ' + getQueryVariable('test') )
    console.log('this is my url: ' + window.location)






console.log("...flickr example...");



// This is the base URL for the rhymebrain api
// See this page:
// http://rhymebrain.com/api.html 
// and this example from that page:
// http://rhymebrain.com/talk?function=getRhymes&word=hello


//CONFIG DATA
var RHYMEBRAIN_URL = "https://api.flickr.com/services/rest/";
var my_api_key = "db6a35c795bb709c46c7e9e6be4254f2";
// var spotify_URL_BASE = "http ....... " + artistId + " rest of spotify shit"


// ONLY NEEDED FOR DEBUG
var result = null;
//----

var msg_results = "<p class='msg'>the results will be placed here</p>";


/**
 button handlers

 these functions get called when the buttons get clicked

*/


//Clear the results 
function onClear() {
    $("#results").empty();
    $("#results").append(msg_results);
}


//Kick off the logic to get the user's entry, format it, submit it to the API
// get the results, parse the results and display the results, phew...
function onSubmit() {
    //get the word that the user entered
//     var query = $('#query').val();

//     console.log('you want to find words that rhyme with: ' + query);

    //pass the user's entry to a function that will format it to submit to the server
    // the reason to do this is because of the next step where we call the
    // jQuery getJSON function.
    // See below for the explanation
//     var myRequest = formatQuery(query);
    var myRequest = formatQuery();


    //submit the request to the service
    // This is a jQuery function that will make a web request to a url that returns
    // JSON data. You can read how the function works at 
    //  http://api.jquery.com/jquery.getjson/
    //
    //  Summarizing the documentation
    //  the function takes these parameters:
    //      1) URL - for us that is stored in RHYMEBRAIN_URL
    //      2) An object that has parameters and values. In our case the object will be:
    //                  { "function" : "getRhymes",
    //                    "word" : "whatever the user entered "}
    //        What jquery will do is convert this object to:
    //                  "?function=getRhymes&word=whatever the user entered"
    //        this query parameter string will be tacked onto the URL and sent to the website
    //   
    //      The data from the website will be passed to whatever function name you put into done()    
    //      If there is a problem then whatever function you put into fail will be called

    $.getJSON( RHYMEBRAIN_URL, myRequest).done( onJSONSuccess ).fail( onJSONFail );

}


/* 
    This function uses the information from the rhymebrain api:
    http://rhymebrain.com/api.html

    Note the request parameters for the Rhyming example:
    http://rhymebrain.com/talk?function=getRhymes&word=hello

    -- you have to sepcify a query parameter 'function' and 'word'
    this function does that
*/

function formatQuery( ) {

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
  
//     var request = { "function": "getRhymes"};    
    var request = { "method" : "flickr.photos.search",
                    "api_key" : my_api_key,
                    "tags" : getQueryVariable('test'),
                    "format" : "json",
                    "nojsoncallback" : 1 }
//     the encodeURIComponent function will simply substitute URL escape codes into the string
//     For instance if the user typed any spaces they will be substituted
//     with the string '%20'
    
//     Note that this also adds the a 'word' property to our request object
//     request.word = encodeURIComponent(aQueryString);

    console.log('i am going to make the following request:');    
    console.log(request);
    return request;
}


/*
 * this function will get called automatically 
 * if the call to the service is successful
 * the data from the service will be passed back as
 * an argument
 */
function onJSONSuccess( returnedData ) {
    var i, obj, count = 100; // some variables that we will use in our loop of the results
//     result.photos.photo

    var photoData = returnedData.photos.photo;
    var numOfPhotos = photoData.length;

    console.log("I got " + numOfPhotos + " photos back ");

    //if we have less than 20 hits then update count to 
    // be the number of data elements
    // this makes sure that we don't go over the number of results
    // that were returned
    if( numOfPhotos < 100 ) {
        count = numOfPhotos.length;
    }
    
    console.log("SUCCESS!!!")    
    
    //I just save the returned data to this variable so that I can interact with it on the console
    // whilst testing
    result = returnedData;

    // Now we just need to display the results. For that I am going to create HTML elements using jQuery
    // and attach them to the <div id='results'></div> in the html page
    // See:
    // http://www.w3schools.com/jquery/jquery_dom_add.asp    


    // Here is a longer traditional way to iterate through 20 results
    for(i=0; i < count; i++ ) {
        photo = photoData[i];
        var flickrImgUrl = formatUrl(photo); 

        $aResult = $("<div class='photo'>" + flickrImgUrl+ "</div>");

        //Now add the element that we just created to the end of the result div
        $("#results").append($aResult);
    }
    // I am going to use javascript Array functions to do this because it is easier
    // You can find the reference for those here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



//     returnedData.forEach()
    
}

var arr = []

//take the flickr api documentation of how to create images from the photo data and build the URL for
//the image
function formatUrl( photoData ) {
// this is the format accroding to this site:
// https://www.flickr.com/services/api/misc.urls.html
//
// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
   var result = "https://farm" + photoData.farm
                         + ".staticflickr.com/" 
                         + photoData.server + "/" 
                         + photoData.id+"_"
                         + photoData.secret
                         + ".jpg";

   arr.push(result);
    
   return "https://farm" + photoData.farm
                         + ".staticflickr.com/" 
                         + photoData.server + "/" 
                         + photoData.id+"_"
                         + photoData.secret
                         + ".jpg";

  
}


function onJSONFail( error ) {
    console.log("there was a problem: " );
    console.log(error);
}

console.log("..window loading..")

window.onload = onSubmit;


/*

var $divResult = $("<div><h3>"+ testResult.word + "</h3><span class='score'>" + testResult.score + " </span><span class='frequency'>" + testResult.freq + "</span>")

$('body').append($divResult)
*/


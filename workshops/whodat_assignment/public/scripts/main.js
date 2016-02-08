/* ----- */
// Replace YOUR NAME with yours

var NAME = "TY LEET";
console.log( "/*****************/\n" + NAME +"'s submission \nfor Whodat Assignment" + "\n/*****************/\n");



/*
 * CHALLENGES
 *
 * Complete as many of the following challenges 
 * that you can. Simply put your code where indicated
 * and when you have completed a challenge
 * the delete the not in the 'not completed' message
 * if you try and don't get it then change the log message to 
 * something else. (e.g. 'attempted', 'attempted but javascript stinks', 
 * 'attempted but the instructor stinks', ...)
 */




/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch1											*/	
/*	Change the color of the wings on  			*/	
/*	1st owl to a different color				*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 1...');

//paste your code here...and delete
function colorStyle( elem, car) { 
console.log('..styling color of elem = ' + elem);
var myNewColorString = "background-color:" + car + ";";
elem.setAttribute("style",myNewColorString);
}

wing_R = document.getElementsByClassName( "wing_R" )[0]
colorStyle( wing_R, "red")

wing_L = document.getElementsByClassName( "wing_L" )[0]
colorStyle( wing_L, "red")
console.log('\tcompleted')

/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch2											*/	
/*	Change the background color of the cage  	*/	
/*	on the 1st row at the end					*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 2...');

cage_3 = document.getElementsByClassName("cage column-4")[2]

colorStyle( cage_3, "black")

console.log('\tcompleted')
//paste your code here...




/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch3											*/	
/*	Change the length of the beak for the owl	*/	
/*	at the end of the second row				*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/

/** 		HINT		 **/
// to change the length of the beak you need to change
// the pixel value of:
// border-top
// e.g.
// changing:
// border-top: 60px solid goldenrod;
// to
// border-top: 120px solid goldenrod;
// would double the length of the beak.
/** ---		----	---	 **/

console.log('...challenge 3...');
console.log('\tattempted')
//paste your code here...
function changeLength( elem, pixel) { 
console.log('..styling beakLength of elem = ' + elem);
var myNewBeakLength = "border-top:" + pixel + ";";
elem.setAttribute("style",myNewBeakLength);
}

beak_6 = document.getElementsByClassName("beak")[5]

changeLength( beak_6, "100px")

/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch4											*/	
/*	Write a function that takes a number		*/	
/*  and returns the cage on the page that 		*/
/* 	corresponds to that number 					*/
/* 		e.g. calling 							*/
/*				getCage(0)						*/
/*		would return <section class="cage" ...	*/
/*					 </section>					*/
/*												*/					
/*				html Tag for the first cage     */					
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 4...');
console.log('\tcompleted')
function getCage(cageNumber) {

	var selectedCage = document.getElementsByClassName("cage")[cageNumber]

	return selectedCage;
}




/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch5											*/	
/*	Change the colors of the cages and owls		*/	
/*	in the middle column to be the same			*/
/*												*/	
/*												*/	
/*  HINTkey: "value", 							*/
/*  If you got Ch4 then you should be able to 	*/
/* 	you should be able to use that function to 	*/
/*	assist you 									*/
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 5...');
console.log('\tcompleted')
//paste your code here...
function getCage(cageNumber) {
	var selectedCage = document.getElementsByClassName("cage")[cageNumber]
	return selectedCage;
}
colorStyle(getCage("1"), "red")
colorStyle(getCage("4"), "red")

function getBody(BodyNumber) {
	var selectedBody = document.getElementsByClassName("body prpl-d4")[BodyNumber]
	return selectedBody;
}
colorStyle(getBody("1"), "yellow")
colorStyle(getBody("4"), "yellow")

/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
/*  Ch6											*/	
/*	Write functions that take an owl element	*/	
/* 	as an argument and return the html sections */
/*	of different body parts						*/
/*												*/	
/*	see functions below for hints				*/	
/*												*/	
/* -=-=-=-			=-=-=-=-=			-=-=-= 	*/
console.log('...challenge 6...');
console.log('\tcompleted')
//paste your code here...
function getWings(anOwl) {
	var wing1 = document.getElementsByClassName("wing_L")[anOwl]
	var wing2 = document.getElementsByClassName("wing_R")[anOwl]
	return [wing1, wing2];
}

function getBeak(anOwl) {
	var beak1 = document.getElementsByClassName("beak")[anOwl]
	return beak1;
}

function getEyes(anOwl) {
	var eye1 = document.getElementsByClassName("eye_L")[anOwl]
	var eye2 = document.getElementsByClassName("eye_R")[anOwl]
	return [eye1, eye2];
}

function getBody(anOwl) {
	var selectedBody = document.getElementsByClassName("body prpl-d4")[anOwl]
	return selectedBody;
}

function getPupils(anOwl) {
	var pupil1 = document.getElementsByClassName("pupil")[anOwl*2]
	var pupil2 = document.getElementsByClassName("pupil")[anOwl*2+1]
	return [pupil1, pupil2];
}



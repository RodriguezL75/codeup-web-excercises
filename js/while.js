"use strict";

var i = 1;

while (i < 65536) {
    i = i * 2;
    console.log(i);
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

do {
    console.log('Start of the day i have ' + allCones ' left');
    var conesToSell = Math.floor(Math.random() * 5) + 1;
    // sell

    if(conesToSell <= allCones) {
        console.log('I sold ' + conesToSell);
        allCones = allCones - conesToSell;
    }else if ( allCones === 0) {
        console.log("I can go home");
    }else{
        console.log("I don't have " +conesToSell+" cones to sell");
    }



} while( allCones !== 0);







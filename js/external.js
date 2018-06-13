"use strict";

console.log("Hello from external JavaScript.");

alert("Welcome to my Website!");

console.log('The user entered: ' + userInput);
 var userInput = prompt("What is your favorite color?");
 alert('Great, ' + userInput + ' is my favorite color too!');


//Cost of movies rented
var userInput1 = prompt("How many movies did you watch this weekend?");
console.log('The user entered: ' + userInput1);

var userInput2 = prompt("How many days total did you rent the movies?");
console.log('The user entered: ' + userInput2);

// alert('Wow, you spent ' + userInput1 * userInput2 + ' dollars on movies this weekend');
alert("your total rental cost is $" + (userInput1 * userInput2).toFixed(2));
console.log('total spent: ' + userInput1 * userInput2);


//Contractor exercise
var google = 400;
var amazon = 380;
var facebook = 350;


var userinput1 = prompt('How many hours did you work at google?');
console.log('The google hours worked: ' + userinput1);

var userinput2 = prompt('How many hours did you work at amazon?');
console.log('The amazon hours worked: ' + userinput2);

var userinput3 = prompt('How many hours did you work at facebook?');
console.log('The facebook hours worked: ' + userinput3);

// alert('Wow, you earned ' + userinput1 * google);


alert('Wow, you earned ' + ((userinput1 * google) + (userinput2 * amazon) + (userinput3 * facebook)));
console.log('total income worked for the week: ' + ((userinput1 * google) + (userinput2 * amazon) + (userinput3 * facebook)));



// Class schedule
var a = true;
var b = false;

var response = prompt('Do you want to take a morning class? True or False');
console.log(response);

console.log(a);
console.log(b);
var response = "";
while (response ==="") {
    response = prompt("True or False");
}

//Product offer

alert("Welcome! We have several offers available today!");
var userInput1 = prompt("Are you a premium member? True or False");
console.log('The user entered: ' + userInput1);
if (true) {greeting = "additional discount will be applied at checkout";
}
else {
    greeting = "Please proceed to checkout";
}













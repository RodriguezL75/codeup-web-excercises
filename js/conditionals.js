"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

if (confirm("Do you want to enter a number?")) { //combing if statement w/ prompt so it can be applied to the if statement immediately.

    var number = prompt("Please enter a number");//defining the number w/ variable so the number becomes whatever the input is whatever the user inputs.
    if (!isNaN(number)) {//!isNan is evaluating if the number inputted is really a number.
        if (number % 2 === 0) {
            alert('number is even');
            alert((parseInt(number) + 100));//parseInt evaluates for integers--it investigates for true numbers.
        }
        else {
            alert('number is odd');
            alert((parseInt(number) + 100));
        }
        if (number >=0) {
            alert('number is positive');
        }
        else {
            alert('number is negative');
        }

    }else {
        alert("please enter a valid number");
    }

}else {
        alert("Goodbye");
    }


function numbersGame (number){
    if (confirm("Do you want to enter a number?")) {

        var number = prompt("Please enter a number");
        if (!isNaN(number)) {
            if (number % 2 === 0) {
                alert('number is even');
                alert((parseInt(number) + 100));
            }
            else {
                alert('number is odd');
                alert((parseInt(number) + 100));
            }
            if (number >=0) {
                alert('number is positive');
            }
            else {
                alert('number is negative');
            }

        }else {
            alert("please enter a valid number");
        }

    }else {
        alert("Goodbye");
    }

}

numbersGame();




/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(colors) {


    if (colors === 'red') {
        return colors + " is the color of strawberries.";
        console.log(analyzeColor("Red"));
    } if (colors === 'orange'){
        console.log("Oranges are orange");
    } if (colors === 'yellow'){
        console.log("Bananas are yellow");
    } if (colors === 'green') {
        console.log("Avacados are green");
    } if (colors === 'blue') {
        console.log("The sky is blue");
    } if (colors === 'indigo') {
        console.log("Who cares about indigo");
    } if (colors === 'violet') {
        console.log("Violet is violet");
    } else {
        console.log("This isn't a valid color");
    }



}
analyzeColor(randomColor);











/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement*/

function analyzeColor(color) {
    var result;
}
    switch(colors) {
        case "blue":
            return colors + " is the color fo the sky";
            break;
        case "red";
            return " Strawberries are " + colors;
            break;
        default:
            return colors + " not a valid color";
    }

     return result;
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var usersColor = prompt("Give me a color");
var res = analyzeColor(usersColor);
alert(res);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, total){
    var discountedPrice = 0;

    switch (luckyNumber){
        case 0:
            discountedPrice = total;
            break;
        case 1:
            discountedPrice = total * (0.90);
            break;
        case 2:
            discountedPrice = total * (0.75);
            break;
        case 3:
            discountedPrice = total * (0.65);
            break;
        case 4:
            discountedPrice = total * (0.5);
            break;
        case 5:
            discountedPrice = 0;
            break;
        default:
            discountedPrice = "Invalid lucky number";

    }
    return discountedPrice;
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

console.log(luckyNumber);
console.log(calculateTotal(luckyNumber, 100));
luckyNumber = Math.floor(Math.random() * 6);
console.log(luckyNumber);
console.log(calculateTotal(luckyNumber, 200));


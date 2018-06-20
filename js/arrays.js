"use strict";

var sanAntonio = "San Antonio";
var austin = "Austin";
var dallas = "Dallas";
var houston = "Houston";
var texasCities = [sanAntonio, austin, dallas, houston];

for (var i=0; i < texasCities.length; i++) {
    console.log(texasCities[i]);
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var slice = colors.slice(2, 4);

console.log(colors); // colors is unchanged
// ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

console.log(slice); // ['yellow', 'green']

slice = colors.slice(3);
console.log(slice); // ['green', 'blue', 'indigo', 'violet']

//create a function that takes in an array of pies baked and console.logs the 3 most recently baked pies.

function baked(arr) {
    arr.slice(arr.length - 3);
    console.log(pieSlice);
}

baked(pies);


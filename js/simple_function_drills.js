"use strict";

// function returnTwo(){
//     return 2;
// }
// console.log(returnTwo());
//
//
//
// function returnName(Lisa){
//     return Lisa;
// }
// returnName("Lisa");
// console.log(returnName("Lisa"));
//
//
//
// function addThree(number){
//     return (number) + 3;
// }
// console.log(addThree(5));
//
//
//
// function sayString(string){
//     return string;
// }
// sayString("Hello");
// console.log(sayString("Hello"));
//
//
//
// function sayHowdy(){
//     return "Howdy";
// }
// console.log(sayHowdy());
//
//
//
// function identity(input){
//     return input;
// }
// identity("input");
// console.log(identity("input"));
//
//
//
// function getRandomNumber(min, max){
//     return min + max;
// }

for (var i = 0; i <= 50; i+=5) {
    console.log(i);
}

var input = prompt("Give me a number");

for(var i = 1; i <= 10; i+=1 ){
    console.log(input + " x " + i + " = " + (input * i));
}


document.getElementById("playbutton").addEventListener("click", function (){
    var input = document.getElementById("play input").value;
    document.getElementById("playOutput").innerText = input;
    // console.log("Play!");
    console.log(input);
}


$(function (){
    $("#playButton").click(function(){
        $("#playOutput").text($("#playInput").val());
        $("h1").toggle(1000);
    })
})


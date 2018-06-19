"use strict";

function returnTwo(){
    return 2;
}
console.log(returnTwo());



function returnName(Lisa){
    return Lisa;
}
returnName("Lisa");
console.log(returnName("Lisa"));



function addThree(number){
    return (number) + 3;
}
console.log(addThree(5));



function sayString(string){
    return string;
}
sayString("Hello");
console.log(sayString("Hello"));



function sayHowdy(){
    return "Howdy";
}
console.log(sayHowdy());



function identity(input){
    return input;
}
identity("input");
console.log(identity("input"));



function getRandomNumber(min, max){
    return min + max;
}
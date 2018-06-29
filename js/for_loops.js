"use strict";



var input = prompt("Give me a number");

for(var i = 1; i <= 10; i+=1 ){
    console.log(input + " x " + i + " = " + (input * i));
}



for (var i = 0; i < 10; i++) {
    var random = Math.floor((Math.random()*200)+20);
    console.log('Loop counter is: ' + i);
    if (random % 2 === 0) {
        console.log(random + " is even");
    } else {
        console.log(random + " is odd");
    }
}





for (var i = 1; i <=9; i++){
    var output = i;
    for (var counter = 1; counter <=i; counter++) {
        output<<i;

        console.log(output);
    }

}

for (var i = 1; i <=9; i += 1) {
    var output = "";
    for(var i = 1; j <= i; j += 1) {
        output += i;
        console.log(output);
    }
}


for (var i = 1; i <=9; i += 1) {

    var output = i + "";
    console.log(output.repeat(i));
}



for (var i = 100; i >= 5; i = i - 5) {
    console.log(i);
}


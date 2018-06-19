"use strict";

while(true) {
    var userNum = prompt("Pick an odd number between 1 and 50");

    if (userNum % 2 !== 0 && userNum <= 50 && userNum >= 1) {
        break;
    }
}

console.log(userNum);






console.log("Number to skip is: " + userNum);

for (var i = 1; i <= 50; i += 1) {
    if (i % 2 === 0) {
        continue;
    }
    if (i !== parseInt(userNum)) {
        console.log("Here is an odd number:" + i);
        continue;
    } else {
        console.log("Yikes! skipping the number" + userNum);
        continue;
    }
    if (i % 2 === 0){
    continue;
    }

}



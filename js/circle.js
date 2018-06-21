(function() {
    "use strict";

    // create a circle object
    var circle = {//method
        radius: 3,

        getArea: function () {//property
            var area = Math.PI * this.radius * 2;//access method by this.radius

            return area;


            // TODO: complete this method
            // hint: area = pi * radius^2

            return; // TODO: return the proper value
        },

        logInfo: function (doRounding) {//property
            var area = this.getArea();

            if (doRounding === true) {
                console.log(area)//area rounded);
            } else {
                console.log(area)// area not rounded);
            }

            // if(doRounding) {
            //     var result = Math.round(this.getArea());
            // }
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            var area = (doRounding) ? Math.round(this.getArea()) : this.getArea();
            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

        console.log(circle.getArea());

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();



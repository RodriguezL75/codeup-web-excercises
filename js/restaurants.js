"use strict";

var restaurants = [
    {name:"Panchitos", city:"San Antonio", state:"TX", category:"Mexican",stars:4},
    {name:"Grist Mill", city:"New Braunfels", state:"TX", category:"American",stars:4},
    {name:"Fish City Grill", city:"San Antonio", state:"TX", category:"Seafood", stars:4}
    ];
    console.log(restaurants);


    restaurants.forEach(function (rating) {
    if (rating.stars > 3) {
        console.log(rating.name + " is a " + rating.category + " restaurant in " + rating.city + "  " + rating.state + ". I would give " + rating.name + " a " + rating.stars + " rating." )
    }


});



// var Grist_Mill = ["New_Braunfels", "TX", "American", "4.5-stars"];
//
//     var removedItem = Grist_Mill.pop();
//     console.log(removedItem);
//
//     var addItem = Grist_Mill.push("5-stars");
//     console.log(addItem);
//     console.log(Grist_Mill);


"use strict"
$(document).ready(function() {

    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];
    //iterate through the array solution Justin
    // function buildList(arrObjs) {
    //     var output = "";
    //     output += "<ul>";
    //     arrObjs.forEach(function (person) {
    //         output +="<li style='color:" + person.favColor + "'>" + person.name + "</li>;
    //     });
    //     return output;
    // }
    //
    // $('#add-names-btn').click(function() {
    //     $('#names-list').html(buildList(people));
    //  });
    //
    // $(document).ready(function() {
    //     "use strict";
    //
    //     var people = [
    //         {
    //             name: "Fred",
    //             favColor: "red"
    //         },
    //         {
    //             name: "Sally",
    //             favColor: "blue"
    //         },
    //         {
    //             name: "Tom",
    //             favColor: "yellow"
    //         }
    //     ];
    //
    //     function buildList(arrObjs) {
    //         var output = "";
    //         output += "<ul>";
    //         arrObjs.forEach(function(person) {
    //             output += "<li style='color:"+ person.favColor + "'>" + person.name + "</li>";
    //         });
    //         output += "</ul>";
    //         return output;
    //     }
    //
    //     $('#add-names-btn').click(function() {
    //         $('#names-list').html(buildList(people));
    //     });
    //
    // });





    $("#listButton").click(function () {
            $("ul").toggle();
        }
    )

















});
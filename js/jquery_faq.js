
"use strict";




// $(function(){
//     $("#details").click(function () {
//         $("dd").toggleClass("invisible");
//
//     });



$(document).ready(function () {
    $("#toggleHideS").click(function () {
            $("dd").toggle();
        }
    )

    $("span").click(function(){
        $("#newsletter").hide();

    });

    $("h3").click(function () {
        $("ul").slideToggle();

    })

    $("h2").click(function(){
        $("#register").delay("fast").fadeOut();
    })


    setTimeout(function () {
          $("#register").fadeIn();
    }, 8000);

    $("#listButtonHighlight").on("click", function () {
        $("ul").each(function () {
            $(this).children().last().toggleClass("highlight");
        })
    });


    $("li").on("click", function () {
        $(this).parent().children().first().css({
            color: "blue"
        })
    });

    $("h3").on("click", function () {
        $(this).next().css("fontWeight", "bold");

    });




});

// $("li").last().addClass("highlight");

//
// $("ul").each(function(index, element) {
//     $(element).children().last().css("background", "yellow");
// });









// $("dd").click(function () {
//     $(this).next().toggleClass("cursive");
//
// })

// $('li').css('background-color', 'yellow');



// $("h3").css("color", "red");

// $("h3").click(function(){
//     $(this).next().children().css({
//         fontWeight:"bold"
// });
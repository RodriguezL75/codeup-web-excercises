"use strict"

// window.onload = function() {
//     alert( "The page has finished loading!");
// }
//
// $(document).ready(function() {
//     alert("The DOM has finished loading!");
//
// })

$(function () {
//     $("#playButton").click(function(){
//         $("#playOutput").text($("#playInput").val());
//         $("h1").toggle(1000);
//     })
//
//     $(".importante").on("mouseover", function () {
//         $(this).css("background-color", "yellow");
//     })
//
//     $(".importante").on("mouseout", function () {
//         $(this).css("background-color", "white");
//     })
//
//     alert($("#canyon").text());//alerting dog
//
//     $("#double").click(function()) {
//         alert($(this).text());
//     })
    $(".codeup").css("color", "red");
    $("p").css("width", "700px");
    $(".codeup").css("border", "1px solid red");
    $("li").css("border", "1px solid red");

    $("li").css("font-size", "20px").css("font-family", "cursive");
    $("p, li, h1").css("background-color", "salmon");
    $("*").css("background-color", "papayawhip");
    // if you want to make the whole background one color use *
    $("h1").css("background-color", "papayawhip");



    // consolelog by javascript MOuseOver:
//     document.getElementById('container').addEventListener('click', function(){
//     console.log('Clicked!');
// })



    // Callback function in javascript instead of anomous
    // define function:
    // function logClicked() {
    //     console.log("Clicked");
    // }
    // document.getElementById("container").addEventListener("click, logClicked");


    //


//    does the samething w/ Jquery: need to target container

    // $("#container").click(function(){
    //     console.log("Clicked");
    // });
    //
    // //or
    //
    // $("#container").click(logClicked);


//    double click and using this; changing background color--create a jquery object & use $this
//     $('li').dblclick(function(){
        // $(this).css('background', yellow);
        // //want to target li change:
        // $('li').css('background', yellow);

        // console.log("it work?"); check if it works
        // console.log("this"); each item in the list is highlighted as it is clicked on.

    // function changeToYellow(){
    //     $(this).css('background', 'yellow');
    //     $('li').dblclick('background', 'yellow');
    // }
    //


    //hover adding a border radius-circle-box--need two functions--try using li instead of this to see what you get.  don't use an element of body it's annoying

    $("li").hover(function(){
        $(this).css('border-radius', '100px');
    }, function() {
        $(this).css('border-radius', '0');
    });

    //change background color


    $('#main-header').click(function() {
      // console.log('click on main header'): check if click event is working
    $('#main-header').css('background-color', 'cyan');
    });

    $('p').dblclick(function (){
        $(this).css('font-size', '18px');
    //    this can find item individually

    $('#name').keyup(function(event) {
        console.log(event.key);
    //check if someone keys f
    if(event.key === 'f'){
        alert('that\s how my name starts!')
    }

    //remove the event from the input
        $('btn-input').click(function (){
            $('#name').off();
        });


    })

    })


//    Two Functions


});

function average (arr) {
    var sum = 0;
    for (i = 0; i < arr.length ; i ++;)
     +=


    //while loop
    function average(nums) {
        var sum = 0;
        var i = 0;
        while (i < nums.length) {
            sum += nums[i];
            i++;
        }
        return sum / nums.length;




    }
    var = 0;
    while (i<arr.length) {
    sum+=arr[i];
    i++;
    }
    return sum / arr.length;
}








function (arr) average{
    for var i = 0; i < arr.length; i ++;

}

















































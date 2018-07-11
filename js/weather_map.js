

$(document).ready(function() {

    "use strict";



    var jqXhr = $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: "f98656e2bd3f9ce0c87bd0f4cc8c1b6c",
        q: "San Antonio, US",
        units: "imperial"
    });

    jqXhr.done(function (data) {

        function currentWeather(currentDay) {
            console.log(currentDay);
            // console.log(currentDay.weather[0].icon);
            $('#wIcon').html("<img src=http://openweathermap.org/img/w/" + currentDay.list[0].weather[0].icon +".png>");
            var html = "";


            html += '<h3>'+ currentDay.city.name + '</h3>';
            html += '<ul class="weather-list">';
            html += '<li class="weather-list cur-temperature">temp: ' + currentDay.list[0].main.temp + '</li>';
            html += '<li class="weather-list cur-humidity">humidity: ' + currentDay.list[0].main.humidity + '</li>';
            html += '<li class="weather-list cur-pressure">pressure: ' + currentDay.list[0].main.pressure + '</li>';
            html += '<li class="weather-list cur-pressure">wind: ' + currentDay.list[0].wind.speed + '</li>';
            html += '</ul>';


            $('.weather').html(html);

        }

    currentWeather(data);
        // console.log(data.list[8].main.humidity);
        // console.log(data.list[8].main.temp_max);
        // console.log(data.list[8].wind.speed);
        // console.log(data.list[8].main.pressure);
        // return (data.list[8]);

        // for (var i = 0; i <= data.list.length; i += 8) {
            // console.log(data.list[i]);
        // }
    });



//need a function to name current weather
});

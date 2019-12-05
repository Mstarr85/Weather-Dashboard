$(document).ready(function () {

    $('#searchIcon').click(function () {
        var city = $("#searchBox").val();
        if (city != '') {
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=da12e8ecaaceb8ebcb577b83a0946cb7",
                type: "GET",
                dataType: "jsonp",
                success: function (data) {
                    var widget = show(data);
                    $("#showResults").html(widget);
                    // console.log(data);
                    $("#searchBox").val('');
                }
            });
        }
    });
});
function show(data) {
    return "<h3 style='font-size:40px; font-weight: bold;' class='text-center'> Current Weather for " + data.name + ", " + data.sys.country + data.dt + "</h3>" +
        "<h5><strong>Weather</strong>: " + data.weather[0].main + "</h5>" +
        "<h5><strong>Description</strong>: <img src='http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png'> " + data.weather[0].description + "</h5>" +
        "<h5><strong>Temperature</strong>: " + data.main.temp + "&deg;F</h5>" +
        "<h5><strong>Humidity</strong>: " + data.main.humidity + "%</h5>";
}



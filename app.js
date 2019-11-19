var apiKey = "fc2cef4d05e5acca0565daf50456a1af";
var query = `?q=lund&units=metric&APPID=${apiKey}`;
var url = `http://api.openweathermap.org/data/2.5/weather${query}`;


// Test of plain JavaScript
function getWeatherJavaScript() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var weatherData = JSON.parse(this.responseText);
            document.getElementById("test-js").innerHTML = weatherData.main.temp;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

    console.log(typeof document);
}

document.getElementById("get-weather-js").onclick = getWeatherJavaScript;


// Test of JavaScript with jQuery
function getWeatherJQuery() {
    $.getJSON(url, function(response) {
        $("#test-jq").html(response.main.temp);
    });
}

$("#get-weather-jq").click(getWeatherJQuery);

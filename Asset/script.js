//start with document ready
var ctx = $("#myChart");
$(function () {
  let apiURL =
    "https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=SGD&to_symbol=USD&apikey=RV76S9OYG1OF0XEU";
  let apiKey = "ZCD6PLAXN5830VI9";

  $.ajax({
    url: apiURL,
    // data: {function:"FX_DAILY","from_symbol":"SGD","to_symbol":"USD",
    // apiKey:apiKey},
    contentType: "application/json; charset=utf-8",
  }); //end ajax call
});

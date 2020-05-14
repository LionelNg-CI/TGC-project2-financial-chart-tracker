//start with document ready
var ctx = $("#myChart");
$(function () {
  let apiURL =
    "https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=SGD&to_symbol=USD&apikey=ZCD6PLAXN5830VI9";
  let apiKey = "ZCD6PLAXN5830VI9";

  $.ajax({
    url: apiURL,
    // data: {function:"FX_DAILY","from_symbol":"SGD","to_symbol":"USD",
    // apiKey:apiKey},
    contentType: "application/json; charset=utf-8",
  }); //end ajax call
});

$("button").click(function(){

  $.ajax({
url: "https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=SGD&to_symbol=USD&apikey=ZCD6PLAXN5830VI9",
})
.done(function( data ) {
 console.log(data);
});
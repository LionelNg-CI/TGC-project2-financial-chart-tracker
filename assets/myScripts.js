//get total portfolio values

// get/fetch btc price
let btcPriceDisplay = document.getElementById("price");
/*
var requestOptions = {
  method: "GET",
  redirect: "follow",
};
https: fetch(
  "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=SGD&apikey=ZCD6PLAXN5830VI9",
  requestOptions
)
  .then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function (json) {
    btcprice = json["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
    btcPriceDisplay.innerHTML =
      new Intl.NumberFormat("sg-SG", {
        style: "currency",
        currency: "SGD",
      }).format(btcprice) + " per btc";
  });
*/
// fixedvalue to be remove for btc price
btcprice = 1234.567;
btcPriceDisplay.innerHTML =
  new Intl.NumberFormat("sg-SG", {
    style: "currency",
    currency: "SGD",
  }).format(btcprice) + " <i>per btc</i>";

// get total trades figures
let settingsTrade = {
  async: true,
  crossDomain: true,
  url:
    "https://portfolio-63ea.restdb.io/rest/trade-history?&totals=true&count=true",
  method: "GET",
  headers: {
    "content-type": "application/json",
    "x-apikey": "5ecc486e4a532801892ed7f3",
    "cache-control": "no-cache",
  },
};
$.ajax(settingsTrade).done(function (response) {
  let tradeCount = response["totals"]["count"];
  $("#totaltrades").append(tradeCount);
});
// get btc balance
let settingsBtc = {
  async: true,
  crossDomain: true,
  url:
    "https://portfolio-63ea.restdb.io/rest/trade-history?groupby=quote currency",
  method: "GET",
  headers: {
    "content-type": "application/json",
    "x-apikey": "5ecc486e4a532801892ed7f3",
    "cache-control": "no-cache",
  },
};
$.ajax(settingsBtc).done(function (response) {
  console.log(response);
  // let tradeCount = response["totals"]["count"];
  // $("#totaltrades").append(tradeCount);
});

// canvasjs scripts
window.onload = function () {
  var chart1 = new CanvasJS.Chart("chartContainer1", {
    title: {
      text: "values in sgd",
    },

    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "pie",
        dataPoints: [
          { label: "eth", y: 10 },
          { label: "btc", y: 15 },
          { label: "neo", y: 25 },
          { label: "bnb", y: 30 },
          { label: "ltc", y: 28 },
        ],
      },
    ],
  });

  var chart2 = new CanvasJS.Chart("chartContainer2", {
    ttheme: "light2", // "light1", "light2", "dark1", "dark2"
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: "crypto/coins balance",
    },
    data: [
      {
        type: "area",
        dataPoints: [],
      },
    ],
  });

  chart1.render();
  chart2.render();
};

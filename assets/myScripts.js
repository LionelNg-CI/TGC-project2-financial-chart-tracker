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
  $("#totaltrades").append(response["totals"]["count"]);
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
  let coinBal = response;
  console.log(coinBal);
  // for (let c in "coins");

  // let tradeCount = response["totals"]["count"];
  // $("#totaltrades").append(tradeCount);
});

// canvasjs scripts
window.onload = function () {
  var chart1 = new CanvasJS.Chart("chartContainer1", {
    theme: "light2",
    title: {
      text: "Values in SGD",
    },
    data: [
      {
        type: "pie",
        showInLegend: true,
        toolTipContent: "{y} - #percent %",
        yValueFormatString: "#,##0,,.## Million",
        legendText: "{indexLabel}",
        dataPoints: [
          { y: 4181563, indexLabel: "btc" },
          { y: 2175498, indexLabel: "eth" },
          { y: 3125844, indexLabel: "bnb" },
          { y: 1176121, indexLabel: "ltc" },
          { y: 1727161, indexLabel: "neo" },
        ],
      },
    ],
  });
  chart1.render();
};

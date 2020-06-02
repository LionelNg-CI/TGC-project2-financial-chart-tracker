// get unique coin list
var coinList = [];
let settingsCoins = {
  async: true,
  crossDomain: true,
  // use database query url to get unique coin listing
  url:
    'https://portfolio-63ea.restdb.io/rest/trade-history?q={"$distinct": "quote currency"}',
  method: "GET",
  headers: {
    "content-type": "application/json",
    "x-apikey": "5ecc486e4a532801892ed7f3",
    "cache-control": "no-cache",
  },
};
$.ajax(settingsCoins).done(function (response) {
  coinList.push(response);
});

// get crypto price listing
var cryptoPList = [];
let btcPriceDisplay = document.getElementById("price");
let requestOptions = {
  method: "GET",
  redirect: "follow",
};
https: fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin%2Cbitcoin%2Cethereum%2Clitecoin%2Cneo&vs_currencies=sgd",
  requestOptions
)
  .then(function (response) {
    if (!response.ok) {
      throw new Error("HTTP error, status = " + response.status);
    }
    return response.json();
  })
  .then(function (json) {
    cryptoPList.push(json);
    btcprice = json.bitcoin.sgd;
    btcPriceDisplay.innerHTML = new Intl.NumberFormat("sg-SG", {
      style: "currency",
      currency: "SGD",
    }).format(btcprice);
  });

// get total trades figures
let settingsTrade = {
  async: true,
  crossDomain: true,
  // use database query url to get total trade executed
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
  let totalCount = response["totals"]["count"];
  $("#totaltrades").replaceWith(totalCount);
});

// // get coins balance
// let settingsBal = {
//   async: true,
//   crossDomain: true,
//   url: "https://portfolio-63ea.restdb.io/rest/trade-history",
//   method: "GET",
//   headers: {
//     "content-type": "application/json",
//     "x-apikey": "5ecc486e4a532801892ed7f3",
//     "cache-control": "no-cache",
//   },
// };
// $.ajax(settingsBal).done(function (response) {
//   // console.log();

// });

// canvasjs scripts
window.onload = function () {
  var chart1 = new CanvasJS.Chart("chartContainer1", {
    theme: "light2",
    title: {
      text: "Coin/Token Values in SGD",
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

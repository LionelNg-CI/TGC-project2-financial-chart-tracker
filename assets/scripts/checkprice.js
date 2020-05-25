var btcPriceDisplay = document.getElementById("price");
// var requestOptions = {
//   method: "GET",
//   redirect: "follow",
// };

// //www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=SGD&apikey=ZCD6PLAXN5830VI9

// https: fetch(
//   "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=SGD&apikey=ZCD6PLAXN5830VI9",
//   requestOptions
// )
//   .then(function (response) {
//     if (!response.ok) {
//       throw new Error("HTTP error, status = " + response.status);
//     }
//     return response.json();
//   })
//   .then(function (json) {
//     btcprice = json["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
//     btcPriceDisplay.innerHTML = new Intl.NumberFormat("sg-SG", {
// style: "currency",
// currency: "SGD",
// .format(btcprice) + "per btc";
// })
// });

// fixedvalue to be remove
btcprice = 1234.567;
btcPriceDisplay.innerHTML =
  new Intl.NumberFormat("sg-SG", {
    style: "currency",
    currency: "SGD",
  }).format(btcprice) + " <i>per btc</i>";

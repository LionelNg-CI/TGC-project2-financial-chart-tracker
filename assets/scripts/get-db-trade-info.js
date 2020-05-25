var settings = {
  async: true,
  crossDomain: true,
  url: "https://portfolio-63ea.restdb.io/rest/import-trade-history",
  method: "GET",
  headers: {
    "content-type": "application/json",
    "x-apikey": "5ecc486e4a532801892ed7f3",
    "cache-control": "no-cache",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

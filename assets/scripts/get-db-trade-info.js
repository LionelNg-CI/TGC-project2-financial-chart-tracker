var settings = {
  async: true,
  crossDomain: true,
  url: "https://portfolio-63ea.restdb.io/rest/trade-history",
  method: "GET",
  headers: {
    "content-type": "application/json",
    "x-apikey": "x",
    "cache-control": "no-cache",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

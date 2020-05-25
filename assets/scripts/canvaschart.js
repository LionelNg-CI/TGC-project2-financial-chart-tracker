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
          { label: "apple", y: 10 },
          { label: "orange", y: 15 },
          { label: "banana", y: 25 },
          { label: "mango", y: 30 },
          { label: "grape", y: 28 },
        ],
      },
    ],
  });

  var chart2 = new CanvasJS.Chart("chartContainer2", {
    title: {
      text: "Live Data",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "apple", y: 10 },
          { label: "orange", y: 15 },
          { label: "banana", y: 25 },
          { label: "mango", y: 30 },
          { label: "grape", y: 28 },
        ],
      },
    ],
  });

  chart1.render();
  chart2.render();
};

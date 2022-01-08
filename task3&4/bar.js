var chart = new ej.charts.Chart({
  //Initializing Primary X Axis
  primaryXAxis: {
    valueType: "Category",
    title: "",
  },
  //Initializing Primary Y Axis
  primaryYAxis: {
    minimum: 0,
    maximum: 60000,
    title: "Revenue for November 2019",
  },
  //Initializing Chart Series
  series: [
    {
      type: "Bar",
      dataSource: [
        { x: "Edmonds", y: 20000 },
        { x: "Mukilteo", y: 31000 },
        { x: "Bothell", y: 33000 },
        { x: "Lynnwood", y: 34000 },
        { x: "Seattle", y: 90000 },
        { x: "Everett", y: 10000 },
      ],
      stepSize: 1,
      beginAtZero: true,
      xName: "x",
      yName: "y",
      fill: "#3EB489",
      options: {
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    },
  ],
});
chart.appendTo("#container1");

var chart = new ej.charts.Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: "Category",
        title: ""
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
        minimum: 0,
        maximum: 140000,
        binInterval:5000,
        title: "Revenue for November 2019"
    },
    //Initializing Chart Series
    series: [
        {    
		  type: "Bar",
            dataSource: [
                { x: "Material Sale", y: 20000 },
                { x: "Maintenance", y: 31000 },
                { x: "HWT Replacement", y: 33000 },
                { x: "Bid Work Plumbing", y: 34000 },
                { x: "Service HVAC", y: 90000 },
                { x: "Bid Work HVAC", y: 10000 },
				{ x: "Service Plumbing", y: 180000 },
 
            ],
			
           scaleStepWidth: 5000,
           xName: "x",
           yName: "y",
           fill: "#3EB489"

			
        }
    ]
});
chart.appendTo("#container2");
// chart.appendTo("#container2");
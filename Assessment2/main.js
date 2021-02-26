
function drawChartPie() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Open',     40],
    ['Bounce',      40],
    ['Unsubscribe',  20],

  ]);

  var options = {
    title: ''
  };

  var piechart = new google.visualization.PieChart(document.getElementById('piechart'));

 piechart.draw(data, options);
  
}

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('number', );
  data.addColumn('number', 'Open');
  data.addColumn('number', 'CLICK Second time ');
  data.addColumn('number', 'Transformers: Age of Extinction');

  data.addRows([
    [1,  130, 120.8, 140.8],
    [2,  140.9, 130.5, 150.4],
    [3,  150.4,   135, 145.7]
  ]);

  var options = {
    chart: {
      title: ''
    },
    width: 625,
    height: 250,
    axes: {
      x: {
        0: {side: 'bottmom'}
      }
    }
  };

  var chart = new google.charts.Line(document.getElementById('line_top_x'));

  chart.draw(data, google.charts.Line.convertOptions(options));
}






var submit = document.getElementById("submit");
submit.addEventListener("click",displayDetails);
var row=1;
  function displayDetails() {
    var Firstname = document.getElementById("Fname").value;
    var LAstname = document.getElementById("Lname").value;
    var Email = document.getElementById("Email").value;
    var Message = document.getElementById("Mgs").value;

    if(!Firstname || ! LAstname || ! Email ||!Message) {
            alert("OOPS !")
    }
  }

  
// strictly for visualization for the table
// it will show a set amount of rows, with column headers {name, artist, album}
// we want to make this scrollable since theres a chance for a lot of data.  That we cant all show in one view
// eventually will connect this to other charts via brushing and linking
// Partner working on this : Aditi Lohe
function table() {

    let margin = {
        top: 60,
        left: 50,
        right: 30,
        bottom: 20
      },
      width = 500 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      xValue = d => d[0],
      yValue = d => d[1],
      xScale = d3.scaleLinear(),
      yScale = d3.scaleLinear();

    // Create the chart by adding an svg to the div with the id 
    // specified by the selector using the given data
    function chart(selector, data) {

        //sets table properties
        let columns = ['name', 'artist', 'album']
        let table = d3.select(selector).append('table')
        let thead = table.append('thead')
        let	tbody = table.append('tbody');

        var svg = d3.select("#table").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        
        thead.append('tr')
        .selectAll('th')
        .data(columns).enter()
        .append('th')
        .text(function (column) { return column; });

        // creates the rows for tables
        var rows = tbody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr');
        
        var cells = rows.selectAll('td')
        .data(function (row) {
          return columns.map(function (column) {
            return {column: column, value: row[column]};
          });
        })
        .enter()
        .append('td')
        .text(function (d) { return d.value; });

        d3.csv("/data/john_liked_songs.csv").then(function(csvData) {

          var data = eval(csvData);
  
          console.log(data);
        
        return chart;
      });
    }
  }


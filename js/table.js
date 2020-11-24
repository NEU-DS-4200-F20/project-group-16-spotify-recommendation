// strictly for visualization for the table
// it will show a set amount of rows, with column headers {name, artist, album}
// we want to make this scrollable since theres a chance for a lot of data.  That we cant all show in one view
// eventually will connect this to other charts via brushing and linking
// Partner working on this : Aditi Lohe
function table() {

  let margin = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };

  // var container = d3.select('svg');//.append("table")
  //.attr("id", "scrollbar");

  // var table = container.append('table')
  //.attr('height', 100)
  //.attr('width', 100)
  //.attr('id', 'bg');


  // var svg = d3.select('svg');

  //var table = svg.append('table');

  // var keys,
  // var allData,
  //   currentData,
  //   startPos = 0,
  //   increment = 10;

  // var scrollEvent = d3.zoom()
  //   .on('zoom', function (e) {
  //     var scrollDirection = (d3.event.deltaY > 0) ? 1 : -1;
  //     startPos += (scrollDirection > 0 && startPos + increment < allData.length) ? scrollDirection
  //       : (scrollDirection < 0 && startPos + increment > increment) ? scrollDirection
  //         : 0;
  //     updateTable();
  //   });

  //sets table properties
  let columns = ['track_name', 'artist_name', 'album_name'];
  let columnNames = ['Title', 'Artist', 'Album'];
  let table = d3.select('#table');

    // .attr("style", "margin-center")
    //.style("width", "25%")
  // .style("border", "1px black solid") d
  let thead = table.append('thead');
  let tbody = table.append('tbody');//.call(scrollEvent);


  d3.csv('data/john_liked_songs.csv').then(data => {
    let columnNames = ['Title', 'Artist', 'Album'];
    let columns = ['track_name', 'artist_name', 'album_name'];


     var table = d3.select('#table');
     var thead = table.select('thead');
     var tbody = table.select('tbody');

       keys = Object.keys(data[0]),
         allData = data;

       thead.append('tr')
       .style('text-align', 'left')
       .selectAll('th')
       .data(columnNames).enter()
       .append('th')
       .style("border-collapse", "collapse")
       .style("padding", "6px")
       // .style("border", "1px lightgrey solid")
       .text(function (column) { return column; });

       //updateTable();

       //creates the rows for tables
       var rows = tbody.selectAll('tr')//.append('#svg')
         .data(data)
         .enter()
         .append('tr');

       var cells = rows.selectAll('td')//.append('#svg')
       .data(function (row) {
         return columns.map(function (column) {
           return { column: column, value: row[column] };
         });
       })
         //const path = svg.selectAll('path')
         .enter()
         .append('td')
         //.append('path')
         .text(function (d) { return d.value; })
         .style("border-collapse", "collapse")
         .style("padding", "6px")
         .style("border", "1px lightgrey solid")
         .exit()
         .remove();
  });
}

function update(playlist, mood) {
  d3.csv(playlist).then(data => {
       let columnNames = ['Test', 'Test', 'Test'];
       let columns = ['track_name', 'artist_name', 'album_name'];


        var table = d3.selectAll('#table');

        table.select('tbody').remove();

        var thead = table.append('thead');
        var tbody = table.append('tbody');

          updateData = filterByMood(data, mood);
          console.log(updateData);

          keys = Object.keys(updateData[0]),
            allData = data;

          thead.append('tr')
          .enter()
          .style('text-align', 'left')
          .selectAll('th')
          .data(columnNames).enter()
          .select('th')
          .style("border-collapse", "collapse")
          .style("padding", "6px")
          // .style("border", "1px lightgrey solid")
          .text(function (column) { return column; });

          //updateTable();

          //creates the rows for tables
          var rows = tbody.selectAll('tr')//.append('#svg')
            .data(data)
            .enter()
            .append('tr');

          var cells = rows.selectAll('td')//.append('#svg')
          .data(function (row) {
            return columns.map(function (column) {
              return { column: column, value: row[column] };
            });
          })
            //const path = svg.selectAll('path')
            .enter()
            .append('td')
            //.append('path')
            .text(function (d) { return d.value; })
            .style("border-collapse", "collapse")
            .style("padding", "6px")
            .style("border", "1px lightgrey solid")
            .exit()
            .remove();
  });
}

  // function updateTable() {
  //   // Set new data based on startPos and increment.
  //   currentData = allData.slice(startPos, startPos + increment);

  //   // Delete previous rows.
  //   tbody.selectAll('tr').remove();

  //   // Create new rows.
  //   var tr = tbody.selectAll("tr")
  //     .data(currentData).enter()
  //     .append("tr")
  //     .classed("even", function (d, i) {
  //       return i % 2 == 1;
  //     });

  //   tr.selectAll('td')
  //     .data(function (row) {
  //       return columns.map(function (column) {
  //         return { column: column, value: row[column] };
  //       });
  //     })
  //     // .data(function (d) {
  //     //   return keys.map(function (e) {
  //     //     return {
  //     //       key: e,
  //     //       value: d[e]
  //     //     }
  //     //   });
  //     //})
  //     .enter()
  //     .append('td')
  //     .text(function (d) { return d.value; })
  //     .style("border-collapse", "collapse")
  //     .style("padding", "6px")
  //     .style("border", "1px lightgrey solid");
  // }

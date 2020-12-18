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



  //sets table properties
  let columns = ['track_name', 'artist_name', 'album_name'];
  let columnNames = ['Title', 'Artist', 'Album'];
  let table = d3.select('#table');

  let thead = table.append('thead');
  let tbody = table.append('tbody');

  thead.append('tr')
    .style('text-align', 'left')
    .selectAll('th')
    .data(columnNames).enter()
    .append('th')
    .style("border-collapse", "collapse")
    .style("padding", "6px")
    .text(function (column) { return column; });

  update('data/john_liked_songs.csv', 'all');

}

function update(playlist, mood) {

  if (playlist === "Liked Songs") {
    playlist = 'data/john_liked_songs.csv';
  }

  else if (playlist === "Hosting 2020") {
    playlist = 'data/john_hosting_2020.csv';
  }

  else if (playlist === "No Other Alternatives") {
    playlist = 'data/john_alt_2020.csv';
  }

  else if (playlist === "Midnight Acoustics") {
    playlist = 'data/john_accoustics_2020.csv';
  }


  let selectedRows = []
  // selectableElements = d3.select(null),
  // dispatcher;
  
  let columnNames = ['Title', 'Artist', 'Album'];
  let columns = ['track_name', 'artist_name', 'album_name'];

  var table = d3.selectAll('#table');

  table.select('tbody').remove();

  var thead = table.append('thead');
  var tbody = table.append('tbody');

  d3.csv(playlist).then(data => {

    updateData = filterByMood(data, mood);
    console.log(updateData);

    keys = Object.keys(updateData[0]),
      allData = updateData;

    thead.append('tr')
      .enter()
      .style('text-align', 'left')
      .selectAll('th')
      .data(columnNames).enter()
      .select('th')
      .style("border-collapse", "collapse")
      .style("padding", "6px")
      .text(function (column) { return column; });

    //updateTable();

    //creates the rows for tables
    var rows = tbody.selectAll('tr')
      .data(updateData)
      .enter()
      .append('tr');

    var cells = rows.selectAll('td')
      .data(function (row) {
        return columns.map(function (column) {
          return { column: column, value: row[column] };
        });
      })
      .enter()
      .append('td')
      .text(function (d) { return d.value; })
      .style("border-collapse", "collapse")
      .style("padding", "6px")
      .style("border", "1px lightgrey solid")
      .exit()
      .remove();

      //Brushing
    htmlTable = d3.select('table');
    table.style("cursor", "crosshair");
    var mouseState = false;
    // rows.on("mousedown",selectedRowsDown).on("mousemove",selectedRowsMove);
    // table.on("mouseup", endSelection);

    rows.on("mousedown", function(d,f){
      mouseState = true;
      if(selectedRows.includes(f)) {
        d3.select(this).style("background-color", "white");
        selectedRows.splice(selectedRows.indexOf(f),1);
        updateRadar(playlist, mood, selectedRows);
      }
      else {
        d3.select(this).style("background-color", "#7D8CC4");
        selectedRows.push(f);
        updateRadar(playlist, mood, selectedRows);
      }
      console.log(selectedRows);
    });

    rows.on("mousemove", function(d,f){
      if(mouseState && !selectedRows.includes(f)) {
          d3.select(this).style("background-color", "#7D8CC4");
          selectedRows.push(f);
          console.log(selectedRows);
          updateRadar(playlist, mood, selectedRows);
      }
    });

    rows.on("mouseup", function(d,f){
      mouseState = false;
    });
    console.log(selectedRows);
    updateRadar(playlist, mood, selectedRows);
  });
}

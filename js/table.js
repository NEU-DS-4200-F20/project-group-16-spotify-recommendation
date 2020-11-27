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
      allData = data;

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
      .data(data)
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

    rows.on("mousedown", function(d,i){
      mouseState = true;
      if(selectedRows.includes(i)) {
        d3.select(this).style("background-color", "white");
        selectedRows.splice(selectedRows.indexOf(i),1);
        updateRadar(playlist, selectedRows);
      }
      else {
        d3.select(this).style("background-color", "#7D8CC4");
        selectedRows.push(i);
        updateRadar(playlist, selectedRows);
      }
      console.log(selectedRows);
    });

    rows.on("mousemove", function(d,i){
      if(mouseState && !selectedRows.includes(i)) {
          d3.select(this).style("background-color", "#7D8CC4");
          selectedRows.push(i);
          console.log(selectedRows);
          updateRadar(playlist, selectedRows);
      }
    });

    rows.on("mouseup", function(d,i){
      mouseState = false;
    });

    updateRadar(playlist, selectedRows);


    //var dispatcher = d3.dispatch("data", "selectionUpdated");

    // function selectedRowsDown() {
    //   mouseState = true;
    //   let dispatchString =
    //   Object.getOwnPropertyNames(dispatcher._)[0];
    //     table.selectAll(".selected").attr("class","");
    //     var dispatcher = d3.dispatch(dispatchString);
    //     dispatcher.call(dispatchString, this, []);
    // }

    //when mouse is moved, start highlighting process
    // function selectedRowsMove() {
    //   if (mouseState) {
    //     d3.select(this).attr("class", "selected");
    //     let dispatchString = 
    //     Object.getOwnPropertyNames(dispatcher._)[0];
    //       dispatcher.call(dispatchString, this,
    //         table.selectAll(".selected").data());
    //   }
    // }

    //when mouse is no longer pressed, stop highlighting
    // function endSelection() {
    //   mouseState = false;
    // }

    // table.on("mouseup", endSelection);


    // function brushRow() {
    //   d3.select(this).attr("class", "selected");
    //   let dispatch = Object.getOwnPropertyNames(dispatcher._)[0];
    //   dispatcher.call(dispatch, this, tbody.selectAll("selected").data());
    // }

    // // mouse off function to stop highlighting
    // function endBrushing() {
    //   let dispatch = Object.getOwnPropertyNames(dispatcher._)[0];
    //   tbody.selectAll("selected").attr('table').data();
    //   dispatcher.call(dispatch, this, []);
    // }

    //     // Gets or sets the dispatcher we use for selection events
    //     update.selectionDispatcher = function () {
    //       if (!arguments.length) return dispatcher;
    //       dispatcher;
    //       return chart;
    //     };

    //     // Given selected data from another visualization 
    //     // select the relevant elements here (linking)
    //     update.updateSelection = function (selectedData) {
    //       if (!arguments.length) return

    //       // Select an element if its datum was selected
    //       selectableElements.classed('selected', d =>
    //         selectedData.includes(d)

    //       );
    //     };

  });
}

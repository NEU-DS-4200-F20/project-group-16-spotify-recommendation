 var w = 350,
 h = 350;

var colorscale = d3.scaleOrdinal(d3.schemeCategory10);

 //Legend titles
var LegendOptions = ['Liked Songs', 'Acoustics'];


 //Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.8,
  levels: 8,
  ExtraWidthX: 200
}


// //Call function to draw the Radar chart
// //Will expect that data is in %'s

// read both data sets nested in each other
// apply meanAtt to both and combine into a list of datasets
function updateRadar(selection) {
  d3.csv(selection).then(function(likedData) {
    var likedDataMeans = meanAtt(likedData);
    var d = [likedDataMeans]; 

    console.log(d);

    RadarChart.draw("#radar", d, mycfg);

    // function updateRadar(playlistName, selectedData) {
    //   if (length(selectedData) == 0) {
    //     d3.csv(playlistName).then(function(likedData) {
    //       var likedDataMeans = meanAtt(likedData);
    //       var d = [likedDataMeans]; 
    
    //       console.log(d);
    
    //       RadarChart.draw("#radar", d, mycfg);
    
    //     });
    //   }
    
    //   else {
    //     var likedDataMeans = meanAtt(selectedData);
    //     var d = [likedDataMeans]; 
    
    //     console.log(d);
    
    //     RadarChart.draw("#radar", d, mycfg);
    
  });
}

updateRadar("data/john_liked_songs.csv");

// ////////////////////////////////////////////
// /////////// Initiate legend ////////////////
// ////////////////////////////////////////////

var svg = d3.select('#body')
 .selectAll('svg')
 .append('svg')
 .attr("width", w)
 .attr("height", h)

//Create the title for the legend
var text = svg.append("text")
.attr("class", "title")
.attr('transform', 'translate(90,0)') 
.attr("x", w - 70)
.attr("y", 10)
.attr("font-size", "12px")
.attr("fill", "#404040")
.text("Hex representation of Liked Songs and Acoustics");

//Initiate Legend	
 var legend = svg.append("g")
 .attr("class", "legend")
 .attr("height", 100)
 .attr("width", 200)
 .attr('transform', 'translate(90,20)') 
 ;
 //Create colour squares
 legend.selectAll('rect')
 .data(LegendOptions)
 .enter()
 .append("rect")
 .attr("x", w - 65)
 .attr("y", function(d, i){ return i * 20;})
 .attr("width", 10)
 .attr("height", 10)
 .style("fill", function(d, i){ return colorscale(i);})
 ;
 //Create text next to squares
 legend.selectAll('text')
 .data(LegendOptions)
 .enter()
 .append("text")
 .attr("x", w - 52)
 .attr("y", function(d, i){ return i * 20 + 9;})
 .attr("font-size", "11px")
 .attr("fill", "#737373")
 .text(function(d) { return d; })


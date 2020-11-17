var w = 500,
h = 500;

var colorscale = d3.scaleOrdinal(d3.schemeCategory10);

//Legend titles
var LegendOptions = ['Liked Songs', 'Acoustics'];


  
//using preset data as of now
//will incorporate meanattributes function here 

//Data
var d = [
  [
    {axis:"Danceability",value:0.59},
    {axis:"Energy",value:0.56},
    {axis:"Popularity",value:0.42},
    {axis:"Acousticness",value:0.34},
    {axis:"Valence",value:0.48},
    {axis:"Speechiness",value:0.14}
    ],[
      {axis:"Danceability",value:0.44},
      {axis:"Energy",value:0.38},
      {axis:"Popularity",value:0.35},
      {axis:"Acousticness",value:0.69},
      {axis:"Valence",value:0.45},
      {axis:"Speechiness",value:0.71}
      ]
  ];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.8,
  levels: 8,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
.selectAll('svg')
.append('svg')
.attr("width", w+300)
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


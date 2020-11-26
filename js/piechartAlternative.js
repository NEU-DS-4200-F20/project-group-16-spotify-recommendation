// strictly for visualization for the pie charts
// we have 4 different data files for this currently - each need their own piechart
// here we will need preset models for each mood we could like to showcase
// current list of preset moods are {happy, chill, gloomy, bops, dance, study} **subject to change**
// Partner working on this : John Barber
function piechartAlternative() {

    let margin = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    width = 300 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom,
    radius = Math.min(width,height) / 2 - 20;

    var pie = d3.pie()
    .sort(null)
    .value(function(d) {return d.value; });

    var svg = d3.select("#piechartAlternative").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

    var pie = d3.pie()
    .value(d => d.tracks);   

    var arc = d3.arc()
        .innerRadius(radius - 50)
        .outerRadius(radius);

    var tooltipAlt = d3.select('#piechartAlternative')
        .append('div')
        .attr('class', 'tooltipAlt')

    tooltipAlt.append('div')
		.attr('class', 'textAlternative');


    d3.csv("data/john_alt_2020.csv").then(function(csvData) {

        var data = moodEval(csvData);

        var trackTotal = 0;

        data.forEach(element => {
             trackTotal += element.tracks;
        });

        console.log(data);
        
        const colorScale = d3.scaleOrdinal()
            .range(['#f4d06f', '#372554', '#4b88a2', '#d81e5b', '#d66853']);

        var path = svg.selectAll('path')
            .data(pie(data))
            .enter()
            .append('path')
            .attr('d', arc)
            .style('fill', (d, i) => colorScale(i))

        tooltipAlt.select('.textAlternative').html("total<br>" + trackTotal);
        tooltipAlt.style('display', 'block');


        path.on('mouseover', function(d) {
            tooltipAlt.select('.textAlternative').html(d.srcElement.__data__.data.mood + "<br>" + d.srcElement.__data__.data.tracks);
            tooltipAlt.style('display', 'block');
            });
            
        path.on('mouseout', function() {
            tooltipAlt.select('.textAlternative').html("total<br>" + trackTotal);
            });  
        
        svg.append("text")
            .attr("x", 0)             
            .attr("y", height / 2 - 5)
            .attr("text-anchor", "middle")  
            .style("font-size", "16px") 
            .style("font-weight", "bold")
            .text("No Other Alternavtives");
            
            
            


    });
}
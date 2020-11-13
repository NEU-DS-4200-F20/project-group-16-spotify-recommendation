// strictly for visualization for the pie charts
// we have 4 different data files for this currently - each need their own piechart
// here we will need preset models for each mood we could like to showcase
// current list of preset moods are {happy, chill, gloomy, bops, dance, study} **subject to change**
// Partner working on this : John Barber
function piechartLiked() {

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

    var svg = d3.select("#piechartLiked").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")


    d3.csv("/data/john_liked_songs.csv").then(function(csvData) {

        var data = eval(csvData);

        console.log(data);

        const pie = d3.pie()
            .value(d => d.tracks);   

        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);
        
        const colorScale = d3.scaleOrdinal()
            .range(['#f4d06f', '#372554', '#4b88a2', '#d81e5b', '#d66853']);

        const path = svg.selectAll('path')
            .data(pie(data))
            .enter()
            .append('path')
            .attr('d', arc)
            .style('fill', (d, i) => colorScale(i))
        
        svg.append("text")
            .attr("x", 0)             
            .attr("y", height / 2 - 5)
            .attr("text-anchor", "middle")  
            .style("font-size", "16px") 
            .style("font-weight", "bold")
            .text("Liked Songs");
            
            
            


    });
}
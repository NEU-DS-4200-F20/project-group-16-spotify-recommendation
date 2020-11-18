function piechartAccoustic() {

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

    var svg = d3.select("#piechartAccoustic").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    d3.csv("/project-group-16-spotify-recommendation/data/john_accoustics_2020.csv").then(function(csvData) {

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
            .text("Midnight Accoustics");

    });
}
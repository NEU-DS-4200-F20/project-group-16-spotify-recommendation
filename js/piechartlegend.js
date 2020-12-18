function piechartLegend() {
    var svg = d3.select('#piechartLegend')

    let margin = {
        top: 50,
        left: 120,
        right: 100,
        bottom: 100
    };

    svg.append("circle").attr("cx",margin.left).attr("cy",margin.top).attr("r", 8).style("fill", "#f4d06f")
    svg.append("circle").attr("cx",margin.left + 100).attr("cy",margin.top).attr("r", 8).style("fill", "#372554")
    svg.append("circle").attr("cx",margin.left + 200).attr("cy",margin.top).attr("r", 8).style("fill", "#4b88a2")
    svg.append("circle").attr("cx",margin.left + 300).attr("cy",margin.top).attr("r", 8).style("fill", "#d81e5b")
    svg.append("circle").attr("cx",margin.left + 400).attr("cy",margin.top).attr("r", 8).style("fill", "#d66853")

    svg.append("text").attr("x", margin.left + 15).attr("y", margin.top + 2).text("Happy").style("font-size", "16px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", margin.left + 115).attr("y", margin.top + 2).text("Gloomy").style("font-size", "16px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", margin.left + 215).attr("y", margin.top + 2).text("Bops").style("font-size", "16px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", margin.left + 315).attr("y", margin.top + 2).text("Dance").style("font-size", "16px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", margin.left + 415).attr("y", margin.top + 2).text("Study").style("font-size", "16px").attr("alignment-baseline","middle")

}
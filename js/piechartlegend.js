function piechartlegend() {
    var svg = d3.select('#piechartlegend')

    svg.append("circle").attr("cx",200).attr("cy",130).attr("r", 8).style("fill", "#f4d06f")
    svg.append("circle").attr("cx",200).attr("cy",160).attr("r", 8).style("fill", "#372554")
    svg.append("circle").attr("cx",200).attr("cy",190).attr("r", 8).style("fill", "#4b88a2")
    svg.append("circle").attr("cx",200).attr("cy",220).attr("r", 8).style("fill", "#d81e5b")
    svg.append("circle").attr("cx",200).attr("cy",250).attr("r", 8).style("fill", "#d66853")

    svg.append("text").attr("x", 220).attr("y", 130).text("Happy").style("font-size", "20px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 220).attr("y", 160).text("Gloomy").style("font-size", "20px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 220).attr("y", 190).text("Bops").style("font-size", "20px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 220).attr("y", 220).text("Dance").style("font-size", "20px").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 220).attr("y", 250).text("Study").style("font-size", "20px").attr("alignment-baseline","middle")

}
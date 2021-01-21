<template>
  <div class="map">
  </div>  
</template>

<script>

import * as d3 from 'd3'

export default {
  name: 'MainMap',
  props: {
    msg: String
  },
  mounted: function () {
  // Parameters
  var width		= 750,
      height		= 750,
      scale		= 8500,
      centerLat		= 5.5,	
      centerLong  	= 52.2;	 


  // Append svg to body 
  var svg = d3.select(".map").append("svg")
    .attr("width", width)
    .attr("height", height)

const map = svg.append('g')
const dots = svg.append('g')
const text = svg.append('g')

  // Adjust projection based on scale and center of the map 
  var projection = d3.geoMercator()
    .scale(scale).translate([width / 2, height / 2]).center([centerLat, centerLong]);
    var path = d3.geoPath()
    .projection(projection); 

var link = [
  {type: "LineString", coordinates: [[5.7, 52.83], [3.7, 53.55]]},
  {type: "LineString", coordinates: [[6.3, 52.1], [3.7, 53.25]]},
  {type: "LineString", coordinates: [[5, 52.3], [3.7, 52.95]]}
]

// Create data for circles:
var markers = [
  {long: 6.3, lat: 52.1},
  {long: 5.8, lat: 52.8},
  {long: 5, lat: 52.3} 
];

// create svg element:

  // Add the data 
  d3.json("https://gist.githubusercontent.com/larsbouwens/1afef9beb0c3df0e4b24/raw/5ed7eb4517eee5737a4cb4551558e769ed8da41a/nl.json").then(function(data){
    
    // Draw the map
    map.append("g")
    .selectAll("path")
    .data(data.features)
    .enter().append("path")
    .attr("fill", "#666")
    .attr("d", d3.geoPath()
      .projection(projection)
    )
    .style("stroke", "#fff")
    .style("stroke-width", 0)

    // Add the path
    map.selectAll("myPath")
      .data(link)
      .enter()
      .append("path")
        .attr("d", function(d){ return path(d)})
        .style("fill", "none")
        .style("stroke", "#000")
        .style("stroke-width", 7)
})

    // Add circles:
    dots
      .selectAll("myCircles")
      .data(markers)
      .enter()
      .append("circle")
        .attr("cx", function(d){ return projection([d.long, d.lat])[0] })
        .attr("cy", function(d){ return projection([d.long, d.lat])[1] })
        .attr("r", 14)
        .style("fill", "69b3a2")
        .attr("stroke", "#000")
        .attr("stroke-width", 3)




// Add the path using this helper function
text.append('rect')
  .attr('x', 1)
  .attr('y', 25)
  .attr('width', 110)
  .attr('height', 40)
  .attr('stroke', '#75767A')
  .attr('fill', '#75767A')

text.append('text')
  .attr('x', 25)
  .attr('y', 50)
  .attr('stroke', 'white')
  .attr('fill', 'white')
  .style("font-size", 19)
  .text("Woning")

text.append('rect')
  .attr('x', 1)
  .attr('y', 100)
  .attr('width', 110)
  .attr('height', 40)
  .attr('stroke', 'black')
  .attr('fill', 'black')

text.append('text')
  .attr('x', 25)
  .attr('y', 125)
  .attr('stroke', 'white')
  .attr('fill', 'white')
  .style("font-size", 19)
  .text("Werk")

text.append('rect')
  .attr('x', 1)
  .attr('y', 175)
  .attr('width', 110)
  .attr('height', 40)
  .attr('stroke', '#F25555')
  .attr('fill', '#F25555')

text.append('text')
  .attr('x', 25)
  .attr('y', 200)
  .attr('stroke', 'white')
  .attr('fill', 'white')
  .style("font-size", 19)
  .text("Incident")  
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  path {fill: #666; stroke: #fff; stroke-width: 1;}
</style>

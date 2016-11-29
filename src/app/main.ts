import '../css/main.css'
import * as d3 from 'd3'
d3.select('#chart')
  .selectAll("div")
  .data([4, 8, 15, 16, 23, 42])
  .enter()
  .append("div")
  .style("height", (d)=> d + "px")
<!--
 * @Author: sfy
 * @Date: 2023-03-30 23:10:52
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-02 22:54:27
 * @FilePath: /vulture-design/packages/vuele/src/components/D3Demo/index.vue
 * @Description: update here
-->
<template>
  <div id="root"></div>
  <!-- <div class="textDance"></div> -->
</template>
<script setup lang="ts">
import { onMounted, reactive, toRefs } from 'vue'
import * as d3 from "d3";
let svg: d3.Selection<SVGSVGElement, unknown, HTMLElement, any>
const data = [
  { name: "外包", value: 3000 },
  { name: "金融", value: 4754 },
  { name: "制造", value: 1120 },
  { name: "咨询", value: 4032 }
];
const dimensions = {
  width: 600, // 画布宽度
  height: 600, // 画布高度
  margin: {
    top: 15,
    right: 15,
    bottom: 40,
    left: 60
  }
}
dimensions.boundedWidth =
  dimensions.width - dimensions.margin.left - dimensions.margin.right;
// 图表高度
dimensions.boundedHeight =
  dimensions.height - dimensions.margin.top - dimensions.margin.bottom;


onMounted(() => {
  initGraph()
})


const yValue = (d) => {
  return d.value
}
const xValue = (d) => {
  return d.name
}



const initGraph = () => {
  svg = d3.select('#root').append('svg').attr('width', dimensions.width).attr('height', dimensions.height)
  const yScale = d3.scaleLinear().domain([0, d3.max(data, (d) => yValue(d))]).range([dimensions.height, 0])

  // 序数比例尺
  const xScale = d3.scaleBand().domain(data.map(d => xValue(d))).range([0, dimensions.width])

  const color = d3.scaleOrdinal(d3.schemePastel2);

  const chartG = svg
    .append("g")
    .style("transform", `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
    );

  chartG.selectAll('rect').data(data).join('rect')
    .attr("x", (d) => xScale(xValue(d)))
    .attr("y", (d) => yScale(yValue(d)))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => dimensions.boundedHeight - yScale(yValue(d)))
    .attr("fill", (d, i) => color(i));

}


</script>
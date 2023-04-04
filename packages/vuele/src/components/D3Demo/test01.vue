<!--
 * @Author: sfy
 * @Date: 2023-03-30 23:10:52
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-02 22:19:40
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
const circles = [
  { text: 1, color: "red" },
  { text: 2, color: "green" },
  { text: 3, color: "blue" }
];
const arr = [1, 2, 3];

onMounted(() => {
  initGraph()
})

// join 效果
function randomLetters() {
  return d3
    .shuffle("abcdefghijklmnopqrstuvwxyz".split(""))
    .slice(0, Math.floor(6 + Math.random() * 20))
    .sort();
}

const initGraph = () => {
  svg = d3.select('#root').append('svg').attr('width', 400).attr('height', 400).style("background", "gray");
  // circles.forEach(circle => {
  //   svg.append('circle').attr("cx", 50 * circle.text)
  //     .attr("cy", 50)
  //     .attr("r", 20)
  //     .attr("fill", circle.color);
  // })
  // d3.select("svg").insert("rect", "circle");
  // d3.select("rect").remove()
  // const doms = svg.selectAll('circle').data(circles)
  //   .enter()
  //   .append("circle")
  //   .attr("class", "circle")
  //   .attr("id", (d) => `circle${d.text}`) // d 表示 data绑定的数据中的一项
  //   .attr("cx", (d) => 50 * d.text)
  //   .attr("cy", 50)
  //   .attr("r", 20)
  //   .attr("fill", (d) => d.color);
  // const circle = svg.selectAll("circle").data(arr).style("fill", "blue").attr("cx", (d) => d * 50)
  // console.log('circle: ', circle);
  // const newCircle = circle.enter().append("circle").style("fill", "green").merge(circle).style("stroke", "block").attr("cx", (d) => d * 50)
  //   .attr("cy", (d) => d * 50)
  //   .attr("r", 16)
  // console.log('newCircle: ', newCircle);

  // const textDance = d3.select(".textDance").append("svg").attr("width", 500).attr("height", 300).append("g").attr("transform", `translate(20, 50)`);


  // d3.interval(() => {
  //   const textNow = randomLetters()
  //   const text = textDance.selectAll("text").data(textNow, (d) => d)
  //   console.log('text: ', text);

  //   text.enter()
  //     .append("text")
  //     .attr("fill", "screen")
  //     .attr("y", -30)
  //     .style("fill-opacity", 0)
  //     .attr("x", (d, i) => i * 26)
  //     .text(d => d)
  //     .transition()
  //     .duration(750)
  //     .attr("y", 0)
  //     .style("fill-opacity", 1)

  //   text
  //     .attr("fill", "gray")
  //     .transition()
  //     .duration(750)
  //     .attr("x", (d, i) => {
  //       return i * 26;
  //     });

  //   text
  //     .exit()
  //     .attr("fill", "red") // 红色
  //     .transition()
  //     .duration(750)
  //     .attr("y", 30) // 从当前位置落下到相对低30像素的位置
  //     .style("fill-opacity", 0) // 透明
  //     .remove();
  // }, 1000)
  const scale = d3.scaleLinear().domain([0, 500]).range([0, 300])
}


</script>
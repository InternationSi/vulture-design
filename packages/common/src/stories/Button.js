/*
 * @Author: sfy
 * @Date: 2023-04-06 22:31:57
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-06 22:49:42
 * @FilePath: /vulture-design/packages/common/src/stories/Button.js
 * @Description: update here.
 */
import "./button.css";
import ForceGraph3D from "../3d-force-graph";

export const createButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
}) => {
  const div = document.createElement("div");
  div.id = "3d-graph";
  console.log("div: ", div);
  const N = 300;
  const gData = {
    nodes: [...Array(N).keys()].map((i) => ({ id: i })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        source: id,
        target: Math.round(Math.random() * (id - 1)),
      })),
  };
  const target = document.getElementById("3d-graph");
  if (target) {
    const Graph = ForceGraph3D()(document.getElementById("3d-graph")).graphData(
      gData
    );
  }

  return div;
};

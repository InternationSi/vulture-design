/*
 * @Author: sfy
 * @Date: 2023-03-27 22:26:57
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-27 22:29:28
 * @FilePath: /vue-naive-admin/src/components/3d-force-graph/d3-force-3d/x.js
 * @Description: update here
 */
import constant from './constant.js'

export default function (x) {
  var strength = constant(0.1),
    nodes,
    strengths,
    xz

  if (typeof x !== 'function') x = constant(x == null ? 0 : +x)

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      ;(node = nodes[i]), (node.vx += (xz[i] - node.x) * strengths[i] * alpha)
    }
  }

  function initialize() {
    if (!nodes) return
    var i,
      n = nodes.length
    strengths = new Array(n)
    xz = new Array(n)
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN((xz[i] = +x(nodes[i], i, nodes))) ? 0 : +strength(nodes[i], i, nodes)
    }
  }

  force.initialize = function (_) {
    nodes = _
    initialize()
  }

  force.strength = function (_) {
    return arguments.length ? ((strength = typeof _ === 'function' ? _ : constant(+_)), initialize(), force) : strength
  }

  force.x = function (_) {
    return arguments.length ? ((x = typeof _ === 'function' ? _ : constant(+_)), initialize(), force) : x
  }

  return force
}

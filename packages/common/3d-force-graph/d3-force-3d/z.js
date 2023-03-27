/*
 * @Author: sfy
 * @Date: 2023-03-27 22:26:57
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-27 22:29:35
 * @FilePath: /vue-naive-admin/src/components/3d-force-graph/d3-force-3d/z.js
 * @Description: update here
 */
import constant from './constant.js'

export default function (z) {
  var strength = constant(0.1),
    nodes,
    strengths,
    zz

  if (typeof z !== 'function') z = constant(z == null ? 0 : +z)

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      ;(node = nodes[i]), (node.vz += (zz[i] - node.z) * strengths[i] * alpha)
    }
  }

  function initialize() {
    if (!nodes) return
    var i,
      n = nodes.length
    strengths = new Array(n)
    zz = new Array(n)
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN((zz[i] = +z(nodes[i], i, nodes))) ? 0 : +strength(nodes[i], i, nodes)
    }
  }

  force.initialize = function (_) {
    nodes = _
    initialize()
  }

  force.strength = function (_) {
    return arguments.length ? ((strength = typeof _ === 'function' ? _ : constant(+_)), initialize(), force) : strength
  }

  force.z = function (_) {
    return arguments.length ? ((z = typeof _ === 'function' ? _ : constant(+_)), initialize(), force) : z
  }

  return force
}

/*
 * @Author: sfy
 * @Date: 2023-03-27 22:26:57
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-27 22:28:06
 * @FilePath: /vue-naive-admin/src/components/3d-force-graph/d3-force-3d/center.js
 * @Description: update here
 */
export default function (x, y, z) {
  var nodes,
    strength = 1

  if (x == null) x = 0
  if (y == null) y = 0
  if (z == null) z = 0

  function force() {
    var i,
      n = nodes.length,
      node,
      sx = 0,
      sy = 0,
      sz = 0

    for (i = 0; i < n; ++i) {
      ;(node = nodes[i]), (sx += node.x || 0), (sy += node.y || 0), (sz += node.z || 0)
    }

    for (sx = (sx / n - x) * strength, sy = (sy / n - y) * strength, sz = (sz / n - z) * strength, i = 0; i < n; ++i) {
      node = nodes[i]
      if (sx) {
        node.x -= sx
      }
      if (sy) {
        node.y -= sy
      }
      if (sz) {
        node.z -= sz
      }
    }
  }

  force.initialize = function (_) {
    nodes = _
  }

  force.x = function (_) {
    return arguments.length ? ((x = +_), force) : x
  }

  force.y = function (_) {
    return arguments.length ? ((y = +_), force) : y
  }

  force.z = function (_) {
    return arguments.length ? ((z = +_), force) : z
  }

  force.strength = function (_) {
    return arguments.length ? ((strength = +_), force) : strength
  }

  return force
}

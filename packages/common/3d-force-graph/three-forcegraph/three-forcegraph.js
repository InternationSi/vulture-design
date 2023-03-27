/*
 * @Author: sfy
 * @Date: 2023-03-25 14:34:48
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-25 14:36:19
 * @FilePath: /vue-naive-admin/src/components/3d-force-graph/three-forcegraph/three-forcegraph.js
 * @Description: update here
 */
import { Group } from 'three'
const three = window.THREE ? window.THREE : { Group } // Prefer consumption from global THREE, if exists

import ForceGraph from './forcegraph-kapsule.js'
import fromKapsule from './utils/kapsule-class.js'

export default fromKapsule(ForceGraph, three.Group, true)

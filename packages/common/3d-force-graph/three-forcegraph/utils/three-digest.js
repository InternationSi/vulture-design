/*
 * @Author: sfy
 * @Date: 2023-03-25 14:34:48
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-25 14:38:46
 * @FilePath: /vue-naive-admin/src/components/3d-force-graph/three-forcegraph/utils/three-digest.js
 * @Description: update here
 */
import dataJoint from 'data-joint'

import { emptyObject } from './three-gc'

function threeDigest(data, scene, { objFilter = () => true, ...options } = {}) {
  return dataJoint(
    data,
    scene.children.filter(objFilter),
    (obj) => scene.add(obj),
    (obj) => {
      scene.remove(obj)
      emptyObject(obj)
    },
    {
      objBindAttr: '__threeObj',
      ...options,
    }
  )
}

export default threeDigest

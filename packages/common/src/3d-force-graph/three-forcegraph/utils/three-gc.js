/*
 * @Author: sfy
 * @Date: 2023-03-25 14:34:48
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-25 14:38:50
 * @FilePath: /vue-naive-admin/src/components/3d-force-graph/three-forcegraph/utils/three-gc.js
 * @Description: update here
 */
const materialDispose = (material) => {
  if (material instanceof Array) {
    material.forEach(materialDispose)
  } else {
    if (material.map) {
      material.map.dispose()
    }
    material.dispose()
  }
}

const deallocate = (obj) => {
  if (obj.geometry) {
    obj.geometry.dispose()
  }
  if (obj.material) {
    materialDispose(obj.material)
  }
  if (obj.texture) {
    obj.texture.dispose()
  }
  if (obj.children) {
    obj.children.forEach(deallocate)
  }
}

const emptyObject = (obj) => {
  while (obj.children.length) {
    const childObj = obj.children[0]
    obj.remove(childObj)
    deallocate(childObj)
  }
}

export { emptyObject, deallocate }

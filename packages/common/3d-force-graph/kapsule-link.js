/*
 * @Author: sfy
 * @Date: 2023-03-25 14:01:30
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-25 14:03:07
 * @FilePath: /vue-naive-admin/src/components/3d-force-graph/kapsule-link.js
 * @Description: update here
 */
export default function (kapsulePropName, kapsuleType) {
  const dummyK = new kapsuleType() // To extract defaults

  return {
    linkProp: function (prop) {
      // link property config
      return {
        default: dummyK[prop](),
        onChange(v, state) {
          state[kapsulePropName][prop](v)
        },
        triggerUpdate: false,
      }
    },
    linkMethod: function (method) {
      // link method pass-through
      return function (state, ...args) {
        const kapsuleInstance = state[kapsulePropName]
        const returnVal = kapsuleInstance[method](...args)

        return returnVal === kapsuleInstance
          ? this // chain based on the parent object, not the inner kapsule
          : returnVal
      }
    },
  }
}

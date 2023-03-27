/*
 * @Author: sfy
 * @Date: 2023-03-25 14:51:31
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-25 14:51:32
 * @FilePath: /vue-naive-admin/src/components/3d-force-graph/accessor-fn/index.js
 * @Description: update here
 */
export default (p) =>
  p instanceof Function
    ? p // fn
    : typeof p === 'string'
    ? (obj) => obj[p] // property name
    : (obj) => p // constant

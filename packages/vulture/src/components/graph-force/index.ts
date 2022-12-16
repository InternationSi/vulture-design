/*
 * @Author: sfy
 * @Date: 2022-12-10 23:06:00
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-16 22:16:32
 * @FilePath: /vulture-design/packages/vulture/src/components/graph-force/index.ts
 * @Description: update here
 */
import { ReactGraph as components } from './react-graph-force'


export * from './react-graph-force'


export const ReactGraphGroup = {
  components,
  displayName: 'react-graph',
  propsList: ['data']
}

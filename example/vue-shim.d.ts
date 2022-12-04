/*
 * @Author: sfy
 * @Date: 2022-12-04 21:18:27
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-04 21:18:28
 * @FilePath: /advance/example/vue-shim.d.ts
 * @Description: update here
 */
declare module '*.vue'{
  import type { DefineComponent } from "vue";
  const component:DefineComponent<{},{},any>
  export default component
}
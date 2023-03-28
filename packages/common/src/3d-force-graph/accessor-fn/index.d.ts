/*
 * @Author: sfy
 * @Date: 2023-03-25 14:51:53
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-25 14:51:54
 * @FilePath: /vue-naive-admin/src/components/3d-force-graph/accessor-fn/index.d.ts
 * @Description: update here
 */
type AccessorFn = (item: any) => any;

declare function accessor(
  accessorParam: string | AccessorFn | any
): AccessorFn;

export default accessor;
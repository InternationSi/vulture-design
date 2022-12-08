/*
 * @Author: sfy
 * @Date: 2022-12-07 19:45:06
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-07 22:22:05
 * @FilePath: /vulture-design/packages/vulture/src/components/condition-tree/condition-tree.tsx
 * @Description: update here
 */
import { Button, Space, Steps } from 'antd';
export const ConditionTree = ({ items = [] }) => {

  return (
    <Steps
    current={1}
    items={items}
  />
  );
  
}


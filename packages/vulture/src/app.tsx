/*
 * @Author: sfy
 * @Date: 2022-12-06 00:01:39
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-06 22:45:26
 * @FilePath: /vulture-design/packages/vulture/src/app.tsx
 * @Description: update here
 */
import { Button, Space, Steps } from 'antd';
export const Greeting = ({ items = [] }) => {

  return (
    <Steps
    current={1}
    items={items}
  />
  );
  
}
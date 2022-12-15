/*
 * @Author: sfy
 * @Date: 2022-12-07 19:45:06
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-15 23:23:54
 * @FilePath: /vulture-design/packages/vulture/src/components/condition-tree/condition-tree.tsx
 * @Description: update here
 */
import { Button, Space, Steps } from 'antd';
import RelationTree from './components/RelationTree';
import RelationTerm from './components/RelationTerm';
import './index.scss'
export const ConditionTree = ({ items = [] }) => {
  const setElementTerm = (record, pos, onChange) => {
    return <RelationTerm data={record} onChange={onChange} />
  };
  return (
    <RelationTree setElementTerm={setElementTerm} />
  );

}


/*
 * @Author: sfy
 * @Date: 2022-12-07 19:45:06
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-27 23:20:38
 * @FilePath: /vulture-design/packages/rele/src/components/condition-tree/condition-tree.tsx
 * @Description: update here
 */
import React from 'react'
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


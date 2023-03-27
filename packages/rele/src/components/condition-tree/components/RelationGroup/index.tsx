/*
 * @Author: sfy
 * @Date: 2022-12-15 20:32:27
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-27 23:21:15
 * @FilePath: /vulture-design/packages/rele/src/components/condition-tree/components/RelationGroup/index.tsx
 * @Description: update here
 */
import { Select, Button } from 'antd';
import RelationItem from '../RelationsItem';
import React from 'react'

export const posSeparator = '_';
export const defaultOpsValue = 'and';

function RelationGroup({ data, pos, setElementTerm, onAddGroup, onAddTerm, onOpsChange, onDeleteTerm, onTermChange }) {
  const getLastPos = () => {
    const arrPos = getArrPos(pos);
    const { children } = data;
    arrPos.push(children.length - 1)
    return arrPos.join(posSeparator);
  };
  const handleOpsChange = (value) => {
    if (typeof onOpsChange === 'function') {
      onOpsChange(pos, { ...data, ops: value });
    }
  };
  const handleAddTermClick = () => {
    const record = {};
    const pos = getLastPos();
    if (typeof onAddTerm === 'function') {
      onAddTerm(pos, record);
    }
  };
  const handleAddGroupClick = () => {
    const record = { ops: defaultOpsValue, children: [{}] };
    const pos = getLastPos();
    if (typeof onAddGroup === 'function') {
      onAddGroup(pos, record);
    }
  };


  const { children, ops } = data;
  const relationValue = ops || defaultOpsValue;

  return (
    <div className="vui-relation-group">
      <div className="relational">
        <Select
          className="relation-sign"
          value={relationValue}
          onChange={handleOpsChange}
          options={[
            {
              label: '且',
              value: 'and'
            },
            {
              label: '或',
              value: 'or'
            }
          ]}
        />
      </div>
      <div className="conditions">
        {children.map((record, i) => {
          const { children: list } = record;
          const newPos = getNewPos(pos, i);

          return list && list.length ? (
            <RelationGroup
              pos={newPos}
              key={newPos}
              data={record}
              setElementTerm={setElementTerm}
              onAddGroup={onAddGroup}
              onAddTerm={onAddTerm}
              onOpsChange={onOpsChange}
              onDeleteTerm={onDeleteTerm}
              onTermChange={onTermChange}
            />
          ) : (
            <RelationItem
              pos={newPos}
              key={newPos}
              data={record}
              setElementTerm={setElementTerm}
              onDeleteTerm={onDeleteTerm}
              onTermChange={onTermChange}
            />
          );
        })}
        <div className="operators">
          <Button className="add-term" onClick={handleAddTermClick}>加条件</Button>
          <Button className="add-group" onClick={handleAddGroupClick}>加条件组</Button>
        </div>
      </div>
    </div>
  );
}

const getNewPos = (pos, i) => {
  // 如果当前项是整个 value (即组件的起始项)时，新位置即当前序号
  return pos ? `${pos}${posSeparator}${i}` : String(i);
};

export const getArrPos = (pos) => {
  return (pos && pos.split(posSeparator)) || [];
};

export default RelationGroup;
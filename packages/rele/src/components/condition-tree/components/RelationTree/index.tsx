/*
 * @Author: sfy
 * @Date: 2022-12-15 20:21:39
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-27 23:20:16
 * @FilePath: /vulture-design/packages/rele/src/components/condition-tree/components/RelationTree/index.tsx
 * @Description: update here
 */
import produce from 'immer';
import React from 'react'
import { useEffect, useState } from 'react';
import RelationGroup, { getArrPos, defaultOpsValue } from '../RelationGroup';



type RelationTreeProps = {
  value?: any;
  onChange?: any
  setElementTerm: any
};
const defaultRelation = {
  ops: defaultOpsValue,
  children: [{}],
};

function RelationTree({ value, onChange, setElementTerm }: RelationTreeProps) {
  const [relations, setRelations] = useState(defaultRelation);
  // console.log('relations', relations);
  if (value) {
    useEffect(() => {
      setRelations(value);
    }, [value]);
  }

  /**
   * @param {string} pos 位置字符串，形如：0_0_1
   * @param {object} record 变更的单项值
   * @param {string} type 操作类型，如：addTerm, addGroup, changeOps(改变逻辑运算符 &&、||), changeTerm, deleteTerm
   */
  const setOnChange = (pos, record, type) => {
    const value = getNewValue(relations, pos, type, record);
    if (typeof onChange === 'function') {
      onChange(value, type, record);
    }
    setRelations(value);
  };

  const handleAddGroup = (pos, record) => {
    setOnChange(pos, record, 'addGroup');
  };
  const handleAddTerm = (pos, record) => {
    setOnChange(pos, record, 'addTerm');
  };
  const handleOpsChange = (pos, record) => {
    setOnChange(pos, record, 'changeOps');
  };
  const handleDeleteTerm = (pos, record) => {
    setOnChange(pos, record, 'deleteTerm');
  };
  const handleTermChange = (pos, record) => {
    setOnChange(pos, record, 'changeTerm');
  };

  return (
    <div className="vui-relation-tree">
      <RelationGroup
        pos=""
        data={relations}
        setElementTerm={setElementTerm}
        onAddGroup={handleAddGroup}
        onAddTerm={handleAddTerm}
        onOpsChange={handleOpsChange}
        onDeleteTerm={handleDeleteTerm}
        onTermChange={handleTermChange}
      />
    </div>
  );
}


/**
 * @param {object} data RelationTree 完整的 value
 * @param {string} pos 位置字符串，形如：0_0_1
 * @param {string} type 操作类型，如：addTerm, addGroup, changeOps(改变逻辑运算符 &&、||), changeTerm, deleteTerm
 * @param {string} record 变更的单项值
 */
const getNewValue = (data = {}, pos = '', type, record) => {
  if (!pos) {
    return record;
  }

  const arrPos = getArrPos(pos);
  const last = arrPos.length - 1;
  // 使用 immer 进行数据处理
  return produce(data, (draft: any) => {
    let prev = { data: draft, idx: 0 };
    // 暂存遍历到的当前条件组的数据
    let current = draft.children || [];
    // 根据 pos 遍历数据，pos 中的每一个数字代表它所在条件组的序号
    arrPos.forEach((strIdx, i) => {
      const idx = Number(strIdx);
      if (i === last) {
        switch (type) {
          case 'addTerm':
          case 'addGroup': // 加条件或条件组
            current.splice(idx + 1, 0, record);
            break;
          case 'deleteTerm': // 删除条件项
            current.splice(idx, 1);
            // 如果删除了组的最后一项，则删除整个组
            if (!current.length) {
              prev.data.splice(prev.idx, 1);
            }
            break;
          default: // 变更逻辑连接符或条件项内容
            current[idx] = record;
        }
      } else {
        prev = { data: current, idx };
        // 将下一个条件组的数据复制到 current
        current = (current[idx] && current[idx].children) || [];
      }
    });
  });
}

export default RelationTree;
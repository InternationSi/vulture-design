/*
 * @Author: sfy
 * @Date: 2022-12-15 20:34:08
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-15 22:54:37
 * @FilePath: /vulture-design/packages/vulture/src/components/condition-tree/components/RelationTerm/index.tsx
 * @Description: update here
 */
import { Select, Input } from 'antd';

const RelationTerm = ({ data, onChange }) => {
  const setOnChange = (params) => {

    if (typeof onChange === 'function') {
      // 执行传入的 onChange 回调，入参都是 { key: value } 格式
      onChange(params);
    }
  };

  const handleKeyChange = (val) => {
    setOnChange({ key: val });
  };

  const handleOpsChange = (val) => {
    setOnChange({ op: val });
  };

  const handleValueChange = (val) => {
    setOnChange({ value: val });
  };

  const { key, op, value } = data;
  return (
    <div className="term">
      <span className="element">
        <Select
          placeholder="请选择条件项"
          value={key}
          onChange={handleKeyChange}
          options={[
            {
              value: 'Key1',
              label: 'Key1',
            },
            {
              value: 'Key2',
              label: 'Key2',
            },
            {
              value: 'Key3',
              label: 'Key3',
            },
          ]}
        />

      </span>
      <span className="comparison">
        <Select placeholder="请选择关系符" value={op} onChange={handleOpsChange}

          options={[
            {
              value: '==',
              label: '等于',
            },
            {
              value: '!=',
              label: '不等于',
            },
            {
              value: '>',
              label: '大于',
            },
            {
              value: '>=',
              label: '大于等于',
            },
            {
              value: '<',
              label: '小于',
            },
            {
              value: '<=',
              label: '小于等于',
            },
          ]}
        />
      </span>
      <span className="value">
        <Input placeholder="请输入条件值" value={value} onChange={handleValueChange} />
      </span>
    </div>
  );
}

export default RelationTerm;

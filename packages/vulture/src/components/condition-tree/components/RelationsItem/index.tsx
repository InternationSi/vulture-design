/*
 * @Author: sfy
 * @Date: 2022-12-15 20:33:28
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-15 23:40:45
 * @FilePath: /vulture-design/packages/vulture/src/components/condition-tree/components/RelationsItem/index.tsx
 * @Description: update here
 */
import { Button } from 'antd';
import './index.scss'
function RelationItem({ data, pos, setElementTerm, onDeleteTerm, onTermChange }) {
  const handleDeleteTermClick = () => {
    if (typeof onDeleteTerm === 'function') {
      onDeleteTerm(pos, data);
    }
  }

  // 此 value 入参必须是 { key: value } 格式的
  const handleTermChange = (value) => {
    if (typeof onTermChange === 'function') {
      onTermChange(pos, { ...data, ...value });
    }
  };

  if (typeof setElementTerm !== 'function') {
    console.error('setElementTerm 属性必须设置，且必须是返回 ReactElement 的Function');
    return null;
  }

  return (
    <div className="vui-relation-item">
      {setElementTerm(data, pos, handleTermChange)}
      <Button onClick={handleDeleteTermClick} className="delete-term">
        删除
      </Button>
    </div>
  );
}

export default RelationItem;

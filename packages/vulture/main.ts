/*
 * @Author: sfy
 * @Date: 2022-12-06 00:01:39
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-07 22:02:59
 * @FilePath: /vulture-design/packages/vulture/main.ts
 * @Description: update here
 */
import register from 'preact-custom-element';
import {
  COMPONENTS_TAG,
  ConditionTreeGroup,
} from './src';

console.log(ConditionTreeGroup, 'ConditionTreeGroup');


register(ConditionTreeGroup.components,
  `${COMPONENTS_TAG}-${ConditionTreeGroup.displayName}`,
  ConditionTreeGroup.propsList,
  { shadow: false }
);


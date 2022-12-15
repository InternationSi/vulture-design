/*
 * @Author: sfy
 * @Date: 2022-12-06 00:01:39
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-15 20:16:22
 * @FilePath: /vulture-design/packages/vulture/main.ts
 * @Description: update here
 */
import register from 'preact-custom-element';
import {
  COMPONENTS_TAG,
  ConditionTreeGroup,
} from './src';


register(ConditionTreeGroup.components,
  `${COMPONENTS_TAG}-${ConditionTreeGroup.displayName}`,
  ConditionTreeGroup.propsList,
  { shadow: false }
);


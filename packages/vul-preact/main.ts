/*
 * @Author: sfy
 * @Date: 2022-12-06 00:01:39
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-16 22:21:10
 * @FilePath: /vulture-design/packages/vulture/main.ts
 * @Description: update here
 */
import register from 'preact-custom-element';
import {
  COMPONENTS_TAG,
  ConditionTreeGroup,
  ReactGraphGroup,
} from './src';


register(ConditionTreeGroup.components,
  `${COMPONENTS_TAG}-${ConditionTreeGroup.displayName}`,
  ConditionTreeGroup.propsList,
  { shadow: false }
);
register(ReactGraphGroup.components,
  `${COMPONENTS_TAG}-${ReactGraphGroup.displayName}`,
  ReactGraphGroup.propsList,
  { shadow: false }
);


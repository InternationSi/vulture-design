/*
 * @Author: sfy
 * @Date: 2022-12-06 00:01:39
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-06 00:11:48
 * @FilePath: /vulture-design/packages/utils/main.ts
 * @Description: update here
 */
import register from 'preact-custom-element';
import { Greeting } from './src/app';

register(Greeting, 'x-greeting', ['name'], { shadow: false });

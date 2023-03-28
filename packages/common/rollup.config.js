/*
 * @Author: sfy
 * @Date: 2023-03-28 19:19:24
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-28 22:50:32
 * @FilePath: /vulture-design/packages/common/rollup.config.js
 * @Description: update here
 */
import nodeResolve from "@rollup/plugin-node-resolve"
import commonjs from 'rollup-plugin-commonjs';
import css from "rollup-plugin-import-css";
export default {
  plugins: [nodeResolve(), css(), commonjs()],
  input :"./src/index.js",
  output:[
      // {
      //     format:"umd",
      //     name:"wang",
      //     file:"./dist/main.umd.js"
      // },
      // {
      //     format:"cjs",
      //     file:"./dist/main.cjs.js"
      // },
      // {
      //     format:"amd",
      //     file:"./dist/main.amd.js" 
      // },
      {
          format:"es",
          file:"./dist/index.es.js" 
      },
      // {
      //     format:"iife",
      //     file:"./dist/main.browser.js" 
      // }
  ]
}

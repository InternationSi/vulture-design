/*
 * @Author: sfy
 * @Date: 2022-12-04 22:30:47
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-04 22:50:49
 * @FilePath: /advance/packages/vulture/vite.config.ts
 * @Description: update here
 */
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: './main.ts',
      name: 'index',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd']
    },
  },
  
});
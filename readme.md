<!--
 * @Author: sfy
 * @Date: 2022-12-04 21:44:02
 * @LastEditors: sfy
 * @LastEditTime: 2023-03-28 21:59:25
 * @FilePath: /vulture-design/readme.md
 * @Description: update here
-->

启动项目
```
pnpm install
pnpm run dev
```

### 全局安装包
```
// 安装子包都依赖的包
pnpm add typescript -Dw
// 安装局部依赖
pnpm add lit -F @vuld/vulture
// 主包安装三个子包
pnpm install @vuld/vulture -w

// 互相安装依赖
pnpm i @test/utils -r --filter @test/ui

```

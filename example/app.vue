<!--
 * @Author: sfy
 * @Date: 2022-12-04 21:18:00
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-16 22:22:19
 * @FilePath: /vulture-design/example/app.vue
 * @Description: update here
-->
<template>
   <div>
    测试213
   </div>
   <vul-condition-tree :items="stepItems"></vul-condition-tree>
   <!-- <vul-react-graph></vul-react-graph> -->
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const description = 'This is sam';

const stepItems = ref([
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description,
      },
    ])
</script>
<style>
</style>
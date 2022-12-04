<!--
 * @Author: sfy
 * @Date: 2022-12-04 21:18:00
 * @LastEditors: sfy
 * @LastEditTime: 2022-12-04 22:54:16
 * @FilePath: /advance/example/app.vue
 * @Description: update here
-->
<template>
   <div>
    测试213
    <simple-greeting :name="name"></simple-greeting>
   </div>
   
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import '@vuld/vulture'
const name = ref('123')

</script>
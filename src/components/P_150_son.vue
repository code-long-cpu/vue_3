<script setup>

import gradson from "@/components/P-150_grandson.vue"
</script>

<template>
  <div class="son">我是子组件
    <gradson></gradson>
  </div>
</template>

<style scoped>
.son {
  border: solid 1px black;
  padding: 5px;
  background-color: rgb(244, 255, 127);

}
</style>
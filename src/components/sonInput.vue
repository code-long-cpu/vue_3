<script setup>
import { defineModel } from 'vue';
const zhi = defineModel()
</script>

<template>
  <div class="onInput">
    我是子组件:
    <input type="text" :value="zhi" @input="e => zhi = e.target.value">
  </div>
</template>

<style scoped>
.onInput {
  border: solid 1px black;
}
</style>
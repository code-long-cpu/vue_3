<script setup>
import { useCount } from '@/store/count'
const countStore = useCount()
</script>

<template>
  <div class="son">我是子组件(count.js)-{{ countStore.count }}-<button @click="countStore.subCount">-</button>

  </div>
</template>

<style scoped>
.son {
  border: solid 1px black;
  padding: 5px;
  background-color: rgb(244, 255, 127);

}
</style>
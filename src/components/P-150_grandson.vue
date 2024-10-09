<script setup>
import { inject } from 'vue'
const color = inject("theme-color")
const sunCount = inject("sunCount")
const sunGai = inject("sunGai")
const gaishuju = () => {
  sunGai(1000)
}

</script>

<template>
  <div class="gradson">我是孙组件-{{ color }}-{{ sunCount }}
    <button @click="gaishuju">改为1000</button>
  </div>

</template>

<style scoped>
.gradson {
  border: solid 1px black;
  background-color: aquamarine;
}
</style>
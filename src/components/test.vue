<script setup>
import { ref } from 'vue'

// ref的数据是相应式的，不用ref包裹的数据无法用函数计算并渲染
const count = ref(999);
const sayHi = () => {
  console.log("打招呼")
}
const add = () => {
  count.value++;
}

// 父组件拿到子组件的属性count和方法sayHi和add，用defineExpose定义
defineExpose({
  count,
  sayHi,
  add
})

</script>

<template>


  <div class="test">我是测试组件-{{ count }}
    <button @click="sayHi">打招呼</button>
    <button @click="add">加1</button>
    <br>
    <span>父组件拿到子组件的属性count和方法sayHi和add，用defineExpose定义</span>
  </div>


</template>

<style scoped>
.test {
  /* width: 150px; */
  border: solid 1px black;
  background-color: antiquewhite;
  /* display: inline-block */
}
</style>
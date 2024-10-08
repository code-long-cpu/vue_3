<!-- <script>
export default {
  setup() {
    console.log("Setup")
  },
  beforeCreate() {
    console.log("beforeCreate")

  },
}
</script> -->

<script setup>
import { reactive } from 'vue'
import { ref } from 'vue'
import { computed } from 'vue';

// setup入口文件：
let message = ref('hello vue')
const logMessage = () => {
  message.value = '我爱你'
  console.log(message)
}

// reactive()相应式对象：
const state = reactive({
  count: 100
})
const setCount = () => {
  state.count++
}

// ref()相应式对象：
const count_2 = ref(0)
const setCount_2 = () => {
  count_2.value++
}

// 计算属性computed：
const list = ref([1, 2, 3, 4, 5, 6, 7, 8])
const computedList = computed(() => {
  return list.value.filter(item => item > 4)
})
const addList = () => {
  list.value.push(list.value[list.value.length - 1] + 1)
}



</script>

<template>
  <hr>
  <h3>setup入口文件（咋修改state数据呢？只显示值）：</h3>
  <div>{{ message }}</div>
  <button @click="logMessage">setup</button>

  <hr>
  <h3>reactive()相应式对象（少用 ⚠️）：</h3>
  <div>{{ state.count }}</div>
  <button @click="setCount">reactive</button>

  <hr>
  <h3>ref()相应式对象（多用 👍🏻）：</h3>
  <div>{{ count_2 }}</div>
  <button @click="setCount_2">ref</button>

  <hr>
  <h3>计算属性computed：</h3>
  <div>原始数据：{{ list }}</div>
  <div>计算后数据：{{ computedList }}</div>
  <button @click="addList">addList</button>



</template>
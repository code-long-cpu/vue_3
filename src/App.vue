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
import { reactive, watch } from 'vue'
import { ref } from 'vue'
import { computed } from 'vue';
// 导入组件
import Son from '@/components/son.vue'

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


// ①监听函数watch-监听简单类型：
const count_4 = ref(0)
const watchCount_4 = () => {
  count_4.value++;
}
watch(count_4, (newValue, oldValue) => {
  console.log(`count_4老值为:${oldValue},count_4新值为:${newValue}`) //0 1 
})
// ②监听函数watch-deep监听复杂类型：
const userInfo = ref({
  name: 'zs',
  age: '18'
})
const watchuserInfo = () => {
  userInfo.value.age++;
}

// ③深度监听整个对象
watch(userInfo, (newValue, oldValue) => {
  console.log(oldValue, newValue)
  //{name: 'zs', age: 21}{name: 'zs', age: 21} 
}, {
  deep: true
})
//  ④深度监听对象某个属性
watch(() => userInfo.value.age, (newValue, oldValue) => {
  console.log(newValue, oldValue)//21 20 
})

// P148父子通信：
const money = ref(100)
const makeMoney = () => {
  money.value += 10;
}
const sonspend = (msg) => {
  money.value -= msg;
}

</script>

<template>
  <h2>VUE3组合式API</h2>
  <hr>
  <h3>P143setup入口文件（咋修改state数据呢？只显示值）：</h3>
  <div>{{ message }}</div>
  <button @click="logMessage">setup</button>

  <hr>
  <h3>P144reactive()相应式对象（少用 ⚠️）：</h3>
  <div>{{ state.count }}</div>
  <button @click="setCount">reactive</button>

  <hr>
  <h3>P144ref()相应式对象（多用 👍🏻）：</h3>
  <div>{{ count_2 }}</div>
  <button @click="setCount_2">ref</button>

  <hr>
  <h3>P145计算属性computed：</h3>
  <div>原始数据：{{ list }}</div>
  <div>计算后数据：{{ computedList }}</div>
  <button @click="addList">addList</button>

  <hr>
  <h3>P146监听函数watch：</h3>
  <div>原始数据：{{ count_4 }}</div>
  <div>监听数据：{{ userInfo }}</div>
  <button @click="watchCount_4">监听count_4</button>
  <button @click="watchuserInfo">监听userInfo</button>

  <hr>
  <h3>P148父子通信：</h3>
  <h4 class="father"> 父组件-父亲挣了{{ money }}元
    <button @click="makeMoney">再挣10元</button>
    <Son :son="money" @SonSpend="sonspend"></Son>
  </h4>


</template>

<style scoped>
.father {
  border: solid 1px black;
  padding: 5px;
}
</style>
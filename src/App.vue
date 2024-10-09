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
import { provide } from 'vue';
// 导入组件
import Son from '@/components/son.vue'
import test from '@/components/test.vue'
import son from '@/components/P_150_son.vue'
import sonInput from '@/components/sonInput.vue'

import son1Com from "@/components/son1Com.vue"
import son2Com from "@/components/son2Com.vue"

// P154Pinia的用法，相当于vuex
// 谁用谁导入
import { useCount } from '@/store/count'
const countStore = useCount()
// console.log(countStore)
import { useChannelStore } from '@/store/channel'
const useChannel = useChannelStore()
// useChannel.getList()

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

// ref()相应式对象✅：
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

// P149ref模板引用：获取dom和组件
const inp = ref(null)
const clickFn = () => {
  inp.value.focus()
}
// 获取组件
const com = ref(null)
const getCom = () => {
  console.log(com.value)         //获取组件
  console.log(com.value.count)  //获取组件属性count
  com.value.sayHi();            //调用组件方法sayHi
}

// P150组合式API-provide与inject，实现组件跨级通信
//  ①跨层传递普通数据
provide('theme-color', 'pink')
// ②跨层传递相应式数据 
const sunCount = ref(100)
provide('sunCount', sunCount)
const geiSun = () => {
  sunCount.value += 100;
}
// ✅写法
// function geiSun() {
//   setTimeout(function () {
//     sunCount.value += 100;
//   }, 2000)
// }
// ❌写法
// setTimeout(geiSun(), 2000)
// const geiSun = () => {
//   sunCount.value += 100;
// }

// ②子组件跨层传递方法
provide('sunGai', (newCount) => {
  sunCount.value = newCount
})

// P152defineModel input双向绑定
const zhi = ref('1234')


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
  <div class="father"> 父组件-父亲挣了{{ money }}元
    <button @click="makeMoney">再挣10元</button>
    <Son :son="money" @SonSpend="sonspend"></Son>
  </div>

  <hr>
  <h3>P149ref模板引用：获取dom和组件:</h3>
  <div>
    <input ref='inp' type="text">
    <button @click="clickFn">点击获取dom输入框并聚焦</button>
    <br>
    <test ref="com"></test>
    <button @click="getCom">获取组件（获取组件属性，调用组件方法）</button>
  </div>

  <hr>
  <h3>P150组合式API-provide与inject，实现组件跨级通信:</h3>
  <div class="father">我是父组件-给孙pink-
    <button @click="geiSun">给100</button>
    <!-- ①夸层传递普通数据 -->
    <!-- ②夸层传递相应式数据 -->
    <son></son>
  </div>

  <hr>
  <h3>P152defineModel input双向绑定</h3>
  <div class="father">
    <span>父亲的值为：{{ zhi }}</span>
    <sonInput v-model="zhi"></sonInput>
  </div>

  <hr>
  <h3>P154Pinia的用法，相当于vuex。哪个组件用哪个组件导入</h3>
  <div class="father">
    父亲的值为（count.js仓库）-{{ countStore.count }}-{{ countStore.msg }}
    <son1Com></son1Com>
    <son2Com></son2Com>
    <div class="father">
      父亲的异步请求（channel.js仓库）：<button @click="useChannel.getList">获取频道数据</button>
      <ul>
        <li v-for="item in useChannel.channelList" :key=item.id>{{ item.name }};</li>
      </ul>

    </div>
  </div>

</template>

<style scoped>
.father {
  border: solid 1px black;
  padding: 5px;
}

ul {
  margin: 0;
  padding: 0;

  li {
    padding: 0 5px;
    display: inline-block;
  }
}
</style>
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 定义store
// defineStore（仓库唯一标识，()=>{}）
export const useCount = defineStore('count', () => {
  // 声明数据state
  const count = ref(100)
  // 操作数据action
  const addCount = () => {
    count.value++
  }
  const subCount = () => {
    count.value--
  }

  // 计算属性getters
  // 箭头函数中一行函数体可以省return和{}；多行不行
  const double = computed(() =>
    count.value * 2
  )
  // 等价于✅
  // const double = computed(() =>
  //   {return count.value * 2}
  // )


  // 声明数据state-msg
  const msg = ref('hello pinia')

  return {
    count,
    addCount,
    subCount,
    double,
    msg
  }
}, {
  // 开启当前store持久化储存
  persist: true,
},)

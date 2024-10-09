import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useChannelStore = defineStore('channel', () => {
  // 定义state
  const channelList = ref([])
  // 操作state-action
  // async写在函数前(),不是变量前getList前
  const getList = async () => {
    const { data: { data } } = await axios({
      url: 'http://geek.itheima.net/v1_0/channels',
      method: 'GET',
    })
    channelList.value = data.channels
    console.log(data.channels)
  }
  // 计算state-getter

  return {
    channelList,
    getList
  }
})
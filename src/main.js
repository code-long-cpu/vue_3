import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'

const pinia = createPinia()   //创建vue实例

createApp(App).use(pinia.use(piniaPluginPersistedstate)).mount('#app') //创建根实例

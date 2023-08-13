import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import tips from '@/components/tips.vue'

// 创建应用实例
const app = createApp(App)

// 应用配置
app.config.errorHandler = (err) => {
    console.error(err)
    // TODO 错误上报
}

// 全局注册组件
app.component('my-tips', tips)

// 挂载应用
app.mount('#app')

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

// 导入页面组件
import HomePage from './views/HomePage.vue'
import Longmen from './views/Longmen.vue'
import Shaolin from './views/Shaolin.vue'
import Yuntai from './views/Yuntai.vue'
import Laojun from './views/Laojun.vue'

// 路由配置
const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/longmen', name: 'longmen', component: Longmen },
  { path: '/shaolin', name: 'shaolin', component: Shaolin },
  { path: '/yuntai', name: 'yuntai', component: Yuntai },
  { path: '/laojun', name: 'laojun', component: Laojun }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
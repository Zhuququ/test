import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 安装 ElementUI
Vue.use(ElementUI)

// 导入 echarts
import echarts from 'echarts'
// 绑定 echarts
Vue.prototype.$echarts = echarts

// 导入自定义api
import api from '@/assets/api/index'
// 绑定 api
Vue.prototype.$api = api

import '@/assets/icons/el-icons/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
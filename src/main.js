// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入全部组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// /* 加载hotcss响应式布局 */
import '@/plugin/hotcss.js'
import '@/plugin/iscroll.js'
// 公共样式***重置样式
import '@/style/common.scss'
import '@/style/mixin.scss'

// 导入全局样式
import './style/css/global.css'

// 导入mui样式，js
import './plugin/mui/css/mui.min.css'

// 按需导入的方式
// import { Button } from 'mint-ui'
// console.log(Button.name)//mt-button
Vue.use(MintUI)
Vue.use(ElementUI)

/* eslint-disable */
Vue.config.productionTip = false // disabled-eslint-line

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

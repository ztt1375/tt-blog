/**
 * @author
 * @file client端入口文件
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/style/index.scss'
import '@/assets/img/icon/iconfont'
import Vue from 'vue'
import App from '@/App'
import router from './router'
import store from './store'

//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

//设置不同请求域名的接口
axios.defaults.baseURL = 'http://localhost:3000'
//设置请求头的格式
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})

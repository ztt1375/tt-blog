/**
 * @author
 * @file client端入口文件
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/style/index.scss'
import Vue from 'vue'
import App from '@/App'
import router from './router'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})

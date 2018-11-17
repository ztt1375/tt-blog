/**
 * @author
 * @file admin端路由文件
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import List from '@/components/List'
import Tag from '@/components/Tag'
import ReadingList from '@/components/ReadingList'
import About from '@/components/About'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/login',
            component: Login
        },
        {
            path: '/lists',
            component: List
        },
        {
            path: '/tags',
            component: Tag
        },
        {
            path: '/readinglists',
            component: ReadingList
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '*',
            redirect: '/login'
        }
    ]
})
//使用 router.beforeEach 注册一个全局前置守卫：
/*当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。
每个守卫方法接收三个参数：
to: Route: 即将要进入的目标 路由对象

from: Route: 当前导航正要离开的路由

next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。

next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。

next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。

next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。*/
router.beforeEach((to, from, next) => {
    // redirect会重新进行路由守卫，next()不会
    if (localStorage.ashenToken) {
        axios.get(
                '/api/v1/tokens/check', {
                    headers: {
                        Authorization: `Bearer ${localStorage.ashenToken}`
                    }
                })
            .then(res => {
                // token验证通过
                const pathArr = ['/lists', '/tags', '/readinglists', '/about']
                if (pathArr.indexOf(to.path) === -1) {
                    next('lists')
                }
                else {
                    next()
                }
            })
            .catch(err => {
                // token验证不通过
                if (to.path !== '/login') {
                    next('login')
                }
                else {
                    next()
                }
            })
    }
    else {
        if (to.path !== '/login') {
            next('login')
        }
        else {
            next()
        }
    }
})

export default router

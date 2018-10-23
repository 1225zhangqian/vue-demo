import Vue from 'vue'
import Router from 'vue-router'
import toolswrap from '@/components/toolswrap'
import toolsList from '@/components/toolsList'
import demo from '@/components/demo'
import demo2 from '@/components/demo2'
import demoMsg from '@/components/demoMsg'
Vue.use(Router)

export default new Router({
  routes: [
    // 默认显示路由
    {
      path: '/',
      name: 'toolswrap',
      component: toolswrap
    },
    {
      path: '/toolswrap',
      name: 'toolswrap',
      component: toolswrap,
      // 定义子路由
      children: [
        {
          path: '/',
          component: toolsList
        },
        {
          path: '/toolsList',
          component: toolsList
        }
      ]
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/demoMsg',
      name: 'demoMsg',
      component: demoMsg
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
    // 重定向
    { path: '*', redirect: '/toolsgroup' }
  ]
})

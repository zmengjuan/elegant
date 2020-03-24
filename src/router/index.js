import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main/main'

//多个路由合并

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      meta: {
        name: 'Main',
      },
      component: Main,
    }
  ]
})

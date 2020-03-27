import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main/main.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Main',
    //   redirect: '/Main',
    //   meta: { name: 'Main', auth: true },
    //   component: Main,
    //   // children: allRoutes
    // },
    {
      path: '/',
      name: 'home',
      component: Main,
      children: [
        {
          path:'/logon',
          name:'logon',
          meta: {
            title:'人员设置'
          },
          component: () => import('../view/logon')
         },
         {
           path:'/elandes',
           name:'elandes',
           meta: {
            title:'纪律设置'
          },
           component: () => import('../view/Elandes')
         }

      ]
    },
    {
      path:'/proMessage',
      name:'proMessage',
      component:Main,
      children: [
        {
          path:'/aboutus',
           name:'aboutus',
           meta: {
             title:'管理设置'
           },
           component: () => import('../view/AboutUs')
          }
      ]
    }
  ]
})

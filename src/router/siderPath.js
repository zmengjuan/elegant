import Main from '../components/Main/main.vue'

export default [
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
             name:'elamdes',
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
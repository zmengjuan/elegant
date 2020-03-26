import Vue from 'vue'
import Router from 'vue-router'
import siderPath from './siderPath'


Vue.use(Router);

const router = new Router({
  siderPath,
  mode: 'history'
})

export default router
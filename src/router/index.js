import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/page/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/Recommend"
    },{
      path:"/Recommend",
      name:"Recommend",
      component:Recommend
    }
  ]
})

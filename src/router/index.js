import Vue from 'vue'
import Router from 'vue-router'
//const list = ()=>import('@/components/list')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:()=>import('../views/home/home')
    },
    {
      path:'/cat',
      component:()=>import('../views/cat/cat')
    },
    {
      path:'/cart',
      component:()=>import('../views/cart/cart')
    }

  ],
  mode:'history'
})

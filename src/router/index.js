import Vue from 'vue'
import Router from 'vue-router'
import homeRoute from './home'
import classify from './classify'
import cart from './cart'

import mineRoute from './mine'

Vue.use(Router)

const routes =[
    homeRoute,
    classify,
    cart,
    mineRoute,
    {
        path:'/',
        redirect:'/home'
      },
      {
        path:'**',
        redirect:'/home'
      },
   
]
export default new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes
})

import {createRouter, createWebHistory} from 'vue-router'

import Home from './components/Home'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Add from './components/crud/Add'
import Update from './components/crud/Update'

const routes = [
    {name:'Home',   path:'/',         component:Home},
    {name:'SignUp', path:'/sign-up',  component:Signup},
    {name:'Login',  path:'/login',    component:Login},
    {name:'Add',    path:'/add',      component:Add},
    {name:'Update', path:'/update/:id',   component:Update},
];

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router;
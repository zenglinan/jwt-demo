import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Center from './views/Center.vue'
import Register from './views/Register.vue'
import store from './store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/center',
    name: 'center',
    component: Center
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const needLoginList = ['/center']
router.beforeEach(async (to, from, next) => {
  if(store.state.username === '' && needLoginList.includes(to.path)){  // 防止刷新的时候，vuex状态丢失，使得登录状态丢失
    const r = await store.dispatch('verify')
      .then(token => localStorage.setItem('token', token))
      .catch(err => alert(err.msg))
  }
  if(to.path === '/login' || to.path === '/register'){
    if(store.state.username === ''){
      next()
    }else{
      next('/')
    }
  }else {
    next()
  }
})
export default router

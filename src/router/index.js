import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import Blog from '../views/Blog.vue'
import { useInfoStore } from '@/stores/info.js'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const infoStore = useInfoStore()
//   const isAuthorized = /* логика проверки авторизации, возможно добавить */

//   if (!isAuthorized && to.name === 'home') {
//     next({ name: 'auth' })
//   } else {
//     next()
//   }
// })

export default router

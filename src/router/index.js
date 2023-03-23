import { createRouter, createWebHistory } from 'vue-router'
import MemesView from '../views/MemesView.vue'

const routes = [
  {
    path: '/',
    name: 'meme',
    component: MemesView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import ContactsView from '../views/ContactsView.vue'
import HomeView from '../views/HomeView.vue'
import RatesView from '../views/RatesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/rates',
      name: 'rates',
      component: RatesView,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router

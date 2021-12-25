import { createRouter, createWebHistory } from "vue-router";

  const routes = [
  {
    path: '/',
    name: 'signup',
    component: () => import('../components/Registration.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
]
 
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router


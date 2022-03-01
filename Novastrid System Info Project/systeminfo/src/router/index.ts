import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Table from '../views/Table.vue'
import LayoutComponent from '../layouts/LayoutComponent.vue'
import AddEmployee from '../views/AddEmployee.vue'
import EditEmployee from '../views/EditEmployee.vue'
import Login from '../views/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
   path: "/login",
   name:"Login",
   component: Login
  },
  {
    path: '/',
    name: 'LayoutComponent',
    component: LayoutComponent,
    children:[
      {
        path: '/',
        name: 'Table',
        component: Table
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
          path: "/add",
          name: "AddEmployee",
          component: AddEmployee,
          props: true
      },
      {
        path: "/edit/:id",
        name: "EditEmployee",
        component: EditEmployee,
        props: true
      },
  ]
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = '' as any
 isAuthenticated = localStorage.getItem('loginDetails')
 console.log('isauthenticated',to.name)
 if(to.name !== 'Login' && !isAuthenticated){
  next('/login')
 }
if (to.name == 'Login' && isAuthenticated && isAuthenticated != '') 
next({name : 'Table'})
else next()
 })

export default router

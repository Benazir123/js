import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Table from '../views/Table.vue'
import LayoutComponent from '../layouts/LayoutComponent.vue'
import EmployeeCreate from '../views/EmployeeCreate.vue'
import EmployeeEdit from '../views/EmployeeEdit.vue'


const routes: Array<RouteRecordRaw> = [
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
          name: "EmployeeCreate",
          component: EmployeeCreate,
          props: true
      },
      {
        path: "/edit/:id",
        name: "edit",
        component: EmployeeEdit,
        props: true
      },
  ]
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

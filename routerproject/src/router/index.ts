import { createRouter, createWebHistory } from "vue-router";
import LayoutComponent from "../layouts/LayoutComponent.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Service from "../views/Service.vue";
import AddUser from "../views/AddUser.vue";
import ParentComponent from "@/components/ParentComponent.vue"
import ChildComponent from "@/components/ChildComponent.vue"

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/",
    name: "LayoutComponent",
    component: LayoutComponent,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
        props: true,
      },
      {
        path: "/about",
        name: "About",
        component: About,
        props: true,
      },
      {
        path: "/adduser",
        name: "AddUser",
        component: AddUser,
      },
      {
        path: "/parentcomponent",
        name: "ParentComponent",
        component: ParentComponent,
      },
      {
        path: "/childcomponent",
        name: "ChildComponent",
        component: ChildComponent,
      },
     ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !Login.storedValue) next({ name: 'Home' })
  else next()
})

router.afterEach((to, from) => {
  if(to.name == "Login") 
  else from 
})

export default router;

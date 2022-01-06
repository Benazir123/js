import { createRouter, createWebHistory } from "vue-router";
import LayoutComponent from "../layouts/LayoutComponent.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Service from "../views/Service.vue";

const routes = [
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

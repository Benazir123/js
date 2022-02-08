import { createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import LayoutComponent from "../layouts/LayoutComponent.vue";
import UserCreate from "../components/UserCreate.vue"

const routes = [
  {
    path: "/",
    name: "LayoutComponent",
    component: LayoutComponent,
    children:[
      {
        path: "/",
        name: "Home",
        component: Home,
        props: true
      },
      {
        path: "/add",
        name: "UserCreate",
        component: UserCreate,
        props: true
      },
      {
        path: "/about",
        name: "About",
        component: () =>import( "../views/About.vue"),
        props: true

      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

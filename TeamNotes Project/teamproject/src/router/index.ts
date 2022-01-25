import { createRouter, createWebHistory,} from "vue-router";
import Home from "../views/Home.vue";
import LayoutComponent from "../layouts/LayoutComponent.vue";
import About from "../views/About.vue"

const routes = [
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
    ]
  },
 ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;


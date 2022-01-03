import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import Test from "../components/Test.vue";
import Update from "../components/Update.vue";

const routes = [
  {
    path: "/",
    name: "Test",
    component: Test,
  },
  {
    path: "/update",
    name: "Update",
    component: Update,
  }
  // {
  //   path: "/about",
  //   name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory,} from "vue-router";
import Home from "../views/Home.vue";
import LayoutComponent from "../layouts/LayoutComponent.vue";
import About from "../views/About.vue"
import Login from "../views/Login.vue"

const routes = [
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
    ]
  },
 ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = '' as any
 isAuthenticated = localStorage.getItem("loginDetails")
 console.log('isauthenticated',to.name)
 if(to.name !== 'Login' && !isAuthenticated){
  next('/login')
 }
if (to.name == 'Login' && isAuthenticated && isAuthenticated != '') 
next({name : 'Home'})
else next()
 })


export default router;

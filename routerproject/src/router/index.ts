import { createRouter, createWebHistory } from "vue-router";
import LayoutComponent from "../layouts/LayoutComponent.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Service from "../views/Service.vue";
import AddUser from "../views/AddUser.vue";
import ParentComponent from "@/components/ParentComponent.vue"
import ChildComponent from "@/components/ChildComponent.vue"
import LiveSession from "../views/LiveSession.vue";
import Ticket from "../views/Ticket.vue";



// function guardMyroute(to: any, from: any, next: any)
// {
//  let isAuthenticated= false;
//  const loggedUser = localStorage.getItem('access_token')
//  console.log("getitem",loggedUser)
//  if(loggedUser && loggedUser !== '')
//      isAuthenticated = true;
//  else
//   isAuthenticated= false;
//   console.log("isauthenticated",isAuthenticated);
  
//  if(isAuthenticated) 
//  {
//   next('/'); // allow to enter route
//  } 
// //  else
// //  {
// //   next('/login'); // go to '/login';
// //  }
// }
// console.log("guardMyroute", guardMyroute)

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    // beforeEnter: guardMyroute,
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
      {
        path: "/livesession",
        name: "LiveSession",
        component: LiveSession,
      },
      {
        path: "/ticket",
        name: "Ticket",
        component: Ticket,
      },
     ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = '' as any
 isAuthenticated = localStorage.getItem('access_token')
 console.log('isauthenticated',to.name)
 if(to.name !== 'Login' && !isAuthenticated){
  next('/login')
 }
if (to.name == 'Login' && isAuthenticated && isAuthenticated != '') 
next({name : 'Home'})
else next()
 })

export default router;

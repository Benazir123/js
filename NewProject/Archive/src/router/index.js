import { createRouter, createWebHistory } from "vue-router";
// import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
// import { from } from "core-js/core/array";
import TableSystemInfo from "@/views/TableSystemInfo.vue";
import TableSystemMaster from "@/views/TableSystemMaster.vue";
import TableTeam from "@/views/TableTeam.vue";


const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/employee-system-info",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Tables,
  },
  {
    path: "/employee-system-info",
    name: "Employee",
    component: Tables,
  },
  {
    path: "/system-info-table",
    name: "Employee System Info",
    component: TableSystemInfo,
  },
  {
    path: "/system-master-table",
    name: "System Master",
    component: TableSystemMaster,
  },
  {
    path: "/team-table",
    name: "Team",
    component: TableTeam,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

// router.beforeEach((to, from, next) => {
//   let isAuthenticated = ''
//  isAuthenticated = localStorage.getItem('access_token')
//  console.log('isauthenticated',to.name)
//  if(to.name !== 'Sign In' && !isAuthenticated){
//   next('/Sign In')
//  }
// if (to.name == 'Sign In' && isAuthenticated && isAuthenticated != '') 
// next({name : '/'})
// else next()
//  })

export default router;

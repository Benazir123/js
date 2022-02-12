import { createRouter, createWebHistory} from "vue-router";
import LayoutComponent from "../layouts/LayoutComponent.vue";
import UserCreate from "../components/UserCreate.vue"
import UserList from "../components/UserList.vue"
import UserEdit from "../components/UserEdit.vue"
import ComponentA from "../components/ComponentA.vue"
import ComponentB from "../components/ComponentB.vue"
import Statestore from "../components/Statestore.vue"

const routes = [
  {
        path:"/componentA",
        name: "ComponentA",
        component: ComponentA,
        props:true
  },
  {
        path:"/componentB",
        name: "ComponentB",
        component: ComponentB,
        props: true,
   },
  {
    path:"/store",
    name:"Statestore",
    component:Statestore,
  },
  {
    path: "/",
    name: "LayoutComponent",
    component: LayoutComponent,
    children:[
      {
        path: "/",
        name: "UserCreate",
        component: UserCreate,
        props: true
      },
      {
        path: "/list",
        name: "list",
        component: UserList,
        props: true
      },
      {
        path: "/edit/:id",
        name: "edit",
        component: UserEdit,
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

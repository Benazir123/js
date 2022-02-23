<template>
  <div>
    <header class="LayoutComponent_header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">EngagementDetails</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/parentcomponent">Component</router-link>
          </li>
            <li class="nav-item">
            <router-link class="nav-link disabled" to="/livesession">LiveSession</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link disabled" to="/ticket">Ticket</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/tab">Tabs</router-link>
          </li>
           <li class="nav-item">
            <router-link class="nav-link" to="/login" @click="logOut()">Logout</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
   name:"Header",
   data(){
       let router = useRouter();
     return{
        router
     }
   },
   methods:{
      logOut(){
            localStorage.removeItem("access_token")
              this.router.push("/login")
      },
   }
}
</script>

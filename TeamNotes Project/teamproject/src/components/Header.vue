<template>
<div>
    <header class="LayoutComponent_header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
                  <!-- <li class="nav-item">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li> -->
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
            localStorage.removeItem("loginDetails")
              this.router.push("/login")
      },
   }
}
</script>

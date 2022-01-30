<!--<template>
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
                <li class="nav-item">
                  <router-link class="nav-link" to="/login" @click="logOut()">Logout</router-link>
                </li>
            </ul>
        </nav>
    </header>
</div>
</template>
-->
<template>
   <div class="d-flex">
    <div class= "sidebar">
     <ul class="sidebar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/login" @click="logOut()">Logout</router-link>
                </li>
      </ul>
    </div>
<br>
    <div class="container-fluid">
      <router-view/>
    </div>
</div>
</template>


<script>
import { useRouter } from 'vue-router';
import firebase from 'firebase'
export default {
   name:"Header",
   data(){
       let router = useRouter();
     return{
        router,
     }
   },
   methods:{
      logOut(){
            firebase.auth().signOut()
             localStorage.removeItem("loginDetails")
              this.router.push("/login")
      },
      
   }
}
</script>

<style scoped>
.sidebar{
  width:15%;
  height:100vh;
  text-decoration:none;
  background-color: black;
}
</style>

<template>
   <div class="d-flex">
    <div class= "sidebar">
      <h5 style="color: blue">
        Contents
      </h5>
     <ul class="sidebar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Table</router-link>
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
import { useRouter } from 'vue-router'
export default {
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

<style scoped>
.sidebar{
  width:15%;
  height:100vh;
  text-decoration:none;
  background-color: #222524
}

.container-fluid{
  background-color:#ffffff
}

</style>

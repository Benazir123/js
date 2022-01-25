<!--
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
-->

<template>
  <div>
    <section>
      <div id="myImage">
         <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  alt="" target="-blank">
      </div>
    </section>
     <aside class="right">
        <div class="sidebar">
          <Login/>
        </div>
      </aside>
  </div>
</template>

<script>
// import { defineComponent } from 'vue'
import Login from "../views/Login.vue"

export default{
  name:"Home",
  components:{
    Login
  }
}
</script>

<style scoped>
 img{
      width: 100%;
      height: 520px;
      align-items: center;
 }
section{
   float: left;
   width: 75%;
 }
.right{
    float: left;
    width: 25%;
 }
</style>

